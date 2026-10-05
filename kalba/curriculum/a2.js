(window.LEVELS = window.LEVELS || []).push({
  id: "a2",
  name: "A2",
  title: "Elementarus vartotojas",
  description: "Po šio lygio galėsi papasakoti apie praeitį ir planus, palyginti dalykus, duoti patarimą, susitarti dėl susitikimo ir susigaudyti kasdienėse situacijose – parduotuvėje, kelionėje, gatvėje.",
  lessons: [
    // ───────────────────────── a2-01 ─────────────────────────
    {
      id: "a2-01",
      type: "lesson",
      icon: "📍",
      title: "Past Simple: was / were",
      titleEn: "Past Simple of to be – where were you?",
      canDo: [
        "Galiu pasakyti, kur buvau ir koks buvau praeityje.",
        "Galiu paklausti, kur kas buvo vakar ar praėjusį savaitgalį."
      ],
      grammar: {
        title: "Veiksmažodis „to be“ būtajame laike",
        explanation: [
          "Esamajame laike sakome <code>am / is / are</code>. Būtajame laike lieka tik dvi formos: <b>was</b> ir <b>were</b>.",
          "<b>was</b> – su <code>I, he, she, it</code>. <b>were</b> – su <code>you, we, they</code>. Lietuviškai abu reiškia „buvau, buvo, buvome, buvote…“.",
          "Neiginys: pridedame <b>not</b> – <code>wasn't</code>, <code>weren't</code>. Klausimas: veiksmažodis eina prieš veiksnį – <code>Were you at home?</code>, <code>Where was she?</code>",
          "Su „to be“ <b>nenaudojame</b> pagalbinio <code>did</code>: sakome <i>Were you tired?</i>, o ne <i>Did you be tired?</i>",
          "Naudingos frazės: <code>there was / there were</code> – „buvo (kažkas kažkur)“: <i>There was a lot of people</i> ✗ → <i>There were a lot of people</i> ✓."
        ],
        table: [
          ["", "I / he / she / it", "you / we / they"],
          ["+", "I was at work.", "We were at home."],
          ["–", "She wasn't tired.", "They weren't there."],
          ["?", "Was he late?", "Were you happy?"],
          ["Trumpas atsakymas", "Yes, I was. / No, I wasn't.", "Yes, we were. / No, we weren't."]
        ],
        examples: [
          { en: "I was at home yesterday evening.", lt: "Vakar vakare buvau namie." },
          { en: "Where were you last weekend?", lt: "Kur buvai praėjusį savaitgalį?" },
          { en: "We were in Palanga in July.", lt: "Liepą buvome Palangoje." },
          { en: "The film wasn't very good.", lt: "Filmas nebuvo labai geras." },
          { en: "Was the shop open on Sunday?", lt: "Ar parduotuvė sekmadienį buvo atidaryta?" },
          { en: "There were a lot of people at the concert.", lt: "Koncerte buvo daug žmonių." }
        ],
        pitfalls: [
          "„You was“ – klaida. Su <code>you</code> visada <b>were</b>, net kai kalbi su vienu žmogumi: <i>You were late.</i>",
          "„Did you be at home?“ – klaida. Su <code>was/were</code> klausimas daromas sukeičiant tvarką: <i>Were you at home?</i>",
          "Lietuviškai sakome „buvo daug žmonių“ (vienaskaita), bet angliškai su daugiskaita – <i>There <b>were</b> a lot of people.</i>"
        ]
      },
      vocab: [
        { en: "yesterday", lt: "vakar" },
        { en: "last night", lt: "praėjusį vakarą / naktį" },
        { en: "last week", lt: "praėjusią savaitę" },
        { en: "last weekend", lt: "praėjusį savaitgalį" },
        { en: "two days ago", lt: "prieš dvi dienas" },
        { en: "the day before yesterday", lt: "užvakar" },
        { en: "at home", lt: "namie" },
        { en: "at work", lt: "darbe" },
        { en: "on holiday", lt: "atostogose" },
        { en: "tired", lt: "pavargęs" },
        { en: "busy", lt: "užsiėmęs" },
        { en: "late", lt: "pavėlavęs, vėlai" },
        { en: "born", lt: "gimęs" }
      ],
      phrases: [
        { en: "Where were you yesterday?", lt: "Kur buvai vakar?" },
        { en: "I was at a friend's place.", lt: "Buvau pas draugą." },
        { en: "How was your weekend?", lt: "Kaip praėjo savaitgalis?" },
        { en: "It was great / OK / terrible.", lt: "Buvo puiku / neblogai / baisu." },
        { en: "I was born in Kaunas.", lt: "Gimiau Kaune." }
      ],
      quiz: [
        { type: "choice", q: "Where ___ you last night?", options: ["was", "were", "did"], answer: 1,
          explain: "Su „you“ visada naudojame „were“." },
        { type: "choice", q: "My brother ___ at work yesterday.", options: ["were", "is", "was"], answer: 2,
          explain: "„My brother“ = he, todėl „was“. „Yesterday“ rodo būtąjį laiką." },
        { type: "choice", q: "There ___ many people in the shop.", options: ["was", "were", "be"], answer: 1,
          explain: "„People“ – daugiskaita, todėl „there were“." },
        { type: "input", q: "Išversk: Aš buvau pavargęs.", answer: ["I was tired", "I was tired."],
          explain: "„Aš“ = I, todėl „was“." },
        { type: "input", q: "Išversk: Ar jie buvo namie?", answer: ["Were they at home?", "Were they at home", "Were they home?", "Were they home"],
          explain: "Klausime „were“ eina prieš „they“. Be „did“!" },
        { type: "order", words: ["was", "your", "how", "weekend"], answer: "how was your weekend", lt: "Kaip praėjo tavo savaitgalis?" }
      ],
      speaking: {
        scenario: "Two colleagues meet on Monday morning at the coffee machine. The tutor is a curious colleague who wants to know where the learner was and what it was like during the weekend and last week.",
        tasks: [
          "Ask where the learner was on Friday evening, Saturday and Sunday; get a sentence with was/were for each.",
          "Ask what the place, weather and people were like (e.g. 'How was the weather? Was it crowded?').",
          "Have the learner ask you at least 3 questions with 'Where were you…?' / 'Was it…?' / 'Were there…?'.",
          "Ask where the learner was born and where they were five years ago."
        ],
        successCriteria: [
          "Uses was/were correctly in at least 8 sentences (no 'you was', no 'they was').",
          "Forms at least 3 correct questions by inversion (Was/Were + subject), without 'did'.",
          "Uses at least 2 negative forms (wasn't/weren't) correctly.",
          "Uses at least 3 different past time expressions (yesterday, last…, …ago)."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-02 ─────────────────────────
    {
      id: "a2-02",
      type: "lesson",
      icon: "🔊",
      title: "Past Simple: taisyklingi veiksmažodžiai",
      titleEn: "Past Simple – regular verbs (-ed)",
      canDo: [
        "Galiu papasakoti apie užbaigtus veiksmus praeityje taisyklingais veiksmažodžiais.",
        "Galiu teisingai ištarti galūnę -ed (/t/, /d/, /ɪd/)."
      ],
      grammar: {
        title: "Galūnė -ed ir jos tarimas",
        explanation: [
          "Past Simple naudojame kalbėdami apie <b>užbaigtą</b> veiksmą praeityje, dažnai su laiko žodžiu: <i>yesterday, last year, in 2020</i>. Lietuviškai tai atitinka „dirbau, žiūrėjau, paskambinau“.",
          "Taisyklingi veiksmažodžiai gauna <b>-ed</b>, ir forma <b>visiems asmenims vienoda</b>: <code>I worked, she worked, they worked</code>. Nereikia jokių asmenų galūnių kaip lietuvių kalboje!",
          "Rašyba: <code>live → lived</code> (tik -d), <code>study → studied</code> (priebalsis + y → ied), bet <code>play → played</code>; <code>stop → stopped</code> (trumpas žodis: priebalsis padvigubinamas).",
          "Tarimas: po <b>t, d</b> – /ɪd/ (<i>wanted, needed</i>, atsiranda papildomas skiemuo). Po bebalsių garsų <b>p, k, s, sh, ch, f</b> – /t/ (<i>worked, stopped, watched</i>). Po kitų – /d/ (<i>played, called, lived</i>).",
          "Svarbiausia: <i>worked</i> tariama kaip vienas skiemuo [wɜːkt], o ne „wor-ked“."
        ],
        table: [
          ["Tarimas", "Kada", "Pavyzdžiai"],
          ["/t/", "po p, k, s, sh, ch, f", "worked, stopped, washed, watched"],
          ["/d/", "po balsių ir skardžiųjų", "played, called, cleaned, lived"],
          ["/ɪd/", "po t, d", "wanted, needed, visited, started"]
        ],
        examples: [
          { en: "I worked late yesterday.", lt: "Vakar dirbau iki vėlumos." },
          { en: "We watched a film on Saturday.", lt: "Šeštadienį žiūrėjome filmą." },
          { en: "She called her mum last night.", lt: "Vakar vakare ji paskambino mamai." },
          { en: "They visited Vilnius in May.", lt: "Gegužę jie aplankė Vilnių." },
          { en: "I studied English at school.", lt: "Mokykloje mokiausi anglų kalbos." },
          { en: "The train stopped in Kaišiadorys.", lt: "Traukinys sustojo Kaišiadoryse." }
        ],
        pitfalls: [
          "Tarti kiekvieną -ed kaip atskirą skiemenį: „work-ed“, „watch-ed“. Teisingai – [wɜːkt], [wɒtʃt]. Atskiras skiemuo /ɪd/ tik po t ir d.",
          "Pamiršti -ed, nes laikas jau aiškus iš „yesterday“: „Yesterday I work“ ✗ → <i>Yesterday I worked</i> ✓.",
          "Rašybos klaidos: „studyed“, „stoped“ ✗ → <i>studied, stopped</i> ✓."
        ]
      },
      vocab: [
        { en: "work – worked", lt: "dirbti" },
        { en: "play – played", lt: "žaisti, groti" },
        { en: "watch – watched", lt: "žiūrėti" },
        { en: "listen – listened", lt: "klausytis" },
        { en: "cook – cooked", lt: "gaminti valgį" },
        { en: "clean – cleaned", lt: "valyti, tvarkyti" },
        { en: "visit – visited", lt: "aplankyti" },
        { en: "start – started", lt: "pradėti" },
        { en: "finish – finished", lt: "baigti" },
        { en: "travel – travelled", lt: "keliauti" },
        { en: "study – studied", lt: "mokytis, studijuoti" },
        { en: "stay – stayed", lt: "likti, apsistoti" },
        { en: "decide – decided", lt: "nuspręsti" }
      ],
      phrases: [
        { en: "I stayed at home and relaxed.", lt: "Likau namie ir ilsėjausi." },
        { en: "We travelled to Riga by bus.", lt: "Į Rygą keliavome autobusu." },
        { en: "It started at seven.", lt: "Prasidėjo septintą." },
        { en: "Then I cooked dinner.", lt: "Tada pagaminau vakarienę." },
        { en: "After that, we watched TV.", lt: "Po to žiūrėjome televizorių." }
      ],
      quiz: [
        { type: "choice", q: "Kaip tariama „wanted“ galūnė?", options: ["/t/", "/d/", "/ɪd/"], answer: 2,
          explain: "Po t ir d galūnė -ed tariama /ɪd/ – atsiranda papildomas skiemuo: want-ed." },
        { type: "choice", q: "Kaip tariama „watched“ galūnė?", options: ["/t/", "/d/", "/ɪd/"], answer: 0,
          explain: "Po „ch“ garso -ed tariama /t/: [wɒtʃt], vienas skiemuo." },
        { type: "choice", q: "Last year she ___ in London.", options: ["studyed", "studied", "studies"], answer: 1,
          explain: "Priebalsis + y → ied: study → studied." },
        { type: "input", q: "Įrašyk Past Simple: I ___ (play) football yesterday.", answer: ["played"],
          explain: "Balsė + y → tik -ed: play → played." },
        { type: "input", q: "Išversk: Mes aplankėme močiutę.", answer: ["We visited our grandma", "We visited our grandmother", "We visited grandma", "We visited my grandma", "We visited our granny"],
          explain: "visit → visited (tariama /ɪd/)." },
        { type: "order", words: ["the", "film", "at", "started", "eight"], answer: "the film started at eight", lt: "Filmas prasidėjo aštuntą." }
      ],
      speaking: {
        scenario: "The tutor is a friend calling the learner on Sunday evening to hear how their week went. Focus on regular verbs and correct -ed pronunciation.",
        tasks: [
          "Ask what the learner did on each day from Monday to Friday; elicit regular verbs (worked, cooked, watched, cleaned, visited...).",
          "Pick three verbs the learner used and ask them to repeat them, giving quick feedback on /t/, /d/, /ɪd/ pronunciation.",
          "Ask the learner to describe one evening in order using 'first, then, after that'.",
          "Have the learner ask you 2 questions about your week."
        ],
        successCriteria: [
          "Uses at least 8 different regular verbs in Past Simple.",
          "Pronounces -ed correctly in at least 5 of the verbs (no extra syllable in 'worked', 'watched'; /ɪd/ in 'wanted', 'visited').",
          "Does not drop -ed in past contexts more than once.",
          "Links events with at least 2 sequencers (first, then, after that)."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-03 ─────────────────────────
    {
      id: "a2-03",
      type: "lesson",
      icon: "🕰️",
      title: "Past Simple: netaisyklingi veiksmažodžiai",
      titleEn: "Past Simple – irregular verbs",
      canDo: [
        "Galiu naudoti 30 dažniausių netaisyklingų veiksmažodžių būtajame laike.",
        "Galiu papasakoti trumpą istoriją apie tai, kas nutiko."
      ],
      grammar: {
        title: "Formos, kurias reikia išmokti",
        explanation: [
          "Dalis dažniausių anglų veiksmažodžių negauna -ed – jų būtojo laiko formą reikia <b>išmokti atmintinai</b>: <code>go → went</code>, <code>see → saw</code>, <code>buy → bought</code>.",
          "Gera žinia: kaip ir taisyklingų veiksmažodžių, forma <b>visiems asmenims ta pati</b>: <i>I went, he went, we went</i>.",
          "Patarimas: mokykis grupėmis pagal skambesį – <code>buy/bought, bring/brought, think/thought</code>; <code>drink/drank, swim/swam, begin/began</code>; <code>get/got, forget/forgot</code>.",
          "Kai kurie nesikeičia visai: <code>put → put, cut → cut, cost → cost</code>. O <code>read</code> rašomas taip pat, bet tariamas [red]."
        ],
        table: [
          ["Veiksmažodis", "Past", "Veiksmažodis", "Past", "Veiksmažodis", "Past"],
          ["be", "was/were", "go", "went", "have", "had"],
          ["do", "did", "make", "made", "get", "got"],
          ["see", "saw", "come", "came", "take", "took"],
          ["eat", "ate", "drink", "drank", "buy", "bought"],
          ["say", "said", "tell", "told", "speak", "spoke"],
          ["give", "gave", "find", "found", "think", "thought"],
          ["know", "knew", "leave", "left", "meet", "met"],
          ["sleep", "slept", "feel", "felt", "lose", "lost"],
          ["write", "wrote", "read", "read [red]", "pay", "paid"],
          ["put", "put", "bring", "brought", "begin", "began"]
        ],
        examples: [
          { en: "I went to the market and bought some apples.", lt: "Nuėjau į turgų ir nusipirkau obuolių." },
          { en: "We met at a café and had coffee.", lt: "Susitikome kavinėje ir išgėrėme kavos." },
          { en: "She lost her keys yesterday.", lt: "Vakar ji pametė raktus." },
          { en: "I slept for ten hours!", lt: "Miegojau dešimt valandų!" },
          { en: "He told me a funny story.", lt: "Jis man papasakojo juokingą istoriją." },
          { en: "They left at six and came back at ten.", lt: "Jie išėjo šeštą ir grįžo dešimtą." }
        ],
        pitfalls: [
          "Pridėti -ed netaisyklingiems: „goed“, „buyed“, „eated“ ✗ → <i>went, bought, ate</i> ✓.",
          "Painioti <code>bought</code> (pirkau) ir <code>brought</code> (atnešiau) – skiriasi tik raide r.",
          "Naudoti esamąjį laiką pasakojant istoriją: „Yesterday I go to the shop and see…“ ✗ → <i>Yesterday I went to the shop and saw…</i> ✓."
        ]
      },
      vocab: [
        { en: "go – went", lt: "eiti, važiuoti" },
        { en: "see – saw", lt: "matyti" },
        { en: "buy – bought", lt: "pirkti" },
        { en: "bring – brought", lt: "atnešti" },
        { en: "eat – ate", lt: "valgyti" },
        { en: "meet – met", lt: "sutikti, susitikti" },
        { en: "leave – left", lt: "išvykti, palikti" },
        { en: "lose – lost", lt: "pamesti, pralaimėti" },
        { en: "find – found", lt: "rasti" },
        { en: "forget – forgot", lt: "pamiršti" },
        { en: "take – took", lt: "imti, nuvežti" },
        { en: "spend – spent", lt: "praleisti (laiką), išleisti (pinigus)" },
        { en: "feel – felt", lt: "jaustis" }
      ],
      phrases: [
        { en: "Guess what happened!", lt: "Atspėk, kas nutiko!" },
        { en: "Suddenly, I saw…", lt: "Staiga pamačiau…" },
        { en: "In the end, we found it.", lt: "Galiausiai radome." },
        { en: "I felt really happy.", lt: "Jaučiausi labai laimingas." },
        { en: "We spent the whole day there.", lt: "Praleidome ten visą dieną." }
      ],
      quiz: [
        { type: "choice", q: "Yesterday I ___ my old teacher in the street.", options: ["meet", "met", "meeted"], answer: 1,
          explain: "meet → met (netaisyklingas)." },
        { type: "choice", q: "She ___ a new phone last week.", options: ["bought", "brought", "buyed"], answer: 0,
          explain: "buy → bought (pirko). „Brought“ – atnešė." },
        { type: "choice", q: "We ___ to Klaipėda by train.", options: ["goed", "gone", "went"], answer: 2,
          explain: "go → went. „Gone“ – trečioji forma, Past Simple jos nenaudoja." },
        { type: "input", q: "Įrašyk Past Simple: I ___ (forget) my umbrella.", answer: ["forgot"],
          explain: "forget → forgot." },
        { type: "input", q: "Išversk: Aš pamečiau raktus.", answer: ["I lost my keys", "I lost my keys.", "I lost the keys"],
          explain: "lose → lost." },
        { type: "order", words: ["we", "the", "spent", "day", "whole", "there"], answer: "we spent the whole day there", lt: "Praleidome ten visą dieną." }
      ],
      speaking: {
        scenario: "Story time: the tutor and learner tell each other about a memorable day (a trip, a lost item, a funny situation). The tutor reacts with interest and asks follow-up questions.",
        tasks: [
          "Ask the learner to tell a story about a memorable day (trip, celebration, or a problem) in at least 6 sentences.",
          "Ask follow-up questions that require irregular verbs (Who did you meet? What did you buy? What did you eat?).",
          "Do a quick 'verb ping-pong': you say 5 base forms, the learner answers with the past form and a short sentence.",
          "Tell a short story of your own with 2 deliberate mistakes ('I goed…') and ask the learner to correct them."
        ],
        successCriteria: [
          "Uses at least 10 different irregular past forms correctly.",
          "Keeps the whole story in the past (no more than 1 slip into present tense).",
          "Does not add -ed to irregular verbs (no 'goed', 'buyed').",
          "Spots and corrects both deliberate mistakes in the tutor's story."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-04 ─────────────────────────
    {
      id: "a2-04",
      type: "lesson",
      icon: "🗓️",
      title: "Past Simple: klausimai ir neiginiai",
      titleEn: "Past Simple – questions & negatives (did / didn't)",
      canDo: [
        "Galiu paklausti, ką kas veikė savaitgalį, ir atsakyti.",
        "Galiu pasakyti, ko nedariau."
      ],
      grammar: {
        title: "Did ir didn't",
        explanation: [
          "Klausimams ir neiginiams Past Simple naudojame pagalbinį žodį <b>did</b> (visiems asmenims). Jis jau „neša“ būtąjį laiką, todėl pagrindinis veiksmažodis grįžta į <b>pradinę formą</b>.",
          "Neiginys: <code>I didn't go</code>, <code>She didn't see</code> (ne <i>didn't went</i>, ne <i>didn't saw</i>).",
          "Klausimas: <code>(Klausiamasis žodis) + did + veiksnys + veiksmažodis</code>: <i>Did you like it? What did you do? Where did they go?</i>",
          "Trumpi atsakymai: <i>Yes, I did. / No, I didn't.</i> – lietuviai dažnai atsako tik „Yes“, bet su <i>I did</i> skamba daug natūraliau.",
          "Išimtis: su <code>was/were</code> did nenaudojame (<i>Were you there?</i>)."
        ],
        table: [
          ["Forma", "Struktūra", "Pavyzdys"],
          ["+", "veiksnys + past forma", "I went to the gym."],
          ["–", "veiksnys + didn't + pradinė forma", "I didn't go to the gym."],
          ["?", "Did + veiksnys + pradinė forma", "Did you go to the gym?"],
          ["Wh-?", "Klaus. žodis + did + veiksnys + pradinė forma", "Where did you go?"]
        ],
        examples: [
          { en: "What did you do at the weekend?", lt: "Ką veikei savaitgalį?" },
          { en: "Did you have a good time? – Yes, I did.", lt: "Ar gerai praleidai laiką? – Taip." },
          { en: "I didn't sleep well last night.", lt: "Praėjusią naktį blogai miegojau." },
          { en: "Where did you go on holiday?", lt: "Kur atostogavai?" },
          { en: "We didn't buy anything.", lt: "Nieko nenupirkome." },
          { en: "Who did you meet there?", lt: "Ką ten sutikai?" },
          { en: "How long did it take?", lt: "Kiek laiko užtruko?" }
        ],
        pitfalls: [
          "Dvigubas būtasis laikas: „Did you went?“, „I didn't saw“ ✗ → <i>Did you go? I didn't see.</i> ✓ – praeitį jau rodo „did“.",
          "Klausimas be did, tik intonacija (kaip lietuviškai „Tu nuėjai?“): „You went to the party?“ ✗ (neformalu) → <i>Did you go to the party?</i> ✓.",
          "„What you did?“ ✗ → <i>What did you do?</i> ✓ – nepamiršk did ir pradinės formos „do“."
        ]
      },
      vocab: [
        { en: "at the weekend", lt: "savaitgalį" },
        { en: "go out", lt: "išeiti (pasilinksminti)" },
        { en: "stay in", lt: "likti namie" },
        { en: "have a good time", lt: "gerai praleisti laiką" },
        { en: "go shopping", lt: "apsipirkti" },
        { en: "go for a walk", lt: "eiti pasivaikščioti" },
        { en: "do the housework", lt: "tvarkyti namus" },
        { en: "have a barbecue", lt: "kepti šašlykus / grilį" },
        { en: "visit relatives", lt: "aplankyti gimines" },
        { en: "sleep in", lt: "ilgai pamiegoti" },
        { en: "relax", lt: "ilsėtis" },
        { en: "anything", lt: "ką nors (klaus./neig. sak.)" }
      ],
      phrases: [
        { en: "What did you get up to at the weekend?", lt: "Ką veikei savaitgalį?" },
        { en: "Did you do anything special?", lt: "Ar darei ką nors ypatingo?" },
        { en: "Not much, really.", lt: "Nieko ypatingo." },
        { en: "Sounds fun! Who did you go with?", lt: "Skamba smagiai! Su kuo ėjai?" },
        { en: "No, I didn't. I stayed in.", lt: "Ne. Likau namie." }
      ],
      quiz: [
        { type: "choice", q: "___ you see the match yesterday?", options: ["Do", "Did", "Were"], answer: 1,
          explain: "Su įprastu veiksmažodžiu (see) būtojo laiko klausime – Did." },
        { type: "choice", q: "I didn't ___ anything on Saturday.", options: ["did", "do", "done"], answer: 1,
          explain: "Po didn't – pradinė forma: didn't do." },
        { type: "choice", q: "Where ___ last summer?", options: ["did you go", "you went", "did you went"], answer: 0,
          explain: "Klausiamasis žodis + did + veiksnys + pradinė forma." },
        { type: "input", q: "Išversk: Ką veikei vakar?", answer: ["What did you do yesterday?", "What did you do yesterday"],
          explain: "What + did + you + do + yesterday." },
        { type: "input", q: "Paversk neiginiu: She bought a dress.", answer: ["She didn't buy a dress", "She didn't buy a dress.", "She did not buy a dress", "She did not buy a dress."],
          explain: "bought → didn't buy (pradinė forma)." },
        { type: "order", words: ["did", "who", "meet", "you", "there"], answer: "who did you meet there", lt: "Ką ten sutikai?" }
      ],
      speaking: {
        scenario: "Monday small talk at work. The tutor is a friendly colleague. Both sides ask about each other's weekend; the learner must ask as many questions as they answer.",
        tasks: [
          "Ask 'What did you do at the weekend?' and get the learner to describe Saturday and Sunday.",
          "Ask at least 4 yes/no questions (Did you…?) and expect short answers 'Yes, I did / No, I didn't'.",
          "Ask the learner to say 3 things they did NOT do at the weekend.",
          "Switch roles: the learner interviews you about your weekend with at least 5 questions (where, who, what, how long, did you like…)."
        ],
        successCriteria: [
          "Asks at least 5 correctly formed past questions with did + base form.",
          "Makes at least 3 correct negatives with didn't + base form (no 'didn't went').",
          "Uses short answers (Yes, I did / No, I didn't) at least twice.",
          "Responds naturally to the tutor's answers at least twice (e.g. 'Sounds fun!', 'Really?')."
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── a2-05 ─────────────────────────
    {
      id: "a2-05",
      type: "lesson",
      icon: "🎯",
      title: "be going to – planai ir ketinimai",
      titleEn: "be going to – plans & intentions",
      canDo: [
        "Galiu papasakoti apie savo planus ir ketinimus.",
        "Galiu paklausti kitų apie jų planus."
      ],
      grammar: {
        title: "Kai jau nusprendei: be going to",
        explanation: [
          "<b>be going to + veiksmažodis</b> naudojame kalbėdami apie <b>planus ir ketinimus</b> – tai, ką jau nusprendėme padaryti: <i>I'm going to learn to drive.</i> (Ketinu išmokti vairuoti.)",
          "Forma: <code>am / is / are + going to + pradinė forma</code>. Lietuviškai tai atitinka „ketinu, rengiuosi, planuoju“ arba tiesiog būsimąjį laiką.",
          "Taip pat sakome, kai <b>matome</b>, kad kažkas tuoj įvyks: <i>Look at those clouds! It's going to rain.</i>",
          "Neiginys: <code>I'm not going to…</code>, klausimas: <code>Are you going to…? What are you going to do?</code>",
          "Šnekamojoje kalboje <i>going to</i> dažnai skamba kaip „gonna“, bet rašyti taip nereikia."
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I'm going to visit my parents."],
          ["–", "She isn't going to buy a car."],
          ["?", "Are you going to watch the match?"],
          ["Wh-?", "What are you going to do this summer?"]
        ],
        examples: [
          { en: "I'm going to start running next week.", lt: "Kitą savaitę ketinu pradėti bėgioti." },
          { en: "We're going to paint the kitchen.", lt: "Ketiname nudažyti virtuvę." },
          { en: "He isn't going to change his job.", lt: "Jis neketina keisti darbo." },
          { en: "What are you going to do this weekend?", lt: "Ką veiksi šį savaitgalį?" },
          { en: "Are you going to take a holiday this year?", lt: "Ar šiemet ketini atostogauti?" },
          { en: "Be careful! You're going to fall!", lt: "Atsargiai! Tuoj nukrisi!" }
        ],
        pitfalls: [
          "Praleisti „to be“: „I going to visit“ ✗ → <i>I'm going to visit</i> ✓.",
          "Praleisti „to“: „I'm going visit“ ✗ → <i>I'm going to visit</i> ✓.",
          "Pridėti -ing ar -s prie antro veiksmažodžio: „She's going to buys / buying“ ✗ → <i>She's going to buy</i> ✓."
        ]
      },
      vocab: [
        { en: "plan", lt: "planas, planuoti" },
        { en: "next week / month / year", lt: "kitą savaitę / mėnesį / metus" },
        { en: "this summer", lt: "šią vasarą" },
        { en: "tomorrow", lt: "rytoj" },
        { en: "soon", lt: "netrukus" },
        { en: "learn to drive", lt: "išmokti vairuoti" },
        { en: "move house", lt: "persikraustyti" },
        { en: "save money", lt: "taupyti pinigus" },
        { en: "get fit", lt: "sustiprėti, įgauti formą" },
        { en: "give up (smoking)", lt: "mesti (rūkyti)" },
        { en: "redecorate", lt: "atnaujinti, perdažyti (kambarį)" },
        { en: "goal", lt: "tikslas" }
      ],
      phrases: [
        { en: "What are your plans for…?", lt: "Kokie tavo planai…?" },
        { en: "I'm going to… / I'm not going to…", lt: "Ketinu… / Neketinu…" },
        { en: "I'm thinking of…", lt: "Galvoju apie tai, kad…" },
        { en: "I haven't decided yet.", lt: "Dar nenusprendžiau." },
        { en: "Good luck with that!", lt: "Sėkmės!" }
      ],
      quiz: [
        { type: "choice", q: "I ___ going to learn Spanish.", options: ["am", "is", "–"], answer: 0,
          explain: "Su „I“ – am (I'm going to…). Be „to be“ sakinys neteisingas." },
        { type: "choice", q: "She's going to ___ a new flat.", options: ["buys", "buying", "buy"], answer: 2,
          explain: "Po „going to“ – pradinė forma." },
        { type: "choice", q: "Look at the sky! It ___ rain.", options: ["is going to", "goes to", "going to"], answer: 0,
          explain: "Matome ženklus – „It's going to rain“. Reikia „is“." },
        { type: "input", q: "Išversk: Ketinu mesti rūkyti.", answer: ["I'm going to give up smoking", "I am going to give up smoking", "I'm going to stop smoking", "I am going to stop smoking", "I'm going to quit smoking", "I am going to quit smoking"],
          explain: "I'm going to + give up / stop / quit smoking." },
        { type: "input", q: "Paversk klausimu: They are going to move house.", answer: ["Are they going to move house?", "Are they going to move house"],
          explain: "Klausime „are“ eina prieš „they“." },
        { type: "order", words: ["are", "what", "going", "you", "to", "do"], answer: "what are you going to do", lt: "Ką ketini daryti?" }
      ],
      speaking: {
        scenario: "New Year's resolutions / plans chat. The tutor is a friend over coffee asking about the learner's plans for the next weekend, the summer and the next year.",
        tasks: [
          "Ask about plans for this weekend, this summer and next year; get at least two plans for each.",
          "Ask about 3 things the learner is NOT going to do (e.g. bad habits to stop).",
          "Show a 'prediction' situation (e.g. 'It's 8:55 and your train leaves at 9:00 and you're still at home') and ask what is going to happen.",
          "Have the learner ask you at least 3 questions about your plans."
        ],
        successCriteria: [
          "Uses am/is/are + going to + base form correctly at least 8 times.",
          "Makes at least 2 correct negatives (I'm not going to…).",
          "Asks at least 3 correct questions (What are you going to…? Are you going to…?).",
          "Never omits 'am/is/are' or 'to' more than once."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-06 ─────────────────────────
    {
      id: "a2-06",
      type: "lesson",
      icon: "📅",
      title: "Present Continuous ateičiai – susitikimai ir kvietimai",
      titleEn: "Present Continuous for future arrangements",
      canDo: [
        "Galiu susitarti dėl susitikimo laiko ir vietos.",
        "Galiu pakviesti, priimti kvietimą arba mandagiai atsisakyti."
      ],
      grammar: {
        title: "Kai jau susitarta: I'm meeting…",
        explanation: [
          "Present Continuous (<code>am/is/are + -ing</code>) naudojame ne tik tam, kas vyksta dabar, bet ir <b>suplanuotiems susitikimams ateityje</b> – kai jau yra laikas, vieta, kiti žmonės: <i>I'm meeting Tom at 6.</i>",
          "Paprastai prireikia laiko žodžio: <i>tonight, tomorrow, on Friday, next week</i>. Be jo sakinys reikštų „dabar“.",
          "Skirtumas: <code>going to</code> – mano ketinimas (<i>I'm going to see a doctor</i> – nusprendžiau), <code>Present Continuous</code> – jau sutarta (<i>I'm seeing the doctor at 3</i> – užsiregistravau).",
          "Klausimai: <i>What are you doing on Saturday? Are you doing anything tonight?</i> – taip angliškai klausiama prieš kviečiant.",
          "Kvietimas: <code>Would you like to…? / Do you want to…? / How about…?</code>; atsakymai: <i>I'd love to! / Sorry, I can't. I'm working on Friday.</i>"
        ],
        table: [
          ["Funkcija", "Pavyzdys"],
          ["Klausti apie planus", "What are you doing on Friday evening?"],
          ["Susitarimas", "I'm having lunch with my boss on Monday."],
          ["Kvietimas", "Would you like to come to the cinema with me?"],
          ["Sutikimas", "I'd love to. What time?"],
          ["Atsisakymas", "Sorry, I can't. I'm visiting my parents."]
        ],
        examples: [
          { en: "I'm meeting Rūta for coffee tomorrow.", lt: "Rytoj susitinku su Rūta kavos." },
          { en: "We're flying to London on Friday.", lt: "Penktadienį skrendame į Londoną." },
          { en: "What are you doing this evening?", lt: "Ką veiki šį vakarą?" },
          { en: "She's starting her new job on Monday.", lt: "Pirmadienį ji pradeda naują darbą." },
          { en: "Are you free on Thursday?", lt: "Ar ketvirtadienį laisvas?" },
          { en: "Sorry, I can't. I'm working late.", lt: "Atsiprašau, negaliu. Dirbu iki vėlumos." },
          { en: "Let's meet at the station at half past six.", lt: "Susitikime stotyje pusę septynių." }
        ],
        pitfalls: [
          "Naudoti esamąjį laiką kaip lietuviškai („rytoj susitinku“): „Tomorrow I meet Tom“ ✗ → <i>I'm meeting Tom tomorrow</i> ✓.",
          "Naudoti „will“ jau sutartiems dalykams: „I will see the dentist at 3“ – skamba kaip spontaniškas sprendimas; natūraliau <i>I'm seeing the dentist at 3</i>.",
          "Prielinksniai: „in Friday“, „at the weekend“ (BrE) / „on the weekend“ (AmE), bet <i>on Friday, at 6 o'clock, in the morning</i>."
        ]
      },
      vocab: [
        { en: "appointment", lt: "vizitas (pas gydytoją ir pan.)" },
        { en: "arrangement", lt: "susitarimas" },
        { en: "invitation", lt: "kvietimas" },
        { en: "invite", lt: "kviesti" },
        { en: "free", lt: "laisvas" },
        { en: "available", lt: "galimas, laisvas" },
        { en: "diary / calendar", lt: "dienoraštis / kalendorius" },
        { en: "book", lt: "užsisakyti, rezervuoti" },
        { en: "cancel", lt: "atšaukti" },
        { en: "postpone", lt: "atidėti" },
        { en: "tonight", lt: "šįvakar" },
        { en: "the day after tomorrow", lt: "poryt" }
      ],
      phrases: [
        { en: "Are you doing anything on Saturday?", lt: "Ar šeštadienį ką nors veiki?" },
        { en: "Would you like to come?", lt: "Ar norėtum ateiti?" },
        { en: "I'd love to!", lt: "Mielai!" },
        { en: "Sorry, I can't. I'm … then.", lt: "Atsiprašau, negaliu. Tuo metu aš…" },
        { en: "How about Sunday instead?", lt: "O gal geriau sekmadienį?" },
        { en: "What time shall we meet?", lt: "Kada susitinkame?" }
      ],
      quiz: [
        { type: "choice", q: "I ___ my dentist at 4 tomorrow (jau užsiregistravau).", options: ["see", "am seeing", "saw"], answer: 1,
          explain: "Sutartas vizitas ateityje – Present Continuous: I'm seeing." },
        { type: "choice", q: "What ___ on Saturday evening?", options: ["are you doing", "do you do", "you are doing"], answer: 0,
          explain: "Klausiame apie sutartus planus: What are you doing…?" },
        { type: "choice", q: "Would you like to come to my party? – ___", options: ["Yes, I like.", "I'd love to!", "Yes, I would like."], answer: 1,
          explain: "Natūralus sutikimas – „I'd love to!“. „Yes, I like“ reiškia „man patinka“." },
        { type: "input", q: "Išversk: Penktadienį skrendame į Romą.", answer: ["We're flying to Rome on Friday", "We are flying to Rome on Friday", "On Friday we're flying to Rome", "On Friday we are flying to Rome"],
          explain: "Sutarta kelionė – Present Continuous; dienos su „on“." },
        { type: "input", q: "Išversk: Atsiprašau, negaliu.", answer: ["Sorry, I can't", "Sorry, I can't.", "I'm sorry, I can't", "Sorry, I cannot", "I'm sorry, I can't."],
          explain: "Mandagus atsisakymas: Sorry, I can't." },
        { type: "order", words: ["i", "meeting", "am", "my", "tonight", "sister"], answer: "i am meeting my sister tonight", lt: "Šįvakar susitinku su seserimi." }
      ],
      speaking: {
        scenario: "Phone call between two friends trying to find a time to meet next week. The tutor has a busy diary (Mon: gym, Tue: dentist, Wed: working late, Thu: free after 7, Fri: dinner with parents). Later, the tutor plays a clinic receptionist booking an appointment.",
        tasks: [
          "Ask the learner what they are doing on different days next week; they must invent a diary with at least 3 arrangements.",
          "Invite the learner to something; they must refuse once with a reason in Present Continuous and suggest an alternative.",
          "Agree together on a day, time and place; the learner should confirm the arrangement at the end.",
          "Role-play: you are a receptionist; the learner books an appointment (day, time, name)."
        ],
        successCriteria: [
          "Uses Present Continuous with a future time expression correctly at least 6 times.",
          "Makes at least 1 invitation (Would you like to…? / Do you want to…?) and refuses politely at least once with a reason.",
          "Uses correct prepositions of time (on Friday, at 7, in the morning) in at least 4 cases.",
          "Successfully agrees on a specific day, time and place and confirms it."
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── a2-07 ─────────────────────────
    {
      id: "a2-07",
      type: "lesson",
      icon: "⚖️",
      title: "Būdvardžių aukštesnysis laipsnis",
      titleEn: "Comparative adjectives",
      canDo: [
        "Galiu palyginti miestus, daiktus ir žmones.",
        "Galiu paaiškinti, kodėl renkuosi vieną daiktą, o ne kitą."
      ],
      grammar: {
        title: "-er, more ir than",
        explanation: [
          "Lietuviškai sakome „didesnis, brangesnis“. Angliškai yra du būdai: <b>trumpi</b> būdvardžiai (1 skiemuo) gauna <b>-er</b>: <code>cheap → cheaper</code>; <b>ilgi</b> (2+ skiemenys) – <b>more</b>: <code>expensive → more expensive</code>.",
          "2 skiemenų būdvardžiai, kurie baigiasi -y: <code>y → ier</code>: <i>easy → easier, busy → busier, happy → happier</i>.",
          "Rašyba: <code>big → bigger, hot → hotter</code> (dvigubinamas priebalsis), <code>nice → nicer</code>.",
          "Netaisyklingi: <b>good → better</b>, <b>bad → worse</b>, <b>far → further/farther</b>.",
          "Lietuvišką „negu / už“ atitinka <b>than</b>: <i>Vilnius is bigger than Kaunas.</i> Norint sustiprinti – <i>much / a bit</i>: <i>much cheaper, a bit more expensive</i>."
        ],
        table: [
          ["Būdvardis", "Taisyklė", "Aukštesnysis"],
          ["cheap, old, fast", "+ er", "cheaper, older, faster"],
          ["big, hot, thin", "dvigubas priebalsis + er", "bigger, hotter, thinner"],
          ["easy, busy, noisy", "y → ier", "easier, busier, noisier"],
          ["expensive, modern, comfortable", "more + būdvardis", "more expensive, more modern"],
          ["good / bad / far", "netaisyklingi", "better / worse / further"]
        ],
        examples: [
          { en: "Vilnius is bigger than Kaunas.", lt: "Vilnius didesnis už Kauną." },
          { en: "This phone is much cheaper than that one.", lt: "Šis telefonas daug pigesnis už tą." },
          { en: "London is more expensive than Riga.", lt: "Londonas brangesnis už Rygą." },
          { en: "The weather is better today.", lt: "Šiandien oras geresnis." },
          { en: "My new job is busier than my old one.", lt: "Mano naujas darbas įtemptesnis nei senasis." },
          { en: "The train is a bit slower, but it's more comfortable.", lt: "Traukinys šiek tiek lėtesnis, bet patogesnis." }
        ],
        pitfalls: [
          "Dvigubas laipsnis: „more better“, „more cheaper“ ✗ → <i>better, cheaper</i> ✓.",
          "„Than“ painiojimas su „that“ arba „as“: „bigger that / bigger as“ ✗ → <i>bigger than</i> ✓.",
          "„Gooder“, „badder“ ✗ → <i>better, worse</i> ✓."
        ]
      },
      vocab: [
        { en: "cheap", lt: "pigus" },
        { en: "expensive", lt: "brangus" },
        { en: "crowded", lt: "perpildytas, pilnas žmonių" },
        { en: "quiet", lt: "ramus, tylus" },
        { en: "noisy", lt: "triukšmingas" },
        { en: "safe", lt: "saugus" },
        { en: "dangerous", lt: "pavojingas" },
        { en: "modern", lt: "modernus" },
        { en: "comfortable", lt: "patogus" },
        { en: "reliable", lt: "patikimas" },
        { en: "heavy", lt: "sunkus" },
        { en: "light", lt: "lengvas" },
        { en: "friendly", lt: "draugiškas" }
      ],
      phrases: [
        { en: "Which one is better?", lt: "Kuris geresnis?" },
        { en: "It's much cheaper than…", lt: "Jis daug pigesnis už…" },
        { en: "It's a bit more expensive, but…", lt: "Šiek tiek brangesnis, bet…" },
        { en: "I prefer this one because…", lt: "Man labiau patinka šis, nes…" },
        { en: "In my opinion, … is nicer.", lt: "Mano nuomone, … gražesnis." }
      ],
      quiz: [
        { type: "choice", q: "My car is ___ than yours.", options: ["more fast", "faster", "more faster"], answer: 1,
          explain: "Trumpas būdvardis – tik -er: faster." },
        { type: "choice", q: "This hotel is ___ than the other one.", options: ["comfortabler", "more comfortable", "most comfortable"], answer: 1,
          explain: "Ilgas būdvardis – more comfortable." },
        { type: "choice", q: "Today the weather is ___ than yesterday.", options: ["more good", "gooder", "better"], answer: 2,
          explain: "good → better (netaisyklingas)." },
        { type: "input", q: "Įrašyk: Kaunas is ___ (big) than Šiauliai.", answer: ["bigger"],
          explain: "big → bigger (dvigubas g)." },
        { type: "input", q: "Išversk: Ryga brangesnė už Vilnių.", answer: ["Riga is more expensive than Vilnius", "Riga is more expensive than Vilnius."],
          explain: "expensive → more expensive + than." },
        { type: "order", words: ["is", "much", "the", "train", "cheaper"], answer: "the train is much cheaper", lt: "Traukinys daug pigesnis." }
      ],
      speaking: {
        scenario: "The tutor is a friend from abroad thinking about visiting Lithuania and also choosing between two products (e.g. two phones or two flats). The learner compares Lithuanian cities and helps choose the better product.",
        tasks: [
          "Ask the learner to compare their home town with Vilnius (or another city): size, prices, nightlife, nature, people.",
          "Present two options (e.g. Phone A: €300, big screen, heavy; Phone B: €500, lighter, better camera) and ask which is better and why.",
          "Ask the learner to compare life now and 10 years ago (cheaper, busier, easier…).",
          "Have the learner ask you at least 2 'Which is…?' questions."
        ],
        successCriteria: [
          "Uses at least 8 comparative forms correctly, including both -er and more.",
          "Uses 'than' correctly at least 4 times.",
          "Uses at least one irregular form (better/worse) correctly; no 'more better'.",
          "Gives a reason with 'because' for at least 2 choices."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-08 ─────────────────────────
    {
      id: "a2-08",
      type: "lesson",
      icon: "🏆",
      title: "Būdvardžių aukščiausiasis laipsnis",
      titleEn: "Superlative adjectives – best and worst experiences",
      canDo: [
        "Galiu papasakoti apie geriausią ar blogiausią savo patirtį.",
        "Galiu pasakyti, kas yra didžiausias, brangiausias, gražiausias."
      ],
      grammar: {
        title: "the …-est ir the most …",
        explanation: [
          "Aukščiausiasis laipsnis („didžiausias, gražiausias“) visada eina su <b>the</b>: trumpi būdvardžiai gauna <b>-est</b> (<i>the cheapest</i>), ilgi – <b>the most</b> (<i>the most beautiful</i>).",
          "Tos pačios rašybos taisyklės kaip ir aukštesniajame laipsnyje: <code>big → the biggest</code>, <code>easy → the easiest</code>, <code>nice → the nicest</code>.",
          "Netaisyklingi: <b>good → the best</b>, <b>bad → the worst</b>, <b>far → the furthest</b>.",
          "Vietai sakome <b>in</b>: <i>the tallest building in Vilnius</i>. Patirčiai labai dažna konstrukcija: <i>the best film I've ever seen</i> (geriausias filmas, kokį esu matęs) – išmok kaip frazę.",
          "Priešingybė – <b>the least</b>: <i>the least expensive</i> (pigiausias, mažiausiai brangus)."
        ],
        table: [
          ["Būdvardis", "Aukštesnysis", "Aukščiausiasis"],
          ["cheap", "cheaper", "the cheapest"],
          ["big", "bigger", "the biggest"],
          ["happy", "happier", "the happiest"],
          ["beautiful", "more beautiful", "the most beautiful"],
          ["good", "better", "the best"],
          ["bad", "worse", "the worst"]
        ],
        examples: [
          { en: "Vilnius is the biggest city in Lithuania.", lt: "Vilnius – didžiausias Lietuvos miestas." },
          { en: "It was the best holiday of my life.", lt: "Tai buvo geriausios mano gyvenimo atostogos." },
          { en: "That was the worst meal I've ever had.", lt: "Tai buvo blogiausias patiekalas, kokį esu valgęs." },
          { en: "Which is the most beautiful place in your country?", lt: "Kuri vieta tavo šalyje gražiausia?" },
          { en: "December is the busiest month in shops.", lt: "Gruodis – įtempčiausias mėnuo parduotuvėse." },
          { en: "This is the cheapest option.", lt: "Tai pigiausias variantas." }
        ],
        pitfalls: [
          "Praleisti „the“, nes lietuvių kalboje artikelių nėra: „It's best restaurant“ ✗ → <i>It's the best restaurant</i> ✓.",
          "„The most best“, „the most biggest“ ✗ → <i>the best, the biggest</i> ✓.",
          "„The biggest city of Lithuania“ – geriau <i>in Lithuania</i> (vietai naudojame „in“)."
        ]
      },
      vocab: [
        { en: "experience", lt: "patirtis, išgyvenimas" },
        { en: "amazing", lt: "nuostabus" },
        { en: "awful", lt: "baisus, siaubingas" },
        { en: "exciting", lt: "jaudinantis, įdomus" },
        { en: "boring", lt: "nuobodus" },
        { en: "delicious", lt: "skanus" },
        { en: "tall", lt: "aukštas (pastatas, žmogus)" },
        { en: "long", lt: "ilgas" },
        { en: "popular", lt: "populiarus" },
        { en: "memorable", lt: "įsimintinas" },
        { en: "ever", lt: "kada nors" },
        { en: "in the world", lt: "pasaulyje" }
      ],
      phrases: [
        { en: "What's the best … you've ever …?", lt: "Koks geriausias …, kokį esi …?" },
        { en: "The best thing was…", lt: "Geriausia buvo…" },
        { en: "The worst part was…", lt: "Blogiausia dalis buvo…" },
        { en: "It was the most … day of my life.", lt: "Tai buvo … mano gyvenimo diena." },
        { en: "I'll never forget it.", lt: "Niekada to nepamiršiu." }
      ],
      quiz: [
        { type: "choice", q: "It's ___ restaurant in town.", options: ["the best", "best", "the most good"], answer: 0,
          explain: "good → the best; nepamiršk „the“." },
        { type: "choice", q: "Mount Everest is ___ mountain in the world.", options: ["the higher", "the highest", "the most high"], answer: 1,
          explain: "Trumpas būdvardis: high → the highest." },
        { type: "choice", q: "This is ___ film I've ever seen.", options: ["the most interesting", "the interestingest", "most interesting"], answer: 0,
          explain: "Ilgas būdvardis: the most interesting." },
        { type: "input", q: "Įrašyk: That was ___ (bad) day of my life.", answer: ["the worst"],
          explain: "bad → the worst." },
        { type: "input", q: "Išversk: Kas yra pigiausias variantas?", answer: ["What is the cheapest option?", "What's the cheapest option?", "Which is the cheapest option?", "What is the cheapest option", "What's the cheapest option", "Which is the cheapest option"],
          explain: "cheap → the cheapest." },
        { type: "order", words: ["the", "it", "holiday", "was", "best", "my", "of", "life"], answer: "it was the best holiday of my life", lt: "Tai buvo geriausios mano gyvenimo atostogos." }
      ],
      speaking: {
        scenario: "A relaxed 'Top experiences' interview, like a podcast. The tutor is the host asking the learner about the best and worst moments of their life, travels and food.",
        tasks: [
          "Ask about the best trip the learner has ever had and what the best and worst parts were.",
          "Ask about the most delicious, the worst and the most unusual food they have tried.",
          "Ask the learner to name the biggest, the most beautiful and the most interesting places in Lithuania and say why.",
          "Have the learner ask you at least 3 superlative questions (What's the best…? Which is the most…?)."
        ],
        successCriteria: [
          "Uses at least 8 superlative forms correctly, including both -est and the most.",
          "Always includes 'the' before superlatives (max. 1 omission).",
          "Uses the best / the worst correctly; no 'the most best'.",
          "Tells one experience in at least 4 connected Past Simple sentences."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-09 ─────────────────────────
    {
      id: "a2-09",
      type: "lesson",
      icon: "🛒",
      title: "much / many / a lot of / a little / a few",
      titleEn: "Quantifiers – shopping and quantities",
      canDo: [
        "Galiu apsipirkti ir pasakyti, kiek ko reikia.",
        "Galiu paklausti apie kiekį ir kainą."
      ],
      grammar: {
        title: "Skaičiuojami ir neskaičiuojami daiktavardžiai",
        explanation: [
          "Angliškai svarbu, ar daiktą galima <b>suskaičiuoti</b> (<i>an apple, two apples</i>), ar ne (<i>milk, water, money, bread, cheese</i>). Neskaičiuojami neturi daugiskaitos ir neturi <i>a/an</i>.",
          "<b>many</b> + skaičiuojami daugiskaitoje (<i>many apples</i>), <b>much</b> + neskaičiuojami (<i>much milk</i>). Abu dažniausiai naudojami <b>klausimuose ir neiginiuose</b>: <i>How many eggs? We don't have much time.</i>",
          "Teiginiuose natūraliau <b>a lot of</b> – tinka abiem rūšims: <i>a lot of eggs, a lot of milk</i>.",
          "Mažai (bet pakankamai): <b>a few</b> + skaičiuojami (<i>a few tomatoes</i>), <b>a little</b> + neskaičiuojami (<i>a little sugar</i>).",
          "Atkreipk dėmesį: lietuviškai „pinigai“ ir „baldai“ – daugiskaita, o angliškai <i>money, furniture, information, advice</i> – neskaičiuojami: <i>How <b>much</b> money? The information <b>is</b>…</i>"
        ],
        table: [
          ["", "Skaičiuojami (apples)", "Neskaičiuojami (milk)"],
          ["Klausimas", "How many apples?", "How much milk?"],
          ["Neiginys", "There aren't many apples.", "There isn't much milk."],
          ["Teiginys", "a lot of apples", "a lot of milk"],
          ["Nedaug", "a few apples", "a little milk"]
        ],
        examples: [
          { en: "How much is this cheese?", lt: "Kiek kainuoja šis sūris?" },
          { en: "How many eggs do we need?", lt: "Kiek kiaušinių mums reikia?" },
          { en: "We've got a lot of bread.", lt: "Turime daug duonos." },
          { en: "There isn't much milk left.", lt: "Pieno liko nedaug." },
          { en: "Can I have a few bananas, please?", lt: "Galima kelis bananus?" },
          { en: "Just a little sugar, please.", lt: "Tik truputį cukraus, prašau." },
          { en: "I'd like a kilo of potatoes and a bottle of water.", lt: "Norėčiau kilogramo bulvių ir butelio vandens." }
        ],
        pitfalls: [
          "„How many money?“, „many informations“ ✗ → <i>How much money? much information</i> ✓ (neskaičiuojami).",
          "„a bread“, „a water“ ✗ → <i>some bread, a loaf of bread, a bottle of water</i> ✓.",
          "Painioti <code>a few</code> (keli – pakankamai) ir <code>few</code> (vos keli – trūksta). A2 lygyje dažniausiai reikia <i>a few / a little</i>."
        ]
      },
      vocab: [
        { en: "a bottle of", lt: "butelis" },
        { en: "a packet of", lt: "pakelis" },
        { en: "a loaf of bread", lt: "duonos kepalas" },
        { en: "a kilo of", lt: "kilogramas" },
        { en: "a can / tin of", lt: "skardinė" },
        { en: "a carton of", lt: "pakas (pieno, sulčių)" },
        { en: "a jar of", lt: "stiklainis" },
        { en: "a piece of", lt: "gabalas" },
        { en: "price", lt: "kaina" },
        { en: "receipt", lt: "kvitas, čekis" },
        { en: "change", lt: "grąža" },
        { en: "on offer / on sale", lt: "su nuolaida, akcija" },
        { en: "check-out", lt: "kasa (parduotuvėje)" }
      ],
      phrases: [
        { en: "How much is it? / How much are they?", lt: "Kiek kainuoja?" },
        { en: "I'd like…, please.", lt: "Norėčiau…, prašau." },
        { en: "Have you got any…?", lt: "Ar turite…?" },
        { en: "That's all, thanks.", lt: "Tai viskas, ačiū." },
        { en: "Can I pay by card?", lt: "Ar galiu mokėti kortele?" },
        { en: "Could I have a bag, please?", lt: "Gal galėčiau gauti maišelį?" }
      ],
      quiz: [
        { type: "choice", q: "How ___ apples do you want?", options: ["much", "many", "lot"], answer: 1,
          explain: "Apples – skaičiuojami, daugiskaita → many." },
        { type: "choice", q: "There isn't ___ coffee left.", options: ["much", "many", "a few"], answer: 0,
          explain: "Coffee – neskaičiuojamas → much (neiginyje)." },
        { type: "choice", q: "Can I have ___ sugar in my tea?", options: ["a few", "a little", "many"], answer: 1,
          explain: "Sugar – neskaičiuojamas → a little." },
        { type: "choice", q: "How much ___ do you have?", options: ["moneys", "money", "a money"], answer: 1,
          explain: "Money angliškai neskaičiuojamas – be -s ir be „a“." },
        { type: "input", q: "Išversk: Kiek tai kainuoja?", answer: ["How much is it?", "How much is it", "How much is this?", "How much is this", "How much does it cost?", "How much does it cost", "How much does this cost?", "How much does this cost", "How much is that?", "How much is that"],
          explain: "Apie kainą klausiame „How much…?“." },
        { type: "order", words: ["i", "a", "like", "of", "bread", "loaf", "would"], answer: "i would like a loaf of bread", lt: "Norėčiau duonos kepalo." }
      ],
      speaking: {
        scenario: "Shopping role-play. First the learner and tutor make a shopping list for a dinner party for 6 people (checking what is at home). Then the tutor is a shop assistant at a market stall / small grocery in the UK.",
        tasks: [
          "Plan the dinner together: ask 'How much/many … have we got?' and decide what to buy.",
          "Role-play the shop: the learner asks for at least 5 items with quantities (a kilo of, a bottle of, a few, a little).",
          "Ask about prices and pay; include one problem (an item is not available or too expensive) that the learner must solve.",
          "At the end ask the learner to summarise what they bought and how much it cost."
        ],
        successCriteria: [
          "Uses much/many correctly in at least 4 questions or negatives.",
          "Uses at least 4 different containers/quantities (a bottle of, a packet of, a kilo of…).",
          "Uses a few / a little correctly at least once each.",
          "Treats money, bread, milk as uncountable (no 'a bread', 'many money')."
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── a2-10 ─────────────────────────
    {
      id: "a2-10",
      type: "lesson",
      icon: "💡",
      title: "should / shouldn't – patarimai",
      titleEn: "should / shouldn't – giving advice",
      canDo: [
        "Galiu duoti ir paprašyti patarimo dėl sveikatos ir kelionių.",
        "Galiu papasakoti gydytojui ar vaistininkui, kas man negerai."
      ],
      grammar: {
        title: "Kaip patarti",
        explanation: [
          "<b>should</b> reiškia „turėtum, derėtų, vertėtų“ – tai patarimas, ne įsakymas: <i>You should see a doctor.</i> (Tau derėtų nueiti pas gydytoją.)",
          "Forma visiems asmenims vienoda, o po should – <b>pradinė forma be „to“</b>: <code>He should rest.</code> Neiginys: <b>shouldn't</b>: <i>You shouldn't eat so much sugar.</i>",
          "Klausimas: <code>Should I…?</code> – <i>Should I take an umbrella?</i> (Ar man pasiimti skėtį?) <i>What should I do?</i> (Ką man daryti?)",
          "Švelnesni patarimai: <i>I think you should… / I don't think you should…</i> (geriau nei „I think you shouldn't“). Taip pat: <i>Why don't you…? / If I were you, I'd…</i>"
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "You should drink more water."],
          ["–", "You shouldn't stay up late."],
          ["?", "Should I call a doctor?"],
          ["Wh-?", "What should I take with me?"]
        ],
        examples: [
          { en: "You've got a cold. You should stay in bed.", lt: "Esi peršalęs. Turėtum gulėti lovoje." },
          { en: "You shouldn't go to work with a temperature.", lt: "Neturėtum eiti į darbą su temperatūra." },
          { en: "What should I see in London?", lt: "Ką man vertėtų pamatyti Londone?" },
          { en: "I think you should book the hotel early.", lt: "Manau, viešbutį turėtum užsisakyti iš anksto." },
          { en: "I don't think you should drive tonight.", lt: "Nemanau, kad šįvakar turėtum vairuoti." },
          { en: "Why don't you take some painkillers?", lt: "Gal išgertum vaistų nuo skausmo?" }
        ],
        pitfalls: [
          "„You should to rest“ ✗ → <i>You should rest</i> ✓ – po should nereikia „to“.",
          "„He shoulds“, „she should goes“ ✗ → <i>he should, she should go</i> ✓ – jokių -s.",
          "Naudoti „must“ patarimams: „You must try this café“ skamba labai griežtai arba primygtinai; draugiškam patarimui – <i>You should…</i>."
        ]
      },
      vocab: [
        { en: "headache", lt: "galvos skausmas" },
        { en: "sore throat", lt: "gerklės skausmas" },
        { en: "cough", lt: "kosulys" },
        { en: "a cold", lt: "peršalimas" },
        { en: "a temperature / fever", lt: "karščiavimas, temperatūra" },
        { en: "stomachache", lt: "pilvo skausmas" },
        { en: "painkiller", lt: "vaistai nuo skausmo" },
        { en: "rest", lt: "ilsėtis, poilsis" },
        { en: "pharmacy / chemist's", lt: "vaistinė" },
        { en: "travel insurance", lt: "kelionės draudimas" },
        { en: "luggage", lt: "bagažas" },
        { en: "sightseeing", lt: "lankytinų vietų apžiūra" }
      ],
      phrases: [
        { en: "What's the matter? / What's wrong?", lt: "Kas atsitiko? / Kas negerai?" },
        { en: "I've got a headache.", lt: "Man skauda galvą." },
        { en: "What should I do?", lt: "Ką man daryti?" },
        { en: "You should… / You shouldn't…", lt: "Turėtum… / Neturėtum…" },
        { en: "Why don't you…?", lt: "Gal…? (pasiūlymas)" },
        { en: "That's a good idea, thanks.", lt: "Gera mintis, ačiū." }
      ],
      quiz: [
        { type: "choice", q: "You look tired. You ___ go to bed early.", options: ["should", "should to", "shoulds"], answer: 0,
          explain: "should + pradinė forma be „to“." },
        { type: "choice", q: "You ___ eat so much chocolate. It's bad for you.", options: ["should", "shouldn't", "don't should"], answer: 1,
          explain: "Neigiamas patarimas – shouldn't." },
        { type: "choice", q: "___ I take a jacket?", options: ["Do I should", "Should", "Shall to"], answer: 1,
          explain: "Klausimas: Should I…? (be do)." },
        { type: "input", q: "Išversk: Turėtum išgerti daugiau vandens.", answer: ["You should drink more water", "You should drink more water."],
          explain: "You should + drink." },
        { type: "input", q: "Išversk: Ką man daryti?", answer: ["What should I do?", "What should I do"],
          explain: "What + should + I + do." },
        { type: "order", words: ["you", "think", "i", "should", "a", "see", "doctor"], answer: "i think you should see a doctor", lt: "Manau, turėtum nueiti pas gydytoją." }
      ],
      speaking: {
        scenario: "Two situations. (1) The tutor is a friend who feels ill (headache, sore throat, no sleep) and asks for advice. (2) The tutor is planning a first trip to Lithuania and asks the learner for travel tips; then the learner describes their own symptoms to the tutor as a pharmacist.",
        tasks: [
          "Describe your symptoms and ask 'What should I do?'; the learner gives at least 4 pieces of advice.",
          "Ask for travel advice about Lithuania: what to see, what to eat, what not to do, what to pack.",
          "Swap roles: the learner is a patient at a pharmacy, describes symptoms and asks 'Should I…?' questions.",
          "React to one piece of advice with a problem ('But I have no time!') so the learner offers an alternative (Why don't you…?)."
        ],
        successCriteria: [
          "Uses should/shouldn't + base form correctly at least 8 times (no 'should to').",
          "Asks at least 2 correct questions with 'Should I…?' or 'What should I…?'.",
          "Uses at least one alternative advice structure (Why don't you…? / I think you should…).",
          "Correctly describes at least 3 symptoms (I've got a…, My … hurts)."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-11 ─────────────────────────
    {
      id: "a2-11",
      type: "lesson",
      icon: "📋",
      title: "must / mustn't / have to / don't have to",
      titleEn: "Rules & obligations",
      canDo: [
        "Galiu paaiškinti taisykles darbe, mokykloje ar viešose vietose.",
        "Galiu pasakyti, ką privalau, ko negalima ir ko daryti nebūtina."
      ],
      grammar: {
        title: "Privaloma, draudžiama ar nebūtina?",
        explanation: [
          "<b>must</b> ir <b>have to</b> abu reiškia „privalau, turiu“. <code>must</code> dažnai – kalbėtojo nuomonė ar užrašytos taisyklės (<i>Passengers must wear seat belts</i>), <code>have to</code> – išorinė prievolė (<i>I have to wear a uniform at work</i>). Šnekamojoje kalboje dažniau girdėsi <i>have to</i>.",
          "Po <b>must</b> – pradinė forma <b>be „to“</b>: <i>You must stop.</i> O <b>have to</b> – su „to“ ir keičiasi: <i>She <b>has</b> to work. Do you have to…?</i> Būtasis laikas – <b>had to</b> (must būtojo laiko neturi).",
          "Didžiausias spąstas – neiginiai! <b>mustn't</b> = <b>draudžiama</b> (negalima): <i>You mustn't smoke here.</i> <b>don't have to</b> = <b>nebūtina</b> (gali, bet nereikia): <i>You don't have to pay – it's free.</i>",
          "Lietuviškai „neprivalai“ ≈ <i>don't have to</i>, o „negalima, draudžiama“ ≈ <i>mustn't</i>."
        ],
        table: [
          ["Forma", "Reikšmė", "Pavyzdys"],
          ["must / have to", "privaloma", "You must show your passport."],
          ["mustn't", "draudžiama", "You mustn't park here."],
          ["don't have to", "nebūtina", "You don't have to wear a tie."],
          ["Do I have to…?", "ar privalau?", "Do I have to book a table?"],
          ["had to", "teko, turėjau (praeityje)", "I had to wait for an hour."]
        ],
        examples: [
          { en: "I have to get up at six on weekdays.", lt: "Darbo dienomis turiu keltis šeštą." },
          { en: "You mustn't use your phone during the exam.", lt: "Per egzaminą negalima naudotis telefonu." },
          { en: "We don't have to work on Saturday.", lt: "Šeštadienį dirbti nereikia." },
          { en: "Does she have to wear a uniform?", lt: "Ar ji privalo dėvėti uniformą?" },
          { en: "You must wear a helmet on a motorbike.", lt: "Motociklu važiuojant privaloma dėvėti šalmą." },
          { en: "I had to take a taxi because I missed the bus.", lt: "Teko važiuoti taksi, nes pavėlavau į autobusą." }
        ],
        pitfalls: [
          "„I must to go“ ✗ → <i>I must go</i> arba <i>I have to go</i> ✓.",
          "Painioti „mustn't“ ir „don't have to“: „You mustn't come tomorrow“ reiškia „draudžiu ateiti“! Jei nori pasakyti „nebūtina ateiti“ – <i>You don't have to come.</i>",
          "„She have to“, „Do she has to?“ ✗ → <i>She has to. Does she have to?</i> ✓; praeityje „I musted“ ✗ → <i>I had to</i> ✓."
        ]
      },
      vocab: [
        { en: "rule", lt: "taisyklė" },
        { en: "allowed", lt: "leidžiama" },
        { en: "forbidden", lt: "draudžiama" },
        { en: "uniform", lt: "uniforma" },
        { en: "seat belt", lt: "saugos diržas" },
        { en: "helmet", lt: "šalmas" },
        { en: "ID card", lt: "asmens tapatybės kortelė" },
        { en: "fine", lt: "bauda" },
        { en: "speed limit", lt: "greičio apribojimas" },
        { en: "deadline", lt: "galutinis terminas" },
        { en: "on time", lt: "laiku" },
        { en: "free of charge", lt: "nemokamai" }
      ],
      phrases: [
        { en: "Do I have to…?", lt: "Ar privalau…? / Ar reikia…?" },
        { en: "You don't have to, but…", lt: "Nebūtina, bet…" },
        { en: "Is it allowed to…? / Can I…here?", lt: "Ar čia galima…?" },
        { en: "Sorry, you mustn't… here.", lt: "Atsiprašau, čia negalima…" },
        { en: "I had to…", lt: "Man teko…" }
      ],
      quiz: [
        { type: "choice", q: "It's free. You ___ pay.", options: ["mustn't", "don't have to", "must"], answer: 1,
          explain: "Nemokama → mokėti nebūtina: don't have to." },
        { type: "choice", q: "You ___ smoke in the hospital. It's forbidden.", options: ["mustn't", "don't have to", "have to"], answer: 0,
          explain: "Draudžiama → mustn't." },
        { type: "choice", q: "I must ___ now. My bus is leaving.", options: ["to go", "go", "going"], answer: 1,
          explain: "Po must – pradinė forma be „to“." },
        { type: "choice", q: "My sister ___ work on Sundays.", options: ["have to", "has to", "must to"], answer: 1,
          explain: "He/she/it → has to." },
        { type: "input", q: "Išversk: Vakar turėjau dirbti iki vėlumos.", answer: ["I had to work late yesterday", "Yesterday I had to work late", "I had to work late yesterday.", "Yesterday I had to work late."],
          explain: "Praeityje: had to (ne „musted“)." },
        { type: "order", words: ["i", "do", "to", "have", "a", "book", "table"], answer: "do i have to book a table", lt: "Ar reikia užsisakyti staliuką?" }
      ],
      speaking: {
        scenario: "The tutor is a new colleague (or a foreign student) who has just arrived in Lithuania and asks the learner about rules: at the learner's workplace, on the road, in public transport and at home.",
        tasks: [
          "Ask about rules at the learner's job: what they have to do, what they mustn't do, what they don't have to do.",
          "Ask about Lithuanian rules on roads and in public transport (tickets, ID, seat belts, alcohol, speed).",
          "Ask about something the learner had to do last week that they didn't enjoy.",
          "Give 3 statements mixing mustn't / don't have to wrongly (e.g. 'So I mustn't wear a suit on Fridays?') and let the learner correct you."
        ],
        successCriteria: [
          "Uses have to / has to / must correctly at least 6 times (no 'must to').",
          "Distinguishes mustn't (prohibition) and don't have to (no obligation) correctly in at least 4 sentences.",
          "Uses 'had to' at least once for the past.",
          "Asks at least 2 correct questions with 'Do I/you have to…?'."
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── a2-12 ─────────────────────────
    {
      id: "a2-12",
      type: "lesson",
      icon: "❤️",
      title: "Įvardžiai, like / love / hate + -ing, would like",
      titleEn: "Object pronouns, likes & dislikes, offers",
      canDo: [
        "Galiu pasakyti, kas man patinka ir nepatinka.",
        "Galiu mandagiai ką nors pasiūlyti ir priimti ar atsisakyti pasiūlymo."
      ],
      grammar: {
        title: "Me, him, her… ir „patinka“ vs „norėčiau“",
        explanation: [
          "Objekto įvardžiai (kam? ką?) eina <b>po veiksmažodžio ar prielinksnio</b>: <code>I → me, you → you, he → him, she → her, it → it, we → us, they → them</code>. <i>Call <b>me</b>. I like <b>her</b>. This is for <b>them</b>.</i>",
          "Apie pomėgius: <b>like / love / enjoy / hate / don't mind + -ing</b>: <i>I love cooking. She hates getting up early. I don't mind waiting.</i>",
          "Svarbu: <b>I like</b> = man apskritai patinka; <b>I'd like (= I would like)</b> = norėčiau dabar/konkrečiai. <i>I like coffee</i> (mėgstu kavą) ≠ <i>I'd like a coffee</i> (norėčiau kavos).",
          "Pasiūlymai: <code>Would you like a drink? / Would you like to sit down?</code> Atsakymai: <i>Yes, please. / I'd love one. / No, thanks, I'm fine.</i> Po <i>would like</i> – <b>to + veiksmažodis</b>: <i>I'd like to go.</i>"
        ],
        table: [
          ["Veiksnys", "Objektas", "Pavyzdys"],
          ["I", "me", "Can you help me?"],
          ["he", "him", "I called him yesterday."],
          ["she", "her", "Do you know her?"],
          ["we", "us", "Come with us!"],
          ["they", "them", "I love them."],
          ["like + -ing", "pomėgis", "I like swimming."],
          ["would like + to", "noras / pasiūlymas", "Would you like to dance?"]
        ],
        examples: [
          { en: "I really enjoy reading in the evening.", lt: "Labai mėgstu skaityti vakarais." },
          { en: "My husband hates shopping.", lt: "Mano vyras nekenčia apsipirkinėti." },
          { en: "I don't mind cooking, but I hate washing up.", lt: "Gaminti man nesunku, bet nekenčiu plauti indų." },
          { en: "Would you like some tea? – Yes, please.", lt: "Ar norėtum arbatos? – Taip, prašau." },
          { en: "I'd like to book a table for two.", lt: "Norėčiau užsisakyti staliuką dviem." },
          { en: "Tell him to call us.", lt: "Pasakyk jam, kad mums paskambintų." },
          { en: "Do you like them? – Yes, I love them!", lt: "Ar jie tau patinka? – Taip, labai!" }
        ],
        pitfalls: [
          "Lietuviškai „man patinka“, todėl sakoma „Me like…“ arba „It likes me“ ✗ → <i>I like it</i> ✓ (veiksnys – tas, kam patinka).",
          "Painioti like ir would like: „I like a coffee, please“ ✗ → <i>I'd like a coffee, please</i> ✓.",
          "Veiksnio įvardis po veiksmažodžio: „She loves he“, „between you and I“ ✗ → <i>She loves him, between you and me</i> ✓."
        ]
      },
      vocab: [
        { en: "enjoy", lt: "mėgautis, mėgti" },
        { en: "hate", lt: "nekęsti" },
        { en: "don't mind", lt: "neprieštarauti, nieko prieš" },
        { en: "can't stand", lt: "negaliu pakęsti" },
        { en: "be into", lt: "domėtis, būti sužavėtam" },
        { en: "hobby", lt: "pomėgis" },
        { en: "gardening", lt: "sodininkystė" },
        { en: "hiking", lt: "žygiai pėsčiomis" },
        { en: "washing up", lt: "indų plovimas" },
        { en: "ironing", lt: "lyginimas" },
        { en: "offer", lt: "pasiūlymas, siūlyti" },
        { en: "something to drink", lt: "kažko atsigerti" }
      ],
      phrases: [
        { en: "What do you like doing in your free time?", lt: "Ką mėgsti veikti laisvalaikiu?" },
        { en: "I'm really into…", lt: "Labai domiuosi…" },
        { en: "Would you like…?", lt: "Ar norėtum…?" },
        { en: "Yes, please. / No, thanks.", lt: "Taip, prašau. / Ne, ačiū." },
        { en: "Can I get you anything?", lt: "Ar galiu tau ką nors atnešti?" },
        { en: "Me too! / Me neither.", lt: "Aš irgi! / Aš irgi ne." }
      ],
      quiz: [
        { type: "choice", q: "I love ___ in the sea.", options: ["swim", "swimming", "to swimming"], answer: 1,
          explain: "love + -ing: I love swimming." },
        { type: "choice", q: "Waiter: What can I get you? You: I ___ a glass of water, please.", options: ["like", "'d like", "am liking"], answer: 1,
          explain: "Konkretus noras dabar – I'd like (I would like)." },
        { type: "choice", q: "Where's Tomas? I can't see ___.", options: ["he", "him", "his"], answer: 1,
          explain: "Po veiksmažodžio – objekto įvardis: him." },
        { type: "choice", q: "Can you help ___? We're lost.", options: ["we", "our", "us"], answer: 2,
          explain: "we → us (objektas)." },
        { type: "input", q: "Išversk: Ar norėtum arbatos?", answer: ["Would you like some tea?", "Would you like some tea", "Would you like a tea?", "Would you like a tea", "Would you like tea?", "Would you like tea", "Would you like a cup of tea?", "Would you like a cup of tea"],
          explain: "Pasiūlymas: Would you like…?" },
        { type: "order", words: ["she", "getting", "hates", "early", "up"], answer: "she hates getting up early", lt: "Ji nekenčia anksti keltis." }
      ],
      speaking: {
        scenario: "The learner visits the tutor's home for the first time. The tutor is a friendly host offering drinks and food, then they chat about hobbies, likes and dislikes, and people they both know.",
        tasks: [
          "Offer at least 3 things (a drink, something to eat, to sit somewhere); the learner accepts or refuses politely.",
          "Ask what the learner likes, loves, hates and doesn't mind doing (free time, housework, sport).",
          "Ask about family members or friends ('What does your sister like doing? Do you see her often?') to elicit object pronouns.",
          "Have the learner make at least 2 offers to you (e.g. 'Would you like to come to…?')."
        ],
        successCriteria: [
          "Uses like/love/enjoy/hate/don't mind + -ing correctly at least 6 times.",
          "Distinguishes 'I like' and 'I'd like' correctly in context (no 'I like a coffee, please').",
          "Uses at least 4 different object pronouns correctly (me, him, her, us, them).",
          "Makes at least 2 offers with 'Would you like…?' and responds to offers politely (Yes, please / No, thanks)."
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── a2-13 ─────────────────────────
    {
      id: "a2-13",
      type: "lesson",
      icon: "🧭",
      title: "Kelio nurodymai ir judėjimo prielinksniai",
      titleEn: "Directions, imperatives & prepositions of movement",
      canDo: [
        "Galiu paklausti kelio ir suprasti paprastus nurodymus.",
        "Galiu paaiškinti kitam, kaip nueiti į tam tikrą vietą."
      ],
      grammar: {
        title: "Liepiamoji nuosaka ir prielinksniai",
        explanation: [
          "Liepiamoji nuosaka angliškai labai paprasta – tiesiog <b>pradinė forma</b>, be įvardžio: <i>Go straight on. Turn left. Take the second right.</i> Neiginys – <b>Don't</b>: <i>Don't cross here.</i>",
          "Nors forma trumpa, angliškai tai nėra nemandagu nurodant kelią. Bet prašant pagalbos naudok mandagias frazes: <i>Excuse me, could you tell me how to get to…? / Is there a … near here?</i>",
          "Judėjimo prielinksniai: <code>along</code> (palei, gatve), <code>across</code> (skersai, per), <code>past</code> (pro šalį), <code>through</code> (per – pro vidų), <code>over</code> (per – virš), <code>into / out of</code> (į / iš), <code>up / down</code> (aukštyn / žemyn), <code>towards</code> (link).",
          "Vietos prielinksniai pabaigai: <i>It's <b>on</b> the left / <b>opposite</b> the bank / <b>next to</b> the café / <b>between</b> … and … / <b>on the corner</b> of…</i>"
        ],
        table: [
          ["Nurodymas", "Reikšmė"],
          ["Go straight on / ahead.", "Eik tiesiai."],
          ["Turn left / right.", "Pasuk kairėn / dešinėn."],
          ["Take the first / second left.", "Sukite į pirmą / antrą gatvę kairėn."],
          ["Go along this street.", "Eik šia gatve."],
          ["Go past the church.", "Praeik pro bažnyčią."],
          ["Cross the road / Go across the bridge.", "Pereik gatvę / per tiltą."],
          ["It's on your left / opposite the station.", "Tai kairėje / priešais stotį."]
        ],
        examples: [
          { en: "Excuse me, how do I get to the train station?", lt: "Atsiprašau, kaip nueiti į traukinių stotį?" },
          { en: "Go along this street and turn right at the traffic lights.", lt: "Eik šia gatve ir prie šviesoforo pasuk dešinėn." },
          { en: "Walk past the post office and cross the bridge.", lt: "Praeik pro paštą ir pereik per tiltą." },
          { en: "The museum is opposite the cathedral.", lt: "Muziejus – priešais katedrą." },
          { en: "Take the second left. It's on the corner.", lt: "Sukite į antrą gatvę kairėn. Tai ant kampo." },
          { en: "Don't take the underpass – it's closed.", lt: "Neik požeminiu perėjimu – jis uždarytas." },
          { en: "It's about five minutes' walk from here.", lt: "Tai maždaug penkios minutės pėsčiomis nuo čia." }
        ],
        pitfalls: [
          "Pridėti „you“ arba „to“: „You go straight“ (skamba kaip pasakojimas), „To turn left“ ✗ → <i>Go straight on. Turn left.</i> ✓.",
          "„Turn on the left“ ✗ → <i>Turn left</i> ✓; bet <i>It's on the left</i> ✓ (vieta).",
          "„Go through the bridge“ ✗ → <i>Go over / across the bridge</i> ✓ (through – pro vidų: tunelį, parką)."
        ]
      },
      vocab: [
        { en: "traffic lights", lt: "šviesoforas" },
        { en: "crossroads / junction", lt: "sankryža" },
        { en: "roundabout", lt: "žiedinė sankryža" },
        { en: "corner", lt: "kampas" },
        { en: "bridge", lt: "tiltas" },
        { en: "pedestrian crossing", lt: "pėsčiųjų perėja" },
        { en: "opposite", lt: "priešais" },
        { en: "next to", lt: "šalia" },
        { en: "along", lt: "palei, išilgai" },
        { en: "past", lt: "pro (šalį)" },
        { en: "across", lt: "skersai, per" },
        { en: "through", lt: "per (pro vidų)" },
        { en: "get lost", lt: "pasiklysti" }
      ],
      phrases: [
        { en: "Excuse me, is there a pharmacy near here?", lt: "Atsiprašau, ar netoliese yra vaistinė?" },
        { en: "How do I get to…?", lt: "Kaip nueiti / nuvažiuoti į…?" },
        { en: "Is it far from here?", lt: "Ar tai toli nuo čia?" },
        { en: "Sorry, could you repeat that?", lt: "Atsiprašau, gal galite pakartoti?" },
        { en: "So, I go… and then…, right?", lt: "Vadinasi, einu… o tada…, taip?" },
        { en: "You can't miss it.", lt: "Tikrai nepraeisite." }
      ],
      quiz: [
        { type: "choice", q: "Go ___ the bridge and turn left.", options: ["through", "across", "in"], answer: 1,
          explain: "Per tiltą – across (arba over). Through – pro vidų." },
        { type: "choice", q: "The bank is ___ the post office, on the other side of the street.", options: ["opposite", "along", "past"], answer: 0,
          explain: "Kitoje gatvės pusėje, priešais – opposite." },
        { type: "choice", q: "Kaip mandagiai paklausti kelio?", options: ["Where is station?", "Excuse me, how do I get to the station?", "Tell me the station."], answer: 1,
          explain: "Excuse me + How do I get to…? – mandagu ir natūralu." },
        { type: "input", q: "Išversk: Pasuk dešinėn prie šviesoforo.", answer: ["Turn right at the traffic lights", "Turn right at the traffic lights.", "Turn right at the lights", "Turn right at the traffic light"],
          explain: "Liepiamoji nuosaka: Turn right + at the traffic lights." },
        { type: "input", q: "Išversk: Nepereik gatvės čia.", answer: ["Don't cross the road here", "Don't cross the street here", "Do not cross the road here", "Do not cross the street here"],
          explain: "Neigiama liepiamoji nuosaka: Don't + pradinė forma." },
        { type: "order", words: ["along", "go", "street", "this", "past", "and", "the", "church"], answer: "go along this street and past the church", lt: "Eik šia gatve ir pro bažnyčią." }
      ],
      speaking: {
        scenario: "Tourist and local in the learner's town (or Vilnius Old Town). First the tutor is a lost tourist asking the learner for directions; then the tutor is a local and the learner is a tourist in London asking for the way. The tutor describes a simple map verbally if needed.",
        tasks: [
          "As a tourist, ask the learner how to get from the main square/station to 2 places (e.g. a pharmacy, a museum); the learner gives step-by-step directions.",
          "Ask the learner to repeat or clarify one step, and to say how long it takes.",
          "Swap roles: give the learner directions in London with 4–5 steps; the learner must check understanding by repeating them back.",
          "Ask the learner to recommend one route and one thing they mustn't do on the way (e.g. 'Don't take bus 5, it's slow')."
        ],
        successCriteria: [
          "Gives at least 2 complete sets of directions with at least 4 steps each using imperatives.",
          "Uses at least 5 different prepositions of movement/place correctly (along, across, past, through, opposite, next to…).",
          "Asks for directions politely (Excuse me, how do I get to…? / Is there a … near here?).",
          "Checks understanding or repeats back directions correctly at least once."
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── a2-14 checkpoint ─────────────────────────
    {
      id: "a2-14",
      type: "checkpoint",
      icon: "🎓",
      title: "A2 lygio egzaminas",
      titleEn: "A2 Checkpoint",
      canDo: [
        "Galiu papasakoti apie praeitį, savo planus ir susitarimus.",
        "Galiu palyginti, patarti, paaiškinti taisykles ir nurodyti kelią.",
        "Galiu susikalbėti kasdienėse situacijose: parduotuvėje, kelionėje, pas gydytoją."
      ],
      grammar: {
        title: "Ką kartojame",
        explanation: [
          "<b>Praeitis:</b> was/were; Past Simple su -ed (ir jo tarimas /t/ /d/ /ɪd/); dažniausi netaisyklingi veiksmažodžiai; klausimai ir neiginiai su did/didn't + pradinė forma.",
          "<b>Ateitis:</b> be going to – ketinimai ir spėjimai pagal ženklus; Present Continuous – jau sutarti susitikimai (I'm meeting… on Friday).",
          "<b>Palyginimai ir kiekiai:</b> -er / more … than, the -est / the most; better, worse, the best, the worst; much / many / a lot of / a few / a little.",
          "<b>Modaliniai:</b> should – patarimas; must / have to – prievolė; mustn't – draudžiama; don't have to – nebūtina (visi be „to“, išskyrus have to).",
          "<b>Kasdienė komunikacija:</b> objekto įvardžiai, like + -ing ir would like, pasiūlymai, kelio nurodymai ir judėjimo prielinksniai."
        ],
        table: [
          ["Tema", "Teisingai", "Dažna klaida"],
          ["Past Simple ?", "Did you go?", "Did you went?"],
          ["Palyginimas", "better than", "more better that"],
          ["Modalinis", "I must go.", "I must to go."],
          ["Nebūtina", "You don't have to pay.", "You mustn't pay."],
          ["Noras", "I'd like a coffee.", "I like a coffee, please."]
        ],
        examples: [
          { en: "Last summer we went to Italy. It was the best trip ever.", lt: "Praėjusią vasarą važiavome į Italiją. Tai buvo geriausia kelionė." },
          { en: "I'm going to save money for a new car.", lt: "Ketinu taupyti naujam automobiliui." },
          { en: "I'm meeting my boss at ten tomorrow.", lt: "Rytoj dešimtą susitinku su vadovu." },
          { en: "Trains are more comfortable than buses.", lt: "Traukiniai patogesni nei autobusai." },
          { en: "You should drink a lot of water and you mustn't drive.", lt: "Turėtum gerti daug vandens ir negalima vairuoti." },
          { en: "Go past the bank and it's on your right.", lt: "Praeik pro banką – tai bus dešinėje." }
        ],
        pitfalls: [
          "Did + būtojo laiko forma („did went“) – po did visada pradinė forma.",
          "„more better“, „the most biggest“ – tik viena laipsnio žymė.",
          "„must to“, „should to“ ir mustn't / don't have to painiojimas."
        ]
      },
      vocab: [],
      phrases: [
        { en: "Could you say that again, please?", lt: "Gal galite pakartoti?" },
        { en: "Let me think…", lt: "Leiskite pagalvoti…" },
        { en: "What I mean is…", lt: "Turiu omenyje, kad…" },
        { en: "How do you say … in English?", lt: "Kaip angliškai pasakyti…?" }
      ],
      quiz: [
        { type: "choice", q: "Where ___ you go last weekend?", options: ["were", "did", "do"], answer: 1,
          explain: "Su veiksmažodžiu „go“ būtajame laike klausiame su did." },
        { type: "choice", q: "This bag is ___ than that one.", options: ["more heavy", "heavier", "more heavier"], answer: 1,
          explain: "heavy → heavier (y → ier)." },
        { type: "choice", q: "It's a public holiday tomorrow, so we ___ go to work.", options: ["mustn't", "don't have to", "shouldn't to"], answer: 1,
          explain: "Nebūtina eiti → don't have to." },
        { type: "choice", q: "How ___ water do you drink a day?", options: ["many", "much", "few"], answer: 1,
          explain: "Water – neskaičiuojamas → much." },
        { type: "input", q: "Išversk: Rytoj susitinku su Tomu.", answer: ["I'm meeting Tom tomorrow", "I am meeting Tom tomorrow", "Tomorrow I'm meeting Tom", "Tomorrow I am meeting Tom", "I'm meeting Tomas tomorrow", "I am meeting Tomas tomorrow", "Tomorrow I'm meeting Tomas", "Tomorrow I am meeting Tomas"],
          explain: "Sutartas susitikimas → Present Continuous." },
        { type: "order", words: ["you", "should", "a", "see", "doctor"], answer: "you should see a doctor", lt: "Turėtum nueiti pas gydytoją." }
      ],
      speaking: {
        scenario: "A2 speaking exam modelled on Cambridge A2 Key Speaking. The tutor is a friendly examiner. Part 1: personal questions about past and future. Part 2: mixed role-plays covering all A2 topics. Keep it warm but don't help too much; note errors for feedback at the end.",
        tasks: [
          "Part 1 – Interview: ask what the learner did last weekend and last summer (Past Simple incl. was/were, did/didn't) and what they are going to do next year.",
          "Arrangements & invitation: invite the learner to an event; they check their 'diary' (Present Continuous), refuse one day and agree on another day and time.",
          "Comparing & advice: ask the learner to compare two cities or products (comparatives and superlatives), then describe a health or travel problem and ask for advice (should/shouldn't).",
          "Rules & shopping: ask about rules at their work or in Lithuania (must/have to/mustn't/don't have to), then a short shop role-play with quantities (much/many, a few, a little, containers).",
          "Directions & offers: as a tourist ask for directions to a place in their town; at the end offer the learner a drink and ask about their hobbies (like + -ing, would like)."
        ],
        successCriteria: [
          "Uses Past Simple (regular, irregular, was/were, did questions and negatives) correctly in at least 80% of past sentences, including at least 6 irregular verbs.",
          "Uses both 'going to' and Present Continuous for the future appropriately at least twice each.",
          "Produces at least 3 correct comparative/superlative forms and at least 3 correct modal sentences (should, have to, mustn't/don't have to) with no 'to' after must/should.",
          "Gives clear directions with at least 4 steps and handles the shopping role-play using correct quantifiers.",
          "Keeps the conversation going: asks the examiner at least 4 questions and asks for repetition/clarification when needed."
        ],
        minLearnerTurns: 16
      }
    }
  ]
});
