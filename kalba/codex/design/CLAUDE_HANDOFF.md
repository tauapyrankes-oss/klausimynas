# Claude: prijunk patvirtintą „Kalbėk!“ dizainą prie naujausio kodo

**Vartotojo sprendimas, 2026-10-05:** šviesus dizainas patvirtintas. Tamsi programėlės tema atmesta. Claude įgyvendina ir sujungia dizainą su savo naujausiu programėlės kodu; Codex po to pasiima versiją, sukompiliuoja ir įdiegia į iPhone.

Repo: `tauapyrankes-oss/klausimynas`. Dizaino medžiaga: šaka **`codex/design`**, aplankas **`kalba/codex/design/`**. Įgyvendinimas: **`claude/duolingo-style-language-app-2mgqad`**.

## Ką pasiimti

Pasiimk tik dizaino aplanką, kad neperrašytum savo naujesnių funkcinių pakeitimų:

```sh
git fetch origin
git checkout origin/codex/design -- kalba/codex/design
```

- `png/preview.png` — keturi ekranai, pasirinktos krypties esmė.
- `png/overview-light.png` — visi 13 ekranų.
- `png/light/*.png` — kiekvienas ekranas atskirai, 390 × 844.
- `screens/*.html` ir `design.css` — tiksli kompozicija, tarpai, dydžiai ir spalvos.
- `system.html`, `DESIGN.md` — komponentai, tipografija ir judėjimo principai.
- `widgets/png/overview.png` — visi 14 valdiklio / Activity variantų.
- `widgets/png/home-context.png`, `lock-context.png` — iPhone kontekstas.
- `widgets/motion.mp4`, `motion.html`, `motion.js` — perėjimų peržiūra.
- `widgets/assets/ema-*.png` — septynios **statinės**, permatomos 256 × 256 Emos pozos WidgetKit / ActivityKit.
- `widgets/assets/kalbek-mark.png` — 128 × 128 permatomas akinių ženklas, tinka native template rendering.
- `widgets/INTEGRATION.md`, `MOTION.json` — duomenų ir native animacijų prijungimo kontraktas.

**`png/dark/`, `overview-dark.png` ir tamsios spalvos senoje specifikacijoje yra atmesta ankstesnė alternatyva. Jų neįgyvendinti.** Programėlėje nedėti temos perjungimo. Dynamic Island foną nustato iOS — tai sistemos paviršius.

## Įgyvendinimas programėlėje

1. Skaityk **naujausią** `kalba/AGENTS.md`, savo `app.js`, `store.js`, `audio.js`, `prompt.js` ir native integraciją. Nekopijuok seno `app.js` iš dizaino šakos. Codex neduoda paruošto programėlės logikos pakaitalo: dizaino šakoje prie programėlės neprijungti jokie daliniai UI pakeitimai.
2. Taikyk šviesią paletę: fonas `#f8f6f1`, tekstas `#292431`, veiksmas `#593e6f`, antrinis tekstas `#6c6271`, medus `#edb94b`, teisingai `#276b50`. Web — Manrope / sisteminis šriftas; native valdikliai — sisteminis SF. Ikonos SVG / SF Symbols, be emoji UI valdikliuose.
3. Keisk `kalba/styles.css`, `index.html`, HTML šablonus `js/app.js`, `js/exercise.js`; galima mažas vietinis SVG helper be priklausomybių. Išsaugok id / klases ir event handlerius: `#start`, `#mic`, `#ring`, `#txt`, `#send`, `#theory`, `#tr`, `.node`, `.check`, `.inline-exercise`, `.modal`, `.board`, `.bubble` ir kitus testų naudojamus valdiklius.
4. Kelyje: skyriai kaip salos, esama pamokų seka, būsenų / progreso žiedai, aiškus „PRADĖK ČIA“. Išlaikyk naujausią trijų skirtukų navigaciją; laisvas pokalbis ir sprintas lieka pasiekiami iš pradžios. Keturi skirtukai senajame makete nėra leidimas grąžinti seną navigacijos logiką.
5. Pamokoje: didelė Ema ir tekstinis signalas „Ema kalba“ / „Tavo eilė – kalbėk“. Užduoties metu Ema susitraukia, užduotis ir siuntimas turi prioritetą. Pokalbio istorija slenkama; mikrofono juosta ir klaviatūra neuždengia įvesties ar užduoties mygtuko. Garso lygis iš tikro `onLevel`, o ne iliustracinis pulsas.
6. **Išlaikyk savo naujausius funkcinius pakeitimus:** griežtą Emos patvirtinimo patikrą (min. replikos, užduotys, bandymai, tikslumas, kriterijai), pamokos pratęsimą, egzaminą iš anksto, dienos planą, tempą pagal lygį ir iOS garso taisymus. Maketus pritaikyk prie jų, ne pašalink šias funkcijas dėl seno maketo.
7. `prefers-reduced-motion`, safe-area, 44 px paspaudimo zonos, 320 ir 390 px plotis, jokio horizontalaus slinkimo. Native visada šviesus programėlės paviršius ir įskaitoma iOS status juosta. Fiktyvios maketų statusbar / Dynamic Island į pačią programėlę nedėti.

## Valdiklis ir Live Activity

Esamas valdiklis jau turi keturias šeimas; prijunk jų naują išvaizdą prie esamo `WidgetData` ir `WidgetBridge`. Live Activity yra **naujos funkcijos dizaino pasiūlymas**, jos runtime šioje šakoje dar nėra. Implementuok pagal `widgets/INTEGRATION.md`; jei reikia pirmiau užbaigti veikiančią programėlę, prioritetas — programėlės UI ir esamas WidgetKit valdiklis. Nepristatyk HTML maketo kaip telefone veikiančios ActivityKit funkcijos.

## Baigti taip

- `node kalba/tools/validate.mjs`, `smoke-test.mjs`, `check-assets.mjs` praeina; jei turi naujų savo regresinių testų, jie taip pat praeina.
- Playwright nuotraukos iš **tikros programėlės**, ne tik iš dizaino HTML; ilgi lietuviški pavadinimai, rašymo užduotis, klaviatūra, Reduce Motion.
- Padidinti `kalba/sw.js` VERSION; pridėti naujus vietinius UI failus į talpyklos sąrašą.
- Išsaugoti `app/.env` ir rakto kopijų ignoravimą; niekada jų nekomituoti, nefotografuoti atvirų raktų.
- Pataisas įkelti į `claude/duolingo-style-language-app-2mgqad`, parašyti Codex vartotojui, kad versija paruošta pasiimti ir įdiegti. Native dizaino pakeitimų nereikia skelbti App Store ar TestFlight.

## Kas jau patikrinta

13 HTML programėlės ekranų, šviesus variantas, vaizdinių išteklių įkėlimas, 44 px valdikliai, 320 / 390 px plotis ir Reduce Motion peržiūroje. Widget / Live Activity HTML patikra: 14 komponentų, du iPhone kontekstai, perėjimai, sustabdymas ir Reduce Motion; visi telpa savo maketo rėmuose. **Native valdiklio ir ActivityKit runtime dar nekompiliuoti ir telefone netikrinti.**
