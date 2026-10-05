# Kalbėk! – instrukcijos AI agentams (Codex, Claude)

Anglų kalbos kalbėjimo programėlė (PWA) lietuvei: A1+ → B1. Balso mokytoja „Ema“ veikia per
**Gemini Live API** (WebSocket, `BidiGenerateContent`) tiesiai iš naršyklės su vartotojo API raktu.

## Struktūra
- `index.html` – karkasas; krauna `curriculum/*.js` (paprasti skriptai) ir `js/app.js` (ES modulis).
- `curriculum/<lygis>.js` – kursas, schema: `docs/CURRICULUM_SCHEMA.md`. Pamokų tvarka = atrakinimo tvarka.
- `js/app.js` – UI ir maršrutai (`#/path`, `#/lesson/<id>/<learn|quiz|talk>`, `#/talk`, `#/sprint`, `#/stats`, `#/settings`).
- `js/live.js` – Gemini Live klientas, Live modelių radimas (`listLiveModels`) ir nepriklausomas vertintojas
  `judgeLesson` (Gemini 3.8 Flash per REST peržiūri visą pokalbį; pamoka užskaitoma tik sutikus abiem). Egzaminams – `gemini-3.8-live-extended-thinking`.
- `js/audio.js`, `js/pcm-worklet.js` – mikrofonas 16 kHz PCM16 → API; grojimas 24 kHz PCM16.
- `js/prompt.js` – Emos sistemos instrukcijos ir įrankiai: `complete_lesson` (vienintelis būdas
  pažymėti pamoką išmokta), `give_exercise` (užduotys ekrane, įskaitant rašymą), `show_theory`, `show_on_screen`.
- Kartojimas tarp pamokų: `reviewPack()` faile `js/app.js`; žodžių Leitnerio dėžutės – `js/store.js`. Metodika – `docs/RESEARCH.md`.
- `js/store.js` – pažanga `localStorage` (`kalba.progress.v1`), nustatymai, kartojimo intervalai.
- `sw.js` – talpykla (keisk `VERSION` keisdamas failus). `codex/` – užduotys vaizdiniams ištekliams.

## Taisyklės
- Be build žingsnio ir be priklausomybių – grynas HTML/CSS/JS, kad veiktų GitHub Pages ir iPhone Safari.
- Pamoka atrakinama TIK kai AI iškviečia `complete_lesson` su `passed: true` IR programa patvirtina saitus
  (min. replikų, ≥3 užduotys, ≥6 bandymai, ≥75 % tikslumas, visi kriterijai) – `js/app.js` `complete_lesson` apdorojimas. Nekurk apėjimų.
- Lygio egzaminą galima laikyti iš anksto (`isUnlocked`); nutrūkusi pamoka pratęsiama (`resumeStates`).
- Pakeitus kursą: `node tools/validate.mjs` turi rodyti `OK`.
- Testai naršyklėje: `node tools/smoke-test.mjs` (reikia `npm i playwright`; imituoja Gemini Live serverį).
- Vartotojo tekstai – lietuviškai su diakritikais.
