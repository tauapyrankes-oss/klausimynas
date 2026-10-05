# Native valdiklio / Live Activity dizaino kontraktas

Tai maketų prijungimo specifikacija Claude. Spalvos ir išvaizda patvirtintos šviesios. HTML / PNG nėra ActivityKit vykdymo įrodymas.

## Esamas WidgetKit

Esami failai: `app/ios/App/KalbekWidget/KalbekWidget.swift`, `app/ios/App/App/WidgetBridgePlugin.swift`, `kalba/js/native.js`, `kalba/js/app.js` (`syncNative`). App Group: `group.lt.kalbek.app`, UserDefaults raktas `widget`, widget kind `KalbekWidget`. Šių identifikatorių ir progreso formato nekeisti.

| Maketas | WidgetKit šeima | Esami duomenys | Veiksmas |
|---|---|---|---|
| small-ready | systemSmall | streak, level, doneToday=false | kalbek://lesson |
| small-done | systemSmall | streak, doneToday=true | kalbek://lesson |
| small-first | systemSmall | passed=0, streak=0 | kalbek://lesson |
| medium-ready | systemMedium | nextTitle, level, streak, passed/total, wordsDue | pamoka + sprintas |
| medium-done | systemMedium | doneToday=true, wordsDue | tęsti + sprintas |
| accessory-circular | accessoryCircular | streak | kalbek://lesson |
| accessory-rectangular | accessoryRectangular | streak, doneToday | kalbek://lesson |

170 × 170 ir 362 × 170 yra dizaino matmenys; tikrame WidgetKit prisitaikyti prie `context.displaySize` ir sisteminių paraščių. Nepririšti visų iPhone prie vieno dydžio. Maketų 7 dienos, 12 žodžių ir 3/8 replikų yra pavyzdžiai.

- `doneToday` skaito esamą tikrą pažangą. Žalios dienos būsenos nerodyti vien dėl programėlės paleidimo.
- `nextTitle` ilgas: bent dvi eilutės, be visos kortelės nuotraukos ar užmaskuoto teksto. Pateiktas tikras ilgo pamokos pavadinimo pavyzdys.
- `wordsDue` link rodyti tik kai skaičius > 0. `passed/total` žiedas / juosta skaičiuoja tik esamas patvirtintas pamokas.
- `nextIcon` duomenų lauką galima išlaikyti suderinamumui; naujame UI rodyti SF Symbol / Emą, o ne emoji.
- PNG iš `assets/` įtraukti į valdiklio asset katalogą. Ema vaizduojama **statine poza**; tik pasikeitus duomenims galima trumpa perėjimo animacija. Programėlėje lieka esami animuoti SVG.

[Apple Widgets HIG](https://developer.apple.com/design/human-interface-guidelines/widgets): tekstas nuo 11 pt, Dynamic Type, tinkamas kontrastas ir papildomas tekstinis būsenos signalas. Užrakinimo ekraną bei vartotojo tinted / clear režimus valdo sistema. Native UI naudoti `widgetRenderingMode` ir prireikus Apple `widgetAccentedRenderingMode`, neleisti pilnaspalvei Emos nuotraukai virsti neįskaitoma dėme. App šviesi kryptis nesuteikia leidimo išjungti sistemos prieinamumo režimus.

## Live Activity — nauja, dar neprijungta funkcija

Vienas aktyvus pamokos pokalbis = viena Activity. Start tik pradėjus pamoką / pokalbį, ne tiesiog atidarius programėlę. Pabaiga — užbaigus pokalbį arba uždarius sesiją. `ActivityAuthorizationInfo().areActivitiesEnabled` false neturi blokuoti pamokos.

Siūloma `LessonActivityAttributes`:

- nekintami: `lessonID`, `lessonTitle`, `level`;
- `ContentState`: `phase`, `startedAt`, `learnerTurns`, `requiredTurns`, `exercisesDone`, `exercisesRequired`, `passed`;
- phase: starting, speaking, listening, thinking, exercise, reconnecting, ended, completed.

**Neperduoti** API rakto, Gemini tokeno, garso, pokalbio išrašo ar vartotojo vardo į Activity duomenis. Mokymosi būsenos užtenka.

| Phase | Tikras šaltinis | Rodoma |
|---|---|---|
| starting | pradedamas prisijungimas | Jungiamasi su Ema |
| speaking | groja tikras `PcmPlayer` garsas | Ema kalba |
| listening | sesija gyva, mikrofonas veikia ir learner gali atsakyti | Tavo eilė – kalbėk |
| thinking | tikras jungimosi / atsakymo laukimo signalas | Ema galvoja |
| exercise | ekrane aktyvi nebaigta užduotis | Užduotis ekrane |
| reconnecting | tikras reconnect kelias | Atkuriamas ryšys |
| ended | session stop / nepavykęs atkūrimas | Pokalbis baigtas; užbaigti Activity |
| completed | `complete_lesson` patvirtintas **ir praėjo visi dabartiniai saitai** | Pamoka išmokta; trumpas galutinis rezultatas |

Paprastas modelio tekstas „šaunu“ ar jo `passed:true` be programos patikros nėra sėkmės įvykis. Activity nesiunčia naujų replikų ir nesprendžia, ar pamoka išmokta. Ekrane `listening` nerodyti, jei programa fone nebegali priimti mikrofono garso; tuomet veiksmu grąžinti į pamoką.

- Lock Screen: 362 × 160 dizaino rėmas, 44 pt grįžimo veiksmas. Tikras dydis valdomas sistemos; tikrinti, kad niekas nenukertama.
- Dynamic Island: compact, minimal, expanded. Kompaktiškoje — akinių ženklas ir tikras replikų skaičius; minimalioje — ženklas; išskleistoje — būsena ir grįžimas į pamoką. Kamera lieka laisva.
- Lock Screen šviesus paviršius. Dynamic Island juodą foną suteikia iOS; jo nebandyti perdažyti kremine spalva. [Apple Live Activities HIG](https://developer.apple.com/design/human-interface-guidelines/live-activities).
- Laiką native rodyti SwiftUI `Text(startedAt, style: .timer)`, ne siųsti Activity atnaujinimą kas sekundę.
- Atnaujinti prasmingai pasikeitus phase / realiam progresui, sujungti greitus besikartojančius signalus. Neperkelti 250 ms UI status loop ar mikrofono `onLevel` srauto į ActivityKit. [Apple ActivityKit](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities).
- Live Activity nėra mikrofono, WebSocket ar app fono vykdymo variklis. Esamą iOS garso sesijos elgseną turi patikrinti Claude ir Codex telefone; nekurti APNs ar serverio vien šiam vietiniam dizainui.

## Native projekto jungtys

Claude prireikus sukuria bendrą `LessonActivityAttributes.swift` abiem taikiniams, Activity bridge app taikinyje ir `ActivityConfiguration` esamame widget extension. Vienas `@main` entry: `WidgetBundle`, kuriame išlieka `KalbekWidget` ir pridedama Activity konfigūracija. App Info.plist — `NSSupportsLiveActivities`. Išsaugoti dabartinį Team ID, bundle ID ir App Group. Po pakeitimų privalomas tikras native build; šio dizaino paketo autorius naujos Activity funkcijos nesukompiliavo.

## Judėjimas

[Apple leidžia animuoti duomenų atnaujinimus](https://developer.apple.com/documentation/widgetkit/animating-data-updates-in-widgets-and-live-activities), vienos animacijos trukmė ribota iki 2 s. Čia parinkti 180–300 ms perėjimai. Nėra nuolatinio Emos mirksėjimo, lūpų animavimo ar garso bangų WidgetKit / ActivityKit paviršiuose.

Native pavyzdžiai (integruoti su esama būsena):

```swift
@Environment(\.accessibilityReduceMotion) private var reduceMotion

Text(state.phase.title)
    .contentTransition(.opacity)
    .animation(reduceMotion ? nil : .easeOut(duration: 0.2), value: state.phase)

Text(data.streak, format: .number)
    .contentTransition(.numericText())
    .animation(reduceMotion ? nil : .easeOut(duration: 0.25), value: data.streak)
```

Reduce Motion — be poslinkio, pulso ir konfeti; galutinė būsena vis tiek aiški. `repeatForever`, live audio histogramų siuntimas ir `Transaction` bandymai WidgetKit nereikalingi. [Apple animacijų dokumentacija](https://developer.apple.com/documentation/widgetkit/animating-data-updates-in-widgets-and-live-activities).
