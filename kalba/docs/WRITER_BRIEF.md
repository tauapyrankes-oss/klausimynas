# Instrukcija pamokų rašytojams (AI agentams)

You write lesson content for "Kalbėk!", a speaking-first English course for an adult Lithuanian learner
(A1+ → B1) with an AI voice tutor "Ema" (Gemini Live). Quality bar: as good as a real coursebook lesson
(English File / Empower) plus a private teacher who knows Lithuanian.

## Read first
1. `kalba/docs/CURRICULUM_SCHEMA.md` – exact data format (v2 + v1 fields). Follow it EXACTLY.
2. `kalba/docs/syllabus.json` – your units: ids, order, `kind`, `title`, `titleEn`, `focus`, `canDo`, `sources`.
   The `focus` field is the spec of what to teach – cover ALL of it.
3. `kalba/docs/SYLLABUS.md` – the whole course, to see what comes before/after (recycle earlier material,
   do not pre-teach later grammar).
4. Old lessons `kalba/curriculum/{a1plus,a2,a2plus,b1}.js` (v1) – if one covers the same point, reuse and
   improve its good parts (explanations, pitfalls, speaking tasks) instead of starting from zero.
5. If the folder `kalba/docs/research/` exists, use it as reference material.

## Output
One file per unit: `kalba/curriculum/<levelId>/<unitId>.js`:
```js
(window.UNITS = window.UNITS || {})["<unitId>"] = { id: "<unitId>", lessons: [ … ] };
```
Lessons in exactly the syllabus order with exactly the syllabus ids. For each lesson copy `kind`,
`title`, `titleEn`, `sources` from the syllabus; `canDo` = array (syllabus canDo + optionally 1–2 more);
`type` = "checkpoint" only for kind "checkpoint", otherwise "lesson". Pick a fitting `icon` emoji.

## Content per lesson (all kinds)
- `grammar` = the lesson's teaching notes in Lithuanian (title, 3–6 explanation paragraphs, optional table,
  5–8 examples EN+LT, 2–3 pitfalls typical for LITHUANIAN speakers). Meaning by kind:
  - grammar: form, meaning, use, contrast with Lithuanian; table of forms.
  - vocabulary: how to use the words – collocations, word families, confusing pairs, false friends; table of groups.
  - functional: the situation step by step, polite vs neutral phrases, cultural notes (UK/international).
  - skills: reading/speaking strategy (skimming, guessing words, retelling, describing a photo, exam tips).
  - pronunciation: how to make the sound (lips/tongue, compared with Lithuanian sounds), minimal pairs in `table`,
    typical Lithuanian mistakes, practice words/sentences in `examples`.
  - review / checkpoint: what is revised (summary of the unit/level).
- `vocab`: 10–16 items (not for review/checkpoint where it is optional), `phrases`: 4–8.
- `quiz`: 6–8 exercises, mix of choice / input / order (at least 2 types), testing exactly this lesson's focus;
  `explain` in Lithuanian for each. Double-check every answer.
- `reading` (REQUIRED for kind "skills", optional for others): original graded text written by you
  (A1+: 100–150 words, A2: 140–200, A2+: 180–250, B1: 220–320), natural and interesting, on the unit topic,
  using the unit language; `glossary` 5–8 items; `questions` 3–5 (choice/input) about the text.
- `speaking`: scenario + 4–6 tasks + 3–5 measurable successCriteria (English, for the tutor) +
  minLearnerTurns (lessons 8–12, review 12, checkpoint ≥ 15). Tasks must be communicative and personal
  (the learner's own life), include a role-play where natural. Checkpoints follow the Cambridge A2 Key /
  B1 Preliminary speaking format as described in the syllabus focus.

## Self-contained lessons
- Lessons must teach everything themselves. NO links or references to external lessons/websites in learner-facing
  text. The `sources` field is internal metadata only (not shown).
- Deliberately recycle: reuse words, phrases and grammar from EARLIER lessons in examples, quiz items, readings and
  speaking tasks (≈20–30 % recycled material), so the learner meets them again.

## Language rules
- Lithuanian: correct, natural, with diacritics, friendly "tu" form. Explain simply, no linguistics jargon
  (or explain it). Gender-neutral wording towards the learner where easy.
- English: natural, level-appropriate, British or neutral spelling consistently.
- Only `<b>`, `<i>`, `<code>`, `<br>` tags in Lithuanian texts.

## Check before finishing
Run `node kalba/tools/validate.mjs` from the repo root. It validates all written units (and lists units not yet
written – that is fine). Fix every error in YOUR files. Do not edit any other files.
