import UIKit
import AVFoundation
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        configureAudioSession()
        NotificationCenter.default.addObserver(self, selector: #selector(audioRouteChanged),
                                               name: AVAudioSession.routeChangeNotification, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(audioInterrupted),
                                               name: AVAudioSession.interruptionNotification, object: nil)
        return true
    }

    /// Garsas iš karto nustatomas į „kalbėjimo“ režimą: mikrofonas + GARSIAKALBIS (ne ausinės prie ausies),
    /// Bluetooth ausinės leidžiamos, sistema slopina aidą. Kitaip iOS, įjungus mikrofoną, perjungia garsą
    /// į tylų ausinės garsiakalbį ir pakeičia dažnį – Emos balsas skamba tyliai ir traška.
    func configureAudioSession() {
        let session = AVAudioSession.sharedInstance()
        do {
            try session.setCategory(.playAndRecord, mode: .voiceChat,
                                    options: [.defaultToSpeaker, .allowBluetooth, .allowBluetoothA2DP])
            try session.setPreferredSampleRate(48_000)
            try session.setPreferredIOBufferDuration(0.02)
            try session.setActive(true)
        } catch {
            print("AVAudioSession klaida: \(error)")
        }
    }

    @objc func audioRouteChanged(_ note: Notification) {
        // Ištraukus ausines iOS grąžina garsą į ausinės garsiakalbį – vėl nukreipiame į garsiakalbį.
        let session = AVAudioSession.sharedInstance()
        let onSpeakerOrHeadphones = session.currentRoute.outputs.contains {
            [.builtInSpeaker, .headphones, .bluetoothA2DP, .bluetoothHFP, .bluetoothLE].contains($0.portType)
        }
        if !onSpeakerOrHeadphones {
            try? session.overrideOutputAudioPort(.speaker)
        }
    }

    @objc func audioInterrupted(_ note: Notification) {
        guard let info = note.userInfo,
              let type = AVAudioSession.InterruptionType(rawValue: info[AVAudioSessionInterruptionTypeKey] as? UInt ?? 0),
              type == .ended else { return }
        configureAudioSession()
    }

    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        configureAudioSession()
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }

    func application(_ application: UIApplication,
                     configurationForConnecting connectingSceneSession: UISceneSession,
                     options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        let config = UISceneConfiguration(name: "Default Configuration",
                                          sessionRole: connectingSceneSession.role)
        config.delegateClass = SceneDelegate.self
        return config
    }
}
