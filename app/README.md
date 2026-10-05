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
