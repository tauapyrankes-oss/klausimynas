# Užduotis Codex'ui: surinkti realią mokymo medžiagą kursui A1+ → B1

Repository: `tauapyrankes-oss/klausimynas`. Work ONLY inside `kalba/docs/research/`.
Create a new branch from `claude/duolingo-style-language-app-2mgqad` named `codex/research`, commit there and push.
Do not modify any other files.

## Goal
We are building a complete speaking-focused English course for an adult Lithuanian learner, from A1+ to B1
(about 160–170 lessons in coursebook-style units). Collect REAL syllabus material from the web so the course
covers everything the official frameworks and good coursebooks cover. Copy lists faithfully (no invented content);
always record the source URL. Short quotes/lists are fine; do not paste whole copyrighted lessons.

## Collect (one Markdown file per item, in `kalba/docs/research/`)
1. `bc-grammar.md` – British Council LearnEnglish grammar topic lists for A1–A2 and B1–B2
   (learnenglish.britishcouncil.org/grammar/a1-a2-grammar, /b1-b2-grammar): every topic title + 1-line summary + URL.
2. `core-inventory.md` – British Council/EAQUALS *Core Inventory for General English* (PDF): for A1, A2, A2+, B1:
   grammar, functions, discourse markers, vocabulary/topics, as lists.
3. `english-grammar-profile.md` – English Grammar Profile (englishprofile.org): the A2 and B1 grammar points grouped
   by category (e.g. Present perfect, Modality, Clauses, Future…), 1 line each.
4. `cambridge-a2-key.md` and `cambridge-b1-preliminary.md` – from the official handbooks for teachers:
   the speaking test parts (what candidates do, timing), the list of topics, the vocabulary list topic areas,
   language functions. Include links to the official vocabulary lists (PDF).
5. `oxford-3000-topics.md` – Oxford 3000/5000 by CEFR: which topics/word groups belong to A1, A2, B1
   (no need to copy all words; list topics with ~10 example words each).
6. `coursebooks.md` – scope and sequence (contents pages) of: English File Elementary, Pre-intermediate,
   Intermediate (4th ed.); Headway Elementary/Pre-intermediate; Cambridge Empower A2, B1; Speakout Elementary,
   Pre-intermediate. For each unit: topic, grammar, vocabulary, functions/everyday English, pronunciation.
7. `lithuanian-learners.md` – typical problems of Lithuanian speakers of English: pronunciation (th, w/v, vowel
   length, final devoicing, stress, intonation) and grammar/vocabulary (articles, tenses, prepositions, word order,
   false friends) with examples and sources (articles, theses, teacher blogs).
8. `free-resources.md` – good free online lessons per topic we can link to from lessons (British Council
   LearnEnglish, BBC Learning English "6 Minute English", "English at Work", "The English We Speak", VOA Learning English,
   Cambridge Write & Improve, ESL Lab etc.): title, level, topic, URL.

## Format
- Each file starts with: `Source(s):` list of URLs actually opened, and `Retrieved: <date>`.
- Use headings per level (A1, A2, B1) and bullet lists. Be complete rather than pretty.
- Finish with `kalba/docs/research/README.md` listing all files and what is missing / could not be fetched.

When done, push branch `codex/research` and reply with the list of files and any gaps.
