import Foundation
#if canImport(ActivityKit)
import ActivityKit

/// Live Activity vienai pamokos sesijai (bendra App ir KalbekWidget taikiniams).
/// Į Activity nekeliaujama jokia jautri informacija: nei raktas, nei garsas, nei pokalbio tekstas, nei vardas.
struct LessonActivityAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var phase: String          // starting | speaking | listening | thinking | exercise | reconnecting | ended | completed
        var startedAt: Date
        var learnerTurns: Int
        var requiredTurns: Int
        var exercisesDone: Int
        var exercisesRequired: Int
        var passed: Bool
    }

    var lessonID: String
    var lessonTitle: String
    var level: String
}

enum LessonPhase {
    static func title(_ phase: String) -> String {
        switch phase {
        case "starting": return "Jungiamasi su Ema"
        case "speaking": return "Ema kalba"
        case "listening": return "Tavo eilė – kalbėk"
        case "thinking": return "Ema galvoja"
        case "exercise": return "Užduotis ekrane"
        case "reconnecting": return "Atkuriamas ryšys"
        case "completed": return "Pamoka išmokta"
        default: return "Pokalbis baigtas"
        }
    }
    static func subtitle(_ phase: String) -> String {
        switch phase {
        case "starting": return "Palauk akimirką."
        case "speaking": return "Klausyk. Neskubėk atsakyti."
        case "listening": return "Grįžk į pamoką ir atsakyk."
        case "thinking": return "Tuoj pateiks pavyzdį."
        case "exercise": return "Atidaryk pamoką ir atlik užduotį."
        case "reconnecting": return "Ryšys tuoj grįš."
        case "completed": return "Ema patvirtino tavo pažangą."
        default: return "Gali tęsti bet kada."
        }
    }
    static func symbol(_ phase: String) -> String {
        switch phase {
        case "speaking": return "speaker.wave.2"
        case "listening": return "mic"
        case "thinking", "starting", "reconnecting": return "ellipsis"
        case "exercise": return "pencil"
        case "completed": return "checkmark"
        default: return "pause"
        }
    }
}
#endif
