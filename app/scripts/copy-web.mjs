// Nukopijuoja PWA (../kalba) į www/ – tik tai, ko reikia programėlei (be įrankių, dokumentų ir testų).
import { cpSync, rmSync, mkdirSync } from 'node:fs';
const src = new URL('../../kalba/', import.meta.url);
const dst = new URL('../www/', import.meta.url);
rmSync(dst, { recursive: true, force: true });
mkdirSync(dst, { recursive: true });
for (const p of ['index.html', 'styles.css', 'manifest.webmanifest', 'js', 'curriculum', 'assets', 'icons']) {
  cpSync(new URL(p, src), new URL(p, dst), { recursive: true });
}
console.log('www/ atnaujinta iš ../kalba');
