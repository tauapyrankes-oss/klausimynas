// Emos balsas: 24 kHz PCM grojamas vienu nenutrūkstamu srautu (žiedinis buferis + tolydus perskaičiavimas
// į įrenginio dažnį). Atskiri gabaliukai nebesandūrauja – nebėra spragsėjimų iPhone'e.
const RATE = 24000;
const SIZE = RATE * 120; // iki 2 min. į priekį
const PREBUFFER = RATE * 0.12; // ~120 ms prieš pradedant groti (tinklo svyravimams)
const MAX_PREBUFFER = RATE * 0.4;

class PcmPlayer extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buf = new Float32Array(SIZE);
    this.w = 0; // įrašyta mėginių (absoliutus skaitiklis)
    this.r = 0; // skaitymo pozicija (trupmeninė)
    this.step = RATE / sampleRate;
    this.playing = false;
    this.gain = 0; // švelnus įjungimas/išjungimas be spragtelėjimų
    this.reportIn = 0;
    this.prebuffer = PREBUFFER;
    this.last = 0; // paskutinis mėginys – pritrūkus duomenų švelniai užgęsta, o ne nutrūksta
    this.port.onmessage = (e) => {
      if (e.data === 'clear') {
        this.r = this.w;
        this.playing = false;
        this.prebuffer = PREBUFFER;
        return;
      }
      if (e.data && typeof e.data.rate === 'number') {
        this.step = RATE / sampleRate * Math.max(0.85, Math.min(1.15, e.data.rate));
        return;
      }
      const d = e.data;
      for (let i = 0; i < d.length; i++) this.buf[(this.w + i) % SIZE] = d[i];
      this.w += d.length;
    };
  }

  process(_, outputs) {
    const out = outputs[0][0];
    let avail = this.w - this.r;
    if (!this.playing && avail >= this.prebuffer) this.playing = true;
    for (let i = 0; i < out.length; i++) {
      avail = this.w - this.r;
      const target = this.playing && avail > 2 ? 1 : 0;
      this.gain += (target - this.gain) * 0.02;
      if (this.playing && avail > 2) {
        const i0 = Math.floor(this.r);
        const f = this.r - i0;
        const a = this.buf[i0 % SIZE];
        const b = this.buf[(i0 + 1) % SIZE];
        this.last = (a + (b - a) * f) * this.gain;
        this.r += this.step;
      } else {
        if (this.playing) {
          this.playing = false; // pritrūko: palaukti ilgiau, kad kitą kartą nenutrūktų
          if (avail > 0) this.prebuffer = Math.min(MAX_PREBUFFER, this.prebuffer * 1.5);
        }
        this.last *= 0.995;
      }
      out[i] = this.last;
    }
    if (--this.reportIn <= 0) {
      this.reportIn = 8;
      this.port.postMessage(Math.max(0, this.w - this.r) / RATE);
    }
    return true;
  }
}

registerProcessor('pcm-player', PcmPlayer);
