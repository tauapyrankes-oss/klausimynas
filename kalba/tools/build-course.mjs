// Iš docs/syllabus.json sugeneruoja curriculum/course.js (lygių ir skyrių sąrašas + šaltiniai).
// Paleidimas: node tools/build-course.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const syl = JSON.parse(readFileSync(new URL('../docs/syllabus.json', import.meta.url), 'utf8'));
const course = {
  sources: Object.fromEntries((syl.sources || []).map((s) => [s.id, { title: s.title, url: s.url }])),
  levels: syl.levels.map((l) => ({
    id: l.id,
    name: l.name,
    title: l.title,
    description: l.description,
    units: l.units.map((u) => ({
      id: u.id,
      title: u.title,
      titleEn: u.titleEn,
      file: `${l.id}/${u.id}.js`,
      lessons: u.lessons.map((x) => x.id),
    })),
  })),
};
writeFileSync(
  new URL('../curriculum/course.js', import.meta.url),
  `// SUGENERUOTA iš docs/syllabus.json – nekeisk ranka (node tools/build-course.mjs).\nwindow.COURSE = ${JSON.stringify(course, null, 1)};\n`
);
console.log(`course.js: ${course.levels.length} lygiai, ${course.levels.reduce((n, l) => n + l.units.length, 0)} skyriai`);
