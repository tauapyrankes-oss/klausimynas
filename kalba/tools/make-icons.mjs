// Sugeneruoja PNG ikonas iš icons/icon.svg naudojant Playwright Chromium.
// Paleidimas: node tools/make-icons.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const svg = readFileSync(new URL('../icons/icon.svg', import.meta.url), 'utf8');
const browser = await chromium.launch();
for (const size of [192, 512]) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(`<style>html,body{margin:0}svg{width:${size}px;height:${size}px;display:block}</style>${svg}`);
  await page.screenshot({ path: new URL(`../icons/icon-${size}.png`, import.meta.url).pathname, omitBackground: true });
}
await browser.close();
