// Bendros pagalbinės funkcijos.

export const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Kurso tekstuose leidžiame tik <b>, <i>, <code>, <br>.
export const rich = (s) => esc(s).replace(/&lt;(\/?)(b|i|code|br)&gt;/g, '<$1$2>');

export const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

export const shuffle = (a) => {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

export function speak(text, rate = 0.9) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  u.voice = voices.find((v) => v.lang === 'en-GB') || voices.find((v) => v.lang.startsWith('en')) || null;
  u.lang = u.voice ? u.voice.lang : 'en-GB';
  u.rate = rate;
  speechSynthesis.speak(u);
}
