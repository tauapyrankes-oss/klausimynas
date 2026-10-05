import WidgetKit
import SwiftUI
#if canImport(ActivityKit)
import ActivityKit
#endif

// MARK: - Duomenys (iš programėlės per WidgetBridgePlugin, App Group "group.lt.kalbek.app")

struct WidgetData: Codable {
    var streak: Int = 0
    var doneToday: Bool = false
    var wordsDue: Int = 0
    var xp: Int = 0
    var level: String = "A1+"
    var nextTitle: String = "Pradėk pirmą pokalbį"
    var nextIcon: String = ""   // suderinamumui; UI rodo Emą / SF Symbols, ne emoji
    var passed: Int = 0
    var total: Int = 172

    static func load() -> WidgetData {
        guard let defaults = UserDefaults(suiteName: "group.lt.kalbek.app"),
              let data = defaults.data(forKey: "widget"),
              let decoded = try? JSONDecoder().decode(WidgetData.self, from: data) else { return WidgetData() }
        return decoded
    }
}

struct Entry: TimelineEntry {
    let date: Date
    let data: WidgetData
}

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> Entry { Entry(date: .now, data: WidgetData(streak: 7, wordsDue: 12, nextTitle: "Veiksmažodis „to be“ ir įvardžiai", passed: 12)) }
    func getSnapshot(in context: Context, completion: @escaping (Entry) -> Void) {
        completion(Entry(date: .now, data: context.isPreview ? placeholder(in: context).data : .load()))
    }
    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> Void) {
        // Atnaujinti po vidurnakčio, kad „šiandien jau mokeisi“ pasikeistų į naują dieną.
        let tomorrow = Calendar.current.startOfDay(for: .now.addingTimeInterval(86_400)).addingTimeInterval(60)
        completion(Timeline(entries: [Entry(date: .now, data: .load())], policy: .after(tomorrow)))
    }
}

// MARK: - Patvirtinta šviesi paletė („Po truputį“)

enum Palette {
    static let paper = Color(red: 0.973, green: 0.965, blue: 0.945)   // #f8f6f1
    static let ink = Color(red: 0.161, green: 0.141, blue: 0.192)     // #292431
    static let muted = Color(red: 0.424, green: 0.384, blue: 0.443)   // #6c6271
    static let plum = Color(red: 0.349, green: 0.243, blue: 0.435)    // #593e6f
    static let honeyInk = Color(red: 0.380, green: 0.275, blue: 0.067) // #614611
    static let green = Color(red: 0.153, green: 0.420, blue: 0.314)   // #276b50
    static let greenSoft = Color(red: 0.898, green: 0.945, blue: 0.914) // #e5f1e9
    static let line = Color(red: 0.871, green: 0.839, blue: 0.890)    // #ded6e3
}

let lessonURL = URL(string: "kalbek://lesson")!
let wordsURL = URL(string: "kalbek://sprint")!

/// Ema – statinė poza; keičiasi tik pasikeitus duomenims (trumpas crossfade).
struct EmaPose: View {
    let name: String
    var body: some View {
        Image("ema-\(name)")
            .resizable()
            .scaledToFit()
            .accessibilityLabel("Mokytoja Ema")
    }
}

struct StreakLabel: View {
    let streak: Int
    var words = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    var body: some View {
        HStack(spacing: 4) {
            Image(systemName: "flame")
            Text(words ? "\(streak) \(streak == 1 ? "diena" : "dienos")" : "\(streak)")
                .contentTransition(.numericText())
                .animation(reduceMotion ? nil : .easeOut(duration: 0.25), value: streak)
        }
        .font(.system(size: 12, weight: .bold))
        .foregroundStyle(Palette.honeyInk)
    }
}

// MARK: - Mažas

struct SmallView: View {
    let d: WidgetData
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    var first: Bool { d.passed == 0 && d.streak == 0 }
    var pose: String { d.doneToday ? "happy" : first ? "wave" : "idle" }
    var title: String { d.doneToday ? "Šiandien jau mokeisi" : first ? "Pradėk pirmą pokalbį" : "Ema tavęs laukia" }
    var caption: String { d.doneToday ? "Puikus žingsnis pirmyn." : "Angliškai. Po truputį." }

    var body: some View {
        ZStack(alignment: .topLeading) {
            VStack(alignment: .leading, spacing: 0) {
                HStack {
                    StreakLabel(streak: d.streak)
                    Spacer()
                    Text(d.level).font(.system(size: 11, weight: .bold)).foregroundStyle(Palette.plum)
                }
                Spacer(minLength: 0)
                HStack(alignment: .firstTextBaseline, spacing: 4) {
                    Text(title)
                        .font(.system(size: 14, weight: .heavy))
                        .foregroundStyle(d.doneToday ? Palette.green : Palette.ink)
                        .lineLimit(2)
                        .minimumScaleFactor(0.85)
                    if d.doneToday { Image(systemName: "checkmark").font(.system(size: 12, weight: .bold)).foregroundStyle(Palette.green) }
                }
                .contentTransition(.opacity)
                .animation(reduceMotion ? nil : .easeOut(duration: 0.22), value: d.doneToday)
                Text(caption).font(.system(size: 11)).foregroundStyle(Palette.muted).padding(.top, 2)
            }
            EmaPose(name: pose)
                .frame(width: 66, height: 66)
                .frame(maxWidth: .infinity, alignment: .trailing)
                .padding(.top, 18)
        }
        .widgetURL(lessonURL)
    }
}

// MARK: - Vidutinis

struct MediumView: View {
    let d: WidgetData
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack {
                HStack(spacing: 0) {
                    Text("kalbėk").foregroundStyle(Palette.plum)
                    Text("!").foregroundStyle(Palette.honeyInk)
                }
                .font(.system(size: 15, weight: .heavy))
                Spacer()
                StreakLabel(streak: d.streak, words: true)
            }
            HStack(alignment: .top, spacing: 10) {
                VStack(alignment: .leading, spacing: 3) {
                    Text(d.doneToday ? "Šiandien jau mokeisi" : "Kita pamoka · \(d.level)")
                        .font(.system(size: 11)).foregroundStyle(Palette.muted)
                    Text(d.doneToday ? "Puikiai padirbėjai!" : d.nextTitle)
                        .font(.system(size: 14, weight: .heavy))
                        .foregroundStyle(d.doneToday ? Palette.green : Palette.ink)
                        .lineLimit(2)
                        .contentTransition(.opacity)
                        .animation(reduceMotion ? nil : .easeOut(duration: 0.22), value: d.doneToday)
                    HStack(spacing: 8) {
                        Link(destination: lessonURL) {
                            HStack(spacing: 5) {
                                Text(d.doneToday ? "Tęsti" : "Pradėti")
                                Image(systemName: "arrow.right")
                            }
                            .font(.system(size: 12, weight: .bold))
                            .padding(.horizontal, 12)
                            .frame(height: 34)
                            .background(Palette.plum, in: RoundedRectangle(cornerRadius: 11))
                            .foregroundStyle(.white)
                        }
                        if d.wordsDue > 0 {
                            Link(destination: wordsURL) {
                                HStack(spacing: 4) {
                                    Image(systemName: "arrow.triangle.2.circlepath")
                                    Text("\(d.wordsDue) žodž.")
                                }
                                .font(.system(size: 11, weight: .bold))
                                .foregroundStyle(Palette.plum)
                            }
                        }
                    }
                    .padding(.top, 4)
                }
                Spacer(minLength: 0)
                EmaPose(name: d.doneToday ? "happy" : "idle").frame(width: 78, height: 84)
            }
            // Pažangos juosta – tik patvirtintos pamokos.
            GeometryReader { g in
                ZStack(alignment: .leading) {
                    Capsule().fill(Palette.line.opacity(0.7))
                    Capsule().fill(Palette.plum)
                        .frame(width: max(6, g.size.width * CGFloat(d.passed) / CGFloat(max(1, d.total))))
                }
            }
            .frame(height: 4)
        }
    }
}

// MARK: - Užrakinimo ekranas

struct AccessoryCircular: View {
    let d: WidgetData
    var body: some View {
        ZStack {
            AccessoryWidgetBackground()
            VStack(spacing: 0) {
                Image(systemName: "flame").font(.system(size: 11, weight: .bold))
                Text("\(d.streak)").font(.system(size: 17, weight: .heavy))
            }
        }
        .widgetURL(lessonURL)
    }
}

struct AccessoryRectangular: View {
    let d: WidgetData
    var body: some View {
        VStack(alignment: .leading, spacing: 2) {
            HStack(spacing: 4) {
                Image(systemName: "flame")
                Text("Kalbėk! · \(d.streak) \(d.streak == 1 ? "diena" : "dienos")")
            }
            .font(.system(size: 13, weight: .heavy))
            Text(d.doneToday ? "Šiandien jau mokeisi" : d.nextTitle)
                .font(.system(size: 12)).lineLimit(2)
        }
        .widgetURL(lessonURL)
    }
}

struct WidgetView: View {
    @Environment(\.widgetFamily) var family
    @Environment(\.widgetRenderingMode) var renderingMode
    let entry: Entry
    var body: some View {
        switch family {
        case .accessoryCircular: AccessoryCircular(d: entry.data)
        case .accessoryRectangular: AccessoryRectangular(d: entry.data)
        case .systemMedium: MediumView(d: entry.data)
        default: SmallView(d: entry.data)
        }
    }
}

struct KalbekWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: "KalbekWidget", provider: Provider()) { entry in
            WidgetView(entry: entry)
                .containerBackground(for: .widget) {
                    (entry.data.doneToday ? Palette.greenSoft : Palette.paper)
                }
        }
        .configurationDisplayName("Kalbėk!")
        .description("Dienų serija, kita pamoka ir kartojimui laukiantys žodžiai.")
        .supportedFamilies([.systemSmall, .systemMedium, .accessoryCircular, .accessoryRectangular])
        .contentMarginsDisabled()
    }
}

// MARK: - Live Activity (pamokos pokalbis)

#if canImport(ActivityKit)
struct LessonActivityLockScreen: View {
    let context: ActivityViewContext<LessonActivityAttributes>
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    var state: LessonActivityAttributes.ContentState { context.state }
    var completed: Bool { state.phase == "completed" }
    var pose: String {
        switch state.phase {
        case "speaking": return "talking"
        case "listening": return "listening"
        case "exercise": return "idle"
        case "completed": return "happy"
        case "ended": return "encourage"
        default: return "thinking"
        }
    }
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                HStack(spacing: 6) {
                    Image("kalbek-mark").renderingMode(.template).resizable().scaledToFit().frame(width: 26, height: 16).foregroundStyle(Palette.ink)
                    Text("Kalbėk!").font(.system(size: 13, weight: .heavy)).foregroundStyle(Palette.ink)
                }
                Spacer()
                HStack(spacing: 4) {
                    Image(systemName: "clock")
                    Text(state.startedAt, style: .timer)
                }
                .font(.system(size: 12, weight: .bold).monospacedDigit())
                .foregroundStyle(Palette.muted)
            }
            HStack(alignment: .top, spacing: 10) {
                EmaPose(name: pose).frame(width: 52, height: 56)
                VStack(alignment: .leading, spacing: 2) {
                    Text("\(context.attributes.level) · \(context.attributes.lessonTitle)")
                        .font(.system(size: 11)).foregroundStyle(Palette.muted).lineLimit(1)
                    Text(LessonPhase.title(state.phase))
                        .font(.system(size: 16, weight: .heavy))
                        .foregroundStyle(state.phase == "listening" || completed ? Palette.green : Palette.ink)
                        .contentTransition(.opacity)
                        .animation(reduceMotion ? nil : .easeOut(duration: 0.2), value: state.phase)
                    Text(LessonPhase.subtitle(state.phase)).font(.system(size: 11)).foregroundStyle(Palette.muted).lineLimit(1)
                }
                Spacer(minLength: 0)
            }
            HStack {
                HStack(spacing: 5) {
                    Image(systemName: LessonPhase.symbol(state.phase))
                    Text("\(state.learnerTurns) / \(state.requiredTurns) replikų")
                        .contentTransition(.numericText())
                        .animation(reduceMotion ? nil : .easeOut(duration: 0.25), value: state.learnerTurns)
                }
                .font(.system(size: 12, weight: .bold)).foregroundStyle(Palette.plum)
                Spacer()
                Link(destination: lessonURL) {
                    HStack(spacing: 5) { Text("Į pamoką"); Image(systemName: "arrow.right") }
                        .font(.system(size: 12, weight: .bold))
                        .padding(.horizontal, 12).frame(height: 36)
                        .background(Palette.plum, in: RoundedRectangle(cornerRadius: 11))
                        .foregroundStyle(.white)
                }
            }
        }
        .padding(14)
        .activityBackgroundTint(completed ? Palette.greenSoft : Palette.paper)
        .activitySystemActionForegroundColor(Palette.plum)
    }
}

struct LessonLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: LessonActivityAttributes.self) { context in
            LessonActivityLockScreen(context: context)
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    HStack(spacing: 6) {
                        Image("kalbek-mark").renderingMode(.template).resizable().scaledToFit().frame(width: 24, height: 15)
                        Text("Kalbėk!").font(.system(size: 13, weight: .heavy))
                    }
                }
                DynamicIslandExpandedRegion(.trailing) {
                    HStack(spacing: 4) { Image(systemName: "clock"); Text(context.state.startedAt, style: .timer) }
                        .font(.system(size: 12, weight: .bold).monospacedDigit())
                        .frame(maxWidth: 70)
                }
                DynamicIslandExpandedRegion(.center) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("\(context.attributes.level) · \(context.attributes.lessonTitle)").font(.system(size: 11)).foregroundStyle(.secondary).lineLimit(1)
                        Text(LessonPhase.title(context.state.phase)).font(.system(size: 16, weight: .heavy))
                            .foregroundStyle(context.state.phase == "listening" ? Color(red: 0.57, green: 0.84, blue: 0.70) : .white)
                        Text(LessonPhase.subtitle(context.state.phase)).font(.system(size: 11)).foregroundStyle(.secondary).lineLimit(1)
                    }
                }
                DynamicIslandExpandedRegion(.bottom) {
                    HStack {
                        HStack(spacing: 5) {
                            Image(systemName: LessonPhase.symbol(context.state.phase))
                            Text("\(context.state.learnerTurns) / \(context.state.requiredTurns) replikų")
                        }
                        .font(.system(size: 12, weight: .bold))
                        Spacer()
                        Link(destination: lessonURL) {
                            HStack(spacing: 5) { Text("Į pamoką"); Image(systemName: "arrow.right") }
                                .font(.system(size: 12, weight: .bold))
                                .padding(.horizontal, 12).frame(height: 34)
                                .background(Color(red: 0.86, green: 0.76, blue: 0.95), in: RoundedRectangle(cornerRadius: 11))
                                .foregroundStyle(Color(red: 0.16, green: 0.10, blue: 0.21))
                        }
                    }
                }
            } compactLeading: {
                Image("kalbek-mark").renderingMode(.template).resizable().scaledToFit().frame(width: 22, height: 14)
            } compactTrailing: {
                HStack(spacing: 3) {
                    Image(systemName: LessonPhase.symbol(context.state.phase)).font(.system(size: 10, weight: .bold))
                        .foregroundStyle(context.state.phase == "listening" ? Color(red: 0.57, green: 0.84, blue: 0.70) : .white)
                    Text("\(context.state.learnerTurns)/\(context.state.requiredTurns)").font(.system(size: 12, weight: .heavy))
                }
            } minimal: {
                Image("kalbek-mark").renderingMode(.template).resizable().scaledToFit().frame(width: 20, height: 13)
            }
            .widgetURL(lessonURL)
            .keylineTint(Palette.plum)
        }
    }
}
#endif

@main
struct KalbekWidgetBundle: WidgetBundle {
    var body: some Widget {
        KalbekWidget()
        #if canImport(ActivityKit)
        LessonLiveActivity()
        #endif
    }
}
