// Iš ../kalba/icons/icon.svg sugeneruoja assets/icon-only.png (1024) ir assets/splash.png (2732) @capacitor/assets įrankiui.
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const svg = readFileSync(new URL('../../kalba/icons/icon.svg', import.meta.url), 'utf8');
const b = await chromium.launch();
const shot = async (w, h, html, out) => {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.setContent(`<style>html,body{margin:0;width:${w}px;height:${h}px}</style>${html}`);
  await p.screenshot({ path: new URL(out, import.meta.url).pathname });
};
await shot(1024, 1024, svg.replace('<svg ', '<svg style="width:1024px;height:1024px;display:block" '), '../assets/icon-only.png');
await shot(2732, 2732, `<div style="width:2732px;height:2732px;background:#f6f5fb;display:grid;place-items:center">${svg.replace('<svg ', '<svg style="width:700px;height:700px;border-radius:150px" ')}</div>`, '../assets/splash.png');
await b.close();
console.log('assets/icon-only.png, assets/splash.png');
