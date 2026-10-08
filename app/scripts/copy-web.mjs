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
const envFile = new URL('../.env', import.meta.url);
const env = existsSync(envFile) ? readFileSync(envFile, 'utf8') : '';
const credential = (name) => {
  if (process.env[name]) return process.env[name];
  const raw = env.match(new RegExp(`^[\\t ]*(?:export[\\t ]+)?${name}[\\t ]*=[\\t ]*(.*)$`, 'm'))?.[1]?.trim() || '';
  if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) return raw.slice(1, -1);
  return raw.replace(/\s+#.*$/, '').trim();
};
const key = credential('GEMINI_API_KEY');
// Embed only after explicit authorization to share this key with the private app's recipients.
const openRouterKey = credential('EMBED_OPENROUTER_KEY') === '1' ? credential('OPENROUTER_API_KEY') : '';
writeFileSync(new URL('js/config.js', dst), `window.KALBEK_CONFIG = ${JSON.stringify({ geminiKey: key, openRouterKey })};\n`);
const html = readFileSync(new URL('index.html', dst), 'utf8');
writeFileSync(
  new URL('index.html', dst),
  html.replace('<script src="curriculum/course.js"></script>', '<script src="js/config.js"></script>\n<script src="curriculum/course.js"></script>')
);
console.log(`www/ atnaujinta iš ../kalba (${key ? 'Gemini raktas įdiegtas' : 'BE rakto – programėlė jo paprašys'})`);

console.log(`Vertintojas: ${openRouterKey ? 'OpenRouter nemokami modeliai (raktas įdiegtas)' : 'Gemini Flash'}`);
