import Foundation
import Capacitor
import WidgetKit

/// JS → valdiklis: programėlė perduoda seriją, kitą pamoką ir kartojimui laukiančius žodžius.
/// Duomenys saugomi bendroje App Group saugykloje, iš kurios juos skaito KalbekWidget.
@objc(WidgetBridgePlugin)
public class WidgetBridgePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "WidgetBridgePlugin"
    public let jsName = "WidgetBridge"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "update", returnType: CAPPluginReturnPromise)
    ]

    static let appGroup = "group.lt.kalbek.app"

    @objc func update(_ call: CAPPluginCall) {
        guard let defaults = UserDefaults(suiteName: Self.appGroup) else {
            call.reject("App Group \(Self.appGroup) nepasiekiama – patikrink entitlements")
            return
        }
        let payload = call.options ?? [:]
        guard let data = try? JSONSerialization.data(withJSONObject: payload) else {
            call.reject("Netinkami duomenys")
            return
        }
        defaults.set(data, forKey: "widget")
        WidgetCenter.shared.reloadAllTimelines()
        call.resolve()
    }
}
