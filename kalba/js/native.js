// Ryšys su native programėle (Capacitor, iOS ir Android). Naršyklėje (PWA) visos funkcijos nieko nedaro.
const Cap = window.Capacitor;
export const isNative = !!(Cap && Cap.isNativePlatform && Cap.isNativePlatform());
const plugin = (name) => (isNative && Cap.Plugins && Cap.Plugins[name]) || null;

// Valdiklis pagrindiniame ekrane (iOS WidgetKit / Android AppWidget) – žr. app/ README.
export function updateWidget(data) {
  const p = plugin('WidgetBridge');
  if (p) p.update(data).catch(() => {});
}

// Paspaudus valdiklį ar pranešimą atidaroma kalbek://lesson arba kalbek://sprint.
export function onDeepLink(cb) {
  const app = plugin('App');
  if (!app) return;
  app.addListener('appUrlOpen', (e) => cb(e.url));
  app.getLaunchUrl().then((r) => r && r.url && cb(r.url)).catch(() => {});
  const ln = plugin('LocalNotifications');
  if (ln) ln.addListener('localNotificationActionPerformed', (e) => cb((e.notification.extra || {}).url || 'kalbek://lesson'));
}

const DAY_MSGS = [
  ['Ema laukia 🙂', 'Kelios minutės angliškai – ir serija tęsiasi!'],
  ["Let's talk! 🗣️", 'Šiandienos pamoka paruošta. 15 minučių?'],
  ['Laikas anglų kalbai ✨', 'Pakalbėkime – Ema turi naujų užduočių.'],
  ['Hi! 👋', 'Kaip praėjo diena? Papasakok Emai angliškai.'],
  ['🔁 Žodžiai laukia', 'Greitas žodžių kartojimas ir viena pamoka.'],
];
const EVENING = ['Neprarask serijos 🔥', 'Dar spėsi šiandien – užtenka trumpos pamokos!'];

let lastKey = '';
// Priminimai 7 dienoms į priekį: kasdien pasirinktu laiku + vakare, jei tą dieną dar nesimokei.
export async function scheduleReminders({ time, doneToday, streak }) {
  const ln = plugin('LocalNotifications');
  if (!ln) return;
  const key = `${time}|${doneToday}|${new Date().toDateString()}`;
  if (key === lastKey) return;
  lastKey = key;
  try {
    const pending = await ln.getPending();
    const ours = (pending.notifications || []).filter((n) => n.id >= 100 && n.id < 200);
    if (ours.length) await ln.cancel({ notifications: ours.map((n) => ({ id: n.id })) });
    if (!time || time === 'off') return;
    const perm = await ln.checkPermissions();
    if (perm.display !== 'granted') {
      const req = await ln.requestPermissions();
      if (req.display !== 'granted') return;
    }
    const [h, m] = time.split(':').map(Number);
    const now = new Date();
    const list = [];
    for (let d = 0; d < 7; d++) {
      const at = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d, h, m);
      const eve = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d, 21, 30);
      const today = d === 0;
      if (!(today && doneToday) && at > now) {
        const [title, body] = DAY_MSGS[(now.getDate() + d) % DAY_MSGS.length];
        list.push({ id: 100 + d, title, body, schedule: { at, allowWhileIdle: true }, extra: { url: 'kalbek://lesson' } });
      }
      if (!(today && doneToday) && eve > now && eve > at && streak > 0) {
        list.push({ id: 120 + d, title: EVENING[0], body: EVENING[1], schedule: { at: eve, allowWhileIdle: true }, extra: { url: 'kalbek://lesson' } });
      }
    }
    if (list.length) await ln.schedule({ notifications: list });
  } catch (_) {
    lastKey = '';
  }
}
