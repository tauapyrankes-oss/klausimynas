import Foundation
import AVFoundation
import Capacitor

/// One native, full-duplex engine. PCM stays 16 kHz inbound and 24 kHz outbound.
/// All engine/converter state is owned by audioQueue; the realtime tap only copies its buffer.
@objc(AudioBridgePlugin)
public class AudioBridgePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "AudioBridgePlugin"
    public let jsName = "AudioBridge"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "prepare", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "startCapture", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stopCapture", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "play", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "clear", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "mute", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "close", returnType: CAPPluginReturnPromise),
    ]
    private let audioQueue = DispatchQueue(label: "lt.kalbek.audio", qos: .userInitiated)
    private var engine: AVAudioEngine?
    private var volumeObservation: NSKeyValueObservation?
    private var speakerMuted = false
    private var output: AVAudioPlayerNode?
    private var converter: AVAudioConverter?
    private var captureFormat: AVAudioFormat?
    private var recording = false
    private var echo = true
    private var captureGeneration = 0
    private var playbackGeneration = 0
    private var pendingFrames = 0
    private var pcm = Data()
    private let playbackFormat = AVAudioFormat(commonFormat: .pcmFormatFloat32, sampleRate: 24_000, channels: 1, interleaved: false)!
    private let sendFormat = AVAudioFormat(commonFormat: .pcmFormatInt16, sampleRate: 16_000, channels: 1, interleaved: false)!

    private func ensureEngine(echo requested: Bool? = nil) throws {
        let session = AVAudioSession.sharedInstance()
        if engine == nil || engine?.isRunning != true || (requested != nil && requested != echo) {
            try session.setCategory(.playAndRecord, mode: .default, options: [.defaultToSpeaker, .allowBluetoothHFP])
            try session.setActive(true)
        }
        if engine == nil {
            let e = AVAudioEngine()
            let p = AVAudioPlayerNode()
            echo = false
            e.isAutoShutdownEnabled = false
            e.attach(p)
            e.connect(p, to: e.mainMixerNode, format: playbackFormat)
            engine = e
            output = p
            volumeObservation = session.observe(\.outputVolume, options: [.initial, .new]) { [weak self] _, _ in
                guard let self else { return }
                self.audioQueue.async { self.applyOutputVolume() }
            }
            applyOutputVolume()
        }
        if let requested, requested != echo {
            engine?.stop()
            try engine?.inputNode.setVoiceProcessingEnabled(requested)
            echo = requested
        }
        if let engine, !engine.isRunning {
            engine.prepare()
            try engine.start()
        }
    }

    private func info() -> [String: Any] {
        let s = AVAudioSession.sharedInstance()
        return ["sampleRate": s.sampleRate, "running": engine?.isRunning ?? false,
                "input": s.currentRoute.inputs.first?.portName ?? "iPhone microphone",
                "output": s.currentRoute.outputs.first?.portType.rawValue ?? "",
                "echoCancellation": echo, "inputMuted": engine?.inputNode.isVoiceProcessingInputMuted ?? false]
    }

    private func playbackState() {
        let state: [String: Any] = ["playing": pendingFrames > 0, "buffered": Double(pendingFrames) / 24_000]
        DispatchQueue.main.async { [weak self] in self?.notifyListeners("playback", data: state) }
    }

    @objc func prepare(_ call: CAPPluginCall) {
        audioQueue.async {
            do { try self.ensureEngine(); call.resolve(self.info()) }
            catch { call.reject("iOS audio engine: \(error.localizedDescription)") }
        }
    }

    @objc func startCapture(_ call: CAPPluginCall) {
        audioQueue.async {
            self.stopRecording()
            let token = self.captureGeneration
            let begin = {
                self.audioQueue.async {
                    guard token == self.captureGeneration else {
                        call.reject("Microphone request cancelled", "AbortError")
                        return
                    }
                    do {
                        try self.ensureEngine(echo: call.getBool("echo") ?? true)
                        guard let engine = self.engine else { throw NSError(domain: "KalbekAudio", code: 1) }
                        engine.stop()
                        let input = engine.inputNode
                        let format = input.outputFormat(forBus: 0)
                        guard format.sampleRate > 0, format.channelCount > 0,
                              let converter = AVAudioConverter(from: format, to: self.sendFormat) else {
                            call.reject("iPhone microphone format is unavailable")
                            return
                        }
                        self.converter = converter
                        self.captureFormat = format
                        self.pcm.removeAll(keepingCapacity: true)
                        self.recording = true
                        input.installTap(onBus: 0, bufferSize: 1024, format: format) { [weak plugin = self] buffer, _ in
                            guard let self = plugin, let copy = AVAudioPCMBuffer(pcmFormat: buffer.format, frameCapacity: buffer.frameLength) else { return }
                            copy.frameLength = buffer.frameLength
                            var rawEnergy = 0.0
                            if let channel = buffer.floatChannelData?[0] {
                                for i in 0..<Int(buffer.frameLength) { rawEnergy += Double(channel[i] * channel[i]) }
                            }
                            let rawLevel = sqrt(rawEnergy / Double(max(1, buffer.frameLength)))
                            let src = UnsafeMutableAudioBufferListPointer(buffer.mutableAudioBufferList)
                            let dst = UnsafeMutableAudioBufferListPointer(copy.mutableAudioBufferList)
                            for i in 0..<min(src.count, dst.count) {
                                if let source = src[i].mData, let target = dst[i].mData {
                                    memcpy(target, source, Int(min(src[i].mDataByteSize, dst[i].mDataByteSize)))
                                }
                            }
                            self.audioQueue.async { self.consume(copy, generation: token, rawLevel: rawLevel) }
                        }
                        engine.prepare()
                        try engine.start()
                        call.resolve(self.info())
                    } catch { call.reject("iOS microphone: \(error.localizedDescription)") }
                }
            }
            switch AVAudioApplication.shared.recordPermission {
            case .granted: begin()
            case .denied: call.reject("Microphone permission denied", "NotAllowedError")
            default:
                AVAudioApplication.requestRecordPermission { allowed in
                    if allowed { begin() } else { call.reject("Microphone permission denied", "NotAllowedError") }
                }
            }
        }
    }

    private func consume(_ input: AVAudioPCMBuffer, generation: Int, rawLevel: Double) {
        guard recording, generation == captureGeneration, let converter else { return }
        let capacity = AVAudioFrameCount(ceil(Double(input.frameLength) * 16_000 / input.format.sampleRate) + 64)
        guard let converted = AVAudioPCMBuffer(pcmFormat: sendFormat, frameCapacity: capacity) else { return }
        var supplied = false
        var error: NSError?
        converter.convert(to: converted, error: &error) { _, status in
            if supplied { status.pointee = .noDataNow; return nil }
            supplied = true
            status.pointee = .haveData
            return input
        }
        guard error == nil, converted.frameLength > 0, let samples = converted.int16ChannelData?[0] else { return }
        pcm.append(Data(bytes: samples, count: Int(converted.frameLength) * MemoryLayout<Int16>.size))
        // A fixed 50 ms block matches the existing Gemini and microphone-meter contract.
        while pcm.count >= 1600 {
            let block = Data(pcm.prefix(1600))
            pcm.removeFirst(1600)
            var energy = 0.0
            block.withUnsafeBytes { raw in
                for i in stride(from: 0, to: block.count, by: 2) {
                    let value = Double(Int16(littleEndian: raw.loadUnaligned(fromByteOffset: i, as: Int16.self))) / 32_768
                    energy += value * value
                }
            }
            let payload: [String: Any] = ["pcm": block.base64EncodedString(), "level": sqrt(energy / 800), "rawLevel": rawLevel]
            DispatchQueue.main.async { [weak self] in self?.notifyListeners("audioChunk", data: payload) }
        }
    }

    private func stopRecording() {
        captureGeneration += 1
        if recording { engine?.inputNode.removeTap(onBus: 0) }
        recording = false
        converter = nil
        pcm.removeAll(keepingCapacity: true)
    }

    @objc func stopCapture(_ call: CAPPluginCall) {
        audioQueue.async { self.stopRecording(); call.resolve() }
    }

    @objc func play(_ call: CAPPluginCall) {
        guard let encoded = call.getString("pcm"), let bytes = Data(base64Encoded: encoded), bytes.count % 2 == 0 else {
            call.reject("Invalid PCM16 audio")
            return
        }
        audioQueue.async {
            do {
                try self.ensureEngine()
                let frames = bytes.count / 2
                guard frames > 0, frames <= 240_000,
                      let buffer = AVAudioPCMBuffer(pcmFormat: self.playbackFormat, frameCapacity: AVAudioFrameCount(frames)),
                      let samples = buffer.floatChannelData?[0], let output = self.output else {
                    call.reject("Invalid audio block size")
                    return
                }
                buffer.frameLength = AVAudioFrameCount(frames)
                bytes.withUnsafeBytes { raw in
                    for i in 0..<frames {
                        samples[i] = Float(Int16(littleEndian: raw.loadUnaligned(fromByteOffset: i * 2, as: Int16.self))) / 32_768
                    }
                }
                self.pendingFrames += frames
                let generation = self.playbackGeneration
                output.scheduleBuffer(buffer, completionCallbackType: .dataPlayedBack) { [weak self] _ in
                    guard let self else { return }
                    self.audioQueue.async {
                        guard generation == self.playbackGeneration else { return }
                        self.pendingFrames = max(0, self.pendingFrames - frames)
                        self.playbackState()
                    }
                }
                if !output.isPlaying { output.play() }
                self.playbackState()
                call.resolve()
            } catch { call.reject("iOS playback: \(error.localizedDescription)") }
        }
    }

    private func clearPlayback() {
        playbackGeneration += 1
        output?.stop()
        pendingFrames = 0
        playbackState()
    }
    @objc func clear(_ call: CAPPluginCall) {
        audioQueue.async { self.clearPlayback(); call.resolve() }
    }
    private func applyOutputVolume() {
        // Voice processing can retain an audible minimum. App mute always silences PCM;
        // an actual zero system volume must also silence our player.
        output?.volume = speakerMuted || AVAudioSession.sharedInstance().outputVolume <= 0.001 ? 0 : 1
    }
    @objc func mute(_ call: CAPPluginCall) {
        audioQueue.async {
            self.speakerMuted = call.getBool("muted") == true
            self.applyOutputVolume()
            call.resolve()
        }
    }
    @objc func close(_ call: CAPPluginCall) {
        audioQueue.async {
            self.stopRecording()
            self.clearPlayback()
            self.engine?.stop()
            self.engine = nil
            self.output = nil
            self.volumeObservation = nil
            self.speakerMuted = false
            try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
            call.resolve()
        }
    }
}
