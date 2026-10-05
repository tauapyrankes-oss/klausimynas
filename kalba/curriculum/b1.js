(window.LEVELS = window.LEVELS || []).push({
  id: "b1",
  name: "B1",
  title: "Savarankiškas vartotojas",
  description: "Po šio lygio galėsi savarankiškai susikalbėti daugumoje kasdienių, kelionių ir darbo situacijų: papasakoti istoriją, pareikšti ir pagrįsti nuomonę, perduoti žinutę ir mandagiai paprašyti ar pasiskųsti.",
  lessons: [
    // ---------------------------------------------------------------- 1
    {
      id: "b1-01",
      type: "lesson",
      icon: "⏳",
      title: "Present Perfect Continuous: kiek laiko tai trunka",
      titleEn: "Present Perfect Continuous – for and since",
      canDo: [
        "Galiu pasakyti, kiek laiko kažką darau (gyvenu, dirbu, mokausi).",
        "Galiu paaiškinti, kodėl esu pavargęs ar ką ką tik veikiau."
      ],
      grammar: {
        title: "have/has been + -ing ir for / since",
        explanation: [
          "Kai lietuviškai sakome <i>„Mokausi anglų jau dvejus metus“</i>, naudojame esamąjį laiką. Anglų kalba taip sakyti negalima – reikia <b>Present Perfect Continuous</b>: <code>I have been learning English for two years.</code>",
          "Forma: <code>have/has + been + veiksmažodis-ing</code>. Klausimas: <code>How long have you been working here?</code> – „Kiek laiko čia dirbi?“",
          "<b>for</b> + laikotarpis (for three hours, for ten years), <b>since</b> + pradžios taškas (since 2019, since Monday, since I was a child).",
          "Su būsenos veiksmažodžiais (know, have – turėti, like, be) vartojamas paprastas Present Perfect: <code>I have known her for ten years.</code>, o ne <i>have been knowing</i>.",
          "Ši forma tinka ir matomam neseniai vykusios veiklos rezultatui: <code>You're wet! – I've been running.</code>"
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I have ('ve) been waiting for an hour."],
          ["−", "She hasn't been sleeping well lately."],
          ["?", "How long have you been living here?"],
          ["for", "for two weeks, for ages, for a long time"],
          ["since", "since 2020, since Christmas, since I moved"]
        ],
        examples: [
          { en: "I've been living in Vilnius since 2015.", lt: "Gyvenu Vilniuje nuo 2015 metų." },
          { en: "How long have you been learning English?", lt: "Kiek laiko mokaisi anglų kalbos?" },
          { en: "We've been waiting for forty minutes!", lt: "Laukiame jau keturiasdešimt minučių!" },
          { en: "She's been working at the hospital for six years.", lt: "Ji dirba ligoninėje šešerius metus." },
          { en: "I've known him since school.", lt: "Pažįstu jį nuo mokyklos laikų." },
          { en: "Your eyes are red. Have you been crying?", lt: "Tavo akys raudonos. Ar verkei?" }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I live here for five years</i> arba <i>I am living here since 2015</i>. Teisingai: <b>I've been living here for five years / since 2015</b>.",
          "Painiojami <b>for</b> ir <b>since</b>: <i>since two years</i> ✗ → <b>for two years</b> ✓. Since – tik su konkrečiu pradžios momentu.",
          "Nesakyk <i>I have been knowing</i> – know, like, want ir pan. su -ing nevartojami: <b>I've known</b>."
        ]
      },
      vocab: [
        { en: "lately / recently", lt: "pastaruoju metu" },
        { en: "for ages", lt: "labai seniai, ilgą laiką" },
        { en: "to move (house)", lt: "persikraustyti" },
        { en: "to take up (a hobby)", lt: "pradėti (užsiimti pomėgiu)" },
        { en: "to practise", lt: "praktikuotis, treniruotis" },
        { en: "exhausted", lt: "išsekęs, labai pavargęs" },
        { en: "experience", lt: "patirtis" },
        { en: "colleague", lt: "kolega" },
        { en: "neighbourhood", lt: "kaimynystė, rajonas" },
        { en: "to commute", lt: "važinėti į darbą ir atgal" },
        { en: "so far", lt: "iki šiol" },
        { en: "ever since", lt: "nuo tada" }
      ],
      phrases: [
        { en: "How long have you been …-ing?", lt: "Kiek laiko jau …?" },
        { en: "I've been doing it since I was …", lt: "Darau tai nuo tada, kai buvau …" },
        { en: "For about … years now.", lt: "Jau maždaug … metų." },
        { en: "I've been meaning to …", lt: "Jau seniai ketinu …" },
        { en: "What have you been up to lately?", lt: "Ką pastaruoju metu veiki?" }
      ],
      quiz: [
        { type: "choice", q: "I've been working here ___ 2018.", options: ["for", "since", "from"], answer: 1,
          explain: "2018 – pradžios taškas, todėl since." },
        { type: "choice", q: "She ___ for three hours. She needs a break.", options: ["is studying", "has been studying", "studies"], answer: 1,
          explain: "Veiksmas prasidėjo anksčiau ir tebesitęsia – has been studying." },
        { type: "choice", q: "I ___ Tom for ten years.", options: ["have known", "have been knowing", "know"], answer: 0,
          explain: "Know – būsenos veiksmažodis, todėl paprastas Present Perfect: have known." },
        { type: "input", q: "Išversk: Kiek laiko tu čia gyveni?", answer: ["How long have you been living here", "How long have you lived here", "How long have you been living here?", "How long have you lived here?"],
          explain: "Lietuviškas esamasis laikas „kiek laiko“ klausime → Present Perfect (Continuous)." },
        { type: "order", words: ["been", "for", "we", "have", "waiting", "hours"], answer: "we have been waiting for hours", lt: "Laukiame jau kelias valandas." }
      ],
      speaking: {
        scenario: "You are a friendly new colleague having coffee with the learner on their first week at an international company. You want to get to know them: where they live, their hobbies, their job, and how long they've been doing each thing.",
        tasks: [
          "Ask 'How long have you been…?' questions about where the learner lives, works and what hobbies they have.",
          "Make the learner ask you at least three 'How long…?' questions back.",
          "Say something like 'You look tired!' and get the learner to explain what they've been doing (I've been…).",
          "Gently correct any 'I live here for…' or 'since two years' errors and ask the learner to repeat correctly."
        ],
        successCriteria: [
          "Uses Present Perfect Continuous correctly at least 5 times",
          "Chooses for vs since correctly in at least 4 sentences",
          "Asks at least 3 correct 'How long have you been…?' questions",
          "Uses simple Present Perfect with at least one state verb (know, have, like)"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 2
    {
      id: "b1-02",
      type: "lesson",
      icon: "🧸",
      title: "used to ir would: praeities įpročiai",
      titleEn: "used to / would – past habits",
      canDo: [
        "Galiu papasakoti apie savo vaikystę ir tai, ką anksčiau darydavau.",
        "Galiu palyginti, kaip gyvenau anksčiau ir kaip gyvenu dabar."
      ],
      grammar: {
        title: "Kaip anglai sako „darydavau“",
        explanation: [
          "Lietuvių kalba turi būtąjį dažninį laiką: <i>būdavau, žaisdavau, eidavau</i>. Anglų kalboje jo atitikmuo – <b>used to + veiksmažodis</b>: <code>I used to play outside every day.</code> – „Kasdien žaisdavau lauke.“",
          "<b>used to</b> tinka ir įpročiams, ir būsenoms, kurios jau pasikeitė: <code>I used to have long hair.</code> (dabar nebeturiu). Neiginys ir klausimas – su <b>did</b> ir <b>use</b> be -d: <code>I didn't use to like fish. Did you use to walk to school?</code>",
          "<b>would + veiksmažodis</b> taip pat reiškia pasikartojančius praeities veiksmus, dažnai pasakojime: <code>Every summer we would go to Palanga.</code> Bet <b>would</b> negalima vartoti su būsenomis: <i>I would have a dog</i> ✗ → <b>I used to have a dog</b> ✓.",
          "Vienkartiniam veiksmui naudok paprastą Past Simple: <code>I went to Paris in 2010.</code>"
        ],
        table: [
          ["", "used to", "would"],
          ["Pasikartojantys veiksmai", "✓ I used to swim a lot.", "✓ I would swim every morning."],
          ["Būsenos (have, live, be, like)", "✓ I used to live in Kaunas.", "✗"],
          ["Neiginys", "I didn't use to …", "(retai)"],
          ["Klausimas", "Did you use to …?", "(retai)"]
        ],
        examples: [
          { en: "I used to live in a small village.", lt: "Anksčiau gyvenau mažame kaime." },
          { en: "We would spend every summer at my grandmother's.", lt: "Kiekvieną vasarą praleisdavome pas močiutę." },
          { en: "Did you use to have any pets?", lt: "Ar anksčiau turėjai augintinių?" },
          { en: "I didn't use to like vegetables, but now I love them.", lt: "Anksčiau nemėgau daržovių, o dabar jas dievinu." },
          { en: "My dad would read to us every night.", lt: "Tėtis mums kiekvieną vakarą skaitydavo." },
          { en: "There used to be a cinema here.", lt: "Čia anksčiau buvo kino teatras." }
        ],
        pitfalls: [
          "Dažna klaida – <i>I use to play</i> ✗ (teigiamame sakinyje būtina -d): <b>I used to play</b> ✓. O po did – atvirkščiai: <i>Did you used to</i> ✗ → <b>Did you use to</b> ✓.",
          "Nepainiok su dabartiniu įpročiu: „Paprastai keliuosi 7“ – <b>I usually get up at 7</b>, ne <i>I use to get up</i>.",
          "Nesakyk <i>I would live in Kaunas</i> apie praeitį – su būsenomis tik <b>used to</b>."
        ]
      },
      vocab: [
        { en: "childhood", lt: "vaikystė" },
        { en: "to grow up", lt: "užaugti" },
        { en: "countryside", lt: "kaimas, užmiestis" },
        { en: "to climb trees", lt: "laipioti medžiais" },
        { en: "to hang out with friends", lt: "leisti laiką su draugais" },
        { en: "strict", lt: "griežtas" },
        { en: "naughty", lt: "išdykęs, neklaužada" },
        { en: "pocket money", lt: "kišenpinigiai" },
        { en: "to tease", lt: "erzinti" },
        { en: "primary school", lt: "pradinė mokykla" },
        { en: "nowadays", lt: "šiais laikais" },
        { en: "memory", lt: "prisiminimas; atmintis" }
      ],
      phrases: [
        { en: "When I was a kid, I used to …", lt: "Kai buvau vaikas, aš …davau." },
        { en: "Did you use to …?", lt: "Ar anksčiau …davai?" },
        { en: "I don't … any more, but I used to.", lt: "Dabar nebe…, bet anksčiau …davau." },
        { en: "Things were different back then.", lt: "Tada viskas buvo kitaip." },
        { en: "I remember …-ing", lt: "Prisimenu, kaip …" }
      ],
      quiz: [
        { type: "choice", q: "When I was a child, I ___ climb trees every day.", options: ["use to", "used to", "was used to"], answer: 1,
          explain: "Teigiamame sakinyje – used to + veiksmažodis." },
        { type: "choice", q: "Did you ___ walk to school?", options: ["used to", "use to", "using to"], answer: 1,
          explain: "Po did rašome use to (be -d)." },
        { type: "choice", q: "Which sentence is WRONG?", options: ["I used to have a bike.", "I would have a bike.", "I would ride my bike every day."], answer: 1,
          explain: "Have (turėti) – būsena, su would jos vartoti negalima." },
        { type: "input", q: "Išversk: Anksčiau gyvenau Kaune.", answer: ["I used to live in Kaunas", "I used to live in Kaunas."],
          explain: "„Anksčiau gyvenau“ – pasikeitusi būsena → used to live." },
        { type: "order", words: ["we", "would", "every", "go", "fishing", "summer"], answer: "we would go fishing every summer", lt: "Kiekvieną vasarą eidavome žvejoti." }
      ],
      speaking: {
        scenario: "You are an interviewer for a local radio programme called 'Then and Now'. You interview the learner about their childhood and how their life has changed since then.",
        tasks: [
          "Ask about where the learner grew up, their school, their friends and what they used to do in their free time.",
          "Ask 'Did you use to…?' questions and encourage the learner to answer with full sentences.",
          "Ask the learner to tell a short memory of a typical summer using 'would'.",
          "Ask them to compare: 'What did you use to do that you don't do any more?' and 'What do you do now that you didn't use to do?'"
        ],
        successCriteria: [
          "Uses 'used to' correctly at least 5 times, including one state (have/live/be/like)",
          "Uses 'would' for repeated past actions at least 2 times and never with a state verb",
          "Forms at least one negative 'didn't use to' or question 'Did you use to' correctly",
          "Contrasts past and present in at least 2 sentences"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 3
    {
      id: "b1-03",
      type: "lesson",
      icon: "📖",
      title: "Past Perfect: pasakojimas eilės tvarka",
      titleEn: "Past Perfect – narrative tenses",
      canDo: [
        "Galiu papasakoti istoriją, aiškiai parodydamas, kas įvyko anksčiau.",
        "Galiu naudoti Past Simple, Past Continuous ir Past Perfect viename pasakojime."
      ],
      grammar: {
        title: "had + 3-ioji forma ir pasakojimo laikai",
        explanation: [
          "Kai pasakojame apie praeitį, kartais reikia parodyti, kad vienas veiksmas įvyko <b>dar anksčiau</b> už kitą. Tam yra <b>Past Perfect</b>: <code>had + V3</code>. <code>When I got to the station, the train had left.</code> – traukinys išvažiavo prieš man atvykstant.",
          "Lietuvių kalboje tai dažniausiai parodome žodžiais <i>jau, prieš tai</i>: „Kai atvykau, traukinys <i>jau buvo išvažiavęs</i>.“ Anglų kalboje laiko forma būtina, nes be jos prasmė pasikeičia: <code>When I arrived, the train left.</code> = traukinys išvažiavo, kai atvykau.",
          "Pasakojime dažnai derinami trys laikai: <b>Past Continuous</b> – fonas (<code>It was raining.</code>), <b>Past Simple</b> – pagrindiniai įvykiai (<code>I opened the door.</code>), <b>Past Perfect</b> – kas buvo prieš tai (<code>Someone had broken the window.</code>).",
          "Naudingi žodžiai: <b>already, just, before, by the time, after, never … before</b>."
        ],
        table: [
          ["Laikas", "Paskirtis", "Pavyzdys"],
          ["Past Continuous", "fonas, vykstantis veiksmas", "We were having dinner"],
          ["Past Simple", "pagrindinis įvykis", "when the lights went out."],
          ["Past Perfect", "dar ankstesnis įvykis", "Someone had cut the cable."]
        ],
        examples: [
          { en: "By the time we arrived, the film had already started.", lt: "Kai atvykome, filmas jau buvo prasidėjęs." },
          { en: "I had never seen the sea before I was twelve.", lt: "Iki dvylikos metų niekada nebuvau matęs jūros." },
          { en: "She was tired because she had worked all night.", lt: "Ji buvo pavargusi, nes visą naktį dirbo." },
          { en: "I realised I had left my keys at home.", lt: "Supratau, kad palikau raktus namuose." },
          { en: "We were walking home when it started to rain.", lt: "Ėjome namo, kai pradėjo lyti." },
          { en: "After he had finished work, he went to the gym.", lt: "Baigęs darbą jis nuėjo į sporto salę." }
        ],
        pitfalls: [
          "Lietuviai dažnai visur naudoja Past Simple: <i>I realised I forgot my passport</i>. Kalboje tai kartais praeina, bet tiksliau – <b>I realised I had forgotten my passport</b>.",
          "Nevartok Past Perfect be priežasties – jei įvykius pasakoji iš eilės, užtenka Past Simple: <i>I had woken up, I had had breakfast</i> ✗ → <b>I woke up and had breakfast</b> ✓.",
          "Atmink netaisyklingas 3-iąsias formas: <i>had went</i> ✗ → <b>had gone</b>, <i>had saw</i> ✗ → <b>had seen</b>."
        ]
      },
      vocab: [
        { en: "suddenly", lt: "staiga" },
        { en: "eventually", lt: "galiausiai" },
        { en: "by the time", lt: "iki to laiko, kai" },
        { en: "to realise", lt: "suprasti, susivokti" },
        { en: "to miss (a train)", lt: "pavėluoti (į traukinį)" },
        { en: "to get lost", lt: "pasiklysti" },
        { en: "to turn out", lt: "paaiškėti, pasirodyti" },
        { en: "luckily / unfortunately", lt: "laimei / deja" },
        { en: "embarrassing", lt: "gėdingas, nepatogus" },
        { en: "to break down (car)", lt: "sugesti (automobiliui)" },
        { en: "in the end", lt: "galų gale" },
        { en: "meanwhile", lt: "tuo metu, tuo tarpu" }
      ],
      phrases: [
        { en: "You'll never guess what happened.", lt: "Niekada neatspėsi, kas nutiko." },
        { en: "It all started when …", lt: "Viskas prasidėjo, kai …" },
        { en: "The funny thing was that …", lt: "Juokingiausia buvo tai, kad …" },
        { en: "And then, to make things worse, …", lt: "O tada, kad būtų dar blogiau, …" },
        { en: "What happened next?", lt: "Kas buvo toliau?" }
      ],
      quiz: [
        { type: "choice", q: "When I got home, my wife ___ dinner.", options: ["already cooked", "had already cooked", "has already cooked"], answer: 1,
          explain: "Vakarienė buvo išvirta anksčiau nei grįžau – Past Perfect." },
        { type: "choice", q: "I ___ TV when the phone rang.", options: ["watched", "had watched", "was watching"], answer: 2,
          explain: "Fonas, vykstantis veiksmas – Past Continuous." },
        { type: "choice", q: "She had never ___ snow before.", options: ["saw", "seen", "see"], answer: 1,
          explain: "Po had – trečioji forma: seen." },
        { type: "input", q: "Išversk: Kai atvykome, filmas jau buvo prasidėjęs.", answer: ["When we arrived, the film had already started", "When we arrived the film had already started", "When we arrived, the movie had already started", "By the time we arrived, the film had already started", "When we arrived, the film had started already"],
          explain: "Filmas prasidėjo anksčiau – had already started." },
        { type: "order", words: ["had", "i", "realised", "my", "lost", "i", "wallet"], answer: "i realised i had lost my wallet", lt: "Supratau, kad pamečiau piniginę." }
      ],
      speaking: {
        scenario: "You are the learner's friend meeting them in a café. You ask them to tell you about a memorable bad day or travel disaster (a missed flight, a lost wallet, getting lost). React with interest and ask follow-up questions.",
        tasks: [
          "Ask the learner to tell a story about a day when everything went wrong (or a funny/strange experience).",
          "Ask follow-up questions that require Past Perfect: 'Why? What had happened before that?', 'Had you ever been there before?'",
          "Ask what the weather was like and what people were doing, to elicit Past Continuous background.",
          "Then tell a short story yourself with a mistake in the order of events and ask the learner to retell it correctly."
        ],
        successCriteria: [
          "Tells a coherent story of at least 8 sentences in logical order",
          "Uses Past Perfect correctly at least 3 times to show an earlier event",
          "Uses Past Continuous for background at least 2 times",
          "Uses at least 3 sequencing words (suddenly, then, by the time, eventually, in the end)"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 4
    {
      id: "b1-04",
      type: "lesson",
      icon: "💭",
      title: "Second Conditional: įsivaizduojamos situacijos",
      titleEn: "Second Conditional – imaginary situations",
      canDo: [
        "Galiu kalbėti apie tai, ką daryčiau įsivaizduojamoje situacijoje.",
        "Galiu duoti patarimą su „If I were you…“."
      ],
      grammar: {
        title: "If + Past Simple, would + veiksmažodis",
        explanation: [
          "Lietuvių kalboje įsivaizduojamas situacijas reiškiame tariamąja nuosaka abiejose dalyse: <i>„Jei <b>turėčiau</b> pinigų, <b>keliaučiau</b>.“</i> Anglų kalboje <b>if</b> dalyje vartojamas <b>Past Simple</b>, o kitoje – <b>would</b>: <code>If I had more money, I would travel.</code>",
          "Svarbiausia: <b>would</b> niekada nededame po <b>if</b>. <i>If I would have</i> ✗ → <b>If I had</b> ✓.",
          "Su <b>be</b> visiems asmenims galima sakyti <b>were</b>: <code>If I were you, I'd talk to him.</code> – populiariausias patarimo būdas („Tavo vietoje aš…“).",
          "Vietoj would galima <b>could</b> (galėčiau) arba <b>might</b> (gal): <code>If I lived by the sea, I could swim every day.</code>",
          "Palyginimui: <b>First Conditional</b> – realu (<code>If it rains, I'll stay home.</code>), <b>Second</b> – neįtikėtina arba netikra (<code>If I won the lottery, I'd buy a house.</code>)."
        ],
        table: [
          ["If dalis", "Rezultatas"],
          ["If I had a car,", "I would drive to work."],
          ["If she spoke English,", "she could get a better job."],
          ["If I were you,", "I wouldn't buy it."],
          ["What would you do", "if you lost your phone?"]
        ],
        examples: [
          { en: "If I won the lottery, I'd quit my job.", lt: "Jei laimėčiau loterijoje, mesčiau darbą." },
          { en: "What would you do if you saw a ghost?", lt: "Ką darytum, jei pamatytum vaiduoklį?" },
          { en: "If I were you, I'd see a doctor.", lt: "Tavo vietoje nueičiau pas gydytoją." },
          { en: "If we didn't have children, we would travel more.", lt: "Jei neturėtume vaikų, daugiau keliautume." },
          { en: "I wouldn't live in a big city if I had a choice.", lt: "Negyvenčiau dideliame mieste, jei galėčiau rinktis." },
          { en: "If I could speak five languages, I'd work as a translator.", lt: "Jei mokėčiau penkias kalbas, dirbčiau vertėju." }
        ],
        pitfalls: [
          "Kadangi lietuviškai abiejose dalyse yra tariamoji nuosaka, lietuviai sako <i>If I would have time, I would help</i> ✗. Teisingai: <b>If I had time, I would help</b> ✓.",
          "Painiojama su First Conditional: <i>If I win the lottery, I would…</i> ✗. Rinkis vieną: <b>If I win…, I will…</b> (realu) arba <b>If I won…, I would…</b> (įsivaizduojama).",
          "Trumpinys <b>I'd</b> = I would. Tarimas svarbus: sakyk aiškiai „aid“, kitaip skambės kaip <i>I</i>."
        ]
      },
      vocab: [
        { en: "to win the lottery", lt: "laimėti loterijoje" },
        { en: "to quit (a job)", lt: "mesti (darbą)" },
        { en: "desert island", lt: "negyvenama sala" },
        { en: "to afford", lt: "išgalėti, turėti pinigų" },
        { en: "invisible", lt: "nematomas" },
        { en: "to give away", lt: "atiduoti, išdalyti" },
        { en: "charity", lt: "labdara" },
        { en: "to retire", lt: "išeiti į pensiją" },
        { en: "superpower", lt: "supergalia" },
        { en: "to imagine", lt: "įsivaizduoti" },
        { en: "dream job", lt: "svajonių darbas" },
        { en: "to be in someone's shoes", lt: "būti kieno nors vietoje" }
      ],
      phrases: [
        { en: "If I were you, I'd …", lt: "Tavo vietoje aš …" },
        { en: "What would you do if …?", lt: "Ką darytum, jei …?" },
        { en: "I'd probably …", lt: "Turbūt …čiau" },
        { en: "It depends. If …, I might …", lt: "Priklauso. Jei …, gal …" },
        { en: "I'd never do that!", lt: "Niekada taip nedaryčiau!" }
      ],
      quiz: [
        { type: "choice", q: "If I ___ more time, I would learn to play the guitar.", options: ["would have", "had", "have"], answer: 1,
          explain: "Po if – Past Simple, ne would." },
        { type: "choice", q: "If I were you, I ___ that car.", options: ["won't buy", "wouldn't buy", "didn't buy"], answer: 1,
          explain: "Rezultato dalyje – would/wouldn't + veiksmažodis." },
        { type: "choice", q: "What ___ you do if you lost your passport abroad?", options: ["will", "would", "did"], answer: 1,
          explain: "Įsivaizduojama situacija – would." },
        { type: "input", q: "Išversk: Tavo vietoje aš paskambinčiau jai.", answer: ["If I were you, I would call her", "If I were you, I'd call her", "If I were you I would call her", "If I were you I'd call her", "If I was you, I would call her", "If I were you, I would phone her", "If I were you, I'd phone her"],
          explain: "„Tavo vietoje“ = If I were you." },
        { type: "order", words: ["if", "i", "a", "had", "car", "drive", "would", "i"], answer: "if i had a car i would drive", lt: "Jei turėčiau automobilį, vairuočiau." },
        { type: "choice", q: "Which sentence is correct?", options: ["If I would live in London, I would be happy.", "If I lived in London, I would be happy.", "If I lived in London, I will be happy."], answer: 1,
          explain: "If + Past Simple, would + veiksmažodis." }
      ],
      speaking: {
        scenario: "You are hosting a fun party game called 'What would you do?'. You give the learner imaginary situations and dilemmas, and later the learner asks for and gives advice about a friend's problem.",
        tasks: [
          "Ask at least 5 'What would you do if…?' questions (win a million euros, be invisible for a day, be stuck on a desert island, find a wallet in the street, be president for a week).",
          "Ask the learner to explain WHY and add a second consequence ('…and then I would…').",
          "Describe a personal problem (e.g. your boss is unfair, you can't sleep) and ask for advice; the learner must use 'If I were you…'.",
          "Make the learner ask you at least 2 'What would you do if…?' questions."
        ],
        successCriteria: [
          "Produces at least 6 correct Second Conditional sentences",
          "Never uses 'would' in the if-clause (or self-corrects when prompted)",
          "Gives at least 2 pieces of advice with 'If I were you, I'd…'",
          "Asks at least 2 correctly formed 'What would you do if…?' questions"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 5
    {
      id: "b1-05",
      type: "lesson",
      icon: "🔧",
      title: "Zero Conditional ir laiko sakiniai: faktai ir instrukcijos",
      titleEn: "Zero Conditional and time clauses",
      canDo: [
        "Galiu paaiškinti bendrus faktus ir kaip kas nors veikia.",
        "Galiu duoti aiškias instrukcijas su when, as soon as, until, before, after."
      ],
      grammar: {
        title: "If/When + Present Simple ir laiko jungtukai",
        explanation: [
          "<b>Zero Conditional</b> naudojame visada teisingiems faktams ir taisyklėms: <code>If you heat ice, it melts.</code> Abiejose dalyse – <b>Present Simple</b>. Čia <b>if</b> beveik reiškia <b>when</b> (kai tik, kaskart kai).",
          "Instrukcijose antra dalis dažnai yra liepiamoji nuosaka: <code>If the light goes red, press this button.</code>",
          "<b>Laiko sakiniai</b> su <b>when, as soon as, until, before, after</b>, net kalbant apie ateitį, turi <b>Present Simple</b>, o ne will: <code>I'll call you as soon as I arrive.</code> Lietuviškai sakome „kai atvyksiu“ (būsimasis laikas), todėl čia dažna klaida.",
          "<b>until</b> = „kol (ne)“: <code>Wait here until I come back.</code> – „Lauk čia, kol grįšiu.“ Atkreipk dėmesį: lietuviškai kartais sakome „kol <i>ne</i>grįšiu“, bet angliškai neiginio nereikia."
        ],
        table: [
          ["Struktūra", "Pavyzdys"],
          ["If + Present, Present", "If you press this, the machine stops."],
          ["If + Present, liepimas", "If you feel sick, call me."],
          ["when / as soon as + Present, will", "When I get home, I'll text you."],
          ["until + Present", "Stir until the sauce is thick."],
          ["before / after + Present", "Turn off the oven before you leave."]
        ],
        examples: [
          { en: "If you mix red and yellow, you get orange.", lt: "Sumaišius raudoną ir geltoną, gaunama oranžinė." },
          { en: "When water boils, add the pasta.", lt: "Kai vanduo užverda, sudėkite makaronus." },
          { en: "I'll call you as soon as I land.", lt: "Paskambinsiu, kai tik nusileisiu." },
          { en: "Don't open the door until the machine stops.", lt: "Neatidarykite durelių, kol mašina nesustos." },
          { en: "If I drink coffee late, I can't sleep.", lt: "Jei vėlai išgeriu kavos, negaliu užmigti." },
          { en: "Read the instructions before you start.", lt: "Prieš pradėdami perskaitykite instrukcijas." }
        ],
        pitfalls: [
          "Labai dažna lietuvių klaida: <i>When I will come home, I will call you</i> ✗. Po when/as soon as/until – <b>Present Simple</b>: <b>When I come home, I'll call you</b> ✓.",
          "Po until nereikia neigimo: <i>Wait until I don't come</i> ✗ → <b>Wait until I come</b> ✓.",
          "Trečiasis asmuo: <i>If the water boil</i> ✗ → <b>If the water boils</b> ✓ – nepamiršk -s."
        ]
      },
      vocab: [
        { en: "to boil", lt: "virti, užvirti" },
        { en: "to freeze", lt: "užšalti, užšaldyti" },
        { en: "to melt", lt: "tirpti" },
        { en: "to press", lt: "paspausti" },
        { en: "to plug in / unplug", lt: "įjungti į / išjungti iš elektros lizdo" },
        { en: "to charge (a phone)", lt: "įkrauti (telefoną)" },
        { en: "to stir", lt: "maišyti" },
        { en: "to remove", lt: "pašalinti, išimti" },
        { en: "settings", lt: "nustatymai" },
        { en: "to restart", lt: "perkrauti, paleisti iš naujo" },
        { en: "battery", lt: "baterija, akumuliatorius" },
        { en: "step", lt: "žingsnis" }
      ],
      phrases: [
        { en: "First, … Then, … Finally, …", lt: "Pirmiausia … Tada … Galiausiai …" },
        { en: "Make sure you …", lt: "Būtinai …" },
        { en: "If that doesn't work, try …", lt: "Jei tai nepadeda, pabandyk …" },
        { en: "As soon as it …, you need to …", lt: "Kai tik tai …, reikia …" },
        { en: "Let me know when you're done.", lt: "Pranešk, kai baigsi." }
      ],
      quiz: [
        { type: "choice", q: "I'll text you when I ___ at the airport.", options: ["will arrive", "arrive", "arrived"], answer: 1,
          explain: "Po when apie ateitį – Present Simple." },
        { type: "choice", q: "If you heat water to 100 degrees, it ___.", options: ["boils", "will boil", "would boil"], answer: 0,
          explain: "Mokslo faktas – Zero Conditional, abiejose dalyse Present Simple." },
        { type: "choice", q: "Please wait here ___ the doctor calls you.", options: ["until", "while not", "before not"], answer: 0,
          explain: "until = kol; neiginio nereikia." },
        { type: "input", q: "Išversk: Kai tik grįšiu, paskambinsiu tau.", answer: ["As soon as I get back, I'll call you", "As soon as I get back, I will call you", "As soon as I come back, I'll call you", "As soon as I come back, I will call you", "As soon as I return, I'll call you", "As soon as I return, I will call you", "I'll call you as soon as I get back", "I will call you as soon as I get back", "I'll call you as soon as I come back"],
          explain: "Po as soon as – Present Simple (get back), pagrindinėje dalyje – will." },
        { type: "order", words: ["the", "phone", "if", "freezes", "restart", "it"], answer: "if the phone freezes restart it", lt: "Jei telefonas užstringa, perkrauk jį." }
      ],
      speaking: {
        scenario: "The learner is giving instructions to a new flatmate (you) who has just moved in. You don't know how anything works: the washing machine, the heating, the Wi-Fi router, the recycling. Later, swap: you explain a simple recipe and the learner checks they understand.",
        tasks: [
          "Ask the learner how to use the washing machine and what to do if something goes wrong.",
          "Ask about house rules and routines: 'What happens if…?', 'What should I do when…?'",
          "Ask the learner to explain a simple recipe they know step by step, using when, as soon as, until, before, after.",
          "Ask about plans for tomorrow and elicit future time clauses ('I'll call you when I…')."
        ],
        successCriteria: [
          "Uses at least 4 correct Zero Conditional sentences (If/When + Present, Present/imperative)",
          "Uses at least 4 different time conjunctions (when, as soon as, until, before, after)",
          "Never uses 'will' after when/as soon as/until (or self-corrects)",
          "Gives clear step-by-step instructions using sequencing words"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 6
    {
      id: "b1-06",
      type: "lesson",
      icon: "🏭",
      title: "Neveikiamoji rūšis: procesai, naujienos, produktai",
      titleEn: "The passive – present and past",
      canDo: [
        "Galiu apibūdinti, kaip kas nors gaminama ar daroma.",
        "Galiu perpasakoti naujieną, kai svarbu įvykis, o ne veikėjas."
      ],
      grammar: {
        title: "be + 3-ioji forma",
        explanation: [
          "Neveikiamąją rūšį (<b>passive</b>) naudojame, kai svarbu, <b>kas daroma</b>, o ne <b>kas daro</b>, arba kai veikėjas nežinomas: <code>The bridge was built in 1930.</code>",
          "Forma: <code>be + V3</code>. Esamasis: <code>is/are made</code>, būtasis: <code>was/were made</code>. Veikėją, jei reikia, nurodome su <b>by</b>: <code>The book was written by Donelaitis.</code>",
          "Lietuvių kalba turi panašią konstrukciją su dalyviais: <i>„Tiltas buvo pastatytas 1930 m.“</i>, <i>„Sūris gaminamas iš pieno.“</i> Tačiau lietuviškai dažnai sakome ir be veikėjo: <i>„Čia kalbama angliškai“</i>, <i>„Mane apvogė“</i>. Anglų kalboje tokiais atvejais reikia passive: <code>English is spoken here.</code>, <code>I was robbed.</code>",
          "Klausimas: <code>Where was it made?</code>, <code>When were the results announced?</code> Neiginys: <code>It wasn't damaged.</code>"
        ],
        table: [
          ["Laikas", "Veikiamoji", "Neveikiamoji"],
          ["Present Simple", "They make cheese here.", "Cheese is made here."],
          ["Past Simple", "Someone stole my bike.", "My bike was stolen."],
          ["Klausimas", "Who invented the phone?", "When was the phone invented?"],
          ["Neiginys", "They didn't cancel it.", "It wasn't cancelled."]
        ],
        examples: [
          { en: "Lithuanian amber is sold all over the world.", lt: "Lietuviškas gintaras parduodamas visame pasaulyje." },
          { en: "My car was stolen last night.", lt: "Praėjusią naktį pavogė mano automobilį." },
          { en: "Three people were injured in the accident.", lt: "Avarijoje buvo sužeisti trys žmonės." },
          { en: "The grapes are picked by hand.", lt: "Vynuogės skinamos rankomis." },
          { en: "This photo was taken in 1990.", lt: "Ši nuotrauka daryta 1990 metais." },
          { en: "Is breakfast included in the price?", lt: "Ar pusryčiai įskaičiuoti į kainą?" }
        ],
        pitfalls: [
          "Lietuviai dažnai pamiršta <b>be</b>: <i>The museum built in 1900</i> ✗ → <b>The museum was built in 1900</b> ✓.",
          "Bandoma versti „Mane apvogė“ pažodžiui: <i>They robbed me</i> nėra klaida, bet natūraliau <b>I was robbed</b>. O „Man pasakė“ → <b>I was told</b>, ne <i>To me was told</i>.",
          "Netaisyklingos formos: <i>was builded, was stealed</i> ✗ → <b>was built, was stolen</b> ✓."
        ]
      },
      vocab: [
        { en: "to produce", lt: "gaminti" },
        { en: "to grow", lt: "auginti" },
        { en: "to invent", lt: "išrasti" },
        { en: "to design", lt: "kurti, projektuoti" },
        { en: "to deliver", lt: "pristatyti" },
        { en: "to arrest", lt: "suimti" },
        { en: "to injure", lt: "sužeisti" },
        { en: "to damage", lt: "apgadinti" },
        { en: "to cancel", lt: "atšaukti" },
        { en: "factory", lt: "gamykla" },
        { en: "raw materials", lt: "žaliavos" },
        { en: "packaging", lt: "pakuotė" },
        { en: "headline", lt: "antraštė" }
      ],
      phrases: [
        { en: "It's made of / from …", lt: "Tai pagaminta iš …" },
        { en: "It was built / founded in …", lt: "Tai pastatyta / įkurta …" },
        { en: "According to the news, …", lt: "Remiantis naujienomis, …" },
        { en: "Nobody was hurt.", lt: "Niekas nenukentėjo." },
        { en: "Where was it made?", lt: "Kur tai pagaminta?" }
      ],
      quiz: [
        { type: "choice", q: "Cepelinai ___ from potatoes.", options: ["make", "are made", "were make"], answer: 1,
          explain: "Bendras faktas, svarbus produktas – Present passive: are made." },
        { type: "choice", q: "My wallet ___ on the bus yesterday.", options: ["stole", "was stolen", "is stolen"], answer: 1,
          explain: "Praeitis + nežinomas veikėjas – was stolen." },
        { type: "choice", q: "The Eiffel Tower ___ in 1889.", options: ["was built", "built", "was build"], answer: 0,
          explain: "was + V3 (built)." },
        { type: "input", q: "Išversk: Čia kalbama angliškai.", answer: ["English is spoken here", "English is spoken here."],
          explain: "Lietuviška beasmenė konstrukcija → passive: is spoken." },
        { type: "order", words: ["was", "when", "the", "invented", "telephone"], answer: "when was the telephone invented", lt: "Kada buvo išrastas telefonas?" }
      ],
      speaking: {
        scenario: "First, the learner is a guide giving a short tour of a (real or imaginary) Lithuanian factory or farm product, e.g. how bread, cheese, beer or amber jewellery is produced. Then you are a radio news presenter and the learner reports two short news stories to you.",
        tasks: [
          "Ask the learner to describe step by step how a local product is made (Where is it grown? How is it made? Where is it sold?).",
          "Ask about a famous building or place in Lithuania: when it was built, who it was designed by, what it is used for now.",
          "Give the learner two short news headlines (e.g. 'Bank robbed in city centre', 'Concert cancelled due to storm') and ask them to report what happened using the passive.",
          "Ask follow-up questions in the passive and make the learner answer in full sentences."
        ],
        successCriteria: [
          "Uses at least 5 correct Present Simple passive forms",
          "Uses at least 4 correct Past Simple passive forms",
          "Uses correct irregular past participles (built, stolen, made, sold, found)",
          "Uses 'by' to name the agent at least once when relevant"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 7
    {
      id: "b1-07",
      type: "lesson",
      icon: "📨",
      title: "Netiesioginė kalba: žinučių perdavimas",
      titleEn: "Reported speech – statements and questions",
      canDo: [
        "Galiu perduoti kito žmogaus žinutę ar pasakytus žodžius.",
        "Galiu perpasakoti, ko manęs klausė (pvz., darbo pokalbyje)."
      ],
      grammar: {
        title: "said that…, told me…, asked if…",
        explanation: [
          "Lietuvių kalboje perpasakodami laiko nekeičiame: <i>„Jis pasakė, kad <b>yra</b> pavargęs.“</i> Anglų kalboje po praeities veiksmažodžio (said, told, asked) laikas paprastai <b>„pasislenka atgal“</b>: <code>„I am tired.“ → He said (that) he <b>was</b> tired.</code>",
          "Pagrindiniai poslinkiai: <b>am/is → was</b>, <b>Present Simple → Past Simple</b>, <b>will → would</b>, <b>can → could</b>, <b>Past Simple / Present Perfect → Past Perfect</b>. Keičiasi ir įvardžiai bei žodžiai: <i>today → that day, tomorrow → the next day, here → there</i>.",
          "<b>say</b> ir <b>tell</b>: <code>She said (that)…</code>, bet <code>She told <b>me</b> (that)…</code> – po tell būtinai nurodome, kam.",
          "Klausimai: žodžių tvarka tampa kaip teiginyje, be do/does/did. <code>„Where do you live?“ → She asked where I lived.</code> Taip/ne klausimams – <b>if/whether</b>: <code>„Are you OK?“ → He asked if I was OK.</code>"
        ],
        table: [
          ["Tiesioginė kalba", "Netiesioginė kalba"],
          ["“I'm busy.”", "She said she was busy."],
          ["“I'll call you.”", "He told me he would call me."],
          ["“I can't come.”", "She said she couldn't come."],
          ["“We've finished.”", "They said they had finished."],
          ["“Where do you work?”", "He asked me where I worked."],
          ["“Do you like it?”", "She asked if I liked it."]
        ],
        examples: [
          { en: "Tom said he was running late.", lt: "Tomas sakė, kad vėluoja." },
          { en: "She told me she would send the report tomorrow.", lt: "Ji man sakė, kad rytoj atsiųs ataskaitą." },
          { en: "The doctor said I needed to rest.", lt: "Gydytojas pasakė, kad man reikia pailsėti." },
          { en: "They asked me how long I had worked there.", lt: "Jie manęs paklausė, kiek laiko ten dirbau." },
          { en: "He asked if I could help him.", lt: "Jis paklausė, ar galiu jam padėti." },
          { en: "My boss told us the meeting was cancelled.", lt: "Vadovas mums pasakė, kad susirinkimas atšauktas." }
        ],
        pitfalls: [
          "Lietuvių kalboje laikai nederinami, todėl lietuviai sako <i>He said he is tired</i>. Pokalbyje kartais tai priimtina (jei tai vis dar tiesa), bet pagrindinė taisyklė – <b>He said he was tired</b>.",
          "Klausimuose paliekama klausiamoji tvarka: <i>She asked where do I live</i> ✗ → <b>She asked where I lived</b> ✓.",
          "<i>He said me</i> ✗ → <b>He told me</b> arba <b>He said to me</b> ✓. „Ar“ verčiamas <b>if/whether</b>, ne <i>or</i>."
        ]
      },
      vocab: [
        { en: "message", lt: "žinutė" },
        { en: "to pass on", lt: "perduoti" },
        { en: "to mention", lt: "paminėti" },
        { en: "to explain", lt: "paaiškinti" },
        { en: "to complain", lt: "skųstis" },
        { en: "to promise", lt: "pažadėti" },
        { en: "to remind", lt: "priminti" },
        { en: "to wonder", lt: "svarstyti, įdomu" },
        { en: "rumour", lt: "gandas" },
        { en: "voicemail", lt: "balso pašto žinutė" },
        { en: "interview", lt: "pokalbis (dėl darbo), interviu" },
        { en: "apparently", lt: "matyt, pasirodo" }
      ],
      phrases: [
        { en: "Can I take a message?", lt: "Ar galiu perduoti žinutę?" },
        { en: "She asked me to tell you that …", lt: "Ji paprašė man tau pasakyti, kad …" },
        { en: "He wanted to know if …", lt: "Jis norėjo sužinoti, ar …" },
        { en: "Apparently, …", lt: "Pasirodo, …" },
        { en: "What exactly did she say?", lt: "Ką tiksliai ji pasakė?" }
      ],
      quiz: [
        { type: "choice", q: "“I'm hungry.” → She said she ___ hungry.", options: ["is", "was", "were"], answer: 1,
          explain: "Laikas pasislenka atgal: am → was." },
        { type: "choice", q: "He ___ me that he would be late.", options: ["said", "told", "asked"], answer: 1,
          explain: "Po tell nurodome asmenį: told me." },
        { type: "choice", q: "“Where do you live?” → She asked me where ___.", options: ["do I live", "I lived", "did I live"], answer: 1,
          explain: "Netiesioginiame klausime – teiginio tvarka, be do/did." },
        { type: "choice", q: "“Will you help me?” → He asked ___ I would help him.", options: ["that", "if", "or"], answer: 1,
          explain: "Taip/ne klausimas → if (arba whether)." },
        { type: "input", q: "Pakeisk į netiesioginę kalbą: “I can't come.” → He said …", answer: ["He said he couldn't come", "He said that he couldn't come", "He said he could not come", "He said that he could not come"],
          explain: "can't → couldn't." },
        { type: "order", words: ["asked", "she", "if", "me", "i", "was", "ready"], answer: "she asked me if i was ready", lt: "Ji manęs paklausė, ar esu pasiruošęs." }
      ],
      speaking: {
        scenario: "The learner works in an office. You play several people who leave messages (a client, the boss, a delivery driver), and then you play a colleague who was out of the office and asks the learner what everyone said. Finally, the learner reports a job interview they 'had' yesterday.",
        tasks: [
          "Say 3–4 short direct messages as different people (e.g. client: 'I can't come to the meeting on Friday. I'll call next week.'), then switch roles and ask 'What did they say?'",
          "Ask the learner to report at least 3 questions you asked during a mock job interview ('They asked me where I…', 'They wanted to know if…').",
          "Ask about a recent piece of news or gossip the learner heard and what exactly people said.",
          "Correct tense backshift and word order in reported questions, and ask the learner to repeat."
        ],
        successCriteria: [
          "Reports at least 5 statements with correct backshift (is→was, will→would, can→could)",
          "Reports at least 3 questions with correct statement word order (no do/did)",
          "Uses 'if' or 'whether' correctly for yes/no questions at least twice",
          "Uses say vs tell correctly (told me / said that)"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 8
    {
      id: "b1-08",
      type: "lesson",
      icon: "🕵️",
      title: "Spėjimo modaliniai veiksmažodžiai",
      titleEn: "Modals of deduction – must, might, may, could, can't",
      canDo: [
        "Galiu spėlioti, kas vyksta nuotraukoje ar situacijoje.",
        "Galiu parodyti, kiek esu tikras dėl savo spėjimo."
      ],
      grammar: {
        title: "must / might / may / could / can't + veiksmažodis",
        explanation: [
          "Kai spėjame, anglų kalboje naudojame modalinius veiksmažodžius. Jie rodo, <b>kiek esame tikri</b>: <b>must</b> – beveik 100 % „turbūt tikrai“, <b>might / may / could</b> – apie 50 % „galbūt“, <b>can't</b> – beveik 100 % „tikrai ne“.",
          "Lietuviškai sakome <i>„Jis turbūt pavargęs“</i>, <i>„Gal ji serga“</i>, <i>„Negali būti, kad jis toks senas“</i>. Angliškai: <code>He must be tired. She might be ill. He can't be that old.</code>",
          "Po modalinio veiksmažodžio – <b>veiksmažodis be to</b>: <code>must be</code>, <code>might have</code>. Vykstančiam veiksmui: <code>must be + -ing</code> – <code>They must be waiting for a bus.</code>",
          "Svarbu: spėjimo neiginys yra <b>can't</b>, o ne <i>mustn't</i>. <code>mustn't</code> reiškia draudimą (negalima)."
        ],
        table: [
          ["Tikrumas", "Žodis", "Pavyzdys"],
          ["~100 % taip", "must", "She must be a teacher."],
          ["~50 %", "might / may / could", "It might be a wedding."],
          ["~100 % ne", "can't", "He can't be at home – his car isn't there."],
          ["Vyksta dabar", "must / might + be + -ing", "They might be celebrating something."]
        ],
        examples: [
          { en: "She's wearing a uniform. She must be a nurse.", lt: "Ji vilki uniformą. Ji turbūt slaugytoja." },
          { en: "It might rain later – take an umbrella.", lt: "Vėliau gali lyti – pasiimk skėtį." },
          { en: "That can't be John. He's in Spain.", lt: "Negali būti, kad tai Džonas. Jis Ispanijoje." },
          { en: "They could be brothers – they look alike.", lt: "Jie gali būti broliai – panašūs." },
          { en: "You must be joking!", lt: "Tu turbūt juokauji!" },
          { en: "The people in the photo may be waiting for a train.", lt: "Žmonės nuotraukoje galbūt laukia traukinio." }
        ],
        pitfalls: [
          "Lietuviai sako <i>He mustn't be at home</i>, norėdami pasakyti „Jo tikrai nėra namie“. Teisingai: <b>He can't be at home</b> ✓.",
          "Po modalinio veiksmažodžio nėra <b>to</b>: <i>She must to be tired</i> ✗ → <b>She must be tired</b> ✓.",
          "Nevartok tik <i>maybe</i> kiekviename sakinyje – įvairink: <b>might be, could be, probably, I'd say</b>."
        ]
      },
      vocab: [
        { en: "in the background", lt: "fone, gale" },
        { en: "in the foreground", lt: "priekiniame plane" },
        { en: "on the left / right", lt: "kairėje / dešinėje" },
        { en: "to look like", lt: "atrodyti kaip" },
        { en: "to seem", lt: "atrodyti, rodytis" },
        { en: "probably", lt: "tikriausiai" },
        { en: "certainly", lt: "tikrai" },
        { en: "clue", lt: "užuomina, įkaltis" },
        { en: "outfit", lt: "apranga" },
        { en: "crowded", lt: "perpildytas, pilnas žmonių" },
        { en: "to celebrate", lt: "švęsti" },
        { en: "upset", lt: "nusiminęs" }
      ],
      phrases: [
        { en: "It looks like …", lt: "Atrodo, kad …" },
        { en: "I'd say they're probably …", lt: "Sakyčiau, jie turbūt …" },
        { en: "I'm not sure, but it might be …", lt: "Nesu tikras, bet gal tai …" },
        { en: "Judging by …, they must be …", lt: "Sprendžiant iš …, jie turbūt …" },
        { en: "It can't be … because …", lt: "Negali būti …, nes …" }
      ],
      quiz: [
        { type: "choice", q: "He's been working for 14 hours. He ___ be exhausted.", options: ["must", "can't", "mustn't"], answer: 0,
          explain: "Esame beveik tikri – must." },
        { type: "choice", q: "That ___ be Anna – she's on holiday in Greece.", options: ["must", "can't", "mustn't"], answer: 1,
          explain: "Tikrai ne – can't (ne mustn't)." },
        { type: "choice", q: "I'm not sure where Tom is. He ___ be in the library.", options: ["must", "might", "can't"], answer: 1,
          explain: "Nežinome tikrai, ~50 % – might." },
        { type: "choice", q: "Which sentence is correct?", options: ["She must to be rich.", "She must be rich.", "She musts be rich."], answer: 1,
          explain: "must + veiksmažodis be to." },
        { type: "input", q: "Išversk: Tu turbūt juokauji!", answer: ["You must be joking", "You must be joking!", "You must be kidding", "You must be kidding!"],
          explain: "Stiprus spėjimas – must be + -ing." },
        { type: "order", words: ["they", "be", "might", "for", "waiting", "a", "bus"], answer: "they might be waiting for a bus", lt: "Jie gal laukia autobuso." }
      ],
      speaking: {
        scenario: "You describe imaginary photos and mysterious situations to the learner (as in the Cambridge B1 photo task). The learner has to describe and speculate about who the people are, where they are, what they are doing and how they feel.",
        tasks: [
          "Describe photo 1 in a few words (e.g. 'a man in a suit running through an airport with a big bag') and ask the learner to speculate about who he is, where he's going and why.",
          "Describe photo 2 (e.g. 'a family at a long table in a garden, with balloons and a big cake') and ask the learner to describe it for about one minute.",
          "Give a mystery situation: 'Your neighbour's lights have been off for a week and there are lots of letters by the door.' Ask what might have happened.",
          "Challenge the learner's guesses ('Are you sure?') so they must use can't / might to show different levels of certainty."
        ],
        successCriteria: [
          "Uses must, might/may/could and can't correctly, each at least once",
          "Makes at least 8 speculative sentences in total",
          "Uses at least 3 photo-description phrases (in the background, on the left, it looks like)",
          "Never uses 'mustn't' for negative deduction (or self-corrects)"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 9
    {
      id: "b1-09",
      type: "lesson",
      icon: "🔀",
      title: "Gerundijus ar bendratis: -ing ar to?",
      titleEn: "Gerunds vs infinitives",
      canDo: [
        "Galiu teisingai vartoti -ing arba to po dažnų veiksmažodžių.",
        "Galiu kalbėti apie pomėgius, planus ir prisiminimus, pasirinkdamas tinkamą formą."
      ],
      grammar: {
        title: "Kada -ing, o kada to + veiksmažodis",
        explanation: [
          "Lietuvių kalboje po daugumos veiksmažodžių eina bendratis: <i>mėgstu plaukti, noriu plaukti, baigiau plaukti</i>. Anglų kalboje kai kurie veiksmažodžiai reikalauja <b>-ing</b>, kiti – <b>to + veiksmažodžio</b>.",
          "<b>-ing</b> po: <i>enjoy, mind, finish, avoid, suggest, keep, can't stand, practise, miss</i>: <code>I enjoy cooking.</code> <b>to</b> po: <i>want, decide, hope, plan, agree, promise, refuse, manage, need, would like</i>: <code>I decided to leave.</code>",
          "Po <b>prielinksnio</b> visada <b>-ing</b>: <code>I'm interested in learning…</code>, <code>She's good at drawing.</code>, <code>Thanks for helping.</code>, <code>I'm looking forward to seeing you.</code> (čia to – prielinksnis!)",
          "Kai kurie veiksmažodžiai keičia reikšmę: <b>remember doing</b> – prisimenu, kad dariau / <b>remember to do</b> – nepamiršti padaryti; <b>stop doing</b> – liautis darius / <b>stop to do</b> – sustoti, kad padarytum; <b>try doing</b> – išbandyti būdą / <b>try to do</b> – stengtis.",
          "<b>like, love, hate, start, begin</b> gali eiti su abiem formomis beveik be skirtumo."
        ],
        table: [
          ["Veiksmažodis", "+ -ing", "+ to"],
          ["remember", "I remember meeting her. (prisimenu)", "Remember to call her. (nepamiršk)"],
          ["stop", "I stopped smoking. (mečiau)", "I stopped to smoke. (sustojau parūkyti)"],
          ["try", "Try restarting it. (išbandyk)", "I tried to open it. (stengiausi)"],
          ["forget", "I'll never forget seeing it.", "Don't forget to lock the door."]
        ],
        examples: [
          { en: "I really enjoy travelling on my own.", lt: "Labai mėgstu keliauti vienas." },
          { en: "We decided to stay at home.", lt: "Nusprendėme likti namie." },
          { en: "I'm looking forward to meeting you.", lt: "Laukiu susitikimo su jumis." },
          { en: "Remember to buy some milk!", lt: "Nepamiršk nupirkti pieno!" },
          { en: "I remember going there as a child.", lt: "Prisimenu, kaip ten važiuodavau vaikystėje." },
          { en: "He stopped smoking two years ago.", lt: "Jis metė rūkyti prieš dvejus metus." },
          { en: "We stopped to buy some petrol.", lt: "Sustojome nusipirkti benzino." },
          { en: "She's good at solving problems.", lt: "Jai gerai sekasi spręsti problemas." }
        ],
        pitfalls: [
          "Lietuviai po <i>enjoy, finish, suggest</i> deda bendratį: <i>I enjoy to swim</i> ✗ → <b>I enjoy swimming</b> ✓; <i>He suggested to go</i> ✗ → <b>He suggested going</b> ✓.",
          "<i>I'm looking forward to see you</i> ✗ → <b>I'm looking forward to seeing you</b> ✓ – čia to yra prielinksnis.",
          "„Nepamiršk paskambinti“ – <b>Remember to call</b>, ne <i>Remember calling</i>; „Mečiau rūkyti“ – <b>I stopped smoking</b>, ne <i>I stopped to smoke</i>."
        ]
      },
      vocab: [
        { en: "to avoid", lt: "vengti" },
        { en: "to mind", lt: "prieštarauti, nemėgti" },
        { en: "to suggest", lt: "pasiūlyti" },
        { en: "to manage to", lt: "sugebėti, pavykti" },
        { en: "to refuse", lt: "atsisakyti" },
        { en: "can't stand", lt: "negalėti pakęsti" },
        { en: "to look forward to", lt: "laukti (su malonumu)" },
        { en: "to be used to", lt: "būti pripratusiam" },
        { en: "to be keen on", lt: "labai mėgti, domėtis" },
        { en: "instead of", lt: "užuot, vietoj" },
        { en: "without", lt: "be (ko nors darymo)" },
        { en: "to give it a try", lt: "pabandyti" }
      ],
      phrases: [
        { en: "Do you mind waiting a moment?", lt: "Ar neprieštarautum truputį palaukti?" },
        { en: "I'm thinking of …-ing", lt: "Galvoju apie tai, kad …" },
        { en: "Have you tried …-ing?", lt: "Ar bandei …?" },
        { en: "I'm really looking forward to …-ing", lt: "Labai laukiu, kada …" },
        { en: "Don't forget to …", lt: "Nepamiršk …" }
      ],
      quiz: [
        { type: "choice", q: "I enjoy ___ in the mountains.", options: ["to walk", "walking", "walk"], answer: 1,
          explain: "Po enjoy – -ing." },
        { type: "choice", q: "We've decided ___ a new car.", options: ["buying", "to buy", "buy"], answer: 1,
          explain: "Po decide – to + veiksmažodis." },
        { type: "choice", q: "Please remember ___ the windows before you leave.", options: ["closing", "to close", "close"], answer: 1,
          explain: "Nepamiršti ką nors padaryti ateityje – remember to." },
        { type: "choice", q: "My grandfather stopped ___ when he was sixty.", options: ["to smoke", "smoking", "smoke"], answer: 1,
          explain: "Metė rūkyti – stop + -ing." },
        { type: "input", q: "Išversk: Laukiu, kada tave pamatysiu. (looking forward)", answer: ["I'm looking forward to seeing you", "I am looking forward to seeing you", "I'm looking forward to seeing you.", "I look forward to seeing you"],
          explain: "look forward to + -ing." },
        { type: "order", words: ["she", "is", "good", "at", "languages", "learning"], answer: "she is good at learning languages", lt: "Jai gerai sekasi mokytis kalbų." }
      ],
      speaking: {
        scenario: "You and the learner are friends planning a weekend away together. You talk about what you both enjoy doing, what you can't stand, what you've decided to do, and practical reminders before the trip. You also chat about memories of past trips.",
        tasks: [
          "Ask what the learner enjoys, doesn't mind and can't stand doing on holiday.",
          "Plan the trip together: ask what they want/hope/plan to do and make suggestions ('How about…?', 'I suggest…').",
          "Ask the learner to give you 3 reminders before the trip using 'Remember to…' / 'Don't forget to…'.",
          "Ask about a memorable past trip ('Do you remember…-ing…?') and about a bad habit they stopped or want to stop."
        ],
        successCriteria: [
          "Uses at least 5 verbs + -ing correctly (enjoy, mind, avoid, suggest, can't stand…)",
          "Uses at least 4 verbs + to-infinitive correctly (want, decide, hope, plan, manage…)",
          "Uses remember/stop/try with the correct meaning at least once each",
          "Uses -ing after a preposition at least twice (good at, interested in, looking forward to)"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 10
    {
      id: "b1-10",
      type: "lesson",
      icon: "🧩",
      title: "Frazeologiniai veiksmažodžiai",
      titleEn: "Common phrasal verbs",
      canDo: [
        "Galiu suprasti ir vartoti dažniausius frazeologinius veiksmažodžius kasdieniame pokalbyje.",
        "Galiu papasakoti apie savo dieną ir įpročius natūralia, šnekamąja kalba."
      ],
      grammar: {
        title: "Veiksmažodis + dalelytė = nauja reikšmė",
        explanation: [
          "<b>Phrasal verb</b> – veiksmažodis su dalelyte (<i>up, out, off, on, down…</i>), kurie kartu turi naują reikšmę: <code>give</code> – duoti, <code>give up</code> – mesti, pasiduoti. Panašiai lietuviai naudoja priešdėlius: <i>eiti – išeiti, nueiti, pereiti</i>.",
          "Anglai šnekamojoje kalboje juos vartoja nuolat, todėl jie skamba natūraliau nei „knyginiai“ žodžiai: <code>find out</code> vietoj <i>discover</i>, <code>put off</code> vietoj <i>postpone</i>.",
          "Daugelis atskiriami: daiktavardis gali būti viduryje arba gale (<code>turn off the light / turn the light off</code>), bet <b>įvardis – tik viduryje</b>: <code>turn it off</code>, ne <i>turn off it</i>.",
          "Kai kurie neatskiriami: <code>look for</code>, <code>look after</code>, <code>get on (a bus)</code>: <code>I'm looking for my keys. I'm looking for them.</code>"
        ],
        table: [
          ["Veiksmažodis", "Reikšmė", "Pavyzdys"],
          ["get up", "atsikelti", "I get up at 6:30."],
          ["look for", "ieškoti", "I'm looking for a new job."],
          ["give up", "mesti, pasiduoti", "Don't give up!"],
          ["find out", "sužinoti", "I found out the truth."],
          ["turn on / off", "įjungti / išjungti", "Turn it off, please."],
          ["look after", "prižiūrėti", "She looks after her mum."],
          ["put off", "atidėti", "Don't put it off."],
          ["run out of", "pritrūkti", "We've run out of milk."]
        ],
        examples: [
          { en: "Can you turn the TV down? It's too loud.", lt: "Ar gali pritildyti televizorių? Per garsiai." },
          { en: "I'm trying to give up sugar.", lt: "Stengiuosi atsisakyti cukraus." },
          { en: "Could you look after my cat this weekend?", lt: "Ar galėtum šį savaitgalį prižiūrėti mano katę?" },
          { en: "We ran out of petrol on the motorway.", lt: "Greitkelyje pritrūkome benzino." },
          { en: "I found out that the shop was closed.", lt: "Sužinojau, kad parduotuvė uždaryta." },
          { en: "Please fill in this form.", lt: "Prašom užpildyti šią formą." },
          { en: "My brother and I get on really well.", lt: "Mudu su broliu labai gerai sutariame." }
        ],
        pitfalls: [
          "Įvardžio vieta: <i>Turn off it</i> ✗ → <b>Turn it off</b> ✓; <i>Pick up me at 8</i> ✗ → <b>Pick me up at 8</b> ✓.",
          "Lietuviai verčia pažodžiui: „ieškoti“ – <i>search my keys</i> ✗ → <b>look for my keys</b> ✓; „rūpintis vaikais“ – <b>look after the children</b>.",
          "Nepainiok: <b>get up</b> (atsikelti iš lovos) ir <b>wake up</b> (pabusti); <b>turn on</b> (įjungti) ir <b>open</b> (atidaryti) – <i>open the TV</i> ✗."
        ]
      },
      vocab: [
        { en: "to wake up", lt: "pabusti" },
        { en: "to get on / off (a bus)", lt: "įlipti / išlipti" },
        { en: "to pick up", lt: "paimti, pakelti; pavežti" },
        { en: "to fill in", lt: "užpildyti" },
        { en: "to set up", lt: "įkurti, sutvarkyti, nustatyti" },
        { en: "to come back", lt: "grįžti" },
        { en: "to go out", lt: "išeiti (pasilinksminti)" },
        { en: "to break up", lt: "išsiskirti" },
        { en: "to get on with", lt: "sutarti su" },
        { en: "to turn up / down", lt: "pagarsinti / pritildyti" },
        { en: "to carry on", lt: "tęsti" },
        { en: "to work out", lt: "sportuoti; išsiaiškinti" },
        { en: "to put on / take off", lt: "apsivilkti / nusivilkti" },
        { en: "to throw away", lt: "išmesti" }
      ],
      phrases: [
        { en: "Hang on a second.", lt: "Palauk sekundėlę." },
        { en: "I'll pick you up at …", lt: "Paimsiu tave …" },
        { en: "Let's not put it off.", lt: "Neatidėkime to." },
        { en: "Carry on, I'm listening.", lt: "Tęsk, klausau." },
        { en: "I'll find out and let you know.", lt: "Sužinosiu ir pranešiu." }
      ],
      quiz: [
        { type: "choice", q: "I'm ___ my glasses. Have you seen them?", options: ["looking after", "looking for", "looking at"], answer: 1,
          explain: "look for = ieškoti." },
        { type: "choice", q: "The music is too loud. Can you turn ___?", options: ["off it", "it down", "down it"], answer: 1,
          explain: "Įvardis eina tarp veiksmažodžio ir dalelytės: turn it down." },
        { type: "choice", q: "We've run ___ of coffee. Can you buy some?", options: ["out", "off", "away"], answer: 0,
          explain: "run out of = pritrūkti." },
        { type: "choice", q: "My dad ___ smoking ten years ago.", options: ["gave up", "gave in", "gave out"], answer: 0,
          explain: "give up = mesti (įprotį)." },
        { type: "input", q: "Išversk: Prašom užpildyti šią formą.", answer: ["Please fill in this form", "Please fill this form in", "Please fill out this form", "Please fill in this form.", "Please fill in the form"],
          explain: "fill in (BrE) arba fill out (AmE) = užpildyti." },
        { type: "order", words: ["you", "can", "me", "up", "pick", "at", "eight"], answer: "can you pick me up at eight", lt: "Ar gali mane paimti aštuntą?" }
      ],
      speaking: {
        scenario: "Relaxed chat between neighbours. You talk about daily routines, a recent move into a new flat, habits you want to give up, and you ask the learner to help you with small favours (looking after your plants, picking up a parcel).",
        tasks: [
          "Ask about the learner's typical morning and evening (get up, wake up, go out, work out, come back).",
          "Tell the learner you have just moved and ask for help: setting up the Wi-Fi, finding out about rubbish collection, throwing away old furniture.",
          "Ask about a bad habit they've given up or want to give up and something they keep putting off.",
          "Ask the learner to make 2 requests to you using phrasal verbs (look after, pick up, turn down)."
        ],
        successCriteria: [
          "Uses at least 8 different phrasal verbs correctly in context",
          "Places object pronouns correctly at least twice (turn it off, pick me up)",
          "Makes at least 2 polite requests with phrasal verbs",
          "Uses phrasal verbs instead of literal translations (look for, not 'search')"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 11
    {
      id: "b1-11",
      type: "lesson",
      icon: "😲",
      title: "-ed / -ing būdvardžiai, so ir such",
      titleEn: "-ed/-ing adjectives, so and such",
      canDo: [
        "Galiu apibūdinti savo jausmus ir įspūdžius apie filmus, keliones ir renginius.",
        "Galiu sustiprinti apibūdinimą su so ir such."
      ],
      grammar: {
        title: "bored ar boring? so ar such?",
        explanation: [
          "<b>-ed</b> būdvardžiai apibūdina, <b>kaip žmogus jaučiasi</b>: <code>I'm bored.</code> – „Man nuobodu.“ <b>-ing</b> būdvardžiai apibūdina, <b>koks yra daiktas ar situacija</b> (kas sukelia jausmą): <code>The film is boring.</code> – „Filmas nuobodus.“",
          "Lietuviškai sakome <i>„man nuobodu“</i> ir <i>„filmas nuobodus“</i> beveik tuo pačiu žodžiu, todėl lietuviai dažnai sako <i>I'm boring</i> – o tai reiškia „Aš esu nuobodus žmogus“! 😄",
          "<b>so</b> + būdvardis / prieveiksmis: <code>It was so interesting.</code> <b>such (a/an)</b> + (būdvardis) + daiktavardis: <code>It was such an interesting trip.</code>, <code>They're such nice people.</code>",
          "Su <b>that</b> parodome pasekmę: <code>I was so tired that I fell asleep on the bus.</code> / <code>It was such a long day that I went to bed at 8.</code>"
        ],
        table: [
          ["-ed (jausmas)", "-ing (priežastis)"],
          ["bored", "boring"],
          ["interested", "interesting"],
          ["tired", "tiring"],
          ["surprised", "surprising"],
          ["disappointed", "disappointing"],
          ["embarrassed", "embarrassing"],
          ["confused", "confusing"],
          ["amazed", "amazing"]
        ],
        examples: [
          { en: "I was really disappointed with the hotel.", lt: "Viešbutis mane labai nuvylė." },
          { en: "The ending of the film was so confusing.", lt: "Filmo pabaiga buvo tokia paini." },
          { en: "We had such a relaxing weekend.", lt: "Turėjome tokį atpalaiduojantį savaitgalį." },
          { en: "I'm interested in history.", lt: "Domiuosi istorija." },
          { en: "It was such a long journey that we were exhausted.", lt: "Kelionė buvo tokia ilga, kad buvome išsekę." },
          { en: "The children were so excited about the trip.", lt: "Vaikai taip džiaugėsi kelione." }
        ],
        pitfalls: [
          "<i>I'm boring</i> ✗ (kai nori pasakyti „man nuobodu“) → <b>I'm bored</b> ✓. <i>I'm interesting in music</i> ✗ → <b>I'm interested in music</b> ✓.",
          "<i>It was so a nice day</i> ✗ → <b>It was such a nice day</b> ✓ arba <b>The day was so nice</b> ✓.",
          "Lietuviai dažnai praleidžia artikelį po such: <i>such good film</i> ✗ → <b>such a good film</b> ✓ (bet <b>such good films</b> – daugiskaitoje be a)."
        ]
      },
      vocab: [
        { en: "excited / exciting", lt: "susijaudinęs, laukiantis / jaudinantis" },
        { en: "frightened / frightening", lt: "išsigandęs / gąsdinantis" },
        { en: "annoyed / annoying", lt: "susierzinęs / erzinantis" },
        { en: "relaxed / relaxing", lt: "atsipalaidavęs / atpalaiduojantis" },
        { en: "satisfied / satisfying", lt: "patenkintas / teikiantis pasitenkinimą" },
        { en: "worried / worrying", lt: "susirūpinęs / keliantis nerimą" },
        { en: "shocked / shocking", lt: "šokiruotas / šokiruojantis" },
        { en: "impressed / impressive", lt: "sužavėtas / įspūdingas" },
        { en: "breathtaking", lt: "kvapą gniaužiantis" },
        { en: "terrible", lt: "baisus, siaubingas" },
        { en: "unforgettable", lt: "nepamirštamas" },
        { en: "overrated", lt: "pervertintas" }
      ],
      phrases: [
        { en: "It was such a … experience!", lt: "Tai buvo tokia … patirtis!" },
        { en: "I was so … that …", lt: "Buvau toks …, kad …" },
        { en: "To be honest, I found it a bit …", lt: "Atvirai pasakius, man tai pasirodė šiek tiek …" },
        { en: "What was the best / worst part?", lt: "Kas buvo geriausia / blogiausia?" },
        { en: "I'd definitely recommend it.", lt: "Tikrai rekomenduočiau." }
      ],
      quiz: [
        { type: "choice", q: "The lecture was very long and I was ___.", options: ["boring", "bored", "bore"], answer: 1,
          explain: "Kaip jaučiuosi – -ed: bored." },
        { type: "choice", q: "The news was really ___.", options: ["shocked", "shocking", "shock"], answer: 1,
          explain: "Naujiena sukelia jausmą – -ing: shocking." },
        { type: "choice", q: "It was ___ beautiful day that we went to the beach.", options: ["so", "such a", "such"], answer: 1,
          explain: "such a + būdvardis + vienaskaitos daiktavardis." },
        { type: "choice", q: "The exam was ___ difficult that nobody passed.", options: ["such", "so", "such a"], answer: 1,
          explain: "so + būdvardis (be daiktavardžio)." },
        { type: "input", q: "Išversk: Domiuosi menu.", answer: ["I'm interested in art", "I am interested in art", "I'm interested in art.", "I am interested in art."],
          explain: "Jausmas – interested (ne interesting) + in." },
        { type: "order", words: ["it", "was", "such", "an", "amazing", "trip"], answer: "it was such an amazing trip", lt: "Tai buvo tokia nuostabi kelionė." }
      ],
      speaking: {
        scenario: "You and the learner are friends catching up after the learner's recent holiday (or a concert, film or festival). You want to hear all about it, including the good, the bad and the embarrassing moments. Then you review a film or TV series together.",
        tasks: [
          "Ask the learner about their last holiday or event: how they felt before, during and after.",
          "Ask about the best, worst, most surprising and most embarrassing moments.",
          "Ask the learner to review a film, book or series they know and say whether they'd recommend it.",
          "Say some deliberately wrong sentences ('I was so boring at the party') and ask the learner to correct you."
        ],
        successCriteria: [
          "Uses at least 4 pairs or 8 different -ed/-ing adjectives correctly",
          "Never says 'I'm boring/interesting' meaning 'bored/interested' (or self-corrects)",
          "Uses so + adjective and such (a) + adjective + noun correctly at least twice each",
          "Uses at least one 'so/such … that' result sentence"
        ],
        minLearnerTurns: 10
      }
    },
    // ---------------------------------------------------------------- 12
    {
      id: "b1-12",
      type: "lesson",
      icon: "🗣️",
      title: "Nuomonė, sutikimas ir mandagus nesutikimas",
      titleEn: "Giving opinions, agreeing and disagreeing",
      canDo: [
        "Galiu pareikšti savo nuomonę ir ją pagrįsti priežastimis bei pavyzdžiais.",
        "Galiu mandagiai sutikti ar nesutikti ir dalyvauti diskusijoje."
      ],
      grammar: {
        title: "Diskusijos kalba",
        explanation: [
          "Diskusijoje svarbu ne tik ką sakai, bet ir <b>kaip</b>. Anglai nesutikimą dažnai „suminkština“: vietoj <i>You're wrong</i> sako <code>I see your point, but…</code> arba <code>I'm not sure I agree.</code> Lietuviška tiesmukumo maniera angliškai gali skambėti grubiai.",
          "Nuomonė: <code>I think / I believe / In my opinion / Personally, I feel that…</code> Pagrindimas: <code>because…, for example…, that's why…, on the other hand…</code>",
          "Sutikimas: <code>I agree (with you). / Exactly! / That's true. / Me too. / Me neither.</code> Nesutikimas: <code>I'm afraid I disagree. / I see what you mean, but… / That's a good point, but…</code>",
          "Gramatika: <b>I agree</b> – be <i>am</i>! <code>I don't think it's a good idea.</code> – anglai neigimą deda prie <i>think</i>, o ne <i>I think it isn't…</i> (tai skamba natūraliau)."
        ],
        table: [
          ["Funkcija", "Frazės"],
          ["Nuomonė", "I think… / In my opinion… / Personally, … / As far as I'm concerned…"],
          ["Sutikimas", "I agree. / Absolutely. / That's exactly what I think."],
          ["Dalinis sutikimas", "I agree up to a point, but… / That's true, but…"],
          ["Nesutikimas", "I see your point, but… / I'm not so sure. / I'm afraid I disagree."],
          ["Klausti nuomonės", "What do you think? / How do you feel about…? / Do you agree?"]
        ],
        examples: [
          { en: "In my opinion, public transport should be free.", lt: "Mano nuomone, viešasis transportas turėtų būti nemokamas." },
          { en: "I agree with you up to a point.", lt: "Iš dalies su tavimi sutinku." },
          { en: "I see your point, but I'm not sure it would work.", lt: "Suprantu tavo mintį, bet nesu tikras, ar tai pavyktų." },
          { en: "I don't think children should have phones at school.", lt: "Manau, kad vaikai neturėtų turėti telefonų mokykloje." },
          { en: "On the one hand, it's cheaper. On the other hand, it takes longer.", lt: "Viena vertus, tai pigiau. Kita vertus, užtrunka ilgiau." },
          { en: "What do you think about working from home?", lt: "Ką manai apie darbą iš namų?" }
        ],
        pitfalls: [
          "Lietuviai sako <i>I am agree</i> ✗ (iš „aš esu sutinkantis“) → <b>I agree</b> ✓; <i>I am not agree</i> ✗ → <b>I don't agree</b> ✓.",
          "„Mano nuomone“ – <b>In my opinion</b>, ne <i>On my opinion</i> ar <i>For my opinion</i>. Ir nesakyk <i>In my opinion, I think…</i> – užtenka vieno.",
          "<i>You are not right</i> skamba griežtai. Mandagiau: <b>I'm not sure about that</b> arba <b>I see it a bit differently</b>."
        ]
      },
      vocab: [
        { en: "advantage / disadvantage", lt: "privalumas / trūkumas" },
        { en: "benefit", lt: "nauda" },
        { en: "drawback", lt: "trūkumas" },
        { en: "to argue", lt: "ginčytis; teigti" },
        { en: "to convince", lt: "įtikinti" },
        { en: "point of view", lt: "požiūris" },
        { en: "on the other hand", lt: "kita vertus" },
        { en: "in general", lt: "apskritai" },
        { en: "to depend on", lt: "priklausyti nuo" },
        { en: "fair / unfair", lt: "teisingas / neteisingas" },
        { en: "environment", lt: "aplinka" },
        { en: "social media", lt: "socialiniai tinklai" }
      ],
      phrases: [
        { en: "I see your point, but …", lt: "Suprantu tavo mintį, bet …" },
        { en: "That's a good point.", lt: "Gera mintis / Teisingai pastebėta." },
        { en: "I'm not so sure about that.", lt: "Nesu dėl to tikras." },
        { en: "What about you? Do you agree?", lt: "O tu? Ar sutinki?" },
        { en: "Let me put it another way.", lt: "Leisk pasakyti kitaip." },
        { en: "It depends on …", lt: "Tai priklauso nuo …" }
      ],
      quiz: [
        { type: "choice", q: "Which sentence is correct?", options: ["I am agree with you.", "I agree with you.", "I am agreeing with you."], answer: 1,
          explain: "agree – veiksmažodis, be am." },
        { type: "choice", q: "___ my opinion, the city needs more parks.", options: ["On", "In", "For"], answer: 1,
          explain: "In my opinion." },
        { type: "choice", q: "Which is the most polite way to disagree?", options: ["You're wrong.", "No, that's stupid.", "I see your point, but I'm not sure I agree."], answer: 2,
          explain: "Mandagus nesutikimas pradedamas pripažįstant kito mintį." },
        { type: "input", q: "Išversk natūraliai: Manau, kad tai nėra gera idėja.", answer: ["I don't think it's a good idea", "I don't think that's a good idea", "I don't think it is a good idea", "I don't think that it's a good idea", "I do not think it is a good idea"],
          explain: "Anglai neigimą deda prie think: I don't think…" },
        { type: "order", words: ["i", "agree", "with", "you", "up", "to", "a", "point"], answer: "i agree with you up to a point", lt: "Iš dalies su tavimi sutinku." }
      ],
      speaking: {
        scenario: "A friendly debate, like Part 2 of a discussion exam. You and the learner discuss several everyday topics. You deliberately take the opposite view to the learner so they have to defend their opinion and disagree politely.",
        tasks: [
          "Discuss: 'Should people work from home or in the office?' Ask for the learner's opinion with reasons and an example.",
          "Discuss: 'Is social media good or bad for young people?' – take the opposite side and push back politely.",
          "Discuss: 'Is it better to live in a city or in the countryside?' – ask the learner to give both advantages and disadvantages.",
          "At the end, ask the learner to summarise where you agreed and where you disagreed."
        ],
        successCriteria: [
          "Uses at least 4 different opinion phrases (I think, In my opinion, Personally, As far as I'm concerned)",
          "Disagrees politely at least 3 times using softening language (I see your point, but…)",
          "Supports opinions with a reason or example at least 4 times (because, for example)",
          "Asks for the tutor's opinion at least twice; never says 'I am agree'"
        ],
        minLearnerTurns: 12
      }
    },
    // ---------------------------------------------------------------- 13
    {
      id: "b1-13",
      type: "lesson",
      icon: "🙏",
      title: "Netiesioginiai klausimai ir mandagi kalba",
      titleEn: "Indirect questions and polite language",
      canDo: [
        "Galiu mandagiai paklausti informacijos darbe, viešbutyje, banke ar parduotuvėje.",
        "Galiu ramiai ir mandagiai pateikti skundą ir paprašyti sprendimo."
      ],
      grammar: {
        title: "Could you tell me where … is?",
        explanation: [
          "Tiesioginis klausimas <code>Where is the station?</code> nėra klaida, bet su nepažįstamais žmonėmis ar darbe mandagiau naudoti <b>netiesioginį klausimą</b>: <code>Could you tell me where the station is?</code>",
          "Svarbiausia taisyklė: po įžanginės frazės (<i>Could you tell me…, Do you know…, I was wondering…</i>) žodžių tvarka tampa <b>kaip teiginyje</b>, be do/does/did: <code>What time does it open?</code> → <code>Do you know what time it opens?</code>",
          "Taip/ne klausimams – <b>if / whether</b>: <code>Is there a lift?</code> → <code>Could you tell me if there is a lift?</code>",
          "Kitos mandagumo priemonės: <code>Would you mind…-ing?</code>, <code>I'd like to…</code> (ne <i>I want</i>), <code>I'm afraid…</code> (deja), <code>I was wondering if you could…</code>. Lietuviškai „Noriu…“ parduotuvėje skamba normaliai, bet angliškai <i>I want</i> gali skambėti grubokai."
        ],
        table: [
          ["Tiesioginis", "Netiesioginis (mandagus)"],
          ["Where is the toilet?", "Could you tell me where the toilet is?"],
          ["When does the shop close?", "Do you know when the shop closes?"],
          ["Did my parcel arrive?", "Could you check if my parcel has arrived?"],
          ["How much is it?", "Can you tell me how much it is?"],
          ["Can you help me?", "I was wondering if you could help me."]
        ],
        examples: [
          { en: "Excuse me, could you tell me where the nearest pharmacy is?", lt: "Atsiprašau, gal galėtumėte pasakyti, kur artimiausia vaistinė?" },
          { en: "Do you know what time the meeting starts?", lt: "Ar žinote, kada prasideda susitikimas?" },
          { en: "I was wondering if I could leave a bit earlier today.", lt: "Norėjau paklausti, ar galėčiau šiandien išeiti truputį anksčiau." },
          { en: "Would you mind closing the window?", lt: "Ar galėtumėte uždaryti langą?" },
          { en: "I'm afraid there's a problem with my order.", lt: "Deja, yra problema su mano užsakymu." },
          { en: "I'd like to speak to the manager, please.", lt: "Norėčiau pasikalbėti su vadovu." }
        ],
        pitfalls: [
          "Klausiamoji tvarka po įžangos: <i>Could you tell me where is the station?</i> ✗ → <b>Could you tell me where the station is?</b> ✓",
          "Nereikia do/does: <i>Do you know when does it open?</i> ✗ → <b>Do you know when it opens?</b> ✓",
          "<i>Would you mind to help me?</i> ✗ → <b>Would you mind helping me?</b> ✓. O atsakymas „Ne, neprieštarauju“ – <b>No, not at all</b> (ne <i>Yes</i>!)."
        ]
      },
      vocab: [
        { en: "to complain", lt: "skųstis" },
        { en: "complaint", lt: "skundas" },
        { en: "refund", lt: "pinigų grąžinimas" },
        { en: "to exchange", lt: "pakeisti, iškeisti" },
        { en: "receipt", lt: "kvitas, čekis" },
        { en: "faulty", lt: "brokuotas, sugedęs" },
        { en: "delay", lt: "vėlavimas" },
        { en: "booking / reservation", lt: "rezervacija" },
        { en: "to apologise", lt: "atsiprašyti" },
        { en: "inconvenience", lt: "nepatogumas" },
        { en: "customer service", lt: "klientų aptarnavimas" },
        { en: "to sort out", lt: "išspręsti, sutvarkyti" }
      ],
      phrases: [
        { en: "Sorry to bother you, but …", lt: "Atsiprašau, kad trukdau, bet …" },
        { en: "Could you tell me …?", lt: "Gal galėtumėte pasakyti …?" },
        { en: "I'm afraid there's a problem with …", lt: "Deja, yra problema su …" },
        { en: "I'd like a refund, please.", lt: "Norėčiau susigrąžinti pinigus." },
        { en: "What can you do about it?", lt: "Ką galite dėl to padaryti?" },
        { en: "I'd appreciate it if you could …", lt: "Būčiau dėkingas, jei galėtumėte …" }
      ],
      quiz: [
        { type: "choice", q: "Could you tell me where ___?", options: ["is the bank", "the bank is", "does the bank"], answer: 1,
          explain: "Netiesioginiame klausime – teiginio tvarka: the bank is." },
        { type: "choice", q: "Do you know what time ___?", options: ["the train leaves", "does the train leave", "leaves the train"], answer: 0,
          explain: "Be does, teiginio tvarka: the train leaves." },
        { type: "choice", q: "Would you mind ___ the door?", options: ["to close", "closing", "close"], answer: 1,
          explain: "Would you mind + -ing." },
        { type: "choice", q: "Could you tell me ___ breakfast is included?", options: ["that", "if", "does"], answer: 1,
          explain: "Taip/ne klausimas → if." },
        { type: "input", q: "Paversk mandagiu klausimu: “How much does it cost?” → Could you tell me …", answer: ["Could you tell me how much it costs", "Could you tell me how much it costs?", "Could you tell me how much it is", "Could you tell me how much it is?"],
          explain: "Be does, teiginio tvarka: how much it costs." },
        { type: "order", words: ["i", "was", "wondering", "if", "you", "could", "help", "me"], answer: "i was wondering if you could help me", lt: "Norėjau paklausti, ar galėtumėte man padėti." }
      ],
      speaking: {
        scenario: "Three short service role-plays. 1) The learner is a hotel guest asking reception for information. 2) The learner calls customer service because a product they ordered online arrived broken. 3) The learner asks their manager (you) for a day off. You play the receptionist, the customer service agent and the manager; be polite but not too helpful at first so the learner must insist politely.",
        tasks: [
          "Hotel: the learner must ask at least 3 indirect questions (breakfast time, Wi-Fi password, how to get to the city centre).",
          "Customer service: the learner explains the problem, stays polite, and asks for a refund or exchange; you first offer only a discount.",
          "Manager: the learner asks for a day off next Friday using 'I was wondering if…' and explains why.",
          "Correct direct word order in indirect questions and ask the learner to rephrase."
        ],
        successCriteria: [
          "Asks at least 5 indirect questions with correct statement word order",
          "Uses at least 4 polite structures (Could you…, Would you mind -ing, I'd like…, I'm afraid…, I was wondering if…)",
          "Makes a complaint clearly and negotiates a solution without sounding rude",
          "Uses 'if/whether' correctly in yes/no indirect questions"
        ],
        minLearnerTurns: 12
      }
    },
    // ---------------------------------------------------------------- 14 CHECKPOINT
    {
      id: "b1-14",
      type: "checkpoint",
      icon: "🏆",
      title: "B1 lygio egzaminas",
      titleEn: "B1 checkpoint – speaking exam",
      canDo: [
        "Galiu laisvai kalbėti apie save, savo patirtį ir planus.",
        "Galiu apibūdinti nuotrauką, diskutuoti ir pagrįsti savo nuomonę.",
        "Galiu tvarkingai ir aiškiai pasakoti 1–2 minutes be ilgų pauzių."
      ],
      grammar: {
        title: "Ką kartojame prieš egzaminą",
        explanation: [
          "Šis egzaminas sukurtas pagal <b>Cambridge B1 Preliminary</b> kalbėjimo dalies modelį: <b>1)</b> pokalbis apie save, <b>2)</b> nuotraukos apibūdinimas, <b>3)</b> bendra diskusija ir sprendimo priėmimas, <b>4)</b> išplėtota kalba ir nuomonės pagrindimas.",
          "Gramatika: <b>Present Perfect Continuous</b> (How long…?), <b>used to / would</b>, <b>pasakojimo laikai ir Past Perfect</b>, <b>First / Second / Zero Conditional</b> ir laiko sakiniai, <b>passive</b>, <b>reported speech</b>, <b>must / might / can't</b>, <b>-ing / to</b>, <b>phrasal verbs</b>, <b>-ed / -ing būdvardžiai, so / such</b>.",
          "Funkcijos: nuomonės reiškimas ir mandagus nesutikimas, netiesioginiai klausimai, mandagūs prašymai ir skundai.",
          "Patarimai: atsakyk ne vienu žodžiu – pridėk priežastį ir pavyzdį. Jei nežinai žodžio, paaiškink kitaip (<i>It's a kind of…, It's something you use for…</i>). Jei nesupratai – paklausk: <i>Sorry, could you repeat that?</i>"
        ],
        examples: [
          { en: "I've been working as an engineer for about eight years.", lt: "Inžinieriumi dirbu apie aštuonerius metus." },
          { en: "When I was younger, I used to play basketball every day.", lt: "Kai buvau jaunesnis, kasdien žaisdavau krepšinį." },
          { en: "In the photo, there's a woman who must be a tourist.", lt: "Nuotraukoje yra moteris, kuri turbūt turistė." },
          { en: "If I had more free time, I'd learn to cook properly.", lt: "Jei turėčiau daugiau laisvo laiko, išmokčiau gerai gaminti." },
          { en: "I see your point, but I think the museum would be more interesting.", lt: "Suprantu tavo mintį, bet manau, kad muziejus būtų įdomesnis." },
          { en: "Sorry, could you tell me what you mean by that?", lt: "Atsiprašau, gal galėtumėte paaiškinti, ką turite omenyje?" }
        ],
        pitfalls: [
          "Neatsakinėk vienu žodžiu ar trumpu „Yes“. Egzaminuotojas vertina, kiek ir kaip ilgai gali kalbėti.",
          "Dažniausios klaidos, kurias reikia stebėti: <i>I live here since…</i>, <i>If I would have…</i>, <i>I am agree</i>, <i>Could you tell me where is…</i>, <i>I'm boring</i>.",
          "Nebijok klysti – jei pastebėjai klaidą, tiesiog pasitaisyk: <i>Sorry, I mean…</i>"
        ]
      },
      vocab: [],
      phrases: [
        { en: "Sorry, could you repeat the question?", lt: "Atsiprašau, gal galite pakartoti klausimą?" },
        { en: "That's a difficult question. Let me think…", lt: "Sunkus klausimas. Leiskite pagalvoti…" },
        { en: "I don't know the word, but it's a kind of …", lt: "Nežinau žodžio, bet tai toks …" },
        { en: "Shall we decide? I think … is the best option.", lt: "Gal nuspręskime? Manau, … yra geriausias variantas." },
        { en: "What do you think?", lt: "O ką jūs manote?" }
      ],
      quiz: [
        { type: "choice", q: "I ___ English for three years.", options: ["am learning", "have been learning", "learn"], answer: 1,
          explain: "Veiksmas tebesitęsia nuo praeities – Present Perfect Continuous." },
        { type: "choice", q: "If I ___ you, I would accept the job.", options: ["am", "would be", "were"], answer: 2,
          explain: "Second Conditional: If I were you…" },
        { type: "choice", q: "This bridge ___ in the 19th century.", options: ["built", "was built", "has built"], answer: 1,
          explain: "Passive, praeitis: was built." },
        { type: "choice", q: "Could you tell me where ___?", options: ["the post office is", "is the post office", "does the post office"], answer: 0,
          explain: "Netiesioginis klausimas – teiginio tvarka." },
        { type: "input", q: "Pakeisk į netiesioginę kalbą: “I will call you.” → She said she …", answer: ["would call me", "She said she would call me", "she would call me", "She said that she would call me", "would call me."],
          explain: "will → would, you → me." },
        { type: "order", words: ["he", "must", "be", "very", "tired"], answer: "he must be very tired", lt: "Jis turbūt labai pavargęs." }
      ],
      speaking: {
        scenario: "You are a friendly but professional examiner running a full B1 speaking exam modelled on the Cambridge B1 Preliminary speaking test. Run it in four parts and keep to the structure. Speak at a natural but clear pace. Do not correct the learner during the exam; note errors and give detailed feedback (strengths, errors with corrections, a B1 pass/not yet decision) only at the end. Part 1 – Interview (2–3 min): personal questions. Part 2 – Photo description (about 1 minute of learner talk): describe an imaginary photo in words and ask the learner to describe and speculate. Part 3 – Collaborative task (2–3 min): give a decision-making situation and discuss options together. Part 4 – Discussion (3 min): broader opinion questions linked to Part 3, plus one extended talk (1–2 minutes) about a past experience.",
        tasks: [
          "Part 1 – Interview: ask the learner's name, where they live and how long they have lived/worked/studied there, what they used to do as a child, what they enjoy doing in their free time, and their plans for the next year.",
          "Part 2 – Photo: say 'Here is a photo of people in a busy kitchen. One man is holding a big plate and a woman in a white hat is shouting.' Ask the learner to describe it for about a minute and speculate (who they might be, where they are, what is happening, how they feel). Then give a second photo (e.g. 'a family at a train station with lots of suitcases').",
          "Part 3 – Collaborative task: 'A friend from abroad is visiting Lithuania for one weekend. Here are some ideas: a museum in Vilnius, a day at the seaside, a hiking trip in a national park, a cooking class, a concert. Talk together about each idea and decide which is best.' Give different opinions so the learner must agree/disagree politely and reach a decision.",
          "Part 4 – Discussion and extended talk: ask 'Do you think tourism is good for small towns?', 'What would you do if you could live in any country?', 'How has your town changed in the last ten years – what used to be there?' Then ask for a 1–2 minute story: 'Tell me about a trip or day that didn't go as planned.' Finally, ask the learner to report one thing you said earlier (reported speech) and to make one polite indirect question to you.",
          "At the end, give feedback in simple English with Lithuanian support if needed: 3 strengths, 3–5 errors with corrections, and a clear decision: 'B1 – passed' or 'Not yet – review lessons X and Y'."
        ],
        successCriteria: [
          "Completes all four parts, giving extended answers (2+ sentences) to most questions and speaking for about one minute on the photo and 1–2 minutes in the story",
          "Uses at least 8 different B1 structures correctly across the exam (Present Perfect Continuous, used to, Past Perfect, Second Conditional, time clauses, passive, reported speech, modals of deduction, gerund/infinitive, so/such)",
          "Speculates appropriately in Part 2 using must/might/can't and photo vocabulary (in the background, on the left)",
          "In Part 3, expresses opinions, agrees and disagrees politely, and reaches a decision with the examiner",
          "Communicates clearly with mostly correct grammar; errors do not block understanding and the learner self-corrects at least once"
        ],
        minLearnerTurns: 16
      }
    }
  ]
});
