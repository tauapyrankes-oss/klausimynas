# Metodika: kodėl kursas sudarytas būtent taip

## Tikslas
Suaugusi lietuvė, kurios lygis A1+ (supranta pagrindus, bet kalbėti sunku), per vieną kursą turi
**pradėti laisvai kalbėti B1 lygiu**: susikalbėti kelionėje, darbe ir kasdienybėje, papasakoti
patirtį, išsakyti nuomonę.

## Šaltiniai ir struktūra
- **CEFR (Bendrieji Europos kalbų mokymosi metmenys)**: lygių A1, A2 ir B1 „galiu…“ teiginiai. Kiekviena
  pamoka prasideda 1–3 tokiais teiginiais (`canDo`), o egzaminai tikrina būtent juos.
- **British Council / EAQUALS Core Inventory for General English** ir **English Profile (Cambridge)**:
  kurios gramatikos ir funkcijos priklauso kuriam lygiui. Pagal juos sudaryta temų tvarka
  (pvz., Present Perfect – A2+, Second Conditional ir Passive – B1).
- **Cambridge A2 Key / B1 Preliminary kalbėjimo dalys**: lygių egzaminai remiasi jų formatu
  (interviu, pokalbis, nuotraukos aprašymas, diskusija).
- Lygiai suskaidyti smulkiau: **A1+ → A2 → A2+ → B1**, iš viso 54 pamokos (50 temų ir 4 egzaminai).
  Viena pamoka: maždaug 20–30 min.

## Mokymo principai, įdiegti programėlėje
1. **Pirmiausia kalbėjimas (output hypothesis, Swain).** Pamoką patvirtina tik pokalbis: mokinė turi
   pati pasakyti sakinius su nauja gramatika (`minLearnerTurns`, `successCriteria`). Ema kalba trumpai,
   o mokinė kalba daugiau.
2. **Aiškus mokymas ir praktika (PPP / TBLT).** Seka: teorija LT, kontroliuojami pratimai, laisvas
   komunikacinis uždavinys (vaidmenų žaidimas).
3. **Įvaldymo principas (mastery learning, Bloom).** Kita pamoka atsirakina tik tada, kai AI mokytoja
   iškviečia `complete_lesson` su `passed: true` (būtina bent ~80 % teisingų vartojimų, balas ≥ 60).
   Mokinės prašymas „praleisk“ nesuveikia.
4. **Korekcinis grįžtamasis ryšys (Lyster & Ranta).** Kai klystama tikslinėje gramatikoje, Ema
   perfrazuoja teisingai (recast) arba paskatina pasitaisyti pačią (prompt) ir paprašo pakartoti.
   Taiso tik vieną klaidą per kartą, kad nedemotyvuotų.
5. **Gimtosios kalbos įtaka (L1 transfer).** Kiekviena tema turi skyrelį apie tipines lietuvių klaidas:
   artikeliai, pagalbinis *do*, laikų derinimas, *since/for* ir pan. Ema jas aktyviai stebi.
6. **Kartojimas su intervalais (spaced repetition).** Išmoktos pamokos grįžta kartoti po 1, 3, 7, 14,
   30 ir 60 dienų. Ema prisimena dažniausias klaidas ir jas kartoja kitose pamokose.
7. **Įvairūs pratimai.** Pasirinkimas, rašymas, sakinio dėliojimas, diktantas, porų jungimas ir
   60 s žodžių sprintas su laikmačiu.
8. **Motyvacija.** Dienų serija, patirties taškai, žvaigždutės, rekordai ir aiškiai matomas kelias iki B1.

## Kodėl Gemini Live
Natūralus balso pokalbis realiu laiku su galimybe pertraukti, garso transkripcija (matai, ką pasakei)
ir „function calling“, kurio dėka AI pati įrašo įvertinimą. Nemokamo plano užtenka asmeniniam naudojimui.
