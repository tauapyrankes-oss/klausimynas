# Kalbėk! – native programėlė (iOS + Android, Capacitor 8)

Tas pats kodas kaip PWA (`../kalba`) – Capacitor jį įdeda į native programėlę. Papildomai:
- **Valdiklis** pagrindiniame / užrakinimo ekrane: dienų serija, kita pamoka, kartojimui laukiantys žodžiai
  (iOS – `ios/App/KalbekWidget/` SwiftUI/WidgetKit; Android – `KalbekWidgetProvider.java` + `res/layout/kalbek_widget.xml`).
- **Kasdieniai priminimai** (Capacitor Local Notifications): pasirinktu laiku + 21:30, jei tą dieną dar nesimokei.
- **Mikrofonas** ir garsas fone (iOS `UIBackgroundModes: audio`).
- Paspaudus valdiklį / pranešimą atsidaro `kalbek://lesson` (kita pamoka) arba `kalbek://sprint`.

JS ↔ native: `../kalba/js/native.js` (naršyklėje nieko nedaro), įskiepis `WidgetBridge`
(iOS `WidgetBridgePlugin.swift` → App Group `group.lt.kalbek.app`; Android `WidgetBridgePlugin.java` → SharedPreferences).

## Komandos
```bash
npm ci
npm run sync        # nukopijuoja ../kalba → www ir atnaujina ios/ bei android/
npm run ios         # sync + atidaro Xcode
npm run android     # sync + atidaro Android Studio
```
Pakeitus PWA (`../kalba`), programėlei atnaujinti užtenka `npm run sync` ir perkompiliuoti.

## Gemini raktas
Įrašyk į `app/.env` (pavyzdys `app/.env.example`): `GEMINI_API_KEY=...`. `npm run sync` jį įdeda tik į vietinį
build'ą (`www/js/config.js`), todėl programėlėje nieko įvesti nereikia. `.env`, `www/` ir native `public/` kopijos
yra `.gitignore` – raktas į GitHub nepatenka. PWA svetainė (vieša) rakto neturi ir jo paprašo nustatymuose.

## Identifikatoriai
- Bundle ID: `lt.kalbek.app`, valdiklis `lt.kalbek.app.widget`, App Group `group.lt.kalbek.app`.
- Jei Apple sako, kad ID užimtas – pakeisk visur (`capacitor.config.json`, `ios/App/App.xcodeproj/project.pbxproj`,
  abu `*.entitlements`, `WidgetBridgePlugin.swift`, `KalbekWidget.swift`, Android `build.gradle` `applicationId`).

## Ikonos
`node scripts/make-assets.mjs && npx @capacitor/assets generate --iconBackgroundColor '#5b4fd6' --splashBackgroundColor '#f6f5fb'`
(jau sugeneruotos ir įkeltos).

## Xcode projekto pakeitimai
`ruby scripts/add-ios-widget.rb` (reikia `gem install xcodeproj`) įtraukia valdiklio taikinį ir failus.
Jau pritaikyta – kartoti reikia tik sugeneravus `ios/` iš naujo.

## Tikro iPhone garso patikra

**Mikrofono netikrinti per Device Hub „View Screen“ / Screen Sharing.** Apple dokumentuoja, kad nuotolinio
valdymo metu fizinio įrenginio mikrofonas gali grąžinti tylą net turint leidimą. Prieš bandymą pasirinkti
„Stop Screen Sharing“ arba užverti Device Hub; diegimas per Wi-Fi ir vienkartinė `devicectl` ekrano nuotrauka
gali būti atliekami be nuotolinio valdymo. Patikrinti, kad `devicectl device info displays` neberodo Wireless.
Šaltinis: https://developer.apple.com/documentation/xcode/interacting-with-your-app-in-device-hub

Native iOS audio: `AudioBridgePlugin.swift` (AVAudioEngine, vienas įrašymo/grojimo kelias); `js/audio.js`
iOS naudoja bridge, naršyklė ir Android išlaiko Web Audio kelią. Įvestis — 16 kHz mono PCM16, Emos išvestis —
24 kHz PCM16. Native garso variklis valdo savo sesiją; AppDelegate jos nekeičia kiekvieną kartą grįžus į app.
Regresinė bridge patikra: `node kalba/tools/native-audio-test.mjs`. Galutinei garso kokybei ir mikrofonui
patvirtinti vis tiek reikia realaus telefono bandymo, ne vien naršyklės testų.

Emos garsiakalbio mygtukas nutildo išvestį nepriklausomai nuo iOS pokalbio garso minimumo. Native balso maršrute žemiausias 1/16 sistemos garso žingsnis taip pat nutildo Emą; padidinus garsą ji vėl girdima.
