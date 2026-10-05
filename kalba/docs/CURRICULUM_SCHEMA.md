# Pamokų duomenų schema (v2: lygiai → skyriai → pamokos)

Kurso planas: `docs/syllabus.json` (lygiai, skyriai, pamokų temos ir šaltiniai).
Iš jo sugeneruojamas `curriculum/course.js` (`node tools/build-course.mjs`), kuriame yra lygių ir skyrių
metaduomenys bei šaltinių sąrašas. Kiekvienas skyrius – atskiras failas `curriculum/<lygis>/<skyriaus-id>.js`:

```js
(window.UNITS = window.UNITS || {})["a2-u03"] = {
  id: "a2-u03",
  lessons: [ /* Lesson[] – ta pati tvarka ir tie patys id kaip syllabus.json */ ]
};
```

Programėlė pati įkelia visus skyrių failus pagal `course.js`. Pamokų tvarka visame kurse = atrakinimo tvarka.

## Lesson papildomi laukai (v2)

```js
{
  id: "a2-u03-l02",
  type: "lesson",            // "lesson" | "checkpoint"
  kind: "grammar",           // grammar | vocabulary | functional | skills | pronunciation | review | checkpoint
  sources: ["bc-grammar"],   // šaltinių id iš syllabus.json → rodomi kaip nuorodos „Šaltiniai“
  reading: {                 // NEPRIVALOMA (ypač „skills“ pamokoms): trumpas tekstas
    title: "A weekend in Vilnius",
    text: "120–300 žodžių tekstas angliškai, lygiui pritaikytas. Pastraipos atskirtos \n\n.",
    glossary: [{ en: "crowded", lt: "perpildytas" }],
    questions: [ /* quiz užduotys (choice/input) apie tekstą */ ]
  },
  // …kiti laukai – kaip žemiau (icon, title, titleEn, canDo, grammar, vocab, phrases, quiz, speaking)
}
```

- `grammar` laukas naudojamas visoms rūšims kaip „teorija“: gramatikos pamokoje – taisyklė; žodyno – kaip
  vartoti žodžius (kolokacijos, dažnos klaidos); funkcinėje – situacijos taisyklės (mandagumas, struktūra);
  tarimo – garsai, burnos padėtis, minimalios poros (`table`), lietuvių klaidos; kartojimo – ką kartojame.
- `vocab` turi ≥ 6 žodžius visoms rūšims išskyrus `review`/`checkpoint`.

---

## Ankstesnė (v1) Lesson schema – galioja toliau

Kiekvienas lygis – atskiras failas `kalba/curriculum/<lygis>.js`, kraunamas kaip paprastas
`<script>` (be build žingsnio). Failas prideda vieną objektą į `window.LEVELS`:

```js
(window.LEVELS = window.LEVELS || []).push({
  id: "a2",                       // unikalus: a1plus | a2 | a2plus | b1
  name: "A2",                     // rodomas pavadinimas
  title: "Elementarus vartotojas",// LT aprašas
  description: "…",               // 1–2 sakiniai LT: ką mokės po šio lygio
  lessons: [ /* Lesson[] – eilės tvarka = atrakinimo tvarka */ ]
});
```

## Lesson

```js
{
  id: "a2-03",                    // <lygis>-<nr>, unikalus visame kurse
  type: "lesson",                 // "lesson" | "checkpoint" (lygio egzaminas, visada paskutinis)
  icon: "🕰️",                     // vienas emoji
  title: "Past Simple: netaisyklingi veiksmažodžiai", // LT
  titleEn: "Past Simple – irregular verbs",
  canDo: ["Galiu papasakoti, ką veikiau savaitgalį."],  // 1–3 CEFR „galiu…“ teiginiai LT
  grammar: {
    title: "Kaip sudaromas Past Simple",               // LT
    explanation: ["Pastraipa LT…", "Dar viena…"],       // 2–5 trumpos pastraipos, aiškiai, be žargono.
                                                         // Galima <b>, <i>, <code> žymes.
    table: [["Forma","Pavyzdys"],["+","I went"],…],      // NEPRIVALOMA lentelė, 1-a eilutė = antraštė
    examples: [{ en: "I went to Riga.", lt: "Nuvažiavau į Rygą." }], // 4–8
    pitfalls: ["Lietuviams dažna klaida: …"]            // 1–3 tipinės lietuvių klaidos (LT)
  },
  vocab:   [{ en: "yesterday", lt: "vakar" }],          // 8–14 žodžių, susijusių su tema
  phrases: [{ en: "What did you do…?", lt: "Ką veikei…?" }], // 3–6 naudingos frazės pokalbiui
  quiz: [                                                // 4–6 apšilimo užduotys (veikia be AI)
    { type: "choice", q: "Yesterday I ___ to the cinema.", options: ["go","went","gone"], answer: 1,
      explain: "LT paaiškinimas" },
    { type: "input",  q: "Išversk: Aš mačiau jį.", answer: ["I saw him", "I saw him."], explain: "…" },
    { type: "order",  words: ["did","you","what","do"], answer: "what did you do", lt: "Ką tu darei?" }
  ],
  speaking: {                                            // AI mokytojui (ANGLIŠKAI)
    scenario: "Role-play / conversation context in English for the tutor.",
    tasks: ["Ask the learner about last weekend and get at least 5 sentences in Past Simple.", "…"], // 3–5
    successCriteria: ["Uses at least 6 different irregular past forms correctly", "…"],              // 3–5, išmatuojami
    minLearnerTurns: 8                                   // kiek mažiausiai mokinio replikų prieš vertinant
  }
}
```

Taisyklės:
- `input` atsakymai lyginami be didžiųjų raidžių, skyrybos ir tarpų skirtumų – pateik kelis priimtinus variantus.
- `order` – `answer` turi būti sudarytas tiksliai iš `words` (mažosiomis, be skyrybos).
- `checkpoint` pamoka: `grammar.explanation` – ką kartojame; `vocab` gali būti `[]`; `quiz` – 6 mišrios užduotys
  iš viso lygio; `speaking` – mišrus egzaminas visoms lygio temoms, `minLearnerTurns` ≥ 12.
- Visi LT tekstai – taisyklinga lietuvių kalba su diakritikais. EN – natūrali britų/amerikiečių kalba.
