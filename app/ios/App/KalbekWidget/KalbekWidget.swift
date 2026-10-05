import WidgetKit
import SwiftUI

// Duomenys, kuriuos programėlė įrašo per WidgetBridgePlugin (App Group "group.lt.kalbek.app").
struct WidgetData: Codable {
    var streak: Int = 0
    var doneToday: Bool = false
    var wordsDue: Int = 0
    var xp: Int = 0
    var level: String = "A1+"
    var nextTitle: String = "Pradėk pirmą pamoką"
    var nextIcon: String = "👋"
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
    func placeholder(in context: Context) -> Entry { Entry(date: .now, data: WidgetData(streak: 3, wordsDue: 12)) }
    func getSnapshot(in context: Context, completion: @escaping (Entry) -> Void) {
        completion(Entry(date: .now, data: context.isPreview ? WidgetData(streak: 3, wordsDue: 12) : .load()))
    }
    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> Void) {
        // Atnaujinti po vidurnakčio, kad „šiandien jau mokeisi“ pasikeistų į naują dieną.
        let tomorrow = Calendar.current.startOfDay(for: .now.addingTimeInterval(86_400)).addingTimeInterval(60)
        completion(Timeline(entries: [Entry(date: .now, data: .load())], policy: .after(tomorrow)))
    }
}

let accent = Color(red: 0.357, green: 0.310, blue: 0.839)
let lessonURL = URL(string: "kalbek://lesson")!
let wordsURL = URL(string: "kalbek://sprint")!

struct SmallView: View {
    let d: WidgetData
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack {
                Text("🔥 \(d.streak)").font(.title2.bold())
                Spacer()
                Text(d.level).font(.caption.bold()).foregroundStyle(.white.opacity(0.85))
            }
            Spacer(minLength: 0)
            Text(d.nextIcon).font(.title)
            Text(d.doneToday ? "Šiandien jau mokeisi ✓" : "Laikas pamokai!")
                .font(.caption.bold())
                .lineLimit(2)
        }
        .foregroundStyle(.white)
        .widgetURL(lessonURL)
    }
}

struct MediumView: View {
    let d: WidgetData
    var body: some View {
        HStack(spacing: 14) {
            VStack(alignment: .leading, spacing: 4) {
                Text("🔥 \(d.streak) d.").font(.title3.bold())
                Text("\(d.passed)/\(d.total) pamokų").font(.caption).opacity(0.85)
                if d.wordsDue > 0 {
                    Link(destination: wordsURL) {
                        Text("🔁 \(d.wordsDue) žodž.").font(.caption.bold())
                    }
                }
            }
            Divider().overlay(.white.opacity(0.4))
            VStack(alignment: .leading, spacing: 6) {
                Text(d.doneToday ? "Kita pamoka" : "Ema laukia 🙂").font(.caption).opacity(0.85)
                Text("\(d.nextIcon) \(d.nextTitle)").font(.subheadline.bold()).lineLimit(2)
                Link(destination: lessonURL) {
                    Text("Pradėti")
                        .font(.caption.bold())
                        .padding(.horizontal, 12).padding(.vertical, 6)
                        .background(.white, in: Capsule())
                        .foregroundStyle(accent)
                }
            }
            Spacer(minLength: 0)
        }
        .foregroundStyle(.white)
    }
}

struct WidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: Entry
    var body: some View {
        switch family {
        case .accessoryCircular:
            ZStack {
                AccessoryWidgetBackground()
                VStack(spacing: 0) {
                    Text("🔥").font(.caption)
                    Text("\(entry.data.streak)").font(.headline.bold())
                }
            }
            .widgetURL(lessonURL)
        case .accessoryRectangular:
            VStack(alignment: .leading) {
                Text("Kalbėk! 🔥 \(entry.data.streak)").font(.headline)
                Text(entry.data.doneToday ? "Šiandien jau mokeisi ✓" : entry.data.nextTitle).font(.caption).lineLimit(2)
            }
            .widgetURL(lessonURL)
        case .systemMedium:
            MediumView(d: entry.data)
        default:
            SmallView(d: entry.data)
        }
    }
}

@main
struct KalbekWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: "KalbekWidget", provider: Provider()) { entry in
            WidgetView(entry: entry)
                .containerBackground(for: .widget) {
                    LinearGradient(colors: [accent, Color(red: 0.26, green: 0.21, blue: 0.70)],
                                   startPoint: .topLeading, endPoint: .bottomTrailing)
                }
        }
        .configurationDisplayName("Kalbėk!")
        .description("Dienų serija, kita pamoka ir kartojimui laukiantys žodžiai.")
        .supportedFamilies([.systemSmall, .systemMedium, .accessoryCircular, .accessoryRectangular])
    }
}
