// Mikrofono garsą paverčia 16 kHz mono PCM16 gabalais, kurių laukia Gemini Live API.
// Dažnis mažinamas vidurkinant (paprastas filtras prieš „aliasing“).
class PcmRecorder extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this.target = (options.processorOptions && options.processorOptions.targetRate) || 16000;
    this.chunk = new Int16Array(800); // 50 ms
    this.n = 0;
    this.sum = 0;
    this.count = 0;
    this.t = 0;
    this.energy = 0;
  }

  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!ch) return true;
    for (let i = 0; i < ch.length; i++) {
      this.sum += ch[i];
      this.count++;
      this.t += this.target;
      if (this.t >= sampleRate) {
        this.t -= sampleRate;
        const v = Math.max(-1, Math.min(1, this.sum / this.count));
        this.sum = 0;
        this.count = 0;
        this.energy += v * v;
        this.chunk[this.n++] = v < 0 ? v * 0x8000 : v * 0x7fff;
        if (this.n === this.chunk.length) {
          const level = Math.sqrt(this.energy / this.n);
          this.port.postMessage({ pcm: this.chunk.buffer, level }, [this.chunk.buffer]);
          this.chunk = new Int16Array(800);
          this.n = 0;
          this.energy = 0;
        }
      }
    }
    return true;
  }
}

registerProcessor('pcm-recorder', PcmRecorder);
