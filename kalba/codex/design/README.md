# Kalbėk! — patvirtinta šviesi dizaino kryptis

**Vartotojas patvirtino šviesų variantą 2026-10-05. Tamsus variantas atmestas.** Claude prijungia dizainą prie savo naujausio kodo; Codex pasiims paruoštą versiją native diegimui. Programėlės kodas šioje šakoje atitinka Claude šaką; nebaigti Codex UI įgyvendinimo bandymai į GitHub neįkelti.

**Pradėti nuo [CLAUDE_HANDOFF.md](CLAUDE_HANDOFF.md).** Ten surašytos integravimo ribos ir visų failų paskirtis. Nauji valdikliai ir Live Activity: [widgets/index.html](widgets/index.html), PNG aplanke `widgets/png/`, judėjimo peržiūra `widgets/motion.mp4`.

Atverti `index.html` per vietinį HTTP serverį. `system.html` — komponentai ir visos 7 Emos būsenos. `screens/*.html` — atskiri 390 × 844 maketai. `png/light/` — patvirtintos Playwright nuotraukos. `png/dark/` yra atmestas ankstesnis eskizas, jo nenaudoti. `png/before/` — esamos programėlės testuose užfiksuoti ekranai.

Maketuose vardas „Rasa“, balai, replikos ir pažanga yra **demonstraciniai**. Namų ekranas rodo pradžią; pažangos ekranas — vėlesnės mokymosi būsenos pavyzdį. 172 pamokos ir keturi lygiai yra tikras esamo kurso turinys.

## Ekranai

1. `home` — pamokų kelias ir skyriaus sala.
2. `lesson-speaking` — Ema kalba.
3. `lesson-listening` — tavo eilė kalbėti.
4. `lesson-exercise` — pasirenkamas atsakymas pokalbyje.
5. `lesson-theory` — lietuviškas paaiškinimas ir gramatikos lentelė.
6. `lesson-writing` — tekstas Emai, žodžių skaičius ir siuntimas.
7. `result` — Emos balas, stiprybė ir viena pataisa.
8. `sprint` — žodžio vertimas prieš laikrodį.
9. `progress` — lygiai, replikos ir prisimintina klaida.
10. `settings` — vardas, balsas, tempas, mikrofonas ir programėlė.
11. `settings-connection` — Gemini nustatymų detalė. Įgyvendinant gali būti tame pačiame nustatymų puslapyje; naujo maršruto nereikia.
12. `locked` — paaiškinimas, kodėl pamoka užrakinta.
13. `exam` — esamo lygio egzamino įžanga.

## Patikra

`node codex/design/capture.mjs` iš `kalba/` (Playwright yra tik patikros priemonė, ne programėlės priklausomybė). `qa.json` užfiksuoja 13 šviesių ekranų, 390 × 844 dydį, įkeltas iliustracijas, horizontalaus perpildymo ir bent 44 px valdiklių patikras; taip pat 320 px plotį, rašymo lauką, atsakymo pasirinkimą, modalą ir Reduce Motion.

Dabartinės programėlės `validate.mjs`, `smoke-test.mjs`, `check-assets.mjs` praėjo. Po dizaino įgyvendinimo šiuos testus pakartoti, atnaujinti `sw.js` VERSION ir iš naujo sinchronizuoti native programėlę.

## Įgyvendinimo ribos po patvirtinimo

- Keisti pateikimą ir HTML šablonus, išsaugoti dabartines įvykių jungtis, funkcijas, užduočių tikrinimą ir progreso duomenis.
- Išsaugoti `#start`, `#mic`, `#ring`, `#txt`, `#send`, `#tr`, `#theory`, `.node`, `.check`, `.inline-exercise`, `.modal`, `.board`, `.bubble` ir kitus testų naudojamus elementus.
- Emos būsena susiejama su dabartiniais `setEma` / `status` signalais. Mikrofono bangavimas maketuose tik iliustracinis; tikras lygis turi naudoti jau esamą mikrofono signalo įvykį.
- Programėlėje tik šviesi tema. Native valdiklių sistemos accented / vibrant režimus ir Dynamic Island foną nustato iOS.
- Netraukti maketų statusbar ar Dynamic Island į programėlę: juos suteikia iOS. Tikroje programėlėje naudoti `env(safe-area-inset-*)`.
- Ema mažesnė, kai ekrane užduotis: siuntimas ir tekstas turi prioritetą. Pokalbiui — didelė Ema ir aiški kalbėjimo būsena.
- Nėra naujų bibliotekų, mokėjimų, paskyrų, dirbtinių atrakinimų ar sugalvotų mokymosi funkcijų.

## Nuorodos į naudotojo nurodytus produktus

[Speak](https://www.speak.com/) — aiški kalbėjimo praktikos kryptis. [Speak Tutor](https://help.speak.com/en/articles/11396739-what-is-speak-tutor) — pokalbis ir gramatikos paaiškinimai. [Busuu](https://www.busuu.com/en/mobile) — kasdienio mokymosi struktūra. Tai kontekstas; maketuose nenaudojamas jų prekės ženklas ar iliustracijos.
