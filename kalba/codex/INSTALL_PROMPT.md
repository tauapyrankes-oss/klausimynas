# Užduotis Codex'ui: paskelbti „Kalbėk!“ ir paruošti įdiegimui iPhone

Repository: `tauapyrankes-oss/klausimynas` (public). GitHub Pages already serves the `main` branch root
(`https://tauapyrankes-oss.github.io/klausimynas/` → the existing questionnaire site, which must keep working).
The app lives in `kalba/` on branch `claude/duolingo-style-language-app-2mgqad`.

## Steps
1. **Check the branch is ready** (on `claude/duolingo-style-language-app-2mgqad`):
   - `node kalba/tools/validate.mjs` → must print `OK: 4 lygiai, 172 pamokos parašytos` and no line
     `Dar neparašyti skyriai`. If units are still missing, STOP and tell the user to wait for Claude.
   - `cd kalba && npm i --no-save playwright && node tools/smoke-test.mjs && node tools/check-assets.mjs` → both OK.
     (Use the preinstalled Chromium if available; do not change app code to make tests pass – report failures.)
2. **Publish:** open a pull request `claude/duolingo-style-language-app-2mgqad` → `main` titled
   „Kalbėk! – anglų kalbos programėlė (A1+ → B1)“ and merge it (merge commit, no squash, no force-push).
   If you cannot merge, give the user the PR link and ask them to press “Merge”.
   Do not modify the root `index.html` (questionnaire) or `.github/workflows/keepalive.yml`.
3. **Verify deployment** (wait for the Pages build, up to ~5 min, then check with curl):
   - `https://tauapyrankes-oss.github.io/klausimynas/kalba/` → 200, contains `Kalbėk!`
   - `…/kalba/manifest.webmanifest`, `…/kalba/sw.js`, `…/kalba/curriculum/course.js`,
     `…/kalba/curriculum/b1/b1-u07.js`, `…/kalba/icons/icon-192.png`, `…/kalba/assets/ema/manifest.json` → 200
   - `https://tauapyrankes-oss.github.io/klausimynas/` still shows the questionnaire.
4. **Reply to the user in Lithuanian** with the app link and these iPhone steps (exactly):
   1. Atidaryk **Safari** (ne Chrome) ir eik į `https://tauapyrankes-oss.github.io/klausimynas/kalba/`
   2. Apačioje spausk **Bendrinti** (kvadratas su rodykle ↑) → **„Pridėti prie pagrindinio ekrano“** → **Pridėti**.
   3. Atidaryk programėlę **iš ikonos „Kalbėk!“** pagrindiniame ekrane (ne iš Safari).
   4. **Nustatymai** → įklijuok Gemini API raktą iš https://aistudio.google.com/apikey →
      modelis `gemini-3.8-live` → įrašyk vardą → išsirink balsą.
   5. Atidaryk pirmą pamoką → **„Pradėti pokalbį“** → leisk naudoti mikrofoną.
   6. Jei Ema pertraukinėja pati save – Nustatymai → Mikrofonas → „Paspausk ir kalbėk“ arba naudok ausines.
   7. Pažanga saugoma telefone; kartais Nustatymuose pasidaryk „Eksportuoti“ atsarginę kopiją.

Notes: there is no native iOS build (no Xcode/App Store) – the app is a PWA installed from Safari, which is the
intended way. Never put an API key in the repository.
