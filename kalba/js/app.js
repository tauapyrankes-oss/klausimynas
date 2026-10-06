import { LiveSession, listLiveModels, judgeLesson } from './live.js';
import { MicRecorder, PcmPlayer, bytesToBase64 } from './audio.js';
import { lessonPrompt, freeTalkPrompt, drillPrompt, guidedTalkPrompt, TOOLS_LESSON, TOOL_SHOW, TOOL_EXERCISE, TOOL_THEORY } from './prompt.js';
import * as store from './store.js';
import { esc, rich, norm, shuffle, speak, sfx, setSfx } from './util.js';
import { mountExercise, exerciseFromTool, describeExercise } from './exercise.js';
import { isNative, updateWidget, scheduleReminders, onDeepLink, activityStart, activityUpdate, activityEnd } from './native.js';
import { ICON_SPRITE, icon } from './icons.js';
document.getElementById('icon-sprite').innerHTML = ICON_SPRITE;

const { settings } = store;
// Native programėlėje raktas įdiegiamas kompiliuojant (app/.env → www/js/config.js, į GitHub nepatenka).
const BUILTIN_KEY = (window.KALBEK_CONFIG && window.KALBEK_CONFIG.geminiKey) || '';
const apiKey = () => settings.apiKey || BUILTIN_KEY;
// Gemini Live modeliai (2026 m. spalis): numatytasis – gemini-3.8-live.
const KNOWN_LIVE = ['gemini-3.8-live', 'gemini-3.8-live-extended-thinking', 'gemini-3.1-flash-live-preview'];
setSfx(settings.sfx !== 'off');
// Kursas: curriculum/course.js (lygiai ir skyriai) + kiekvieno skyriaus failas curriculum/<lygis>/<skyrius>.js.
function loadScript(src) {
  return new Promise((resolve) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = el.onerror = resolve;
    document.head.appendChild(el);
  });
}
async function loadCourse() {
  const C = window.COURSE;
  if (!C) {
    // Senas formatas (v1): vienas failas lygiui.
    for (const f of ['a1plus', 'a2', 'a2plus', 'b1']) await loadScript(`curriculum/${f}.js`);
    return window.LEVELS || [];
  }
  await Promise.all(C.levels.flatMap((l) => l.units.map((u) => loadScript(`curriculum/${u.file}`))));
  const units = window.UNITS || {};
  // Dar neparašyti skyriai praleidžiami; atsiradę jie įsiterpia į savo vietą (pamokų id nesikeičia).
  return C.levels
    .map((l) => ({
      ...l,
      lessons: l.units.flatMap((u, n) => ((units[u.id] && units[u.id].lessons) || []).map((x) => ({ ...x, unit: { ...u, n: n + 1 } }))),
    }))
    .filter((l) => l.lessons.length);
}
const LEVELS = await loadCourse();
const LEVEL_COLORS = { a1plus: '#1f9d8a', a2: '#5b4fd6', a2plus: '#d9632b', b1: '#c23b7a' };

// Visas kursas viena eile: atrakinimas eina griežtai iš eilės.
const ALL = [];
for (const level of LEVELS) for (const lesson of level.lessons) ALL.push({ lesson, level, index: ALL.length });
const byId = Object.fromEntries(ALL.map((x) => [x.lesson.id, x]));

const $view = document.getElementById('view');
const $title = document.getElementById('title');
const $back = document.getElementById('back');
let activeTalk = null;

// ---------- Pagalbinės ----------
// Atrakinimas: iš eilės, kai ankstesnė pamoka išlaikyta. Lygio egzaminą galima laikyti IŠ ANKSTO –
// išlaikius jį atsirakina visas tas lygis (peržiūrai) ir kitas lygis.
function levelPassed(level) {
  const exam = level.lessons.find((l) => l.type === 'checkpoint');
  return !!exam && isPassed(exam.id);
}
function isUnlocked(i) {
  const x = ALL[i];
  if (i === 0 || x.lesson.type === 'checkpoint') return true;
  if (isPassed(ALL[i - 1].lesson.id)) return true;
  if (levelPassed(x.level)) return true;
  const li = LEVELS.indexOf(x.level);
  return li > 0 && x.lesson === x.level.lessons[0] && levelPassed(LEVELS[li - 1]);
}
function isPassed(id) {
  return !!(store.lessonState(id) || {}).passed;
}
// Dabartinė pamoka: pirma neišlaikyta pamoka tame lygyje, kurio egzaminas dar neišlaikytas.
function currentIndex() {
  const level = LEVELS.find((l) => !levelPassed(l)) || LEVELS[LEVELS.length - 1];
  const i = ALL.findIndex((x) => x.level === level && !isPassed(x.lesson.id));
  return i === -1 ? ALL.length - 1 : i;
}
function currentLevel() {
  return ALL.length ? ALL[currentIndex()].level : { id: 'a1plus', name: 'A1+' };
}

function memory() {
  const seen = new Set();
  const mistakes = [];
  for (const m of store.progress.mistakes) {
    const k = norm(m.correct);
    if (seen.has(k)) continue;
    seen.add(k);
    mistakes.push(m);
    if (mistakes.length >= 8) break;
  }
  const done = ALL.filter((x) => isPassed(x.lesson.id) && x.lesson.type !== 'checkpoint')
    .slice(-15)
    .map((x) => x.lesson.titleEn);
  return { mistakes, done };
}

function updateChips() {
  document.querySelector('#xp span').textContent = store.progress.xp;
  document.querySelector('#streak span').textContent = store.streakCount();
  if (isNative) syncNative();
}

// Native programėlėje: atnaujinti valdiklį ir priminimus pagal pažangą.
function syncNative() {
  if (!ALL.length) return;
  const cur = ALL[currentIndex()];
  const doneToday = store.progress.streak.last === store.today();
  updateWidget({
    streak: store.streakCount(),
    doneToday,
    wordsDue: sprintPool().filter((v) => store.isWordDue(v.en)).length,
    xp: store.progress.xp,
    level: cur.level.name,
    nextTitle: cur.lesson.title,
    nextIcon: cur.lesson.icon,
    passed: ALL.filter((x) => isPassed(x.lesson.id)).length,
    total: ALL.length,
  });
  scheduleReminders({ time: settings.reminder, doneToday, streak: store.streakCount() });
}

// Pamokos rūšis → SVG ikona (UI be emoji; kurso duomenys nekeičiami).
const KIND_ICON = { grammar: 'book', vocabulary: 'spark', functional: 'chat', skills: 'coffee', pronunciation: 'volume', review: 'repeat', checkpoint: 'cup' };
const lessonIcon = (l) => icon(KIND_ICON[l.kind] || 'book');
const starsHtml = (n, cls = '') => `<span class="stars ${cls}">${[0, 1, 2].map((i) => icon('star', i < n ? 'on' : 'off')).join('')}</span>`;

// ---------- Veikėja Ema ----------
// Codex gali įkelti paveikslėlius/animacijas į assets/ema/ (žr. codex/README.md).
// Kol jų nėra, rodomi emoji.
const EMA_EMOJI = { idle: '👩‍🏫', listening: '👂', talking: '🗣️', thinking: '🤔', happy: '🥳', encourage: '💪', wave: '👋' };
let emaAssets = null;
fetch('assets/ema/manifest.json')
  .then((r) => (r.ok ? r.json() : null))
  .then((m) => {
    emaAssets = m && m.states ? m : null;
    if (emaAssets) document.querySelectorAll('[data-ema]').forEach((el) => setEma(el, el.dataset.ema));
  })
  .catch(() => {});

function ema(state, size = 64) {
  return `<span class="ema" data-ema="${state}" style="--s:${size}px">${emaInner(state)}</span>`;
}
function emaInner(state) {
  const file = emaAssets && (emaAssets.states[state] || emaAssets.states.idle);
  return file ? `<img src="assets/ema/${esc(file)}" alt="Ema">` : EMA_EMOJI[state] || EMA_EMOJI.idle;
}
function setEma(el, state) {
  if (!el || el.dataset.ema === state && el.dataset.ready) return;
  el.dataset.ema = state;
  el.dataset.ready = '1';
  el.innerHTML = emaInner(state);
}

function setHeader(title, back) {
  if (title === 'Kalbėk!') {
    $title.className = 'wordmark';
    $title.innerHTML = 'kalbėk<span>!</span>';
  } else {
    $title.className = '';
    $title.textContent = title;
  }
  $back.classList.toggle('hidden', !back);
  $back.onclick = back ? () => (location.hash = back) : null;
}

function setTab(tab) {
  document.querySelectorAll('.tabbar button').forEach((b) => {
    if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
}
document.querySelectorAll('.tabbar button').forEach((b) => (b.onclick = () => (location.hash = `#/${b.dataset.tab}`)));

function modal(html, onMount) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="modal-back"><div class="modal" role="dialog" aria-modal="true">${html}</div></div>`;
  const close = () => (root.innerHTML = '');
  onMount && onMount(root.querySelector('.modal'), close);
  return close;
}

// ---------- Maršrutai ----------
function route() {
  if (activeTalk) {
    activeTalk.stop();
    activeTalk = null;
  }
  document.getElementById('modal-root').innerHTML = '';
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  updateChips();
  window.scrollTo(0, 0);
  if (parts[0] === 'lesson' && byId[parts[1]]) return viewLesson(byId[parts[1]], parts[2]);
  if (parts[0] === 'talk') return viewFreeTalk();
  if (parts[0] === 'practice' && byId[parts[1]]) return viewPractice(byId[parts[1]], parts[2] === 'talk' ? 'talk' : 'drill');
  if (parts[0] === 'sprint') return viewSprint();
  if (parts[0] === 'stats') return viewStats();
  if (parts[0] === 'settings') return viewSettings();
  return viewPath();
}
window.addEventListener('hashchange', route);

// ---------- Šiandienos planas ----------
// Kad per dieną būtų ne tik nauja pamoka, bet ir kartojimas (tyrimai: kartojimas + kalbėjimas > nauja medžiaga).
const TOTAL_HOURS = 220; // ~172 × (30+15+15 min) + kartojimo pamokos, egzaminai, sprintai
function dailyPlanHtml(cur, due) {
  const t = store.today();
  const p = store.progress;
  const passedList = ALL.filter((x) => isPassed(x.lesson.id) && x.lesson.type !== 'checkpoint');
  const pr = (x) => (store.lessonState(x.lesson.id) || {}).practice || {};
  const doneLesson = Object.values(p.lessons).some((l) => l.last && l.last.date === t && l.last.passed);
  // Pratybos: pirmiausia pamoka, kuriai jų dar nebuvo (vakarykštė), paskui ta, kurią laikas kartoti.
  const drillFor = passedList.filter((x) => !pr(x).drill).slice(-1)[0] || due[0] || passedList.slice(-1)[0];
  const talkFor = passedList.filter((x) => pr(x).drill && !pr(x).talk).slice(-1)[0] || passedList.slice(-2)[0];
  const freeOk = ['a2plus', 'b1'].includes(ALL[cur].level.id);
  const items = [
    ['mic', `Nauja pamoka: ${esc(ALL[cur].lesson.title)}`, doneLesson, `#/lesson/${ALL[cur].lesson.id}`],
    drillFor ? ['repeat', `Pratybos: ${esc(drillFor.lesson.title)}`, pr(drillFor).drillAt === t, `#/practice/${drillFor.lesson.id}/drill`] : null,
    talkFor ? ['chat', `Vedamas pokalbis: ${esc(talkFor.lesson.title)}`, pr(talkFor).talkAt === t, `#/practice/${talkFor.lesson.id}/talk`] : freeOk ? ['chat', 'Laisvas pokalbis · 10 min.', p.talkLast === t, '#/talk'] : null,
    ['bolt', 'Žodžių sprintas · 1 min.', p.sprintLast === t, '#/sprint'],
  ].filter(Boolean);
  const done = items.filter((i) => i[2]).length;
  const hours = (p.minutes || 0) / 60;
  return `<div class="card plan"><div class="card-label">${icon('clock')} Šiandien <span>${done}/${items.length}</span></div>
    ${items.map(([ico, label, ok, href]) => `<a class="plan-item ${ok ? 'done' : ''}" href="${href}"><span class="square-icon">${icon(ok ? 'check' : ico)}</span><span class="grow">${label}</span>${icon('chevron')}</a>`).join('')}
    <div class="row" style="margin-top:12px"><div class="progressbar grow"><span style="width:${Math.min(100, (hours / TOTAL_HOURS) * 100)}%"></span></div>
    <span class="tiny muted">${hours < 1 ? `${Math.round(hours * 60)} min.` : `${hours.toFixed(1)} val.`} / ~${TOTAL_HOURS} val. iki B1</span></div>
    <p class="tiny muted" style="margin:8px 0 0">Kiekviena pamoka – trys sesijos su Ema: pamoka → pratybos → vedamas pokalbis. ~45–60 min. per dieną.</p></div>`;
}

// ---------- Kelias ----------
function viewPath() {
  setHeader('Kalbėk!');
  setTab('path');
  if (!ALL.length) {
    $view.innerHTML = '<div class="notice bad">Kurso failai neįkelti.</div>';
    return;
  }
  const cur = currentIndex();
  const due = ALL.filter((x) => store.isDue(x.lesson.id)).slice(0, 6);
  let html = `<div class="greeting"><div><p>Anglų kalba · ${esc(ALL[cur].level.name)} → B1</p><h1>Po truputį.<br>Bet kasdien.</h1></div>${ema('wave', 96)}</div>`;
  if (!apiKey()) {
    html += `<div class="notice" style="margin-bottom:16px">${icon('key')}<div>Sveika! Kad galėtum kalbėtis su AI mokytoja Ema,
      įvesk nemokamą Gemini API raktą <a href="#/settings">nustatymuose</a>. Teoriją ir pratimus gali daryti ir be jo.</div></div>`;
  }
  html += dailyPlanHtml(cur, due);
  if (due.length) {
    html += `<div class="card" style="margin-bottom:16px"><div class="card-label">${icon('repeat')} Laikas pakartoti</div>
      <div class="due-list">${due
        .map((x) => `<button class="due-item" data-go="#/practice/${x.lesson.id}/drill">${icon('repeat')} ${esc(x.lesson.title)}</button>`)
        .join('')}</div></div>`;
  }
  for (const level of LEVELS) {
    const items = ALL.filter((x) => x.level === level);
    const passed = items.filter((x) => isPassed(x.lesson.id)).length;
    const levelLocked = !isUnlocked(items[0].index);
    const examPending = !levelPassed(level);
    html += `<section class="level ${levelLocked ? 'locked' : ''}">
      <div class="level-head"><img class="level-art" src="assets/levels/${esc(level.id)}.svg" alt="" onerror="this.remove()">
      <div class="grow"><h2>${esc(level.name)} · ${esc(level.title)}</h2><p>${esc(level.description)}</p>
      <div class="progressbar"><span style="width:${(passed / items.length) * 100}%"></span></div>
      <div class="tiny muted" style="margin-top:6px">${passed} / ${items.length} pamokų</div></div></div>`;
    // Skyriai – „salos“; pamokos jose išdėstytos pakaitomis kairėje ir dešinėje.
    const units = [];
    for (const x of items) {
      const uid = x.lesson.unit ? x.lesson.unit.id : level.id;
      let u = units[units.length - 1];
      if (!u || u.id !== uid) units.push((u = { id: uid, meta: x.lesson.unit, items: [] }));
      u.items.push(x);
    }
    units.forEach((u) => {
      const ud = u.items.filter((y) => isPassed(y.lesson.id)).length;
      const exam = u.items.find((y) => y.lesson.type === 'checkpoint');
      html += `<section class="island"><div class="unit-title"><span class="level-tag">${esc(level.name)}</span>
        <div class="grow"><span class="tiny muted">${u.meta ? `${u.meta.n} skyrius · ` : ''}${ud} iš ${u.items.length} pamokų</span><h2>${esc(u.meta ? u.meta.title : level.title)}</h2></div>${icon('book')}</div><div class="path">`;
      u.items.forEach((x, k) => {
        const l = x.lesson;
        const unlocked = isUnlocked(x.index);
        const done = isPassed(l.id);
        const isCur = x.index === cur && !done;
        const st = store.stars(l.id);
        const pr = (store.lessonState(l.id) || {}).practice || {};
        const cls = ['node', l.type === 'checkpoint' ? 'checkpoint' : '', done ? 'done' : '', !unlocked ? 'locked' : '', isCur ? 'current' : '']
          .filter(Boolean)
          .join(' ');
        const testOut = l.type === 'checkpoint' && !done && examPending && k > 0 && !isPassed(u.items[k - 1].lesson.id);
        html += `<div class="path-stop ${k % 2 ? 'right' : ''}">
          <button class="${cls}" data-id="${esc(l.id)}" aria-label="${esc(l.title)}${unlocked ? '' : ' (užrakinta)'}">${unlocked ? lessonIcon(l) : icon('lock')}</button>
          <div class="node-label ${unlocked ? '' : 'locked'}">
            ${isCur ? '<span class="start-bubble">PRADĖK ČIA</span>' : ''}
            <b>${esc(l.title)}</b>
            <span class="tiny">${esc(l.titleEn || '')}</span>
            ${done ? `${starsHtml(st)}${pr.drill || pr.talk ? `<span class="tiny muted">${pr.drill ? `pratybos ×${pr.drill}` : ''}${pr.drill && pr.talk ? ' · ' : ''}${pr.talk ? `pokalbis ×${pr.talk}` : ''}</span>` : ''}` : ''}
            ${testOut ? '<span class="tiny muted">Gali laikyti iš anksto – išlaikius atsirakina kitas lygis</span>' : ''}
          </div></div>`;
      });
      html += `</div>${exam ? `<div class="unit-footer">${icon('cup')} ${isPassed(exam.lesson.id) ? 'Lygio egzaminas išlaikytas' : 'Skyriaus pabaigoje – lygio egzaminas'} ${icon('chevron')}</div>` : '<div style="height:16px"></div>'}</section>`;
    });
    html += '</section>';
  }
  html += `<button class="sprint-cta" data-go="#/sprint"><span class="square-icon honey">${icon('bolt')}</span><span class="grow"><b>Žodžių sprintas</b>
    <span class="small">${(() => {
      const n = sprintPool().filter((v) => store.isWordDue(v.en)).length;
      return n ? `${n} žodž. laukia kartojimo` : '60 sekundžių praktikos';
    })()} · rekordas ${store.progress.sprintBest || 0}</span></span>${icon('arrow')}</button>`;
  if (['a2plus', 'b1'].includes(ALL[cur].level.id)) {
    html += `<button class="sprint-cta" data-go="#/talk"><span class="square-icon">${icon('chat')}</span><span class="grow"><b>Laisvas pokalbis su Ema</b>
      <span class="small">Be testo – tiesiog pasikalbėk apie bet ką</span></span>${icon('arrow')}</button>`;
  }
  $view.innerHTML = html;
  $view.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => (location.hash = b.dataset.go)));
  $view.querySelectorAll('.node').forEach((b) => {
    b.onclick = () => {
      const x = byId[b.dataset.id];
      if (!isUnlocked(x.index)) {
        const c = ALL[cur];
        modal(
          `<div class="locked-modal">${ema('encourage', 150)}<span class="lock-symbol">${icon('lock')}</span>
          <h2>Viskas savo laiku.</h2>
          <p>Ši pamoka dar užrakinta. Pirmiau baik ankstesnę – Ema patvirtins, kai ją išmoksi.</p>
          <div class="locked-next"><span class="square-icon">${lessonIcon(c.lesson)}</span><div><span class="tiny muted">Tavo dabartinė pamoka</span><b>${esc(c.lesson.title)}</b></div></div>
          <button class="btn block" data-close>Gerai</button></div>`,
          (m, close) => (m.querySelector('[data-close]').onclick = close)
        );
        return;
      }
      if (isPassed(x.lesson.id) && x.lesson.type !== 'checkpoint') {
        const pr = (store.lessonState(x.lesson.id) || {}).practice || {};
        modal(
          `<div class="row">${ema('idle', 56)}<div class="grow"><h2 style="margin:0">${esc(x.lesson.title)}</h2>${starsHtml(store.stars(x.lesson.id))}</div></div>
          <div class="stack" style="margin-top:14px">
            <a class="btn block" href="#/practice/${x.lesson.id}/drill" data-close>${icon('repeat')} Pratybos · 15 min.${pr.drill ? ` · ${pr.drill} k.` : ''}</a>
            <a class="btn block" href="#/practice/${x.lesson.id}/talk" data-close>${icon('chat')} Vedamas pokalbis · 15 min.${pr.talk ? ` · ${pr.talk} k.` : ''}</a>
            <a class="btn secondary block" href="#/lesson/${x.lesson.id}" data-close>${icon('mic')} Pamoka iš naujo</a>
            <a class="btn secondary block" href="#/lesson/${x.lesson.id}/learn" data-close>${icon('book')} Teorija ir pratimai</a>
          </div>`,
          (m, close) => m.querySelectorAll('[data-close]').forEach((b) => (b.onclick = close))
        );
        return;
      }
      location.hash = `#/lesson/${x.lesson.id}`;
    };
  });
  const curNode = $view.querySelector('.node.current');
  if (curNode && !due.length) curNode.scrollIntoView({ block: 'center' });
}

// ---------- Pamoka ----------
// Pagrindinis kelias – „Pamoka su Ema“: pokalbis, užduotys ekrane, taisyklės ir įvertinimas viename.
// „Teorija“ – peržiūrai, „Pratimai“ – praktikai be interneto.
function viewLesson(x, step) {
  const { lesson: l } = x;
  if (!isUnlocked(x.index)) {
    location.hash = '#/path';
    return;
  }
  setHeader(l.title, step === 'learn' || step === 'quiz' ? `#/lesson/${l.id}` : '#/path');
  setTab('path');
  $view.innerHTML = '<div id="step"></div>';
  const $step = document.getElementById('step');
  // Viena pamoka: Ema veda viską (pokalbis, taisyklės, užduotys, rašymas, įvertinimas).
  // Teorija ir pratimai be interneto – tik papildomi puslapiai peržiūrai.
  if (step === 'quiz') return renderQuiz($step, x);
  if (step === 'learn') return renderLearn($step, x);
  return renderLessonTalk($step, x);
}

function showTheoryModal(l) {
  const g = l.grammar || {};
  modal(
    `<div class="row"><h2 class="grow">${esc(g.title || l.title)}</h2><button class="icon-btn" data-close aria-label="Uždaryti">${icon('close')}</button></div>
    <div class="explain">${theoryHtml(l, 'rule')}${g.table ? theoryHtml(l, 'table').replace(/^<h3>.*?<\/h3>/, '') : ''}
    ${(g.pitfalls || []).map((p) => `<div class="pitfall">${rich(p)}</div>`).join('')}</div>
    ${(g.examples || []).length ? theoryHtml(l, 'examples') : ''}
    ${(l.vocab || []).length ? theoryHtml(l, 'vocab') : ''}
    ${(l.phrases || []).length ? theoryHtml(l, 'phrases') : ''}
    <button class="btn block" data-close style="margin-top:14px">Grįžti į pamoką</button>`,
    (m, close) => {
      bindSay(m);
      m.querySelectorAll('[data-close]').forEach((b) => (b.onclick = close));
    }
  );
}

const sayBtn = (en) => `<button class="speak" data-say="${esc(en)}" aria-label="Paklausyti">${icon('volume')}</button>`;
const bindSay = ($el) => $el.querySelectorAll('[data-say]').forEach((b) => (b.onclick = () => speak(b.dataset.say)));

// Teorijos dalys – rodomos ir „Teorijos“ skiltyje, ir kai Ema iškviečia show_theory.
function theoryHtml(l, part) {
  const g = l.grammar || {};
  const table = g.table && g.table.length
    ? `<div class="table-scroll"><table class="gtable"><thead><tr>${g.table[0].map((c) => `<th>${rich(c)}</th>`).join('')}</tr></thead>
       <tbody>${g.table.slice(1).map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
    : '';
  const exList = (list) => `<ul class="ex">${list
    .map((e) => `<li><div class="row"><span class="en grow">${esc(e.en)}</span>${sayBtn(e.en)}</div><div class="lt">${esc(e.lt)}</div></li>`)
    .join('')}</ul>`;
  const parts = {
    rule: () => `<h3>${esc(g.title || 'Taisyklė')}</h3>${(g.explanation || []).map((p) => `<p>${rich(p)}</p>`).join('')}`,
    table: () => (table ? `<h3>${esc(g.title || 'Lentelė')}</h3>${table}` : parts.rule()),
    pitfalls: () => `<h3>Dažnos klaidos</h3>${(g.pitfalls || []).map((p) => `<div class="pitfall">${rich(p)}</div>`).join('')}`,
    examples: () => `<h3>Pavyzdžiai</h3>${exList(g.examples || [])}`,
    vocab: () => `<h3>Žodžiai</h3><div class="vocab">${(l.vocab || [])
      .map((v) => `<div><b>${esc(v.en)} ${sayBtn(v.en)}</b><span>${esc(v.lt)}</span></div>`)
      .join('')}</div>`,
    phrases: () => `<h3>Frazės</h3>${exList(l.phrases || [])}`,
    reading: () => {
      const r = l.reading;
      if (!r) return parts.examples();
      return `<h3>${esc(r.title)} ${sayBtn(r.text)}</h3>${r.text
        .split(/\n\s*\n/)
        .map((p) => `<p class="reading">${esc(p)}</p>`)
        .join('')}${(r.glossary || []).length ? `<div class="vocab">${r.glossary
        .map((v) => `<div><b>${esc(v.en)}</b><span>${esc(v.lt)}</span></div>`)
        .join('')}</div>` : ''}`;
    },
  };
  return (parts[part] || parts.rule)();
}

// Pamokos skirtukai: Pamoka su Ema / Teorija / Pratimai (ta pati pamoka, ne atskiri žingsniai).
function lessonTabs(l, active) {
  const tab = (key, label, ico) => `<a href="#/lesson/${esc(l.id)}${key === 'talk' ? '' : `/${key}`}" class="${key === active ? 'selected' : ''}">${icon(ico)} ${label}</a>`;
  return `<div class="lesson-tabs">${tab('talk', 'Pamoka su Ema', 'mic')}${tab('learn', 'Teorija', 'book')}${tab('quiz', 'Pratimai', 'pen')}</div>`;
}

function renderLearn($el, x) {
  const { lesson: l } = x;
  const g = l.grammar || {};
  const card = (html) => `<div class="card">${html}</div>`;
  $el.innerHTML = `
    ${lessonTabs(l, 'learn')}
    <div class="card"><div class="row"><span class="square-icon">${lessonIcon(l)}</span><div class="grow"><h2>${esc(l.title)}</h2>
      <p class="muted tiny" style="margin:0">${esc(l.titleEn)}</p></div></div><ul class="cando" style="margin-top:12px">${(l.canDo || []).map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
    <div class="card explain">${theoryHtml(l, 'rule')}${g.table ? theoryHtml(l, 'table').replace(/^<h3>.*?<\/h3>/, '') : ''}
      ${(g.pitfalls || []).map((p) => `<div class="pitfall">${rich(p)}</div>`).join('')}</div>
    ${(g.examples || []).length ? card(theoryHtml(l, 'examples')) : ''}
    ${(l.vocab || []).length ? card(theoryHtml(l, 'vocab')) : ''}
    ${(l.phrases || []).length ? card(theoryHtml(l, 'phrases')) : ''}
    ${l.reading ? card(theoryHtml(l, 'reading')) : ''}
    <div class="stack" style="margin-top:16px"><button class="btn block" id="next">${icon('mic')} Į pamoką su Ema</button>
    <button class="btn secondary block" id="quiz">${icon('pen')} Pratimai be interneto</button></div>`;
  bindSay($el);
  document.getElementById('next').onclick = () => (location.hash = `#/lesson/${l.id}`);
  document.getElementById('quiz').onclick = () => (location.hash = `#/lesson/${l.id}/quiz`);
}

// Papildomos užduotys sugeneruojamos iš pamokos turinio: diktantas ir žodžių poros.
function extraExercises(l) {
  const out = [];
  const ex = ((l.grammar || {}).examples || []).filter((e) => e.en.split(' ').length <= 9);
  if (ex.length) out.push({ type: 'listen', ...ex[Math.floor(Math.random() * ex.length)] });
  const vocab = (l.vocab || []).filter((v) => v.en.length <= 22 && v.lt.length <= 26);
  if (vocab.length >= 4) out.push({ type: 'match', pairs: shuffle(vocab).slice(0, 5).map((v) => [v.en, v.lt]) });
  return out;
}

function renderQuiz($el, { lesson: l }) {
  const qs = [...(l.quiz || []), ...((l.reading && l.reading.questions) || []), ...extraExercises(l)];
  let i = 0;
  let correct = 0;
  const draw = () => {
    if (i >= qs.length) {
      store.recordQuiz(l.id, correct, qs.length || 1);
      updateChips();
      const pct = Math.round((correct / (qs.length || 1)) * 100);
      $el.innerHTML = `${lessonTabs(l, 'quiz')}<div class="card" style="text-align:center">${ema(pct >= 80 ? 'happy' : 'encourage', 80)}
        <h2>Pratimai baigti: ${correct} / ${qs.length}</h2>
        <p class="muted">Pamoką išmokta patvirtina tik Ema – eik į pamoką su ja.</p>
        <div class="stack"><button class="btn block" id="go">${icon('mic')} Pamoka su Ema</button>
        <button class="btn secondary block" id="again">${icon('repeat')} Kartoti pratimus</button></div></div>`;
      document.getElementById('go').onclick = () => (location.hash = `#/lesson/${l.id}`);
      document.getElementById('again').onclick = () => {
        i = 0;
        correct = 0;
        draw();
      };
      return;
    }
    const head = `<div class="card-label">${icon('pen')} Pratimas <span>${i + 1} / ${qs.length}</span></div>
      <div class="progressbar" style="margin-bottom:14px"><span style="width:${(i / qs.length) * 100}%"></span></div>`;
    const tabs = document.createElement('div');
    tabs.innerHTML = lessonTabs(l, 'quiz');
    mountExercise($el, qs[i], {
      head,
      onDone: (r) => r.ok && correct++,
      onNext: () => {
        i++;
        draw();
      },
    });
    $el.prepend(tabs.firstElementChild);
  };
  draw();
}

// Kartojimas tarp pamokų: ankstesnės pamokos parenkamos su didėjančiais tarpais (1, 3, 7, 15 pamokų atgal)
// ir tos, kurias laikas kartoti. Iš jų – gramatika, žodžiai ir 2–3 užduotys, kurias Ema įpins į naują pamoką.
function reviewPack(x) {
  const prev = ALL.slice(0, x.index).filter((y) => isPassed(y.lesson.id) && y.lesson.type !== 'checkpoint');
  if (!prev.length) return null;
  const pick = new Map();
  const add = (y) => y && pick.set(y.lesson.id, y);
  [1, 3, 7, 15].forEach((k) => add(prev[prev.length - k]));
  prev.filter((y) => store.isDue(y.lesson.id)).slice(0, 2).forEach(add);
  const lessons = [...pick.values()].slice(0, 5);
  const exercises = shuffle(
    lessons.flatMap((y) => (y.lesson.quiz || []).filter((q) => q.type !== 'match').map((q) => ({ ...q, from: y.lesson.titleEn })))
  ).slice(0, 3);
  const words = shuffle(lessons.flatMap((y) => y.lesson.vocab || [])).slice(0, 10);
  return { lessons, exercises, words };
}

function renderLessonTalk($el, x) {
  const { lesson: l, level } = x;
  const st = store.lessonState(l.id) || {};
  const s = l.speaking || {};
  const exam = l.type === 'checkpoint';
  const review = reviewPack(x);
  const prepared = [
    ...(l.quiz || []),
    ...((l.reading && l.reading.questions) || []),
    ...extraExercises(l),
    ...(review ? review.exercises : []),
  ];
  $el.innerHTML = `${lessonTabs(l, 'talk')}
    <div class="lesson-head"><span class="square-icon ${exam ? 'honey' : ''}">${lessonIcon(l)}</span><div class="grow">
      <h2 style="font-size:17px">${exam ? `${esc(level.name)} lygio egzaminas` : esc(l.title)}</h2>
      <p class="tiny muted">${exam ? 'Ema patikrins tavo žinias per pokalbį, užduotis ir rašymą. Pagalbos bus mažiau.' : esc((l.canDo || [])[0] || l.titleEn)}</p></div>
      <button class="icon-btn" id="theory" aria-label="Teorija">${icon('book')}</button></div>
    ${resumeFor(l.id) ? `<div class="notice small" style="margin-bottom:10px">${icon('repeat')}<div>Pamoka buvo nutrūkusi – Ema pratęs nuo tos vietos (${resumeFor(l.id).turns} replikos, ${resumeFor(l.id).exDone} užduotys jau padarytos).</div></div>` : ''}
    ${review ? `<div class="notice small" style="margin-bottom:10px">${icon('repeat')}<div>Šiandien Ema pakartos ir: ${review.lessons.map((y) => esc(y.lesson.title)).join(' · ')}</div></div>` : ''}
    ${st.last && !st.passed ? `<div class="notice small" style="margin-bottom:10px">${icon('spark')}<div>Paskutinis bandymas: ${st.last.score ?? '–'} / 100. ${esc(st.last.advice_lt || '')}</div></div>` : ''}
    <div id="talk"></div>`;
  document.getElementById('theory').onclick = () => showTheoryModal(l);
  mountTalk(document.getElementById('talk'), {
    prompt: () =>
      lessonPrompt(
        l,
        level,
        settings,
        memory(),
        prepared.map((q, n) => describeExercise(q, n + 1) + (q.from ? ` (REVIEW from "${q.from}")` : '')),
        review && {
          lessons: review.lessons.map((y) => `${y.lesson.titleEn} (${y.lesson.kind})`),
          words: review.words.map((v) => v.en),
        },
        resumeFor(l.id)
      ),
    tools: [...TOOLS_LESSON, TOOL_EXERCISE, TOOL_THEORY, TOOL_SHOW],
    lesson: l,
    level,
    prepared,
    minTurns: s.minLearnerTurns || 8,
    canAssess: true,
    onResult: (result) => {
      store.recordResult(l.id, result);
      if (review) store.markReviewed(review.lessons.map((y) => y.lesson.id));
      updateChips();
      return showResult(x, result);
    },
  });
}

function showResult(x, r) {
  const { lesson: l } = x;
  const next = ALL[x.index + 1];
  const stars = r.passed ? (r.score >= 90 ? 3 : r.score >= 75 ? 2 : 1) : 0;
  const exam = l.type === 'checkpoint';
  const confetti = `<div class="confetti" aria-hidden="true">${[['10%', '70deg', 'var(--honey)'], ['20%', '140deg', 'var(--accent)'], ['38%', '266deg', 'var(--ok)'], ['65%', '455deg', 'var(--honey)'], ['78%', '546deg', 'var(--ok)'], ['90%', '630deg', 'var(--accent)']]
    .map(([x, rot, c]) => `<i style="--x:${x};--rot:${rot};--c:${c}"></i>`).join('')}</div>`;
  return () => {
    if (r.passed) sfx('levelup');
    return modal(
      `<div class="celebration">${r.passed ? confetti : ''}${ema(r.passed ? 'happy' : 'encourage', 146)}
        <span class="success-pill ${r.passed ? '' : 'pending'}">${icon(r.passed ? 'check' : 'repeat')} ${r.passed ? (exam ? 'Lygis įveiktas' : 'Pamoka išmokta') : 'Dar ne – bet jau arti'}</span>
        <h2>${r.passed ? (exam ? `${esc(x.level.name)} lygis tavo!` : `Jau gali: ${esc(((l.canDo || [])[0] || l.title).replace(/^Galiu /i, '').replace(/\.$/, ''))}`) : 'Pakartosime ir pavyks'}</h2>
        <p class="muted">${esc(r.summary_lt || '')}</p></div>
      <div class="score-row"><div class="score">${esc(r.score)}<span>/ 100</span></div>
        <div class="result-stars">${[0, 1, 2].map((i) => icon('star', i < stars ? 'on' : 'off')).join('')}<b>${stars === 3 ? 'Puikiai padirbėjai' : stars === 2 ? 'Labai gerai' : stars === 1 ? 'Išmokta' : 'Dar vienas bandymas'}</b></div></div>
      <div class="result-note">
        ${r.judge ? `<p class="tiny muted">${r.judge.error ? 'Nepriklausomas vertinimas nebuvo užbaigtas.' : `Nepriklausomas vertinimas (${esc(r.judge.model || 'Gemini')}): ${r.judge.passed ? 'išlaikyta' : 'dar ne'}.`}${r.attempts ? ` Tikslinė gramatika: ${r.correct}/${r.attempts} teisingai (${Math.round((r.correct / r.attempts) * 100)}%).` : ''}</p>` : r.attempts ? `<p class="tiny muted">Tikslinė gramatika: ${r.correct}/${r.attempts} teisingai (${Math.round((r.correct / r.attempts) * 100)}%)</p>` : ''}
        ${(r.criteria || []).length ? `<div class="criteria">${r.criteria.map((c) => `<div class="crit ${c.met ? 'ok' : 'no'}">${icon(c.met ? 'check' : 'lock')}<div>${esc(c.criterion)}${c.evidence ? `<div class="tiny muted">„${esc(c.evidence)}“</div>` : ''}</div></div>`).join('')}</div>` : ''}
        ${(r.strengths_lt || []).length ? `<h3>${icon('check')} Kas pavyko</h3>${r.strengths_lt.map((t) => `<p>${esc(t)}</p>`).join('')}` : ''}
        ${(r.mistakes || []).length ? `<h3 class="fix">${icon('pen')} ${r.mistakes.length === 1 ? 'Viena pataisa kitam kartui' : 'Pataisos kitam kartui'}</h3>${r.mistakes
          .map((m) => `<div class="mistake"><s>${esc(m.wrong)}</s> → <b>${esc(m.correct)}</b>${m.note_lt ? `<div class="tiny muted">${esc(m.note_lt)}</div>` : ''}</div>`)
          .join('')}` : ''}
        ${r.advice_lt ? `<div class="notice" style="margin-top:12px">${icon('spark')}<div>${esc(r.advice_lt)}</div></div>` : ''}
      </div>
      ${r.passed && next ? `<p class="next-unlock">${icon('lock')} Atrakinta: ${esc(next.lesson.title)}</p>` : ''}
      <div class="stack">
        ${r.passed && next ? `<button class="btn block" id="r-next">Tęsti mokymąsi ${icon('arrow')}</button>` : ''}
        ${!r.passed ? `<button class="btn block" id="r-learn">${icon('book')} Peržiūrėti teoriją</button>` : ''}
        <button class="text-link" id="r-close">Grįžti į pamokų kelią</button>
      </div>`,
      (m, close) => {
        const go = (h) => {
          close();
          location.hash = h;
        };
        m.querySelector('#r-close').onclick = () => go('#/path');
        const n = m.querySelector('#r-next');
        if (n) n.onclick = () => go(`#/lesson/${next.lesson.id}`);
        const lr = m.querySelector('#r-learn');
        if (lr) lr.onclick = () => go(`#/lesson/${l.id}/learn`);
      }
    );
  };
}

// ---------- Pratybos ir vedamas pokalbis ----------
// Trys sesijos vienai pamokai: pamoka (30 min) → pratybos (15 min) → vedamas pokalbis (15 min).
const PRACTICE = {
  drill: { icon: 'repeat', title: 'Pratybos', desc: 'Greiti vedami pratimai su Ema: pakeitimai, vertimas iš lietuvių, klausimų grandinė, diktantas, minutė kalbėjimo. Beveik be aiškinimų – kad gramatika taptų automatiška.', min: 10 },
  talk: { icon: 'chat', title: 'Vedamas pokalbis', desc: 'Pokalbis pamokos tema su pagalba: Ema ekrane parodo sakinių rėmus, klausia po vieną paprastą klausimą ir padeda lietuviškai. Saugu – gali skaityti nuo ekrano.', min: 10 },
};
function practiceCount(id, kind) {
  const l = store.lessonState(id);
  return (l && l.practice && l.practice[kind]) || 0;
}
function viewPractice(x, kind) {
  const { lesson: l, level } = x;
  if (!isPassed(l.id)) {
    location.hash = `#/lesson/${l.id}`;
    return;
  }
  const P = PRACTICE[kind];
  setHeader(`${P.title}: ${l.title}`, '#/path');
  setTab('path');
  const prepared = [...(l.quiz || []), ...extraExercises(l)];
  $view.innerHTML = `<div class="lesson-tabs"><a href="#/practice/${esc(l.id)}/drill" class="${kind === 'drill' ? 'selected' : ''}">${icon('repeat')} Pratybos</a>
      <a href="#/practice/${esc(l.id)}/talk" class="${kind === 'talk' ? 'selected' : ''}">${icon('chat')} Vedamas pokalbis</a>
      <a href="#/lesson/${esc(l.id)}/learn">${icon('book')} Teorija</a></div>
    <div class="lesson-head"><span class="square-icon">${icon(kind === 'drill' ? 'repeat' : 'chat')}</span><div class="grow">
      <h2 style="font-size:17px">${P.title}: ${esc(l.title)}</h2>
      <p class="tiny muted">${practiceCount(l.id, kind) ? `Jau darei ${practiceCount(l.id, kind)} k. · ` : ''}${P.desc}</p></div>
      <button class="icon-btn" id="theory" aria-label="Teorija">${icon('book')}</button></div>
    <div id="talk"></div>`;
  document.getElementById('theory').onclick = () => showTheoryModal(l);
  const describe = prepared.map((q, n) => describeExercise(q, n + 1));
  mountTalk(document.getElementById('talk'), {
    prompt: () => (kind === 'drill' ? drillPrompt : guidedTalkPrompt)(l, level, settings, memory(), describe),
    tools: [...TOOLS_LESSON, TOOL_EXERCISE, TOOL_THEORY, TOOL_SHOW],
    lesson: l,
    prepared,
    mode: 'practice',
    practiceKind: kind,
    minTurns: P.min,
    onResult: (r) => {
      store.recordPractice(l.id, kind, r);
      updateChips();
      return () =>
        modal(
          `<div class="celebration">${ema(r.passed ? 'happy' : 'encourage', 120)}
            <span class="success-pill">${icon('check')} ${P.title} baigtos</span>
            <h2>${kind === 'drill' ? 'Dar tvirčiau' : 'Dar drąsiau'}</h2><p class="muted">${esc(r.summary_lt || '')}</p></div>
          <div class="score-row"><div class="score">${esc(r.score)}<span>/ 100</span></div></div>
          <div class="result-note">
          ${(r.mistakes || []).length ? `<h3 class="fix">${icon('pen')} Įsimink</h3>${r.mistakes.map((m) => `<div class="mistake"><s>${esc(m.wrong)}</s> → <b>${esc(m.correct)}</b>${m.note_lt ? `<div class="tiny muted">${esc(m.note_lt)}</div>` : ''}</div>`).join('')}` : ''}
          ${r.advice_lt ? `<div class="notice" style="margin-top:12px">${icon('spark')}<div>${esc(r.advice_lt)}</div></div>` : ''}</div>
          <div class="stack" style="margin-top:16px"><a class="btn block" href="#/path" data-close>Į pamokų kelią ${icon('arrow')}</a></div>`,
          (m, close) => m.querySelectorAll('[data-close]').forEach((b) => (b.onclick = close))
        );
    },
  });
}

// Session drafts survive app restarts and TestFlight updates, independently of completed progress.
const resumeStates = store.sessions;
function clearResume(id) {
  if (id) { delete resumeStates[id]; store.saveSessions(); }
}
function resumeFor(id) {
  const r = resumeStates[id];
  return r && (r.turns >= 1 || r.exDone >= 1 || r.exercise || r.textDraft) ? r : null;
}

// ---------- Balso pokalbis (bendras pamokai ir laisvam pokalbiui) ----------
function mountTalk($el, opts) {
  $el.innerHTML = `<div class="talk">
    <section class="ema-stage" id="stage">${ema('wave', 122)}
      <div class="stage-label"><span class="status-dot" id="dot"></span><b id="status">Pasiruošusi pradėti</b><select id="speech-rate" aria-label="Emos balso tempas"><option value="0.85">Lėčiau</option><option value="1">Įprastai</option><option value="1.15">Greičiau</option></select></div>
      <p id="hint">Paspausk „Pradėti“ – Ema pasisveikins.</p>
      <div class="waveform" id="wave" aria-hidden="true">${Array.from({ length: 12 }, () => '<i></i>').join('')}</div>
      <div class="row" style="margin-top:8px;gap:8px">${opts.minTurns ? `<span class="chip" id="turns">${icon('chat')}<span>0 / ${opts.minTurns}</span></span>` : ''}
      <span class="chip hidden" id="exs">${icon('spark')}<span>0</span></span></div>
    </section>
    <div class="transcript" id="tr"></div>
    <div class="controls" id="controls">
      <button class="btn block" id="start">${icon('mic')} Pradėti pokalbį</button>
    </div></div>`;
  const $tr = $el.querySelector('#tr');
  const $status = $el.querySelector('#status');
  const $dot = $el.querySelector('#dot');
  const $stage = $el.querySelector('#stage');
  const $hint = $el.querySelector('#hint');
  const waveBars = [...$el.querySelectorAll('#wave i')];
  let micLevel = 0;
  const HINTS = { speaking: 'Klausyk. Netrukus galėsi atsakyti.', live: 'Kalbėk laisvai – Ema klauso.', thinking: 'Palauk akimirką.', '': '' };
  const $controls = $el.querySelector('#controls');
  const $turns = $el.querySelector('#turns');
  const $exs = $el.querySelector('#exs');
  const resumeID = opts.lesson && (opts.mode === 'practice' ? `practice:${opts.practiceKind}:${opts.lesson.id}` : opts.lesson.id);
  const prior = resumeID ? resumeFor(resumeID) : null;
  let exDone = prior ? prior.exDone : 0;
  let exRight = prior ? prior.exRight : 0;
  let writingDone = prior ? prior.writingDone : false;
  let openExercise = null;
  let pendingExerciseCall = null;
  let exerciseState = prior?.exercise || null;
  let textOpen = !!prior?.textDraft;
  let textDraft = prior?.textDraft || "";
  let awaitingEma = false;
  let modelGenerating = false;
  let assessing = false;
  let lastSpeechAt = 0;

  let session = null;
  let mic = null;
  let player = null;
  let speakerMuted = false;
  const $speechRate = $el.querySelector('#speech-rate');
  $speechRate.value = String(settings.speechRate || 1);
  $speechRate.onchange = () => { store.saveSettings({ speechRate: Number($speechRate.value) }); player?.setRate(settings.speechRate); };
  let micOn = settings.micMode !== 'tap';
  let turns = prior ? prior.turns : 0;
  let bubble = null;
  let bubbleRole = '';
  let pendingResult = null;
  let resultShown = false;
  let userWantsStop = false;
  let lastPassed = false;
  const transcriptLog = prior?.transcriptLog || []; // paskutinės replikos – pamokai pratęsti nutrūkus ryšiui
  const fullLog = prior?.fullLog || []; // visas pokalbis – nepriklausomam vertintojui
  const exLog = prior?.exLog || [];
  let stopped = false;
  let reconnecting = false;

  const $ema = $el.querySelector('.ema');
  const status = (text, kind, face) => {
    $status.textContent = text;
    $stage.classList.toggle('speaking', kind === 'speaking');
    $stage.classList.toggle('live', kind === 'live');
    if ($hint && HINTS[face === 'thinking' ? 'thinking' : kind || ''] !== undefined) $hint.textContent = HINTS[face === 'thinking' ? 'thinking' : kind || ''];
    setEma($ema, face || (kind === 'speaking' ? 'talking' : kind === 'live' ? 'listening' : 'idle'));
    const micBtn = $controls.querySelector('#mic');
    if (micBtn) {
      micBtn.disabled = !!openExercise;
      micBtn.classList.toggle('wait', kind === 'speaking' || face === 'thinking');
      const cap = $controls.querySelector('.mic-caption');
      if (cap) cap.textContent = kind === 'speaking' ? 'Palauk, kol Ema baigs' : openExercise ? 'Baik užduotį ekrane' : textOpen ? 'Rašant mikrofonas pristabdytas' : !micOn ? (settings.micMode === 'tap' ? 'Paspausk ir kalbėk' : 'Mikrofonas išjungtas') : 'Kalbėk – Ema klauso';
    }
  };
  // Garso bangos – iš tikro garso: Emos balso lygis (grotuvas) arba mikrofono lygis.
  const drawWave = () => {
    const speaking = player && player.playing;
    const lvl = speaking ? (player.level || 0) * 3 : micOn ? micLevel * 10 : 0;
    waveBars.forEach((b, i) => {
      const shape = Math.sin((i / 11) * Math.PI);
      const jitter = speaking || micOn ? (Math.sin(Date.now() / 90 + i * 1.7) + 1) / 2 : 0;
      b.style.height = `${Math.max(4, Math.min(29, 4 + lvl * 26 * (0.5 + shape) * (0.6 + 0.4 * jitter)))}px`;
    });
  };
  // Follow new content within the conversation, never scroll the whole page to the controls.
  let followTranscript = true;
  let scrollFrame = 0;
  $tr.addEventListener('scroll', () => {
    followTranscript = $tr.scrollHeight - $tr.clientHeight - $tr.scrollTop < 56;
  }, { passive: true });
  const scroll = () => {
    if (!followTranscript || scrollFrame || $el.contains(document.activeElement) && document.activeElement.matches('input, textarea')) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      if (!$tr.isConnected) return;
      const last = $tr.lastElementChild;
      if (!last) return;
      const top = last.getBoundingClientRect().top - $tr.getBoundingClientRect().top + $tr.scrollTop;
      // A long exercise or reply starts at its heading, rather than hiding it behind the dock.
      $tr.scrollTop = last.offsetHeight > $tr.clientHeight ? top : $tr.scrollHeight;
    });
  };
  const sys = (text) => {
    const d = document.createElement('div');
    d.className = 'bubble sys';
    d.textContent = text;
    $tr.appendChild(d);
    bubble = null;
    bubbleRole = '';
    scroll();
  };
  const addText = (role, text) => {
    const newTurn = bubbleRole !== role || !bubble;
    if (newTurn) {
      const wrap = document.createElement('div');
      wrap.className = `bubble ${role}`;
      wrap.innerHTML = `<span class="speaker">${role === 'me' ? 'Tu' : 'Ema'}</span><span class="text"></span>`;
      $tr.appendChild(wrap);
      bubble = wrap.querySelector('.text');
      bubble.textContent = '';
      bubbleRole = role;
      if (role === 'me') {
        turns++;
        store.recordSpeakingTurn();
        if (!opts.canAssess && turns === 3) store.recordTalk();
        if ($turns) $turns.querySelector('span').textContent = `${turns} / ${opts.minTurns}`;
      }
    }
    bubble.textContent += text;
    scroll();
    const last = transcriptLog[transcriptLog.length - 1];
    if (!newTurn && last && last.role === role) last.text += text;
    else transcriptLog.push({ role, text });
    const lastF = fullLog[fullLog.length - 1];
    if (!newTurn && lastF && lastF.role === role) lastF.text += text;
    else fullLog.push({ role, text });
    if (transcriptLog.length > 40) transcriptLog.shift();
    saveResume();
  };
  const saveResume = () => {
    if (!resumeID || lastPassed) return;
    resumeStates[resumeID] = {
      turns,
      exDone,
      exRight,
      writingDone,
      textDraft,
      exercise: exerciseState ? { ...exerciseState, draft: openExercise?.draft() ?? exerciseState.draft ?? '' } : null,
      transcriptLog, fullLog, exLog,
      transcript: transcriptLog.slice(-16).map((t) => `${t.role === 'me' ? 'Learner' : 'Ema'}: ${t.text.trim()}`).join('\n'),
      at: Date.now(),
    };
    store.saveSessions();
  };
  const board = ({ title, lines }) => {
    const d = document.createElement('div');
    d.className = 'board';
    d.innerHTML = `${icon('volume')}<div class="lines">${title ? `<h4>${esc(title)}</h4>` : ''}${(lines || []).map((t) => `<div>${esc(t)}</div>`).join('')}</div>`;
    $tr.appendChild(d);
    bubble = null;
    bubbleRole = '';
    scroll();
  };
  const flushResult = () => {
    if (!stopped && pendingResult && !resultShown) {
      resultShown = true;
      pendingResult();
    }
  };

  let startedAt = 0;
  // Live Activity būsena – tik mokymosi eiga, be jautrių duomenų.
  const actState = (phase, passed = false) => ({
    phase,
    learnerTurns: turns,
    requiredTurns: opts.minTurns || 0,
    exercisesDone: exDone,
    exercisesRequired: opts.canAssess ? Math.min(3, (opts.prepared || []).length) : 0,
    passed,
  });
  const stop = () => {
    saveResume();
    stopped = true;
    openExercise?.cancel();
    clearInterval(tick);
    if (isNative && opts.lesson) activityEnd(actState(pendingResult && lastPassed ? 'completed' : 'ended', !!lastPassed));
    if (startedAt) {
      store.addMinutes(Math.round((Date.now() - startedAt) / 60000));
      startedAt = 0;
      updateChips();
    }
    session && session.close();
    mic && mic.stop();
    player && player.close();
    session = mic = player = null;
  };

  const drawControls = () => {
    const tap = settings.micMode === 'tap';
    $controls.innerHTML = `<div class="mic-line">
        <button class="icon-btn" id="texttoggle" aria-label="Rašyti tekstu">${icon('pen')}</button>
        <div><button class="mic ${micOn ? '' : 'off'}" id="mic" aria-label="Mikrofonas">${icon('mic')}<span class="ring" id="ring"></span></button>
        <span class="mic-caption">${tap ? (micOn ? 'Kalbėk… baigusi paspausk' : 'Paspausk ir kalbėk') : micOn ? 'Kalbėk – Ema klauso' : 'Mikrofonas išjungtas'}</span></div>
        <button class="icon-btn" id="speaker" aria-label="${speakerMuted ? 'Įjungti Emos garsą' : 'Nutildyti Emą'}" aria-pressed="${speakerMuted}">${icon(speakerMuted ? 'volume-off' : 'volume')}</button>
        <button class="icon-btn" id="end" aria-label="Baigti pokalbį">${icon('close')}</button></div>
      <div class="textrow ${textOpen ? '' : 'hidden'}" id="textrow"><textarea id="txt" rows="2" placeholder="…arba parašyk" autocomplete="off" aria-label="Žinutė Emai">${esc(textDraft)}</textarea>
        <button class="btn" id="send" aria-label="Siųsti">${icon('send')}</button></div>
      ${opts.canAssess ? `<button class="text-link" id="assess">${icon('check')} Noriu įvertinimo</button>` : opts.mode === 'practice' ? `<button class="text-link" id="assess">${icon('check')} Baigti sesiją</button>` : ''}`;
    $controls.querySelector('#texttoggle').onclick = () => {
      const row = $controls.querySelector('#textrow');
      textOpen = !textOpen;
      row.classList.toggle('hidden', !textOpen);
      if (textOpen) { session?.endAudio(); row.querySelector('textarea').focus(); }
    };
    $controls.querySelector('#speaker').onclick = (event) => {
      speakerMuted = !speakerMuted;
      player?.setMuted(speakerMuted);
      const button = event.currentTarget;
      button.setAttribute('aria-pressed', String(speakerMuted));
      button.setAttribute('aria-label', speakerMuted ? 'Įjungti Emos garsą' : 'Nutildyti Emą');
      button.innerHTML = icon(speakerMuted ? 'volume-off' : 'volume');
    };
    $controls.querySelector('#mic').onclick = () => {
      if (player && player.ctx && player.ctx.state !== 'running') player.ctx.resume().catch(() => {});
      if (textOpen) { textOpen = false; $controls.querySelector('#textrow').classList.add('hidden'); $controls.querySelector('#txt').blur(); micOn = true; }
      else micOn = !micOn;
      if (!micOn && session) session.endAudio();
      const button = $controls.querySelector('#mic');
      button.classList.toggle('off', !micOn);
      button.setAttribute('aria-pressed', String(micOn));
    };
    $controls.querySelector('#end').onclick = () => {
      stop();
      status('Pokalbis baigtas', '');
      $controls.innerHTML = `<button class="btn block" id="restart">${icon('repeat')} Pradėti iš naujo</button>`;
      $controls.querySelector('#restart').onclick = () => mountTalk($el, opts);
      flushResult();
    };
    const $txt = $controls.querySelector('#txt');
    $txt.oninput = () => { textDraft = $txt.value; saveResume(); };
    const send = () => {
      const t = $txt.value.trim();
      if (!t || !session?.ready) return;
      addText('me', t);
      bubble = null;
      session.endAudio();
      player?.stop();
      awaitingEma = true;
      session.sendText(t);
      textDraft = '';
      $txt.value = '';
      saveResume();
    };
    $controls.querySelector('#send').onclick = send;
    $txt.onkeydown = (e) => { if (e.key === 'Enter' && !e.isComposing && (e.ctrlKey || e.metaKey)) { e.preventDefault(); send(); } };
    const a = $controls.querySelector('#assess');
    if (a) a.onclick = () => {
      if (!session) return;
      userWantsStop = true;
      if (opts.mode === 'practice') {
        sys('Baigiame sesiją');
        session.sendText('I need to stop now. Please finish the session: call complete_lesson with an honest score for what we did, then say goodbye.');
        return;
      }
      sys('Paprašei įvertinimo – jei pamoka dar nebaigta, ji bus įrašyta kaip neišlaikyta ir galėsi pratęsti vėliau');
      session.sendText("I think I'm ready. Please assess me now if I have done enough; if not, tell me what is still missing.");
    };
  };

  let tick = null;
  let heardSound = false;
  let micWarned = false;
  let listenSince = 0;
  // Būsena pagal tai, kas iš tikrųjų vyksta: kol groja Emos garsas, mikrofonas (auto režime) tyli.
  const startStatusLoop = () => {
    listenSince = Date.now();
    tick = setInterval(() => {
      if (!session || stopped) return clearInterval(tick);
      if (player && player.ctx && player.ctx.state !== 'running') player.ctx.resume().catch(() => {});
      const speaking = player && player.playing;
      drawWave();
      $stage.classList.toggle('compact', !!openExercise);
      if (isNative && opts.lesson) {
        activityUpdate(actState(reconnecting ? 'reconnecting' : speaking ? 'speaking' : openExercise ? 'exercise' : micOn || !mic ? 'listening' : 'thinking'));
      }
      if (reconnecting) {
        status('Atkuriamas ryšys – tekstas išsaugotas', '', 'thinking');
      } else if (speaking) {
        listenSince = Date.now();
        status('Ema kalba', 'speaking');
      } else if (openExercise) {
        status('Užduotis ekrane', 'live', 'thinking');
      } else if (textOpen) {
        status('Rašyk – Ema palauks', '', 'listening');
      } else if (micOn && Date.now() - lastSpeechAt < 1400) {
        status('Klausau – neskubėk', 'live');
      } else if (assessing) {
        status('Vertinama…', '', 'thinking');
      } else if (awaitingEma || modelGenerating) {
        status('Ema ruošia atsakymą…', '', 'thinking');
      } else if (micOn) {
        status('Tavo eilė – kalbėk', 'live');
      } else {
        status(settings.micMode === 'tap' ? 'Paspausk mikrofoną ir kalbėk' : 'Mikrofonas išjungtas', 'live');
      }
      if (mic && micOn && !openExercise && !textOpen && !awaitingEma && !speaking && !heardSound && !micWarned && Date.now() - listenSince > 10000) {
        micWarned = true;
        sys('Negaunu garso iš mikrofono. Patikrink, ar programėlei leistas mikrofonas (iPhone: Nustatymai → Kalbėk!/Safari → Mikrofonas), arba rašyk tekstu.');
      }
    }, 120);
  };

  const start = async () => {
    if (!apiKey()) {
      sys('Pirmiau įvesk Gemini API raktą nustatymuose.');
      $controls.innerHTML = `<a class="btn block" href="#/settings">${icon('gear')} Į nustatymus</a>`;
      return;
    }
    // Vienas garso kontekstas garsui ir mikrofonui – sukuriamas PASPAUDIMO metu (iPhone reikalavimas).
    player = new PcmPlayer();
    player.setRate(settings.speechRate || 1);
    player.ensure();
    status('Jungiamasi…', '', 'thinking');
    $controls.innerHTML = '<button class="btn block" disabled>Jungiamasi…</button>';
    let micError = null;
    const micReady = (async () => {
      try {
        mic = new MicRecorder({
          onChunk: (pcm) => {
            if (!session || !micOn || openExercise || textOpen || document.activeElement?.matches('input, textarea')) return;
            if (settings.micMode === 'auto' && player && player.playing) return; // kad Ema negirdėtų pati savęs
            session.sendAudio(pcm);
          },
          onLevel: (lvl) => {
            if (lvl > 0.004 && micOn && !player?.playing && !openExercise && !textOpen) { heardSound = true; lastSpeechAt = Date.now(); }
            micLevel = lvl;
            const ring = document.getElementById('ring');
            if (ring) {
              const v = micOn ? Math.min(1, lvl * 12) : 0;
              ring.style.opacity = v;
              ring.style.transform = `scale(${1 + v * 0.25})`;
            }
          },
        });
        await mic.start(player.ctx, { echo: settings.micMode !== 'headphones' });
      } catch (e) {
        mic = null;
        micOn = false;
        micError = e;
      }
    })();
    try {
      if (!settings.model) {
        const models = await listLiveModels(apiKey()).catch(() => []);
        store.saveSettings({ model: models.length ? models[0].id : KNOWN_LIVE[0] });
      }
      session = new LiveSession({
        apiKey: apiKey(),
        // Egzaminams – modelis su gilesniu mąstymu (lėtesnis, bet tiksliau vertina).
        model: opts.lesson && opts.lesson.type === 'checkpoint' && settings.model === 'gemini-3.8-live' ? 'gemini-3.8-live-extended-thinking' : settings.model,
        voice: settings.voice,
        micMode: settings.micMode,
        systemInstruction: opts.prompt(),
        tools: opts.tools,
      });
      wire(session);
      await session.connect();
      if (stopped) return session.close();
    } catch (e) {
      status('Nepavyko prisijungti', '');
      sys(`Klaida: ${e.message}. Patikrink API raktą ir modelį nustatymuose (${settings.model || 'modelis nepasirinktas'}).`);
      $controls.innerHTML = `<button class="btn block" id="retry">${icon('repeat')} Bandyti dar kartą</button>`;
      $controls.querySelector('#retry').onclick = () => mountTalk($el, opts);
      mic && mic.stop();
      player && player.close();
      return;
    }
    await micReady;
    if (micError) {
      sys(
        micError.name === 'NotAllowedError'
          ? 'Mikrofonas neleistas – gali rašyti tekstu. Leisk mikrofoną: iPhone Nustatymai → Kalbėk! (arba Safari) → Mikrofonas.'
          : `Mikrofono nepavyko įjungti (${micError.message || micError.name}) – gali rašyti tekstu.`
      );
    }
    drawControls();
    startStatusLoop();
    startedAt = Date.now();
    if (isNative && opts.lesson) {
      activityStart(
        { lessonID: opts.lesson.id, lessonTitle: opts.lesson.title, level: (opts.level && opts.level.name) || '' },
        actState('starting')
      );
    }
    if (exerciseState) {
      presentExercise(exerciseState.q, exerciseState.secs, exerciseState.label, null, exerciseState.draft);
      session.sendText('(The learner resumed with an unfinished on-screen exercise. Stay silent and wait for its result; do not start a new task.)');
    } else session.sendText('(The learner has just opened the lesson. Please start now.)');
  };

  // Hold a blocking tool call until the learner submits. Never replace an active form.
  const presentExercise = (q, secs, label, fc, draft = '') => {
    session?.endAudio();
    const d = document.createElement('div');
    d.className = 'inline-exercise';
    $tr.appendChild(d);
    bubble = null; bubbleRole = '';
    exerciseState = { q, secs, label, draft };
    pendingExerciseCall = fc;
    const deliver = (message) => {
      awaitingEma = true;
      const call = pendingExerciseCall;
      pendingExerciseCall = null;
      if (call) session?.sendToolResponse([{ id: call.id, name: call.name, response: { result: message } }]);
      else session?.sendText(message); // Restored form belongs to an earlier connection.
    };
    openExercise = mountExercise(d, q, {
      seconds: secs, draft, onChange: saveResume, canSubmit: () => !!session?.ready,
      label: q.type === 'write' ? 'Rašymo užduotis' : 'Ema tau skyrė užduotį',
      counter: q.type === 'write' ? 'Vertins Ema' : `${exDone + 1}`,
      onDone: (r) => {
        openExercise = null;
        exerciseState = null;
        if (q.type === 'write') {
          writingDone = true;
          fullLog.push({ role: 'app', text: `writing task "${q.q}" → learner wrote: ${r.given}` });
          store.recordExercise(true);
          saveResume();
          deliver(
              `[WRITING RESULT] Task: ${q.q} | learner wrote: «${r.given}» | Now correct it: call show_on_screen with the corrected text (keep the learner's ideas), praise what is good, explain the 1-2 most important mistakes very briefly (Lithuanian allowed), give a score 1-5, then continue the lesson.`
            );
          return;
        }
        exDone++;
        if (r.ok) exRight++;
        exLog.push({ ok: r.ok, label, given: r.given, right: r.right });
        fullLog.push({ role: 'app', text: `exercise "${label}" → ${r.ok ? 'CORRECT' : 'WRONG'} (answered: ${r.given || '-'})` });
        saveResume();
        store.recordExercise(r.ok);
        updateChips();
        if ($exs) {
          $exs.classList.remove('hidden');
          $exs.querySelector('span').textContent = `${exRight}/${exDone}`;
        }
        const msg = `[EXERCISE RESULT] ${label} | learner answered: "${r.given || '(nothing)'}" | correct: "${r.right}" | ${
          r.ok ? 'CORRECT' : r.timedOut ? 'WRONG (time ran out)' : 'WRONG'
        } | ${r.seconds}s${secs ? ` of ${secs}s` : ''}. React briefly (praise or explain in 1-2 sentences, ask the learner to say the correct sentence aloud if wrong), then continue the lesson.`;
        deliver(msg);
      },
    });
    saveResume();
    scroll();
  };

  const wire = (s) => {
    s.addEventListener('audio', (e) => { awaitingEma = false; modelGenerating = true; player?.play(e.detail); });
    s.addEventListener('output-text', (e) => { modelGenerating = true; addText('tutor', e.detail); });
    s.addEventListener('input-text', (e) => { if (!openExercise && !textOpen) { addText('me', e.detail); awaitingEma = true; } });
    s.addEventListener('interrupted', () => player && player.stop());
    s.addEventListener('turn-complete', () => {
      modelGenerating = false;
      awaitingEma = false;
      bubble = null;
      bubbleRole = '';
      if (pendingResult) setTimeout(flushResult, 1500);
    });
    s.addEventListener('tool-cancelled', (e) => { if (e.detail.includes(pendingExerciseCall?.id)) pendingExerciseCall = null; });
    s.addEventListener('tool-call', async (e) => {
      const fc = e.detail;
      const args = fc.args || {};
      let response = { result: 'ok' };
      if (fc.name === 'show_on_screen') {
        board(args);
        response = { result: 'shown' };
      } else if (fc.name === 'show_theory' && opts.lesson) {
        const d = document.createElement('div');
        d.className = 'card theory-inline';
        d.innerHTML = `<div class="card-label">${icon('book')} Trumpai apie taisyklę</div>${theoryHtml(opts.lesson, args.part)}`;
        bindSay(d);
        $tr.appendChild(d);
        bubble = null;
        bubbleRole = '';
        scroll();
        response = { result: 'shown on screen' };
      } else if (fc.name === 'give_exercise') {
        if (openExercise) {
          response = { error: 'The learner is still completing the current exercise. Keep it open and wait for its result. Do not reveal answers or assign another task.' };
        } else {
          const { q, error } = exerciseFromTool(args, opts.prepared || []);
          if (error) response = { error: `Exercise not shown: ${error}. Fix the arguments and try again.` };
          else {
            const secs = opts.lesson?.type === 'checkpoint' ? Math.max(0, Math.min(120, Number(args.seconds) || 0)) : 0;
            presentExercise(q, secs, describeExercise(q, args.quiz_index || '').replace(/^#\S* /, ''), fc);
            return; // This tool response is sent only after the learner submits the form.
          }
        }
      } else if (fc.name === 'complete_lesson' && assessing) {
        response = { error: 'Assessment is already running. Wait for its result.' };
      } else if (fc.name === 'complete_lesson' && openExercise) {
        response = { error: 'An exercise is still open. Wait for the learner to submit it before assessing.' };
      } else if (fc.name === 'complete_lesson' && opts.onResult) {
        // Griežti saitai programoje (ne tik instrukcijose): Ema negali „padovanoti“ pamokos.
        const attempts = Math.max(0, Number(args.target_attempts) || 0);
        const correct = Math.max(0, Math.min(attempts, Number(args.target_correct) || 0));
        const acc = attempts ? correct / attempts : 0;
        const minTurns = opts.minTurns || 8;
        const minEx = opts.canAssess ? Math.min(3, (opts.prepared || []).length) : 0;
        const missing = [];
        if (args.passed && opts.mode !== 'practice') {
          if (turns < minTurns) missing.push(`learner has spoken only ${turns} turns (minimum ${minTurns})`);
          if (exDone < minEx) missing.push(`only ${exDone} on-screen exercises done (minimum ${minEx})`);
          if (attempts < 6) missing.push(`only ${attempts} attempts at the target language counted (need at least 6)`);
          else if (acc < 0.75) missing.push(`accuracy ${(acc * 100).toFixed(0)}% is below 75%`);
          const crit = Array.isArray(args.criteria) ? args.criteria : [];
          const requiredCriteria = opts.lesson?.speaking?.successCriteria?.length || 0;
          if (crit.length < requiredCriteria) missing.push(`only ${crit.length} of ${requiredCriteria} success criteria assessed`);
          const unmet = crit.filter((c) => !c || c.met !== true || !String(c.evidence || '').trim()).map((c) => c?.criterion || 'missing evidence');
          if (unmet.length) missing.push(`criteria not met: ${unmet.join('; ')}`);
        }
        if (args.passed && opts.mode === 'practice' && turns < minTurns) missing.push(`learner has spoken only ${turns} turns (minimum ${minTurns})`);
        if (args.passed && missing.length && !pendingResult && !userWantsStop) {
          sys(`Dar ne viskas: ${missing.length === 1 && /spoken only/.test(missing[0]) ? 'per mažai kalbėjai – Ema tęsia pamoką' : 'Ema tęsia pamoką, kad būtum tikrai pasiruošusi'}.`);
          response = { error: `Not accepted yet: ${missing.join('; ')}. Do not end the lesson. Continue practising the weak points for a few more turns, then call complete_lesson again.` };
        } else if (!pendingResult) {
          const r = {
            passed: !!args.passed && !missing.length,
            score: Math.max(0, Math.min(100, Math.round(Number(args.score) || 0))),
            summary_lt: args.summary_lt || '',
            strengths_lt: args.strengths_lt || [],
            mistakes: args.mistakes || [],
            advice_lt: args.advice_lt || '',
            attempts,
            correct,
            criteria: Array.isArray(args.criteria) ? args.criteria : [],
          };
          if (r.passed && r.score < 60) r.passed = false;
          // Nepriklausomas vertintojas (Gemini 3.8 Flash per REST) – pamoka užskaitoma tik sutikus abiem.
          if (r.passed && opts.mode !== 'practice' && opts.lesson && apiKey()) {
            assessing = true;
            status('Vertinama…', '', 'thinking');
            sys('Nepriklausomas vertinimas – viso pokalbio peržiūra…');
            try {
              const v = await judgeLesson({
                apiKey: apiKey(),
                lesson: opts.lesson,
                level: opts.level || { name: '' },
                transcript: fullLog.map((t) => `${t.role === 'me' ? 'Learner' : t.role === 'app' ? '[app]' : 'Tutor'}: ${t.text.trim()}`).join('\n'),
                exercises: exLog,
                liveVerdict: { passed: r.passed, score: r.score, attempts, correct },
                minTurns,
              });
              r.judge = v;
              const agreed = !!v.passed;
              r.passed = r.passed && agreed;
              r.score = Math.round((r.score + Math.max(0, Math.min(100, Number(v.score) || 0))) / 2);
              if (Array.isArray(v.criteria) && v.criteria.length) r.criteria = v.criteria;
              if (v.target_attempts) {
                r.attempts = v.target_attempts;
                r.correct = Math.min(v.target_attempts, v.target_correct || 0);
              }
              const seen = new Set(r.mistakes.map((m) => norm(m.wrong)));
              for (const m of v.mistakes || []) if (m && m.wrong && !seen.has(norm(m.wrong))) r.mistakes.push(m);
              if (!r.advice_lt && v.advice_lt) r.advice_lt = v.advice_lt;
              if (!agreed && v.summary_lt) r.summary_lt = `${r.summary_lt} Vertintojas: ${v.summary_lt}`.trim();
            } catch (err) {
              assessing = false;
              saveResume();
              sys('Vertinimo šiuo metu nepavyko užbaigti. Pokalbis išsaugotas. Spausk „Noriu įvertinimo“, kad bandytume dar kartą.');
              s.sendToolResponse([{ id: fc.id, name: fc.name, response: { error: 'The independent assessment is temporarily unavailable. No result was saved. Tell the learner they can retry assessment; do not repeat the lesson or claim a pass.' } }]);
              return;
            }
          }
          assessing = false;
          if (r.passed) clearResume(resumeID);
          lastPassed = r.passed;
          if (isNative && opts.lesson) activityUpdate(actState(r.passed ? 'completed' : 'listening', r.passed));
          pendingResult = opts.onResult(r);
          sys(opts.mode === 'practice' ? 'Sesija baigta ir įrašyta.' : r.passed ? 'Įvertinta: pamoka išmokta!' : 'Įvertinta: dar reikia pasipraktikuoti.');
          response = {
            result: 'saved',
            passed: r.passed,
            score: r.score,
            note: r.judge && !r.judge.error ? `An independent examiner reviewed the transcript and ${r.judge.passed ? 'agreed' : 'did NOT agree'} with a pass. Tell the learner the final result: ${r.passed ? 'PASSED' : 'NOT PASSED yet'}.` : undefined,
          };
          setTimeout(flushResult, 6000); // jei Ema nieko nebepasakytų
        } else {
          response = { result: 'already saved' };
        }
      }
      s.sendToolResponse([{ id: fc.id, name: fc.name, response }], fc.name === 'complete_lesson' ? 'WHEN_IDLE' : 'SILENT');
    });
    s.addEventListener('go-away', async () => {
      if (reconnecting || stopped) return;
      reconnecting = true;
      try {
        await s.reconnect();
      } catch (_) {}
      reconnecting = false;
    });
    s.addEventListener('close', async (e) => {
      if (e.detail.byUser || stopped || reconnecting) return;
      if (s.resumeHandle) {
        reconnecting = true;
        status('Atkuriamas ryšys…');
        try {
          await s.reconnect();
          reconnecting = false;
          status('Prisijungta', 'live');
          return;
        } catch (_) {
          reconnecting = false;
        }
      }
      status('Ryšys nutrūko', '');
      sys(`Ryšys nutrūko (${e.detail.reason}).`);
      mic && mic.stop();
      mic = null;
      $controls.innerHTML = `<button class="btn block" id="retry">${icon('repeat')} Pradėti iš naujo</button>`;
      $controls.querySelector('#retry').onclick = () => mountTalk($el, opts);
      flushResult();
    });
  };

  $controls.querySelector('#start').onclick = start;
  if (prior?.transcriptLog) for (const entry of prior.transcriptLog.slice(-6)) {
    const d = document.createElement('div'); d.className = `bubble ${entry.role === 'me' ? 'me' : 'tutor'}`; d.textContent = entry.text; $tr.appendChild(d);
  }
  activeTalk = { stop };
}

// ---------- Žodžių sprintas (60 s) ----------
function sprintPool() {
  const open = ALL.filter((x) => isUnlocked(x.index));
  const seen = new Set();
  return (open.length >= 2 ? open : ALL.slice(0, 2))
    .flatMap((x) => x.lesson.vocab || [])
    .filter((v) => v.en && v.lt && !seen.has(v.en) && seen.add(v.en));
}

function viewSprint() {
  setHeader('Žodžių sprintas', '#/path');
  setTab('path');
  // Pirmiausia – žodžiai, kuriuos laikas kartoti (Leitnerio dėžutės), tada nauji iš atrakintų pamokų.
  const pool = sprintPool();
  const strip = (s) => norm(s).replace(/^(to|a|an|the) /, '');
  const intro = () => {
    $view.innerHTML = `<div class="card" style="text-align:center"><div class="sprint-emblem">${icon('bolt')}</div>
      <h2>Žodžių sprintas</h2><p class="small">Matysi žodį lietuviškai – rašyk angliškai. Turi <b>60 sekundžių</b>.
      Teisingas atsakymas: +1 taškas ir +2 sek.</p>
      <p class="small muted">Pirmiausia gausi žodžius, kuriuos laikas pakartoti (šiandien: <b>${pool.filter((v) => store.isWordDue(v.en)).length}</b>).
      Žinomi žodžiai grįžta vis rečiau – po 1, 3, 7, 14, 30 dienų, o pamiršti – iškart.</p>
      <p class="muted">Rekordas: <b>${store.progress.sprintBest || 0}</b></p>
      <button class="btn block" id="go">Pradėti ${icon('arrow')}</button></div>`;
    document.getElementById('go').onclick = run;
  };
  const run = () => {
    const due = pool.filter((v) => store.isWordDue(v.en));
    const fresh = pool.filter((v) => !store.wordState(v.en));
    const rest = pool.filter((v) => !due.includes(v) && !fresh.includes(v));
    const deck = [...shuffle(due), ...shuffle(fresh), ...shuffle(rest)];
    let i = 0;
    let score = 0;
    let time = 60;
    const missed = [];
    $view.innerHTML = `<div class="sprint-top"><span class="chip honey timer" id="t">${icon('clock')}<span>60</span></span><span class="chip" id="sc">${icon('check')}<span>0</span></span></div>
      <div class="progressbar" style="margin:12px 0"><span id="bar" style="width:100%"></span></div>
      <div class="word-prompt"><p class="muted">Kaip pasakytum angliškai?</p><h1 id="w"></h1></div>
      <input type="text" id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Rašyk angliškai…" aria-label="Vertimas angliškai">
      <div class="stack" style="margin-top:12px"><button class="btn block" id="ok">Tikrinti ${icon('check')}</button><button class="text-link" id="skip">Praleisti šį žodį</button></div>
      <div id="flash" class="small" style="min-height:24px;margin-top:6px;text-align:center"></div>`;
    const $w = document.getElementById('w');
    const $inp = document.getElementById('inp');
    const $flash = document.getElementById('flash');
    const show = () => {
      $w.textContent = deck[i % deck.length].lt;
      $inp.value = '';
      $inp.focus();
    };
    const next = (ok) => {
      const v = deck[i % deck.length];
      store.recordWord(v.en, ok);
      if (ok) {
        score++;
        time += 2;
        $flash.innerHTML = `<b style="color:var(--ok)">${esc(v.en)}</b> · teisingai`;
      } else {
        missed.push(v);
        $flash.innerHTML = `<span style="color:var(--bad)">Teisingai: <b>${esc(v.en)}</b></span>`;
      }
      document.querySelector('#sc span').textContent = score;
      i++;
      show();
    };
    const check = () => {
      const v = deck[i % deck.length];
      const a = strip($inp.value);
      if (!a) return;
      const ok = v.en.split(/\s*[\/,;]\s*/).some((alt) => strip(alt) === a);
      next(ok);
    };
    document.getElementById('ok').onclick = check;
    document.getElementById('skip').onclick = () => next(false);
    $inp.onkeydown = (e) => e.key === 'Enter' && check();
    show();
    const timer = setInterval(() => {
      if (!document.body.contains($w)) return clearInterval(timer);
      time--;
      document.querySelector('#t span').textContent = time;
      document.getElementById('bar').style.width = `${Math.min(100, (time / 60) * 100)}%`;
      if (time <= 0) {
        clearInterval(timer);
        const best = store.recordSprint(score);
        $view.innerHTML = `<div class="card" style="text-align:center">${ema(score >= 10 ? 'happy' : 'encourage', 96)}
          <h2>${score} ${score === 1 ? 'žodis' : 'žodžiai'}!</h2>${best ? `<p><span class="success-pill">${icon('star')} Naujas rekordas</span></p>` : ''}
          ${missed.length ? `<h3>Pasikartok:</h3><ul class="ex" style="text-align:left">${missed.slice(0, 10)
            .map((v) => `<li><span class="en">${esc(v.en)}</span> <span class="lt">– ${esc(v.lt)}</span></li>`).join('')}</ul>` : ''}
          <div class="stack" style="margin-top:12px"><button class="btn block" id="again">Dar kartą</button>
          <a class="btn secondary block" href="#/path">Į pamokas</a></div></div>`;
        document.getElementById('again').onclick = run;
        updateChips();
      }
    }, 1000);
  };
  intro();
}

// ---------- Laisvas pokalbis ----------
function viewFreeTalk() {
  const level = currentLevel();
  if (!['a2plus', 'b1'].includes(level.id)) {
    // A1+–A2: vietoj laisvo pokalbio – vedamas pokalbis paskutinės išlaikytos pamokos tema.
    const last = ALL.filter((x) => isPassed(x.lesson.id) && x.lesson.type !== 'checkpoint').pop();
    location.hash = last ? `#/practice/${last.lesson.id}/talk` : '#/path';
    return;
  }
  setHeader('Laisvas pokalbis', '#/path');
  setTab('path');
  $view.innerHTML = `<div class="card"><div class="card-label">${icon('chat')} Laisvas pokalbis</div><h3>Pasikalbėk su Ema apie bet ką</h3>
    <p class="small">Čia nėra testo – tiesiog kalbiesi ir pratiniesi. Ema prisitaikys prie tavo lygio (<b>${esc(level.name)}</b>) ir naudos jau išmoktą gramatiką.</p>
    <label class="field"><span>Tema (nebūtina)</span><input type="text" id="topic" placeholder="pvz.: kelionės, darbas, filmai, savaitgalis"></label>
    <div class="row wrap">${['My day', 'Travel', 'Food & cooking', 'Work', 'Films & series', 'Plans for the weekend']
      .map((t) => `<button class="chip" data-topic="${esc(t)}">${esc(t)}</button>`)
      .join('')}</div></div><div id="talk"></div>`;
  const $topic = document.getElementById('topic');
  $view.querySelectorAll('[data-topic]').forEach((b) => (b.onclick = () => ($topic.value = b.dataset.topic)));
  mountTalk(document.getElementById('talk'), {
    prompt: () => freeTalkPrompt(level, settings, memory(), $topic.value.trim()),
    tools: [TOOL_SHOW, TOOL_EXERCISE],
  });
}

// ---------- Pažanga ----------
function viewStats() {
  setHeader('Pažanga');
  setTab('stats');
  const p = store.progress;
  const passed = ALL.filter((x) => isPassed(x.lesson.id)).length;
  const results = ALL.filter((x) => (store.lessonState(x.lesson.id) || {}).last);
  const lv = currentLevel();
  const lvItems = ALL.filter((x) => x.level === lv);
  const lvDone = lvItems.filter((x) => isPassed(x.lesson.id)).length;
  const practiceCountAll = Object.values(p.lessons).reduce((n, l) => n + ((l.practice && (l.practice.drill || 0) + (l.practice.talk || 0)) || 0), 0);
  $view.innerHTML = `<div class="page-title"><p class="muted">Kiekvienas pokalbis skaičiuojasi</p><h1>Tavo pažanga</h1></div>
    <section class="progress-story"><div class="progress-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="43"/><circle class="ring-value" cx="50" cy="50" r="43" style="stroke-dashoffset:${270 - 270 * (lvDone / lvItems.length)}"/></svg><b>${esc(lv.name)}</b></div>
      <div><span class="tiny muted">Dabartinis lygis</span><h2>${esc(lv.title)}</h2><p><b>${passed}</b> iš ${ALL.length} pamokų išmokta</p></div></section>
    <div class="stats">
      <div class="stat">${icon('flame')}<b>${store.streakCount()}</b><span>dienos iš eilės</span></div>
      <div class="stat">${icon('chat')}<b>${p.speakingTurns || 0}</b><span>pasakytos replikos</span></div>
      <div class="stat">${icon('clock')}<b>${((p.minutes || 0) / 60).toFixed(1)} val.</b><span>mokymosi laiko iš ~${TOTAL_HOURS}</span></div>
      <div class="stat">${icon('repeat')}<b>${practiceCountAll}</b><span>pratybų ir vedamų pokalbių</span></div>
    </div>
    <section class="flat-section"><h3>Mokymosi kelias</h3>${LEVELS.map((L) => {
      const items = ALL.filter((x) => x.level === L);
      const d = items.filter((x) => isPassed(x.lesson.id)).length;
      const locked = !isUnlocked(items[0].index);
      return `<div class="level-row"><b>${esc(L.name)}</b><span class="grow">${esc(L.title)}</span>${locked ? icon('lock') : `<span class="muted">${d} / ${items.length}</span>`}</div>
        <div class="level-track"><span style="width:${(d / items.length) * 100}%"></span></div>`;
    }).join('')}</section>
    <section class="memory-card"><h3>${icon('repeat')} Prisimink kitam kartui</h3>${p.mistakes.length
      ? p.mistakes.slice(0, 12).map((m) => `<div class="mistake"><s>${esc(m.wrong)}</s> → <b>${esc(m.correct)}</b>${m.note_lt ? `<div class="tiny muted">${esc(m.note_lt)}</div>` : ''}</div>`).join('') + '<p class="tiny" style="margin:8px 0 0">Ema šias klaidas pakartos su tavimi.</p>'
      : '<p class="tiny" style="margin:8px 0 0">Kol kas tuščia. Čia atsiras klaidos, kurias Ema pastebės pokalbiuose – ji jas prisimins ir kartos su tavimi.</p>'}</section>
    <section class="flat-section" style="margin-top:20px"><h3>Pamokų rezultatai</h3>${results.length
      ? results.map((x) => {
          const st = store.lessonState(x.lesson.id);
          return `<a class="list-link" href="#/lesson/${x.lesson.id}/learn"><span class="row">${lessonIcon(x.lesson)} ${esc(x.lesson.title)}</span><span class="row">${st.passed ? `${icon('check')} ${st.bestScore}` : `${icon('repeat')} ${st.last.score}`}</span></a>`;
        }).join('')
      : '<p class="muted small">Dar nėra įvertintų pamokų.</p>'}</section>`;
}

// ---------- Nustatymai ----------
function viewSettings() {
  setHeader('Nustatymai');
  setTab('settings');
  const voices = ['Kore', 'Aoede', 'Leda', 'Zephyr', 'Puck', 'Charon', 'Fenrir', 'Orus'];
  const opt = (v, cur, label) => `<option value="${esc(v)}" ${v === cur ? 'selected' : ''}>${esc(label || v)}</option>`;
  $view.innerHTML = `
    <section class="profile-row">${ema('idle', 69)}<div><h2>Tu ir Ema</h2><p>Lėtai, aiškiai, be skubėjimo.</p></div></section>
    ${BUILTIN_KEY ? '' : `<div class="card settings"><h3>${icon('key')} Gemini ryšys</h3>
      <p class="small">Nemokamą raktą gausi <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a>
      → „Create API key“. Raktas saugomas tik šiame telefone.</p>
      <label class="field"><span>API raktas</span><input type="password" id="key" value="${esc(settings.apiKey)}" placeholder="AIza…" autocomplete="off"></label>
      <label class="field"><span>Live modelis</span>
        <input type="text" id="model" value="${esc(settings.model)}" list="models" placeholder="gemini-3.8-live">
        <datalist id="models">${KNOWN_LIVE.map((m) => `<option value="${m}">`).join('')}</datalist>
        <small>Rekomenduojama <b>gemini-3.8-live</b>. Egzaminams automatiškai naudojamas „extended-thinking“, o pamokos pabaigoje pokalbį dar kartą įvertina Gemini 3.8 Flash.</small></label>
      <div class="row wrap"><button class="btn secondary" id="find">${icon('spark')} Rasti modelius</button><span class="small muted" id="find-out"></span></div>
    </div>`}
    <div class="card settings"><h3>${icon('user')} Mokytoja Ema</h3>
      <label class="field"><span>Kaip į tave kreiptis (vardas)</span><input type="text" id="name" value="${esc(settings.name)}"></label>
      <label class="field"><span>Balsas</span><select id="voice">${voices.map((v) => opt(v, settings.voice)).join('')}</select></label>
      <label class="field"><span>Kalbėjimo tempas</span><select id="pace">${opt('auto', settings.pace, 'Pagal lygį (rekomenduojama)')}${opt('slow', settings.pace, 'Lėtai ir aiškiai')}${opt('normal', settings.pace, 'Natūraliai')}</select>
        <small>„Pagal lygį“: A1+–A2 lėtai, A2+–B1 natūraliu tempu – kad išmoktum suprasti tikrą kalbą.</small></label>
      <label class="field"><span>Kiek aiškinti lietuviškai</span><select id="lt">${opt('auto', settings.ltHelp, 'Pagal lygį (rekomenduojama)')}${opt('much', settings.ltHelp, 'Daugiausia lietuviškai')}${opt('some', settings.ltHelp, 'Pusiau')}${opt('little', settings.ltHelp, 'Beveik tik angliškai')}</select>
        <small>„Pagal lygį“: A1+–A2 Ema aiškina lietuviškai, A2+ – pusiau, B1 – beveik tik angliškai.</small></label>
      <label class="field"><span>Mikrofonas</span><select id="mic">
        ${opt('auto', settings.micMode, 'Automatiškai, be ausinių (Ema nepertraukiama)')}
        ${opt('headphones', settings.micMode, 'Su ausinėmis (gali pertraukti Emą)')}
        ${opt('tap', settings.micMode, 'Paspausk ir kalbėk')}</select>
        <small>Jei Ema pati save pertraukinėja – rinkis „Paspausk ir kalbėk“ arba naudok ausines.</small></label>
      ${isNative ? `<label class="field"><span>Kasdienis priminimas</span><input type="time" id="reminder" value="${esc(settings.reminder === 'off' ? '' : settings.reminder)}">
        <small>Ištrink laiką, jei priminimų nenori. Vakare (21:30) dar kartą primins, jei tą dieną nesimokei.</small></label>` : ''}
      <label class="field"><span>Garso efektai</span><select id="sfx">${opt('on', settings.sfx, 'Įjungti')}${opt('off', settings.sfx, 'Išjungti')}</select></label>
    </div>
    <div class="card settings"><h3>${icon('volume')} Garso testas</h3>
      <p class="small muted">Patikrina mikrofoną ir garsiakalbį tuo pačiu keliu, kuriuo kalba Ema. Jei kas nors neveikia – parašyk, ką čia rodo.</p>
      <button class="btn secondary" id="audiotest">${icon('mic')} Pradėti testą (5 s)</button>
      <div class="progressbar" style="margin-top:10px"><span id="miclevel" style="width:0%"></span></div>
      <pre class="small" id="audio-out" style="white-space:pre-wrap;margin:8px 0 0"></pre>
    </div>
    <div class="card settings"><h3>${icon('download')} Pažanga</h3>
      <p class="small muted">Pažanga saugoma telefone. Kartais pasidaryk atsarginę kopiją.</p>
      <div class="row wrap"><button class="btn secondary" id="export">${icon('download')} Eksportuoti</button>
      <label class="btn secondary">${icon('repeat')} Importuoti<input type="file" id="import" accept="application/json" hidden></label>
      <button class="btn bad" id="reset">Ištrinti pažangą</button></div>
    </div>
    <p class="tiny muted" style="text-align:center;margin-top:16px">${icon('shield', 'xs')} Pažanga ir raktas saugomi tik šiame telefone · ${ALL.length} pamokos nuo A1+ iki B1</p>`;
  const bind = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.onchange = (e) => store.saveSettings({ [key]: e.target.value.trim() });
  };
  bind('key', 'apiKey');
  bind('model', 'model');
  bind('name', 'name');
  bind('voice', 'voice');
  bind('pace', 'pace');
  bind('lt', 'ltHelp');
  bind('mic', 'micMode');
  document.getElementById('sfx').addEventListener('change', (e) => setSfx(e.target.value !== 'off'));
  bind('sfx', 'sfx');
  const rem = document.getElementById('reminder');
  if (rem) rem.onchange = () => {
    store.saveSettings({ reminder: rem.value || 'off' });
    syncNative();
  };
  const findBtn = document.getElementById('find');
  if (findBtn) findBtn.onclick = async () => {
    const out = document.getElementById('find-out');
    store.saveSettings({ apiKey: document.getElementById('key').value.trim() });
    const key = apiKey();
    if (!key) return (out.textContent = 'Pirmiau įvesk raktą.');
    out.textContent = 'Ieškoma…';
    try {
      const models = await listLiveModels(key);
      document.getElementById('models').innerHTML = models.map((m) => `<option value="${esc(m.id)}">${esc(m.label)}</option>`).join('');
      if (!models.length) return (out.textContent = 'Live modelių nerasta.');
      store.saveSettings({ model: models[0].id });
      document.getElementById('model').value = models[0].id;
      out.textContent = `Parinkta: ${models[0].id} (rasta ${models.length})`;
    } catch (e) {
      out.textContent = `Klaida: ${e.message}`;
    }
  };
  document.getElementById('audiotest').onclick = async () => {
    const out = document.getElementById('audio-out');
    const bar = document.getElementById('miclevel');
    const lines = [];
    const log = (t) => {
      lines.push(t);
      out.textContent = lines.join('\n');
    };
    const player = new PcmPlayer();
    player.ensure();
    try { await player.ready; }
    catch (error) { log(`KLAIDA – garso variklis: ${error.message}`); player.close(); return; }
    log(`Garso variklis: ${player.native ? 'iOS AVAudioEngine' : 'Web Audio'}, ${player.ctx.sampleRate} Hz, būsena ${player.ctx.state}`);
    let peak = 0;
    let chunks = 0;
    const mic = new MicRecorder({
      onChunk: () => chunks++,
      onLevel: (lvl) => {
        peak = Math.max(peak, lvl);
        bar.style.width = `${Math.min(100, lvl * 1200)}%`;
      },
    });
    try {
      await mic.start(player.ctx, { echo: settings.micMode !== 'headphones' });
      const track = mic.stream.getAudioTracks()[0];
      const st = track.getSettings ? track.getSettings() : {};
      log(`Mikrofonas: ${track.label || 'įrenginys'}; ${st.sampleRate ? st.sampleRate + ' Hz, ' : ''}aido slopinimas ${st.echoCancellation}`);
    } catch (e) {
      log(`KLAIDA – mikrofonas: ${e.name} – ${e.message}`);
    }
    log('Groju toną… turi girdėtis lygus 1 s pyptelėjimas (be traškesio)');
    await player.ready;
    const tone = new Int16Array(24000);
    for (let i = 0; i < tone.length; i++) tone[i] = Math.round(Math.sin((2 * Math.PI * 440 * i) / 24000) * 0.4 * 32767 * Math.min(1, i / 2000, (tone.length - i) / 2000));
    for (let o = 0; o < tone.length; o += 960) player.play(bytesToBase64(tone.slice(o, o + 960).buffer));
    log('Kalbėk ką nors 5 sekundes…');
    await new Promise((r) => setTimeout(r, 5000));
    mic.stop();
    player.close();
    bar.style.width = '0%';
    if (player.native) log(`Native įėjimo pikas: ${(mic.rawLevel || 0).toFixed(4)}; nutildytas: ${mic.inputMuted}`);
    log(peak > 0.01 ? `OK – mikrofonas girdi (lygis ${peak.toFixed(3)}, ${chunks} gabaliukų)` : `KLAIDA – iš mikrofono garso negauta (lygis ${peak.toFixed(4)}, ${chunks} gabaliukų)`);
  };
  document.getElementById('export').onclick = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([store.exportData()], { type: 'application/json' }));
    a.download = `kalbek-pazanga-${store.today()}.json`;
    a.click();
  };
  document.getElementById('import').onchange = async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      store.importData(await f.text());
      alert('Pažanga atkurta!');
      updateChips();
    } catch (err) {
      alert(`Nepavyko: ${err.message}`);
    }
  };
  document.getElementById('reset').onclick = () => {
    if (confirm('Tikrai ištrinti visą pažangą? To atšaukti nebus galima.')) {
      store.resetProgress();
      updateChips();
      alert('Pažanga ištrinta.');
    }
  };
}

// Keep the voice layout above the onscreen keyboard without moving the document.
const updateViewport = () => {
  const viewport = window.visualViewport;
  if (!viewport) return;
  document.documentElement.style.setProperty('--voice-viewport', `${Math.round(viewport.height)}px`);
  document.body.classList.toggle('keyboard-open', window.innerHeight - viewport.height > 120);
};
window.visualViewport?.addEventListener('resize', updateViewport);
window.addEventListener('resize', updateViewport);
updateViewport();

// ---------- Paleidimas ----------
onDeepLink((url) => {
  if (/sprint/.test(url)) location.hash = '#/sprint';
  else if (ALL.length) location.hash = `#/lesson/${ALL[currentIndex()].lesson.id}`;
});
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
if ('speechSynthesis' in window) speechSynthesis.getVoices();
route();
