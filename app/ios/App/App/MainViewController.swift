import UIKit
import Capacitor

/// Pagrindinis ekranas: Capacitor WebView + mūsų vietiniai įskiepiai.
class MainViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(WidgetBridgePlugin())
        bridge?.registerPluginInstance(ActivityBridgePlugin())
    }
}
