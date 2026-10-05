(window.UNITS = window.UNITS || {})["a1plus-u03"] = {
  id: "a1plus-u03",
  lessons: [
    // ---------------------------------------------------------------- l01
    {
      id: "a1plus-u03-l01",
      type: "lesson",
      kind: "grammar",
      icon: "🏠",
      title: "There is / there are ir artikeliai",
      titleEn: "There is / there are + a/an/the/some/any",
      sources: ["bc-grammar-a1a2", "egp", "lt-grammar-errors"],
      canDo: [
        "Galiu pasakyti, kas yra mano namuose ir rajone.",
        "Galiu paklausti, ar kažkur yra tam tikra vieta ar daiktas, ir kiek jų yra."
      ],
      grammar: {
        title: "Kas kur yra: there is / there are",
        explanation: [
          "Kai sakome, kad kažkas kažkur <b>yra</b> (egzistuoja), angliškai naudojame <b>there is</b> (vienaskaita, trumpai <b>there's</b>) ir <b>there are</b> (daugiskaita): <i>There's a park near my house. There are two bedrooms in my flat.</i>",
          "Lietuviškai vietą dažnai sakome pradžioje: „Mano rajone yra parkas“. Angliškai sakinys prasideda <b>There is/are</b>, o vieta dažniausiai eina gale: <i>There's a park <b>in my neighbourhood</b>.</i>",
          "Neiginys: <b>There isn't a</b>… / <b>There aren't any</b>… Klausimas: <b>Is there a</b>…? / <b>Are there any</b>…? Trumpi atsakymai: <i>Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't.</i> Kiekis: <b>How many</b> + daugiskaita + <b>are there</b>? – <i>How many rooms are there?</i>",
          "Lietuvių kalboje artikelių nėra, todėl juos lengva pamiršti. Taisyklė paprasta: vienaskaitos daiktavardis niekada nestovi „vienas“. Prieš jį – <b>a</b> (prieš priebalsio garsą: <i>a park, a university</i>) arba <b>an</b> (prieš balsio garsą: <i>an office, an old house</i>).",
          "Daugiskaitoje vietoj <b>a/an</b> naudojame <b>some</b> teiginiuose (<i>There are some shops</i>) ir <b>any</b> neiginiuose bei klausimuose (<i>There aren't any shops. Are there any cafés?</i>). Kai dar ką nors paminime pirmą kartą – <b>a</b>, o kai jau aišku, apie ką kalbame, – <b>the</b>: <i>There's a café on my street. The café is very small.</i>"
        ],
        table: [
          ["", "Vienaskaita", "Daugiskaita"],
          ["+", "There's a park.", "There are some shops."],
          ["−", "There isn't a cinema.", "There aren't any cafés."],
          ["?", "Is there a bank?", "Are there any trees?"],
          ["Atsakymas", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."],
          ["Kiek?", "—", "How many rooms are there?"]
        ],
        examples: [
          { en: "There's a big park near my house.", lt: "Netoli mano namų yra didelis parkas." },
          { en: "There are three rooms in my flat.", lt: "Mano bute yra trys kambariai." },
          { en: "There isn't a lift in our building.", lt: "Mūsų name nėra lifto." },
          { en: "Are there any good cafés near here? – Yes, there are.", lt: "Ar netoliese yra gerų kavinių? – Taip, yra." },
          { en: "How many schools are there in your town?", lt: "Kiek mokyklų yra tavo mieste?" },
          { en: "There's a shop opposite my flat. The shop is open until ten.", lt: "Priešais mano butą yra parduotuvė. Ta parduotuvė dirba iki dešimtos." },
          { en: "There's an old church in the centre.", lt: "Centre yra sena bažnyčia." }
        ],
        pitfalls: [
          "Be artikelio: <i>There is big park.</i> ✗ → <b>There is a big park.</b> ✓ Vienaskaitos daiktavardis visada su <b>a/an/the</b> (arba <i>my, this</i>…).",
          "Lietuviška tvarka: <i>In my town is a castle.</i> ✗ → <b>There's a castle in my town.</b> ✓ Taip pat ne <i>In my flat have two rooms</i> ✗, o <b>There are two rooms in my flat</b> ✓.",
          "„There is“ su daugiskaita: <i>There is many shops.</i> ✗ → <b>There are a lot of shops.</b> ✓ Ir neiginyje su daugiskaita – <b>any</b>: <i>There aren't any parks</i> ✓."
        ]
      },
      vocab: [
        { en: "flat", lt: "butas" },
        { en: "house", lt: "namas" },
        { en: "building", lt: "pastatas" },
        { en: "lift", lt: "liftas" },
        { en: "garden", lt: "sodas, kiemas prie namo" },
        { en: "garage", lt: "garažas" },
        { en: "neighbourhood", lt: "rajonas, apylinkė" },
        { en: "street", lt: "gatvė" },
        { en: "park", lt: "parkas" },
        { en: "shop", lt: "parduotuvė" },
        { en: "church", lt: "bažnyčia" },
        { en: "school", lt: "mokykla" },
        { en: "playground", lt: "vaikų žaidimų aikštelė" },
        { en: "near / near here", lt: "netoli / netoliese" }
      ],
      phrases: [
        { en: "Is there a … near here?", lt: "Ar netoliese yra…?" },
        { en: "There's one on the corner.", lt: "Vienas yra ant kampo." },
        { en: "How many … are there?", lt: "Kiek … yra?" },
        { en: "No, there isn't, but there's a … .", lt: "Ne, nėra, bet yra…" },
        { en: "There are a lot of …", lt: "Yra daug…" }
      ],
      quiz: [
        { type: "choice", q: "___ two bathrooms in our house.", options: ["There is", "There are", "It has"], answer: 1,
          explain: "Two bathrooms – daugiskaita → <b>There are</b>." },
        { type: "choice", q: "Is there ___ supermarket near here?", options: ["a", "an", "any"], answer: 0,
          explain: "Vienaskaita, „supermarket“ prasideda priebalsiu → <b>a</b>. <i>Any</i> – su daugiskaita." },
        { type: "choice", q: "There's ___ old cinema in the centre.", options: ["a", "an", "some"], answer: 1,
          explain: "„old“ prasideda balsio garsu → <b>an</b> old cinema." },
        { type: "choice", q: "There aren't ___ parks in my street.", options: ["some", "a", "any"], answer: 2,
          explain: "Daugiskaitos neiginys → <b>any</b>." },
        { type: "choice", q: "There's a café next to my flat. ___ café is very nice.", options: ["A", "The", "Some"], answer: 1,
          explain: "Kavinę jau paminėjome, aišku, apie kurią kalbame → <b>The</b>." },
        { type: "input", q: "Išversk: Mano mieste yra didelis parkas.", answer: ["There's a big park in my town", "There is a big park in my town", "There's a big park in my city", "There is a big park in my city"],
          explain: "Pradedame <b>There is</b>, nepamirštame <b>a</b>, vieta – gale." },
        { type: "input", q: "Įrašyk trumpą atsakymą: Are there any shops near your house? – Yes, ___ .", answer: ["there are"],
          explain: "Trumpas atsakymas į <i>Are there…?</i> – <b>Yes, there are.</b>" },
        { type: "order", words: ["many", "are", "how", "there", "rooms"], answer: "how many rooms are there", lt: "Kiek yra kambarių?" }
      ],
      speaking: {
        scenario: "You are a new colleague who has just moved to the learner's town. You know nothing about it. Ask the learner about her home and neighbourhood, then ask where to find useful places. Keep it friendly and natural; the learner should do most of the talking.",
        tasks: [
          "Ask about her flat or house: how many rooms there are, if there is a balcony, a garden, a lift.",
          "Ask what there is in her neighbourhood (shops, cafés, a park, a school, a bus stop) and get her to describe at least one place a second time with 'the' (There's a café… The café is…).",
          "Ask 'Is there a … near here?' about 3 places; encourage short answers (Yes, there is / No, there isn't, but…).",
          "Swap roles: the learner asks you at least 3 questions with 'Is there / Are there any / How many … are there?' about your (invented) hometown.",
          "Gently recast missing articles (*There is big park) and Lithuanian word order (*In my town is…)."
        ],
        successCriteria: [
          "Uses 'there is' and 'there are' correctly at least 6 times in total",
          "Uses a/an correctly before singular nouns in at least 5 sentences (no bare singular nouns)",
          "Uses at least 2 negative forms with 'any' or 'isn't a'",
          "Asks at least 3 correct questions with Is there / Are there any / How many … are there",
          "Uses 'the' for a second mention at least once"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- l02
    {
      id: "a1plus-u03-l02",
      type: "lesson",
      kind: "vocabulary",
      icon: "🛋️",
      title: "Kambariai, baldai ir vietos prielinksniai",
      titleEn: "Rooms, furniture, prepositions of place",
      sources: ["oxford-3000", "a2-key-topics", "headway"],
      canDo: [
        "Galiu apibūdinti savo butą ir pasakyti, kur kas yra.",
        "Galiu pasakyti, kuriame aukšte gyvenu."
      ],
      grammar: {
        title: "Kaip kalbėti apie butą ir sakyti, kur kas yra",
        explanation: [
          "<b>Flat</b> – butas daugiabutyje (amerikiečiai sako <i>apartment</i>), <b>house</b> – atskiras namas. Kambariai: <i>living room</i> (svetainė), <i>bedroom</i> (miegamasis), <i>kitchen</i> (virtuvė), <i>bathroom</i> (vonios kambarys), <i>hall</i> (prieškambaris).",
          "Aukštą sakome su <b>on the</b> + kelintinis skaitvardis: <i>I live <b>on the third floor</b>.</i> Britanijoje pirmas aukštas vadinamas <b>ground floor</b>, todėl jų <i>first floor</i> = mūsų antras aukštas. Žodis <b>floor</b> reiškia ir „grindys“.",
          "Vietos prielinksniai: <b>in</b> (viduje), <b>on</b> (ant paviršiaus), <b>under</b> (po), <b>next to</b> (šalia), <b>between</b> (tarp dviejų), <b>opposite</b> (priešais, kitoje pusėje – veidu į), <b>in front of</b> (priešais, prieš ką nors), <b>behind</b> (už).",
          "Po prielinksnio beveik visada eina artikelis ar savybinis įvardis: <i>on <b>the</b> shelf, under <b>my</b> bed, next to <b>the</b> window</i>. Lietuviškai prielinksnio ir linksnio užtenka („ant lentynos“), angliškai reikia ir <b>the</b>.",
          "Naudingos kolokacijos: <i>a comfortable sofa, a big wardrobe, a small fridge, a double bed</i>; <i>on the wall</i> (ant sienos, pvz., paveikslas), <i>in the corner</i> (kampe), <i>in the fridge</i> (šaldytuve)."
        ],
        table: [
          ["Kambarys", "Baldai ir daiktai"],
          ["living room", "sofa, armchair, TV, bookcase, carpet"],
          ["bedroom", "bed, wardrobe, desk, lamp, mirror"],
          ["kitchen", "fridge, cooker, table, chairs, cupboard"],
          ["bathroom", "shower, bath, washbasin, toilet"],
          ["hall", "door, shelf, coat hooks, mirror"]
        ],
        examples: [
          { en: "I live in a flat on the fifth floor.", lt: "Gyvenu bute penktame aukšte." },
          { en: "The sofa is between the window and the door.", lt: "Sofa yra tarp lango ir durų." },
          { en: "There's a lamp next to my bed.", lt: "Šalia mano lovos yra lempa." },
          { en: "My books are on the shelf above the desk.", lt: "Mano knygos ant lentynos virš rašomojo stalo." },
          { en: "The cat is sleeping under the table.", lt: "Katė miega po stalu." },
          { en: "There's a big mirror on the wall in the hall.", lt: "Prieškambaryje ant sienos kabo didelis veidrodis." },
          { en: "The TV is opposite the sofa.", lt: "Televizorius yra priešais sofą." }
        ],
        pitfalls: [
          "Be artikelio po prielinksnio: <i>The keys are on table.</i> ✗ → <b>The keys are on the table.</b> ✓",
          "<b>Opposite</b> ir <b>in front of</b>: <i>opposite</i> – kitoje pusėje, veidu į (per gatvę, per stalą); <i>in front of</i> – tiesiai priešais/prieš (automobilis prieš namą). Lietuviškai abu – „priešais“.",
          "Aukštas: <i>I live in the third floor</i> ✗ → <b>I live on the third floor</b> ✓. Ir nepainiok: <b>shelf</b> (lentyna) – <b>shelves</b> daugiskaitoje."
        ]
      },
      vocab: [
        { en: "living room", lt: "svetainė" },
        { en: "bedroom", lt: "miegamasis" },
        { en: "kitchen", lt: "virtuvė" },
        { en: "bathroom", lt: "vonios kambarys" },
        { en: "wardrobe", lt: "drabužių spinta" },
        { en: "shelf (shelves)", lt: "lentyna (lentynos)" },
        { en: "sofa", lt: "sofa" },
        { en: "armchair", lt: "fotelis" },
        { en: "fridge", lt: "šaldytuvas" },
        { en: "cooker", lt: "viryklė" },
        { en: "cupboard", lt: "spintelė (virtuvės)" },
        { en: "floor", lt: "aukštas; grindys" },
        { en: "next to / between", lt: "šalia / tarp" },
        { en: "opposite / in front of / behind", lt: "priešais (kitoje pusėje) / prieš / už" },
        { en: "under / on / in", lt: "po / ant / viduje" }
      ],
      phrases: [
        { en: "I live on the third floor.", lt: "Gyvenu trečiame aukšte." },
        { en: "It's a small flat, but it's very cosy.", lt: "Butas mažas, bet labai jaukus." },
        { en: "My favourite room is the … because …", lt: "Mano mėgstamiausias kambarys – …, nes…" },
        { en: "Where's the …? – It's next to the …", lt: "Kur yra…? – Šalia…" },
        { en: "There's a lovely view from the window.", lt: "Pro langą atsiveria gražus vaizdas." }
      ],
      quiz: [
        { type: "choice", q: "I keep my clothes in the ___.", options: ["fridge", "wardrobe", "cooker"], answer: 1,
          explain: "Drabužiai laikomi <b>wardrobe</b> (drabužių spintoje)." },
        { type: "choice", q: "We live ___ the second floor.", options: ["in", "at", "on"], answer: 2,
          explain: "Aukštas: <b>on</b> the second floor." },
        { type: "choice", q: "The lamp is ___ the bed and the window.", options: ["between", "next", "opposite"], answer: 0,
          explain: "Tarp dviejų daiktų → <b>between</b> … and …" },
        { type: "choice", q: "Kuris sakinys teisingas?", options: ["My phone is on table.", "My phone is on the table.", "My phone is on a the table."], answer: 1,
          explain: "Po prielinksnio reikia artikelio: <b>on the table</b>." },
        { type: "choice", q: "The milk is ___ the fridge.", options: ["in", "on", "under"], answer: 0,
          explain: "Šaldytuvo viduje → <b>in</b> the fridge." },
        { type: "input", q: "Išversk: Katė yra po sofa.", answer: ["The cat is under the sofa", "The cat's under the sofa"],
          explain: "„Po“ = <b>under</b>, prieš „sofa“ – <b>the</b>." },
        { type: "input", q: "Kaip angliškai „lentynos“ (daugiskaita)?", answer: ["shelves"],
          explain: "<b>shelf → shelves</b> (f keičiasi į v + es)." },
        { type: "order", words: ["is", "opposite", "the", "the", "TV", "sofa"], answer: "the tv is opposite the sofa", lt: "Televizorius yra priešais sofą." }
      ],
      speaking: {
        scenario: "The learner is showing you her flat or house on a video call, but your camera is broken – you can only imagine it from her words. You are a curious friend. Ask questions so that she describes each room and where things are. Then she 'moves' furniture in an imaginary new flat by giving you instructions.",
        tasks: [
          "Ask if she lives in a flat or a house and which floor it is on.",
          "Ask her to describe at least 3 rooms: what furniture there is and where it is (next to, opposite, between, under, on).",
          "Ask what her favourite room is and why.",
          "Play 'Where is it?': you name 4–5 personal objects (keys, phone, books, coat, laptop) and she says where they usually are.",
          "Role-play: she has a new empty flat and tells you, the delivery person, where to put the sofa, wardrobe, bed, TV and table."
        ],
        successCriteria: [
          "Names at least 8 different rooms or pieces of furniture correctly",
          "Uses at least 6 different prepositions of place correctly",
          "Uses 'on the … floor' correctly at least once",
          "Uses the/my after prepositions in at least 5 phrases (no bare nouns like 'on table')",
          "Gives a reason for her favourite room with 'because'"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- l03
    {
      id: "a1plus-u03-l03",
      type: "lesson",
      kind: "grammar",
      icon: "💪",
      title: "Can / can't: gebėjimas ir leidimas",
      titleEn: "Can / can't – ability and permission",
      sources: ["bc-grammar-a1a2", "egp", "core-inventory"],
      canDo: [
        "Galiu pasakyti, ką moku ir ko nemoku, ir paprašyti leidimo.",
        "Galiu pasakyti, ką galima ir ko negalima daryti mano mieste."
      ],
      grammar: {
        title: "Can: moku, galiu, galima",
        explanation: [
          "<b>Can</b> turi kelias reikšmes: <b>gebėjimą</b> (moku: <i>I can swim</i>), <b>galimybę</b> (galima: <i>You can buy tickets online</i>) ir <b>leidimą</b> (ar galiu?: <i>Can I park here?</i>).",
          "Forma visiems asmenims ta pati: <i>I can, you can, <b>she can</b>, they can</i> – jokios <b>-s</b>! Po <b>can</b> eina veiksmažodis be <i>to</i>: <i>She can <b>drive</b></i> (ne <i>to drive</i>, ne <i>drives</i>).",
          "Neiginys – <b>can't</b> (<i>cannot</i>). Klausime <b>can</b> keliauja prieš veiksnį – <b>do</b> nereikia: <i>Can you cook?</i> Trumpi atsakymai: <i>Yes, I can. / No, I can't.</i> Klausiamasis žodis eina pirmas: <i>What languages can you speak?</i>",
          "Tarimas svarbus! Teiginyje <b>can</b> tariamas trumpai ir silpnai /kən/ – beveik „kn“: <i>I can SWIM</i>. O <b>can't</b> tariamas aiškiai ir ilgai /kɑːnt/ (britiškai): <i>I CAN'T swim</i>. Kadangi <i>t</i> gale dažnai „nuryjamas“, skirtumą girdime iš balsio: trumpas ir silpnas = can, ilgas ir kirčiuotas = can't. Trumpame atsakyme <i>Yes, I can</i> – pilnas /kæn/.",
          "Gebėjimo laipsnį galima patikslinti: <i>I can swim <b>very well</b> / <b>quite well</b> / <b>a bit</b>. I can't swim <b>at all</b>.</i>"
        ],
        table: [
          ["", "Forma", "Pavyzdys"],
          ["+", "I/you/he/she/we/they + can + veiksmažodis", "She can speak French."],
          ["−", "can't (cannot) + veiksmažodis", "We can't park here."],
          ["?", "Can + veiksnys + veiksmažodis?", "Can you drive?"],
          ["Atsakymas", "Yes, … can. / No, … can't.", "Yes, I can. / No, she can't."],
          ["Leidimas", "Can I …?", "Can I open the window?"]
        ],
        examples: [
          { en: "I can speak Lithuanian, Russian and a bit of English.", lt: "Moku lietuviškai, rusiškai ir šiek tiek angliškai." },
          { en: "My son can't swim yet.", lt: "Mano sūnus dar nemoka plaukti." },
          { en: "Can you ride a bike? – Yes, I can.", lt: "Ar moki važiuoti dviračiu? – Taip, moku." },
          { en: "Can I park here? – No, you can't. It's for residents only.", lt: "Ar galiu čia pastatyti automobilį? – Ne, negalima. Tik gyventojams." },
          { en: "You can buy bus tickets on your phone.", lt: "Autobuso bilietus galima nusipirkti telefone." },
          { en: "Can I sit here? – Of course.", lt: "Ar galiu čia atsisėsti? – Žinoma." },
          { en: "She can cook really well, but she can't sing at all.", lt: "Ji labai gerai gamina, bet visai nemoka dainuoti." }
        ],
        pitfalls: [
          "Pridedama -s arba „to“: <i>She cans swim. He can to drive.</i> ✗ → <b>She can swim. He can drive.</b> ✓",
          "Klausimas su „do“ arba be apvertimo: <i>Do you can cook? You can cook?</i> ✗ → <b>Can you cook?</b> ✓",
          "Lietuviškai „moku“ ir „galiu“ – skirtingi žodžiai, angliškai abu dažniausiai <b>can</b>. O „Ar galima…?“ – <b>Can I…?</b>, ne <i>Is it possible…?</i> kiekvienoje situacijoje (tai skamba per daug oficialiai)."
        ]
      },
      vocab: [
        { en: "swim", lt: "plaukti" },
        { en: "drive", lt: "vairuoti" },
        { en: "ride a bike", lt: "važiuoti dviračiu" },
        { en: "cook", lt: "gaminti valgį" },
        { en: "sing", lt: "dainuoti" },
        { en: "dance", lt: "šokti" },
        { en: "play the guitar / the piano", lt: "groti gitara / pianinu" },
        { en: "speak (a language)", lt: "kalbėti (kalba)" },
        { en: "ski", lt: "slidinėti" },
        { en: "park (a car)", lt: "pastatyti (automobilį)" },
        { en: "use (a phone, the Wi-Fi)", lt: "naudotis (telefonu, belaidžiu internetu)" },
        { en: "very well / quite well", lt: "labai gerai / gana gerai" },
        { en: "a bit", lt: "truputį" },
        { en: "not at all", lt: "visai ne" }
      ],
      phrases: [
        { en: "Can I …, please?", lt: "Ar galiu…?" },
        { en: "Yes, of course. / Sure, go ahead.", lt: "Taip, žinoma. / Prašom." },
        { en: "Sorry, you can't …", lt: "Atsiprašau, negalima…" },
        { en: "I can … quite well, but I can't …", lt: "Gana gerai moku…, bet nemoku…" },
        { en: "What can you do in your town?", lt: "Ką galima veikti tavo mieste?" },
        { en: "Can you help me?", lt: "Ar galite man padėti?" }
      ],
      quiz: [
        { type: "choice", q: "My brother ___ play the guitar.", options: ["cans", "can", "can to"], answer: 1,
          explain: "<b>Can</b> visiems asmenims vienodas, be -s ir be „to“." },
        { type: "choice", q: "___ you speak German?", options: ["Do", "Can", "Are"], answer: 1,
          explain: "Klausime <b>can</b> stovi pirmas; <i>do</i> nereikia." },
        { type: "choice", q: "Can I use the Wi-Fi? – Yes, you ___.", options: ["can", "do", "are"], answer: 0,
          explain: "Trumpas atsakymas kartoja tą patį veiksmažodį: <b>Yes, you can.</b>" },
        { type: "choice", q: "Kuris sakinys reiškia leidimo prašymą?", options: ["I can swim.", "Can I sit here?", "She can't cook."], answer: 1,
          explain: "<b>Can I…?</b> – prašome leidimo." },
        { type: "choice", q: "Kuriame sakinyje „can“ tariamas silpnai /kən/?", options: ["Yes, I can.", "I can speak English.", "Can? Really?"], answer: 1,
          explain: "Sakinio viduryje teiginyje <b>can</b> nekirčiuotas: /kən/. Trumpame atsakyme ir pabrėžiant – pilnas /kæn/." },
        { type: "input", q: "Išversk: Ji nemoka vairuoti.", answer: ["She can't drive", "She cannot drive", "She can not drive"],
          explain: "<b>can't</b> + veiksmažodis be „to“." },
        { type: "input", q: "Išversk: Ar galiu čia pastatyti automobilį?", answer: ["Can I park here", "Can I park my car here", "Can I park the car here"],
          explain: "Leidimas: <b>Can I park here?</b>" },
        { type: "order", words: ["languages", "can", "what", "speak", "you"], answer: "what languages can you speak", lt: "Kokiomis kalbomis moki kalbėti?" }
      ],
      speaking: {
        scenario: "Part 1: A friendly chat about skills – you are making a 'skills profile' for a community volunteer group and interview the learner. Part 2: The learner is a visitor in a small hotel and you are the receptionist; she asks permission for several things.",
        tasks: [
          "Ask what she can and can't do: languages, sports, cooking, music, driving, technology; ask how well (very well, quite well, a bit, not at all).",
          "Ask about her family members' skills (Can your partner/child/mother…?) so she uses he/she can without -s.",
          "Ask what people can do in her town (You can visit…, you can't…).",
          "Role-play at the hotel: she asks at least 4 permission questions (Can I park here? Can I use the Wi-Fi? Can I have breakfast at 6? Can I leave my bag here?). Say yes to some and no to some.",
          "Listen for and recast errors like *Do you can, *She cans, *can to."
        ],
        successCriteria: [
          "Makes at least 5 correct affirmative and 3 correct negative sentences with can/can't",
          "Asks at least 4 correct 'Can I …?' permission questions",
          "Uses can with he/she without -s and without 'to' every time",
          "Gives at least 2 correct short answers (Yes, I can / No, I can't)",
          "Qualifies ability with very well / quite well / a bit / not at all at least twice"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- l04
    {
      id: "a1plus-u03-l04",
      type: "lesson",
      kind: "vocabulary",
      icon: "🏙️",
      title: "Vietos mieste ir apibūdinimas",
      titleEn: "Places in town and adjectives",
      sources: ["oxford-3000", "a2-key-topics", "empower"],
      canDo: [
        "Galiu papasakoti, kas yra mano mieste ir koks jis.",
        "Galiu pasakyti, kur ką nusipirkti ar sutvarkyti mieste."
      ],
      grammar: {
        title: "Miesto vietos ir būdvardžiai",
        explanation: [
          "Daug vietų mieste turi pastovius pavadinimus: <i>post office</i> (paštas), <i>bus station / train station</i> (autobusų / traukinių stotis), <i>town hall</i> (rotušė, savivaldybė), <i>shopping centre</i> (prekybos centras). Britanijoje vaistinė dažnai vadinama <b>chemist's</b> (tariama „kemists“) arba <b>pharmacy</b>.",
          "Lietuviškai sakome „einu į paštą / į banką“, angliškai beveik visada su <b>the</b>: <i>I'm going to <b>the</b> bank / <b>the</b> post office / <b>the</b> station.</i> O apie tai, kas yra mieste, – su <b>a</b>: <i>There's <b>a</b> library in my street.</i>",
          "Būdvardžiai poromis (priešingybės): <i>quiet – noisy, clean – dirty, modern – old, safe – dangerous, big – small, beautiful – ugly, busy – quiet</i>. Būdvardis eina <b>prieš</b> daiktavardį (<i>a quiet street</i>) arba po <b>to be</b> (<i>The street is quiet</i>). Būdvardis nekeičia formos: <i>old houses</i> (ne <i>olds</i>).",
          "Stiprinimui: <b>very</b> (labai), <b>really</b> (tikrai, labai – šnekamojoje kalboje), <b>quite</b> (gana): <i>My town is quite small but really beautiful.</i> Neigiamai švelniau skamba <b>not very</b>: <i>It isn't very clean</i> (vietoj <i>It's dirty</i>).",
          "Klausimas apie vietą: <b>What's your town like?</b> – „Koks tavo miestas?“ Čia <i>like</i> nereiškia „patinka“! Atsakymas: <i>It's quiet and green.</i>"
        ],
        table: [
          ["Kur?", "Ką ten darome?"],
          ["post office", "send a letter / a parcel"],
          ["chemist's / pharmacy", "buy medicine"],
          ["bank", "change money, open an account"],
          ["supermarket", "buy food"],
          ["library", "borrow books"],
          ["station", "catch a train or a bus"],
          ["hospital", "see a doctor"]
        ],
        examples: [
          { en: "There's a library and a post office in the centre.", lt: "Centre yra biblioteka ir paštas." },
          { en: "I'm going to the chemist's to buy some medicine.", lt: "Einu į vaistinę nusipirkti vaistų." },
          { en: "My street is very quiet at night.", lt: "Mano gatvė naktį labai rami." },
          { en: "The old town is really beautiful, but it's quite noisy in summer.", lt: "Senamiestis tikrai gražus, bet vasarą gana triukšmingas." },
          { en: "What's your neighbourhood like? – It's modern and safe.", lt: "Koks tavo rajonas? – Modernus ir saugus." },
          { en: "The station isn't very clean.", lt: "Stotis nelabai švari." },
          { en: "There are a lot of new cafés near the river.", lt: "Prie upės yra daug naujų kavinių." }
        ],
        pitfalls: [
          "„What is your town like?“ – ne klausimas, ar tau patinka! Atsakyk apibūdinimu: <i>It's small and quiet</i>, ne <i>Yes, I like it</i>.",
          "Būdvardis su -s: <i>There are many olds houses.</i> ✗ → <b>There are a lot of old houses.</b> ✓",
          "<b>Pharmacy</b> ar <b>chemist's</b>, ne <i>apothecary</i> (tai senovinis žodis). Ir <b>shop</b> – parduotuvė, o <b>magazine</b> – žurnalas (ne parduotuvė, kaip rusų „магазин“)."
        ]
      },
      vocab: [
        { en: "post office", lt: "paštas" },
        { en: "chemist's / pharmacy", lt: "vaistinė" },
        { en: "bank", lt: "bankas" },
        { en: "supermarket", lt: "prekybos centras, didelė maisto parduotuvė" },
        { en: "station", lt: "stotis" },
        { en: "library", lt: "biblioteka" },
        { en: "hospital", lt: "ligoninė" },
        { en: "square", lt: "aikštė" },
        { en: "quiet / noisy", lt: "ramus / triukšmingas" },
        { en: "clean / dirty", lt: "švarus / nešvarus" },
        { en: "modern / old", lt: "modernus / senas" },
        { en: "safe / dangerous", lt: "saugus / pavojingas" },
        { en: "beautiful / ugly", lt: "gražus / negražus" },
        { en: "busy", lt: "judrus, pilnas žmonių" },
        { en: "very / really / quite", lt: "labai / tikrai / gana" }
      ],
      phrases: [
        { en: "What's your town like?", lt: "Koks tavo miestas?" },
        { en: "It's quite small, but it's really nice.", lt: "Jis gana mažas, bet tikrai gražus." },
        { en: "The best thing about my town is …", lt: "Geriausia mano mieste yra…" },
        { en: "It isn't very … .", lt: "Jis nelabai…" },
        { en: "You can … there.", lt: "Ten galima…" }
      ],
      quiz: [
        { type: "choice", q: "You buy medicine at the ___.", options: ["library", "chemist's", "post office"], answer: 1,
          explain: "Vaistai – <b>chemist's</b> (pharmacy)." },
        { type: "choice", q: "You borrow books from the ___.", options: ["library", "bookshop", "bank"], answer: 0,
          explain: "Knygas skolinamės <b>library</b> (bibliotekoje). <i>Bookshop</i> – knygynas, ten perkame." },
        { type: "choice", q: "The opposite of „noisy“ is ___.", options: ["dirty", "quiet", "busy"], answer: 1,
          explain: "Noisy ↔ <b>quiet</b>." },
        { type: "choice", q: "What's your town like?", options: ["Yes, I like it.", "It's small and green.", "I like my town."], answer: 1,
          explain: "<i>What's … like?</i> klausia apibūdinimo: <b>It's small and green.</b>" },
        { type: "choice", q: "I'm going to ___ post office.", options: ["a", "—", "the"], answer: 2,
          explain: "Įprastos miesto vietos, į kurias einame: <b>the</b> post office, the bank, the station." },
        { type: "input", q: "Išversk: Mano gatvė labai rami.", answer: ["My street is very quiet", "My street's very quiet", "My street is really quiet"],
          explain: "<b>very quiet</b> – būdvardis po „is“." },
        { type: "input", q: "Įrašyk priešingybę: safe ↔ ___", answer: ["dangerous"],
          explain: "Safe ↔ <b>dangerous</b>." },
        { type: "order", words: ["quite", "town", "is", "my", "modern"], answer: "my town is quite modern", lt: "Mano miestas gana modernus." }
      ],
      speaking: {
        scenario: "You are a tourist planning to spend a weekend in the learner's town (or a town she knows well). Ask her what the town is like and where to do practical things. Then compare it briefly with your own (invented) small English town.",
        tasks: [
          "Ask 'What's your town like?' and push for 4–5 adjectives (quiet/noisy, clean, safe, modern/old, beautiful) with very/quite/really.",
          "Ask where you can do practical things: buy medicine, send a postcard, change money, borrow a book, catch a train.",
          "Ask about her own neighbourhood: what there is, what there isn't, and what the best thing about it is.",
          "Describe your own (invented) town in 2–3 sentences and ask her to ask you at least 2 questions about it.",
          "Recast errors like *olds houses, *I go to post office, and 'What's it like?' answered with 'I like it'."
        ],
        successCriteria: [
          "Names at least 6 different places in town correctly",
          "Uses at least 6 different adjectives to describe places",
          "Uses very/really/quite or not very at least 4 times",
          "Answers 'What's … like?' with a description (not with 'I like')",
          "Uses 'the' with places she goes to (to the bank/the station) at least twice"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- l05
    {
      id: "a1plus-u03-l05",
      type: "lesson",
      kind: "functional",
      icon: "🧭",
      title: "Kaip nueiti? Kelio klausimas",
      titleEn: "Asking for and giving directions",
      sources: ["core-inventory", "empower", "headway"],
      canDo: [
        "Galiu paklausti kelio ir suprasti paprastus nurodymus.",
        "Galiu paaiškinti turistui, kaip nueiti iki artimiausios vietos.",
        "Galiu pasitikslinti, ar gerai supratau."
      ],
      grammar: {
        title: "Kelio klausimas žingsnis po žingsnio",
        explanation: [
          "<b>1. Pradėk mandagiai.</b> Kalbinant nepažįstamąjį gatvėje angliškai būtina pradėti <b>Excuse me</b> (atsiprašau). Tada klausimas: <i>Is there a chemist's near here?</i> arba <i>How do I get to the station?</i> Mandagiau: <i>Could you tell me the way to the station, please?</i>",
          "<b>2. Supratimas.</b> Nurodymuose naudojama liepiamoji nuosaka – tai nėra nemandagu: <i><b>Go</b> straight on. <b>Turn</b> left at the bank. <b>Take</b> the second street on the right.</i> Vieta: <i>It's on the corner. It's opposite the church. It's next to the post office. It's on your left.</i>",
          "<b>3. Pasitikslink.</b> Pakartok svarbiausią dalį klausimu: <i>So I turn left at the bank?</i> <i>The second street on the right?</i> Jei nesupratai: <i>Sorry, can you say that again, please?</i> <i>Is it far?</i> – <i>No, it's about five minutes' walk.</i>",
          "<b>4. Padėkok.</b> <i>Thanks a lot! / Thank you very much.</i> Jei pats nežinai kelio: <i>Sorry, I'm not from here.</i> Britai ir kiti anglakalbiai labai dažnai vartoja <b>please</b>, <b>thank you</b> ir <b>sorry</b> – lietuviui gali atrodyti per daug, bet be jų skamba šiurkščiai.",
          "Atkreipk dėmesį: <b>on the left / on the right</b> (kairėje / dešinėje), bet <b>turn left / turn right</b> – be prielinksnio. <b>Go past</b> = praeiti pro: <i>Go past the supermarket.</i> <b>Go along</b> = eiti (gatve): <i>Go along this street.</i>"
        ],
        table: [
          ["Situacija", "Neutraliai", "Mandagiau"],
          ["Klausti", "Where's the station?", "Excuse me, could you tell me the way to the station?"],
          ["Klausti", "Is there a bank near here?", "Excuse me, is there a bank near here, please?"],
          ["Nurodyti", "Go straight on.", "Just go straight on."],
          ["Pasitikslinti", "Left at the bank?", "So I turn left at the bank?"],
          ["Nesupratai", "Sorry?", "Sorry, could you say that again, please?"]
        ],
        examples: [
          { en: "Excuse me, how do I get to the train station?", lt: "Atsiprašau, kaip nueiti iki traukinių stoties?" },
          { en: "Go straight on and turn right at the traffic lights.", lt: "Eikite tiesiai ir prie šviesoforo pasukite į dešinę." },
          { en: "Take the second street on the left.", lt: "Sukite į antrą gatvę kairėje." },
          { en: "The pharmacy is on the corner, opposite the bank.", lt: "Vaistinė yra ant kampo, priešais banką." },
          { en: "So I go past the church and it's on my right?", lt: "Vadinasi, praeinu pro bažnyčią, ir ji bus dešinėje?" },
          { en: "Is it far? – No, it's about five minutes' walk.", lt: "Ar toli? – Ne, apie penkias minutes pėsčiomis." },
          { en: "Sorry, I'm not from here.", lt: "Atsiprašau, aš ne vietinis (ne vietinė)." }
        ],
        pitfalls: [
          "Pradedama be „Excuse me“: <i>Where is station?</i> ✗ → <b>Excuse me, where's the station?</b> ✓ (ir nepamiršk <b>the</b>).",
          "<i>Turn on the left</i> ✗ → <b>Turn left</b> ✓; bet <b>It's on the left</b> ✓. Lietuviškai „į kairę“ ir „kairėje“ – angliškai tai skirtingos konstrukcijos.",
          "„Kaip nueiti?“ – ne <i>How to go to the station?</i> ✗, o <b>How do I get to the station?</b> ✓"
        ]
      },
      vocab: [
        { en: "go straight on", lt: "eiti tiesiai" },
        { en: "turn left / right", lt: "pasukti į kairę / dešinę" },
        { en: "on the left / right", lt: "kairėje / dešinėje" },
        { en: "take the first / second street", lt: "sukti į pirmą / antrą gatvę" },
        { en: "go past", lt: "praeiti pro" },
        { en: "go along", lt: "eiti (gatve, palei)" },
        { en: "corner", lt: "kampas" },
        { en: "traffic lights", lt: "šviesoforas" },
        { en: "crossroads", lt: "sankryža" },
        { en: "bridge", lt: "tiltas" },
        { en: "roundabout", lt: "žiedinė sankryža" },
        { en: "map", lt: "žemėlapis" },
        { en: "far / near", lt: "toli / arti" },
        { en: "five minutes' walk", lt: "penkios minutės pėsčiomis" }
      ],
      phrases: [
        { en: "Excuse me, is there a … near here?", lt: "Atsiprašau, ar netoliese yra…?" },
        { en: "How do I get to …?", lt: "Kaip nueiti / nuvykti iki…?" },
        { en: "Could you tell me the way to …, please?", lt: "Gal galėtumėte pasakyti, kaip nueiti iki…?" },
        { en: "So I turn left at the bank?", lt: "Vadinasi, prie banko suku į kairę?" },
        { en: "Is it far from here?", lt: "Ar tai toli nuo čia?" },
        { en: "Sorry, could you say that again?", lt: "Atsiprašau, ar galėtumėte pakartoti?" },
        { en: "You can't miss it.", lt: "Tikrai nepraeisite (lengvai rasite)." },
        { en: "Sorry, I'm not from here.", lt: "Atsiprašau, aš ne vietinis (ne vietinė)." }
      ],
      quiz: [
        { type: "choice", q: "___ me, is there a bank near here?", options: ["Sorry", "Excuse", "Please"], answer: 1,
          explain: "Kalbinant nepažįstamąjį: <b>Excuse me</b>." },
        { type: "choice", q: "Turn ___ at the traffic lights.", options: ["on the left", "left", "to left"], answer: 1,
          explain: "Su <i>turn</i> – be prielinksnio: <b>turn left</b>." },
        { type: "choice", q: "The museum is ___ your right.", options: ["on", "in", "at"], answer: 0,
          explain: "Vieta: <b>on</b> your right / on the left." },
        { type: "choice", q: "Kaip pasitikslinti nurodymą?", options: ["So I take the second street on the left?", "Second street.", "I don't understand you."], answer: 0,
          explain: "Pakartojame svarbiausią dalį klausimu: <b>So I…?</b>" },
        { type: "choice", q: "Is it far? – No, it's about five minutes' ___.", options: ["walking", "walk", "foot"], answer: 1,
          explain: "Pastovi frazė: <b>five minutes' walk</b>." },
        { type: "input", q: "Išversk: Eikite tiesiai.", answer: ["Go straight on", "Go straight ahead", "Go straight"],
          explain: "<b>Go straight on</b> (britiškai) arba <i>go straight ahead</i>." },
        { type: "input", q: "Išversk: Kaip nueiti iki stoties?", answer: ["How do I get to the station", "How can I get to the station", "How do I get to the train station", "How do I get to the bus station"],
          explain: "<b>How do I get to</b> + the + vieta?" },
        { type: "order", words: ["second", "take", "on", "the", "the", "street", "left"], answer: "take the second street on the left", lt: "Sukite į antrą gatvę kairėje." }
      ],
      speaking: {
        scenario: "Role-play in two rounds. Round 1: You are a tourist in the learner's town (or near her home/workplace) and stop her in the street to ask the way to three places. Round 2: The learner is a tourist in a small English town; you are a local. Describe a simple town layout first (High Street, a bank on the corner, a church opposite the park, the station at the end of the street) and she asks you the way.",
        tasks: [
          "Round 1: start with 'Excuse me…' and ask how to get to a supermarket, a pharmacy and the bus or train station near her home; she gives directions.",
          "Ask her to repeat or clarify once (Sorry, is that the first or the second street?) and ask 'Is it far?'.",
          "Round 2: she asks you the way to 2 places using 'Excuse me, is there a … near here?' and 'How do I get to…?'.",
          "Give directions with 3 steps; she must check one detail ('So I turn left at the bank?') and thank you.",
          "At the end, ask her to explain how to get from her home to her favourite place in town."
        ],
        successCriteria: [
          "Starts requests politely with 'Excuse me' and ends with thanks in both role-plays",
          "Gives directions with at least 6 correct imperatives (go, turn, take, go past…)",
          "Uses at least 3 location phrases correctly (on the corner, opposite, next to, on the left/right)",
          "Checks understanding at least twice with a 'So I…?' question or a request to repeat",
          "Does not confuse 'turn left' with 'on the left'"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- l06
    {
      id: "a1plus-u03-l06",
      type: "lesson",
      kind: "grammar",
      icon: "👉",
      title: "Liepiamoji nuosaka ir this/that/these/those",
      titleEn: "Imperatives and demonstratives",
      sources: ["bc-grammar-a1a2", "egp"],
      canDo: [
        "Galiu duoti paprastus nurodymus ir parodyti daiktus.",
        "Galiu suprasti paprastus užrašus ir ženklus."
      ],
      grammar: {
        title: "Darykite! Nedarykite! Šitas ar anas?",
        explanation: [
          "<b>Liepiamoji nuosaka</b> angliškai labai paprasta: veiksmažodžio pagrindinė forma be veiksnio – <b>Open</b> the window. <b>Sit</b> down. <b>Turn</b> left. Neigiama forma: <b>Don't</b> + veiksmažodis – <b>Don't</b> park here. <b>Don't</b> touch!",
          "Lietuviškai turime „atidaryk“ ir „atidarykite“, angliškai forma viena – <b>Open</b>. Mandagumą rodome žodžiu <b>please</b> ir intonacija: <i>Come in, please. Please don't smoke here.</i> Liepiamąją nuosaką naudojame nurodymams, receptams, kelio aiškinimui, ženklams ir draugiškiems pasiūlymams (<i>Have a seat! Help yourself!</i>). Kartu pasiūlyti – <b>Let's</b>: <i>Let's go!</i>",
          "<b>This / these</b> – arti (šitas, šitie), <b>that / those</b> – toliau (anas, tie). <b>This, that</b> – vienaskaita; <b>these, those</b> – daugiskaita: <i>this chair, these chairs; that house, those houses.</i>",
          "Kad nekartotume daiktavardžio, naudojame <b>one</b> (vienaskaita) ir <b>ones</b> (daugiskaita): <i>I don't like this lamp. I like <b>that one</b>.</i> <i>Which shoes? – <b>The black ones</b>.</i> Lietuviškai sakytume tiesiog „aną“ ar „juodus“.",
          "Telefone ar prisistatydami sakome <b>This is</b>…: <i>This is my flat. This is Tom.</i> O apie tai, kas buvo ką tik pasakyta: <i>That's great! That's right.</i>"
        ],
        table: [
          ["", "Arti (čia)", "Toli (ten)"],
          ["Vienaskaita", "this (+ one)", "that (+ one)"],
          ["Daugiskaita", "these (+ ones)", "those (+ ones)"],
          ["Liepiamoji +", "Open the door.", "Turn left."],
          ["Liepiamoji −", "Don't open the door.", "Don't turn left."]
        ],
        examples: [
          { en: "Please close the door.", lt: "Uždaryk (uždarykite) duris, prašau." },
          { en: "Don't park in front of the garage.", lt: "Nestatyk automobilio prie garažo." },
          { en: "This is my bedroom and that's the bathroom.", lt: "Čia mano miegamasis, o ten – vonios kambarys." },
          { en: "Are these your keys? – No, those are my keys, on the shelf.", lt: "Ar šitie tavo raktai? – Ne, mano raktai anie, ant lentynos." },
          { en: "I don't like this sofa. I prefer that one.", lt: "Man nepatinka ši sofa. Labiau patinka ana." },
          { en: "Which glasses? – The blue ones.", lt: "Kurios stiklinės? – Mėlynos." },
          { en: "Have a seat and help yourself to some coffee.", lt: "Prisėsk ir įsipilk kavos." },
          { en: "Don't worry, it's easy!", lt: "Nesijaudink, tai lengva!" }
        ],
        pitfalls: [
          "Liepiamoji su „you“ arba „not“: <i>You don't touch! Not touch!</i> ✗ → <b>Don't touch!</b> ✓",
          "Daugiskaita su „this“: <i>this shoes, that people</i> ✗ → <b>these shoes, those people</b> ✓. Tarimas: <b>this</b> /ðɪs/ – trumpas, <b>these</b> /ðiːz/ – ilgas ir su /z/.",
          "„One“ pamirštamas: <i>I like the red.</i> ✗ → <b>I like the red one.</b> ✓ Po būdvardžio daiktavardis ar <i>one</i> privalomas."
        ]
      },
      vocab: [
        { en: "open / close", lt: "atidaryti / uždaryti" },
        { en: "push / pull", lt: "stumti / traukti" },
        { en: "turn on / turn off", lt: "įjungti / išjungti" },
        { en: "come in", lt: "užeiti, įeiti" },
        { en: "sit down", lt: "atsisėsti" },
        { en: "wait", lt: "laukti" },
        { en: "touch", lt: "liesti" },
        { en: "smoke", lt: "rūkyti" },
        { en: "take off (your shoes)", lt: "nusiauti (batus), nusivilkti" },
        { en: "keep (quiet)", lt: "laikytis (tylos)" },
        { en: "sign", lt: "ženklas, užrašas" },
        { en: "entrance / exit", lt: "įėjimas / išėjimas" },
        { en: "this / that", lt: "šis / anas" },
        { en: "these / those", lt: "šie / anie" },
        { en: "one / ones", lt: "(tas) vienas / (tie)" }
      ],
      phrases: [
        { en: "Come in, please.", lt: "Prašom užeiti." },
        { en: "Have a seat.", lt: "Prisėskite." },
        { en: "Help yourself.", lt: "Vaišinkitės." },
        { en: "Don't worry.", lt: "Nesijaudink." },
        { en: "Which one? – That one.", lt: "Kurį? – Aną." },
        { en: "Let's go!", lt: "Eime!" }
      ],
      quiz: [
        { type: "choice", q: "___ smoke in the building, please.", options: ["Not", "Don't", "No"], answer: 1,
          explain: "Neigiama liepiamoji: <b>Don't</b> + veiksmažodis." },
        { type: "choice", q: "Look at ___ birds over there!", options: ["this", "these", "those"], answer: 2,
          explain: "Daugiskaita + toli („over there“) → <b>those</b>." },
        { type: "choice", q: "___ is my sister, Rūta. (stovi šalia tavęs)", options: ["This", "These", "Those"], answer: 0,
          explain: "Vienas žmogus, arti → <b>This is</b>…" },
        { type: "choice", q: "Which bag do you want? – The red ___.", options: ["one", "ones", "it"], answer: 0,
          explain: "Vienaskaita → <b>the red one</b>." },
        { type: "choice", q: "Ženklas ant durų, kurias reikia patraukti į save:", options: ["PUSH", "PULL", "EXIT"], answer: 1,
          explain: "<b>Pull</b> – traukti, <i>push</i> – stumti." },
        { type: "input", q: "Išversk: Neliesk!", answer: ["Don't touch", "Don't touch it", "Do not touch"],
          explain: "<b>Don't touch!</b> – be „you“." },
        { type: "input", q: "Įrašyk: I don't like these shoes. I like those black ___ .", answer: ["ones"],
          explain: "Daugiskaita → <b>ones</b>." },
        { type: "order", words: ["take", "please", "off", "shoes", "your"], answer: "please take off your shoes", lt: "Prašom nusiauti batus." }
      ],
      speaking: {
        scenario: "You are a guest arriving at the learner's home for the first time (imagine it is her real home). She welcomes you, gives you house rules and instructions, and shows you things around the flat. Then you play a quick 'shop' game: you are in a furniture shop together choosing things.",
        tasks: [
          "Arrive at the door: she welcomes you with imperatives (Come in, Have a seat, Help yourself…).",
          "Ask about house rules; she gives at least 3 positive and 2 negative instructions (Please take off your shoes, Don't open that window…).",
          "Ask 'What's this? What are those?' about things in the room so she uses this/that/these/those.",
          "Furniture-shop game: you point at items near and far ('Do you like this lamp or that one?') and she chooses with one/ones and gives a reason.",
          "Ask her to explain how to use one thing in her home (the coffee machine, the washing machine, the TV) with 4 imperative steps."
        ],
        successCriteria: [
          "Uses at least 6 correct imperatives, including at least 2 with 'Don't'",
          "Uses this/that/these/those correctly at least 5 times with singular/plural agreement",
          "Uses one/ones correctly at least twice",
          "Uses 'please' or a friendly tone so instructions sound polite",
          "Explains a simple process in at least 4 clear steps"
        ],
        minLearnerTurns: 8
      }
    },

    // ---------------------------------------------------------------- l07
    {
      id: "a1plus-u03-l07",
      type: "lesson",
      kind: "skills",
      icon: "🏘️",
      title: "Mano namai ir kaimynystė",
      titleEn: "My home and neighbourhood",
      sources: ["a2-key", "b1-preliminary"],
      canDo: [
        "Galiu apibūdinti savo rajoną ir paprastą paveikslėlį.",
        "Galiu suprasti trumpą tekstą apie kieno nors namus ir rajoną."
      ],
      grammar: {
        title: "Kaip skaityti trumpą tekstą ir apibūdinti paveikslėlį",
        explanation: [
          "<b>Skaitymas: pirmiausia bendra mintis.</b> Pirmą kartą perskaityk tekstą greitai ir atsakyk sau: kas kalba? kur gyvena? patinka ar nepatinka? Nesustok prie kiekvieno nežinomo žodžio.",
          "<b>Paskui – detalės.</b> Perskaityk klausimą ir ieškok tekste raktinių žodžių (vietų, skaičių, būdvardžių). Atsakymas tekste dažnai būna kitais žodžiais: klausime <i>quiet</i>, o tekste <i>there isn't much noise</i>.",
          "<b>Nežinomą žodį spėk</b> iš konteksto: kokia tai kalbos dalis (daiktas? veiksmas? savybė?) ir kas aplink. <i>There's a bakery – the bread is amazing</i> → bakery tikriausiai „kepykla“.",
          "<b>Paveikslėlio apibūdinimas</b> (kaip Cambridge egzamine): pradėk bendrai – <i>This is a picture of a street in a small town.</i> Tada eik tvarkingai: <i>In the middle there's… On the left there are… On the right… In the background (gale)… In the foreground (priekyje)…</i> Baik nuomone: <i>It looks quiet and friendly.</i>",
          "Jei nežinai žodžio, nesustok – apibūdink kitaip: <i>a thing for sitting in the park</i> (= bench, suoliukas). Svarbiausia – kalbėti toliau."
        ],
        table: [
          ["Paveikslėlio dalis", "Frazė"],
          ["Pradžia", "This is a picture of…"],
          ["Vidurys", "In the middle there's…"],
          ["Kairė / dešinė", "On the left / On the right there are…"],
          ["Priekis / galas", "In the foreground / In the background…"],
          ["Nuomonė", "It looks… / I think it's…"]
        ],
        examples: [
          { en: "This is a picture of a quiet street.", lt: "Šiame paveikslėlyje – rami gatvė." },
          { en: "In the middle there's a small café with tables outside.", lt: "Viduryje – maža kavinė su staliukais lauke." },
          { en: "On the left there are some old houses.", lt: "Kairėje – keli seni namai." },
          { en: "In the background I can see a church.", lt: "Fone matau bažnyčią." },
          { en: "It looks really friendly and safe.", lt: "Atrodo tikrai jauki ir saugi vieta." },
          { en: "What I like about my area is the park.", lt: "Mano rajone man labiausiai patinka parkas." }
        ],
        pitfalls: [
          "Paveikslėlį apibūdinant pamirštamas „there is/are“: <i>On the left two houses.</i> ✗ → <b>On the left there are two houses.</b> ✓",
          "<i>On the picture</i> ✗ → <b>In the picture</b> ✓ (lietuviškai „paveikslėlyje“ – ir angliškai <b>in</b>).",
          "Skaitant verčiama kiekvienas žodis – taip prarandama esmė. Pirmiausia ieškok bendros minties, o žodyną naudok tik raktiniams žodžiams."
        ]
      },
      vocab: [
        { en: "area", lt: "rajonas, vietovė" },
        { en: "neighbour", lt: "kaimynas, kaimynė" },
        { en: "bakery", lt: "kepykla" },
        { en: "bench", lt: "suoliukas" },
        { en: "block of flats", lt: "daugiabutis" },
        { en: "outskirts", lt: "pakraštys (miesto)" },
        { en: "traffic", lt: "eismas" },
        { en: "green", lt: "žalias (su daug medžių, parkų)" },
        { en: "friendly", lt: "draugiškas" },
        { en: "crowded", lt: "perpildytas, pilnas žmonių" },
        { en: "in the middle", lt: "viduryje" },
        { en: "in the background", lt: "fone, gale" },
        { en: "in the foreground", lt: "priekyje, pirmame plane" }
      ],
      phrases: [
        { en: "This is a picture of …", lt: "Šiame paveikslėlyje…" },
        { en: "On the left / right there is …", lt: "Kairėje / dešinėje yra…" },
        { en: "It looks …", lt: "Atrodo…" },
        { en: "What I like about my area is …", lt: "Mano rajone man patinka…" },
        { en: "The only problem is …", lt: "Vienintelė problema – …" },
        { en: "I'm not sure what it's called, but …", lt: "Nežinau, kaip tai vadinasi, bet…" }
      ],
      reading: {
        title: "Two neighbourhoods",
        text: "Hi, I'm Jonas. I live in a block of flats on the outskirts of Kaunas. Our flat is on the sixth floor, and there's a lift, so it's easy. The area isn't very beautiful, but it's quiet and green. There's a big park behind our building and a small bakery opposite. The bread there is amazing! The only problem is the bus – it's slow and there aren't many buses at night.\n\nHello, I'm Megan and I live in the centre of Bristol, in an old house with a small garden. My street is really busy and quite noisy in the evening, because there are a lot of bars and restaurants. But I love it! I can walk to work, and the library and the station are near. My neighbours are very friendly. We sometimes have coffee together on Saturday mornings.",
        glossary: [
          { en: "block of flats", lt: "daugiabutis" },
          { en: "outskirts", lt: "miesto pakraštys" },
          { en: "bakery", lt: "kepykla" },
          { en: "amazing", lt: "nuostabus" },
          { en: "slow", lt: "lėtas" },
          { en: "busy", lt: "judrus, pilnas žmonių" },
          { en: "neighbours", lt: "kaimynai" }
        ],
        questions: [
          { type: "choice", q: "Where does Jonas live?", options: ["In the centre of Kaunas", "On the outskirts of Kaunas", "In Bristol"], answer: 1,
            explain: "Tekste: <i>on the outskirts of Kaunas</i>." },
          { type: "choice", q: "What is opposite Jonas's building?", options: ["A park", "A bakery", "A bus stop"], answer: 1,
            explain: "<i>a small bakery opposite</i>; parkas yra <i>behind</i> – už pastato." },
          { type: "choice", q: "Why is Megan's street noisy?", options: ["Because of the traffic", "Because there are a lot of bars and restaurants", "Because of the station"], answer: 1,
            explain: "<i>because there are a lot of bars and restaurants</i>." },
          { type: "input", q: "What is the problem in Jonas's area? (vienas žodis)", answer: ["the bus", "bus", "buses", "the buses"],
            explain: "<i>The only problem is the bus</i>." },
          { type: "choice", q: "Megan's neighbours are…", options: ["noisy", "friendly", "old"], answer: 1,
            explain: "<i>My neighbours are very friendly.</i>" }
        ]
      },
      quiz: [
        { type: "choice", q: "Jonas's area is ___.", options: ["noisy and busy", "quiet and green", "old and beautiful"], answer: 1,
          explain: "<i>it's quiet and green</i>." },
        { type: "choice", q: "Kaip pradėti paveikslėlio apibūdinimą?", options: ["This is a picture of a street.", "Picture is street.", "On picture I see street."], answer: 0,
          explain: "Standartinė pradžia: <b>This is a picture of…</b>" },
        { type: "choice", q: "___ the picture there are two cars.", options: ["On", "In", "At"], answer: 1,
          explain: "Paveikslėlyje → <b>in</b> the picture." },
        { type: "choice", q: "„In the background“ reiškia…", options: ["priekyje", "gale, fone", "viduryje"], answer: 1,
          explain: "<b>background</b> – fonas, galinis planas." },
        { type: "input", q: "Įrašyk: On the left ___ some trees. (yra, daugiskaita)", answer: ["there are"],
          explain: "Daugiskaita → <b>there are</b>." },
        { type: "input", q: "Išversk: Atrodo ramu.", answer: ["It looks quiet", "It looks calm", "It looks peaceful"],
          explain: "<b>It looks</b> + būdvardis." },
        { type: "order", words: ["the", "there's", "middle", "café", "a", "in"], answer: "in the middle there's a café", lt: "Viduryje yra kavinė." }
      ],
      speaking: {
        scenario: "Part 1: Talk about the reading – ask the learner to compare Jonas's and Megan's neighbourhoods and say which she prefers. Part 2: Describe this imaginary picture to her in one sentence only ('a street in a small town on a sunny morning') and ask her to describe it in detail as if she can see it, inventing what is there (cafés, people, shops, trees, cars). Part 3: Talk about her own neighbourhood.",
        tasks: [
          "Ask 2–3 questions about the text (Where does Megan live? What does Jonas like about his area?) and ask which area she prefers and why.",
          "Ask her to describe the imaginary street picture in at least 6 sentences using there is/are and on the left / in the middle / in the background.",
          "Ask her to describe her own neighbourhood: what there is, what it is like, what the only problem is.",
          "Ask what she likes and doesn't like about her area and what she can do there.",
          "Ask her to ask you 2 questions about your (invented) neighbourhood."
        ],
        successCriteria: [
          "Answers questions about the text correctly with information from it",
          "Describes the picture in at least 6 sentences with at least 3 position phrases (on the left, in the middle, in the background…)",
          "Uses there is/are correctly at least 6 times across the conversation",
          "Uses at least 5 adjectives to describe places",
          "Gives an opinion with a reason (I prefer… because…)"
        ],
        minLearnerTurns: 10
      }
    },

    // ---------------------------------------------------------------- l08
    {
      id: "a1plus-u03-l08",
      type: "lesson",
      kind: "review",
      icon: "🔁",
      title: "Kartojimas: namai ir miestas",
      titleEn: "Review: Home and town",
      sources: ["core-inventory"],
      canDo: [
        "Galiu laisvai papasakoti apie savo namus ir miestą.",
        "Galiu aprodyti savo butą ir paaiškinti, kaip nueiti iki parduotuvės."
      ],
      grammar: {
        title: "Ką kartojame šiame skyriuje",
        explanation: [
          "<b>There is / there are</b> + <b>a/an</b> (vienaskaita), <b>some</b> (daugiskaita teiginyje), <b>any</b> (neiginyje ir klausime): <i>There's a sofa. There are some chairs. There aren't any plants. Is there a lift?</i> Pirmą kartą – <b>a</b>, paskui – <b>the</b>.",
          "<b>Kambariai, baldai ir prielinksniai</b>: <i>in, on, under, next to, between, opposite, in front of, behind</i>; <i>on the third floor</i>. Po prielinksnio – <b>the</b> ar <b>my</b>: <i>on the shelf</i>.",
          "<b>Can / can't</b> – gebėjimas, galimybė ir leidimas: <i>I can cook. You can't park here. Can I come in?</i> Be <i>-s</i>, be <i>to</i>, be <i>do</i>.",
          "<b>Miesto vietos ir būdvardžiai</b> (<i>chemist's, post office, library; quiet, noisy, safe, modern</i>) su <i>very / really / quite</i>; <i>What's it like?</i>",
          "<b>Kelio klausimas</b>: <i>Excuse me, how do I get to…? Go straight on, turn left, take the second street on the right, it's opposite…</i> ir pasitikslinimas <i>So I…?</i>",
          "<b>Liepiamoji nuosaka</b> (<i>Come in! Don't worry!</i>) ir <b>this/that/these/those</b>, <b>one/ones</b>: <i>This is the kitchen. Those are my books. I like that one.</i>"
        ],
        table: [
          ["Tema", "Pavyzdys"],
          ["there is/are + a/some/any", "There's a park, but there aren't any cafés."],
          ["prielinksniai", "The lamp is between the bed and the wardrobe."],
          ["can / can't", "Can I park here? – Sorry, you can't."],
          ["būdvardžiai", "My street is quite quiet and really green."],
          ["kelias", "Go past the bank and turn right."],
          ["liepiamoji + this/that", "Have a seat. This is the living room."]
        ],
        examples: [
          { en: "Come in! This is the living room, and that's the kitchen.", lt: "Užeik! Čia svetainė, o ten – virtuvė." },
          { en: "There are two bedrooms, but there isn't a balcony.", lt: "Yra du miegamieji, bet nėra balkono." },
          { en: "The bathroom is next to the kitchen.", lt: "Vonios kambarys šalia virtuvės." },
          { en: "My neighbourhood is quite quiet and there's a big park.", lt: "Mano rajonas gana ramus, yra didelis parkas." },
          { en: "Go out of the building, turn left and the shop is on the corner.", lt: "Išėjęs iš namo pasuk į kairę – parduotuvė ant kampo." },
          { en: "Can I use your phone? – Of course, here you are.", lt: "Ar galiu pasinaudoti tavo telefonu? – Žinoma, prašom." }
        ],
        pitfalls: [
          "Artikeliai: <i>There is big kitchen</i> ✗ → <b>There is a big kitchen</b> ✓; <i>on table</i> ✗ → <b>on the table</b> ✓.",
          "<i>Turn on the right</i> ✗ → <b>Turn right</b> ✓; <i>Do you can…?</i> ✗ → <b>Can you…?</b> ✓",
          "<i>this shoes</i> ✗ → <b>these shoes</b> ✓; <i>What's it like? – I like it</i> ✗ → <b>It's quiet and modern</b> ✓."
        ]
      },
      vocab: [
        { en: "flat / house", lt: "butas / namas" },
        { en: "on the … floor", lt: "… aukšte" },
        { en: "wardrobe / shelf / fridge", lt: "spinta / lentyna / šaldytuvas" },
        { en: "next to / between / opposite", lt: "šalia / tarp / priešais" },
        { en: "chemist's / post office / library", lt: "vaistinė / paštas / biblioteka" },
        { en: "quiet / noisy / safe", lt: "ramus / triukšmingas / saugus" },
        { en: "go straight on / turn left", lt: "eiti tiesiai / pasukti į kairę" },
        { en: "on the corner", lt: "ant kampo" }
      ],
      phrases: [
        { en: "Come in and have a seat.", lt: "Užeik ir prisėsk." },
        { en: "Let me show you round.", lt: "Leisk aprodyti (butą)." },
        { en: "This is the … and that's the …", lt: "Čia …, o ten – …" },
        { en: "Is there a … near here?", lt: "Ar netoliese yra…?" },
        { en: "How do I get to …?", lt: "Kaip nueiti iki…?" },
        { en: "So I turn left at …?", lt: "Vadinasi, prie … suku į kairę?" }
      ],
      quiz: [
        { type: "choice", q: "There ___ any chairs in the kitchen.", options: ["isn't", "aren't", "are"], answer: 1,
          explain: "Daugiskaita + neiginys su <i>any</i> → <b>aren't</b>." },
        { type: "choice", q: "The lamp is ___ the bed and the window.", options: ["between", "opposite", "on"], answer: 0,
          explain: "Tarp dviejų → <b>between</b>." },
        { type: "choice", q: "___ you play tennis?", options: ["Do", "Can", "Are"], answer: 1,
          explain: "Gebėjimas: <b>Can</b> you…? (be <i>do</i>)." },
        { type: "choice", q: "Are ___ your shoes over there?", options: ["this", "these", "those"], answer: 2,
          explain: "Daugiskaita + toli („over there“) → <b>those</b>." },
        { type: "choice", q: "What's your town like?", options: ["It's quite old and beautiful.", "Yes, I like it a lot.", "I like my town."], answer: 0,
          explain: "<i>What's … like?</i> → apibūdinimas." },
        { type: "input", q: "Išversk: Nesijaudink!", answer: ["Don't worry"],
          explain: "<b>Don't</b> + veiksmažodis." },
        { type: "input", q: "Išversk: Ar netoliese yra vaistinė?", answer: ["Is there a chemist's near here", "Is there a pharmacy near here", "Is there a chemist near here"],
          explain: "<b>Is there a</b> … <b>near here</b>?" },
        { type: "order", words: ["the", "turn", "at", "left", "bank"], answer: "turn left at the bank", lt: "Prie banko pasuk į kairę." }
      ],
      speaking: {
        scenario: "Review role-play in three parts. Part 1: You are a friend visiting the learner's home for the first time (her real or ideal home). She shows you round. Part 2: You want to go to the nearest shop and a pharmacy; she explains how to get there from her home. Part 3: A short free conversation about her town. Give feedback only at the end: 2 things she did well and 2 things to practise.",
        tasks: [
          "Arrive at the door: she welcomes you (Come in, have a seat) and shows you round, using this/that, there is/are and prepositions to describe each room.",
          "Ask permission questions as a guest (Can I use the bathroom? Can I open the window?) and ask her what she can and can't do in her neighbourhood.",
          "Ask 'Is there a shop near here?' and 'How do I get to the pharmacy?'; she gives step-by-step directions; you check one detail and she confirms.",
          "Ask what her town and neighbourhood are like and what the best thing and the only problem are.",
          "Ask her to give you 2–3 house rules or tips for the town using imperatives (Don't… / Take the bus…)."
        ],
        successCriteria: [
          "Uses there is/are with correct a/an/some/any at least 6 times",
          "Uses at least 5 different prepositions of place and 'on the … floor' correctly",
          "Gives directions to a place with at least 4 correct steps",
          "Uses can/can't correctly at least 4 times (ability, possibility or permission)",
          "Uses this/that/these/those and at least 4 imperatives (including Don't) correctly",
          "Describes her town with at least 4 adjectives and very/quite/really"
        ],
        minLearnerTurns: 12
      }
    }
  ]
};
