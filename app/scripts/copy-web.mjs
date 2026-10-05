// Nukopijuoja PWA (../kalba) į www/ – tik tai, ko reikia programėlei (be įrankių, dokumentų ir testų).
import { cpSync, rmSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
const src = new URL('../../kalba/', import.meta.url);
const dst = new URL('../www/', import.meta.url);
rmSync(dst, { recursive: true, force: true });
mkdirSync(dst, { recursive: true });
for (const p of ['index.html', 'styles.css', 'manifest.webmanifest', 'js', 'curriculum', 'assets', 'icons']) {
  cpSync(new URL(p, src), new URL(p, dst), { recursive: true });
}

// Gemini raktas iš app/.env (GEMINI_API_KEY=...) arba aplinkos kintamojo – įrašomas tik į www/ (ne į GitHub).
let key = process.env.GEMINI_API_KEY || '';
const envFile = new URL('../.env', import.meta.url);
if (!key && existsSync(envFile)) {
  const m = readFileSync(envFile, 'utf8').match(/^\s*GEMINI_API_KEY\s*=\s*"?([^"\s]+)"?/m);
  if (m) key = m[1];
}
writeFileSync(new URL('js/config.js', dst), `window.KALBEK_CONFIG = ${JSON.stringify({ geminiKey: key })};\n`);
const html = readFileSync(new URL('index.html', dst), 'utf8');
writeFileSync(
  new URL('index.html', dst),
  html.replace('<script src="curriculum/course.js"></script>', '<script src="js/config.js"></script>\n<script src="curriculum/course.js"></script>')
);
console.log(`www/ atnaujinta iš ../kalba (${key ? 'Gemini raktas įdiegtas' : 'BE rakto – programėlė jo paprašys'})`);
