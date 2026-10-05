// Pažanga ir nustatymai saugomi naršyklėje (localStorage). Galima eksportuoti/importuoti JSON.

const PROGRESS_KEY = 'kalba.progress.v1';
const SETTINGS_KEY = 'kalba.settings.v1';
const REVIEW_DAYS = [1, 3, 7, 14, 30, 60];

const DEFAULT_SETTINGS = {
  apiKey: '',
  model: '',
  voice: 'Kore',
  micMode: 'auto', // auto | headphones | tap
  pace: 'auto', // auto (pagal lygį) | slow | normal
  ltHelp: 'auto', // auto (pagal lygį) | much | some | little
  name: '',
  sfx: 'on',
  reminder: '19:00', // tik native programėlėje
};

function read(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v && typeof v === 'object' ? v : fallback;
  } catch (_) {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {}
}

function emptyProgress() {
  return { lessons: {}, xp: 0, streak: { count: 0, last: '' }, mistakes: [], speakingTurns: 0, words: {} };
}

export const settings = { ...DEFAULT_SETTINGS, ...read(SETTINGS_KEY, {}) };
// Migracija v2: anksčiau numatytasis „some“ būdavo išsaugomas kartu su raktu – pereiname į „auto“ (pagal lygį).
if (!settings.v2) {
  if (settings.ltHelp === 'some') settings.ltHelp = 'auto';
  if (settings.pace === 'slow') settings.pace = 'auto';
  settings.v2 = true;
  write(SETTINGS_KEY, settings);
}
export function saveSettings(patch) {
  Object.assign(settings, patch);
  write(SETTINGS_KEY, settings);
}

export let progress = { ...emptyProgress(), ...read(PROGRESS_KEY, {}) };
function saveProgress() {
  write(PROGRESS_KEY, progress);
}

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function touchStreak() {
  const t = today();
  const s = progress.streak;
  if (s.last === t) return;
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yest = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`;
  s.count = s.last === yest ? s.count + 1 : 1;
  s.last = t;
}

export function streakCount() {
  const s = progress.streak;
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yest = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`;
  return s.last === today() || s.last === yest ? s.count : 0;
}

export function lessonState(id) {
  return progress.lessons[id] || null;
}

export function recordQuiz(id, correct, total) {
  const l = (progress.lessons[id] = progress.lessons[id] || {});
  l.quizBest = Math.max(l.quizBest || 0, Math.round((correct / total) * 100));
  progress.xp += correct * 2;
  touchStreak();
  saveProgress();
}

export function recordExercise(ok) {
  if (ok) progress.xp += 2;
  touchStreak();
  saveProgress();
}

export function recordTalk() {
  progress.talkLast = today();
  saveProgress();
}

export function recordSpeakingTurn() {
  progress.speakingTurns = (progress.speakingTurns || 0) + 1;
  saveProgress();
}

// Rezultatą įrašo TIK AI mokytojo „complete_lesson“ iškvietimas.
export function recordResult(id, result) {
  const l = (progress.lessons[id] = progress.lessons[id] || {});
  const wasPassed = !!l.passed;
  l.attempts = (l.attempts || 0) + 1;
  l.last = { ...result, date: today() };
  if (result.passed) {
    l.bestScore = Math.max(l.bestScore || 0, result.score || 0);
    if (wasPassed) l.reviews = (l.reviews || 0) + 1;
    else l.reviews = 0;
    l.passed = true;
    l.passedOn = today();
    progress.xp += Math.round((result.score || 60) / 2) + (wasPassed ? 0 : 20);
  }
  for (const m of result.mistakes || []) {
    if (m && m.correct) progress.mistakes.unshift({ ...m, lesson: id, date: today() });
  }
  progress.mistakes = progress.mistakes.slice(0, 60);
  touchStreak();
  saveProgress();
}

// Grąžina true, jei tai naujas rekordas.
export function recordSprint(score) {
  progress.sprintLast = today();
  const best = score > (progress.sprintBest || 0);
  if (best) progress.sprintBest = score;
  progress.xp += score;
  if (score > 0) touchStreak();
  saveProgress();
  return best;
}

export function stars(id) {
  const l = progress.lessons[id];
  if (!l || !l.passed) return 0;
  return l.bestScore >= 90 ? 3 : l.bestScore >= 75 ? 2 : 1;
}

// Kartojimas su didėjančiais intervalais: 1, 3, 7, 14, 30, 60 d.
export function isDue(id) {
  const l = progress.lessons[id];
  if (!l || !l.passed || !l.passedOn) return false;
  const days = REVIEW_DAYS[Math.min(l.reviews || 0, REVIEW_DAYS.length - 1)];
  const due = new Date(l.passedOn);
  due.setDate(due.getDate() + days);
  return due <= new Date(today());
}

export function exportData() {
  return JSON.stringify({ app: 'kalbek', version: 1, progress, settings: { ...settings, apiKey: '' } }, null, 2);
}

export function importData(text) {
  const data = JSON.parse(text);
  if (!data || data.app !== 'kalbek' || !data.progress) throw new Error('Netinkamas failas');
  progress = { ...emptyProgress(), ...data.progress };
  saveProgress();
}

export function resetProgress() {
  progress = emptyProgress();
  saveProgress();
}

// Ankstesnės pamokos, pakartotos naujoje pamokoje, laikomos pakartotomis (intervalas ilgėja).
export function markReviewed(ids) {
  for (const id of ids) {
    const l = progress.lessons[id];
    if (l && l.passed && isDue(id)) {
      l.reviews = (l.reviews || 0) + 1;
      l.passedOn = today();
    }
  }
  saveProgress();
}

// ---------- Žodžių kartojimas (Leitnerio dėžutės) ----------
const WORD_DAYS = [0, 1, 3, 7, 14, 30, 60];
function addDays(n) {
  const d = new Date(today());
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}
export function wordState(en) {
  return (progress.words || {})[en] || null;
}
export function isWordDue(en) {
  const w = wordState(en);
  return !!w && w.due <= today();
}
export function recordWord(en, ok) {
  progress.words = progress.words || {};
  const w = progress.words[en] || { box: 0 };
  w.box = ok ? Math.min(w.box + 1, WORD_DAYS.length - 1) : 1;
  w.due = ok ? addDays(WORD_DAYS[w.box]) : today();
  progress.words[en] = w;
  saveProgress();
}
