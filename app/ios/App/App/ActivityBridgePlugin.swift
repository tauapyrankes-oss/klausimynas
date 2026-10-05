import Foundation
import Capacitor
#if canImport(ActivityKit)
import ActivityKit
#endif

/// JS → Live Activity: viena Activity vienai pamokos sesijai (start / update / end).
/// Perduodama tik mokymosi būsena (fazė, replikos, užduotys) – jokio rakto, garso, teksto ar vardo.
@objc(ActivityBridgePlugin)
public class ActivityBridgePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ActivityBridgePlugin"
    public let jsName = "ActivityBridge"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "start", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "update", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "end", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isAvailable", returnType: CAPPluginReturnPromise),
    ]

    #if canImport(ActivityKit)
    private var activity: Activity<LessonActivityAttributes>?
    private var startedAt = Date()

    private func state(from call: CAPPluginCall) -> LessonActivityAttributes.ContentState {
        LessonActivityAttributes.ContentState(
            phase: call.getString("phase") ?? "starting",
            startedAt: startedAt,
            learnerTurns: call.getInt("learnerTurns") ?? 0,
            requiredTurns: call.getInt("requiredTurns") ?? 0,
            exercisesDone: call.getInt("exercisesDone") ?? 0,
            exercisesRequired: call.getInt("exercisesRequired") ?? 0,
            passed: call.getBool("passed") ?? false
        )
    }
    #endif

    @objc func isAvailable(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            call.resolve(["available": ActivityAuthorizationInfo().areActivitiesEnabled])
            return
        }
        #endif
        call.resolve(["available": false])
    }

    @objc func start(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            guard ActivityAuthorizationInfo().areActivitiesEnabled else {
                call.resolve(["started": false]) // išjungta – pamokos neblokuoja
                return
            }
            Task { @MainActor in
                // Užbaigti ankstesnes (pvz., po programėlės perkrovimo).
                for old in Activity<LessonActivityAttributes>.activities {
                    await old.end(nil, dismissalPolicy: .immediate)
                }
                self.startedAt = Date()
                let attrs = LessonActivityAttributes(
                    lessonID: call.getString("lessonID") ?? "",
                    lessonTitle: call.getString("lessonTitle") ?? "Pamoka",
                    level: call.getString("level") ?? ""
                )
                do {
                    self.activity = try Activity.request(attributes: attrs, content: .init(state: self.state(from: call), staleDate: nil))
                    call.resolve(["started": true])
                } catch {
                    call.resolve(["started": false, "error": error.localizedDescription])
                }
            }
            return
        }
        #endif
        call.resolve(["started": false])
    }

    @objc func update(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *), let activity {
            Task { @MainActor in
                await activity.update(.init(state: self.state(from: call), staleDate: nil))
                call.resolve()
            }
            return
        }
        #endif
        call.resolve()
    }

    @objc func end(_ call: CAPPluginCall) {
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *), let activity {
            let final = state(from: call)
            Task { @MainActor in
                // Užbaigta pamoka lieka užrakinimo ekrane kelias minutes, nutrauktas pokalbis dingsta iškart.
                let policy: ActivityUIDismissalPolicy = final.phase == "completed" ? .after(.now + 5 * 60) : .immediate
                await activity.end(.init(state: final, staleDate: nil), dismissalPolicy: policy)
                self.activity = nil
                call.resolve()
            }
            return
        }
        #endif
        call.resolve()
    }
}
