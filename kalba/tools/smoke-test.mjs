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
let exResults = 0;
let learnerTexts = 0;
let prematureRejected = null;
const PASS_ARGS = {
  passed: true, score: 88, target_attempts: 9, target_correct: 8,
  criteria: [{ criterion: 'am/is/are', met: true, evidence: "I'm from Vilnius" }, { criterion: 'questions', met: true, evidence: 'Where are you from?' }],
  summary_lt: 'Puikiai prisistatei!', strengths_lt: ['Teisingai vartoji am/is/are'],
  mistakes: [{ wrong: 'I from Lithuania', correct: "I'm from Lithuania", note_lt: 'Nepamiršk „am“.' }], advice_lt: 'Pakartok klausimus su „Are you…?“',
};
await ctx.routeWebSocket(/generativelanguage\.googleapis\.com/, (ws) => {
  ws.onMessage((raw) => {
    const msg = JSON.parse(raw);
    sent.push(msg);
    const reply = (o) => ws.send(JSON.stringify(o));
    if (msg.setup) return reply({ setupComplete: {} });
    if (msg.realtimeInput && msg.realtimeInput.text) {
      const text = msg.realtimeInput.text;
      if (/start now/i.test(text)) {
        reply({ serverContent: { modelTurn: { parts: [{ inlineData: { mimeType: 'audio/pcm;rate=24000', data: 'AAAAAAAAAAA=' } }] }, outputTranscription: { text: "Hi! I'm Ema. What's your name?" } } });
        reply({ toolCall: { functionCalls: [{ id: 'c1', name: 'show_on_screen', args: { title: 'Pattern', lines: ["I'm Ona — Aš esu Ona"] } }] } });
        reply({ toolCall: { functionCalls: [{ id: 't1', name: 'show_theory', args: { part: 'table' } }] } });
        reply({ toolCall: { functionCalls: [{ id: 'e0', name: 'give_exercise', args: { type: 'choice', options: ['only one'] } }] } });
        reply({ toolCall: { functionCalls: [{ id: 'e1', name: 'give_exercise', args: { type: 'order', sentence: 'Where are you from?', translation_lt: 'Iš kur tu?', seconds: 30 } }] } });
        reply({ serverContent: { outputTranscription: { text: ' Take your time!' }, turnComplete: true } });
      } else if (/^\[EXERCISE RESULT\]/.test(text) && exResults === 0) {
        exResults++;
        reply({ serverContent: { outputTranscription: { text: 'Great job! Now write me a short message.' }, turnComplete: true } });
        reply({ toolCall: { functionCalls: [{ id: 'w1', name: 'give_exercise', args: { type: 'write', question: 'Write 2-3 sentences about yourself.', min_words: 5 } }] } });
      } else if (/^\[WRITING RESULT\]/.test(text)) {
        reply({ toolCall: { functionCalls: [{ id: 'c3', name: 'show_on_screen', args: { title: 'Corrected', lines: ["I'm Ona. I'm from Vilnius."] } }] } });
        reply({ serverContent: { outputTranscription: { text: 'Nice writing! Two quick tasks.' }, turnComplete: true } });
        reply({ toolCall: { functionCalls: [{ id: 'e2', name: 'give_exercise', args: { quiz_index: 1 } }] } });
      } else if (/^\[EXERCISE RESULT\]/.test(text)) {
        exResults++;
        if (exResults === 2) reply({ toolCall: { functionCalls: [{ id: 'e3', name: 'give_exercise', args: { quiz_index: 2 } }] } });
        reply({ serverContent: { outputTranscription: { text: exResults === 2 ? 'One more!' : 'Super! Now tell me about you.' }, turnComplete: true } });
      } else if (/^FINAL$/.test(text)) {
        reply({ toolCall: { functionCalls: [{ id: 'c4', name: 'complete_lesson', args: PASS_ARGS }] } });
        reply({ serverContent: { outputTranscription: { text: 'Well done!' }, turnComplete: true } });
      } else {
        learnerTexts++;
        if (learnerTexts === 1) {
          // Per anksti: programa turi atmesti (per mažai replikų / užduočių).
          reply({ toolCall: { functionCalls: [{ id: 'c2', name: 'complete_lesson', args: PASS_ARGS }] } });
        }
        reply({ serverContent: { outputTranscription: { text: `Nice (${learnerTexts}). Tell me more.` }, turnComplete: true } });
      }
    }
    if (msg.toolResponse && msg.toolResponse.functionResponses[0].id === 'c2') {
      const r = msg.toolResponse.functionResponses[0].response;
      prematureRejected = !!r.error;
    }
  });
});

// Imituotas nepriklausomas vertintojas (REST).
let judgeCalls = 0;
await page.route('**/models/gemini-3.8-flash:generateContent*', async (route) => {
  judgeCalls++;
  const body = JSON.parse(route.request().postData() || '{}');
  const promptText = body.contents[0].parts[0].text;
  if (!/Learner: /.test(promptText) || !/exercise "/.test(promptText)) fail('vertintojas negavo pokalbio ar užduočių');
  await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ passed: true, score: 84, target_attempts: 10, target_correct: 8, criteria: [{ criterion: 'am/is/are', met: true, evidence: "I'm a teacher" }], mistakes: [{ wrong: 'I live Kaunas', correct: 'I live in Kaunas', note_lt: 'Reikia „in“.' }], summary_lt: 'Gerai.', advice_lt: 'Daugiau klausimų.' }) }] } }] }) });
});

await page.goto(base);
await page.waitForSelector('.node');
const nodes = await page.locator('.node').count();
if (nodes < 50) fail(`per mažai pamokų: ${nodes}`);
const exams = await page.locator('.node.checkpoint').count();
if ((await page.locator('.node.locked').count()) !== nodes - 1 - exams) fail('turi būti atrakinta tik pirma pamoka (ir egzaminai iš anksto)');
const firstId = await page.locator('.node').first().getAttribute('data-id');
await shot('1-kelias');

// Užrakinta pamoka neatsidaro.
await page.locator('.node').nth(1).click();
await page.waitForSelector('.modal');
await page.click('[data-close]');

// Teorija ir pratimai.
await page.locator('.node').first().click();
// Pamoka atsidaro iškart su Ema; teorija – mygtuku pamokos viduje.
await page.waitForSelector('#start');
if (await page.locator('.steps').count()) fail('pamoka neturi būti skaidoma į atskirus žingsnius');
await page.click('#theory');
await page.waitForSelector('.modal .explain');
await shot('2-teorija');
await page.click('.modal [data-close]');
await page.goto(`${base}#/lesson/${firstId}/quiz`);
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
await page.fill('#model', 'gemini-3.8-live');
await page.locator('#model').dispatchEvent('change');

// Pokalbis.
await page.goto(`${base}#/lesson/${firstId}/talk`);
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
const exMsg = sent.find((m) => m.realtimeInput && /^\[EXERCISE RESULT\].*CORRECT/.test(m.realtimeInput.text || ''));
if (!exMsg) fail('užduoties rezultatas nenusiųstas Emai');
const errResp = sent.find((m) => m.toolResponse && m.toolResponse.functionResponses[0].id === 'e0');
if (!errResp || !errResp.toolResponse.functionResponses[0].response.error) fail('klaidinga užduotis negrąžino klaidos');
// Rašymo užduotis: Ema gauna tekstą ir parodo pataisytą variantą.
await page.waitForSelector('.inline-exercise textarea');
await page.fill('.inline-exercise textarea', 'I am Ona. I from Vilnius and I like coffee.');
await page.click('.inline-exercise .check');
await page.waitForFunction(() => [...document.querySelectorAll('.board')].some((b) => b.textContent.includes('Corrected')));
if (!sent.some((m) => m.realtimeInput && /^\[WRITING RESULT\].*I from Vilnius/.test(m.realtimeInput.text || ''))) fail('rašymo rezultatas nenusiųstas');
// Dar dvi užduotys ekrane (pasirenkame bet kurį atsakymą) – reikia ≥3 užduočių pamokai užskaityti.
const solveNewest = async () => {
  await page.waitForFunction(() => { const e = [...document.querySelectorAll('.inline-exercise')].pop(); return e && !e.querySelector('.feedback') && (e.querySelector('.option, .inp, .bank .word')); });
  const ex = page.locator('.inline-exercise').last();
  if (await ex.locator('.options .option').count()) await ex.locator('.options .option').first().click();
  else if (await ex.locator('.inp').count()) await ex.locator('.inp').fill('test');
  else while (await ex.locator('.bank .word:not(.used)').count()) await ex.locator('.bank .word:not(.used)').first().click();
  await ex.locator('.check').click();
};
await solveNewest();
await solveNewest();
await page.waitForSelector('#txt');
// Pirmas „complete_lesson“ ateina per anksti – programa turi jį atmesti ir Ema tęsia.
await page.fill('#txt', "Hi, I'm Ona. I'm from Lithuania.");
await page.click('#send');
await page.waitForFunction(() => [...document.querySelectorAll('.bubble.sys')].some((b) => /Ema tęsia pamoką/.test(b.textContent)));
if (prematureRejected !== true) fail('per ankstyvas complete_lesson turėjo būti atmestas');
if (await page.locator('.modal').count()) fail('rezultato langas pasirodė per anksti');
// Kalbame, kol pasiekiamas minimalus replikų skaičius.
const need = +(await page.locator('#turns').innerText()).match(/\/ (\d+)/)[1];
for (let k = 1; k < need + 1; k++) {
  await page.fill('#txt', `My sentence number ${k}. I'm a teacher and I live in Kaunas.`);
  await page.click('#send');
  await page.waitForFunction((n) => [...document.querySelectorAll('.bubble.tutor')].some((b) => b.textContent.includes(`Nice (${n})`)), k + 1);
}
await page.fill('#txt', 'FINAL');
await page.click('#send');
await page.waitForSelector('.modal', { timeout: 12000 }).catch(async () => {
  console.log('SYS:', await page.locator('.bubble.sys').allInnerTexts(), 'judgeCalls', judgeCalls);
  throw new Error('modal timeout');
});
const modalTxt = await page.locator('.modal').innerText();
if (!/8\/10 teisingai/.test(modalTxt)) fail('rezultate nėra vertintojo statistikos');
if (!/Nepriklausomas vertinimas .*išlaikyta/.test(modalTxt)) fail('rezultate nėra nepriklausomo vertinimo');
if (judgeCalls !== 1) fail(`vertintojas kviestas ${judgeCalls} k.`);
if (!/I live in Kaunas/.test(modalTxt)) fail('vertintojo klaidos nesujungtos');
await shot('4-rezultatas');
const setup = sent.find((m) => m.setup);
if (!setup || setup.setup.model !== 'models/gemini-3.8-live') fail('setup be teisingo modelio');
if (!setup.setup.tools[0].functionDeclarations.every((f) => f.behavior === 'BLOCKING')) fail('3.8 Live įrankiai turi būti BLOCKING');
if (!setup.setup.tools[0].functionDeclarations.some((f) => f.name === 'complete_lesson')) fail('nėra complete_lesson įrankio');
if (!sent.some((m) => m.toolResponse && m.toolResponse.functionResponses[0].id === 'c4' && m.toolResponse.functionResponses[0].response.result === 'saved')) fail('galutinis complete_lesson neužskaitytas');
if (!sent.some((m) => m.realtimeInput && m.realtimeInput.audio)) console.warn('WARN: mikrofono garsas nesiųstas (gali būti normalu be garso įrenginio)');
const txt = await page.locator('.modal').innerText();
if (!/Pamoka išmokta/.test(txt)) fail('rezultate nėra „Pamoka išmokta“');

// Po patvirtinimo atsirakina kita pamoka.
await page.click('#r-next');
await page.waitForSelector('#start');
await page.goto(`${base}#/path`);
await page.waitForSelector('.node');
if ((await page.locator('.node.locked').count()) !== nodes - 2 - exams) fail('po patvirtinimo neatsirakino kita pamoka');

// Pratybos (antra pamokos sesija): atskiras Emos scenarijus, rezultatas įrašomas kaip pratybos.
await page.goto(`${base}#/practice/${firstId}/drill`);
await page.click('#start');
await page.waitForSelector('#txt');
const drillSetup = sent.filter((m) => m.setup).pop();
if (!/PRACTICE SESSION/.test(drillSetup.setup.systemInstruction.parts[0].text)) fail('pratybos be savo scenarijaus');
await page.click('#assess'); // „Baigti sesiją“
await page.fill('#txt', 'FINAL');
await page.click('#send');
await page.waitForSelector('.modal', { timeout: 10000 });
if (!/Pratybos baigtos/.test(await page.locator('.modal').innerText())) fail('pratybų rezultatas neparodytas');
await shot('4c-pratybos');
await page.click('.modal [data-close]');
await page.goto(`${base}#/path`);
await page.waitForSelector('.plan');
if (!(await page.locator('.plan-item', { hasText: 'Pratybos' }).count())) fail('dienos plane nėra pratybų');
await shot('1b-planas');

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
