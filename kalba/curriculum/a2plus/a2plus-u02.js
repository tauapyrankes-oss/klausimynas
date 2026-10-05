(window.UNITS = window.UNITS || {})["a2plus-u02"] = {
  id: "a2plus-u02",
  lessons: [
    // ───────────────────────── l01 for / since ─────────────────────────
    {
      id: "a2plus-u02-l01",
      type: "lesson",
      kind: "grammar",
      icon: "⏳",
      title: "Present Perfect su for / since",
      titleEn: "Present perfect with for and since; How long…?",
      sources: ["bc-grammar-a1a2", "egp", "core-inventory", "lt-negative-transfer"],
      canDo: [
        "Galiu pasakyti, kiek laiko gyvenu, dirbu ar pažįstu žmogų.",
        "Galiu paklausti „How long have you…?“ ir atsakyti su for arba since."
      ],
      grammar: {
        title: "Kiek laiko? – Present Perfect su for ir since",
        explanation: [
          "Kai kažkas <b>prasidėjo praeityje ir tebesitęsia dabar</b>, lietuviškai sakome esamuoju laiku: „Gyvenu čia penkerius metus.“ Angliškai čia reikia <b>Present Perfect</b>: <code>I've lived here for five years.</code> Tai viena dažniausių lietuvių klaidų – <i>I live here for five years</i> anglui reiškia kažką neaiškaus.",
          "Klausimas apie trukmę: <code>How long have you + V3…?</code> – <code>How long have you lived in Vilnius?</code> <code>How long have you worked there?</code> <code>How long have you known Tomas?</code> <code>How long have you had your car?</code>",
          "<code>for</code> + <b>laiko trukmė</b> (kiek laiko): <i>for two years, for six months, for a long time, for ages, for three days</i>. <code>since</code> + <b>pradžios taškas</b> (nuo kada): <i>since 2018, since March, since Monday, since I was a child, since I moved here</i>.",
          "Šis laikas ypač dažnas su <b>būsenos</b> veiksmažodžiais: <code>live, work, know, have, be</code>. <code>I've known her since school.</code> <code>We've had this flat for ten years.</code> <code>She's been a teacher since 2015.</code>",
          "Palygink su Past Simple: <code>I lived in Kaunas for ten years</code> – gyvenau, bet <b>nebegyvenu</b> (baigta). <code>I've lived in Kaunas for ten years</code> – gyvenu iki šiol. Jei nori pasakyti, <b>kada</b> prasidėjo, klausk Past Simple: <code>When did you move here?</code>"
        ],
        table: [
          ["for + trukmė", "since + pradžios taškas"],
          ["for ten minutes", "since 9 o'clock"],
          ["for three weeks", "since Monday"],
          ["for two years", "since 2023"],
          ["for a long time / for ages", "since I was a child"],
          ["I've lived here for 5 years.", "I've lived here since 2020."]
        ],
        examples: [
          { en: "How long have you lived in this flat? – For about three years.", lt: "Kiek laiko gyveni šiame bute? – Maždaug trejus metus." },
          { en: "I've worked at the hospital since 2019.", lt: "Ligoninėje dirbu nuo 2019 metų." },
          { en: "We've known each other since we were children.", lt: "Pažįstame vienas kitą nuo vaikystės." },
          { en: "She's had her dog for six months.", lt: "Ji turi šunį jau šešis mėnesius." },
          { en: "I haven't seen my cousin for ages.", lt: "Nemačiau pusbrolio (pusseserės) jau labai seniai." },
          { en: "He's been in hospital since Friday.", lt: "Jis ligoninėje nuo penktadienio." },
          { en: "I lived in Klaipėda for five years, but now I live in Vilnius.", lt: "Penkerius metus gyvenau Klaipėdoje, bet dabar gyvenu Vilniuje." }
        ],
        pitfalls: [
          "Lietuviškas esamasis laikas angliškai tampa Present Perfect: <i>I live here for five years.</i> → <b>I've lived here for five years.</b> <i>I know him since school.</i> → <b>I've known him since school.</b>",
          "„Nuo“ + trukmė: <i>since five years</i> – neteisinga. Kai yra skaičius ir laiko vienetas (5 metai, 2 savaitės) – <b>for</b>: <b>for five years</b>. <i>Since</i> – tik su tašku laike.",
          "<i>How long do you live here?</i> → <b>How long have you lived here?</b> Ir: <i>from 2019</i> šioje struktūroje netinka – <b>since 2019</b>."
        ]
      },
      vocab: [
        { en: "How long…?", lt: "Kiek laiko…?" },
        { en: "for", lt: "(tam tikrą laiką) – trukmė" },
        { en: "since", lt: "nuo (kada)" },
        { en: "for ages", lt: "labai seniai, ilgą laiką" },
        { en: "for a while", lt: "kurį laiką" },
        { en: "since I was a child", lt: "nuo vaikystės" },
        { en: "know – knew – known", lt: "pažinoti, žinoti" },
        { en: "have – had – had", lt: "turėti" },
        { en: "move (to)", lt: "persikelti, persikraustyti (į)" },
        { en: "a neighbourhood", lt: "rajonas, apylinkė" },
        { en: "a colleague", lt: "kolega" },
        { en: "be married", lt: "būti susituokusiam" },
        { en: "own – owned", lt: "turėti nuosavybėje" }
      ],
      phrases: [
        { en: "How long have you lived here?", lt: "Kiek laiko čia gyveni?" },
        { en: "How long have you known each other?", lt: "Kiek laiko pažįstate vienas kitą?" },
        { en: "For about ten years.", lt: "Maždaug dešimt metų." },
        { en: "Since I was a student.", lt: "Nuo tada, kai buvau studentas (-ė)." },
        { en: "I haven't seen you for ages!", lt: "Seniai tavęs nemačiau!" },
        { en: "When did you move here?", lt: "Kada čia persikraustei?" }
      ],
      quiz: [
        { type: "choice", q: "I've lived in this flat ___ 2018.", options: ["for", "since", "ago"], answer: 1,
          explain: "2018 – pradžios taškas → <b>since</b>." },
        { type: "choice", q: "We've known each other ___ ten years.", options: ["since", "for", "from"], answer: 1,
          explain: "Dešimt metų – trukmė → <b>for</b>." },
        { type: "choice", q: "How long ___ you had your car?", options: ["do", "have", "are"], answer: 1,
          explain: "<b>How long have you had…?</b> – Present Perfect." },
        { type: "choice", q: "She ___ here since March.", options: ["works", "has worked", "is working"], answer: 1,
          explain: "Prasidėjo kovą ir tęsiasi → <b>has worked</b>." },
        { type: "choice", q: "Kuris sakinys teisingas?", options: ["I live in Vilnius for five years.", "I've lived in Vilnius for five years.", "I've lived in Vilnius since five years."], answer: 1,
          explain: "Tęsiasi iki dabar → <b>have lived</b>; trukmė → <b>for</b>." },
        { type: "input", q: "Įrašyk for arba since: I haven't eaten ___ breakfast.", answer: ["since"],
          explain: "Pusryčiai – laiko taškas → <b>since</b>." },
        { type: "input", q: "Išversk: Pažįstu Joną nuo vaikystės.", answer: ["I have known Jonas since I was a child", "I've known Jonas since I was a child", "I've known Jonas since childhood", "I have known Jonas since childhood", "I've known Jonas since we were children", "I have known Jonas since we were children", "I've known Jonas since I was a kid", "I've known Jonas since we were kids", "I have known Jonas since we were kids"],
          explain: "Lietuviškas „pažįstu“ → <b>I've known</b>; „nuo vaikystės“ → <b>since I was a child</b>." },
        { type: "order", words: ["how", "long", "have", "you", "worked", "there"], answer: "how long have you worked there", lt: "Kiek laiko ten dirbi?",
          explain: "<b>How long + have + veiksnys + V3</b>." }
      ],
      speaking: {
        scenario: "You are a friendly new neighbour who has just moved into the learner's building. Over a cup of tea you get to know each other: how long you have lived in the area, worked in your jobs, known your friends, had your pets or hobbies. Then compare with how things were in the past.",
        tasks: [
          "Ask the learner at least 5 'How long have you…?' questions (live in your flat/town, work/study, know your best friend, have your phone/car/pet, do your hobby).",
          "Make sure the learner answers with both 'for' and 'since' at least twice each; if they answer with only a time phrase, ask them to say the full sentence.",
          "Ask 'When did you move / start…?' after one of the answers to contrast with the past simple.",
          "Tell the learner about yourself with one deliberate error (I live here since May) and ask the learner to correct you.",
          "Ask the learner to ask YOU at least 3 'How long have you…?' questions."
        ],
        successCriteria: [
          "Uses the present perfect (not the present simple) with 'for/since' in at least 5 sentences",
          "Chooses 'for' (period) and 'since' (point) correctly at least twice each",
          "Asks at least 3 correct 'How long have you…?' questions",
          "Uses the past simple correctly for 'When did you…?' questions and answers"
        ],
        minLearnerTurns: 9
      }
    },

    // ───────────────────────── l02 used to ─────────────────────────
    {
      id: "a2plus-u02-l02",
      type: "lesson",
      kind: "grammar",
      icon: "📼",
      title: "Used to",
      titleEn: "Used to – past habits and states",
      sources: ["bc-grammar-a1a2", "egp", "core-inventory"],
      canDo: [
        "Galiu papasakoti, kaip gyvenau anksčiau ir kas pasikeitė.",
        "Galiu palyginti savo miestą ar gyvenimą praeityje ir dabar."
      ],
      grammar: {
        title: "Used to – „anksčiau (būdavo)…, bet dabar nebe“",
        explanation: [
          "<code>used to + veiksmažodžio bazinė forma</code> reiškia, kad kažkas <b>anksčiau kartodavosi arba buvo tiesa, bet dabar nebe</b>. Lietuviškai sakome „anksčiau…“ arba dažninį būtąjį laiką: <code>I used to play football.</code> = Anksčiau žaisdavau futbolą (dabar nebežaidžiu).",
          "Tinka <b>įpročiams</b> (<i>I used to walk to school</i> – vaikščiodavau) ir <b>būsenoms</b> (<i>I used to have long hair. There used to be a cinema here.</i> – turėjau, buvo). Forma visiems asmenims ta pati: <code>I / you / she / they used to…</code>",
          "<b>Neiginys ir klausimas</b> su <code>did</code>, o tada <code>use to</code> – <b>be d</b>: <code>I didn't use to like coffee.</code> <code>Did you use to live in the countryside?</code> Trumpi atsakymai: <code>Yes, I did. / No, I didn't.</code>",
          "<b>Used to</b> vartojamas tik <b>praeičiai</b>. Dabarties įpročiams – Present Simple su <i>usually</i>: <code>I usually go to the gym.</code> (ne <i>I use to go</i>). Vienkartiniam įvykiui – Past Simple: <code>I moved to Vilnius in 2015.</code>",
          "Kalbėdami apie <b>pokyčius</b> dažnai jungiame praeitį ir dabartį: <code>There used to be a market here, but now there's a shopping centre.</code> <code>I used to live with my parents, but now I rent a flat.</code> Naudinga frazė: <code>…, but not any more.</code>",
          "Tarimas: <code>used to</code> tariamas /ˈjuːstə/ – „jūstė“, su <b>s</b>, ne z, ir viskas sujungta."
        ],
        table: [
          ["Forma", "Pavyzdys"],
          ["+", "I used to live in a village."],
          ["–", "I didn't use to like vegetables."],
          ["?", "Did you use to walk to school? – Yes, I did."],
          ["būsena", "There used to be a cinema here."],
          ["dabar (palyginimui)", "…but now I live in the city. / …but not any more."]
        ],
        examples: [
          { en: "I used to live in a small town, but now I live in Vilnius.", lt: "Anksčiau gyvenau mažame miestelyje, o dabar gyvenu Vilniuje." },
          { en: "My grandparents used to have a farm.", lt: "Mano seneliai anksčiau turėjo ūkį." },
          { en: "Did you use to play outside a lot when you were a child?", lt: "Ar vaikystėje daug žaisdavai lauke?" },
          { en: "I didn't use to drink coffee. Now I drink three cups a day!", lt: "Anksčiau negerdavau kavos. Dabar išgeriu tris puodelius per dieną!" },
          { en: "There used to be a bakery on this corner.", lt: "Ant šio kampo anksčiau buvo kepykla." },
          { en: "We used to go to the seaside every summer.", lt: "Kiekvieną vasarą važiuodavome prie jūros." },
          { en: "This street used to be very quiet, but not any more.", lt: "Ši gatvė anksčiau buvo labai rami, bet dabar nebe." }
        ],
        pitfalls: [
          "<i>I use to go to the gym every day.</i> – dabarčiai <i>used to</i> netinka. Sakyk <b>I usually go to the gym.</b>",
          "Neiginyje ir klausime po <i>did</i> – <b>use</b>, ne <i>used</i>: <i>Did you used to…?</i> → <b>Did you use to…?</b>",
          "Lietuviams kyla pagunda versti „anksčiau“ žodžiu <i>before</i>: <i>Before I lived in Kaunas.</i> Tai skamba nenatūraliai. Geriau: <b>I used to live in Kaunas.</b>"
        ]
      },
      vocab: [
        { en: "used to", lt: "anksčiau (darydavau / būdavo)" },
        { en: "not any more", lt: "jau nebe" },
        { en: "these days", lt: "šiais laikais, dabar" },
        { en: "in the past", lt: "praeityje" },
        { en: "when I was a child", lt: "kai buvau vaikas" },
        { en: "the countryside", lt: "kaimas, užmiestis" },
        { en: "a village", lt: "kaimas, gyvenvietė" },
        { en: "a farm", lt: "ūkis" },
        { en: "a shopping centre", lt: "prekybos centras" },
        { en: "change – changed", lt: "keistis, pasikeisti" },
        { en: "grow up – grew up", lt: "užaugti" },
        { en: "crowded", lt: "perpildytas, pilnas žmonių" },
        { en: "quiet", lt: "ramus, tylus" }
      ],
      phrases: [
        { en: "I used to…, but now…", lt: "Anksčiau…, o dabar…" },
        { en: "Did you use to…?", lt: "Ar anksčiau…?" },
        { en: "There used to be…", lt: "Anksčiau čia buvo…" },
        { en: "…but not any more.", lt: "…bet dabar nebe." },
        { en: "It has changed a lot.", lt: "Labai pasikeitė." },
        { en: "Where did you grow up?", lt: "Kur užaugai?" }
      ],
      quiz: [
        { type: "choice", q: "I ___ to live in a small village.", options: ["use", "used", "using"], answer: 1,
          explain: "Teiginyje – <b>used to</b>." },
        { type: "choice", q: "Did you ___ to play outside a lot?", options: ["used", "use", "using"], answer: 1,
          explain: "Po <i>did</i> – <b>use to</b> (be d)." },
        { type: "choice", q: "We ___ use to have a car.", options: ["didn't", "weren't", "haven't"], answer: 0,
          explain: "Neiginys: <b>didn't use to</b>." },
        { type: "choice", q: "I used to ___ glasses, but now I wear contact lenses.", options: ["wear", "wearing", "wore"], answer: 0,
          explain: "Po <i>used to</i> – bazinė forma: <b>wear</b>." },
        { type: "choice", q: "Kuris sakinys NETEISINGAS?", options: ["I used to go to school by bus.", "I use to go to the gym every day.", "There used to be a cinema here."], answer: 1,
          explain: "Dabarties įpročiui <i>used to</i> netinka: <b>I usually go to the gym every day.</b>" },
        { type: "input", q: "Išversk: Anksčiau rūkiau.", answer: ["I used to smoke"],
          explain: "Praeities įprotis, kurio nebėra → <b>I used to smoke.</b>" },
        { type: "input", q: "Išversk: Ar anksčiau gyvenai Kaune?", answer: ["Did you use to live in Kaunas", "Did you live in Kaunas before"],
          explain: "<b>Did you use to live in Kaunas?</b> (po <i>did</i> – <i>use</i>)." },
        { type: "order", words: ["there", "used", "to", "be", "a", "cinema", "here"], answer: "there used to be a cinema here", lt: "Anksčiau čia buvo kino teatras.",
          explain: "<b>There used to be…</b> – kas anksčiau buvo vietoje." }
      ],
      speaking: {
        scenario: "You and the learner look at 'then and now': the learner's childhood, their town and their life ten years ago compared with today. You are curious and also tell the learner how your own (invented) home town has changed.",
        tasks: [
          "Ask where the learner grew up and what they used to do as a child (games, school, holidays, food they didn't like).",
          "Ask 'Did you use to…?' questions about at least 4 habits or states (have pets, play an instrument, live with grandparents, walk to school).",
          "Ask the learner to describe how their town or neighbourhood has changed (There used to be…, but now there's…).",
          "Ask about 2 things in their life that are different now compared with 10 years ago (job, home, hobbies, habits).",
          "Ask the learner to ask YOU 3 'Did you use to…?' questions."
        ],
        successCriteria: [
          "Uses 'used to' + base form correctly in at least 6 sentences",
          "Uses 'didn't use to' and 'Did you use to…?' (without -d) correctly at least once each",
          "Uses 'There used to be…' at least twice to describe changes in a place",
          "Contrasts past and present in at least 3 sentences (…, but now…)",
          "Does not use 'use to' for present habits"
        ],
        minLearnerTurns: 9
      }
    },

    // ───────────────────────── l03 Vocabulary: housing and chores ─────────────────────────
    {
      id: "a2plus-u02-l03",
      type: "lesson",
      kind: "vocabulary",
      icon: "🏠",
      title: "Būstas ir buities darbai",
      titleEn: "Housing and household chores",
      sources: ["oxford-3000", "a2-key-topics", "english-file"],
      canDo: [
        "Galiu apibūdinti savo būstą ir buities darbus.",
        "Galiu pasikalbėti apie būsto nuomą: kainą, sąskaitas ir užstatą."
      ],
      grammar: {
        title: "Kokie būna būstai, kaip nuomojamės ir make ar do",
        explanation: [
          "<b>Būsto tipai.</b> <code>a detached house</code> – atskiras namas (be kaimynų už sienos), <code>a semi-detached house</code> – sublokuotas namas (dvibutis), <code>a terraced house</code> – kotedžas eilėje, <code>a block of flats</code> – daugiabutis, <code>a flat</code> (JAV <i>apartment</i>) – butas, <code>a studio (flat)</code> – vieno kambario butas su virtuvėle. Aukštas: <code>on the third floor</code>.",
          "<b>Nuoma.</b> <code>rent</code> – ir veiksmažodis „nuomotis“, ir daiktavardis „nuomos mokestis“: <code>I rent a flat. The rent is €500 a month.</code> <code>landlord / landlady</code> – nuomotojas (savininkas), <code>tenant</code> – nuomininkas, <code>deposit</code> – užstatas, <code>bills</code> – sąskaitos (elektra, vanduo, šildymas), <code>furnished</code> – su baldais. Klausimas: <code>Are the bills included?</code>",
          "<b>make ar do?</b> Bendra taisyklė: <code>do</code> – <b>darbai, pareigos</b>, veikla apskritai (<i>do the housework, do the washing-up, do the shopping, do the ironing, do the laundry, do homework</i>). <code>make</code> – kai <b>sukuriame, pagaminame</b> kažką naujo (<i>make dinner, make a cake, make coffee</i>) ir kai kurie pastovūs junginiai (<i>make the bed, make a mess, make a noise</i>).",
          "Kiti buities darbai: <code>clean the bathroom</code>, <code>vacuum / hoover the floor</code> (siurbti), <code>take out the rubbish</code> (išnešti šiukšles), <code>tidy (up) my room</code> (susitvarkyti), <code>water the plants</code>, <code>hang out the washing</code> (pakabinti skalbinius).",
          "Kalbėdamas apie namų ruošą vartok dažnumo žodžius: <code>I do the washing-up every day. My partner usually makes dinner. I hardly ever do the ironing.</code> Ir Present Perfect su for/since: <code>We've lived in this block of flats for six years.</code>"
        ],
        table: [
          ["Grupė", "Žodžiai"],
          ["Būstas", "detached house, semi-detached house, block of flats, flat, studio, cottage"],
          ["Nuoma", "rent, landlord / landlady, tenant, deposit, bills, furnished, move in / move out"],
          ["do + darbai", "the housework, the washing-up, the shopping, the ironing, the laundry, the cleaning"],
          ["make + sukurti", "dinner, breakfast, a cake, coffee, the bed, a mess, a noise"],
          ["Kiti darbai", "vacuum the floor, take out the rubbish, tidy up, water the plants"]
        ],
        examples: [
          { en: "We live in a block of flats on the fifth floor.", lt: "Gyvename daugiabutyje, penktame aukšte." },
          { en: "My parents have a detached house with a big garden.", lt: "Mano tėvai turi atskirą namą su dideliu sodu." },
          { en: "The rent is €450 a month, and the bills aren't included.", lt: "Nuoma – 450 eurų per mėnesį, sąskaitos neįskaičiuotos." },
          { en: "The landlord wants a deposit of one month's rent.", lt: "Nuomotojas nori vieno mėnesio nuomos dydžio užstato." },
          { en: "Who does the washing-up in your house?", lt: "Kas jūsų namuose plauna indus?" },
          { en: "I always make the bed in the morning.", lt: "Rytais visada pasikloju lovą." },
          { en: "I do the shopping on Saturdays and my husband makes dinner.", lt: "Šeštadieniais aš apsiperku, o vyras gamina vakarienę." }
        ],
        pitfalls: [
          "Lietuviškas „daryti“ ne visada <i>do</i>: <i>do the bed, do dinner</i> – neteisinga. Sakyk <b>make the bed, make dinner</b>. O „plauti indus“ – <b>do the washing-up</b>, ne <i>wash the plates</i> (nors <i>wash the dishes</i> irgi tinka).",
          "Netikras draugas: <b>a cabinet</b> nėra „kabinetas“ – tai spintelė. Kabinetas namuose – <b>a study</b>. O <b>a flat</b> – butas, ne „plokščias“ (nors būdvardis <i>flat</i> reiškia ir tai).",
          "<i>The rent is 500 euros in month.</i> → <b>€500 a month</b> (per mėnesį = <i>a month</i>)."
        ]
      },
      vocab: [
        { en: "a detached house", lt: "atskiras namas" },
        { en: "a block of flats", lt: "daugiabutis" },
        { en: "a flat", lt: "butas" },
        { en: "a studio (flat)", lt: "vieno kambario butas (studija)" },
        { en: "rent (n. / v.)", lt: "nuoma, nuomos mokestis / nuomotis" },
        { en: "a landlord / landlady", lt: "nuomotojas / nuomotoja" },
        { en: "a tenant", lt: "nuomininkas" },
        { en: "a deposit", lt: "užstatas" },
        { en: "bills", lt: "sąskaitos (komunaliniai mokesčiai)" },
        { en: "furnished", lt: "su baldais" },
        { en: "do the housework", lt: "tvarkyti namus" },
        { en: "do the washing-up", lt: "plauti indus" },
        { en: "do the shopping", lt: "apsipirkti (maistą ir pan.)" },
        { en: "make the bed", lt: "pakloti lovą" },
        { en: "make dinner", lt: "pagaminti vakarienę" },
        { en: "take out the rubbish", lt: "išnešti šiukšles" }
      ],
      phrases: [
        { en: "I live in a flat on the third floor.", lt: "Gyvenu bute trečiame aukšte." },
        { en: "How much is the rent?", lt: "Kiek kainuoja nuoma?" },
        { en: "Are the bills included?", lt: "Ar sąskaitos įskaičiuotos?" },
        { en: "Is it furnished?", lt: "Ar butas su baldais?" },
        { en: "Who does the housework at home?", lt: "Kas namuose tvarkosi?" },
        { en: "I hate doing the ironing.", lt: "Nekenčiu lyginti." }
      ],
      quiz: [
        { type: "choice", q: "I ___ the washing-up after dinner.", options: ["make", "do", "clean"], answer: 1,
          explain: "Darbas → <b>do the washing-up</b>." },
        { type: "choice", q: "Can you ___ the bed, please?", options: ["make", "do", "put"], answer: 0,
          explain: "Pastovus junginys: <b>make the bed</b>." },
        { type: "choice", q: "The person who owns the flat and gets the rent is the ___.", options: ["tenant", "landlord", "neighbour"], answer: 1,
          explain: "Savininkas, kuris gauna nuomos mokestį → <b>landlord</b>. <i>Tenant</i> – nuomininkas." },
        { type: "choice", q: "Before you move in, you usually pay a ___ – you get it back when you leave.", options: ["bill", "deposit", "rent"], answer: 1,
          explain: "Užstatas, kurį grąžina → <b>deposit</b>." },
        { type: "choice", q: "A ___ is a house that is not joined to any other house.", options: ["detached house", "block of flats", "studio"], answer: 0,
          explain: "<b>Detached</b> = atskirtas, be bendros sienos." },
        { type: "choice", q: "Are the bills ___ in the rent?", options: ["included", "including", "include"], answer: 0,
          explain: "<b>Are the bills included?</b> – ar įskaičiuotos." },
        { type: "input", q: "Išversk: Šeštadieniais apsiperku.", answer: ["I do the shopping on Saturdays", "I do the shopping on Saturday", "On Saturdays I do the shopping", "I do shopping on Saturdays", "I go shopping on Saturdays", "On Saturdays I go shopping"],
          explain: "Kasdienis apsipirkimas → <b>do the shopping</b>." },
        { type: "order", words: ["who", "makes", "dinner", "in", "your", "house"], answer: "who makes dinner in your house", lt: "Kas jūsų namuose gamina vakarienę?",
          explain: "Gaminti valgį → <b>make dinner</b>." }
      ],
      speaking: {
        scenario: "You and the learner chat about homes and housework. First the learner describes where they live; then you talk about who does which chores at home; finally you compare renting and owning a home.",
        tasks: [
          "Ask the learner to describe their home: type (flat, house…), floor, number of rooms, how long they have lived there, what they like and dislike about it.",
          "Ask who does which chores in their home and how often (washing-up, shopping, cooking, ironing, making the bed, taking out the rubbish).",
          "Ask which chore they love and which they hate, and why.",
          "Ask whether they have ever rented a flat and what is important when you rent (rent, bills, deposit, landlord).",
          "Ask the learner to describe their dream home in 3–4 sentences."
        ],
        successCriteria: [
          "Uses at least 4 different words for types of home or rooms correctly",
          "Uses at least 5 chore collocations with the correct verb (make vs do)",
          "Uses at least 3 renting words (rent, landlord, tenant, deposit, bills, furnished) correctly",
          "Describes their own home in at least 4 connected sentences"
        ],
        minLearnerTurns: 9
      }
    },

    // ───────────────────────── l04 Functional: polite requests and permission ─────────────────────────
    {
      id: "a2plus-u02-l04",
      type: "lesson",
      kind: "functional",
      icon: "🙏",
      title: "Mandagūs prašymai ir leidimas",
      titleEn: "Polite requests and asking permission",
      sources: ["core-inventory", "esl-lounge-functions", "empower"],
      canDo: [
        "Galiu mandagiai paprašyti paslaugos ar leidimo ir į tai atsakyti.",
        "Galiu mandagiai atsisakyti ir paaiškinti priežastį."
      ],
      grammar: {
        title: "Kaip prašyti angliškai, kad skambėtų mandagiai",
        explanation: [
          "<b>Prašymas, kad kitas kažką padarytų</b> (nuo paprasčiausio iki mandagiausio): <code>Can you help me?</code> → <code>Could you help me, please?</code> → <code>Could you possibly help me?</code> → <code>Would you mind helping me?</code> Po <code>can / could</code> – bazinė forma (be <i>to</i>), po <code>Would you mind</code> – <b>-ing</b> forma.",
          "<b>Leidimo prašymas</b> (ar galiu aš…?): <code>Can I…?</code> → <code>Could I…?</code> → <code>Is it OK if I…?</code> → <code>Do you mind if I…?</code> → <code>Could I possibly…?</code> Pvz.: <code>Is it OK if I open the window?</code> <code>Do you mind if I sit here?</code>",
          "<b>Atsakymai.</b> Sutinkant: <code>Sure. / Of course. / Go ahead. / No problem.</code> Atsisakant – visada švelniai ir su priežastimi: <code>I'm afraid not – … / Sorry, I'm afraid I can't – …</code> Pvz.: <code>I'm afraid not, I need it for work.</code>",
          "<b>Dėmesio – mind!</b> <code>mind</code> reiškia „prieštarauti, turėti ką nors prieš“. Todėl į <code>Would you mind…? / Do you mind if…?</code> sutikdamas atsakai <b>NE</b>: <code>No, not at all. / No, go ahead.</code> (= neprieštarauju). Atsakymas <i>Yes, I do</i> reikštų „taip, prieštarauju“!",
          "<b>Kultūrinė pastaba.</b> Lietuvių kalboje tiesioginis prašymas („Duok druską“, „Atidaryk langą“) dažnai visiškai normalus. Angliškai liepiamoji nuosaka be „minkštinimo“ skamba kaip įsakymas ir gali įžeisti. Anglakalbiai beveik visada prašo klausimu (<i>Could you…?</i>), prideda <i>please</i>, o kartais ir paaiškinimą: <i>Could you turn the music down? I'm trying to sleep.</i>"
        ],
        table: [
          ["Tikslas", "Neutralu", "Labai mandagu", "Atsakymas"],
          ["Paprašyti paslaugos", "Can / Could you…?", "Would you mind + -ing? / Could you possibly…?", "Sure. / I'm afraid I can't…"],
          ["Paprašyti leidimo", "Can / Could I…?", "Is it OK if I…? / Do you mind if I…?", "Go ahead. / I'm afraid not."],
          ["Atsakyti į mind", "–", "Would you mind…? / Do you mind if…?", "No, not at all. (= sutinku)"]
        ],
        examples: [
          { en: "Could you help me with my bags, please?", lt: "Ar galėtum padėti man su krepšiais?" },
          { en: "Would you mind closing the door? – No, not at all.", lt: "Ar nesunku būtų uždaryti duris? – Žinoma, ne." },
          { en: "Is it OK if I use your phone charger? – Sure, go ahead.", lt: "Ar galiu pasinaudoti tavo telefono krovikliu? – Žinoma, imk." },
          { en: "Do you mind if I open the window? – I'm afraid I'm a bit cold.", lt: "Ar neprieštarausi, jei atidarysiu langą? – Atsiprašau, man truputį šalta." },
          { en: "Could I possibly leave work early today?", lt: "Ar galėčiau šiandien išeiti iš darbo anksčiau?" },
          { en: "Can I borrow your car this weekend? – I'm afraid not. I need it.", lt: "Ar galiu pasiskolinti tavo automobilį šį savaitgalį? – Deja, ne. Man jo reikia." }
        ],
        pitfalls: [
          "Per tiesmukas prašymas: <i>Give me the key.</i> / <i>I want the bill.</i> Angliškai skamba grubiai. Sakyk <b>Could you give me the key, please?</b> / <b>Could we have the bill, please?</b>",
          "<i>Would you mind to open the window?</i> – neteisinga. Po <i>mind</i> – <b>-ing</b>: <b>Would you mind opening the window?</b> Ir po <i>could</i> nėra <i>to</i>: <i>Could you to help me?</i> → <b>Could you help me?</b>",
          "Į <i>Do you mind if I…?</i> lietuviai dažnai atsako <i>Yes</i> (norėdami pasakyti „taip, gali“). Tai reiškia „prieštarauju“! Sutikdamas sakyk <b>No, not at all / No, go ahead.</b>"
        ]
      },
      vocab: [
        { en: "a request", lt: "prašymas" },
        { en: "permission", lt: "leidimas" },
        { en: "borrow", lt: "pasiskolinti (iš ko nors)" },
        { en: "lend", lt: "paskolinti (kam nors)" },
        { en: "mind", lt: "prieštarauti, turėti ką nors prieš" },
        { en: "possibly", lt: "galbūt (mandagume: „ar nebūtų įmanoma“)" },
        { en: "turn down / turn up", lt: "patildyti / pagarsinti" },
        { en: "a favour", lt: "paslauga" },
        { en: "a charger", lt: "kroviklis" },
        { en: "polite / rude", lt: "mandagus / nemandagus" },
        { en: "of course", lt: "žinoma" },
        { en: "I'm afraid…", lt: "deja…, bijau, kad…" }
      ],
      phrases: [
        { en: "Could you…, please?", lt: "Ar galėtum…?" },
        { en: "Would you mind + -ing?", lt: "Ar nesunku būtų…? / Ar neprieštarautum…?" },
        { en: "Do you mind if I…?", lt: "Ar neprieštarausi, jei aš…?" },
        { en: "Is it OK if I…?", lt: "Ar gerai, jei aš…?" },
        { en: "Could I possibly…?", lt: "Ar galėčiau (gal būtų įmanoma)…?" },
        { en: "Can I ask you a favour?", lt: "Ar galiu paprašyti paslaugos?" },
        { en: "Sure, go ahead.", lt: "Žinoma, prašom." },
        { en: "I'm afraid not, because…", lt: "Deja, ne, nes…" }
      ],
      quiz: [
        { type: "choice", q: "Would you mind ___ the window?", options: ["open", "opening", "to open"], answer: 1,
          explain: "Po <b>Would you mind</b> – -ing forma: <i>opening</i>." },
        { type: "choice", q: "Do you mind if I ___ here?", options: ["sit", "sitting", "to sit"], answer: 0,
          explain: "<b>Do you mind if I + bazinė forma</b> (Present Simple)." },
        { type: "choice", q: "Would you mind turning the music down? – ___ (tu sutinki)", options: ["Yes, I would.", "No, not at all.", "Yes, I mind."], answer: 1,
          explain: "<i>mind</i> = prieštarauti, todėl sutinkant sakome <b>No, not at all.</b>" },
        { type: "choice", q: "Is it OK if I use your phone? – ___ (tu sutinki)", options: ["Sure, go ahead.", "I'm afraid not.", "No, I'm not OK."], answer: 0,
          explain: "Sutikimas → <b>Sure, go ahead.</b>" },
        { type: "choice", q: "Kuris prašymas mandagiausias?", options: ["Give me a pen.", "Could you possibly lend me a pen?", "I want a pen."], answer: 1,
          explain: "<b>Could you possibly…?</b> – labai mandagu. Liepiamoji nuosaka ir <i>I want</i> angliškai skamba grubiai." },
        { type: "choice", q: "Can I park here? – ___ It's for residents only.", options: ["I'm afraid not.", "Sure, go ahead.", "Not at all."], answer: 0,
          explain: "Mandagus atsisakymas su priežastimi → <b>I'm afraid not.</b>" },
        { type: "input", q: "Išversk: Ar galėtum man padėti?", answer: ["Could you help me", "Could you help me please", "Can you help me", "Can you help me please", "Could you give me a hand", "Would you mind helping me"],
          explain: "<b>Could you help me, please?</b> – mandagu ir natūralu." },
        { type: "order", words: ["could", "i", "possibly", "borrow", "your", "car"], answer: "could i possibly borrow your car", lt: "Ar galėčiau pasiskolinti tavo automobilį?",
          explain: "<b>Could I possibly + bazinė forma</b> – labai mandagus leidimo prašymas." }
      ],
      speaking: {
        scenario: "Three short role-plays about home life. 1) The learner is a guest staying at your flat for the weekend and needs several things (use the Wi-Fi, have a shower, borrow a towel, open the window). 2) You are a noisy neighbour and the learner politely asks you to do things (turn the music down, move your bike from the stairs). 3) You ask the learner for favours and permission, and they must agree or politely refuse with a reason.",
        tasks: [
          "Role-play 1: the learner (guest) asks you at least 4 times for permission using different structures (Can I…? Is it OK if I…? Do you mind if I…? Could I possibly…?).",
          "Role-play 2: the learner asks you (neighbour) for at least 2 favours with 'Could you…?' and 'Would you mind + -ing?'. Sometimes agree, once refuse politely so the learner must respond.",
          "Role-play 3: ask the learner 4 requests (Would you mind watering my plants? Could you lend me €50? Do you mind if I bring my dog?). The learner must agree to some and politely refuse at least one with a reason.",
          "If the learner uses a direct command (Give me…), stop briefly and ask them to make it more polite.",
          "Ask the learner one reflective question: Is it different in Lithuanian? How do people ask for things at home or at work?"
        ],
        successCriteria: [
          "Uses at least 5 different request/permission structures correctly (Could you…, Would you mind -ing, Do you mind if I…, Is it OK if I…, Could I possibly…)",
          "Uses the -ing form after 'Would you mind' every time",
          "Answers 'Do you mind…/Would you mind…' questions correctly (No, not at all = yes)",
          "Refuses at least once politely with 'I'm afraid…' + a reason",
          "Does not use bare imperatives for requests"
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── l05 Defining relative clauses ─────────────────────────
    {
      id: "a2plus-u02-l05",
      type: "lesson",
      kind: "grammar",
      icon: "🔗",
      title: "Apibrėžiamieji šalutiniai sakiniai",
      titleEn: "Defining relative clauses",
      sources: ["bc-grammar-a1a2", "egp", "core-inventory"],
      canDo: [
        "Galiu paaiškinti žodį, kurio nežinau, apibūdindama jį kitais žodžiais.",
        "Galiu tiksliai pasakyti, apie kurį žmogų, daiktą ar vietą kalbu (who / which / that / where)."
      ],
      grammar: {
        title: "who, which, that, where – „kuris, kuri, kur“",
        explanation: [
          "Šalutinis pažyminio sakinys tiksliai pasako, <b>apie kurį</b> žmogų, daiktą ar vietą kalbame: <code>The woman who lives next door is a doctor.</code> (Moteris, kuri gyvena šalia, yra gydytoja.) Lietuviškai beveik visada sakome „kuris / kuri“ – angliškai žodis priklauso nuo to, <b>kas</b> apibūdinama.",
          "<code>who</code> – <b>žmonėms</b>: <i>a person who…, the man who…, a friend who…</i>. <code>which</code> – <b>daiktams ir gyvūnams</b>: <i>the flat which…, a machine which…</i>. <code>that</code> – ir žmonėms, ir daiktams (šnekamojoje kalboje labai dažnas): <i>the car that I bought</i>. <code>where</code> – <b>vietoms</b>, kai reiškia „kur, kurioje“: <i>the town where I grew up, a shop where you can buy…</i>",
          "Šalutiniame sakinyje <b>nekartojame</b> įvardžio: <code>This is the flat which I rent.</code>, ne <i>which I rent it</i>. Kai who/which/that yra papildinys (po jo eina kitas veiksnys), jį galima praleisti: <code>The flat (that) I rent is small.</code> <code>The man (who) I met…</code>",
          "<b>Super įgūdis – parafrazavimas.</b> Kai nežinai žodžio, apibūdink jį: <code>It's a thing which you use to open bottles.</code> (= atidarytuvas) <code>It's a person who repairs pipes.</code> (= santechnikas) <code>It's a place where you can wash your clothes.</code> (= skalbykla) Taip kalba niekada „nesustoja“ – tai vertinama ir B1 egzamine.",
          "Naudingos parafrazavimo frazės: <code>It's a kind of…</code> (tai tokia rūšis…), <code>It's something you use for + -ing…</code>, <code>It's like a…, but…</code>, <code>It's the opposite of…</code>"
        ],
        table: [
          ["Ką apibūdiname", "Žodis", "Pavyzdys"],
          ["žmogų", "who / that", "A landlord is a person who owns a flat."],
          ["daiktą, gyvūną", "which / that", "A kettle is a thing which boils water."],
          ["vietą (kur)", "where", "A launderette is a place where you wash clothes."],
          ["papildinys (gali praleisti)", "(that / which / who)", "The sofa (that) I bought is green."]
        ],
        examples: [
          { en: "My neighbour is the man who walks his dog at 6 a.m.", lt: "Mano kaimynas – tas vyras, kuris šeštą ryto vedžioja šunį." },
          { en: "I want a flat which has a balcony.", lt: "Noriu buto, kuris turėtų balkoną." },
          { en: "This is the café where we first met.", lt: "Tai kavinė, kurioje pirmą kartą susitikome." },
          { en: "The book that you lent me was great.", lt: "Knyga, kurią man paskolinai, buvo puiki." },
          { en: "A plumber is someone who repairs pipes and taps.", lt: "Santechnikas – žmogus, kuris taiso vamzdžius ir čiaupus." },
          { en: "It's a thing which you use to dry your hair.", lt: "Tai daiktas, kuriuo džiovini plaukus (plaukų džiovintuvas)." },
          { en: "Vilnius is the city where I've lived for ten years.", lt: "Vilnius – miestas, kuriame gyvenu dešimt metų." }
        ],
        pitfalls: [
          "Žmonėms – ne <i>which</i>: <i>the man which lives there</i> → <b>the man who lives there</b>.",
          "Kartojamas įvardis (lietuvių kalbos įtaka): <i>This is the book that I bought it.</i> → <b>This is the book that I bought.</b>",
          "Vietai su veiksmu „ten“ – <b>where</b>: <i>the city which I was born</i> → <b>the city where I was born</b>."
        ]
      },
      vocab: [
        { en: "who", lt: "kuris, kuri (žmonėms)" },
        { en: "which", lt: "kuris, kuri (daiktams)" },
        { en: "that", lt: "kuris, kuri (žmonėms ir daiktams)" },
        { en: "where", lt: "kur, kuriame" },
        { en: "a kettle", lt: "virdulys" },
        { en: "a tap", lt: "čiaupas" },
        { en: "a plumber", lt: "santechnikas" },
        { en: "a launderette", lt: "savitarnos skalbykla" },
        { en: "a bottle opener", lt: "butelių atidarytuvas" },
        { en: "a hairdryer", lt: "plaukų džiovintuvas" },
        { en: "a dishwasher", lt: "indaplovė" },
        { en: "repair", lt: "taisyti" },
        { en: "explain", lt: "paaiškinti" },
        { en: "a kind of", lt: "tam tikra rūšis, tarsi" }
      ],
      phrases: [
        { en: "It's a thing which you use to…", lt: "Tai daiktas, kuriuo…" },
        { en: "It's a person who…", lt: "Tai žmogus, kuris…" },
        { en: "It's a place where…", lt: "Tai vieta, kur…" },
        { en: "It's a kind of…", lt: "Tai tokia rūšis…" },
        { en: "I don't know the word, but…", lt: "Nežinau žodžio, bet…" },
        { en: "What do you call a thing which…?", lt: "Kaip vadinasi daiktas, kuris…?" }
      ],
      quiz: [
        { type: "choice", q: "A plumber is a person ___ repairs pipes.", options: ["which", "who", "where"], answer: 1,
          explain: "Žmogus → <b>who</b>." },
        { type: "choice", q: "This is the house ___ I grew up.", options: ["which", "where", "who"], answer: 1,
          explain: "Vieta, kurioje užaugau → <b>where</b>." },
        { type: "choice", q: "A fridge is a thing ___ keeps food cold.", options: ["who", "which", "where"], answer: 1,
          explain: "Daiktas → <b>which</b> (arba that)." },
        { type: "choice", q: "Kuris sakinys NETEISINGAS?", options: ["The sofa that I bought is great.", "The sofa that I bought it is great.", "The sofa I bought is great."], answer: 1,
          explain: "Įvardžio <i>it</i> kartoti negalima: <b>The sofa that I bought…</b>" },
        { type: "choice", q: "A landlord is someone ___ you pay rent to.", options: ["who", "where", "which"], answer: 0,
          explain: "Žmogus → <b>who</b> (arba that)." },
        { type: "input", q: "Užbaik žodžiu: A kitchen is a room ___ you cook.", answer: ["where"],
          explain: "Vieta, kur gaminame → <b>where</b>." },
        { type: "input", q: "Įrašyk who, which arba where: A neighbour is someone ___ lives near you.", answer: ["who", "that"],
          explain: "Žmogus → <b>who</b> (arba <i>that</i>)." },
        { type: "order", words: ["it's", "a", "thing", "which", "you", "use", "to", "open", "bottles"], answer: "it's a thing which you use to open bottles", lt: "Tai daiktas, kuriuo atidarai butelius.",
          explain: "Parafrazavimas: <b>It's a thing which you use to…</b>" }
      ],
      speaking: {
        scenario: "A word-guessing game called 'Explain it!'. You and the learner take turns defining household objects, jobs and places without saying the word, using who/which/that/where. Then you talk about the people, things and places in the learner's own life.",
        tasks: [
          "Give the learner 5 words in Lithuanian or as a picture description (e.g. indaplovė, nuomotojas, skalbykla, virdulys, kaimynas) and ask them to explain each in English without saying the word.",
          "Define 4 words for the learner to guess (It's a person who…, It's a place where…); after they guess, ask them to repeat your definition.",
          "Ask the learner to describe 'a person who is important to me', 'a place where I feel relaxed' and 'a thing which I can't live without', with reasons.",
          "Ask the learner to tell you about something they couldn't name in English recently and to paraphrase it now.",
          "Correct gently any 'the man which…' or repeated pronoun errors and ask the learner to repeat the sentence correctly."
        ],
        successCriteria: [
          "Defines at least 5 words using a correct relative clause (who/which/that/where)",
          "Uses 'who' for people and 'which/that' for things every time",
          "Uses 'where' for places at least twice",
          "Does not repeat the pronoun inside the relative clause (*the book that I bought it)",
          "Uses at least one other paraphrasing phrase (It's a kind of…, It's something you use for…)"
        ],
        minLearnerTurns: 10
      }
    },

    // ───────────────────────── l06 Pronunciation: /ʌ/ /æ/ /ɑː/ ─────────────────────────
    {
      id: "a2plus-u02-l06",
      type: "lesson",
      kind: "pronunciation",
      icon: "👅",
      title: "Balsiai /ʌ/, /æ/, /ɑː/",
      titleEn: "Vowels /ʌ/, /æ/, /ɑː/",
      sources: ["english-file"],
      canDo: [
        "Galiu atskirti panašius anglų kalbos balsius.",
        "Galiu aiškiai ištarti žodžius su /ʌ/, /æ/ ir /ɑː/, kad pašnekovas nesupainiotų cup, cap ir carp."
      ],
      grammar: {
        title: "Trys „a“ garsai, kurių lietuviškai neskiriame",
        explanation: [
          "Lietuviai visus tris garsus dažnai taria kaip lietuvišką „a“. Tada <i>cup</i> (puodelis), <i>cap</i> (kepurė) ir <i>carp</i> (karpis) skamba vienodai, ir pašnekovas nesupranta. Šių garsų skirtumas keičia žodžio prasmę!",
          "<b>/ʌ/ – cup, much, come, love, money.</b> Trumpas, atsipalaidavęs garsas, burna pusiau atvira, lūpos neutralios, liežuvis viduryje burnos. Panašus į trumpą lietuvišką „a“ žodyje <i>kas</i>, bet šiek tiek „tamsesnis“ ir be įtampos. Rašoma dažnai <b>u</b> (<i>cup, bus, lunch</i>) arba <b>o</b> (<i>come, son, money, mother</i>).",
          "<b>/æ/ – cap, match, hat, bag, flat.</b> Burną atverk plačiai, žandikaulį nuleisk, lūpas truputį ištempk tarsi šypsodamasis. Garsas – tarp lietuviško „e“ (kaip <i>Ema</i>) ir „a“. Patarimas: sakyk „e“ ir pamažu leisk žandikaulį žemyn. Rašoma <b>a</b>: <i>cat, black, family, have</i>.",
          "<b>/ɑː/ – carp, heart, calm, car, bath.</b> <b>Ilgas</b> ir <b>gilus</b> garsas iš gerklės gilumos, burna plačiai atvira, liežuvis atitrauktas atgal – kaip ilgas lietuviškas „a“ žodyje <i>mama</i> ar <i>rąstas</i>, tik dar giliau. Britiškame tarime <b>r po šio balsio netariama</b>: <i>car</i> = /kɑː/, <i>park</i> = /pɑːk/. Rašoma <b>ar</b> (<i>car, garden</i>), <b>al</b> (<i>calm, half</i>) ar <b>a</b> (<i>bath, father</i>).",
          "<b>Kaip treniruotis:</b> tark minimalias poras – žodžius, kurie skiriasi tik vienu garsu (<i>hut – hat – heart</i>). Pirmiausia lėtai, perdėtai, tada natūraliai sakiniuose. Pasitikrink: ar /ɑː/ ilgesnis už /ʌ/? Ar burna /æ/ metu atsiveria plačiau?"
        ],
        table: [
          ["/ʌ/ (cup)", "/æ/ (cap)", "/ɑː/ (carp)"],
          ["cup", "cap", "carp"],
          ["hut", "hat", "heart"],
          ["much", "match", "march"],
          ["fun", "fan", "far"],
          ["bun", "ban", "barn"],
          ["cut", "cat", "cart"],
          ["come", "–", "calm"]
        ],
        examples: [
          { en: "My mother loves her cup of coffee.", lt: "Mano mama mėgsta savo kavos puodelį. (/ʌ/: mother, loves, cup)" },
          { en: "The black cat is in my bag.", lt: "Juodas katinas mano krepšyje. (/æ/: black, cat, bag)" },
          { en: "Park the car in the garden.", lt: "Pastatyk automobilį sode. (/ɑː/: park, car, garden – be r!)" },
          { en: "Is that a hut or a hat?", lt: "Ar tai trobelė, ar skrybėlė?" },
          { en: "Don't cut the cat – cut the cake!", lt: "Nepjauk katino – pjauk tortą! (cut /ʌ/ – cat /æ/)" },
          { en: "We have a flat with a bath and a garden.", lt: "Turime butą su vonia ir sodu. (flat /æ/, bath /ɑː/, garden /ɑː/)" },
          { en: "My son has lunch at the bus stop on Monday.", lt: "Mano sūnus pirmadienį pietauja autobusų stotelėje. (/ʌ/)" }
        ],
        pitfalls: [
          "Visi trys garsai tariami kaip lietuviškas „a“: <i>cup = cap = carp</i>. Pagalvok apie burną: /ʌ/ – trumpai ir atsipalaidavus, /æ/ – plačiai, kaip šypsenoje, /ɑː/ – ilgai ir giliai.",
          "Raidė <b>o</b> žodžiuose <i>come, son, money, mother, love, Monday</i> tariama /ʌ/, ne lietuvišku „o“. <i>Money</i> ≠ „moni“ su o!",
          "Britiškai <i>car, park, garden, heart</i> – <b>be r</b> garso: /kɑː/, /pɑːk/. Lietuviai linkę ryškiai ištarti r. (Amerikiečiai r taria, bet kitaip nei lietuviai – minkštai, be virpėjimo.)"
        ]
      },
      vocab: [
        { en: "cup /kʌp/", lt: "puodelis" },
        { en: "cap /kæp/", lt: "kepuraitė su snapeliu" },
        { en: "carp /kɑːp/", lt: "karpis" },
        { en: "hut /hʌt/", lt: "trobelė" },
        { en: "hat /hæt/", lt: "skrybėlė" },
        { en: "heart /hɑːt/", lt: "širdis" },
        { en: "much /mʌtʃ/", lt: "daug" },
        { en: "match /mætʃ/", lt: "degtukas; rungtynės" },
        { en: "come /kʌm/", lt: "ateiti" },
        { en: "calm /kɑːm/", lt: "ramus" },
        { en: "money /ˈmʌni/", lt: "pinigai" },
        { en: "flat /flæt/", lt: "butas" },
        { en: "bath /bɑːθ/", lt: "vonia" },
        { en: "garden /ˈɡɑːdn/", lt: "sodas, kiemas" }
      ],
      phrases: [
        { en: "Is that a hut or a hat?", lt: "Ar tai trobelė, ar skrybėlė?" },
        { en: "Thanks very much!", lt: "Labai ačiū!" },
        { en: "Can you come to my flat?", lt: "Ar gali ateiti į mano butą?" },
        { en: "Keep calm!", lt: "Išlik ramus!" },
        { en: "Sorry, did you say „cup“ or „cap“?", lt: "Atsiprašau, ar sakei „cup“, ar „cap“?" }
      ],
      quiz: [
        { type: "choice", q: "Kuriame žodyje yra garsas /æ/?", options: ["cup", "cat", "car"], answer: 1,
          explain: "<b>cat</b> /kæt/. <i>cup</i> – /ʌ/, <i>car</i> – /ɑː/." },
        { type: "choice", q: "Kuriame žodyje yra garsas /ʌ/?", options: ["come", "calm", "cap"], answer: 0,
          explain: "<b>come</b> /kʌm/ – raidė o tariama /ʌ/." },
        { type: "choice", q: "Kuriame žodyje yra ilgas garsas /ɑː/?", options: ["hut", "hat", "heart"], answer: 2,
          explain: "<b>heart</b> /hɑːt/ – ilgas, gilus garsas, r netariama." },
        { type: "choice", q: "Su kuriuo žodžiu rimuojasi <i>much</i>?", options: ["such", "match", "march"], answer: 0,
          explain: "<i>much</i> /mʌtʃ/ ir <b>such</b> /sʌtʃ/ – abu su /ʌ/." },
        { type: "choice", q: "Kurio žodžio balsis KITOKS?", options: ["love", "son", "bag"], answer: 2,
          explain: "<i>love, son</i> – /ʌ/, o <b>bag</b> – /æ/." },
        { type: "choice", q: "Kaip britiškai tariamas žodis <i>car</i>?", options: ["su ryškiu r gale", "/kɑː/ – ilgas balsis, r netariama", "/kʌr/ – trumpas balsis"], answer: 1,
          explain: "Britų tarime <b>/kɑː/</b> – r po balsio netariama, balsis ilgas." },
        { type: "choice", q: "Kaip tariamas <i>money</i>?", options: ["/ˈmʌni/ – kaip cup", "su lietuvišku o", "/ˈmæni/ – kaip cat"], answer: 0,
          explain: "<b>money</b> /ˈmʌni/ – raidė o čia tariama /ʌ/." },
        { type: "input", q: "Parašyk angliškai žodį su /ɑː/, kuris reiškia „širdis“.", answer: ["heart"],
          explain: "<b>heart</b> /hɑːt/." }
      ],
      speaking: {
        scenario: "A pronunciation workout on /ʌ/, /æ/ and /ɑː/. You model minimal pairs and triples, test the learner's listening, and then have a short conversation about the learner's home using many target words (flat, bath, garden, cup, much, come, money, carpet, family).",
        tasks: [
          "Model the triples cup/cap/carp, hut/hat/heart, much/match/march and have the learner repeat; give feedback on mouth opening and length.",
          "Say 6 words from the triples in random order and ask the learner which one they heard; then swap – the learner says a word and you guess.",
          "Ask the learner to read 4 tongue-twister sentences (e.g. 'The black cat sat on my mother's hat in the garden') and correct their vowels.",
          "Ask about their home with questions that elicit target words: Do you live in a flat or a house? Have you got a garden or a bath? How much is the rent? Who comes to visit?",
          "Ask the learner to describe their favourite room in 3–4 sentences, paying attention to the three vowels."
        ],
        successCriteria: [
          "Produces audibly different vowels in at least 3 of the 'cup/cap/carp'-type triples",
          "Identifies correctly at least 5 of 6 words in the listening task",
          "Pronounces 'o' words like come, money, mother, son with /ʌ/ (not Lithuanian o)",
          "Says 'car, park, garden, heart' with a long /ɑː/ (and, in a British accent, without a strong r)"
        ],
        minLearnerTurns: 9
      }
    },

    // ───────────────────────── l07 Skills: describing a picture of a home ─────────────────────────
    {
      id: "a2plus-u02-l07",
      type: "lesson",
      kind: "skills",
      icon: "🖼️",
      title: "Būsto apibūdinimas (B1 2 dalis įžanga)",
      titleEn: "Describing a picture of a home",
      sources: ["b1-preliminary", "speakout"],
      canDo: [
        "Galiu apie minutę apibūdinti nuotrauką su namų scena.",
        "Galiu suprasti trumpą straipsnį apie neįprastą būstą."
      ],
      grammar: {
        title: "Kaip apibūdinti nuotrauką per vieną minutę",
        explanation: [
          "<b>B1 Preliminary kalbėjimo 2 dalyje</b> egzaminuotojas duoda tau nuotrauką ir prašo ją apibūdinti apie <b>vieną minutę</b>. Svarbu ne tobulumas, o kalbėti sklandžiai, nesustoti ir aprašyti kuo daugiau: vietą, žmones, ką jie daro, daiktus ir savo įspūdį.",
          "<b>Planas (4 žingsniai):</b> 1) <b>Bendras vaizdas</b>: <code>This photo shows… / In this picture I can see…</code> 2) <b>Žmonės ir veiksmai</b> – Present Continuous: <code>A man is cooking. Two children are playing on the floor.</code> 3) <b>Vieta ir daiktai</b>: <code>In the background… / On the left… / Next to the sofa there's…</code> 4) <b>Tavo spėjimas ir nuomonė</b>: <code>It looks like… / I think… / Maybe they're… / It seems…</code>",
          "<b>Vietos frazės:</b> <code>in the foreground</code> (priekiniame plane), <code>in the background</code> (fone), <code>in the middle / in the centre</code>, <code>on the left / on the right</code>, <code>at the top / at the bottom</code>, <code>next to, behind, in front of, between</code>.",
          "<b>Spėjimas:</b> <code>It looks like a kitchen in an old house.</code> (<i>like</i> + daiktavardis) <code>They look happy / tired.</code> (<i>look</i> + būdvardis) <code>I think it's winter because…</code> <code>Maybe they're a family.</code>",
          "<b>Nežinai žodžio?</b> Nesustok! Parafrazuok (prisimink šalutinius sakinius): <code>There's a thing which you use to… / It's a kind of… / I don't know the word, but it's…</code> Jei nutyli – prarandi taškus; jei paaiškini kitais žodžiais – gauni."
        ],
        table: [
          ["Žingsnis", "Frazės"],
          ["1. Bendras vaizdas", "This photo shows… / In this picture I can see…"],
          ["2. Žmonės ir veiksmai", "A woman is reading… / They're sitting on…"],
          ["3. Vieta ir daiktai", "In the background… / On the left… / Next to… there's…"],
          ["4. Spėjimas, nuomonė", "It looks like… / They look… / I think… because… / Maybe…"],
          ["Nežinomas žodis", "It's a thing which… / It's a kind of…"]
        ],
        examples: [
          { en: "This photo shows a family in their living room.", lt: "Šioje nuotraukoje matyti šeima savo svetainėje." },
          { en: "In the foreground, a little girl is playing with a cat.", lt: "Priekiniame plane maža mergaitė žaidžia su katinu." },
          { en: "In the background there's a big window with white curtains.", lt: "Fone – didelis langas su baltomis užuolaidomis." },
          { en: "On the left, a man is sitting on the sofa and reading a newspaper.", lt: "Kairėje vyras sėdi ant sofos ir skaito laikraštį." },
          { en: "It looks like a cold winter evening.", lt: "Atrodo kaip šaltas žiemos vakaras." },
          { en: "They look relaxed and happy.", lt: "Jie atrodo atsipalaidavę ir laimingi." },
          { en: "Maybe it's a weekend because nobody is working.", lt: "Galbūt savaitgalis, nes niekas nedirba." }
        ],
        pitfalls: [
          "Veiksmams nuotraukoje lietuviai vartoja Present Simple: <i>The woman reads a book.</i> Nuotraukoje veiksmas vyksta dabar → <b>The woman is reading a book.</b>",
          "<i>It looks like happy.</i> → <b>They look happy.</b> (look + būdvardis) / <b>It looks like a party.</b> (look like + daiktavardis).",
          "<i>On the background</i> → <b>in the background</b>; <i>in the left</i> → <b>on the left</b>."
        ]
      },
      vocab: [
        { en: "in the foreground", lt: "priekiniame plane" },
        { en: "in the background", lt: "fone, gale" },
        { en: "in the middle", lt: "viduryje" },
        { en: "on the left / right", lt: "kairėje / dešinėje" },
        { en: "next to / behind / in front of", lt: "šalia / už / priešais" },
        { en: "it looks like…", lt: "atrodo kaip…" },
        { en: "a living room", lt: "svetainė" },
        { en: "curtains", lt: "užuolaidos" },
        { en: "a shelf (shelves)", lt: "lentyna (lentynos)" },
        { en: "a rug / a carpet", lt: "kilimėlis / kilimas" },
        { en: "cosy", lt: "jaukus" },
        { en: "messy / tidy", lt: "netvarkingas / tvarkingas" },
        { en: "a tiny house", lt: "mažytis namelis" },
        { en: "square metres", lt: "kvadratiniai metrai" }
      ],
      phrases: [
        { en: "This photo shows…", lt: "Šioje nuotraukoje matyti…" },
        { en: "In this picture I can see…", lt: "Šioje nuotraukoje matau…" },
        { en: "In the background, there's…", lt: "Fone yra…" },
        { en: "It looks like…", lt: "Atrodo kaip…" },
        { en: "They look…", lt: "Jie atrodo…" },
        { en: "I think it's… because…", lt: "Manau, kad tai…, nes…" },
        { en: "I'm not sure, but maybe…", lt: "Nesu tikras (-a), bet galbūt…" }
      ],
      reading: {
        title: "Small is beautiful: life in a tiny house",
        text: "When Greta and Paul's children left home, their big detached house suddenly felt empty. “We used to spend every weekend cleaning rooms that nobody used,” says Greta. So in 2021 they sold it and built a tiny house – just 25 square metres – on a piece of land near a lake.\n\nEverything inside has more than one job. The sofa is also a bed for guests, the stairs are drawers, and the table folds down from the wall. Upstairs there is a small bedroom where they can't stand up, but the window above the bed looks at the stars. “It's the best view we've ever had,” says Paul.\n\nLife has changed a lot. Their bills are much lower, and they've had more free time since they moved. They don't do much housework – cleaning the whole house takes twenty minutes. But there are problems too. There's no space for a washing machine, so Paul does the washing at a launderette in town. And when it rains for a week, the house feels very small.\n\nDo they miss their old house? “Never,” Greta laughs. “We've learned that we don't need much. We need each other, a good book and the lake.”",
        glossary: [
          { en: "empty", lt: "tuščias" },
          { en: "a piece of land", lt: "žemės sklypas" },
          { en: "drawers", lt: "stalčiai" },
          { en: "fold down", lt: "atlenkti, išskleisti žemyn" },
          { en: "stand up", lt: "atsistoti" },
          { en: "a view", lt: "vaizdas (pro langą)" },
          { en: "miss", lt: "ilgėtis, pasigesti" }
        ],
        questions: [
          { type: "choice", q: "Why did Greta and Paul sell their big house?", options: ["It was too expensive to buy.", "Their children left and it felt too big.", "They wanted to live in the city."], answer: 1,
            explain: "„When their children left home, the house suddenly felt <b>empty</b>.“" },
          { type: "input", q: "How big is the tiny house? (number + words)", answer: ["25 square metres", "twenty-five square metres", "25 m2", "25", "twenty five square metres", "25 square meters"],
            explain: "„just <b>25 square metres</b>“." },
          { type: "choice", q: "What is special about the stairs?", options: ["They are also drawers.", "They fold down from the wall.", "They go to the roof."], answer: 0,
            explain: "„the stairs are <b>drawers</b>“ – laiptai kartu yra stalčiai." },
          { type: "choice", q: "Where does Paul do the washing?", options: ["in the lake", "at a launderette in town", "at the neighbours' house"], answer: 1,
            explain: "„Paul does the washing at a <b>launderette in town</b>“." },
          { type: "choice", q: "What is a problem with the tiny house?", options: ["The bills are very high.", "It feels very small when it rains a lot.", "Cleaning takes all weekend."], answer: 1,
            explain: "„When it rains for a week, the house <b>feels very small</b>.“" }
        ]
      },
      quiz: [
        { type: "choice", q: "___ the background, there is a big window.", options: ["On", "In", "At"], answer: 1,
          explain: "<b>in the background</b> – fone." },
        { type: "choice", q: "The woman in the photo ___ a book.", options: ["reads", "is reading", "read"], answer: 1,
          explain: "Nuotraukoje veiksmas vyksta dabar → <b>is reading</b> (Present Continuous)." },
        { type: "choice", q: "It looks ___ a kitchen in an old house.", options: ["as", "like", "how"], answer: 1,
          explain: "<b>look like</b> + daiktavardis." },
        { type: "choice", q: "The children look ___.", options: ["happy", "like happy", "happily"], answer: 0,
          explain: "<b>look</b> + būdvardis: <i>They look happy.</i>" },
        { type: "choice", q: "Nežinai žodžio „kriauklė“. Ką geriausia pasakyti egzamine?", options: ["Nieko – praleisti tą dalį.", "There's a thing where you wash the dishes.", "Pasakyti lietuviškai."], answer: 1,
          explain: "Parafrazuok! <b>A thing where / which…</b> – egzaminuotojas tai vertina." },
        { type: "choice", q: "Kuo geriausia pradėti nuotraukos apibūdinimą?", options: ["Bendru vaizdu: This photo shows a family in a living room.", "Smulkia detale: There's a small cup on the table.", "Nuomone apie fotografą."], answer: 0,
          explain: "Pirmiausia – <b>bendras vaizdas</b>, paskui detalės ir spėjimai." },
        { type: "input", q: "Išversk: Kairėje yra lova.", answer: ["On the left there is a bed", "There is a bed on the left", "There's a bed on the left", "On the left there's a bed"],
          explain: "<b>on the left</b> + <b>there is</b>." },
        { type: "order", words: ["they", "look", "relaxed", "and", "happy"], answer: "they look relaxed and happy", lt: "Jie atrodo atsipalaidavę ir laimingi.",
          explain: "<b>look + būdvardžiai</b>." }
      ],
      speaking: {
        scenario: "B1 Preliminary Part 2 practice. First discuss the tiny-house article briefly. Then the learner describes photos of homes for about one minute each: (a) a photo of a room or home from their own phone gallery, or the room they are sitting in right now described as if it were a photo; (b) a scene you describe briefly as the 'exam photo' (e.g. 'a family having breakfast in a small, messy kitchen on a sunny morning') which the learner must expand with details and guesses. Act as a supportive examiner: don't interrupt the long turn, give feedback afterwards.",
        tasks: [
          "Ask 2 questions about the article (Would you like to live in a tiny house? What would be difficult for you?).",
          "Ask the learner to describe a photo of a room/home (from their phone or the room they are in) for about one minute, following the 4 steps: overview, people/actions, places/objects, guesses/opinion.",
          "Give the learner your 'exam photo' description and ask them to describe it as if they could see it, adding at least 3 guesses (It looks like…, Maybe…, I think… because…).",
          "After each long turn, give 2 pieces of specific feedback (e.g. use Present Continuous for actions, add a position phrase) and ask the learner to try one part again.",
          "Ask the learner to paraphrase 2 objects whose English names they don't know."
        ],
        successCriteria: [
          "Speaks for about one minute (at least 8 sentences) in each long turn without long pauses",
          "Uses at least 4 different position phrases (in the background, on the left, next to…)",
          "Uses the present continuous for actions in the picture at least 3 times",
          "Uses at least 2 speculating phrases (It looks like…, They look…, Maybe…, I think…)",
          "Paraphrases at least one unknown word instead of stopping"
        ],
        minLearnerTurns: 8
      }
    },

    // ───────────────────────── l08 Review ─────────────────────────
    {
      id: "a2plus-u02-l08",
      type: "lesson",
      kind: "review",
      icon: "🔁",
      title: "Kartojimas: namai ir pokyčiai",
      titleEn: "Review: Homes and changes",
      sources: ["core-inventory"],
      canDo: [
        "Galiu kalbėti apie būstą ir mandagiai išspręsti buitinius klausimus.",
        "Galiu papasakoti, kas mano gyvenime pasikeitė ir kiek laiko kažką darau."
      ],
      grammar: {
        title: "Ką kartojame šiame skyriuje",
        explanation: [
          "<b>for / since:</b> <code>How long have you lived here? – I've lived here for six years / since 2019.</code> Lietuviškas esamasis laikas („gyvenu čia 6 metus“) angliškai – Present Perfect. <code>for</code> + trukmė, <code>since</code> + pradžios taškas.",
          "<b>used to:</b> praeities įpročiai ir būsenos, kurių nebėra: <code>I used to live with my parents. There used to be a park here. Did you use to…? I didn't use to…</code>",
          "<b>Šalutiniai sakiniai:</b> <code>who</code> (žmonės), <code>which / that</code> (daiktai), <code>where</code> (vietos); parafrazavimas: <code>It's a thing which you use to… / a person who… / a place where…</code>",
          "<b>Žodynas:</b> būsto tipai (<i>detached house, block of flats, studio</i>), nuoma (<i>rent, landlord, tenant, deposit, bills, furnished</i>), <b>make / do</b> (<i>make the bed, make dinner, do the washing-up, do the shopping</i>).",
          "<b>Prašymai:</b> <code>Could you…? Would you mind + -ing? Do you mind if I…? Is it OK if I…? Could I possibly…?</code> Atsakymai: <code>Sure, go ahead. / No, not at all. / I'm afraid not, because…</code>"
        ],
        table: [
          ["Tema", "Pavyzdys"],
          ["for / since", "I've rented this flat for two years / since 2024."],
          ["used to", "I used to share a flat with three friends."],
          ["who / which / where", "The landlord is the person who owns the flat."],
          ["make / do", "I make dinner and my partner does the washing-up."],
          ["Prašymai", "Would you mind fixing the shower? – No, not at all."]
        ],
        examples: [
          { en: "How long have you lived in this flat? – Since last summer.", lt: "Kiek laiko gyveni šiame bute? – Nuo praėjusios vasaros." },
          { en: "I used to live in a block of flats, but now I have a small house.", lt: "Anksčiau gyvenau daugiabutyje, o dabar turiu nedidelį namą." },
          { en: "I need someone who can repair the washing machine.", lt: "Man reikia žmogaus, kuris galėtų sutaisyti skalbimo mašiną." },
          { en: "Could you possibly come on Saturday morning?", lt: "Ar galėtumėte atvykti šeštadienio rytą?" },
          { en: "Do you mind if I paint the bedroom? – No, go ahead.", lt: "Ar neprieštarausite, jei nudažysiu miegamąjį? – Ne, prašom." }
        ],
        pitfalls: [
          "<i>I live here since 2019.</i> → <b>I've lived here since 2019.</b>; <i>since two years</i> → <b>for two years</b>.",
          "<i>Did you used to…?</i> → <b>Did you use to…?</b>; <i>the man which…</i> → <b>the man who…</b>",
          "<i>Would you mind to help?</i> → <b>Would you mind helping?</b>; <i>do the bed</i> → <b>make the bed</b>."
        ]
      },
      vocab: [
        { en: "landlord / landlady", lt: "nuomotojas / nuomotoja" },
        { en: "tenant", lt: "nuomininkas" },
        { en: "deposit", lt: "užstatas" },
        { en: "bills", lt: "sąskaitos" },
        { en: "broken", lt: "sugedęs" },
        { en: "fix / repair", lt: "sutaisyti" },
        { en: "a leak", lt: "nuotėkis, prakiurimas" },
        { en: "the heating", lt: "šildymas" }
      ],
      phrases: [
        { en: "How long have you…?", lt: "Kiek laiko tu…?" },
        { en: "I used to…, but now…", lt: "Anksčiau…, o dabar…" },
        { en: "It's a thing which…", lt: "Tai daiktas, kuris…" },
        { en: "Would you mind + -ing?", lt: "Ar galėtumėte…? / Ar neprieštarautumėte…?" },
        { en: "Is it OK if I…?", lt: "Ar gerai, jei aš…?" },
        { en: "There's a problem with the…", lt: "Yra problema su…" }
      ],
      quiz: [
        { type: "choice", q: "I've had this sofa ___ ten years.", options: ["since", "for", "ago"], answer: 1,
          explain: "Trukmė → <b>for</b>." },
        { type: "choice", q: "There ___ to be a shop here, but it closed.", options: ["use", "used", "was used"], answer: 1,
          explain: "<b>There used to be…</b>" },
        { type: "choice", q: "A tenant is a person ___ rents a flat or house.", options: ["which", "who", "where"], answer: 1,
          explain: "Žmogus → <b>who</b>." },
        { type: "choice", q: "Would you mind ___ the heating?", options: ["check", "checking", "to check"], answer: 1,
          explain: "Po <b>Would you mind</b> → -ing." },
        { type: "choice", q: "Who ___ the washing-up in your flat?", options: ["makes", "does", "cleans"], answer: 1,
          explain: "<b>do the washing-up</b>." },
        { type: "choice", q: "Do you mind if I bring a friend? – ___ (tu sutinki)", options: ["Yes, I do.", "No, not at all.", "Yes, I mind."], answer: 1,
          explain: "Sutinkant su <i>Do you mind…?</i> → <b>No, not at all.</b>" },
        { type: "input", q: "Išversk: Gyvenu čia nuo 2020 metų.", answer: ["I have lived here since 2020", "I've lived here since 2020", "I have been living here since 2020", "I've been living here since 2020"],
          explain: "<b>I've lived here since 2020.</b> – Present Perfect + since." },
        { type: "order", words: ["did", "you", "use", "to", "live", "in", "a", "village"], answer: "did you use to live in a village", lt: "Ar anksčiau gyvenai kaime?",
          explain: "<b>Did you use to…?</b> – be d." }
      ],
      speaking: {
        scenario: "Role-play: the learner rents a furnished flat and calls or visits the landlord/landlady (you). There are several problems: the shower is broken, there's a leak under the kitchen sink, the heating doesn't work well, and the learner wants permission to paint the bedroom and to have a cat. You are friendly but busy; agree to some things and refuse one politely. After the role-play, have a short personal conversation about the learner's home and how their life has changed.",
        tasks: [
          "Start the role-play: answer the call/door as the landlord and let the learner explain who they are and how long they have lived in the flat (for/since).",
          "Let the learner describe at least 3 problems; if they don't know a word (e.g. sink, leak), encourage them to paraphrase with who/which/where.",
          "The learner must make at least 3 polite requests (Could you…? Would you mind -ing?) and ask permission at least twice (Is it OK if I…? Do you mind if I…?). Agree to some, refuse one politely with a reason.",
          "Ask the learner about the deposit, the bills and the rent to recycle renting vocabulary.",
          "After the role-play, step out of character and ask: How long have you lived in your home? Where did you use to live? Who does the housework?",
          "Ask the learner to compare their life now and 10 years ago in 3–4 sentences (used to…, but now…)."
        ],
        successCriteria: [
          "Makes at least 3 polite requests and 2 permission requests with correct forms (-ing after 'Would you mind')",
          "Uses the present perfect with for/since correctly at least 3 times",
          "Uses 'used to' correctly at least 3 times when talking about changes",
          "Uses at least one relative clause to explain a problem or an unknown word",
          "Uses at least 5 housing words (landlord, rent, deposit, bills, flat, furnished…) correctly"
        ],
        minLearnerTurns: 12
      }
    }
  ]
};
