# Dizaino sistema: „Po truputį“

Šviesus variantas patvirtintas 2026-10-05; tamsus variantas atmestas. Tamsūs lentelės tokenai yra archyviniai ir neįgyvendinami. Mokytis kalbėti su Ema kasdien, aiškiai matant kitą žingsnį. Režimas: Operate. Suaugusi lietuvė, A1+ → B1; telefonu mokosi dieną ar vakare. Profesionali tipografija ir rami struktūra, žaismingumas — Emos gestuose, kelyje ir mokymosi grįžtamajame ryšyje.

## Spalvos

| Paskirtis | Šviesi | Tamsi |
|---|---|---|
| Fonas | `#f8f6f1` | `#17151c` |
| Kortelė | `#ffffff` | `#25212c` |
| Antrinis paviršius | `#eeebf1` | `#302a39` |
| Pagrindinis tekstas | `#292431` | `#f4eff7` |
| Antrinis tekstas | `#6c6271` | `#bcb0c5` |
| Pagrindinis veiksmas | `#593e6f` | `#c8a7e7` |
| Tekstas ant veiksmo | `#ffffff` | `#281a36` |
| Medaus akcentas | `#edb94b` | `#e9bc64` |
| Tekstas ant medaus | `#614611` | `#f3d195` |
| Teisingai | `#276b50` | `#92d7b2` |
| Pataisa | `#a13847` | `#ef9ba5` |
| Skyriaus sala | `#eee8f1` | `#2b2435` |
| Skiriamasis brūkšnys | `#e1dbe5` | `#403648` |

Spalva niekada nėra vienintelis būsenos signalas: kalbėjimo būsena, užraktas ir pataisa turi tekstą ar SVG. Nenaudoti šviesaus balto teksto ant medaus spalvos. Antrinis tekstas turi likti įskaitomas abiejose temose.

## Tipografija

Manrope (400–800, lietuviškas Latin Extended) su sisteminiu `-apple-system` / `Segoe UI` atsarginiu šriftu. Apvalios, aiškios formos suaugusiųjų programėlei; be vaikiškai pūstų raidžių. Google Fonts gali būti pasiekiamas internetu; be interneto privalo veikti sisteminis šriftas.

Antraštė: 30–32 px / 1.16, 800; ekrano antraštė 20–24 px; skyrius 16–18 px; pagrindinis skaitomas turinys 14–16 px / 1.5–1.7; tik pagalbinės etiketės 10–12 px. Skaitomo turinio nespausti tam, kad visas puslapis tilptų viename ekrane. Ilga teorija ir nustatymai slenkami vertikaliai.

## Tarpai, forma, gylis

Ritmas: 4, 8, 12, 16, 20, 24, 32, 48 px. Ekrano horizontalus kraštas 24 px. Susiję elementai glaudžiai; tarp skyrių daugiau erdvės. Kampai: laukas / maža žyma 12 px; kortelė 20 px; modalas 28–30 px. Skyriaus sala 30 px. Kortelė ne visur: pažangos skyriai ir nustatymų eilutės grupuojamos skiriamaisiais brūkšniais.

Šešėlis: `0 4px 16px rgba(59,40,70,.07)`, tamsoje `rgba(0,0,0,.16)`. Veiksmo mygtuko 3 px apatinė briauna suteikia paspaudimo grįžtamąjį ryšį. Nenaudoti neoninių aureolių, dekoratyvaus stiklo ar gradientinio teksto.

## Valdikliai

Pagrindinis mygtukas 50 px; visos kitos aktyvios zonos bent 44 × 44 px. Užduoties atsakymai 46 px. Mikrofonas 64 × 64 px, centre, būsena įvardyta šalia. Paspaudimas keičia formą / gylį; focus-visible aiškus medaus spalvos kontūras. Pasirinkimą rodo spalva ir `aria-pressed`, klaidą — paaiškinimas. Modalas naudojamas pamokos rezultatui ir užrakto paaiškinimui, kaip esamoje programėlėje.

## SVG ir Ema

Viena 24 × 24 ikonų šeima, 1,8 px linija, apvalūs galai ir jungtys; UI ikonose nėra emoji. Naudoti esamus 7 Emos SVG (idle, wave, listening, talking, thinking, happy, encourage). Pilna Ema pokalbyje; kompaktiška užduoties metu. Nekeičiama veikėjos tapatybė. Pamokų ikonėles parinkti pagal turinį, esamų kurso duomenų nekeisti.

## Animacijos

Paspaudimas 120 ms; būsenos pasikeitimas 180 ms; nauja užduoties kortelė 220 ms; vienkartinė šventė iki 600 ms. `cubic-bezier(.16,1,.3,1)`. Kartojamos dažnos operacijos neturi dekoratyvaus laukimo. Konfeti tik po tikro Emos patvirtinimo, vieną kartą; ne nuolatinis fonas.

Garso bangos reiškia garsą, ne klaidingą tariamą įrašymą. „Ema kalba“ ir „Tavo eilė – kalbėk“ matomos ir be judėjimo. `prefers-reduced-motion`: be bangų, pulso ir judančio konfeti; būsena ir veiksmai lieka. Aktyvi mikrofono būsena turi aiškų tekstą ir spalvą. Emos SVG jau turi sumažinto judėjimo palaikymą.

## iPhone

Maketai 390 × 844; patikrinta ir 320 px pločio. Statusbar makete yra demonstracinis. Tikroje programėlėje top / bottom `env(safe-area-inset-*)`, turinys neslepiamas po navigacija ar mikrofono juosta, klaviatūra neturi uždengti siuntimo. Jokio horizontalaus slinkimo. Lygiai, skyrių salos ir taikinių atrakinimas atspindi esamą kurso struktūrą; Ema išlieka vienintelė, galinti patvirtinti pamoką.
