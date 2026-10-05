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

export class MicRecorder {
  constructor({ onChunk, onLevel }) {
    this.onChunk = onChunk;
    this.onLevel = onLevel;
    this.ctx = null;
  }

  // ctx – bendras AudioContext, sukurtas paspaudimo metu (iPhone kitaip jį palieka sustabdytą ir mikrofonas „tyli“).
  // echo=false – su ausinėmis: be aido slopinimo iPhone'as negadina garso kokybės.
  async start(ctx, { echo = true } = {}) {
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
  }

  // Kviesti iš vartotojo paspaudimo, kad iOS/Android leistų groti garsą.
  ensure() {
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
          for (const f of this.pending) this.node.port.postMessage(f, [f.buffer]);
          this.pending = [];
        });
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  setMuted(m) {
    if (this.gain) this.gain.gain.value = m ? 0 : 1;
  }

  play(b64) {
    this.ensure();
    const bytes = base64ToBytes(b64);
    const pcm = new Int16Array(bytes.buffer, 0, bytes.length >> 1);
    const f = new Float32Array(pcm.length);
    for (let i = 0; i < pcm.length; i++) f[i] = pcm[i] / 0x8000;
    this.lastAudio = performance.now();
    if (this.node) this.node.port.postMessage(f, [f.buffer]);
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
    if (this.node) this.node.port.postMessage('clear');
  }

  close() {
    this.stop();
    this.ctx && this.ctx.close().catch(() => {});
    this.ctx = null;
    this.node = null;
  }
}
