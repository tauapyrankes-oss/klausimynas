// Naršyklės testas: kelias, teorija, pratimai, sprintas ir pokalbis su IMITUOTU Gemini Live serveriu.
// Paleidimas: node tools/smoke-test.mjs [ekrano-nuotraukų-aplankas]
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const shots = process.argv[2];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = createServer(async (req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  try {
    const body = await readFile(join(root, p.endsWith('/') ? `${p}index.html` : p));
    res.writeHead(200, { 'content-type': types[extname(p)] || 'text/html' });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end();
  }
}).listen(0);
const base = `http://localhost:${server.address().port}/`;

const fail = (m) => {
  console.error('FAIL:', m);
  process.exitCode = 1;
};
const browser = await chromium.launch({ args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, permissions: ['microphone'] });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => { errors.push(e.message); if (process.env.DEBUG) console.log('PAGEERR', e.message); });
const shot = async (name) => shots && page.screenshot({ path: `${shots}/${name}.png` });

// Imituotas Gemini Live serveris.
const sent = [];
await ctx.routeWebSocket(/generativelanguage\.googleapis\.com/, (ws) => {
  ws.onMessage((raw) => {
    const msg = JSON.parse(raw);
    sent.push(msg);
    const reply = (o) => ws.send(JSON.stringify(o));
    if (msg.setup) return reply({ setupComplete: {} });
    if (msg.clientContent) {
      const text = msg.clientContent.turns[0].parts[0].text;
      if (/start now/i.test(text)) {
        reply({ serverContent: { modelTurn: { parts: [{ inlineData: { mimeType: 'audio/pcm;rate=24000', data: 'AAAAAAAAAAA=' } }] }, outputTranscription: { text: "Hi! I'm Ema. What's your name?" } } });
        reply({ toolCall: { functionCalls: [{ id: 'c1', name: 'show_on_screen', args: { title: 'Pattern', lines: ["I'm Ona — Aš esu Ona"] } }] } });
        reply({ toolCall: { functionCalls: [{ id: 't1', name: 'show_theory', args: { part: 'table' } }] } });
        reply({ toolCall: { functionCalls: [{ id: 'e0', name: 'give_exercise', args: { type: 'choice', options: ['only one'] } }] } });
        reply({ toolCall: { functionCalls: [{ id: 'e1', name: 'give_exercise', args: { type: 'order', sentence: 'Where are you from?', translation_lt: 'Iš kur tu?', seconds: 30 } }] } });
        reply({ serverContent: { outputTranscription: { text: ' Take your time!' }, turnComplete: true } });
      } else if (/^\[EXERCISE RESULT\]/.test(text)) {
        reply({ serverContent: { outputTranscription: { text: 'Great job! Now tell me about you.' }, turnComplete: true } });
      } else {
        reply({ serverContent: { inputTranscription: { text: '' } } });
        reply({ toolCall: { functionCalls: [{ id: 'c2', name: 'complete_lesson', args: { passed: true, score: 88, summary_lt: 'Puikiai prisistatei!', strengths_lt: ['Teisingai vartoji am/is/are'], mistakes: [{ wrong: 'I from Lithuania', correct: "I'm from Lithuania", note_lt: 'Nepamiršk „am“.' }], advice_lt: 'Pakartok klausimus su „Are you…?“' } }] } });
        reply({ serverContent: { outputTranscription: { text: 'Well done!' }, turnComplete: true } });
      }
    }
  });
});

await page.goto(base);
await page.waitForSelector('.node');
const nodes = await page.locator('.node').count();
if (nodes !== 54) fail(`tikėtasi 54 pamokų, rasta ${nodes}`);
if ((await page.locator('.node.locked').count()) !== 53) fail('turi būti atrakinta tik pirma pamoka');
await shot('1-kelias');

// Užrakinta pamoka neatsidaro.
await page.locator('.node').nth(1).click();
await page.waitForSelector('.modal');
await page.click('[data-close]');

// Teorija ir pratimai.
await page.locator('.node').first().click();
await page.waitForSelector('.explain');
await shot('2-teorija');
await page.click('#quiz');
await page.waitForSelector('.quiz-q');
for (let k = 0; k < 20 && (await page.locator('.check').count()); k++) {
  if (await page.locator('.match').count()) {
    // Sujungiame poras pagal data-k.
    const ks = await page.locator('.match [data-side="en"]').evaluateAll((els) => els.map((e) => e.dataset.k));
    for (const key of ks) {
      await page.click(`.match [data-side="en"][data-k="${key}"]`);
      await page.click(`.match [data-side="lt"][data-k="${key}"]`);
    }
  } else if (await page.locator('.options .option').count()) await page.locator('.options .option').first().click();
  else if (await page.locator('.inp').count()) await page.fill('.inp', 'test');
  else while (await page.locator('.bank .word:not(.used)').count()) await page.locator('.bank .word:not(.used)').first().click();
  if (k === 1) await shot('3-pratimai');
  if (process.env.DEBUG) console.log(k, await page.locator('.quiz-q').innerText().catch(() => '-'), await page.locator('.check').innerText());
  if ((await page.locator('.check').innerText()) === 'Tikrinti') await page.click('.check');
  await page.click('.check');
}
await page.waitForSelector('#go');

// Nustatymai.
await page.goto(`${base}#/settings`);
await page.fill('#key', 'test-key');
await page.locator('#key').dispatchEvent('change');
await page.fill('#model', 'gemini-test-live');
await page.locator('#model').dispatchEvent('change');

// Pokalbis.
await page.goto(`${base}#/lesson/a1plus-01/talk`);
await page.click('#start');
await page.waitForSelector('.bubble.tutor');
await page.waitForSelector('.board');
await page.waitForSelector('.theory-inline .gtable');
// Užduotis pokalbio viduryje: sudėliojame teisingai.
await page.waitForSelector('.inline-exercise .bank .word');
if ((await page.locator('.inline-exercise').count()) !== 1) fail('neteisinga užduotis turėjo būti atmesta');
for (const w of ['Where', 'are', 'you', 'from']) {
  const variants = [w, w.toLowerCase()];
  for (const v of variants) {
    const b = page.locator('.inline-exercise .bank .word:not(.used)', { hasText: new RegExp(`^${v}$`) });
    if (await b.count()) { await b.first().click(); break; }
  }
}
await shot('4a-uzduotis-pokalbyje');
await page.click('.inline-exercise .check');
await page.waitForSelector('.inline-exercise .feedback.right');
await page.waitForFunction(() => document.querySelectorAll('.bubble.tutor').length >= 2);
await shot('4b-po-uzduoties');
const exMsg = sent.find((m) => m.clientContent && /^\[EXERCISE RESULT\].*CORRECT/.test(m.clientContent.turns[0].parts[0].text));
if (!exMsg) fail('užduoties rezultatas nenusiųstas Emai');
const errResp = sent.find((m) => m.toolResponse && m.toolResponse.functionResponses[0].id === 'e0');
if (!errResp || !errResp.toolResponse.functionResponses[0].response.error) fail('klaidinga užduotis negrąžino klaidos');
await page.waitForSelector('#txt');
await page.fill('#txt', "Hi, I'm Ona. I'm from Lithuania.");
await page.click('#send');
await page.waitForSelector('.modal', { timeout: 10000 });
await shot('4-rezultatas');
const setup = sent.find((m) => m.setup);
if (!setup || setup.setup.model !== 'models/gemini-test-live') fail('setup be teisingo modelio');
if (!setup.setup.tools[0].functionDeclarations.some((f) => f.name === 'complete_lesson')) fail('nėra complete_lesson įrankio');
if (!sent.some((m) => m.toolResponse && m.toolResponse.functionResponses[0].id === 'c2')) fail('negautas toolResponse');
if (!sent.some((m) => m.realtimeInput && m.realtimeInput.audio)) console.warn('WARN: mikrofono garsas nesiųstas (gali būti normalu be garso įrenginio)');
const txt = await page.locator('.modal').innerText();
if (!/Pamoka išmokta/.test(txt)) fail('rezultate nėra „Pamoka išmokta“');

// Po patvirtinimo atsirakina kita pamoka.
await page.click('#r-next');
await page.waitForSelector('#start');
await page.goto(`${base}#/path`);
await page.waitForSelector('.node');
if ((await page.locator('.node.locked').count()) !== 52) fail('po patvirtinimo neatsirakino kita pamoka');

// Sprintas.
await page.goto(`${base}#/sprint`);
await page.click('#go');
await page.fill('#inp', 'xyz');
await page.press('#inp', 'Enter');
await shot('5-sprintas');

await page.goto(`${base}#/stats`);
await page.waitForSelector('.stats');
await shot('6-pazanga');
await page.goto(`${base}#/talk`);
await shot('7-pokalbis');

if (errors.length) fail(`JS klaidos: ${errors.join(' | ')}`);
await browser.close();
server.close();
if (!process.exitCode) console.log('OK: smoke test praėjo');
