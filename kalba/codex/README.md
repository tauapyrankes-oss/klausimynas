# Užduotys Codex'ui: veikėja, animacijos, dizainas

Šis aplankas skirtas Codex (ar kitam AI) – čia aprašyta, kokius **vaizdinius išteklius** sukurti ir
kur juos įdėti, kad programėlė „Kalbėk!“ juos pasiimtų **be jokių kodo pakeitimų**.

> Svarbu: programėlė jau veikia ir be šių failų (rodo emoji). Nekeisk `js/`, `curriculum/` logikos –
> tik įkelk išteklius į nurodytus aplankus ir atnaujink `manifest.json`. Kodo architektūra – `../AGENTS.md`.

---

## 1. Veikėja „Ema“ – AI mokytoja

**Kur:** `kalba/assets/ema/`
**Kaip programėlė juos randa:** `kalba/assets/ema/manifest.json`:

```json
{
  "states": {
    "idle": "idle.svg",
    "wave": "wave.svg",
    "listening": "listening.svg",
    "talking": "talking.svg",
    "thinking": "thinking.svg",
    "happy": "happy.svg",
    "encourage": "encourage.svg"
  }
}
```

- Formatas: **SVG** (pageidautina, mažas dydis) arba **animuotas WebP / PNG 512×512** su permatomu fonu.
  Animuotas SVG (CSS `@keyframes` SVG viduje arba SMIL) – puikiai tinka, nes veikia `<img>` žymoje.
- Rodoma dydžiais 48–96 px, todėl: aiškus siluetas, stambios detalės, be smulkaus teksto.
- Kvadratinė drobė, veikėja centre, ~8 % paraštės.
- Turi gerai atrodyti ant šviesaus (#f6f5fb) ir tamsaus (#14131c) fono – naudok kontūrą arba pakankamą kontrastą.
- Dydis: SVG ≤ 30 KB, WebP ≤ 150 KB kiekvienas.

### Promptas veikėjos koncepcijai

> Sukurk draugišką, šiuolaikišką maskotą-mokytoją vardu **Ema** anglų kalbos mokymosi programėlei
> lietuvei. Stilius: plokščias vektorinis (flat), apvalios formos, minimalios detalės, žaismingas, bet
> suaugusiam žmogui nevaikiškas (ne kūdikio proporcijos). Ema – jauna moteris su didelėmis
> apvaliomis akinių rėmelėmis, trumpais garbanotais plaukais ir ryškiu violetiniu (#5b4fd6) megztiniu;
> akcentinė spalva – gintarinė (#f5b100). Šalia jos – mažas kalbos debesėlis kaip jos „ženklas“.
> Galva ir pečiai (biustas), žiūri į žiūrovą. Išvestis: SVG, viewBox 0 0 512 512, be teksto.

### Būsenos (po vieną failą, ta pati veikėja, tas pats stilius)

| Būsena | Kada rodoma | Ką vaizduoti (animacija ~1–2 s, ciklinė) |
|---|---|---|
| `idle` | pagrindinis ekranas, sprinto kortelė | ramiai šypsosi, lėtas mirksėjimas |
| `wave` | prieš pokalbį, sprinto pradžia | mojuoja ranka „Hi!“ |
| `listening` | kai Ema klauso mokinės | palinkusi, ranka prie ausies, linkčioja |
| `talking` | kai Ema kalba | burna atsidaro/užsidaro, gestikuliuoja |
| `thinking` | jungiantis prie AI | ranka prie smakro, virš galvos taškeliai „…“ |
| `happy` | pamoka išlaikyta, naujas rekordas | džiaugiasi, konfeti, rankos aukštyn |
| `encourage` | pamoka dar neišlaikyta | šilta šypsena, „kumštis“ / nykštys aukštyn |

## 2. Programėlės ikona

**Kur:** `kalba/icons/` – pakeisk `icon.svg`, tada paleisk `node tools/make-icons.mjs`
(sugeneruoja `icon-192.png`, `icon-512.png`). Ikona – Emos galva arba kalbos debesėlis su „Hi!“,
fonas #5b4fd6, svarbus turinys centre (Android/iOS apkarpo kampus).

> Promptas: „Programėlės ikona 512×512, vientisas violetinis (#5b4fd6) fonas, centre baltas kalbos
> debesėlis su Emos veidu (akiniai, garbanos), plokščias stilius, be smulkių detalių, gerai matosi 60 px dydžio.“

## 3. Lygių iliustracijos (nebūtina)

**Kur:** `kalba/assets/levels/a1plus.svg`, `a2.svg`, `a2plus.svg`, `b1.svg` (plotis 640, aukštis 200).
Kol kas kodas jų nenaudoja – jei sukursi, įrašyk į `assets/levels/README.md`, ir Claude/Codex galės prijungti
prie lygio antraštės (`.level-head` – `js/app.js`, funkcija `viewPath`).

> Promptas: „Plati plokščia iliustracija lygio antraštei. A1+: pirmieji žodžiai – kavinė, pasisveikinimas;
> A2: kelionė traukiniu, žemėlapis; A2+: miestas, draugai kalbasi; B1: darbo pokalbis, diskusija.
> Spalva pagal lygį: A1+ #1f9d8a, A2 #5b4fd6, A2+ #d9632b, B1 #c23b7a. Be teksto.“

## 4. Garso efektai (nebūtina)

**Kur:** `kalba/assets/sfx/correct.mp3`, `wrong.mp3`, `levelup.mp3` (≤ 20 KB, trumpi, malonūs).
Jie dar neprijungti – prijungimui reikia kelių eilučių `renderQuiz` funkcijoje.

## Patikra po įkėlimo

1. `cd kalba && python3 -m http.server 8000` → atidaryk http://localhost:8000
2. Pradiniame ekrane sprinto kortelėje turi matytis `idle` Ema, pokalbio skirtuke – `wave`.
3. Padidink `VERSION` faile `sw.js` (pvz., `kalbek-v2`) ir pridėk naujus failus į `SHELL` sąrašą,
   kad telefone atsinaujintų.
