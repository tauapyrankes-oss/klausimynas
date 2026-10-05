# Užduotis Codex'ui (vartotojo Mac'e): sukompiliuoti „Kalbėk!“ iOS programėlę ir įdiegti į iPhone

Repository `tauapyrankes-oss/klausimynas`, branch `claude/duolingo-style-language-app-2mgqad`, folder `app/`
(Capacitor 8; iOS project `app/ios/App/App.xcodeproj` with targets `App` and `KalbekWidget`). Read `app/README.md`.
The user has a paid Apple Developer account and Xcode. Install WITHOUT TestFlight – development signing,
directly to the device over USB (later Wi-Fi). Do not change app logic; only fix build/signing problems.

## Steps
1. `git fetch && git checkout claude/duolingo-style-language-app-2mgqad && git pull`
2. `cd app && npm ci && npm run sync` (Node 20+). If `npx cap sync ios` warns about CocoaPods – ignore, the project uses SPM.
3. Find the user's Team ID (Xcode → Settings → Accounts, or ask the user). Use it as `DEVELOPMENT_TEAM` for BOTH targets.
4. Ask the user to connect the iPhone with a cable, unlock it, tap „Trust“, and enable
   **Settings → Privacy & Security → Developer Mode** (iPhone restarts). Get the UDID: `xcrun devicectl list devices`.
5. Build & sign (automatic signing registers the device, the App ID, the widget and the App Group):
   ```bash
   xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Release \
     -destination 'id=<UDID>' -allowProvisioningUpdates DEVELOPMENT_TEAM=<TEAM_ID> \
     -derivedDataPath build clean build
   xcrun devicectl device install app --device <UDID> build/Build/Products/Release-iphoneos/App.app
   ```
   - If the bundle ID `lt.kalbek.app` is taken, change it everywhere as listed in `app/README.md`
     (e.g. `lt.<something>.kalbek`), commit that change.
   - If the App Group cannot be created automatically, open Xcode once (`npm run ios`), select each target →
     Signing & Capabilities → choose the team, make sure „App Groups“ contains `group.lt.kalbek.app`, then rerun.
   - On first launch iPhone may say „Untrusted Developer“: Settings → General → VPN & Device Management → trust.
6. For later updates over Wi-Fi: Xcode → Window → Devices and Simulators → select the iPhone → „Connect via network“;
   then the same `xcodebuild` + `devicectl install` works without the cable.
7. Commit and push any build fixes to the same branch (never commit secrets or the API key).
8. Reply to the user in Lithuanian:
   - programėlė įdiegta; pirmas paleidimas: Nustatymai → Gemini API raktas → modelis `gemini-3.8-live` → leisti mikrofoną ir pranešimus;
   - valdiklis: ilgai paspausk pagrindinį ekraną → „+“ → „Kalbėk!“ → pasirink dydį (ir užrakinimo ekrane – Customize);
   - pažangos perkėlimas iš PWA: PWA Nustatymai → Eksportuoti → failą atidaryti programėlėje → Nustatymai → Importuoti;
   - development diegimas galioja ~1 metus; atnaujinimams pakanka paleisti tą patį build ir install.

## Android (vėliau)
`cd app && npm run android` → Android Studio → Build → Build APK(s) → įdiegti per USB (`adb install -r app-debug.apk`).
