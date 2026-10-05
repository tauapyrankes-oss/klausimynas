(window.LEVELS = window.LEVELS || []).push({
  id: "a2plus",
  name: "A2+",
  title: "Stiprus elementarus",
  description: "Po šio lygio galėsi pasakoti apie savo patirtį ir naujienas, lyginti praeitį su dabartimi, kalbėti apie planus, sąlygas ir jausmus, susitarti dėl susitikimo ir sujungti mintis į ilgesnius sakinius.",
  lessons: [
    // ---------------------------------------------------------------- 01
    {
      id: "a2plus-01",
      type: "lesson",
      icon: "🌍",
      title: "Present Perfect: patirtis (ever / never)",
      titleEn: "Present Perfect – experiences",
      canDo: [
        "Galiu papasakoti, ką esu daręs (-iusi) gyvenime, nenurodydamas (-a) kada.",
        "Galiu paklausti kito žmogaus apie jo patirtį: „Have you ever…?“"
      ],
      grammar: {
        title: "Present Perfect – „ar kada nors gyvenime…?“",
        explanation: [
          "Lietuvių kalboje atskiro <b>Present Perfect</b> laiko nėra. Sakome „esu buvęs Paryžiuje“ arba tiesiog „buvau Paryžiuje“. Anglams tai du skirtingi dalykai: <code>I have been to Paris</code> (patirtis, svarbu dabar) ir <code>I went to Paris in 2019</code> (konkretus įvykis praeityje).",
          "Present Perfect jungia praeitį su <b>dabartimi</b>. Kalbant apie patirtį, mums nesvarbu <i>kada</i> – svarbu, kad <i>iki šiol gyvenime</i> tai įvyko (arba ne). Lietuviškas „esu matęs“ labai artimas šiai minčiai – tai gera atrama.",
          "Forma: <code>have / has + 3-ioji forma (past participle)</code>. Taisyklingi veiksmažodžiai: <code>work → worked</code>. Netaisyklingi reikia išmokti: <code>see → seen, eat → eaten, be → been, go → gone</code>.",
          "Klausimuose dažnai vartojame <code>ever</code> (kada nors): <code>Have you ever eaten sushi?</code> Neigimui – <code>never</code> (niekada): <code>I have never eaten sushi.</code> Dėmesio: su <code>never</code> nereikia <code>not</code>!",
          "<code>been</code> ir <code>gone</code>: <code>She has been to Rome</code> – ji ten buvo ir grįžo. <code>She has gone to Rome</code> – ji išvyko ir dabar yra ten (ne čia)."
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I have (I've) visited London. / She has (She's) seen it."],
          ["–", "I haven't tried it. / I have never tried it."],
          ["?", "Have you ever been to Italy? – Yes, I have. / No, I haven't."],
          ["been vs gone", "He has been to Spain (grįžo). / He has gone to Spain (dabar ten)."]
        ],
        examples: [
          { en: "Have you ever been to Norway?", lt: "Ar kada nors buvai Norvegijoje?" },
          { en: "I've never seen snow in April.", lt: "Niekada nesu matęs sniego balandį." },
          { en: "She has tried Indian food many times.", lt: "Ji daug kartų ragavo indiško maisto." },
          { en: "We have never lost a game.", lt: "Mes niekada nesame pralaimėję žaidimo." },
          { en: "Tom isn't here. He has gone to the shop.", lt: "Tomo nėra. Jis nuėjo į parduotuvę (dar negrįžo)." },
          { en: "I have been to that shop. It's great.", lt: "Esu buvęs toje parduotuvėje. Ji puiki." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: dvigubas neigimas – <i>I haven't never been there</i>. Teisingai: <b>I have never been there</b> arba <b>I haven't ever been there</b>.",
          "Klaida: <i>Did you ever be in Paris?</i> Klausiant apie gyvenimo patirtį natūraliau: <b>Have you ever been to Paris?</b> (ir <b>to</b>, ne <i>in</i>).",
          "Painiojama <i>been</i> ir <i>gone</i>: <i>I have gone to London three times</i> – neteisinga, nes tu jau čia. Sakyk: <b>I have been to London three times.</b>"
        ]
      },
      vocab: [
        { en: "ever", lt: "kada nors" },
        { en: "never", lt: "niekada" },
        { en: "once / twice", lt: "vieną kartą / du kartus" },
        { en: "several times", lt: "keletą kartų" },
        { en: "experience", lt: "patirtis" },
        { en: "abroad", lt: "užsienyje, į užsienį" },
        { en: "to try (tried)", lt: "pabandyti, paragauti" },
        { en: "to climb (climbed)", lt: "lipti, kopti" },
        { en: "to ride (ridden)", lt: "jodinėti, važiuoti (dviračiu, motociklu)" },
        { en: "to meet (met)", lt: "susitikti, susipažinti" },
        { en: "to win (won)", lt: "laimėti" },
        { en: "to fly (flown)", lt: "skristi" },
        { en: "famous", lt: "garsus, žinomas" },
        { en: "in my life", lt: "savo gyvenime" }
      ],
      phrases: [
        { en: "Have you ever…?", lt: "Ar kada nors esi…?" },
        { en: "Yes, I have. / No, never.", lt: "Taip, esu. / Ne, niekada." },
        { en: "I've done it a few times.", lt: "Esu tai daręs keletą kartų." },
        { en: "What was it like?", lt: "Kaip ten buvo? / Koks tai buvo jausmas?" },
        { en: "I've always wanted to try that.", lt: "Visada norėjau tai išbandyti." }
      ],
      quiz: [
        { type: "choice", q: "Have you ever ___ to Japan?", options: ["went", "been", "gone"], answer: 1,
          explain: "Apie patirtį (buvai ir grįžai) sakome <b>been to</b>." },
        { type: "choice", q: "I have ___ eaten octopus.", options: ["ever", "never", "not never"], answer: 1,
          explain: "Teigiamame sakinyje „niekada“ = <b>never</b>; dvigubo neigimo nėra." },
        { type: "choice", q: "Where's Anna? – She has ___ to the gym. She'll be back at six.", options: ["been", "gone", "went"], answer: 1,
          explain: "Ji išėjo ir dar ten – <b>gone</b>." },
        { type: "input", q: "Išversk: Aš niekada nesu skridęs lėktuvu.", answer: ["I have never flown", "I've never flown", "I have never been on a plane", "I've never been on a plane", "I have never flown on a plane", "I've never flown on a plane", "I have never travelled by plane", "I've never travelled by plane", "I have never traveled by plane", "I've never traveled by plane"],
          explain: "<b>have never + 3-ioji forma</b>: fly → flown." },
        { type: "order", words: ["you", "ever", "have", "met", "a", "famous", "person"], answer: "have you ever met a famous person", lt: "Ar kada nors esi sutikęs garsų žmogų?" },
        { type: "input", q: "Įrašyk 3-iąją formą: see → ___", answer: ["seen"], explain: "see – saw – <b>seen</b>." }
      ],
      speaking: {
        scenario: "You and the learner are playing 'Have you ever…?' at a friendly party. Take turns asking about life experiences (travel, food, sports, unusual situations). When someone says 'Yes, I have', the other asks a Past Simple follow-up question (When? Where? What was it like?).",
        tasks: [
          "Ask the learner at least 5 'Have you ever…?' questions on different topics and let them answer with full sentences.",
          "When the learner says yes, ask a follow-up in Past Simple (When did you…? Did you like it?) so they practise switching tenses.",
          "Ask the learner to ask YOU at least 3 'Have you ever…?' questions.",
          "Ask where a mutual friend is now to elicit 'has gone to', and ask about places they have visited to elicit 'have been to'."
        ],
        successCriteria: [
          "Forms at least 5 correct Present Perfect sentences (have/has + past participle)",
          "Uses 'never' without double negation at least twice",
          "Asks at least 3 correct 'Have you ever…?' questions",
          "Uses 'been to' vs 'gone to' correctly at least once each"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 02
    {
      id: "a2plus-02",
      type: "lesson",
      icon: "📰",
      title: "Present Perfect: just / already / yet – naujienos ir darbai",
      titleEn: "Present Perfect – just, already, yet",
      canDo: [
        "Galiu pasakyti naujienas: kas ką tik įvyko.",
        "Galiu pasakyti, kuriuos darbus jau padariau ir kurių dar ne."
      ],
      grammar: {
        title: "just, already, yet – rezultatas dabar",
        explanation: [
          "Present Perfect taip pat vartojamas, kai praeities veiksmas turi <b>rezultatą dabar</b>. <code>I've lost my keys</code> reiškia ne tik „pamečiau“, bet ir „dabar neturiu raktų“. Lietuviškai sakome tiesiog būtuoju laiku, todėl reikia pajusti šį „dabar“ ryšį.",
          "<code>just</code> = ką tik. Statomas tarp <code>have</code> ir veiksmažodžio: <code>I've just finished.</code>",
          "<code>already</code> = jau (anksčiau, nei tikėtasi). Taip pat viduryje: <code>She has already left.</code>",
          "<code>yet</code> = dar (neiginyje) / jau (klausime). Statomas <b>sakinio gale</b>: <code>I haven't called him yet.</code> – Dar nepaskambinau. <code>Have you called him yet?</code> – Ar jau paskambinai?",
          "Svarbu: su Present Perfect <b>nevartojame</b> konkretaus praeities laiko (<i>yesterday, at 5 o'clock, last week</i>). Naujienas pradedame Present Perfect, o detales pasakojame Past Simple."
        ],
        table: [
          ["Žodis", "Vieta", "Pavyzdys"],
          ["just", "have + just + V3", "I've just seen your message."],
          ["already", "have + already + V3", "We've already paid."],
          ["yet (–)", "sakinio gale", "I haven't packed yet."],
          ["yet (?)", "sakinio gale", "Have you packed yet?"]
        ],
        examples: [
          { en: "I've just heard the news!", lt: "Ką tik išgirdau naujieną!" },
          { en: "Have you finished the report yet?", lt: "Ar jau baigei ataskaitą?" },
          { en: "No, I haven't started it yet.", lt: "Ne, dar jos nepradėjau." },
          { en: "Don't worry, I've already booked the tickets.", lt: "Nesijaudink, bilietus jau užsakiau." },
          { en: "Our team has just won the match!", lt: "Mūsų komanda ką tik laimėjo rungtynes!" },
          { en: "She's lost her phone, so she can't call you.", lt: "Ji pametė telefoną, todėl negali tau paskambinti." },
          { en: "The bus has already left.", lt: "Autobusas jau išvažiavo." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I have done it yesterday.</i> Su konkrečiu laiku – tik Past Simple: <b>I did it yesterday.</b>",
          "<i>yet</i> padedamas ne toje vietoje: <i>I haven't yet finished</i> skamba knygiškai. Natūraliai: <b>I haven't finished yet.</b>",
          "Lietuviškas „jau“ klausime verčiamas <b>yet</b>, ne <i>already</i>: <b>Have you eaten yet?</b> (Ar jau valgei?)."
        ]
      },
      vocab: [
        { en: "just", lt: "ką tik" },
        { en: "already", lt: "jau" },
        { en: "yet", lt: "dar (neig.) / jau (klaus.)" },
        { en: "news", lt: "naujienos" },
        { en: "to book (booked)", lt: "užsakyti, rezervuoti" },
        { en: "to pack (packed)", lt: "susikrauti daiktus" },
        { en: "to send (sent)", lt: "išsiųsti" },
        { en: "to lose (lost)", lt: "pamesti, pralaimėti" },
        { en: "to break (broken)", lt: "sulaužyti, sudaužyti" },
        { en: "to clean (cleaned)", lt: "valyti, tvarkyti" },
        { en: "to arrive (arrived)", lt: "atvykti" },
        { en: "to-do list", lt: "darbų sąrašas" },
        { en: "to forget (forgotten)", lt: "pamiršti" }
      ],
      phrases: [
        { en: "Guess what? I've just…", lt: "Atspėk, ką? Ką tik…" },
        { en: "Have you done it yet?", lt: "Ar jau padarei?" },
        { en: "Not yet, I'll do it later.", lt: "Dar ne, padarysiu vėliau." },
        { en: "I've already done that.", lt: "Tai jau padariau." },
        { en: "That's great news!", lt: "Tai puiki naujiena!" }
      ],
      quiz: [
        { type: "choice", q: "Have you sent the email ___?", options: ["already", "just", "yet"], answer: 2,
          explain: "Klausime „ar jau…?“ sakinio gale – <b>yet</b>." },
        { type: "choice", q: "I ___ my homework yesterday.", options: ["have finished", "finished", "have just finished"], answer: 1,
          explain: "Yra <i>yesterday</i> – konkretus laikas, todėl Past Simple." },
        { type: "choice", q: "Wow, you're fast! You've ___ cleaned the kitchen!", options: ["yet", "already", "ever"], answer: 1,
          explain: "Jau (anksčiau nei tikėtasi) – <b>already</b>." },
        { type: "input", q: "Išversk: Aš ką tik atvykau.", answer: ["I have just arrived", "I've just arrived", "I just arrived"],
          explain: "<b>have just + V3</b>: I've just arrived." },
        { type: "order", words: ["haven't", "I", "packed", "my", "bag", "yet"], answer: "i haven't packed my bag yet", lt: "Dar nesusikroviau krepšio." },
        { type: "input", q: "Išversk: Ar jau valgei?", answer: ["Have you eaten yet", "Have you eaten yet?", "Did you eat yet", "Have you had lunch yet", "Have you had dinner yet"],
          explain: "Klausime „jau“ = <b>yet</b> sakinio gale." }
      ],
      speaking: {
        scenario: "You and the learner are flatmates preparing for a weekend trip tomorrow. Go through the to-do list together (book the taxi, pack, buy snacks, water the plants, charge phones, send the address to friends). Also share some 'news' that has just happened.",
        tasks: [
          "Ask 'Have you … yet?' about at least 5 items on the list; the learner answers with already / not yet.",
          "Ask the learner to tell you 2 pieces of news that have 'just' happened (real or invented).",
          "Ask one follow-up question about the news in Past Simple (When did it happen? How did you find out?).",
          "Ask the learner to check 2 tasks on YOUR list using 'yet'."
        ],
        successCriteria: [
          "Uses 'just', 'already' and 'yet' correctly at least once each",
          "Puts 'yet' at the end of the sentence every time",
          "Does not combine Present Perfect with a finished time expression (yesterday, last week…)",
          "Produces at least 6 correct Present Perfect sentences"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 03
    {
      id: "a2plus-03",
      type: "lesson",
      icon: "⚖️",
      title: "Present Perfect ar Past Simple?",
      titleEn: "Present Perfect vs Past Simple",
      canDo: [
        "Galiu pasirinkti tinkamą laiką: patirtis / rezultatas dabar ar konkretus įvykis praeityje.",
        "Galiu pradėti pokalbį Present Perfect ir tęsti detales Past Simple.",
        "Galiu pasakyti, kiek laiko kažką darau (for / since)."
      ],
      grammar: {
        title: "Ar laikas baigtas, ar susijęs su dabar?",
        explanation: [
          "Paprasta taisyklė: jei sakinyje yra <b>baigtas laikas</b> (<i>yesterday, in 2015, last summer, two days ago, when I was a child</i>) – vartok <b>Past Simple</b>. Jei laikas nenurodytas arba dar tęsiasi (<i>ever, never, today, this week, so far, recently</i>) – <b>Present Perfect</b>.",
          "Pokalbis dažnai prasideda Present Perfect (bendra žinia), o paskui pereina į Past Simple (detalės): <code>I've been to Rome. – Really? When did you go? – I went there last year.</code>",
          "<code>for</code> ir <code>since</code> su Present Perfect rodo, kad kažkas prasidėjo praeityje ir <b>tebesitęsia</b>: <code>I have lived here for five years</code> (gyvenu čia jau penkerius metus). Lietuviškai sakome esamuoju laiku („gyvenu“), todėl lietuviai dažnai klysta: <i>I live here for five years</i>.",
          "<code>for</code> + laiko trukmė (<i>for two weeks, for a long time</i>), <code>since</code> + pradžios taškas (<i>since 2020, since Monday, since I was ten</i>).",
          "Palygink: <code>I lived in Kaunas for ten years</code> (dabar ten nebegyvenu – baigta) ir <code>I have lived in Kaunas for ten years</code> (vis dar gyvenu)."
        ],
        table: [
          ["Present Perfect", "Past Simple"],
          ["ever, never, just, already, yet", "yesterday, last…, … ago"],
          ["today / this week (dar nesibaigė)", "in 2010, on Monday, at 6 pm"],
          ["for / since (tęsiasi iki dabar)", "for (baigta trukmė praeityje)"],
          ["I've seen that film.", "I saw it last Friday."]
        ],
        examples: [
          { en: "I've lost my wallet. I lost it on the bus this morning.", lt: "Pamečiau piniginę. Pamečiau ją autobuse šįryt." },
          { en: "Have you seen Mark today? – Yes, I saw him at lunch.", lt: "Ar matei šiandien Marką? – Taip, mačiau jį per pietus." },
          { en: "I've worked here since March.", lt: "Čia dirbu nuo kovo." },
          { en: "She has known him for twenty years.", lt: "Ji jį pažįsta dvidešimt metų." },
          { en: "We went to Greece two years ago.", lt: "Prieš dvejus metus nuvykome į Graikiją." },
          { en: "How long have you had your dog?", lt: "Kiek laiko turi savo šunį?" },
          { en: "He lived in London for three years, then moved back.", lt: "Jis trejus metus gyveno Londone, paskui grįžo." }
        ],
        pitfalls: [
          "Lietuviams dažniausia klaida: <i>I have seen him yesterday.</i> Su <i>yesterday</i> – tik <b>I saw him yesterday.</b>",
          "<i>I live here since 2018 / for five years.</i> – neteisinga. Teisingai: <b>I have lived here since 2018 / for five years.</b>",
          "<i>When have you arrived?</i> – klausimas <b>When…?</b> visada reikalauja Past Simple: <b>When did you arrive?</b>"
        ]
      },
      vocab: [
        { en: "ago", lt: "prieš (laiką)" },
        { en: "since", lt: "nuo (tam tikro laiko)" },
        { en: "for", lt: "(tam tikrą laiką)" },
        { en: "recently", lt: "neseniai, pastaruoju metu" },
        { en: "so far", lt: "iki šiol" },
        { en: "How long…?", lt: "Kiek laiko…?" },
        { en: "to move (house)", lt: "persikraustyti" },
        { en: "to change jobs", lt: "pakeisti darbą" },
        { en: "to graduate", lt: "baigti mokslus" },
        { en: "to get married", lt: "susituokti" },
        { en: "childhood", lt: "vaikystė" },
        { en: "a long time", lt: "ilgas laikas" }
      ],
      phrases: [
        { en: "How long have you lived here?", lt: "Kiek laiko čia gyveni?" },
        { en: "When did that happen?", lt: "Kada tai nutiko?" },
        { en: "I've done it, but it was a long time ago.", lt: "Esu tai daręs, bet labai seniai." },
        { en: "So far, so good.", lt: "Kol kas viskas gerai." },
        { en: "Since then…", lt: "Nuo tada…" }
      ],
      quiz: [
        { type: "choice", q: "I ___ that film last weekend.", options: ["have seen", "saw", "have saw"], answer: 1,
          explain: "<i>last weekend</i> – baigtas laikas → Past Simple." },
        { type: "choice", q: "We ___ in this flat since 2019.", options: ["live", "lived", "have lived"], answer: 2,
          explain: "Tęsiasi iki dabar + since → <b>have lived</b>." },
        { type: "choice", q: "When ___ you start learning English?", options: ["have", "did", "do"], answer: 1,
          explain: "Klausimas <b>When</b> apie praeitį → Past Simple." },
        { type: "choice", q: "I've known Lina ___ ten years.", options: ["since", "for", "ago"], answer: 1,
          explain: "Trukmė (dešimt metų) → <b>for</b>." },
        { type: "input", q: "Išversk: Aš čia dirbu nuo 2020 metų.", answer: ["I have worked here since 2020", "I've worked here since 2020", "I have been working here since 2020", "I've been working here since 2020"],
          explain: "Lietuviškas esamasis laikas, bet angliškai – <b>have worked … since</b>." },
        { type: "order", words: ["how", "long", "have", "you", "had", "this", "car"], answer: "how long have you had this car", lt: "Kiek laiko turi šį automobilį?" }
      ],
      speaking: {
        scenario: "You are a friendly journalist writing a short article 'Life stories'. Interview the learner about their life: where they live and work, how long, important past events (moving, studies, first job), and experiences.",
        tasks: [
          "Ask 'How long have you…?' about at least 3 things (live, work, know a friend, have a hobby).",
          "Ask 'Have you ever…?' and then 'When did you…?' to make the learner switch from Present Perfect to Past Simple.",
          "Ask the learner to tell a short story of one important year in their life using Past Simple.",
          "Correct gently any 'I have … yesterday' or 'I live here for…' errors and ask them to repeat correctly."
        ],
        successCriteria: [
          "Uses 'for' and 'since' correctly with Present Perfect at least 3 times",
          "Uses Past Simple (not Present Perfect) with every finished time expression",
          "Switches correctly from Present Perfect question to Past Simple details at least twice",
          "Answers 'When…?' questions in Past Simple"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- 04
    {
      id: "a2plus-04",
      type: "lesson",
      icon: "🎬",
      title: "Past Continuous + when / while",
      titleEn: "Past Continuous – what was happening",
      canDo: [
        "Galiu papasakoti, kas vyko tam tikru metu praeityje.",
        "Galiu papasakoti istoriją, kai ilgesnį veiksmą nutraukė trumpas įvykis."
      ],
      grammar: {
        title: "Kas vyko, kai kažkas nutiko?",
        explanation: [
          "<b>Past Continuous</b> (<code>was / were + -ing</code>) rodo veiksmą, kuris <b>vyko</b> tam tikru praeities momentu: <code>At 8 pm I was cooking.</code> Lietuviškai tai panašu į eigos reikšmę – „gaminau (tuo metu)“, „buvau begaminąs“.",
          "Dažnas derinys istorijose: ilgas veiksmas (Past Continuous) + trumpas įvykis, kuris jį nutraukė (Past Simple): <code>I was walking home when it started to rain.</code>",
          "<code>when</code> dažniausiai jungiamas su trumpu įvykiu (Past Simple): <i>…when the phone rang</i>. <code>while</code> – su ilgu veiksmu (Past Continuous): <i>While I was sleeping, …</i>",
          "Du ilgi veiksmai vienu metu: <code>While I was cooking, my husband was watching TV.</code>",
          "Būsenų veiksmažodžiai (<i>know, like, want, have</i> – turėti) paprastai nevartojami su -ing: <i>I was knowing</i> – neteisinga."
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I/he/she/it was working. You/we/they were working."],
          ["–", "I wasn't listening. They weren't sleeping."],
          ["?", "Were you driving? What was she doing?"],
          ["when / while", "I was reading when he called. / While I was reading, he called."]
        ],
        examples: [
          { en: "What were you doing at 10 last night?", lt: "Ką veikei vakar 10 valandą vakaro?" },
          { en: "I was watching a film.", lt: "Žiūrėjau filmą." },
          { en: "We were having dinner when the lights went out.", lt: "Vakarieniavome, kai dingo šviesa." },
          { en: "While she was jogging, she saw a fox.", lt: "Bėgiodama ji pamatė lapę." },
          { en: "It was snowing and the children were playing outside.", lt: "Snigo, o vaikai žaidė lauke." },
          { en: "I broke my arm while I was skiing.", lt: "Susilaužiau ranką slidinėdamas." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: abu veiksmai Past Simple – <i>I walked home when it started to rain</i> (tai reiškia, kad ėjimas prasidėjo po lietaus!). Fono veiksmui: <b>I was walking home when it started to rain.</b>",
          "Pamirštama <i>was / were</i>: <i>I watching TV.</i> Teisingai: <b>I was watching TV.</b>",
          "Painiojama <i>was</i> ir <i>were</i>: <i>They was…</i> → <b>They were…</b>; <i>you</i> visada su <b>were</b>."
        ]
      },
      vocab: [
        { en: "while", lt: "kol, tuo metu kai" },
        { en: "suddenly", lt: "staiga" },
        { en: "at that moment", lt: "tuo momentu" },
        { en: "to happen", lt: "nutikti, įvykti" },
        { en: "to ring (rang)", lt: "skambėti, suskambėti" },
        { en: "to fall (fell)", lt: "kristi, nukristi" },
        { en: "to notice", lt: "pastebėti" },
        { en: "to drop", lt: "numesti, išmesti iš rankų" },
        { en: "accident", lt: "nelaimingas atsitikimas, avarija" },
        { en: "power cut", lt: "elektros dingimas" },
        { en: "storm", lt: "audra" },
        { en: "to shout", lt: "šaukti" }
      ],
      phrases: [
        { en: "What were you doing when…?", lt: "Ką veikei, kai…?" },
        { en: "I was in the middle of…", lt: "Kaip tik…, buvau įpusėjęs…" },
        { en: "All of a sudden…", lt: "Staiga…" },
        { en: "And then guess what happened?", lt: "Ir atspėk, kas tada nutiko?" },
        { en: "You won't believe it, but…", lt: "Nepatikėsi, bet…" }
      ],
      quiz: [
        { type: "choice", q: "I ___ a shower when the doorbell rang.", options: ["took", "was taking", "were taking"], answer: 1,
          explain: "Ilgas veiksmas fone → <b>was taking</b> (I + was)." },
        { type: "choice", q: "While they ___ football, it started to rain.", options: ["were playing", "was playing", "played"], answer: 0,
          explain: "<b>while</b> + ilgas veiksmas; they → <b>were</b>." },
        { type: "choice", q: "She was driving to work ___ she saw the accident.", options: ["while", "when", "during"], answer: 1,
          explain: "Trumpas įvykis (saw) → <b>when</b>." },
        { type: "input", q: "Išversk: Ką tu veikei vakar 9 valandą?", answer: ["What were you doing at 9 yesterday", "What were you doing at nine yesterday", "What were you doing yesterday at 9", "What were you doing yesterday at nine", "What were you doing at 9 o'clock yesterday", "What were you doing at nine o'clock yesterday"],
          explain: "Konkretus momentas praeityje → <b>What were you doing…?</b>" },
        { type: "order", words: ["I", "was", "cooking", "when", "you", "called"], answer: "i was cooking when you called", lt: "Gaminau valgyti, kai tu paskambinai." },
        { type: "choice", q: "We ___ TV, so we didn't hear the phone.", options: ["watched", "was watching", "were watching"], answer: 2,
          explain: "we → <b>were</b> + -ing." }
      ],
      speaking: {
        scenario: "You are a police officer (in a light, funny way) asking the learner where they were and what they were doing yesterday evening, because a neighbour's cat disappeared at 7:30 pm. Then the learner tells a short story about a time something surprising happened to them.",
        tasks: [
          "Ask 'What were you doing at 6 / 7 / 7:30 / 8 pm?' and get answers in Past Continuous.",
          "Ask who else was there and what they were doing.",
          "Ask the learner to tell a real or invented story where something unexpected happened 'while' they were doing something.",
          "Ask at least 2 follow-up questions with 'when' or 'while'."
        ],
        successCriteria: [
          "Uses was/were + -ing correctly at least 5 times",
          "Combines Past Continuous and Past Simple with 'when' or 'while' in at least 3 sentences",
          "Never drops 'was/were' in Past Continuous",
          "Tells a story of at least 5 connected sentences"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 05
    {
      id: "a2plus-05",
      type: "lesson",
      icon: "🔮",
      title: "will: spėjimai, pasiūlymai, spontaniški sprendimai",
      titleEn: "will – predictions, offers, decisions (vs going to)",
      canDo: [
        "Galiu pasakyti, ką manau apie ateitį.",
        "Galiu pasiūlyti pagalbą ir priimti greitą sprendimą.",
        "Galiu atskirti iš anksto suplanuotus dalykus (going to) nuo spontaniškų (will)."
      ],
      grammar: {
        title: "will ar going to?",
        explanation: [
          "<code>will + veiksmažodis</code> (be <i>to</i>!) vartojamas: <b>spėjimams</b> (<code>I think it will rain.</code>), <b>pasiūlymams</b> (<code>I'll help you.</code>), <b>pažadams</b> (<code>I'll call you tonight.</code>) ir <b>sprendimams, priimtiems kalbėjimo metu</b> (<code>The phone is ringing. – I'll get it!</code>).",
          "<code>be going to</code> – kai sprendimas jau buvo priimtas <b>anksčiau</b> (planas): <code>I'm going to visit my parents on Sunday.</code> Taip pat spėjimui, kai matome įrodymą: <code>Look at those clouds! It's going to rain.</code>",
          "Lietuviškai abiem atvejais sakome būsimuoju laiku („padėsiu“, „aplankysiu“), todėl reikia klausti savęs: ar nusprendžiau dabar, ar jau anksčiau?",
          "Spėjimuose dažnai: <code>I think…, I don't think…, probably, maybe</code>. Atkreipk dėmesį: angliškai sakoma <code>I don't think it will rain</code>, o ne <i>I think it won't rain</i> (nors tai ir ne klaida, bet mažiau natūralu).",
          "Sutrumpinimai: <code>I'll, you'll, she'll</code>; neiginys <code>won't</code> (= will not)."
        ],
        table: [
          ["Funkcija", "Pavyzdys"],
          ["Spėjimas (nuomonė)", "I think Lithuania will win."],
          ["Pasiūlymas", "That bag looks heavy. I'll carry it."],
          ["Spontaniškas sprendimas", "I'm cold. – I'll close the window."],
          ["Pažadas", "I won't tell anyone."],
          ["Planas (going to)", "I'm going to start a course in May."]
        ],
        examples: [
          { en: "I'll have the soup, please.", lt: "Man sriubos, prašau (užsisakau dabar)." },
          { en: "Don't worry, I'll help you with the boxes.", lt: "Nesijaudink, padėsiu tau su dėžėmis." },
          { en: "I don't think he'll come.", lt: "Nemanau, kad jis ateis." },
          { en: "In 2050 people will probably work less.", lt: "2050 m. žmonės tikriausiai dirbs mažiau." },
          { en: "We're going to paint the kitchen this weekend.", lt: "Šį savaitgalį ketiname dažyti virtuvę." },
          { en: "Shall I open the window? – Yes, please.", lt: "Ar atidaryti langą? – Taip, prašau." },
          { en: "I promise I won't be late.", lt: "Pažadu, kad nevėluosiu." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I will to call you.</i> Po <i>will</i> nėra <i>to</i>: <b>I will call you.</b>",
          "Spontaniškame sprendime vartojamas esamasis laikas: <i>The phone is ringing. – I answer it.</i> Teisingai: <b>I'll answer it.</b>",
          "Planą išreiškiant su <i>will</i> (<i>Tomorrow I will visit my grandma, I bought tickets</i>) skamba nenatūraliai – jei jau suplanuota, <b>I'm going to visit</b>."
        ]
      },
      vocab: [
        { en: "probably", lt: "tikriausiai" },
        { en: "definitely", lt: "tikrai, be abejo" },
        { en: "maybe / perhaps", lt: "galbūt" },
        { en: "future", lt: "ateitis" },
        { en: "to promise", lt: "pažadėti" },
        { en: "to offer", lt: "pasiūlyti" },
        { en: "to carry", lt: "nešti" },
        { en: "to predict", lt: "nuspėti, prognozuoti" },
        { en: "weather forecast", lt: "orų prognozė" },
        { en: "robot", lt: "robotas" },
        { en: "heavy", lt: "sunkus" },
        { en: "to get (the door / phone)", lt: "atidaryti duris / atsiliepti" }
      ],
      phrases: [
        { en: "I'll do it!", lt: "Aš padarysiu!" },
        { en: "Shall I help you?", lt: "Ar tau padėti?" },
        { en: "I don't think so.", lt: "Nemanau." },
        { en: "I'm sure it'll be fine.", lt: "Esu tikras, viskas bus gerai." },
        { en: "I promise I'll…", lt: "Pažadu, kad…" }
      ],
      quiz: [
        { type: "choice", q: "It's cold in here. – OK, I ___ the heating on.", options: ["'m going to turn", "'ll turn", "turn"], answer: 1,
          explain: "Sprendimas priimtas dabar → <b>I'll</b>." },
        { type: "choice", q: "I ___ my grandparents next weekend. I've already bought the tickets.", options: ["will visit", "am going to visit", "visit"], answer: 1,
          explain: "Iš anksto suplanuota → <b>going to</b>." },
        { type: "choice", q: "I think robots ___ most jobs in the future.", options: ["will do", "will to do", "are doing"], answer: 0,
          explain: "Spėjimas su <i>I think</i> → <b>will + veiksmažodis</b> be <i>to</i>." },
        { type: "input", q: "Išversk: Nemanau, kad rytoj lis.", answer: ["I don't think it will rain tomorrow", "I don't think it'll rain tomorrow", "I do not think it will rain tomorrow"],
          explain: "Natūraliai: <b>I don't think it will…</b>" },
        { type: "order", words: ["I", "promise", "I", "won't", "be", "late"], answer: "i promise i won't be late", lt: "Pažadu, kad nevėluosiu." },
        { type: "input", q: "Pasiūlyk pagalbą: „Aš panešiu tavo krepšį.“", answer: ["I'll carry your bag", "I will carry your bag", "I'll carry your bag for you", "I will carry your bag for you"],
          explain: "Pasiūlymas → <b>I'll…</b>" }
      ],
      speaking: {
        scenario: "Part 1: You and the learner are hosting a small party in one hour and many small problems appear (no ice, the music stopped, a guest is at the door, the dog ate the cake). Part 2: You chat about the future of the world and the learner's own plans.",
        tasks: [
          "Describe 4–5 sudden problems one by one; the learner reacts with a spontaneous decision or offer using 'I'll…' or 'Shall I…?'.",
          "Ask for 3 predictions about life in 2050 (transport, work, technology) using 'I think / I don't think … will'.",
          "Ask about the learner's real plans for next month and elicit 'going to'.",
          "Ask the learner to make one promise to you."
        ],
        successCriteria: [
          "Uses 'I'll' / 'Shall I' for at least 4 spontaneous decisions or offers",
          "Makes at least 3 predictions with will / won't, including 'I don't think … will'",
          "Uses 'going to' for at least 2 pre-arranged plans",
          "Never says 'will to' + verb"
        ],
        minLearnerTurns: 9
      }
    },

    // ---------------------------------------------------------------- 06
    {
      id: "a2plus-06",
      type: "lesson",
      icon: "🔀",
      title: "Pirmasis sąlygos sakinys: if + present, will",
      titleEn: "First Conditional",
      canDo: [
        "Galiu pasakyti, kas nutiks, jei įvyks tam tikra sąlyga.",
        "Galiu įspėti, pažadėti ir derėtis („Jei tu…, aš…“)."
      ],
      grammar: {
        title: "Jei… tai… (realios sąlygos ateityje)",
        explanation: [
          "Pirmuoju sąlygos sakiniu kalbame apie <b>realią, tikėtiną</b> ateities situaciją: <code>If it rains, we will stay at home.</code>",
          "Svarbiausia taisyklė: <b>po if – esamasis laikas</b> (Present Simple), nors kalbame apie ateitį! Lietuviškai sakome „jei <b>lis</b>“ (būsimasis), todėl lietuviai labai dažnai sako <i>If it will rain</i>. Anglų kalboje taip negalima.",
          "Kita dalis – <code>will / won't + veiksmažodis</code>. Galima ir <code>can, may, might</code> arba liepiamoji nuosaka: <code>If you see Tom, tell him to call me.</code>",
          "Dalių tvarka gali keistis. Jei sakinys prasideda <i>if</i>, dedamas kablelis: <code>If you hurry, you'll catch the bus.</code> / <code>You'll catch the bus if you hurry.</code>",
          "<code>unless</code> = jei ne: <code>I won't go unless you come with me.</code> (Neisiu, jei tu neisi su manimi.) Taip pat <code>when</code> ir <code>as soon as</code> jungiami su esamuoju laiku: <code>I'll call you when I arrive.</code>"
        ],
        table: [
          ["Sąlyga (if + present)", "Rezultatas (will + V)"],
          ["If you study,", "you'll pass the exam."],
          ["If it doesn't rain,", "we'll have a picnic."],
          ["If I'm late,", "I'll text you."],
          ["What will you do", "if you don't get the job?"]
        ],
        examples: [
          { en: "If I have time, I'll call you tonight.", lt: "Jei turėsiu laiko, šįvakar tau paskambinsiu." },
          { en: "If you don't wear a coat, you'll get cold.", lt: "Jei neapsivilksi palto, sušalsi." },
          { en: "We'll miss the train if we don't leave now.", lt: "Pavėluosime į traukinį, jei neišeisime dabar." },
          { en: "If the weather is nice, we'll go to the beach.", lt: "Jei bus geras oras, važiuosime į paplūdimį." },
          { en: "I'll send you a photo when I get there.", lt: "Atsiųsiu tau nuotrauką, kai ten nuvyksiu." },
          { en: "You won't lose weight unless you change your diet.", lt: "Nenumesi svorio, jei nepakeisi mitybos." }
        ],
        pitfalls: [
          "Lietuviams dažniausia klaida: <i>If it will rain, we will stay home.</i> Teisingai: <b>If it rains, we will stay home.</b>",
          "Ta pati klaida su <i>when</i>: <i>I'll call you when I will arrive.</i> → <b>I'll call you when I arrive.</b>",
          "Pamirštama <i>-s</i> 3-iajame asmenyje: <i>If she come…</i> → <b>If she comes…</b>"
        ]
      },
      vocab: [
        { en: "if", lt: "jei, jeigu" },
        { en: "unless", lt: "nebent, jei ne" },
        { en: "as soon as", lt: "kai tik" },
        { en: "to miss (the bus)", lt: "pavėluoti (į autobusą), nespėti" },
        { en: "to catch (the bus)", lt: "suspėti (į autobusą)" },
        { en: "to pass / fail an exam", lt: "išlaikyti / neišlaikyti egzamino" },
        { en: "to get cold", lt: "sušalti, peršalti" },
        { en: "to save money", lt: "taupyti pinigus" },
        { en: "to hurry", lt: "skubėti" },
        { en: "to lose weight", lt: "numesti svorio" },
        { en: "traffic jam", lt: "kamštis (eismo)" },
        { en: "deal", lt: "sandoris, susitarimas" }
      ],
      phrases: [
        { en: "What will you do if…?", lt: "Ką darysi, jei…?" },
        { en: "If I were you, I'd…", lt: "Tavo vietoje aš… (pastovi frazė)" },
        { en: "It's a deal!", lt: "Sutarta!" },
        { en: "Only if you…", lt: "Tik jei tu…" },
        { en: "Let me know if…", lt: "Pranešk man, jei…" }
      ],
      quiz: [
        { type: "choice", q: "If it ___ tomorrow, we'll stay at home.", options: ["will rain", "rains", "rain"], answer: 1,
          explain: "Po <b>if</b> – esamasis laikas: <b>rains</b> (it → -s)." },
        { type: "choice", q: "If you study hard, you ___ the exam.", options: ["pass", "will pass", "passed"], answer: 1,
          explain: "Rezultato dalyje – <b>will + V</b>." },
        { type: "choice", q: "I'll call you as soon as I ___ home.", options: ["get", "will get", "got"], answer: 0,
          explain: "Po <b>as soon as / when</b> – esamasis laikas." },
        { type: "choice", q: "You won't get there on time ___ you take a taxi.", options: ["if", "unless", "when"], answer: 1,
          explain: "„Jei nepasiimsi taksi“ → <b>unless</b>." },
        { type: "input", q: "Išversk: Jei turėsiu laiko, tau padėsiu.", answer: ["If I have time, I will help you", "If I have time, I'll help you", "If I have time I will help you", "If I have time I'll help you", "I will help you if I have time", "I'll help you if I have time"],
          explain: "<b>If I have</b> (ne <i>will have</i>) …, <b>I'll help</b>." },
        { type: "order", words: ["if", "we", "don't", "hurry", "we'll", "miss", "the", "bus"], answer: "if we don't hurry we'll miss the bus", lt: "Jei neskubėsime, nespėsime į autobusą." }
      ],
      speaking: {
        scenario: "The learner is planning a weekend trip with you, but many things are uncertain (weather, money, time, a friend may not come). Discuss 'what if' situations, then play a short negotiation game: a parent and a teenager making deals ('If you clean your room, I'll…').",
        tasks: [
          "Ask 'What will you do if…?' at least 4 times (it rains, the hotel is full, the car breaks down, you lose your passport).",
          "Play the parent; the learner is the teenager and must make at least 3 deals using 'If you…, I'll…'.",
          "Ask the learner to complete 2 sentences with 'when' or 'as soon as' (e.g. 'I'll call you when…').",
          "Ask one question that invites 'unless'."
        ],
        successCriteria: [
          "Produces at least 6 correct first conditional sentences",
          "Never uses 'will' after 'if', 'when' or 'as soon as'",
          "Uses third person -s correctly in the if-clause (if she comes, if it rains)",
          "Uses 'unless' correctly at least once"
        ],
        minLearnerTurns: 9
      }
    },

    // ---------------------------------------------------------------- 07
    {
      id: "a2plus-07",
      type: "lesson",
      icon: "🏃",
      title: "too / (not) enough ir būdo prieveiksmiai",
      titleEn: "too / enough + adverbs of manner",
      canDo: [
        "Galiu pasakyti, kad kažko yra per daug ar nepakanka.",
        "Galiu apibūdinti, kaip žmonės kažką daro (greitai, gerai, atsargiai)."
      ],
      grammar: {
        title: "Per daug, pakankamai ir kaip?",
        explanation: [
          "<code>too + būdvardis</code> = per (daug): <code>This coffee is too hot.</code> (Kava per karšta – negaliu gerti.) <code>too</code> turi neigiamą atspalvį – kažkas yra problema.",
          "<code>enough</code> = pakankamai. Su būdvardžiu jis stovi <b>po</b> jo: <code>He isn't old enough.</code> Su daiktavardžiu – <b>prieš</b> jį: <code>We don't have enough time.</code> Lietuviškai sakome „pakankamai senas“, todėl lietuviai linkę sakyti <i>enough old</i>.",
          "Dažnai pridedama <code>to + veiksmažodis</code>: <code>It's too cold to swim.</code> / <code>She's tall enough to reach the shelf.</code>",
          "<b>Būdo prieveiksmiai</b> atsako į klausimą „kaip?“ ir apibūdina veiksmažodį: <code>She speaks slowly.</code> Dažniausiai būdvardis + <code>-ly</code>: <i>quick → quickly, careful → carefully, easy → easily</i>.",
          "Išimtys: <code>good → well</code>, <code>fast → fast</code>, <code>hard → hard</code>, <code>late → late</code>. Būdvardis eina su daiktavardžiu ar <i>be</i> (<i>He is a good driver</i>), prieveiksmis – su veiksmažodžiu (<i>He drives well</i>)."
        ],
        table: [
          ["Struktūra", "Pavyzdys"],
          ["too + adj", "The shoes are too small."],
          ["adj + enough", "I'm not fit enough."],
          ["enough + noun", "There aren't enough chairs."],
          ["verb + adverb", "She sings beautifully. He works hard."],
          ["good → well", "You speak English very well."]
        ],
        examples: [
          { en: "This jacket is too expensive for me.", lt: "Ši striukė man per brangi." },
          { en: "The room isn't big enough for ten people.", lt: "Kambarys nepakankamai didelis dešimčiai žmonių." },
          { en: "Do we have enough eggs for a cake?", lt: "Ar turime pakankamai kiaušinių pyragui?" },
          { en: "He was too tired to go out.", lt: "Jis buvo per daug pavargęs, kad išeitų." },
          { en: "Please drive carefully.", lt: "Prašau, vairuok atsargiai." },
          { en: "My grandma cooks really well.", lt: "Mano močiutė gamina tikrai gerai." },
          { en: "You're speaking too fast – can you speak more slowly?", lt: "Kalbi per greitai – ar gali kalbėti lėčiau?" }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>He is enough old.</i> Su būdvardžiu – po jo: <b>He is old enough.</b>",
          "<i>She speaks English very good.</i> – po veiksmažodžio reikia prieveiksmio: <b>She speaks English very well.</b>",
          "<i>too</i> vartojamas vietoj <i>very</i> teigiama prasme: <i>The film was too good!</i> skamba keistai. Sakyk: <b>The film was very good / really good.</b>"
        ]
      },
      vocab: [
        { en: "too", lt: "per (daug)" },
        { en: "enough", lt: "pakankamai, užtektinai" },
        { en: "slowly", lt: "lėtai" },
        { en: "quickly", lt: "greitai" },
        { en: "carefully", lt: "atsargiai, kruopščiai" },
        { en: "carelessly", lt: "neatsargiai, aplaidžiai" },
        { en: "quietly", lt: "tyliai" },
        { en: "loudly", lt: "garsiai" },
        { en: "well", lt: "gerai" },
        { en: "badly", lt: "blogai" },
        { en: "hard", lt: "sunkiai, stropiai" },
        { en: "patiently", lt: "kantriai" },
        { en: "fit", lt: "sportiškas, geros formos" }
      ],
      phrases: [
        { en: "It's too … for me.", lt: "Man tai per…" },
        { en: "Could you speak more slowly, please?", lt: "Gal galėtumėte kalbėti lėčiau?" },
        { en: "That's not good enough.", lt: "To nepakanka. / Tai nėra pakankamai gerai." },
        { en: "We haven't got enough time.", lt: "Neturime pakankamai laiko." },
        { en: "You did it really well!", lt: "Tau tikrai puikiai pavyko!" }
      ],
      quiz: [
        { type: "choice", q: "I can't drink this tea. It's ___ hot.", options: ["enough", "too", "very enough"], answer: 1,
          explain: "Problema – per karšta → <b>too hot</b>." },
        { type: "choice", q: "He isn't ___ to drive. He's only 15.", options: ["enough old", "old enough", "too old"], answer: 1,
          explain: "Būdvardis + <b>enough</b>: old enough." },
        { type: "choice", q: "She plays the piano very ___.", options: ["good", "well", "goodly"], answer: 1,
          explain: "good → <b>well</b> (prieveiksmis)." },
        { type: "choice", q: "Please drive ___. The road is icy.", options: ["careful", "carefully", "care"], answer: 1,
          explain: "Kaip vairuoti? → prieveiksmis <b>carefully</b>." },
        { type: "input", q: "Išversk: Mes neturime pakankamai pinigų.", answer: ["We don't have enough money", "We haven't got enough money", "We do not have enough money", "We have not got enough money"],
          explain: "<b>enough + daiktavardis</b>: enough money." },
        { type: "order", words: ["it's", "too", "cold", "to", "swim", "today"], answer: "it's too cold to swim today", lt: "Šiandien per šalta maudytis." }
      ],
      speaking: {
        scenario: "You and the learner are judges on a TV talent show and also friends shopping for a flat. First, comment on how contestants perform (sing, dance, cook). Then look at flats and say what is wrong or good about them.",
        tasks: [
          "Describe 3 imaginary contestants and ask the learner to judge HOW they performed using adverbs (beautifully, badly, too slowly…).",
          "Show (describe) 2–3 flats; the learner explains problems with 'too' and 'not … enough' (too small, not bright enough, not enough space).",
          "Ask the learner to describe how 2 people they know do something (drive, cook, speak, work).",
          "Ask the learner to ask you to repeat something more slowly."
        ],
        successCriteria: [
          "Uses at least 5 different adverbs of manner correctly (including 'well')",
          "Uses 'too + adjective' at least 3 times",
          "Places 'enough' correctly after adjectives and before nouns (at least 3 uses)",
          "Does not use 'good' as an adverb"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 08
    {
      id: "a2plus-08",
      type: "lesson",
      icon: "🧩",
      title: "Veiksmažodžių modeliai: to + V ar -ing?",
      titleEn: "Verb patterns: want to / enjoy -ing",
      canDo: [
        "Galiu kalbėti apie savo norus, planus ir sprendimus (want / hope / decide to…).",
        "Galiu pasakyti, ką mėgstu ar nemėgstu daryti (enjoy / don't mind / hate -ing)."
      ],
      grammar: {
        title: "Kuris veiksmažodis ko nori?",
        explanation: [
          "Kai du veiksmažodžiai eina kartu, antrojo forma priklauso nuo pirmojo. Lietuviškai antrasis beveik visada yra bendratis („noriu <i>keliauti</i>“, „mėgstu <i>keliauti</i>“), o anglų kalboje kartais <code>to + V</code>, kartais <code>V-ing</code>.",
          "<b>to + V</b> po: <code>want, would like, hope, decide, plan, need, learn, promise, agree, refuse, forget, try</code>. Šie veiksmažodžiai dažnai žiūri <b>į ateitį</b>: <code>I've decided to learn Spanish.</code>",
          "<b>-ing</b> po: <code>enjoy, finish, mind, stop, avoid, practise, keep, imagine, suggest, can't stand</code>: <code>I enjoy cooking. Do you mind waiting?</code>",
          "Su <code>like, love, hate, start, begin</code> galima abiem būdais: <code>I like swimming / I like to swim.</code> Bet <code>would like</code> – visada <b>to</b>: <code>I'd like to swim.</code>",
          "Po prielinksnio visada <b>-ing</b>: <code>I'm good at drawing. I'm interested in learning. Thanks for helping.</code>"
        ],
        table: [
          ["+ to + V", "+ V-ing", "abu"],
          ["want, would like, hope", "enjoy, finish, mind", "like, love, hate"],
          ["decide, plan, need", "stop, avoid, practise", "start, begin"],
          ["learn, promise, forget", "keep, can't stand, suggest", "prefer"]
        ],
        examples: [
          { en: "I want to change my job.", lt: "Noriu pakeisti darbą." },
          { en: "We hope to see you soon.", lt: "Tikimės greitai tave pamatyti." },
          { en: "She decided to move to Vilnius.", lt: "Ji nusprendė persikelti į Vilnių." },
          { en: "I really enjoy walking in the forest.", lt: "Labai mėgstu vaikščioti miške." },
          { en: "Have you finished reading the book?", lt: "Ar baigei skaityti knygą?" },
          { en: "Do you mind closing the door?", lt: "Ar galėtum uždaryti duris? (Ar neprieštarauji…?)" },
          { en: "I'm thinking about buying a bike.", lt: "Galvoju nusipirkti dviratį." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I enjoy to cook.</i> Po <i>enjoy</i> – tik <b>-ing</b>: <b>I enjoy cooking.</b>",
          "<i>I want go home.</i> – pamirštamas <i>to</i>: <b>I want to go home.</b> (Bet po <i>can, must, will</i> – be <i>to</i>!)",
          "<i>Do you mind to wait?</i> → <b>Do you mind waiting?</b> Atsakymas „ne, neprieštarauju“ – <b>No, not at all.</b> (ne <i>Yes</i>!)"
        ]
      },
      vocab: [
        { en: "to hope", lt: "tikėtis" },
        { en: "to decide", lt: "nuspręsti" },
        { en: "to plan", lt: "planuoti" },
        { en: "to enjoy", lt: "mėgautis, mėgti" },
        { en: "to finish", lt: "baigti" },
        { en: "to mind", lt: "prieštarauti, nemėgti" },
        { en: "to avoid", lt: "vengti" },
        { en: "to refuse", lt: "atsisakyti" },
        { en: "to give up (smoking)", lt: "mesti (rūkyti)" },
        { en: "can't stand", lt: "negaliu pakęsti" },
        { en: "to agree", lt: "sutikti" },
        { en: "hobby", lt: "pomėgis" },
        { en: "be good at", lt: "gerai sekasi, gerai mokėti" }
      ],
      phrases: [
        { en: "I'd really like to…", lt: "Labai norėčiau…" },
        { en: "I don't mind -ing.", lt: "Man nesunku… / Neprieštarauju…" },
        { en: "I can't stand -ing.", lt: "Negaliu pakęsti…" },
        { en: "I've decided to…", lt: "Nusprendžiau…" },
        { en: "What do you enjoy doing in your free time?", lt: "Ką mėgsti veikti laisvalaikiu?" }
      ],
      quiz: [
        { type: "choice", q: "I enjoy ___ in the garden.", options: ["to work", "working", "work"], answer: 1,
          explain: "Po <b>enjoy</b> – <b>-ing</b>." },
        { type: "choice", q: "They decided ___ a new car.", options: ["buying", "to buy", "buy"], answer: 1,
          explain: "Po <b>decide</b> – <b>to + V</b>." },
        { type: "choice", q: "Do you mind ___ a bit longer?", options: ["waiting", "to wait", "wait"], answer: 0,
          explain: "Po <b>mind</b> – <b>-ing</b>." },
        { type: "choice", q: "I hope ___ you again soon.", options: ["seeing", "to see", "see"], answer: 1,
          explain: "Po <b>hope</b> – <b>to + V</b>." },
        { type: "input", q: "Išversk: Aš baigiau valyti virtuvę.", answer: ["I have finished cleaning the kitchen", "I've finished cleaning the kitchen", "I finished cleaning the kitchen"],
          explain: "<b>finish + -ing</b>: finished cleaning." },
        { type: "order", words: ["I", "would", "like", "to", "learn", "to", "dance"], answer: "i would like to learn to dance", lt: "Norėčiau išmokti šokti." }
      ],
      speaking: {
        scenario: "You and the learner are at a speed-friending event where people meet to find new friends with similar interests. Talk about hobbies, things you love and hate doing, plans and hopes for the next year.",
        tasks: [
          "Ask what the learner enjoys doing, doesn't mind doing and can't stand doing (housework, sport, travel).",
          "Ask about decisions and hopes for next year: what have they decided / do they want / hope / plan to do?",
          "Ask 'Do you mind…?' as a polite request at least once and let the learner answer naturally.",
          "Ask the learner to find 2 things you both enjoy doing by asking you questions."
        ],
        successCriteria: [
          "Uses -ing correctly after enjoy / finish / mind / can't stand at least 4 times",
          "Uses to + infinitive correctly after want / hope / decide / plan at least 4 times",
          "Answers or asks a 'Do you mind…?' question correctly",
          "Makes no 'enjoy to' or 'want + bare verb' errors in the last 5 turns"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 09
    {
      id: "a2plus-09",
      type: "lesson",
      icon: "🔗",
      title: "Šalutiniai pažyminio sakiniai: who / which / that / where",
      titleEn: "Relative clauses – who, which, that, where",
      canDo: [
        "Galiu apibūdinti žmones, daiktus ir vietas vienu sujungtu sakiniu.",
        "Galiu paaiškinti žodį, kurio nežinau angliškai („Tai daiktas, kuris…“)."
      ],
      grammar: {
        title: "kuris, kuri, kur",
        explanation: [
          "Lietuviškai sakome „žmogus, <b>kuris</b>…“, „knyga, <b>kuri</b>…“, „vieta, <b>kur</b>…“. Anglų kalboje žodis keičiasi pagal tai, <b>ką</b> apibūdiname, bet nesikeičia pagal giminę ar linksnį (jokių „kurį, kurio, kuriam“!).",
          "<code>who</code> – žmonėms: <code>She's the woman who lives next door.</code>",
          "<code>which</code> – daiktams ir gyvūnams: <code>This is the bag which I bought in Rome.</code>",
          "<code>that</code> – ir žmonėms, ir daiktams (šnekamojoje kalboje labai dažnas): <code>the man that called / the film that we saw</code>. <code>where</code> – vietoms: <code>That's the café where we met.</code>",
          "Svarbu: <code>who / which / that</code> <b>pakeičia</b> veikėją ar objektą, todėl nekartok įvardžio: <i>the book which I read <s>it</s></i>. Jei po jungtuko yra kitas veikėjas, jungtuką galima praleisti: <code>the film (that) we saw</code>."
        ],
        table: [
          ["Kam?", "Žodis", "Pavyzdys"],
          ["žmonėms", "who / that", "a doctor who works at night"],
          ["daiktams", "which / that", "a phone which takes great photos"],
          ["vietoms", "where", "the town where I grew up"],
          ["paaiškinimui", "It's a thing that…", "It's a thing that you use to open bottles."]
        ],
        examples: [
          { en: "A chef is a person who cooks in a restaurant.", lt: "Virtuvės šefas – tai žmogus, kuris gamina restorane." },
          { en: "I've lost the keys which were on the table.", lt: "Pamečiau raktus, kurie buvo ant stalo." },
          { en: "This is the village where my grandparents live.", lt: "Tai kaimas, kuriame gyvena mano seneliai." },
          { en: "Is that the man that helped you?", lt: "Ar tai tas vyras, kuris tau padėjo?" },
          { en: "The cake (that) you made was delicious.", lt: "Pyragas, kurį iškepei, buvo skanus." },
          { en: "It's a machine that washes dishes.", lt: "Tai mašina, kuri plauna indus." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>the man which lives there</i>. Žmonėms – <b>who</b> (arba that): <b>the man who lives there</b>.",
          "Kartojamas įvardis: <i>This is the book that I bought it.</i> → <b>This is the book that I bought.</b>",
          "<i>the city which I was born</i> → vietai su veiksmu „ten“ – <b>the city where I was born</b>."
        ]
      },
      vocab: [
        { en: "neighbour", lt: "kaimynas" },
        { en: "colleague", lt: "kolega, bendradarbis" },
        { en: "village", lt: "kaimas" },
        { en: "to grow up (grew up)", lt: "užaugti" },
        { en: "tool", lt: "įrankis" },
        { en: "device", lt: "prietaisas" },
        { en: "to be used for", lt: "naudojamas (kam)" },
        { en: "to belong to", lt: "priklausyti (kam)" },
        { en: "kind of", lt: "tam tikra rūšis, toks kaip" },
        { en: "owner", lt: "savininkas" },
        { en: "staff", lt: "personalas, darbuotojai" },
        { en: "to recommend", lt: "rekomenduoti" }
      ],
      phrases: [
        { en: "It's a thing that you use for…", lt: "Tai daiktas, kurį naudoji…" },
        { en: "It's a person who…", lt: "Tai žmogus, kuris…" },
        { en: "It's a place where…", lt: "Tai vieta, kur…" },
        { en: "I don't know the word, but…", lt: "Nežinau žodžio, bet…" },
        { en: "Do you mean the one that…?", lt: "Ar turi omenyje tą, kuris…?" }
      ],
      quiz: [
        { type: "choice", q: "A dentist is a person ___ looks after your teeth.", options: ["which", "who", "where"], answer: 1,
          explain: "Žmogus → <b>who</b>." },
        { type: "choice", q: "This is the hotel ___ we stayed last summer.", options: ["which", "who", "where"], answer: 2,
          explain: "Vieta, kur apsistojome → <b>where</b>." },
        { type: "choice", q: "I like films ___ make me laugh.", options: ["who", "which", "where"], answer: 1,
          explain: "Daiktai (filmai) → <b>which</b> (arba that)." },
        { type: "choice", q: "That's the book that I told you ___.", options: ["about it", "about", "it about"], answer: 1,
          explain: "Įvardžio <i>it</i> nekartojame: <b>the book that I told you about</b>." },
        { type: "input", q: "Išversk: Tai kavinė, kur mes susipažinome.", answer: ["This is the cafe where we met", "This is the café where we met", "That's the cafe where we met", "That's the café where we met", "It's the cafe where we met", "It's the café where we met", "That is the cafe where we met", "That is the café where we met", "It is the cafe where we met", "It is the café where we met"],
          explain: "Vieta → <b>where</b>." },
        { type: "order", words: ["she's", "the", "woman", "who", "lives", "next", "door"], answer: "she's the woman who lives next door", lt: "Ji yra ta moteris, kuri gyvena gretimame bute." }
      ],
      speaking: {
        scenario: "Play the word-guessing game 'Describe it!'. Take turns: one person describes a person (job), a thing or a place WITHOUT saying the word, the other guesses. Then the learner describes their neighbourhood and people in their life.",
        tasks: [
          "Describe 3 words for the learner to guess using relative clauses (model the structure).",
          "Ask the learner to describe at least 5 secret words: 2 jobs, 2 objects, 1 place.",
          "Ask the learner to describe a place where they grew up and a person who is important to them.",
          "If the learner uses 'which' for people or repeats a pronoun, recast and ask them to try again."
        ],
        successCriteria: [
          "Uses 'who' for people and 'which/that' for things correctly at least 5 times",
          "Uses 'where' for places at least twice",
          "Does not repeat the pronoun inside the relative clause",
          "Successfully describes at least 4 words so they can be guessed"
        ],
        minLearnerTurns: 9
      }
    },

    // ---------------------------------------------------------------- 10
    {
      id: "a2plus-10",
      type: "lesson",
      icon: "💪",
      title: "can / could / be able to; mandagūs prašymai",
      titleEn: "Ability – can, could, be able to; polite requests",
      canDo: [
        "Galiu kalbėti apie savo gebėjimus dabar, praeityje ir ateityje.",
        "Galiu mandagiai paprašyti ir atsakyti į prašymą (Could you…?)."
      ],
      grammar: {
        title: "Galiu, galėjau, galėsiu",
        explanation: [
          "<code>can</code> – gebėjimas dabar: <code>I can swim.</code> <code>could</code> – bendras gebėjimas praeityje: <code>When I was five, I could read.</code>",
          "<code>can</code> neturi būsimojo laiko ir 3-iosios formos, todėl vartojame <code>be able to</code>: <code>I'll be able to help you tomorrow.</code> (Galėsiu tau padėti rytoj.) <code>I haven't been able to sleep.</code> (Negalėjau užmigti.) Lietuviškai „galėsiu“ – vienas žodis, angliškai <i>will can</i> negalima!",
          "Kai kalbame apie <b>vieną konkretų pavykusį kartą</b> praeityje, vietoj <i>could</i> vartojame <code>was / were able to</code> arba <code>managed to</code>: <code>The exam was hard, but I was able to finish it.</code> Neiginyje <code>couldn't</code> tinka visada.",
          "<b>Mandagūs prašymai:</b> <code>Can you…?</code> (draugiškai) → <code>Could you…?</code> (mandagiau) → <code>Could you possibly…?</code> (labai mandagiai). Leidimo prašymas: <code>Could I…? / Can I…?</code>",
          "Atsakymai: <code>Sure. / Of course. / No problem.</code> Atsisakymas: <code>I'm sorry, I can't, because…</code> Po <i>can / could</i> – veiksmažodis be <i>to</i>."
        ],
        table: [
          ["Laikas", "Pavyzdys"],
          ["Dabar", "I can / can't drive."],
          ["Praeityje (bendrai)", "I could ski when I was six."],
          ["Praeityje (vienas kartas)", "I was able to / managed to fix it."],
          ["Ateityje", "I will / won't be able to come."],
          ["Present Perfect", "I haven't been able to call her."],
          ["Prašymas", "Could you help me, please?"]
        ],
        examples: [
          { en: "My son can speak three languages.", lt: "Mano sūnus moka kalbėti trimis kalbomis." },
          { en: "I couldn't sleep last night.", lt: "Praėjusią naktį negalėjau užmigti." },
          { en: "Will you be able to come to the meeting?", lt: "Ar galėsi ateiti į susirinkimą?" },
          { en: "The road was closed, but we were able to find another way.", lt: "Kelias buvo uždarytas, bet mums pavyko rasti kitą kelią." },
          { en: "Could you open the window, please?", lt: "Gal galėtum atidaryti langą?" },
          { en: "Could I use your phone? – Sure, here you are.", lt: "Ar galėčiau pasinaudoti tavo telefonu? – Žinoma, imk." },
          { en: "I'd like to be able to play the guitar.", lt: "Norėčiau mokėti groti gitara." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I will can help you.</i> Teisingai: <b>I will be able to help you.</b>",
          "<i>I can to swim.</i> / <i>Could you to help me?</i> – po <i>can/could</i> nėra <i>to</i>: <b>I can swim. Could you help me?</b>",
          "Tiesioginis prašymas be mandagumo formos (<i>Give me the salt.</i>) angliškai skamba grubiai. Sakyk: <b>Could you pass the salt, please?</b>"
        ]
      },
      vocab: [
        { en: "ability", lt: "gebėjimas" },
        { en: "to manage to", lt: "sugebėti, pavykti" },
        { en: "to fix", lt: "sutaisyti" },
        { en: "to borrow", lt: "pasiskolinti" },
        { en: "to lend", lt: "paskolinti" },
        { en: "to pass (the salt)", lt: "paduoti (druską)" },
        { en: "to give (someone) a lift", lt: "pavežti" },
        { en: "favour", lt: "paslauga" },
        { en: "skill", lt: "įgūdis" },
        { en: "possibly", lt: "galbūt, (mandagiai) kaip nors" },
        { en: "of course", lt: "žinoma" },
        { en: "to swim (swam, swum)", lt: "plaukti" }
      ],
      phrases: [
        { en: "Could you do me a favour?", lt: "Ar galėtum man padaryti paslaugą?" },
        { en: "Could I borrow your…?", lt: "Ar galėčiau pasiskolinti tavo…?" },
        { en: "Sure, no problem.", lt: "Žinoma, jokių problemų." },
        { en: "I'm afraid I can't, because…", lt: "Deja, negaliu, nes…" },
        { en: "Would you be able to…?", lt: "Ar galėtum…? (labai mandagiai)" }
      ],
      quiz: [
        { type: "choice", q: "Sorry, I ___ come to your party next Saturday.", options: ["won't can", "won't be able to", "can't to"], answer: 1,
          explain: "Ateitis → <b>won't be able to</b>." },
        { type: "choice", q: "When I was a child, I ___ climb trees really fast.", options: ["could", "can", "will be able to"], answer: 0,
          explain: "Bendras gebėjimas praeityje → <b>could</b>." },
        { type: "choice", q: "The fire was big, but everybody ___ get out of the building.", options: ["could", "was able to", "can"], answer: 1,
          explain: "Vienas konkretus pavykęs kartas → <b>was able to</b>." },
        { type: "choice", q: "___ you pass me the sugar, please?", options: ["Could", "Should", "Must"], answer: 0,
          explain: "Mandagus prašymas → <b>Could you…?</b>" },
        { type: "input", q: "Išversk: Ar galėtum man padėti?", answer: ["Could you help me", "Could you help me?", "Could you help me please", "Can you help me", "Would you be able to help me", "Could you please help me"],
          explain: "Mandagiai: <b>Could you help me?</b>" },
        { type: "order", words: ["I", "haven't", "been", "able", "to", "sleep", "well"], answer: "i haven't been able to sleep well", lt: "Negaliu gerai miegoti (pastaruoju metu)." }
      ],
      speaking: {
        scenario: "Part 1: You are a new neighbour and the learner needs several favours (borrow a ladder, get a lift to the station, water the plants while they are away). Part 2: a short job interview about skills: what the learner can do now, could do as a child and wants to be able to do in the future.",
        tasks: [
          "Let the learner make at least 4 polite requests; sometimes accept, sometimes refuse with a reason so they must react.",
          "Make 2 requests to the learner so they practise accepting and refusing politely.",
          "Interview the learner: ask what they can do now, what they could do as a child, and what they will be able to do after this course.",
          "Ask about a difficult situation in the past where they managed / were able to solve a problem."
        ],
        successCriteria: [
          "Makes at least 4 polite requests with 'Could you…?' or 'Could I…?'",
          "Uses 'will be able to' for future ability at least twice (never 'will can')",
          "Uses 'could' or 'couldn't' for past ability at least twice",
          "Refuses one request politely with a reason"
        ],
        minLearnerTurns: 9
      }
    },

    // ---------------------------------------------------------------- 11
    {
      id: "a2plus-11",
      type: "lesson",
      icon: "📅",
      title: "Pasiūlymai ir susitarimai",
      titleEn: "Making suggestions & arrangements",
      canDo: [
        "Galiu pasiūlyti ką nors nuveikti kartu ir atsakyti į pasiūlymą.",
        "Galiu susitarti dėl laiko ir vietos, kalbėti apie suplanuotus susitikimus (Present Continuous)."
      ],
      grammar: {
        title: "Let's…, Why don't we…, How about…?",
        explanation: [
          "Kiekviena pasiūlymo frazė turi savo gramatinę formą – tai svarbiausia įsiminti: <code>Let's + V</code> (<code>Let's go!</code>), <code>Why don't we + V?</code> (<code>Why don't we meet at six?</code>), <code>Shall we + V?</code> (<code>Shall we order pizza?</code>), <code>How about / What about + V-ing?</code> (<code>How about going to the cinema?</code>).",
          "Po <code>How about / What about</code> eina <b>-ing</b> arba daiktavardis: <code>How about Friday?</code> Lietuviai dažnai sako <i>How about go…</i> – taip negalima.",
          "Atsakymai: sutinkant – <code>Good idea! / Sounds great! / Why not?</code> Atsisakant mandagiai – <code>I'd love to, but… / I'm afraid I can't. / Maybe another time.</code>",
          "<b>Susitarti dėl ateities</b> (kai laikas ir vieta jau sutarti) anglai vartoja <b>Present Continuous</b>: <code>I'm meeting Lina on Saturday.</code> <code>What are you doing tonight?</code> Lietuviškai tai skamba kaip esamasis laikas („ką veiki šįvakar?“) – ir tai tikrai artima!",
          "Laikui ir vietai: <code>at 7 o'clock, on Friday, in the morning, at the station, in the park</code>."
        ],
        table: [
          ["Frazė", "Forma", "Pavyzdys"],
          ["Let's", "+ V", "Let's have a coffee."],
          ["Why don't we", "+ V?", "Why don't we take a taxi?"],
          ["Shall we", "+ V?", "Shall we meet at 7?"],
          ["How / What about", "+ V-ing?", "How about watching a film?"],
          ["Susitarimas", "be + V-ing", "We're meeting at the station at 6."]
        ],
        examples: [
          { en: "Let's go for a walk – the weather is lovely.", lt: "Eikime pasivaikščioti – oras nuostabus." },
          { en: "Why don't we invite Jonas too?", lt: "Gal pakviečiame ir Joną?" },
          { en: "How about meeting in the old town?", lt: "O gal susitinkam senamiestyje?" },
          { en: "Shall we say half past seven?", lt: "Sakykim, pusę aštuonių?" },
          { en: "I'd love to, but I'm working on Saturday.", lt: "Labai norėčiau, bet šeštadienį dirbu." },
          { en: "Are you doing anything on Sunday?", lt: "Ar turi kokių planų sekmadieniui?" },
          { en: "OK, see you on Friday at the cinema!", lt: "Gerai, iki penktadienio kine!" }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>How about to go to the cinema?</i> / <i>How about go…?</i> Teisingai: <b>How about going to the cinema?</b>",
          "<i>Let's to meet</i> / <i>Let's we meet</i> → <b>Let's meet.</b>",
          "Planuose naudojamas paprastas esamasis: <i>I meet my friend tomorrow.</i> → <b>I'm meeting my friend tomorrow.</b>"
        ]
      },
      vocab: [
        { en: "suggestion", lt: "pasiūlymas" },
        { en: "arrangement", lt: "susitarimas" },
        { en: "to suggest", lt: "pasiūlyti" },
        { en: "to be free", lt: "būti laisvam" },
        { en: "to be busy", lt: "būti užsiėmusiam" },
        { en: "to invite", lt: "pakviesti" },
        { en: "to cancel", lt: "atšaukti" },
        { en: "to put off / postpone", lt: "atidėti" },
        { en: "exhibition", lt: "paroda" },
        { en: "half past seven", lt: "pusė aštuonių" },
        { en: "Sounds good!", lt: "Skamba gerai!" },
        { en: "instead", lt: "vietoj to" }
      ],
      phrases: [
        { en: "Are you free on…?", lt: "Ar esi laisvas…?" },
        { en: "Why don't we…?", lt: "Gal…? / Kodėl mums ne…?" },
        { en: "I'd love to, but…", lt: "Labai norėčiau, bet…" },
        { en: "What time suits you?", lt: "Koks laikas tau tinka?" },
        { en: "Let's meet at…", lt: "Susitikime…" },
        { en: "Maybe another time.", lt: "Gal kitą kartą." }
      ],
      quiz: [
        { type: "choice", q: "How about ___ to the lake on Sunday?", options: ["go", "to go", "going"], answer: 2,
          explain: "Po <b>How about</b> – <b>-ing</b>." },
        { type: "choice", q: "Why don't we ___ a pizza tonight?", options: ["order", "ordering", "to order"], answer: 0,
          explain: "<b>Why don't we + V</b> (be to)." },
        { type: "choice", q: "I can't come on Friday. I ___ my sister at the airport.", options: ["meet", "am meeting", "will meeting"], answer: 1,
          explain: "Suplanuotas susitarimas → Present Continuous." },
        { type: "choice", q: "Shall we go to the exhibition? – ___", options: ["Yes, we shall go.", "Sounds great!", "No, we don't."], answer: 1,
          explain: "Natūraliai sutinkama: <b>Sounds great! / Good idea!</b>" },
        { type: "input", q: "Išversk: Eikime į kiną.", answer: ["Let's go to the cinema", "Let's go to the movies", "Let us go to the cinema"],
          explain: "<b>Let's + V</b>." },
        { type: "order", words: ["what", "are", "you", "doing", "on", "saturday", "evening"], answer: "what are you doing on saturday evening", lt: "Ką veiki šeštadienio vakarą?" }
      ],
      speaking: {
        scenario: "You and the learner are friends trying to find a time and an activity to do together next week. You both have busy diaries (invent your own: dentist on Tuesday, working late on Thursday…). Agree on what to do, when and where to meet.",
        tasks: [
          "Ask 'What are you doing on…?' for several days so the learner describes arrangements in Present Continuous.",
          "Make 2 suggestions the learner must refuse politely with a reason, and 1 they can accept.",
          "Ask the learner to make at least 3 suggestions using different structures (Let's, Why don't we, How about, Shall we).",
          "At the end, ask the learner to summarise the final plan: activity, day, time and place."
        ],
        successCriteria: [
          "Uses at least 3 different suggestion structures with the correct verb form",
          "Uses 'How about + -ing' correctly at least once",
          "Describes at least 3 future arrangements in Present Continuous",
          "Refuses politely at least once ('I'd love to, but…') and agrees on a final plan with day, time and place"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- 12
    {
      id: "a2plus-12",
      type: "lesson",
      icon: "💬",
      title: "Jausmai ir priežastys: because / so / but / although",
      titleEn: "Feelings, reasons & linking ideas",
      canDo: [
        "Galiu apibūdinti savo jausmus ir paaiškinti jų priežastis.",
        "Galiu sujungti mintis jungtukais because, so, but, although."
      ],
      grammar: {
        title: "Kaip sujungti mintis",
        explanation: [
          "<code>because</code> – nes (priežastis): <code>I'm tired because I worked late.</code> <code>so</code> – todėl (pasekmė): <code>I worked late, so I'm tired.</code> Atkreipk dėmesį: tai ta pati mintis, tik iš skirtingos pusės!",
          "<code>but</code> – bet (priešprieša): <code>The hotel was nice, but it was expensive.</code> <code>although</code> – nors (netikėtas kontrastas): <code>Although it was raining, we went for a walk.</code> Su <i>although</i> <b>nevartojame</b> <i>but</i> toje pačioje sakinio dalyje.",
          "<b>Jausmai: -ed ir -ing būdvardžiai.</b> <code>-ed</code> = kaip AŠ jaučiuosi (<i>I'm bored, I'm interested, I'm tired</i>). <code>-ing</code> = koks yra daiktas ar situacija, kuri sukelia jausmą (<i>The film is boring, the news is surprising</i>). Lietuviai dažnai sako <i>I am boring</i> – tai reiškia „aš esu nuobodus žmogus“!",
          "Klausimai apie priežastį: <code>Why are you so happy?</code> – <code>Because…</code>. Taip pat <code>What's wrong?</code> (Kas nutiko?), <code>How do you feel about…?</code>",
          "Jausmų būdvardžiai dažnai eina su prielinksniais: <code>worried about, afraid of, proud of, angry with (someone), interested in, excited about</code>."
        ],
        table: [
          ["Jungtukas", "Reikšmė", "Pavyzdys"],
          ["because", "nes", "I'm happy because it's Friday."],
          ["so", "todėl", "It's Friday, so I'm happy."],
          ["but", "bet", "I'm tired, but I'm happy."],
          ["although", "nors", "Although I'm tired, I'm happy."],
          ["-ed / -ing", "jausmas / priežastis", "I'm bored. The lesson is boring."]
        ],
        examples: [
          { en: "I was really nervous because it was my first day at work.", lt: "Labai jaudinausi, nes tai buvo mano pirmoji darbo diena." },
          { en: "The train was late, so I missed the meeting.", lt: "Traukinys vėlavo, todėl praleidau susirinkimą." },
          { en: "Although the exam was difficult, I passed it.", lt: "Nors egzaminas buvo sunkus, aš jį išlaikiau." },
          { en: "I'm excited about the trip, but I'm a bit worried about the flight.", lt: "Džiaugiuosi kelione, bet šiek tiek nerimauju dėl skrydžio." },
          { en: "The documentary was fascinating – I wasn't bored at all.", lt: "Dokumentinis filmas buvo labai įdomus – visai nenuobodžiavau." },
          { en: "She's proud of her daughter.", lt: "Ji didžiuojasi savo dukra." },
          { en: "Why are you upset? – Because I've lost my phone.", lt: "Kodėl tu nusiminęs? – Nes pamečiau telefoną." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I am boring at work.</i> (= aš nuobodus!). Turi omenyje jausmą: <b>I am bored at work.</b>",
          "Dviguba jungtis kaip lietuviškame „nors…, bet…“: <i>Although it was cold, but we swam.</i> → <b>Although it was cold, we swam.</b>",
          "Prielinksniai: <i>afraid from spiders</i>, <i>interested about</i> → <b>afraid of spiders</b>, <b>interested in</b>."
        ]
      },
      vocab: [
        { en: "worried (about)", lt: "susirūpinęs, nerimaujantis (dėl)" },
        { en: "excited (about)", lt: "susijaudinęs, laukiantis (ko)" },
        { en: "nervous", lt: "susinervinęs, besijaudinantis" },
        { en: "upset", lt: "nusiminęs" },
        { en: "disappointed", lt: "nusivylęs" },
        { en: "embarrassed", lt: "susigėdęs" },
        { en: "relaxed", lt: "atsipalaidavęs" },
        { en: "proud (of)", lt: "didžiuojantis (kuo)" },
        { en: "bored / boring", lt: "nuobodžiaujantis / nuobodus" },
        { en: "surprised / surprising", lt: "nustebęs / stebinantis" },
        { en: "annoyed", lt: "susierzinęs" },
        { en: "although", lt: "nors" },
        { en: "lonely", lt: "vienišas" }
      ],
      phrases: [
        { en: "What's wrong?", lt: "Kas nutiko?" },
        { en: "I feel a bit… because…", lt: "Jaučiuosi šiek tiek…, nes…" },
        { en: "That's why…", lt: "Štai kodėl…" },
        { en: "I know what you mean.", lt: "Suprantu, ką turi omenyje." },
        { en: "Don't worry, it'll be fine.", lt: "Nesijaudink, viskas bus gerai." }
      ],
      quiz: [
        { type: "choice", q: "The film was so ___ that I fell asleep.", options: ["bored", "boring", "bore"], answer: 1,
          explain: "Filmas sukelia jausmą → <b>-ing</b>: boring." },
        { type: "choice", q: "It was raining, ___ we stayed at home.", options: ["because", "so", "although"], answer: 1,
          explain: "Pasekmė → <b>so</b>." },
        { type: "choice", q: "___ he was ill, he went to work.", options: ["Because", "So", "Although"], answer: 2,
          explain: "Netikėtas kontrastas → <b>Although</b>." },
        { type: "choice", q: "I'm really interested ___ history.", options: ["about", "in", "on"], answer: 1,
          explain: "<b>interested in</b>." },
        { type: "input", q: "Išversk: Aš pavargęs, nes blogai miegojau.", answer: ["I'm tired because I slept badly", "I am tired because I slept badly", "I'm tired because I didn't sleep well", "I am tired because I didn't sleep well", "I'm tired because I slept badly.", "I'm tired because I did not sleep well"],
          explain: "Jausmas <b>tired</b> + priežastis <b>because</b>." },
        { type: "order", words: ["although", "it", "was", "cold", "we", "went", "swimming"], answer: "although it was cold we went swimming", lt: "Nors buvo šalta, nuėjome maudytis." }
      ],
      speaking: {
        scenario: "You are a friendly life coach. The learner talks about a recent week: good moments, stressful moments and how they felt. Then you look at a few situations together (a cancelled holiday, a surprise party, a new job) and the learner says how they would feel and why.",
        tasks: [
          "Ask how the learner felt about at least 3 events this week and always ask 'Why?'.",
          "Give 3 situations; the learner names the feeling (-ed adjective) and gives a reason with 'because' or 'so'.",
          "Ask the learner to describe a film, book or trip using an -ing adjective and a contrast with 'but' or 'although'.",
          "Ask what they are worried / excited / proud about right now."
        ],
        successCriteria: [
          "Uses at least 6 different feeling adjectives",
          "Uses -ed vs -ing adjectives correctly at least 3 times",
          "Links ideas with because, so, but and although (each at least once)",
          "Never combines 'although' and 'but' in one sentence"
        ],
        minLearnerTurns: 9
      }
    },

    // ---------------------------------------------------------------- 13
    {
      id: "a2plus-13",
      type: "checkpoint",
      icon: "🏆",
      title: "A2+ lygio egzaminas",
      titleEn: "A2+ Checkpoint",
      canDo: [
        "Galiu papasakoti apie savo patirtį, naujienas ir praeities įvykius, pasirinkdamas (-a) tinkamą laiką.",
        "Galiu kalbėti apie ateitį, sąlygas, planus ir susitarimus.",
        "Galiu apibūdinti žmones, daiktus, vietas ir jausmus, sujungdamas (-a) mintis į ilgesnius sakinius."
      ],
      grammar: {
        title: "Ką kartojame",
        explanation: [
          "<b>Present Perfect</b>: patirtis (<i>ever, never, been / gone</i>), naujienos ir darbai (<i>just, already, yet</i>), trukmė (<i>for, since</i>). Su baigtu laiku (<i>yesterday, ago, last…</i>) – tik <b>Past Simple</b>.",
          "<b>Past Continuous</b> fono veiksmams ir <i>when / while</i> istorijose. <b>will</b> spėjimams, pasiūlymams ir greitiems sprendimams; <b>going to</b> – planams. <b>First Conditional</b>: <i>if + present, will</i> (jokio <i>if … will</i>!).",
          "<b>too / enough</b> ir būdo prieveiksmiai (<i>well, carefully</i>); veiksmažodžių modeliai (<i>want to</i>, <i>enjoy -ing</i>); <b>who / which / that / where</b>.",
          "<b>can / could / be able to</b> ir mandagūs prašymai; pasiūlymai (<i>Let's, Why don't we, How about -ing, Shall we</i>) ir susitarimai Present Continuous; jausmai (-ed / -ing) ir jungtukai <i>because, so, but, although</i>."
        ],
        examples: [
          { en: "I've been to Spain, but I went there a long time ago.", lt: "Esu buvęs Ispanijoje, bet tai buvo labai seniai." },
          { en: "I was driving home when my friend called.", lt: "Važiavau namo, kai paskambino draugas." },
          { en: "If it's sunny tomorrow, we'll go to the coast.", lt: "Jei rytoj bus saulėta, važiuosime prie jūros." },
          { en: "I've decided to learn to cook, although I'm not very good at it.", lt: "Nusprendžiau išmokti gaminti, nors man ne itin sekasi." },
          { en: "How about meeting at the café where we first met?", lt: "O gal susitinkam kavinėje, kur pirmą kartą susipažinome?" }
        ],
        pitfalls: [
          "<i>I have seen him yesterday</i> → <b>I saw him yesterday.</b>",
          "<i>If it will rain…</i> → <b>If it rains…</b>; <i>I will can</i> → <b>I will be able to</b>.",
          "<i>I enjoy to swim</i> → <b>I enjoy swimming</b>; <i>I'm boring</i> → <b>I'm bored</b>."
        ]
      },
      vocab: [],
      phrases: [
        { en: "Have you ever…? When did you…?", lt: "Ar kada nors…? Kada…?" },
        { en: "What were you doing when…?", lt: "Ką veikei, kai…?" },
        { en: "What will you do if…?", lt: "Ką darysi, jei…?" },
        { en: "How about -ing…? / Why don't we…?", lt: "O gal…? / Gal…?" },
        { en: "Could you…, please?", lt: "Gal galėtum…?" }
      ],
      quiz: [
        { type: "choice", q: "I ___ my keys. I can't find them anywhere!", options: ["lost", "have lost", "was losing"], answer: 1,
          explain: "Rezultatas dabar (neturiu raktų), laikas nenurodytas → <b>have lost</b>." },
        { type: "choice", q: "We ___ dinner when the lights went out.", options: ["had", "were having", "have had"], answer: 1,
          explain: "Fono veiksmas, kurį nutraukė įvykis → Past Continuous." },
        { type: "choice", q: "If you ___ me, I'll help you.", options: ["will call", "call", "called"], answer: 1,
          explain: "Po <b>if</b> – esamasis laikas." },
        { type: "choice", q: "Thank you, but I don't mind ___.", options: ["to wait", "waiting", "wait"], answer: 1,
          explain: "Po <b>mind</b> – <b>-ing</b>." },
        { type: "input", q: "Išversk: Aš gyvenu Vilniuje nuo 2015 metų.", answer: ["I have lived in Vilnius since 2015", "I've lived in Vilnius since 2015", "I have been living in Vilnius since 2015", "I've been living in Vilnius since 2015"],
          explain: "Tęsiasi iki dabar → <b>have lived … since</b>." },
        { type: "order", words: ["she's", "the", "teacher", "who", "helped", "me", "a", "lot"], answer: "she's the teacher who helped me a lot", lt: "Ji – ta mokytoja, kuri man labai padėjo." }
      ],
      speaking: {
        scenario: "A2+ speaking exam. You are a friendly examiner. The conversation has four parts: (1) personal interview about life experiences and recent news; (2) storytelling about a memorable or surprising past event; (3) future: plans, predictions and 'what if' situations; (4) role-play: the learner and you arrange to do something together next weekend, including polite requests and describing places and people. Keep the learner talking; do not correct during the exam, give feedback only at the end.",
        tasks: [
          "Part 1: Ask 'Have you ever…?', 'How long have you…?' and 'Have you … yet?' questions, then follow up with 'When did you…?'.",
          "Part 2: Ask the learner to tell a story about something unexpected that happened while they were doing something; ask how they felt and why.",
          "Part 3: Ask about plans (going to), predictions (will) and at least 2 'What will you do if…?' questions; ask what they want / hope / enjoy doing.",
          "Part 4: Role-play arranging a weekend activity: the learner must make suggestions, refuse one politely, make a polite request with 'Could you…?' and describe a place or person using who/which/where.",
          "End with feedback: list 3 strengths and the 3 most important errors with corrections."
        ],
        successCriteria: [
          "Chooses correctly between Present Perfect and Past Simple in at least 80% of cases (no Present Perfect with finished time expressions)",
          "Tells a coherent story with Past Continuous + Past Simple using when/while",
          "Produces at least 3 correct first conditional sentences (no 'will' after 'if') and uses will/going to appropriately",
          "Uses at least 3 suggestion structures, a polite request and at least 2 relative clauses correctly",
          "Links ideas with because/so/but/although and uses at least 3 feeling adjectives correctly (-ed vs -ing)"
        ],
        minLearnerTurns: 14
      }
    }
  ]
});
