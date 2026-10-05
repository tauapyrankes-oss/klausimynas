(window.LEVELS = window.LEVELS || []).push({
  id: "a1plus",
  name: "A1+",
  title: "Pradmenų įtvirtinimas",
  description: "Įtvirtinsi pačius svarbiausius anglų kalbos pagrindus ir pasiruoši A2 lygiui. Galėsi prisistatyti, papasakoti apie savo dieną, šeimą ir namus, užsisakyti kavinėje, susitarti dėl susitikimo ir palaikyti trumpą pokalbį.",
  lessons: [
    // ---------------------------------------------------------------- 01
    {
      id: "a1plus-01",
      type: "lesson",
      icon: "👋",
      title: "Veiksmažodis „to be“: prisistatymas",
      titleEn: "To be (am / is / are) – introducing yourself",
      canDo: [
        "Galiu prisistatyti: pasakyti vardą, kilmės šalį, amžių ir profesiją.",
        "Galiu paklausti kito žmogaus, iš kur jis ir kuo dirba."
      ],
      grammar: {
        title: "Am, is, are – „būti“ angliškai",
        explanation: [
          "Veiksmažodis <b>to be</b> reiškia „būti“. Esamajame laike jis turi tris formas: <b>I am</b>, <b>he/she/it is</b>, <b>you/we/they are</b>. Šnekamojoje kalboje beveik visada sutrumpiname: <code>I'm</code>, <code>she's</code>, <code>they're</code>.",
          "Lietuviškai dažnai sakome „Aš – mokytoja“ arba tiesiog „Mokytoja.“ be veiksmažodžio. Anglų kalboje <b>veiksmažodžio praleisti negalima</b>: <i>I am a teacher</i>, ne <i>I teacher</i>.",
          "Taip pat anglų kalboje <b>visada reikia veiksnio</b> (asmeninio įvardžio). Lietuviškai užtenka „Esu iš Lietuvos“, o angliškai būtina <i>I'm from Lithuania</i>.",
          "Neigiamas sakinys: pridedame <b>not</b> – <code>I'm not</code>, <code>he isn't</code>, <code>we aren't</code>. Klausimas: sukeičiame vietomis – <i>Are you a nurse?</i> <i>Is she from Spain?</i>",
          "Profesijas sakome su žodeliu <b>a/an</b>: <i>I'm a doctor</i>, <i>She's an engineer</i>. Lietuviškai jo nėra, todėl lengva pamiršti!"
        ],
        table: [
          ["Asmuo", "+", "−", "?"],
          ["I", "I'm (I am)", "I'm not", "Am I…?"],
          ["he / she / it", "she's (she is)", "she isn't", "Is she…?"],
          ["you / we / they", "we're (we are)", "we aren't", "Are we…?"]
        ],
        examples: [
          { en: "Hi, I'm Rūta. I'm from Lithuania.", lt: "Labas, aš Rūta. Esu iš Lietuvos." },
          { en: "I'm a nurse. I'm 29.", lt: "Esu medicinos sesuo. Man 29 metai." },
          { en: "My friend is an engineer.", lt: "Mano draugas – inžinierius." },
          { en: "Are you from Poland? – No, I'm not. I'm from Latvia.", lt: "Ar tu iš Lenkijos? – Ne. Aš iš Latvijos." },
          { en: "They aren't at home. They're at work.", lt: "Jų nėra namie. Jie darbe." },
          { en: "What's your job? – I'm an accountant.", lt: "Kuo dirbi? – Esu buhalterė." }
        ],
        pitfalls: [
          "Lietuviams dažna klaida: <i>I 30 years</i> arba <i>I have 30 years</i>. Teisingai: <b>I'm 30</b> arba <b>I'm 30 years old</b> – amžių sakome su „to be“.",
          "Praleidžiamas veiksmažodis: <i>She teacher</i> ✗ → <b>She's a teacher</b> ✓.",
          "Pamirštamas veiksnys: <i>Am from Vilnius</i> ✗ → <b>I'm from Vilnius</b> ✓."
        ]
      },
      vocab: [
        { en: "Lithuania / Lithuanian", lt: "Lietuva / lietuvis, lietuviškas" },
        { en: "Germany / German", lt: "Vokietija / vokietis" },
        { en: "the UK / British", lt: "Jungtinė Karalystė / britas" },
        { en: "Spain / Spanish", lt: "Ispanija / ispanas" },
        { en: "job", lt: "darbas, profesija" },
        { en: "teacher", lt: "mokytojas(-a)" },
        { en: "nurse", lt: "medicinos sesuo / slaugytojas(-a)" },
        { en: "accountant", lt: "buhalteris(-ė)" },
        { en: "engineer", lt: "inžinierius(-ė)" },
        { en: "shop assistant", lt: "pardavėjas(-a)" },
        { en: "student", lt: "studentas(-ė)" },
        { en: "married / single", lt: "vedęs, ištekėjusi / nesusituokęs(-usi)" }
      ],
      phrases: [
        { en: "Nice to meet you.", lt: "Malonu susipažinti." },
        { en: "Where are you from?", lt: "Iš kur tu esi?" },
        { en: "What do you do? / What's your job?", lt: "Kuo dirbi?" },
        { en: "How old are you?", lt: "Kiek tau metų?" },
        { en: "And you?", lt: "O tu?" }
      ],
      quiz: [
        { type: "choice", q: "My sister ___ a doctor.", options: ["am", "is", "are"], answer: 1,
          explain: "„My sister“ = she, todėl naudojame <b>is</b>." },
        { type: "choice", q: "I ___ 32 years old.", options: ["have", "am", "is"], answer: 1,
          explain: "Amžių angliškai sakome su „to be“: <b>I am 32</b>, ne „I have“." },
        { type: "choice", q: "She's ___ engineer.", options: ["a", "an", "—"], answer: 1,
          explain: "Prieš profesiją reikia a/an. „Engineer“ prasideda balse, todėl <b>an</b>." },
        { type: "input", q: "Išversk: Aš iš Lietuvos.", answer: ["I'm from Lithuania", "I am from Lithuania"],
          explain: "Būtinas veiksnys <b>I</b> ir veiksmažodis <b>am</b>." },
        { type: "input", q: "Išversk: Jie nėra studentai.", answer: ["They aren't students", "They are not students", "They're not students"],
          explain: "They + <b>aren't</b> (are not). Daugiskaitoje a/an nereikia." },
        { type: "order", words: ["are", "where", "from", "you"], answer: "where are you from", lt: "Iš kur tu esi?" }
      ],
      speaking: {
        scenario: "You meet the learner at an international party in London. You are friendly and curious. Introduce yourself first (invent a name, country and job), then get to know the learner. Later, ask about a friend or family member of the learner.",
        tasks: [
          "Introduce yourself briefly and ask the learner to introduce herself (name, country, city, age if comfortable, job).",
          "Ask follow-up yes/no questions with 'Are you…?' and 'Is your…?' (e.g. 'Are you married?', 'Is your job interesting?').",
          "Ask the learner to describe one friend or family member: name, age, job, where they are from.",
          "Ask the learner to ask YOU at least three questions about yourself using 'to be'.",
          "Gently correct missing 'am/is/are', missing subjects and missing 'a/an' before jobs."
        ],
        successCriteria: [
          "Gives name, country and job in full sentences with correct am/is/are",
          "Uses 'a/an' correctly before at least 2 jobs",
          "Asks at least 3 correct questions with 'to be' (e.g. 'Where are you from?')",
          "Says age with 'I'm …' (not 'I have …')",
          "Uses at least one negative form (isn't / aren't / I'm not)"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 02
    {
      id: "a1plus-02",
      type: "lesson",
      icon: "⏰",
      title: "Present Simple: mano dienotvarkė",
      titleEn: "Present Simple – daily routine (I / you / we / they)",
      canDo: [
        "Galiu papasakoti apie savo įprastą dieną.",
        "Galiu paklausti kitų, ką jie paprastai daro ir kada."
      ],
      grammar: {
        title: "Kaip kalbėti apie įpročius",
        explanation: [
          "<b>Present Simple</b> naudojame kalbėdami apie tai, ką darome <b>reguliariai</b>: kasdien, kiekvieną savaitę, paprastai. Su <b>I, you, we, they</b> veiksmažodis lieka toks, koks yra žodyne: <i>I work</i>, <i>we live</i>, <i>they get up</i>.",
          "Neiginiui reikia pagalbinio žodelio <b>don't</b> (do not): <i>I don't drink coffee</i>. Lietuviškai tiesiog pridedame „ne-“ prie veiksmažodžio, o angliškai sakome „don't + veiksmažodis“.",
          "Klausimas prasideda žodžiu <b>Do</b>: <i>Do you work on Saturdays?</i> Lietuviškai klausiame su „ar“ arba tik intonacija, o anglų kalboje <b>do</b> yra būtinas.",
          "Laikas paprastai eina sakinio gale: <i>I get up <b>at 7</b>.</i> <i>We have dinner <b>in the evening</b>.</i>"
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I work from home."],
          ["−", "I don't work on Sundays."],
          ["?", "Do you work on Sundays?"],
          ["Trumpi atsakymai", "Yes, I do. / No, I don't."]
        ],
        examples: [
          { en: "I get up at 7 o'clock.", lt: "Keliuosi 7 valandą." },
          { en: "We have breakfast at home.", lt: "Pusryčiaujame namie." },
          { en: "I go to work by bus.", lt: "Į darbą važiuoju autobusu." },
          { en: "They don't watch TV in the evening.", lt: "Jie vakare nežiūri televizoriaus." },
          { en: "Do you cook every day? – Yes, I do.", lt: "Ar gamini kasdien? – Taip." },
          { en: "What time do you go to bed?", lt: "Kelintą valandą eini miegoti?" }
        ],
        pitfalls: [
          "Klausimas be „do“: <i>You work on Saturdays?</i> ✗ → <b>Do you work on Saturdays?</b> ✓ (be „do“ skamba kaip nustebimas).",
          "Neiginys su „no“: <i>I no like coffee</i> ✗ → <b>I don't like coffee</b> ✓.",
          "Atsakant „Yes, I work“ ✗ – trumpai sakome <b>Yes, I do</b> ✓."
        ]
      },
      vocab: [
        { en: "get up", lt: "keltis" },
        { en: "wake up", lt: "pabusti" },
        { en: "have a shower", lt: "praustis po dušu" },
        { en: "have breakfast / lunch / dinner", lt: "pusryčiauti / pietauti / vakarieniauti" },
        { en: "go to work", lt: "eiti / važiuoti į darbą" },
        { en: "start / finish work", lt: "pradėti / baigti darbą" },
        { en: "come home", lt: "grįžti namo" },
        { en: "cook", lt: "gaminti valgį" },
        { en: "do the housework", lt: "tvarkytis namuose" },
        { en: "relax", lt: "ilsėtis" },
        { en: "go to bed", lt: "eiti miegoti" },
        { en: "by bus / by car / on foot", lt: "autobusu / automobiliu / pėsčiomis" }
      ],
      phrases: [
        { en: "What time do you get up?", lt: "Kelintą valandą keliesi?" },
        { en: "How do you get to work?", lt: "Kaip nuvyksti į darbą?" },
        { en: "What do you do in the evening?", lt: "Ką veiki vakarais?" },
        { en: "Me too. / Me neither.", lt: "Aš irgi. / Aš irgi ne." }
      ],
      quiz: [
        { type: "choice", q: "___ you work on Saturdays?", options: ["Are", "Do", "Does"], answer: 1,
          explain: "Klausimuose su „you“ Present Simple laike naudojame <b>Do</b>." },
        { type: "choice", q: "We ___ TV in the morning.", options: ["don't watch", "not watch", "doesn't watch"], answer: 0,
          explain: "Su „we“ neiginys – <b>don't</b> + veiksmažodis." },
        { type: "choice", q: "Do you cook every day? – Yes, I ___.", options: ["cook", "am", "do"], answer: 2,
          explain: "Trumpas atsakymas kartoja pagalbinį žodį: <b>Yes, I do</b>." },
        { type: "input", q: "Išversk: Aš keliuosi septintą valandą.", answer: ["I get up at seven", "I get up at 7", "I get up at seven o'clock", "I get up at 7 o'clock", "I wake up at seven", "I wake up at 7"],
          explain: "„Keltis“ = <b>get up</b>, valanda su <b>at</b>." },
        { type: "input", q: "Išversk: Mes negeriame kavos.", answer: ["We don't drink coffee", "We do not drink coffee"],
          explain: "Neiginys: <b>don't</b> + veiksmažodis." },
        { type: "order", words: ["you", "do", "time", "what", "get", "up"], answer: "what time do you get up", lt: "Kelintą valandą keliesi?" }
      ],
      speaking: {
        scenario: "You are a researcher doing a friendly survey called 'A typical day in Europe'. Interview the learner about her daily routine on weekdays and at weekends. Then tell her about your own routine and let her compare.",
        tasks: [
          "Ask about the learner's weekday routine from morning to night, using 'What time do you…?', 'Do you…?', 'How do you get to…?'.",
          "Ask how her weekend is different from her weekdays.",
          "Describe your own routine in 3–4 sentences and ask her to say what is the same or different ('Me too', 'I don't…').",
          "Ask her to ask you at least 3 questions about your routine with 'do'.",
          "Correct questions without 'do' and negatives with 'no' instead of 'don't'."
        ],
        successCriteria: [
          "Describes at least 6 daily activities in Present Simple with times",
          "Uses 'don't' correctly in at least 2 negative sentences",
          "Asks at least 3 correct questions starting with 'Do you…' or 'What time do you…'",
          "Gives short answers 'Yes, I do / No, I don't' at least once",
          "Uses at least 8 words or expressions from the lesson vocabulary"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 03
    {
      id: "a1plus-03",
      type: "lesson",
      icon: "👩‍💼",
      title: "Present Simple: he / she / it",
      titleEn: "Present Simple – he/she/it (-s), negatives and questions with do/does",
      canDo: [
        "Galiu papasakoti apie kito žmogaus įpročius ir darbą.",
        "Galiu paklausti apie kitus žmones su „Does…?“."
      ],
      grammar: {
        title: "Trečiasis asmuo: galūnė -s ir „does“",
        explanation: [
          "Su <b>he, she, it</b> (ir su vienu žmogumi ar daiktu: <i>my mum, the shop</i>) teigiamame sakinyje prie veiksmažodžio pridedame <b>-s</b>: <i>she works</i>, <i>he lives</i>, <i>it opens</i>.",
          "Kai kurie veiksmažodžiai gauna <b>-es</b>: <i>go → goes</i>, <i>do → does</i>, <i>watch → watches</i>, <i>finish → finishes</i>. Jei gale yra priebalsė + y: <i>study → studies</i>. Ypatinga forma: <i>have → has</i>.",
          "Neiginyje ir klausime vietoj <b>do</b> naudojame <b>does</b>, o pagrindinis veiksmažodis <b>netenka -s</b>: <i>She doesn't work</i>, <i>Does he live here?</i> Galūnė -s „persikelia“ į does.",
          "Lietuviškai trečiasis asmuo („dirba“) skiriasi nuo pirmojo („dirbu“) – angliškai skirtumas tik viena raidė -s, bet ji labai svarbi ir gerai girdima."
        ],
        table: [
          ["Forma", "I / you / we / they", "he / she / it"],
          ["+", "I work", "she works"],
          ["−", "I don't work", "she doesn't work"],
          ["?", "Do you work?", "Does she work?"],
          ["Trumpas atsakymas", "Yes, I do.", "Yes, she does. / No, she doesn't."]
        ],
        examples: [
          { en: "My boyfriend works in an office.", lt: "Mano vaikinas dirba biure." },
          { en: "She goes to the gym on Mondays.", lt: "Ji pirmadieniais eina į sporto klubą." },
          { en: "He doesn't like fish.", lt: "Jis nemėgsta žuvies." },
          { en: "Does your mum live in Kaunas? – Yes, she does.", lt: "Ar tavo mama gyvena Kaune? – Taip." },
          { en: "The shop opens at 9 and closes at 8.", lt: "Parduotuvė atsidaro 9 ir užsidaro 8 valandą." },
          { en: "What does your sister do? – She studies medicine.", lt: "Ką veikia tavo sesuo? – Ji studijuoja mediciną." }
        ],
        pitfalls: [
          "Pamirštama -s: <i>She work in a bank</i> ✗ → <b>She works in a bank</b> ✓.",
          "Dviguba -s: <i>He doesn't works</i> ✗, <i>Does she likes…?</i> ✗ → <b>He doesn't work</b>, <b>Does she like…?</b> ✓.",
          "„Do“ vietoj „does“: <i>Do he live here?</i> ✗ → <b>Does he live here?</b> ✓."
        ]
      },
      vocab: [
        { en: "live", lt: "gyventi" },
        { en: "work", lt: "dirbti" },
        { en: "study", lt: "studijuoti, mokytis" },
        { en: "teach", lt: "mokyti" },
        { en: "like", lt: "patikti, mėgti" },
        { en: "watch", lt: "žiūrėti" },
        { en: "play", lt: "žaisti, groti" },
        { en: "drive", lt: "vairuoti" },
        { en: "open / close", lt: "atidaryti(s) / uždaryti(s)" },
        { en: "office", lt: "biuras" },
        { en: "hospital", lt: "ligoninė" },
        { en: "boyfriend / girlfriend", lt: "vaikinas / mergina (draugas, draugė)" }
      ],
      phrases: [
        { en: "What does he/she do?", lt: "Kuo jis/ji dirba?" },
        { en: "Where does she live?", lt: "Kur ji gyvena?" },
        { en: "Does he like…?", lt: "Ar jam patinka…?" },
        { en: "He/She works as a…", lt: "Jis/Ji dirba…" }
      ],
      quiz: [
        { type: "choice", q: "My brother ___ in a hospital.", options: ["work", "works", "working"], answer: 1,
          explain: "My brother = he, todėl <b>works</b> su -s." },
        { type: "choice", q: "___ your sister like coffee?", options: ["Do", "Is", "Does"], answer: 2,
          explain: "Su he/she/it klausime – <b>Does</b>." },
        { type: "choice", q: "She doesn't ___ meat.", options: ["eat", "eats", "eating"], answer: 0,
          explain: "Po <b>doesn't</b> veiksmažodis be -s: <b>eat</b>." },
        { type: "choice", q: "He ___ TV every evening.", options: ["watchs", "watches", "watch"], answer: 1,
          explain: "Po -ch pridedame <b>-es</b>: watches." },
        { type: "input", q: "Išversk: Ji gyvena Vilniuje.", answer: ["She lives in Vilnius"],
          explain: "She + live<b>s</b>, miestas su <b>in</b>." },
        { type: "order", words: ["does", "what", "do", "your", "brother"], answer: "what does your brother do", lt: "Kuo dirba tavo brolis?" }
      ],
      speaking: {
        scenario: "You are a new colleague of the learner and you want to know about the important people in her life. Ask about her partner, a family member and a best friend: their jobs, routines and likes. Then describe a person you know and let her ask questions.",
        tasks: [
          "Ask the learner to describe her partner or a family member: job, where he/she lives, daily routine, likes and dislikes.",
          "Ask yes/no questions with 'Does he/she…?' and wait for short answers ('Yes, he does').",
          "Describe your (invented) best friend in 3 sentences, then ask the learner to ask you at least 3 questions about this person with 'does'.",
          "Play a quick game: the learner describes a famous person's routine and you guess who it is.",
          "Correct every missing third-person -s and every 'does + verb-s' error, briefly."
        ],
        successCriteria: [
          "Produces at least 6 correct third-person sentences with -s/-es",
          "Uses 'doesn't' correctly at least twice",
          "Asks at least 3 correct 'Does…?' or 'What/Where does…?' questions",
          "Gives at least 2 correct short answers ('Yes, she does / No, he doesn't')",
          "Makes no more than 2 uncorrected -s errors in the last 5 turns"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 04
    {
      id: "a1plus-04",
      type: "lesson",
      icon: "🔁",
      title: "Kaip dažnai? Dažnumo prieveiksmiai",
      titleEn: "Adverbs of frequency and time expressions",
      canDo: [
        "Galiu pasakyti, kaip dažnai ką nors darau.",
        "Galiu paklausti „How often…?“ ir atsakyti laiko frazėmis."
      ],
      grammar: {
        title: "Always, usually, sometimes, never",
        explanation: [
          "Dažnumo prieveiksmiai rodo, kaip dažnai kas vyksta: <b>always</b> (visada, 100 %), <b>usually</b> (paprastai), <b>often</b> (dažnai), <b>sometimes</b> (kartais), <b>rarely</b> (retai), <b>never</b> (niekada, 0 %).",
          "Jų vieta sakinyje svarbi: <b>prieš pagrindinį veiksmažodį</b> (<i>I <b>usually</b> get up at 7</i>), bet <b>po „to be“</b> (<i>She is <b>always</b> late</i>).",
          "<b>Never</b> jau yra neigiamas žodis, todėl jokio „don't“ nereikia: <i>I never eat meat</i>. Lietuviškai sakome „niekada <b>ne</b>valgau“ – dvigubas neigimas, o angliškai jo būti negali!",
          "Ilgesnės laiko frazės eina sakinio gale: <b>every day</b> (kasdien), <b>once a week</b> (kartą per savaitę), <b>twice a month</b> (du kartus per mėnesį), <b>three times a year</b>, <b>on Mondays</b>, <b>at the weekend</b>.",
          "Klausiame: <b>How often do you…?</b> – Kaip dažnai tu…?"
        ],
        table: [
          ["Žodis", "Dažnumas", "Pavyzdys"],
          ["always", "100 %", "I always drink tea."],
          ["usually", "≈ 80 %", "We usually walk."],
          ["often", "≈ 60 %", "He often cooks."],
          ["sometimes", "≈ 40 %", "I sometimes run."],
          ["rarely", "≈ 10 %", "She rarely drives."],
          ["never", "0 %", "They never smoke."]
        ],
        examples: [
          { en: "I always have coffee in the morning.", lt: "Rytais visada geriu kavą." },
          { en: "She is usually tired after work.", lt: "Po darbo ji paprastai būna pavargusi." },
          { en: "We sometimes go to the cinema on Fridays.", lt: "Penktadieniais kartais einame į kiną." },
          { en: "He never watches football.", lt: "Jis niekada nežiūri futbolo." },
          { en: "How often do you go to the gym? – Twice a week.", lt: "Kaip dažnai eini į sporto klubą? – Du kartus per savaitę." },
          { en: "I visit my parents once a month.", lt: "Tėvus aplankau kartą per mėnesį." }
        ],
        pitfalls: [
          "Dvigubas neigimas: <i>I don't never eat meat</i> ✗ → <b>I never eat meat</b> ✓.",
          "Bloga vieta: <i>I go always to work by bus</i> ✗ → <b>I always go to work by bus</b> ✓.",
          "Su „to be“ prieveiksmis eina po jo: <i>She always is late</i> ✗ → <b>She is always late</b> ✓."
        ]
      },
      vocab: [
        { en: "always", lt: "visada" },
        { en: "usually", lt: "paprastai" },
        { en: "often", lt: "dažnai" },
        { en: "sometimes", lt: "kartais" },
        { en: "rarely", lt: "retai" },
        { en: "never", lt: "niekada" },
        { en: "every day / every week", lt: "kasdien / kas savaitę" },
        { en: "once / twice / three times", lt: "kartą / du kartus / tris kartus" },
        { en: "at the weekend", lt: "savaitgalį" },
        { en: "go shopping", lt: "apsipirkti" },
        { en: "go for a walk", lt: "eiti pasivaikščioti" },
        { en: "be late", lt: "vėluoti" }
      ],
      phrases: [
        { en: "How often do you…?", lt: "Kaip dažnai tu…?" },
        { en: "Not very often.", lt: "Nelabai dažnai." },
        { en: "Once a week, I think.", lt: "Manau, kartą per savaitę." },
        { en: "Hardly ever.", lt: "Beveik niekada." }
      ],
      quiz: [
        { type: "choice", q: "Which sentence is correct?", options: ["I go always to work by car.", "I always go to work by car.", "Always I go to work by car."], answer: 1,
          explain: "Dažnumo prieveiksmis eina <b>prieš pagrindinį veiksmažodį</b>." },
        { type: "choice", q: "She ___ late.", options: ["is never", "never is", "doesn't never"], answer: 0,
          explain: "Su „to be“ prieveiksmis eina <b>po</b> jo: is never." },
        { type: "choice", q: "I ___ eat fast food. I hate it!", options: ["don't never", "never", "always"], answer: 1,
          explain: "„Never“ jau neigiamas – „don't“ nereikia." },
        { type: "input", q: "Išversk: Kartais aš gaminu vakarienę.", answer: ["I sometimes cook dinner", "Sometimes I cook dinner", "I sometimes make dinner", "Sometimes I make dinner"],
          explain: "„Sometimes“ gali būti prieš veiksmažodį arba sakinio pradžioje." },
        { type: "input", q: "Išversk: du kartus per savaitę", answer: ["twice a week", "two times a week"],
          explain: "„Du kartus“ = <b>twice</b>, „per savaitę“ = <b>a week</b>." },
        { type: "order", words: ["often", "do", "how", "you", "cook"], answer: "how often do you cook", lt: "Kaip dažnai gamini valgį?" }
      ],
      speaking: {
        scenario: "You are a lifestyle coach doing a 'healthy habits' check with the learner. Ask how often she does healthy and unhealthy things (sport, sleep, fast food, coffee, walking, screen time). At the end, give her two friendly tips and ask what she will change.",
        tasks: [
          "Ask at least 6 'How often do you…?' questions about different habits.",
          "Ask her to tell you three things she always does, three things she sometimes does and three things she never does.",
          "Ask about her partner's or a friend's habits to practise 'he/she usually…' and 'he is always…'.",
          "Ask her to ask you at least 2 'How often…?' questions.",
          "Correct word order of adverbs and any double negatives ('don't never')."
        ],
        successCriteria: [
          "Uses at least 5 different frequency adverbs in correct position",
          "Uses at least 3 time expressions (once a week, every day, at the weekend…)",
          "Places the adverb after 'to be' correctly at least once",
          "Produces no double negatives with 'never'",
          "Asks at least 2 correct 'How often…?' questions"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 05
    {
      id: "a1plus-05",
      type: "lesson",
      icon: "👨‍👩‍👧",
      title: "Šeima ir daiktai: „have got“, „my“, „'s“",
      titleEn: "Have got / have – family and possessions; possessive adjectives and 's",
      canDo: [
        "Galiu papasakoti apie savo šeimą ir artimuosius.",
        "Galiu pasakyti, ką turiu, ir kam kas priklauso."
      ],
      grammar: {
        title: "Turėti ir priklausyti",
        explanation: [
          "Turėjimą išreiškiame dviem būdais: <b>have got</b> (dažniau britų šnekamojoje kalboje) arba tiesiog <b>have</b>. <i>I've got a sister</i> = <i>I have a sister</i>. Su he/she/it: <b>has got</b> / <b>has</b>.",
          "Neiginiai ir klausimai skiriasi: <i>I haven't got a car</i> / <i>Have you got a car?</i>, bet <i>I don't have a car</i> / <i>Do you have a car?</i> Nemaišyk jų!",
          "Savybiniai įvardžiai: <b>my</b> (mano), <b>your</b> (tavo/jūsų), <b>his</b> (jo), <b>her</b> (jos), <b>its</b> (jo/jos – daikto), <b>our</b> (mūsų), <b>their</b> (jų). Lietuviškai dažnai sakome „savo“, o angliškai visada pasirenkame pagal asmenį: <i>She loves <b>her</b> job</i>.",
          "Priklausymą žmogui rodome su <b>'s</b>: <i>Tom's car</i> (Tomo mašina), <i>my mum's sister</i> (mano mamos sesuo). Daugiskaitoje su -s pridedame tik apostrofą: <i>my parents' house</i>."
        ],
        table: [
          ["", "have got", "have"],
          ["+", "She's got two kids.", "She has two kids."],
          ["−", "She hasn't got a dog.", "She doesn't have a dog."],
          ["?", "Has she got a dog?", "Does she have a dog?"]
        ],
        examples: [
          { en: "I've got one brother and two sisters.", lt: "Turiu vieną brolį ir dvi seseris." },
          { en: "My brother's wife is Italian.", lt: "Mano brolio žmona – italė." },
          { en: "Have you got any children? – No, I haven't.", lt: "Ar turi vaikų? – Ne, neturiu." },
          { en: "Do you have a pet? – Yes, I do. A cat.", lt: "Ar turi augintinį? – Taip, katę." },
          { en: "Her husband is a cook. His name is Mark.", lt: "Jos vyras – virėjas. Jo vardas Markas." },
          { en: "This is my parents' flat.", lt: "Tai mano tėvų butas." },
          { en: "Our dog is old, but its eyes are very kind.", lt: "Mūsų šuo senas, bet jo akys labai geros." }
        ],
        pitfalls: [
          "Painiojama his/her: lietuviškai „savo“ tinka visiems, todėl sakoma <i>She loves his job</i> ✗, kai kalbama apie jos darbą → <b>She loves her job</b> ✓.",
          "Maišomos formos: <i>Do you have got…?</i> ✗ → <b>Have you got…?</b> arba <b>Do you have…?</b> ✓.",
          "Lietuviška tvarka: <i>the car of Tom</i> ✗ → <b>Tom's car</b> ✓."
        ]
      },
      vocab: [
        { en: "parents", lt: "tėvai" },
        { en: "mother / father (mum / dad)", lt: "mama / tėtis" },
        { en: "brother / sister", lt: "brolis / sesuo" },
        { en: "husband / wife", lt: "vyras / žmona" },
        { en: "son / daughter", lt: "sūnus / dukra" },
        { en: "grandparents", lt: "seneliai" },
        { en: "aunt / uncle", lt: "teta / dėdė" },
        { en: "cousin", lt: "pusbrolis / pusseserė" },
        { en: "children (kids)", lt: "vaikai" },
        { en: "pet", lt: "naminis gyvūnas, augintinis" },
        { en: "flat / house", lt: "butas / namas" },
        { en: "only child", lt: "vienturtis(-ė)" }
      ],
      phrases: [
        { en: "Have you got any brothers or sisters?", lt: "Ar turi brolių ar seserų?" },
        { en: "I'm an only child.", lt: "Esu vienturtė." },
        { en: "Whose is this?", lt: "Kieno tai?" },
        { en: "It's my sister's.", lt: "Tai mano sesers." },
        { en: "What's his/her name?", lt: "Koks jo/jos vardas?" }
      ],
      quiz: [
        { type: "choice", q: "___ you got a car?", options: ["Do", "Have", "Has"], answer: 1,
          explain: "Su „got“ klausimas prasideda <b>Have</b>." },
        { type: "choice", q: "Anna loves ___ husband.", options: ["his", "her", "their"], answer: 1,
          explain: "Anna – ji, todėl <b>her</b> husband (jos vyras)." },
        { type: "choice", q: "She ___ a dog.", options: ["doesn't have", "hasn't", "don't have"], answer: 0,
          explain: "Be „got“ neiginys: <b>doesn't have</b>. („hasn't got“ irgi būtų gerai.)" },
        { type: "input", q: "Išversk: Tai mano mamos mašina.", answer: ["This is my mum's car", "It's my mum's car", "It is my mum's car", "This is my mother's car", "It's my mother's car", "It is my mother's car", "That's my mum's car", "That is my mum's car"],
          explain: "Priklausymas: <b>my mum's car</b>." },
        { type: "input", q: "Išversk: Aš turiu du brolius.", answer: ["I've got two brothers", "I have got two brothers", "I have two brothers"],
          explain: "<b>I've got</b> arba <b>I have</b> + daugiskaita brothers." },
        { type: "order", words: ["got", "any", "have", "you", "children"], answer: "have you got any children", lt: "Ar turi vaikų?" }
      ],
      speaking: {
        scenario: "The learner is showing you photos of her family on her phone (she imagines them). You are a curious friend. Ask about each person: who they are, their names, jobs, what they have got (kids, pets, house, car). Later, describe your own family and ask her to draw a mental family tree by asking you questions.",
        tasks: [
          "Ask 'Who's this?' and get the learner to identify at least 4 family members using possessives ('This is my sister's husband').",
          "Ask what different family members have got (children, pets, a house, a car) using both 'have got' and 'do you have'.",
          "Ask about names using 'What's his/her name?' to practise his/her.",
          "Describe your family briefly and let the learner ask at least 3 questions ('Have you got…?', 'What's your brother's name?').",
          "Correct his/her confusion and mixed forms like 'Do you have got'."
        ],
        successCriteria: [
          "Uses at least 8 family words correctly",
          "Uses his/her correctly every time in the last 5 turns",
          "Uses possessive 's correctly at least 3 times",
          "Uses have got/has got and have/has with correct negatives and questions at least once each",
          "Asks at least 3 questions about the tutor's family"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 06
    {
      id: "a1plus-06",
      type: "lesson",
      icon: "🏠",
      title: "There is / there are: mano namai ir miestas",
      titleEn: "There is / there are + prepositions of place – my home, my town",
      canDo: [
        "Galiu aprašyti savo butą ar namą.",
        "Galiu papasakoti, kas yra mano mieste ar rajone, ir pasakyti, kur kas yra."
      ],
      grammar: {
        title: "Kas kur yra",
        explanation: [
          "Kai sakome, kad kažkas kažkur <b>yra</b> (egzistuoja), naudojame <b>there is</b> (vienaskaita) ir <b>there are</b> (daugiskaita): <i>There's a sofa in the living room. There are two bedrooms.</i>",
          "Lietuviškai sakome „Kambaryje yra sofa“ – vietą dažnai dedame pradžioje. Angliškai sakinys prasideda <b>There is/are</b>, o vieta – gale: <i>There's a sofa <b>in the room</b>.</i>",
          "Neiginys: <i>There isn't a garden</i>, <i>There aren't any shops</i>. Klausimas: <i>Is there a lift?</i> <i>Are there any parks?</i> Trumpi atsakymai: <i>Yes, there is. / No, there aren't.</i>",
          "Vietos prielinksniai: <b>in</b> (viduje), <b>on</b> (ant), <b>under</b> (po), <b>next to</b> (šalia), <b>between</b> (tarp), <b>behind</b> (už), <b>in front of</b> (priešais), <b>opposite</b> (priešais, kitoje pusėje)."
        ],
        table: [
          ["", "Vienaskaita", "Daugiskaita"],
          ["+", "There's a park.", "There are two cafés."],
          ["−", "There isn't a cinema.", "There aren't any shops."],
          ["?", "Is there a bank?", "Are there any trees?"]
        ],
        examples: [
          { en: "There are three rooms in my flat.", lt: "Mano bute yra trys kambariai." },
          { en: "There's a big window in the kitchen.", lt: "Virtuvėje yra didelis langas." },
          { en: "Is there a supermarket near here? – Yes, there is.", lt: "Ar čia netoliese yra prekybos centras? – Taip." },
          { en: "There aren't any parks in my street.", lt: "Mano gatvėje nėra parkų." },
          { en: "The cat is under the table.", lt: "Katė po stalu." },
          { en: "The bakery is next to the bank, opposite the church.", lt: "Kepykla yra šalia banko, priešais bažnyčią." }
        ],
        pitfalls: [
          "Lietuviška struktūra: <i>In my town is a castle</i> ✗ → <b>There's a castle in my town</b> ✓.",
          "„Have“ vietoj „there is“: <i>In my flat have two rooms</i> ✗ → <b>There are two rooms in my flat</b> ✓ (arba <b>My flat has two rooms</b>).",
          "„There is“ su daugiskaita: <i>There is many shops</i> ✗ → <b>There are a lot of shops</b> ✓."
        ]
      },
      vocab: [
        { en: "living room", lt: "svetainė" },
        { en: "bedroom", lt: "miegamasis" },
        { en: "kitchen", lt: "virtuvė" },
        { en: "bathroom", lt: "vonios kambarys" },
        { en: "balcony", lt: "balkonas" },
        { en: "floor", lt: "aukštas; grindys" },
        { en: "lift", lt: "liftas" },
        { en: "neighbourhood", lt: "rajonas, apylinkė" },
        { en: "next to", lt: "šalia" },
        { en: "between", lt: "tarp" },
        { en: "opposite", lt: "priešais, kitoje pusėje" },
        { en: "in front of / behind", lt: "priešais / už" },
        { en: "pharmacy", lt: "vaistinė" },
        { en: "bus stop", lt: "autobusų stotelė" }
      ],
      phrases: [
        { en: "Is there a … near here?", lt: "Ar netoliese yra…?" },
        { en: "It's on the third floor.", lt: "Tai trečiame aukšte." },
        { en: "It's just around the corner.", lt: "Visai čia pat, už kampo." },
        { en: "What's your neighbourhood like?", lt: "Koks tavo rajonas?" }
      ],
      quiz: [
        { type: "choice", q: "___ two bedrooms in our flat.", options: ["There is", "There are", "It has"], answer: 1,
          explain: "Daugiskaita (two bedrooms) → <b>There are</b>." },
        { type: "choice", q: "___ a pharmacy near here?", options: ["Is there", "Are there", "There is"], answer: 0,
          explain: "Klausimas vienaskaitoje: <b>Is there</b>…?" },
        { type: "choice", q: "The keys are ___ the table. (ant)", options: ["in", "on", "under"], answer: 1,
          explain: "„Ant“ = <b>on</b>." },
        { type: "input", q: "Išversk: Mano mieste yra pilis.", answer: ["There's a castle in my town", "There is a castle in my town", "There's a castle in my city", "There is a castle in my city"],
          explain: "Pradedame <b>There is</b>, vieta – sakinio gale." },
        { type: "input", q: "Išversk: Mano gatvėje nėra parduotuvių.", answer: ["There aren't any shops in my street", "There are no shops in my street", "There aren't any shops on my street", "There are no shops on my street", "There are not any shops in my street"],
          explain: "Daugiskaitos neiginys: <b>There aren't any…</b> arba <b>There are no…</b>" },
        { type: "order", words: ["there", "a", "near", "is", "bank", "here"], answer: "is there a bank near here", lt: "Ar netoliese yra bankas?" }
      ],
      speaking: {
        scenario: "Part 1: You want to rent the learner's flat for a month. Ask detailed questions about it. Part 2: You are a tourist in the learner's town. Ask what there is to see and do, and where places are.",
        tasks: [
          "As a future tenant, ask 'Is there a…?' / 'Are there any…?' about rooms, furniture, balcony, lift, washing machine.",
          "Ask where things are in the flat to make the learner use prepositions (next to, opposite, between, on the second floor).",
          "As a tourist, ask what there is in her town and neighbourhood (cafés, parks, museums, shops) and how far they are.",
          "Ask her to ask you 2–3 questions about your (invented) hometown with 'Is there / Are there'.",
          "Correct Lithuanian-style structures like 'In my town is…' and 'there is + plural'."
        ],
        successCriteria: [
          "Uses 'there is' and 'there are' correctly at least 6 times in total",
          "Uses at least 2 negative forms (there isn't / there aren't any)",
          "Uses at least 5 different prepositions of place correctly",
          "Asks at least 2 correct 'Is there / Are there' questions",
          "Describes at least 4 rooms or places with relevant vocabulary"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 07
    {
      id: "a1plus-07",
      type: "lesson",
      icon: "🛍️",
      title: "A / an / the, daugiskaita ir this / that",
      titleEn: "Articles a/an/the, plural nouns, this/that/these/those – shopping basics",
      canDo: [
        "Galiu parduotuvėje paprašyti daikto ir paklausti kainos.",
        "Galiu parodyti daiktus su this / that / these / those."
      ],
      grammar: {
        title: "Artikeliai – žodeliai, kurių lietuvių kalboje nėra",
        explanation: [
          "Lietuvių kalboje artikelių nėra, todėl jie lietuviams – vienas sunkiausių dalykų. Paprasta taisyklė: <b>a/an</b> – kai kalbame apie <b>vieną bet kokį</b> daiktą ar minime pirmą kartą (<i>I want <b>a</b> T-shirt</i>), <b>the</b> – kai abu žinome, <b>kurį konkretų</b> (<i>Can I try on <b>the</b> blue T-shirt?</i>).",
          "<b>An</b> rašome prieš balsę tariamą garsą: <i>an apple, an hour</i>, bet <i>a university</i> (tariama „ju-“).",
          "Daugiskaita dažniausiai su <b>-s</b>: <i>shoe → shoes</i>; po s, sh, ch, x – <b>-es</b>: <i>dress → dresses</i>, <i>box → boxes</i>. Netaisyklingi: <i>man → men, woman → women, child → children, person → people, foot → feet</i>. Su daugiskaita <b>a/an</b> nevartojame.",
          "<b>This</b> (šis, arti) – <b>these</b> (šie, arti); <b>that</b> (tas, toliau) – <b>those</b> (tie, toliau). <i>How much is this bag? How much are those shoes?</i>"
        ],
        table: [
          ["", "Arti ✋", "Toli 👉"],
          ["Vienaskaita", "this bag", "that bag"],
          ["Daugiskaita", "these shoes", "those shoes"]
        ],
        examples: [
          { en: "I'm looking for a jacket.", lt: "Ieškau striukės." },
          { en: "Can I try on the black jacket, please?", lt: "Ar galiu pasimatuoti tą juodą striukę?" },
          { en: "How much is this scarf?", lt: "Kiek kainuoja šis šalikas?" },
          { en: "How much are those boots?", lt: "Kiek kainuoja tie batai?" },
          { en: "These jeans are too small.", lt: "Šie džinsai per maži." },
          { en: "Two women and three children are in the shop.", lt: "Parduotuvėje yra dvi moterys ir trys vaikai." }
        ],
        pitfalls: [
          "Praleidžiamas artikelis: <i>I want to buy dress</i> ✗ → <b>I want to buy a dress</b> ✓.",
          "„Jeans, trousers, glasses“ angliškai visada daugiskaita: <i>This jeans is…</i> ✗ → <b>These jeans are…</b> ✓.",
          "Neteisinga daugiskaita: <i>childs, peoples, womans</i> ✗ → <b>children, people, women</b> ✓."
        ]
      },
      vocab: [
        { en: "clothes", lt: "drabužiai" },
        { en: "T-shirt", lt: "marškinėliai" },
        { en: "dress", lt: "suknelė" },
        { en: "jeans / trousers", lt: "džinsai / kelnės" },
        { en: "shoes / boots", lt: "batai / aulinukai" },
        { en: "jacket / coat", lt: "striukė / paltas" },
        { en: "bag", lt: "rankinė, krepšys" },
        { en: "size", lt: "dydis" },
        { en: "price", lt: "kaina" },
        { en: "cheap / expensive", lt: "pigus / brangus" },
        { en: "try on", lt: "pasimatuoti" },
        { en: "changing room", lt: "matavimosi kabina" },
        { en: "pay by card / in cash", lt: "mokėti kortele / grynaisiais" }
      ],
      phrases: [
        { en: "How much is this / are these?", lt: "Kiek kainuoja šis / šie?" },
        { en: "Can I try it on?", lt: "Ar galiu pasimatuoti?" },
        { en: "Have you got this in a smaller size?", lt: "Ar turite mažesnio dydžio?" },
        { en: "I'll take it.", lt: "Paimsiu." },
        { en: "Just looking, thanks.", lt: "Tik žiūriu, ačiū." }
      ],
      quiz: [
        { type: "choice", q: "I need ___ umbrella.", options: ["a", "an", "the"], answer: 1,
          explain: "„Umbrella“ prasideda balse ir minime pirmą kartą → <b>an</b>." },
        { type: "choice", q: "How much are ___ shoes over there?", options: ["this", "these", "those"], answer: 2,
          explain: "Daugiskaita ir toli („over there“) → <b>those</b>." },
        { type: "choice", q: "Plural of „child“:", options: ["childs", "children", "childrens"], answer: 1,
          explain: "Netaisyklinga daugiskaita: <b>children</b>." },
        { type: "choice", q: "I bought a dress and a bag. ___ dress is red.", options: ["A", "The", "—"], answer: 1,
          explain: "Antrą kartą minime tą pačią suknelę – jau žinome, kurią → <b>The</b>." },
        { type: "input", q: "Išversk: Šie džinsai per brangūs.", answer: ["These jeans are too expensive"],
          explain: "Jeans – visada daugiskaita: <b>These jeans are</b>." },
        { type: "order", words: ["much", "this", "how", "is", "bag"], answer: "how much is this bag", lt: "Kiek kainuoja ši rankinė?" }
      ],
      speaking: {
        scenario: "You are a shop assistant in a clothes shop in Dublin. The learner is a customer who needs an outfit for a friend's birthday party. Help her, offer different items, sizes and colours, and finish at the till.",
        tasks: [
          "Greet the customer and ask what she is looking for (make her use 'a/an' + item).",
          "Show items near and far ('this one here, those over there') and get her to ask prices with this/that/these/those.",
          "Let her ask to try something on and ask for a different size or colour; refer back to items so she must use 'the'.",
          "Finish the sale: price, card or cash, bag.",
          "Correct missing articles and wrong singular/plural (e.g. 'this jeans')."
        ],
        successCriteria: [
          "Uses a/an correctly at least 4 times",
          "Uses 'the' for a known, specific item at least 2 times",
          "Uses this/that/these/those correctly at least 4 times, including one plural",
          "Asks for the price at least twice ('How much is/are…?')",
          "Completes the purchase politely (please, thank you, I'll take it)"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 08
    {
      id: "a1plus-08",
      type: "lesson",
      icon: "☕",
      title: "Maistas: some / any, How much / How many",
      titleEn: "Countable/uncountable nouns, some/any, How much/How many – food and café ordering",
      canDo: [
        "Galiu užsisakyti maisto ir gėrimų kavinėje.",
        "Galiu pasakyti, ko reikia nupirkti, ir paklausti kiekio."
      ],
      grammar: {
        title: "Skaičiuojami ir neskaičiuojami daiktavardžiai",
        explanation: [
          "<b>Skaičiuojami</b> daiktavardžiai turi daugiskaitą: <i>an apple – two apples</i>, <i>an egg – six eggs</i>. <b>Neskaičiuojami</b> – ne: <i>water, milk, bread, rice, cheese, money, information</i>. Jiems nenaudojame <b>a/an</b> ir nepridedame -s.",
          "Kartais lietuvių ir anglų kalbos skiriasi: lietuviškai „pinigai“ – daugiskaita, o angliškai <b>money</b> – neskaičiuojamas, vienaskaita: <i>The money <b>is</b> on the table.</i> Taip pat <i>advice, furniture, news</i>.",
          "<b>Some</b> – teigiamuose sakiniuose (<i>I need some milk</i>), <b>any</b> – neiginiuose ir klausimuose (<i>We haven't got any eggs. Is there any bread?</i>). Lietuviškai dažnai tiesiog sakome „pieno“, „kiaušinių“ – kilmininku, be jokio žodžio.",
          "Prašant ar siūlant mandagiai sakome <b>some</b> ir klausime: <i>Would you like some tea? Can I have some water?</i>",
          "Kiekio klausimai: <b>How many</b> + skaičiuojami (<i>How many eggs?</i>), <b>How much</b> + neskaičiuojami (<i>How much milk?</i>) ir kaina (<i>How much is it?</i>)."
        ],
        table: [
          ["", "Skaičiuojami", "Neskaičiuojami"],
          ["+", "some apples", "some bread"],
          ["− / ?", "any apples", "any bread"],
          ["Kiekis", "How many apples?", "How much bread?"],
          ["Kiekio vienetai", "a bag of apples", "a loaf of bread, a cup of tea, a bottle of water"]
        ],
        examples: [
          { en: "Can I have a cappuccino and some water, please?", lt: "Ar galiu gauti kapučino ir vandens?" },
          { en: "Would you like some cake?", lt: "Ar norėtum pyrago?" },
          { en: "We haven't got any milk.", lt: "Neturime pieno." },
          { en: "Are there any vegetarian dishes?", lt: "Ar yra vegetariškų patiekalų?" },
          { en: "How many eggs do we need? – Six.", lt: "Kiek kiaušinių mums reikia? – Šešių." },
          { en: "How much sugar do you take? – Just a little.", lt: "Kiek cukraus dedi? – Tik truputį." },
          { en: "I'd like a bottle of water and a piece of cheesecake.", lt: "Norėčiau buteliuko vandens ir gabalėlio sūrio pyrago." }
        ],
        pitfalls: [
          "Neskaičiuojami su a/-s: <i>a bread, breads, an advice, informations</i> ✗ → <b>some bread, a loaf of bread, some advice, information</b> ✓.",
          "„Pinigai“ daugiskaita: <i>The money are…</i> ✗ → <b>The money is…</b> ✓.",
          "Painiojama: <i>How much apples?</i> ✗ → <b>How many apples?</b> ✓."
        ]
      },
      vocab: [
        { en: "bread", lt: "duona" },
        { en: "cheese", lt: "sūris" },
        { en: "milk", lt: "pienas" },
        { en: "eggs", lt: "kiaušiniai" },
        { en: "vegetables / fruit", lt: "daržovės / vaisiai" },
        { en: "chicken / fish / meat", lt: "vištiena / žuvis / mėsa" },
        { en: "rice / pasta", lt: "ryžiai / makaronai" },
        { en: "sandwich", lt: "sumuštinis" },
        { en: "a cup of / a glass of", lt: "puodelis / stiklinė" },
        { en: "a bottle of / a piece of", lt: "butelis / gabalėlis" },
        { en: "menu", lt: "valgiaraštis, meniu" },
        { en: "the bill", lt: "sąskaita" },
        { en: "still / sparkling water", lt: "negazuotas / gazuotas vanduo" }
      ],
      phrases: [
        { en: "Can I have…, please?", lt: "Ar galėčiau gauti…?" },
        { en: "I'd like…", lt: "Norėčiau…" },
        { en: "Eat in or take away?", lt: "Valgysite čia ar išsinešti?" },
        { en: "Could I have the bill, please?", lt: "Ar galėčiau gauti sąskaitą?" },
        { en: "Anything else?", lt: "Dar ko nors?" }
      ],
      quiz: [
        { type: "choice", q: "We haven't got ___ bread.", options: ["some", "any", "a"], answer: 1,
          explain: "Neiginyje – <b>any</b>. „Bread“ neskaičiuojamas, a/an netinka." },
        { type: "choice", q: "How ___ apples do you want?", options: ["much", "many", "any"], answer: 1,
          explain: "Apples – skaičiuojami → <b>How many</b>." },
        { type: "choice", q: "How ___ milk is there?", options: ["much", "many", "some"], answer: 0,
          explain: "Milk – neskaičiuojamas → <b>How much</b>." },
        { type: "choice", q: "Which is correct?", options: ["The money are on the table.", "The money is on the table.", "The moneys are on the table."], answer: 1,
          explain: "„Money“ angliškai – vienaskaita: <b>is</b>." },
        { type: "input", q: "Išversk: Norėčiau puodelio arbatos.", answer: ["I'd like a cup of tea", "I would like a cup of tea", "I'd like a cup of tea, please", "I would like a cup of tea, please"],
          explain: "<b>I'd like</b> + <b>a cup of</b> tea." },
        { type: "order", words: ["have", "the", "i", "can", "bill"], answer: "can i have the bill", lt: "Ar galiu gauti sąskaitą?" }
      ],
      speaking: {
        scenario: "Part 1: You are a waiter in a café in Edinburgh. The learner orders breakfast and drinks for herself and a friend, asks about the menu and pays. Part 2: You and the learner share a flat and plan a shopping list for a dinner party.",
        tasks: [
          "As a waiter, take the order; ask 'Anything else?', 'Eat in or take away?', 'Still or sparkling?'.",
          "Make her ask about the menu: 'Is there any…?', 'Are there any vegetarian…?'.",
          "Bring the bill and let her ask 'How much is it?'.",
          "As a flatmate, check the fridge together: ask 'Have we got any…?', 'How much/many … do we need?' and build a shopping list.",
          "Correct uncountable nouns used with a/an or -s and how much/how many confusion."
        ],
        successCriteria: [
          "Orders politely with 'Can I have…' or 'I'd like…' at least 3 times",
          "Uses some/any correctly at least 4 times",
          "Uses 'How much' and 'How many' correctly at least once each",
          "Uses at least 3 containers/quantities (a cup of, a bottle of, a piece of…)",
          "Treats at least 3 uncountable nouns correctly (no a/an, no -s)"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- 09
    {
      id: "a1plus-09",
      type: "lesson",
      icon: "💪",
      title: "Can / can't: gebėjimai ir prašymai",
      titleEn: "Can / can't – abilities and requests",
      canDo: [
        "Galiu papasakoti, ką moku ir ko nemoku.",
        "Galiu mandagiai paprašyti pagalbos ar leidimo."
      ],
      grammar: {
        title: "Ką galiu, moku ir ko prašau",
        explanation: [
          "<b>Can</b> reiškia ir „galiu“, ir „moku“: <i>I can swim</i> (moku plaukti), <i>I can come at 5</i> (galiu ateiti 5 val.). Po <b>can</b> visada eina veiksmažodis <b>be „to“</b> ir be -s: <i>She can drive</i>.",
          "<b>Can</b> visiems asmenims vienodas – jokios -s: <i>he can, she can, it can</i>. Neiginys: <b>can't</b> (cannot). Klausimas – sukeičiame vietomis: <i>Can you cook?</i> Atsakymas: <i>Yes, I can. / No, I can't.</i>",
          "Su <b>can</b> nereikia <b>do</b>: <i>Can you swim?</i>, ne <i>Do you can swim?</i>",
          "Prašymai: <i>Can you help me, please?</i> Mandagiau: <i>Could you…?</i> Leidimas: <i>Can I open the window?</i>",
          "Tarimas: teiginyje <i>can</i> tariamas silpnai [kən], o <b>can't</b> – ilgai ir aiškiai [kɑːnt]. Taip lengviau atskirti!"
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I can speak Russian."],
          ["−", "He can't swim."],
          ["?", "Can you drive?"],
          ["Prašymas", "Can/Could you help me, please?"],
          ["Leidimas", "Can I sit here?"]
        ],
        examples: [
          { en: "I can speak Lithuanian, Russian and a little English.", lt: "Moku lietuviškai, rusiškai ir šiek tiek angliškai." },
          { en: "My dad can't use a smartphone very well.", lt: "Mano tėtis nelabai moka naudotis išmaniuoju telefonu." },
          { en: "Can you play the guitar? – No, I can't.", lt: "Ar moki groti gitara? – Ne." },
          { en: "Could you speak more slowly, please?", lt: "Ar galėtumėte kalbėti lėčiau?" },
          { en: "Can I pay by card?", lt: "Ar galiu mokėti kortele?" },
          { en: "She can cook really well.", lt: "Ji labai gerai gamina." }
        ],
        pitfalls: [
          "Su „to“: <i>I can to swim</i> ✗ → <b>I can swim</b> ✓.",
          "Su -s: <i>She cans</i>, <i>She can drives</i> ✗ → <b>She can drive</b> ✓.",
          "Su „do“: <i>Do you can…?</i> ✗ → <b>Can you…?</b> ✓."
        ]
      },
      vocab: [
        { en: "swim", lt: "plaukti" },
        { en: "drive", lt: "vairuoti" },
        { en: "ride a bike", lt: "važiuoti dviračiu" },
        { en: "sing / dance", lt: "dainuoti / šokti" },
        { en: "play the piano / guitar", lt: "groti pianinu / gitara" },
        { en: "speak a language", lt: "kalbėti kalba" },
        { en: "draw", lt: "piešti" },
        { en: "ski", lt: "slidinėti" },
        { en: "help", lt: "padėti" },
        { en: "borrow", lt: "pasiskolinti" },
        { en: "well / a little / not at all", lt: "gerai / šiek tiek / visai ne" },
        { en: "repeat", lt: "pakartoti" }
      ],
      phrases: [
        { en: "Can you help me, please?", lt: "Ar galite man padėti?" },
        { en: "Could you repeat that, please?", lt: "Ar galėtumėte pakartoti?" },
        { en: "Can I borrow your pen?", lt: "Ar galiu pasiskolinti tavo rašiklį?" },
        { en: "Sure, no problem.", lt: "Žinoma, jokių problemų." },
        { en: "Sorry, I can't.", lt: "Atsiprašau, negaliu." }
      ],
      quiz: [
        { type: "choice", q: "My sister ___ very well.", options: ["can sings", "can sing", "cans sing"], answer: 1,
          explain: "Po <b>can</b> – veiksmažodis be -s ir be „to“." },
        { type: "choice", q: "___ you drive?", options: ["Do", "Can", "Are"], answer: 1,
          explain: "Su „can“ klausimas: <b>Can you…?</b> – „do“ nereikia." },
        { type: "choice", q: "Can you swim? – No, I ___.", options: ["don't", "can't", "not"], answer: 1,
          explain: "Trumpas atsakymas kartoja „can“: <b>No, I can't</b>." },
        { type: "input", q: "Išversk: Aš nemoku slidinėti.", answer: ["I can't ski", "I cannot ski", "I can not ski"],
          explain: "<b>can't</b> + veiksmažodis." },
        { type: "input", q: "Išversk: Ar galite man padėti?", answer: ["Can you help me", "Could you help me", "Can you help me, please", "Could you help me, please"],
          explain: "Prašymas: <b>Can/Could you help me?</b>" },
        { type: "order", words: ["you", "more", "speak", "could", "slowly"], answer: "could you speak more slowly", lt: "Ar galėtumėte kalbėti lėčiau?" }
      ],
      speaking: {
        scenario: "Part 1: You are organising a summer volunteer camp and are interviewing the learner to find the right role for her. Ask about her skills. Part 2: Role-play small requests: the learner is in a hotel and asks reception for help (Wi-Fi, late checkout, a taxi).",
        tasks: [
          "Ask 'Can you…?' about at least 6 skills (cooking, driving, languages, sport, music, computers) and ask 'How well?'.",
          "Ask what her partner or a family member can and can't do.",
          "Switch roles to the hotel: the learner makes at least 3 polite requests with 'Can/Could you…?' and 'Can I…?'.",
          "Speak a bit fast once so she can practise 'Could you repeat that, please?'.",
          "Correct 'can to', 'can + -s' and 'do you can'."
        ],
        successCriteria: [
          "Says at least 4 things she can do and 3 things she can't do",
          "Uses 'can' without 'to' and without -s in all sentences of the last 5 turns",
          "Gives at least 2 short answers 'Yes, I can / No, I can't'",
          "Makes at least 3 polite requests with Can/Could you…? or Can I…?",
          "Uses 'Could you repeat that, please?' or a similar clarification phrase at least once"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 10
    {
      id: "a1plus-10",
      type: "lesson",
      icon: "🎬",
      title: "Present Continuous: kas vyksta dabar",
      titleEn: "Present Continuous – what's happening now; vs Present Simple",
      canDo: [
        "Galiu papasakoti, ką darau ar kas vyksta šiuo metu.",
        "Galiu atskirti, kada kalbu apie įprotį, o kada – apie dabartinį veiksmą."
      ],
      grammar: {
        title: "Am/is/are + -ing",
        explanation: [
          "<b>Present Continuous</b> rodo, kad veiksmas vyksta <b>dabar, šiuo momentu</b> arba šiomis dienomis. Sudarome: <b>am/is/are + veiksmažodis su -ing</b>: <i>I'm cooking</i>, <i>She's working</i>, <i>They're watching TV</i>.",
          "Lietuvių kalboje yra tik vienas esamasis laikas: „gaminu“ gali reikšti ir „gaminu kasdien“, ir „gaminu dabar“. Angliškai tai du skirtingi laikai: <i>I cook every day</i> (įprotis) ir <i>I'm cooking now</i> (dabar).",
          "Rašyba: <i>make → making</i> (numetame -e), <i>swim → swimming, run → running, sit → sitting</i> (padvigubiname priebalsę), <i>lie → lying</i>.",
          "Neiginys: <i>I'm not working</i>, <i>He isn't sleeping</i>. Klausimas: <i>Are you working? What are you doing?</i>",
          "Žodžiai-signalai: <b>now, right now, at the moment, today, this week, Look! Listen!</b> → Continuous. <b>every day, usually, always, on Mondays</b> → Simple. Kai kurie veiksmažodžiai (like, love, want, know, need) beveik niekada neturi -ing: <i>I want a coffee</i>, ne <i>I'm wanting</i>."
        ],
        table: [
          ["", "Present Simple", "Present Continuous"],
          ["Kada?", "įprastai, visada", "dabar, šiuo metu"],
          ["+", "I work in a bank.", "I'm working from home today."],
          ["−", "She doesn't cook.", "She isn't cooking now."],
          ["?", "What do you do?", "What are you doing?"]
        ],
        examples: [
          { en: "What are you doing? – I'm making dinner.", lt: "Ką veiki? – Gaminu vakarienę." },
          { en: "It's raining, so we're staying at home.", lt: "Lyja, todėl liekame namie." },
          { en: "Look! The children are playing in the snow.", lt: "Žiūrėk! Vaikai žaidžia sniege." },
          { en: "I usually drive to work, but this week I'm taking the bus.", lt: "Paprastai į darbą važiuoju automobiliu, bet šią savaitę važinėju autobusu." },
          { en: "He isn't listening to me!", lt: "Jis manęs neklauso!" },
          { en: "What do you do? – I'm a nurse. But right now I'm studying English.", lt: "Kuo dirbi? – Esu medicinos sesuo. Bet šiuo metu mokausi anglų kalbos." }
        ],
        pitfalls: [
          "Pamirštamas „to be“: <i>I cooking now</i> ✗ → <b>I'm cooking now</b> ✓.",
          "Simple vietoj Continuous: <i>Sorry, I can't talk, I drive</i> ✗ → <b>I'm driving</b> ✓.",
          "„What do you do?“ reiškia „Kuo dirbi?“, o „Ką dabar veiki?“ – <b>What are you doing?</b>"
        ]
      },
      vocab: [
        { en: "right now / at the moment", lt: "būtent dabar / šiuo metu" },
        { en: "rain / snow", lt: "lyti / snigti" },
        { en: "wait for", lt: "laukti (ko)" },
        { en: "look for", lt: "ieškoti" },
        { en: "talk on the phone", lt: "kalbėti telefonu" },
        { en: "listen to", lt: "klausytis" },
        { en: "sit / stand", lt: "sėdėti / stovėti" },
        { en: "wear", lt: "dėvėti, vilkėti" },
        { en: "smile / laugh", lt: "šypsotis / juoktis" },
        { en: "take a photo", lt: "fotografuoti" },
        { en: "hold", lt: "laikyti" },
        { en: "these days", lt: "šiomis dienomis" }
      ],
      phrases: [
        { en: "What are you doing?", lt: "Ką veiki (dabar)?" },
        { en: "I'm on my way.", lt: "Jau einu / važiuoju." },
        { en: "Can I call you back? I'm busy at the moment.", lt: "Ar galiu tau perskambinti? Šiuo metu esu užsiėmusi." },
        { en: "Nothing special.", lt: "Nieko ypatingo." }
      ],
      quiz: [
        { type: "choice", q: "Shh! The baby ___.", options: ["sleeps", "is sleeping", "sleeping"], answer: 1,
          explain: "Vyksta dabar → <b>is sleeping</b>." },
        { type: "choice", q: "I ___ to work every day.", options: ["walk", "am walking", "walking"], answer: 0,
          explain: "„Every day“ – įprotis → Present Simple <b>walk</b>." },
        { type: "choice", q: "What ___? – I'm a teacher.", options: ["are you doing", "do you do", "you do"], answer: 1,
          explain: "Klausimas apie profesiją: <b>What do you do?</b>" },
        { type: "choice", q: "She ___ a red coat today.", options: ["wears", "is wearing", "wear"], answer: 1,
          explain: "„Today“ – dabartinė situacija → <b>is wearing</b>." },
        { type: "input", q: "Išversk: Šiuo metu lyja.", answer: ["It's raining at the moment", "It is raining at the moment", "It's raining now", "It is raining now", "At the moment it's raining", "At the moment it is raining", "It's raining right now", "It is raining right now"],
          explain: "Orai dabar: <b>It's raining</b> (+ at the moment / now)." },
        { type: "order", words: ["are", "doing", "you", "what", "now"], answer: "what are you doing now", lt: "Ką dabar veiki?" }
      ],
      speaking: {
        scenario: "You are the learner's friend calling her on a video call. Ask what she is doing right now, what is happening around her and what she is doing these days. Then describe an imaginary busy street scene (or ask her to describe a photo/the view from her window) to practise the -ing form. Finally compare her normal week with this week.",
        tasks: [
          "Ask 'What are you doing?' and get her to describe what she and people around her are doing now.",
          "Ask her to look out of the window (or imagine a park) and describe at least 5 things people are doing.",
          "Ask about her normal routine vs. this week ('Usually I…, but this week I'm…').",
          "Include at least two questions where she must choose Simple ('What do you do?') vs Continuous ('What are you doing?').",
          "Correct missing am/is/are and wrong tense choice."
        ],
        successCriteria: [
          "Produces at least 6 correct Present Continuous sentences with am/is/are + -ing",
          "Uses at least 2 negative or question forms of Present Continuous",
          "Makes at least 2 correct contrasts between Present Simple and Present Continuous",
          "Answers 'What do you do?' and 'What are you doing?' correctly and differently",
          "Spells/pronounces at least 3 -ing forms correctly (e.g. making, sitting, running)"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- 11
    {
      id: "a1plus-11",
      type: "lesson",
      icon: "❓",
      title: "Klausiamieji žodžiai: trumpas pokalbis",
      titleEn: "Question words – small talk",
      canDo: [
        "Galiu užduoti įvairius klausimus ir palaikyti trumpą pokalbį su nepažįstamuoju.",
        "Galiu parodyti susidomėjimą ir užduoti papildomą klausimą."
      ],
      grammar: {
        title: "What, where, when, who, why, how, which, whose",
        explanation: [
          "Klausiamieji žodžiai: <b>what</b> (ką, koks), <b>where</b> (kur), <b>when</b> (kada), <b>who</b> (kas, kas toks), <b>why</b> (kodėl), <b>how</b> (kaip), <b>which</b> (kuris – iš kelių pasirinkimų), <b>whose</b> (kieno).",
          "Svarbiausia – <b>žodžių tvarka</b>: klausiamasis žodis + pagalbinis (do/does/am/is/are/can) + veiksnys + veiksmažodis. <i>Where <b>do you</b> live? What <b>is she</b> doing? When <b>can we</b> meet?</i> Lietuviškai sakome „Kur tu gyveni?“ – angliškai negalima „Where you live?“.",
          "Naudingi junginiai su <b>how</b>: <i>How old…? How long…? How far…? How much…? How many…? How often…?</i> Su <b>what</b>: <i>What time…? What kind of…?</i>",
          "Kai <b>who</b> ar <b>what</b> yra pats veiksnys, „do“ nereikia: <i>Who lives here?</i> (Kas čia gyvena?), bet <i>Who do you live with?</i> (Su kuo gyveni?).",
          "Pokalbio gudrybė: atsakyk ir grąžink klausimą – <i>…And you? What about you?</i>"
        ],
        table: [
          ["Klausiamasis", "Pagalbinis", "Veiksnys", "Veiksmažodis…"],
          ["Where", "do", "you", "work?"],
          ["What", "does", "she", "like?"],
          ["Why", "are", "you", "learning English?"],
          ["When", "can", "we", "meet?"]
        ],
        examples: [
          { en: "Where do you live? – In Šiauliai.", lt: "Kur gyveni? – Šiauliuose." },
          { en: "Why are you learning English? – For my job.", lt: "Kodėl mokaisi anglų kalbos? – Dėl darbo." },
          { en: "Who's that woman? – That's my boss.", lt: "Kas ta moteris? – Tai mano vadovė." },
          { en: "Which do you prefer, tea or coffee?", lt: "Ką labiau mėgsti – arbatą ar kavą?" },
          { en: "Whose phone is this?", lt: "Kieno šitas telefonas?" },
          { en: "How long does it take to get there?", lt: "Kiek laiko užtrunka ten nuvykti?" },
          { en: "What kind of music do you like?", lt: "Kokią muziką mėgsti?" }
        ],
        pitfalls: [
          "Be pagalbinio veiksmažodžio: <i>Where you work?</i> ✗ → <b>Where do you work?</b> ✓.",
          "Neteisinga tvarka: <i>What she is doing?</i> ✗ → <b>What is she doing?</b> ✓.",
          "Painiojama: <i>Who's phone?</i> ✗ → <b>Whose phone?</b> ✓ (who's = who is)."
        ]
      },
      vocab: [
        { en: "what", lt: "kas, ką, koks" },
        { en: "where", lt: "kur" },
        { en: "when", lt: "kada" },
        { en: "who", lt: "kas (asmuo)" },
        { en: "why / because", lt: "kodėl / nes" },
        { en: "how", lt: "kaip" },
        { en: "which", lt: "kuris (iš kelių)" },
        { en: "whose", lt: "kieno" },
        { en: "weather", lt: "oras" },
        { en: "hobby / free time", lt: "pomėgis / laisvalaikis" },
        { en: "prefer", lt: "labiau mėgti, teikti pirmenybę" },
        { en: "holiday", lt: "atostogos" }
      ],
      phrases: [
        { en: "What about you?", lt: "O tu?" },
        { en: "Really? That's interesting!", lt: "Tikrai? Įdomu!" },
        { en: "What do you do in your free time?", lt: "Ką veiki laisvalaikiu?" },
        { en: "Lovely weather today, isn't it?", lt: "Šiandien puikus oras, ar ne?" },
        { en: "How's it going?", lt: "Kaip sekasi?" }
      ],
      quiz: [
        { type: "choice", q: "___ is your birthday? – In May.", options: ["Where", "When", "Who"], answer: 1,
          explain: "Klausiame apie laiką → <b>When</b>." },
        { type: "choice", q: "___ bag is this? – It's Laura's.", options: ["Who's", "Whose", "Which"], answer: 1,
          explain: "„Kieno“ = <b>Whose</b>." },
        { type: "choice", q: "Which question is correct?", options: ["Where you live?", "Where do you live?", "Where you do live?"], answer: 1,
          explain: "Tvarka: klausiamasis žodis + <b>do</b> + veiksnys + veiksmažodis." },
        { type: "choice", q: "___ are you learning English? – Because I want to travel.", options: ["Why", "How", "What"], answer: 0,
          explain: "Atsakymas su „because“ → klausimas <b>Why</b>." },
        { type: "input", q: "Išversk: Ką ji veikia laisvalaikiu?", answer: ["What does she do in her free time", "What does she do in her spare time"],
          explain: "What + <b>does</b> she + do + in <b>her</b> free time." },
        { type: "order", words: ["kind", "what", "music", "of", "you", "do", "like"], answer: "what kind of music do you like", lt: "Kokią muziką mėgsti?" }
      ],
      speaking: {
        scenario: "You and the learner are sitting next to each other on a long flight from Vilnius to London. Start some small talk. You are friendly and talkative. Later, swap roles: she must keep the conversation going by asking you questions.",
        tasks: [
          "Start with small talk (weather, the flight, why she is travelling) and ask at least 6 questions using different question words.",
          "Then ask her to take the lead: she must ask you at least 6 questions using at least 5 different question words, including 'which' and 'how + adjective' (How long/How far/How often).",
          "Encourage follow-up questions ('Why?', 'What kind of…?', 'Really? Where…?') and returning questions ('What about you?').",
          "Leave a lost item on 'the seat' so she can ask 'Whose … is this?'.",
          "Correct word-order errors in questions immediately and ask her to repeat correctly."
        ],
        successCriteria: [
          "Asks at least 6 questions with correct word order (question word + auxiliary + subject + verb)",
          "Uses at least 6 different question words, including whose and which",
          "Asks at least 2 follow-up questions that react to the tutor's answer",
          "Uses 'What about you?' or 'And you?' at least once",
          "Keeps the conversation going for at least 10 turns without long pauses"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- 12
    {
      id: "a1plus-12",
      type: "lesson",
      icon: "📅",
      title: "In / on / at: laikas, datos ir planai",
      titleEn: "Prepositions of time (in/on/at) + dates, time, days – making plans",
      canDo: [
        "Galiu pasakyti laiką, datą ir savaitės dieną.",
        "Galiu susitarti dėl susitikimo: pasiūlyti laiką, sutikti ar atsisakyti."
      ],
      grammar: {
        title: "Kada? In, on, at",
        explanation: [
          "<b>At</b> – tikslus laikas ir kai kurios frazės: <i>at 7 o'clock, at half past six, at noon, at night, at the weekend</i>.",
          "<b>On</b> – dienos ir datos: <i>on Monday, on Fridays, on 5th May, on my birthday, on Christmas Day</i>.",
          "<b>In</b> – ilgesni laikotarpiai: mėnesiai, metai, metų laikai ir dienos dalys: <i>in June, in 2025, in summer, in the morning, in the evening</i>.",
          "Datas sakome kelintiniais skaitvardžiais: <i>the first, the second, the third, the fourth…</i> Rašome <i>5 May</i> arba <i>May 5th</i>, o sakome <i>the fifth of May</i>. Savaičių dienos ir mėnesiai angliškai rašomi <b>didžiąja raide</b>: <i>Monday, March</i>.",
          "Laikas: <i>It's half past seven</i> (7:30), <i>quarter past three</i> (3:15), <i>quarter to nine</i> (8:45). Atkreipk dėmesį: lietuviškai „pusė aštuonių“ = 7:30, o angliškai <b>half past seven</b> (pusė <b>po</b> septynių)! Su <b>this, next, every, tomorrow</b> prielinksnio nereikia: <i>next Friday</i>, ne <i>on next Friday</i>."
        ],
        table: [
          ["Prielinksnis", "Kada naudojame", "Pavyzdžiai"],
          ["at", "valanda, tikslus laikas", "at 6 pm, at noon, at night, at the weekend"],
          ["on", "diena, data", "on Monday, on 3rd July, on my birthday"],
          ["in", "mėnuo, metai, metų laikas, dienos dalis", "in May, in 2026, in winter, in the morning"],
          ["—", "this / next / last / every / tomorrow", "next Monday, this evening, tomorrow"]
        ],
        examples: [
          { en: "Are you free on Saturday? – Yes, what time?", lt: "Ar šeštadienį laisva? – Taip, kelintą valandą?" },
          { en: "Let's meet at half past six in front of the cinema.", lt: "Susitikime pusę septynių priešais kino teatrą." },
          { en: "My birthday is on the twelfth of March.", lt: "Mano gimtadienis – kovo dvyliktą." },
          { en: "We usually go to the seaside in July.", lt: "Paprastai liepą važiuojame prie jūros." },
          { en: "I work in the morning, but I'm free in the afternoon.", lt: "Ryte dirbu, bet popiet esu laisva." },
          { en: "Sorry, I can't on Friday. How about next Tuesday?", lt: "Atsiprašau, penktadienį negaliu. O kaip kitą antradienį?" }
        ],
        pitfalls: [
          "Valandų painiava: lietuviškas „pusė aštuonių“ (7:30) verčiamas <i>half eight</i> – britai tai supras kaip 8:30! Saugiau sakyti <b>half past seven</b> arba <b>seven thirty</b>.",
          "Prielinksnis su next/this: <i>on next Monday, in this week</i> ✗ → <b>next Monday, this week</b> ✓.",
          "Painiojami prielinksniai: <i>in Monday, at summer, on the morning</i> ✗ → <b>on Monday, in summer, in the morning</b> ✓."
        ]
      },
      vocab: [
        { en: "Monday, Tuesday, Wednesday", lt: "pirmadienis, antradienis, trečiadienis" },
        { en: "Thursday, Friday, Saturday, Sunday", lt: "ketvirtadienis, penktadienis, šeštadienis, sekmadienis" },
        { en: "January … December", lt: "sausis … gruodis" },
        { en: "spring / summer / autumn / winter", lt: "pavasaris / vasara / ruduo / žiema" },
        { en: "first, second, third, fourth", lt: "pirmas, antras, trečias, ketvirtas" },
        { en: "half past", lt: "pusė (po valandos)" },
        { en: "quarter past / quarter to", lt: "penkiolika po / be penkiolikos" },
        { en: "free / busy", lt: "laisvas / užimtas" },
        { en: "appointment", lt: "susitikimas (pas gydytoją, kirpėją ir pan.)" },
        { en: "tomorrow / the day after tomorrow", lt: "rytoj / poryt" },
        { en: "next week / this weekend", lt: "kitą savaitę / šį savaitgalį" },
        { en: "noon / midnight", lt: "vidurdienis / vidurnaktis" }
      ],
      phrases: [
        { en: "Are you free on…?", lt: "Ar esi laisva …?" },
        { en: "How about…? / What about…?", lt: "O kaip dėl…?" },
        { en: "That sounds great!", lt: "Puikiai skamba!" },
        { en: "Sorry, I can't. I'm busy.", lt: "Atsiprašau, negaliu. Esu užimta." },
        { en: "See you on Friday at seven!", lt: "Iki penktadienio septintą!" }
      ],
      quiz: [
        { type: "choice", q: "The meeting is ___ Tuesday.", options: ["in", "on", "at"], answer: 1,
          explain: "Savaitės dienos → <b>on</b>." },
        { type: "choice", q: "I always drink coffee ___ the morning.", options: ["in", "on", "at"], answer: 0,
          explain: "Dienos dalys → <b>in</b> the morning." },
        { type: "choice", q: "Let's meet ___ 8 o'clock.", options: ["in", "on", "at"], answer: 2,
          explain: "Tikslus laikas → <b>at</b>." },
        { type: "choice", q: "Which is correct?", options: ["See you on next Friday.", "See you next Friday.", "See you in next Friday."], answer: 1,
          explain: "Su <b>next</b> prielinksnio nereikia." },
        { type: "input", q: "Kaip angliškai pasakyti 7:30? (žodžiais)", answer: ["half past seven", "seven thirty", "it's half past seven", "it is half past seven", "it's seven thirty", "it is seven thirty"],
          explain: "7:30 = <b>half past seven</b> arba <b>seven thirty</b> (ne „half eight“ lietuviška prasme!)." },
        { type: "order", words: ["you", "are", "free", "on", "saturday"], answer: "are you free on saturday", lt: "Ar esi laisva šeštadienį?" }
      ],
      speaking: {
        scenario: "Part 1: You are the learner's English-speaking friend who wants to meet up this week. You are very busy, so you need to negotiate a day and time. Part 2: You are a receptionist at a hair salon and the learner calls to book an appointment.",
        tasks: [
          "Suggest meeting and reject the first 1–2 times she proposes, so she has to suggest alternatives ('How about…?', 'Are you free on…?').",
          "Agree on a day, a time and a place; ask her to confirm everything at the end ('So, see you on…at…').",
          "Ask about important dates: her birthday, favourite month/season, when she usually goes on holiday.",
          "As a receptionist, offer appointment slots with exact times (quarter past, half past, quarter to) and dates; let her choose and confirm.",
          "Correct wrong in/on/at, prepositions used with next/this, and 'half eight'-type time errors."
        ],
        successCriteria: [
          "Uses in/on/at correctly at least 6 times",
          "Says at least 3 times correctly, including one with 'half past' or 'quarter'",
          "Says at least one full date correctly (e.g. 'on the twelfth of March')",
          "Suggests, accepts and declines plans using at least 3 phrases from the lesson",
          "Confirms the final arrangement with day, time and place in one clear sentence"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- 13
    {
      id: "a1plus-13",
      type: "checkpoint",
      icon: "🏆",
      title: "A1+ lygio egzaminas",
      titleEn: "A1+ level checkpoint",
      canDo: [
        "Galiu prisistatyti, papasakoti apie savo šeimą, namus ir dienotvarkę.",
        "Galiu užsisakyti kavinėje, apsipirkti ir susitarti dėl susitikimo.",
        "Galiu užduoti įvairius klausimus ir palaikyti paprastą pokalbį."
      ],
      grammar: {
        title: "Ką kartojame",
        explanation: [
          "<b>To be</b> (am/is/are) ir <b>Present Simple</b>: <i>I work, she works, Do you…? Does he…? I don't…, she doesn't…</i> – nepamiršk <b>-s</b> trečiajame asmenyje ir <b>do/does</b> klausimuose.",
          "<b>Dažnumo prieveiksmiai</b> (prieš veiksmažodį, bet po „to be“), <b>have got</b>, savybiniai įvardžiai (<i>my, his, her…</i>) ir <b>'s</b>.",
          "<b>There is / there are</b>, vietos prielinksniai, artikeliai <b>a/an/the</b>, <b>this/that/these/those</b>, daugiskaita, <b>some/any</b>, <b>How much / How many</b>.",
          "<b>Can / can't</b>, <b>Present Continuous</b> ir jo skirtumas nuo Present Simple, klausiamieji žodžiai ir teisinga klausimų tvarka.",
          "Laiko prielinksniai <b>in / on / at</b>, datos ir laikas. Egzamine AI mokytojas kalbėsis su tavimi apie visas šias temas – kalbėk drąsiai ir pilnais sakiniais!"
        ],
        examples: [
          { en: "I'm Rūta. I'm from Lithuania and I'm a nurse.", lt: "Aš Rūta. Esu iš Lietuvos, dirbu medicinos seserimi." },
          { en: "My husband works in an office. He usually gets up at 7.", lt: "Mano vyras dirba biure. Jis paprastai keliasi 7 valandą." },
          { en: "There are two bedrooms in our flat, and there's a park next to it.", lt: "Mūsų bute yra du miegamieji, o šalia – parkas." },
          { en: "Can I have a cup of tea and some cake, please?", lt: "Ar galėčiau gauti puodelį arbatos ir pyrago?" },
          { en: "I'm not working today. I'm learning English!", lt: "Šiandien nedirbu. Mokausi anglų kalbos!" },
          { en: "Are you free on Friday at half past six?", lt: "Ar esi laisva penktadienį pusę septynių?" }
        ],
        pitfalls: [
          "Patikrink kiekvieną klausimą: ar yra <b>do/does/am/is/are/can</b> prieš veiksnį?",
          "Trečiasis asmuo: <b>she works</b>, bet <b>she doesn't work</b> / <b>does she work?</b>",
          "Nepamiršk artikelių: <b>a</b> job, <b>an</b> apple, <b>the</b> bill."
        ]
      },
      vocab: [],
      phrases: [
        { en: "Sorry, could you repeat that?", lt: "Atsiprašau, ar galėtumėte pakartoti?" },
        { en: "Let me think…", lt: "Leiskite pagalvoti…" },
        { en: "I'm not sure, but I think…", lt: "Nesu tikra, bet manau…" },
        { en: "How do you say … in English?", lt: "Kaip angliškai pasakyti …?" }
      ],
      quiz: [
        { type: "choice", q: "My mother ___ in a school. She's a teacher.", options: ["work", "works", "is work"], answer: 1,
          explain: "My mother = she → <b>works</b>." },
        { type: "choice", q: "___ any milk in the fridge?", options: ["Is there", "Are there", "There is"], answer: 0,
          explain: "Milk – neskaičiuojamas, vienaskaita → <b>Is there</b>." },
        { type: "choice", q: "Look! It ___.", options: ["snows", "is snowing", "snowing"], answer: 1,
          explain: "Vyksta dabar („Look!“) → <b>is snowing</b>." },
        { type: "choice", q: "My birthday is ___ June.", options: ["on", "at", "in"], answer: 2,
          explain: "Mėnuo → <b>in</b> June." },
        { type: "input", q: "Išversk: Ji niekada negeria kavos.", answer: ["She never drinks coffee"],
          explain: "<b>never</b> + drink<b>s</b> – be „doesn't“." },
        { type: "order", words: ["does", "where", "your", "sister", "work"], answer: "where does your sister work", lt: "Kur dirba tavo sesuo?" }
      ],
      speaking: {
        scenario: "This is the A1+ level speaking exam. You are a friendly examiner. Run a structured conversation of about 10–15 minutes in four parts: (1) personal introduction and family, (2) daily routine, habits and home/town, (3) two short role-plays – ordering in a café and arranging to meet a friend (day, time, place), (4) describing what is happening now (in a room, street or imagined picture) and asking the examiner questions. Do not teach during the exam; only note errors. At the end give a short, encouraging summary in simple English with 2–3 strengths and 2–3 things to practise, and say whether the learner is ready for A2.",
        tasks: [
          "Part 1: Ask about name, country, job, age and family (to be, have got, possessives, 's).",
          "Part 2: Ask about her weekday routine, how often she does things, her partner's routine (Present Simple incl. -s, frequency adverbs) and her home/town (there is/are, prepositions).",
          "Part 3: Role-play a café order (some/any, how much, Can I have…) and arranging a meeting (in/on/at, can/can't, times and dates).",
          "Part 4: Ask her to describe what is happening now (Present Continuous) and to ask you at least 5 questions with different question words.",
          "Finish with feedback: strengths, typical errors noticed (e.g. missing -s, articles, question word order) and a readiness verdict for A2."
        ],
        successCriteria: [
          "Uses am/is/are and Present Simple (including he/she -s, don't/doesn't) correctly in at least 80% of relevant sentences",
          "Asks at least 5 correctly formed questions using at least 4 different question words and do/does/can/be",
          "Completes both role-plays (café order and meeting arrangement) successfully with polite phrases",
          "Uses there is/are, some/any, a/an/the and in/on/at correctly at least 3 times each",
          "Produces at least 4 correct Present Continuous sentences and contrasts them with a habit at least once"
        ],
        minLearnerTurns: 16
      }
    }
  ]
});
