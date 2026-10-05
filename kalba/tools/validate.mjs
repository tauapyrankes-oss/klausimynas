// Patikrina kurso failus pagal docs/CURRICULUM_SCHEMA.md. Paleidimas: node tools/validate.mjs
import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';

const ctx = { window: {} };
vm.createContext(ctx);
const run = (rel) => vm.runInContext(readFileSync(new URL(`../curriculum/${rel}`, import.meta.url), 'utf8'), ctx, { filename: rel });
if (!existsSync(new URL("../curriculum/course.js", import.meta.url))) { console.log("course.js dar nesugeneruotas"); process.exit(0); }
run("course.js");
const syl = JSON.parse(readFileSync(new URL('../docs/syllabus.json', import.meta.url), 'utf8'));
const missing = [];
const levels = ctx.window.COURSE.levels.map((L) => ({
  ...L,
  lessons: L.units.flatMap((u) => {
    if (!existsSync(new URL(`../curriculum/${u.file}`, import.meta.url))) {
      missing.push(u.id);
      return [];
    }
    run(u.file);
    const unit = (ctx.window.UNITS || {})[u.id];
    if (!unit) throw new Error(`${u.file}: nėra window.UNITS["${u.id}"]`);
    const got = unit.lessons.map((x) => x.id).join();
    if (got !== u.lessons.join()) throw new Error(`${u.id}: pamokų id neatitinka syllabus.json\n  yra:    ${got}\n  reikia: ${u.lessons}`);
    return unit.lessons;
  }),
}));
const sylKinds = Object.fromEntries(syl.levels.flatMap((l) => l.units.flatMap((u) => u.lessons.map((x) => [x.id, x.kind]))));
const KINDS = ['grammar', 'vocabulary', 'functional', 'skills', 'pronunciation', 'review', 'checkpoint'];
const errors = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`);
const norm = (s) => String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^\p{L}\p{N}\s]/gu, '').replace(/\s+/g, ' ').trim();
const ids = new Set();
let total = 0;

for (const level of levels) {
  for (const k of ['id', 'name', 'title', 'description']) if (!level[k]) err(level.id, `nėra ${k}`);
  level.lessons.forEach((l, i) => {
    total++;
    const id = l.id || `${level.id}#${i}`;
    if (ids.has(id)) err(id, 'pasikartojantis id');
    ids.add(id);
    if (!id.startsWith(`${level.id}-`)) err(id, 'id neatitinka lygio');
    if (!['lesson', 'checkpoint'].includes(l.type)) err(id, `type ${l.type}`);
    if (l.type === 'checkpoint' && i !== level.lessons.length - 1) err(id, 'checkpoint turi būti paskutinis');
    if (!KINDS.includes(l.kind)) err(id, `kind ${l.kind}`);
    if (sylKinds[id] && l.kind !== sylKinds[id]) err(id, `kind ${l.kind} ≠ syllabus ${sylKinds[id]}`);
    if ((l.kind === 'checkpoint') !== (l.type === 'checkpoint')) err(id, 'checkpoint kind/type');
    if (l.reading) {
      const r = l.reading;
      const words = String(r.text || '').split(/\s+/).length;
      if (!r.title || words < 60 || words > 450) err(id, `reading tekstas ${words} žodž.`);
      if (!Array.isArray(r.questions) || r.questions.length < 2) err(id, 'reading be klausimų');
    }
    if (l.kind === 'skills' && !l.reading) err(id, 'skills pamokai reikia reading');
    for (const k of ['icon', 'title', 'titleEn']) if (!l[k]) err(id, `nėra ${k}`);
    if (!Array.isArray(l.canDo) || !l.canDo.length) err(id, 'canDo');
    const g = l.grammar || {};
    if (!g.title || !Array.isArray(g.explanation) || !g.explanation.length) err(id, 'grammar');
    if (g.table && !g.table.every((r) => Array.isArray(r) && r.length === g.table[0].length)) err(id, 'lentelės stulpeliai');
    for (const e of g.examples || []) if (!e.en || !e.lt) err(id, 'example');
    if (!['review', 'checkpoint'].includes(l.kind) && (!l.vocab || l.vocab.length < 6)) err(id, 'per mažai žodžių');
    for (const v of [...(l.vocab || []), ...(l.phrases || [])]) if (!v.en || !v.lt) err(id, 'vocab/phrase be en/lt');
    if (!Array.isArray(l.quiz) || l.quiz.length < 4) err(id, 'per mažai pratimų');
    for (const q of [...(l.quiz || []), ...((l.reading && l.reading.questions) || [])]) {
      if (q.type === 'choice') {
        if (!q.q || !Array.isArray(q.options) || !(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) err(id, `choice: ${q.q}`);
        if (new Set(q.options.map(norm)).size !== q.options.length) err(id, `pasikartojantys variantai: ${q.q}`);
      } else if (q.type === 'input') {
        const a = Array.isArray(q.answer) ? q.answer : [q.answer];
        if (!q.q || !a.length || a.some((x) => !norm(x))) err(id, `input: ${q.q}`);
      } else if (q.type === 'order') {
        const w = (q.words || []).map(norm).sort().join(' ');
        const a = norm(q.answer).split(' ').sort().join(' ');
        if (w !== a) err(id, `order: "${q.answer}" ≠ [${q.words}]`);
      } else err(id, `nežinomas pratimo tipas ${q.type}`);
    }
    const s = l.speaking || {};
    if (!s.scenario || !(s.tasks || []).length || !(s.successCriteria || []).length || !(s.minLearnerTurns > 0)) err(id, 'speaking');
    if (l.type === 'checkpoint' && s.minLearnerTurns < 12) err(id, 'egzaminui minLearnerTurns ≥ 12');
  });
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
if (missing.length) console.log(`Dar neparašyti skyriai (${missing.length}): ${missing.join(', ')}`);
console.log(`OK: ${levels.length} lygiai, ${total} pamokos parašytos`);
