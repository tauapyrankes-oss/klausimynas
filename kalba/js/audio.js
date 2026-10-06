// Mikrofonas (16 kHz PCM16 → Gemini) ir garsiakalbis (24 kHz PCM16 ← Gemini).

export function bytesToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(s);
}

export function base64ToBytes(b64) {
  const s = atob(b64);
  const bytes = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i);
  return bytes;
}

// Native iOS uses AVAudioEngine, avoiding WKWebView's concurrent worklet/capture path.
const nativeAudio = () => {
  const cap = window.Capacitor;
  return cap?.isNativePlatform?.() && cap.getPlatform?.() === 'ios' ? cap.Plugins?.AudioBridge : null;
};

export class MicRecorder {
  constructor({ onChunk, onLevel }) {
    this.onChunk = onChunk;
    this.onLevel = onLevel;
    this.ctx = null;
  }

  // ctx – bendras AudioContext, sukurtas paspaudimo metu (iPhone kitaip jį palieka sustabdytą ir mikrofonas „tyli“).
  // echo=false – su ausinėmis: be aido slopinimo iPhone'as negadina garso kokybės.
  async start(ctx, { echo = true } = {}) {
    this.native = nativeAudio();
    this.stopped = false;
    if (this.native) {
      this.ctx = ctx;
      this.listener = await this.native.addListener('audioChunk', (data) => {
        if (this.stopped) return;
        const bytes = base64ToBytes(data.pcm);
        this.rawLevel = Math.max(this.rawLevel || 0, data.rawLevel || 0);
        this.onLevel?.(data.level);
        this.onChunk(bytes.buffer);
      });
      try {
        if (this.stopped) { await this.listener.remove(); return; }
        const info = await this.native.startCapture({ echo });
        if (this.stopped) { await this.native.stopCapture(); return; }
        this.inputMuted = info.inputMuted;
        this.stream = {
          getAudioTracks: () => [{ label: `${info.input} (native iOS)`, getSettings: () => ({ sampleRate: info.sampleRate, echoCancellation: info.echoCancellation }) }],
        };
        if (this.ctx) { this.ctx.sampleRate = info.sampleRate; this.ctx.state = info.running ? 'running' : 'suspended'; }
        return;
      } catch (error) {
        await this.listener.remove();
        if (error.code === 'NotAllowedError') error.name = 'NotAllowedError';
        throw error;
      }
    }
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: echo, noiseSuppression: true, autoGainControl: true },
    });
    this.ownCtx = !ctx;
    this.ctx = ctx || new AudioContext();
    if (!this.ctx.__pcmWorklet) {
      await this.ctx.audioWorklet.addModule(new URL('./pcm-worklet.js', import.meta.url));
      this.ctx.__pcmWorklet = true;
    }
    this.source = this.ctx.createMediaStreamSource(this.stream);
    this.node = new AudioWorkletNode(this.ctx, 'pcm-recorder', { processorOptions: { targetRate: 16000 } });
    this.node.port.onmessage = (e) => {
      this.onLevel && this.onLevel(e.data.level);
      this.onChunk(e.data.pcm);
    };
    // Worklet'as turi būti prijungtas prie išvesties, kad naršyklė jį „suktų“; garsas nutildytas.
    this.mute = this.ctx.createGain();
    this.mute.gain.value = 0;
    this.source.connect(this.node).connect(this.mute).connect(this.ctx.destination);
    if (this.ctx.state !== 'running') await this.ctx.resume().catch(() => {});
  }

  stop() {
    this.stopped = true;
    if (this.native) {
      this.listener?.remove();
      this.native.stopCapture().catch(() => {});
      this.stream = null;
      this.ctx = null;
      return;
    }
    this.stream && this.stream.getTracks().forEach((t) => t.stop());
    try {
      this.source && this.source.disconnect();
      this.node && this.node.disconnect();
      this.mute && this.mute.disconnect();
    } catch (_) {}
    if (this.ownCtx && this.ctx) this.ctx.close().catch(() => {});
    this.ctx = null;
    this.stream = null;
  }
}

export class PcmPlayer {
  constructor(rate = 24000) {
    this.rate = rate;
    this.ctx = null;
    this.node = null;
    this.pending = [];
    this.buffered = 0; // sekundės, likusios groti (pranešama iš worklet'o)
    this.lastAudio = 0;
    this.playbackRate = 1;
    this.level = 0;
  }

  // Kviesti iš vartotojo paspaudimo, kad iOS/Android leistų groti garsą.
  ensure() {
    const bridge = nativeAudio();
    if (bridge) {
      if (!this.ctx) {
        this.native = bridge;
        this.closed = false;
        const context = { sampleRate: 0, state: 'suspended', native: true };
        this.ctx = context;
        context.resume = () => this.ready.then(() => bridge.prepare()).then((info) => { context.state = info.running ? 'running' : 'suspended'; });
        this.ready = Promise.resolve(bridge.addListener('playback', (state) => {
          if (!this.closed) this.buffered = state.buffered;
        })).then(async (listener) => {
          this.listener = listener;
          if (this.closed) { await listener.remove(); return; }
          const info = await bridge.prepare();
          if (this.closed) { await bridge.close(); return; }
          await bridge.setRate?.({ rate: this.playbackRate });
          context.sampleRate = info.sampleRate;
          context.state = info.running ? 'running' : 'suspended';
        });
      }
      return;
    }
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.gain = this.ctx.createGain();
      this.gain.connect(this.ctx.destination);
      this.ready = this.ctx.audioWorklet
        .addModule(new URL('./pcm-player-worklet.js', import.meta.url))
        .then(() => {
          this.node = new AudioWorkletNode(this.ctx, 'pcm-player', { outputChannelCount: [1] });
          this.node.port.onmessage = (e) => (this.buffered = e.data);
          this.node.connect(this.gain);
          this.node.port.postMessage({ rate: this.playbackRate });
          for (const f of this.pending) this.node.port.postMessage(f, [f.buffer]);
          this.pending = [];
        });
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  setRate(rate) {
    this.playbackRate = Math.max(0.85, Math.min(1.15, Number(rate) || 1));
    if (this.native) this.ready.then(() => !this.closed && this.native.setRate?.({ rate: this.playbackRate })).catch(() => {});
    else this.node?.port.postMessage({ rate: this.playbackRate });
  }

  setMuted(m) {
    if (this.native) { this.native.mute({ muted: m }).catch(() => {}); return; }
    if (this.gain) this.gain.gain.value = m ? 0 : 1;
  }

  play(b64) {
    if (this.closed) return;
    this.ensure();
    const bytes = base64ToBytes(b64);
    const pcm = new Int16Array(bytes.buffer, 0, bytes.length >> 1);
    const f = new Float32Array(pcm.length);
    let sum = 0;
    for (let i = 0; i < pcm.length; i++) {
      f[i] = pcm[i] / 0x8000;
      sum += f[i] * f[i];
    }
    // Garso lygis (RMS) – bangoms ekrane; švelniai išlyginamas.
    const rms = Math.sqrt(sum / (pcm.length || 1));
    this.level = this.level * 0.5 + rms * 0.5;
    this.lastAudio = performance.now();
    if (this.native) {
      this.buffered += f.length / this.rate;
      this.ready.then(() => !this.closed && this.native.play({ pcm: b64 })).catch(() => { this.buffered = 0; });
    } else if (this.node) this.node.port.postMessage(f, [f.buffer]);
    else this.pending.push(f);
  }

  // Ar Ema dar kalba (yra negrotų mėginių arba garsas ką tik atėjo).
  get playing() {
    if (!this.ctx || this.ctx.state !== 'running') return false;
    return this.buffered > 0.02 || this.pending.length > 0 || performance.now() - this.lastAudio < 250;
  }

  stop() {
    this.pending = [];
    this.buffered = 0;
    this.lastAudio = 0;
    if (this.native) this.native.clear().catch(() => {});
    else if (this.node) this.node.port.postMessage('clear');
  }

  close() {
    this.closed = true;
    this.stop();
    if (this.native) {
      this.listener?.remove();
      this.native.close().catch(() => {});
      if (this.ctx) this.ctx.state = 'closed';
      this.ctx = null;
      return;
    }
    this.ctx && this.ctx.close().catch(() => {});
    this.ctx = null;
    this.node = null;
  }
}
