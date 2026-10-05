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
  async start(ctx) {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
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
    this.next = 0;
    this.sources = new Set();
    this.muted = false;
  }

  // Kviesti iš vartotojo paspaudimo, kad iOS/Android leistų groti garsą.
  ensure() {
    if (!this.ctx) {
      this.ctx = new AudioContext(); // aparatūros dažnis; 24 kHz buferius naršyklė perskaičiuoja pati
      this.gain = this.ctx.createGain();
      this.gain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  setMuted(m) {
    this.muted = m;
    if (this.gain) this.gain.gain.value = m ? 0 : 1;
  }

  play(b64) {
    this.ensure();
    const bytes = base64ToBytes(b64);
    const pcm = new Int16Array(bytes.buffer, 0, bytes.length >> 1);
    const buf = this.ctx.createBuffer(1, pcm.length, this.rate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < pcm.length; i++) ch[i] = pcm[i] / 0x8000;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.connect(this.gain);
    const now = this.ctx.currentTime;
    if (this.next < now + 0.03) this.next = now + 0.06;
    src.start(this.next);
    this.next += buf.duration;
    this.sources.add(src);
    src.onended = () => this.sources.delete(src);
  }

  get playing() {
    return !!this.ctx && this.ctx.state === 'running' && this.next > this.ctx.currentTime + 0.05;
  }

  stop() {
    for (const s of this.sources) {
      try { s.stop(); } catch (_) {}
    }
    this.sources.clear();
    this.next = 0;
  }

  close() {
    this.stop();
    this.ctx && this.ctx.close().catch(() => {});
    this.ctx = null;
  }
}
