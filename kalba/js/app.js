import { LiveSession, listLiveModels } from './live.js';
import { MicRecorder, PcmPlayer } from './audio.js';
import { lessonPrompt, freeTalkPrompt, TOOLS_LESSON, TOOL_SHOW, TOOL_EXERCISE, TOOL_THEORY } from './prompt.js';
import * as store from './store.js';
import { esc, rich, norm, shuffle, speak, sfx, setSfx } from './util.js';
import { mountExercise, exerciseFromTool, describeExercise } from './exercise.js';

const { settings } = store;
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
  // Kol parašyti ne visi skyriai, rodomas ankstesnis (v1) kursas.
  if (!C.levels.every((l) => l.units.every((u) => units[u.id]))) {
    for (const f of ['a1plus', 'a2', 'a2plus', 'b1']) await loadScript(`curriculum/${f}.js`);
    return window.LEVELS || [];
  }
  return C.levels
    .map((l) => ({
      ...l,
      lessons: l.units.flatMap((u, n) => ((units[u.id] && units[u.id].lessons) || []).map((x) => ({ ...x, unit: { ...u, n: n + 1 } }))),
    }))
    .filter((l) => l.lessons.length);
}
const LEVELS = await loadCourse();
const SOURCES = (window.COURSE && window.COURSE.sources) || {};
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
function isUnlocked(i) {
  return i === 0 || !!(store.lessonState(ALL[i - 1].lesson.id) || {}).passed;
}
function isPassed(id) {
  return !!(store.lessonState(id) || {}).passed;
}
function currentIndex() {
  const i = ALL.findIndex((x) => !isPassed(x.lesson.id));
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
  document.getElementById('xp').textContent = `⭐ ${store.progress.xp}`;
  document.getElementById('streak').textContent = `🔥 ${store.streakCount()}`;
}

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
  $title.textContent = title;
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
  if (parts[0] === 'sprint') return viewSprint();
  if (parts[0] === 'stats') return viewStats();
  if (parts[0] === 'settings') return viewSettings();
  return viewPath();
}
window.addEventListener('hashchange', route);

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
  const offsets = [0, 46, 70, 46, 0, -46, -70, -46];
  let html = '';
  if (!settings.apiKey) {
    html += `<div class="notice" style="margin-bottom:16px">👋 Sveika! Kad galėtum kalbėtis su AI mokytoja Ema,
      įvesk nemokamą Gemini API raktą <a href="#/settings">nustatymuose</a>. Teoriją ir pratimus gali daryti ir be jo.</div>`;
  }
  html += `<button class="card sprint-cta" data-go="#/sprint">${ema('idle', 48)}<span class="grow"><b>⚡ Žodžių sprintas</b>
    <span class="small muted">60 sekundžių – kiek žodžių spėsi išversti? Rekordas: ${store.progress.sprintBest || 0}</span></span><span>→</span></button>`;
  if (due.length) {
    html += `<div class="card" style="margin-bottom:20px"><h3>🔁 Laikas pakartoti</h3>
      <p class="small muted">Trumpas pakartojimas padeda neužmiršti (kartojimas su didėjančiais intervalais).</p>
      <div class="due-list">${due
        .map((x) => `<button class="due-item" data-go="#/lesson/${x.lesson.id}/talk">${esc(x.lesson.icon)} ${esc(x.lesson.title)}</button>`)
        .join('')}</div></div>`;
  }
  for (const level of LEVELS) {
    const items = ALL.filter((x) => x.level === level);
    const passed = items.filter((x) => isPassed(x.lesson.id)).length;
    const levelLocked = !isUnlocked(items[0].index);
    html += `<section class="level ${levelLocked ? 'locked' : ''}" style="--lvl:${LEVEL_COLORS[level.id] || 'var(--accent)'}">
      <div class="level-head"><img class="level-art" src="assets/levels/${esc(level.id)}.svg" alt="" onerror="this.remove()"><h2>${esc(level.name)} · ${esc(level.title)}</h2><p>${esc(level.description)}</p>
      <div class="progressbar"><span style="width:${(passed / items.length) * 100}%"></span></div>
      <div class="small" style="margin-top:6px">${passed} / ${items.length} pamokų</div></div><div class="path">`;
    let unitId = null;
    items.forEach((x, k) => {
      const l = x.lesson;
      if (l.unit && l.unit.id !== unitId) {
        unitId = l.unit.id;
        const ul = items.filter((y) => y.lesson.unit && y.lesson.unit.id === unitId);
        const ud = ul.filter((y) => isPassed(y.lesson.id)).length;
        html += `<div class="unit-head"><span>${esc(level.name)} · ${l.unit.n} skyrius</span><b>${esc(l.unit.title)}</b>
          <span class="small">${ud}/${ul.length}</span></div>`;
      }
      const unlocked = isUnlocked(x.index);
      const done = isPassed(l.id);
      const isCur = x.index === cur && !done;
      const st = store.stars(l.id);
      const cls = ['node', l.type === 'checkpoint' ? 'checkpoint' : '', done ? 'done' : '', !unlocked ? 'locked' : '', isCur ? 'current' : '']
        .filter(Boolean)
        .join(' ');
      html += `<div class="node-wrap" style="--x:${l.type === 'checkpoint' ? 0 : offsets[k % offsets.length]}px">
        ${isCur ? '<div class="start-bubble">PRADĖK ČIA</div>' : ''}
        <button class="${cls}" data-id="${esc(l.id)}" aria-label="${esc(l.title)}${unlocked ? '' : ' (užrakinta)'}">${unlocked ? esc(l.icon) : '🔒'}</button>
        <div class="node-label ${unlocked ? '' : 'locked'}">${esc(l.title)}${done ? `<span class="stars">${'★'.repeat(st)}${'☆'.repeat(3 - st)}</span>` : ''}</div>
      </div>`;
    });
    html += '</div></section>';
  }
  $view.innerHTML = html;
  $view.querySelectorAll('[data-go]').forEach((b) => (b.onclick = () => (location.hash = b.dataset.go)));
  $view.querySelectorAll('.node').forEach((b) => {
    b.onclick = () => {
      const x = byId[b.dataset.id];
      if (!isUnlocked(x.index)) {
        modal(
          `<div class="big-emoji">🔒</div><h2 style="text-align:center">Pamoka dar užrakinta</h2>
          <p style="text-align:center">Pirmiau išmok ankstesnę pamoką – ją patvirtina AI mokytoja po pokalbio.</p>
          <button class="btn block" data-close>Gerai</button>`,
          (m, close) => (m.querySelector('[data-close]').onclick = close)
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
  if (!step) step = settings.apiKey ? 'talk' : 'learn';
  setHeader(l.title, '#/path');
  setTab('path');
  const st = store.lessonState(l.id) || {};
  const steps = [
    ['talk', `${l.type === 'checkpoint' ? '🏆 Egzaminas' : '💬 Pamoka su Ema'}`, !!st.passed],
    ['learn', '📘 Teorija', false],
    ['quiz', '✏️ Pratimai', st.quizBest != null],
  ];
  $view.innerHTML = `<div class="steps" role="tablist">${steps
    .map(([k, label, done]) => `<button data-step="${k}" ${k === step ? 'aria-current="step"' : ''}>${label}${done ? ' <span class="done">✓</span>' : ''}</button>`)
    .join('')}</div><div id="step"></div>`;
  $view.querySelectorAll('[data-step]').forEach((b) => (b.onclick = () => (location.hash = `#/lesson/${l.id}/${b.dataset.step}`)));
  const $step = document.getElementById('step');
  if (step === 'quiz') return renderQuiz($step, x);
  if (step === 'talk') return renderLessonTalk($step, x);
  return renderLearn($step, x);
}

const sayBtn = (en) => `<button class="speak" data-say="${esc(en)}" aria-label="Paklausyti">🔊</button>`;
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
    rule: () => `<h3>📘 ${esc(g.title || 'Taisyklė')}</h3>${(g.explanation || []).map((p) => `<p>${rich(p)}</p>`).join('')}`,
    table: () => (table ? `<h3>📊 ${esc(g.title || 'Lentelė')}</h3>${table}` : parts.rule()),
    pitfalls: () => `<h3>⚠️ Dažnos klaidos</h3>${(g.pitfalls || []).map((p) => `<div class="pitfall">${rich(p)}</div>`).join('')}`,
    examples: () => `<h3>💡 Pavyzdžiai</h3>${exList(g.examples || [])}`,
    vocab: () => `<h3>🧠 Žodžiai</h3><div class="vocab">${(l.vocab || [])
      .map((v) => `<div><b>${esc(v.en)} ${sayBtn(v.en)}</b><span>${esc(v.lt)}</span></div>`)
      .join('')}</div>`,
    phrases: () => `<h3>🗣️ Frazės</h3>${exList(l.phrases || [])}`,
    reading: () => {
      const r = l.reading;
      if (!r) return parts.examples();
      return `<h3>📖 ${esc(r.title)} ${sayBtn(r.text)}</h3>${r.text
        .split(/\n\s*\n/)
        .map((p) => `<p class="reading">${esc(p)}</p>`)
        .join('')}${(r.glossary || []).length ? `<div class="vocab">${r.glossary
        .map((v) => `<div><b>${esc(v.en)}</b><span>${esc(v.lt)}</span></div>`)
        .join('')}</div>` : ''}`;
    },
  };
  return (parts[part] || parts.rule)();
}

function renderLearn($el, x) {
  const { lesson: l } = x;
  const g = l.grammar || {};
  const card = (html) => `<div class="card">${html}</div>`;
  $el.innerHTML = `
    <div class="card"><div style="font-size:40px">${esc(l.icon)}</div><h2>${esc(l.title)}</h2>
      <p class="muted">${esc(l.titleEn)}</p><ul class="cando">${(l.canDo || []).map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>
    <div class="card explain">${theoryHtml(l, 'rule')}${g.table ? theoryHtml(l, 'table').replace(/^<h3>.*?<\/h3>/, '') : ''}
      ${(g.pitfalls || []).map((p) => `<div class="pitfall">⚠️ ${rich(p)}</div>`).join('')}</div>
    ${(g.examples || []).length ? card(theoryHtml(l, 'examples')) : ''}
    ${(l.vocab || []).length ? card(theoryHtml(l, 'vocab')) : ''}
    ${(l.phrases || []).length ? card(theoryHtml(l, 'phrases')) : ''}
    ${l.reading ? card(theoryHtml(l, 'reading')) : ''}
    ${(l.sources || []).filter((id) => SOURCES[id]).length ? `<div class="card small"><h3>📚 Šaltiniai</h3><ul>${l.sources
      .filter((id) => SOURCES[id])
      .map((id) => `<li><a href="${esc(SOURCES[id].url)}" target="_blank" rel="noopener">${esc(SOURCES[id].title)}</a></li>`)
      .join('')}</ul></div>` : ''}
    <div class="stack" style="margin-top:16px"><button class="btn block" id="next">💬 Į pamoką su Ema →</button>
    <button class="btn secondary block" id="quiz">✏️ Pratimai be interneto</button></div>`;
  bindSay($el);
  document.getElementById('next').onclick = () => (location.hash = `#/lesson/${l.id}/talk`);
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
      $el.innerHTML = `<div class="card" style="text-align:center">${ema(pct >= 80 ? 'happy' : 'encourage', 80)}
        <h2>Pratimai baigti: ${correct} / ${qs.length}</h2>
        <p class="muted">Pamoką išmokta patvirtina tik Ema – eik į pamoką su ja.</p>
        <div class="stack"><button class="btn block" id="go">💬 Pamoka su Ema →</button>
        <button class="btn secondary block" id="again">Kartoti pratimus</button></div></div>`;
      document.getElementById('go').onclick = () => (location.hash = `#/lesson/${l.id}/talk`);
      document.getElementById('again').onclick = () => {
        i = 0;
        correct = 0;
        draw();
      };
      return;
    }
    const head = `<div class="row" style="margin-bottom:6px"><div class="progressbar grow"><span style="width:${(i / qs.length) * 100}%"></span></div>
      <span class="small muted">${i + 1}/${qs.length}</span></div>`;
    mountExercise($el, qs[i], {
      head,
      onDone: (r) => r.ok && correct++,
      onNext: () => {
        i++;
        draw();
      },
    });
  };
  draw();
}

function renderLessonTalk($el, x) {
  const { lesson: l, level } = x;
  const st = store.lessonState(l.id) || {};
  const s = l.speaking || {};
  const exam = l.type === 'checkpoint';
  const prepared = [...(l.quiz || []), ...((l.reading && l.reading.questions) || []), ...extraExercises(l)];
  $el.innerHTML = `<div class="card"><div class="row">${ema('wave', 56)}<div class="grow">
    <h3>${exam ? `🏆 ${esc(level.name)} lygio egzaminas` : '💬 Pamoka su Ema'}</h3>
    <ul class="cando small">${(l.canDo || []).map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div></div>
    <p class="small">${exam
      ? 'Ema kalbins tave apie visas lygio temas ir duos užduočių ekrane. Pagalbos bus mažiau – parodyk, ką moki!'
      : 'Ema pakalbins, paaiškins taisyklę, duos užduočių ekrane (kai kurios – su laikmačiu), vėl pakalbins… Pabaigoje ji <b>pati nuspręs</b>, ar pamoka išmokta – tik tada atsirakins kita.'}</p>
    <p class="small muted">Kalbėk balsu arba rašyk. Ausinės padeda, kad Ema negirdėtų pati savęs.</p>
    ${st.last ? `<div class="notice">Paskutinis bandymas: ${st.last.passed ? '✅ išmokta' : '⏳ dar neišmokta'}, ${st.last.score ?? '–'} / 100. ${esc(st.last.advice_lt || '')}</div>` : ''}
    </div><div id="talk"></div>`;
  mountTalk(document.getElementById('talk'), {
    prompt: () => lessonPrompt(l, level, settings, memory(), prepared.map((q, n) => describeExercise(q, n + 1))),
    tools: [...TOOLS_LESSON, TOOL_EXERCISE, TOOL_THEORY, TOOL_SHOW],
    lesson: l,
    prepared,
    minTurns: s.minLearnerTurns || 8,
    canAssess: true,
    onResult: (result) => {
      store.recordResult(l.id, result);
      updateChips();
      return showResult(x, result);
    },
  });
}

function showResult(x, r) {
  const { lesson: l } = x;
  const next = ALL[x.index + 1];
  const stars = r.passed ? (r.score >= 90 ? 3 : r.score >= 75 ? 2 : 1) : 0;
  return () => {
    if (r.passed) sfx('levelup');
    return modal(
      `<div class="big-emoji">${ema(r.passed ? 'happy' : 'encourage', 96)}${r.passed && l.type === 'checkpoint' ? '🏆' : ''}</div>
      <h2 style="text-align:center">${r.passed ? (l.type === 'checkpoint' ? 'Lygis įveiktas!' : 'Pamoka išmokta!') : 'Dar ne visai – bet jau arti!'}</h2>
      ${r.passed ? `<div class="result-stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>` : ''}
      <div class="score">${esc(r.score)}<span class="muted" style="font-size:18px"> / 100</span></div>
      <p>${esc(r.summary_lt || '')}</p>
      ${(r.strengths_lt || []).length ? `<h3>👍 Sekėsi</h3><ul>${r.strengths_lt.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}
      ${(r.mistakes || []).length ? `<h3>✏️ Klaidos</h3>${r.mistakes
        .map((m) => `<div class="mistake"><s>${esc(m.wrong)}</s> → <b>${esc(m.correct)}</b>${m.note_lt ? `<div class="small muted">${esc(m.note_lt)}</div>` : ''}</div>`)
        .join('')}` : ''}
      ${r.advice_lt ? `<div class="notice" style="margin:12px 0">💡 ${esc(r.advice_lt)}</div>` : ''}
      <div class="stack" style="margin-top:16px">
        ${r.passed && next ? `<button class="btn block" id="r-next">Kita pamoka: ${esc(next.lesson.title)} →</button>` : ''}
        ${!r.passed ? `<button class="btn block" id="r-learn">Peržiūrėti teoriją</button>` : ''}
        <button class="btn secondary block" id="r-close">Uždaryti</button>
      </div>`,
      (m, close) => {
        const go = (h) => {
          close();
          location.hash = h;
        };
        m.querySelector('#r-close').onclick = close;
        const n = m.querySelector('#r-next');
        if (n) n.onclick = () => go(`#/lesson/${next.lesson.id}`);
        const lr = m.querySelector('#r-learn');
        if (lr) lr.onclick = () => go(`#/lesson/${l.id}/learn`);
      }
    );
  };
}

// ---------- Balso pokalbis (bendras pamokai ir laisvam pokalbiui) ----------
function mountTalk($el, opts) {
  $el.innerHTML = `<div class="talk">
    <div class="card"><div class="talk-status">${ema('wave', 56)}<span class="dot" id="dot"></span><span id="status" class="grow">Pasiruošusi pradėti</span>
      ${opts.minTurns ? `<span class="chip small" id="turns">🗣️ 0 / ${opts.minTurns}</span>` : ''}
      <span class="chip small hidden" id="exs">🧩 0</span></div></div>
    <div class="transcript" id="tr"></div>
    <div class="controls" id="controls">
      <button class="btn block" id="start">🎙️ Pradėti pokalbį</button>
    </div></div>`;
  const $tr = $el.querySelector('#tr');
  const $status = $el.querySelector('#status');
  const $dot = $el.querySelector('#dot');
  const $controls = $el.querySelector('#controls');
  const $turns = $el.querySelector('#turns');
  const $exs = $el.querySelector('#exs');
  let exDone = 0;
  let exRight = 0;
  let openExercise = null;

  let session = null;
  let mic = null;
  let player = null;
  let micOn = settings.micMode !== 'tap';
  let turns = 0;
  let bubble = null;
  let bubbleRole = '';
  let pendingResult = null;
  let resultShown = false;
  let stopped = false;
  let reconnecting = false;

  const $ema = $el.querySelector('.ema');
  const status = (text, kind, face) => {
    $status.textContent = text;
    $dot.className = `dot ${kind || ''}`;
    setEma($ema, face || (kind === 'speaking' ? 'talking' : kind === 'live' ? 'listening' : 'idle'));
  };
  const scroll = () => $controls.scrollIntoView({ block: 'end', behavior: 'smooth' });
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
    if (bubbleRole !== role || !bubble) {
      bubble = document.createElement('div');
      bubble.className = `bubble ${role}`;
      bubble.textContent = '';
      $tr.appendChild(bubble);
      bubbleRole = role;
      if (role === 'me') {
        turns++;
        store.recordSpeakingTurn();
        if ($turns) $turns.textContent = `🗣️ ${turns} / ${opts.minTurns}`;
      }
    }
    bubble.textContent += text;
    scroll();
  };
  const board = ({ title, lines }) => {
    const d = document.createElement('div');
    d.className = 'board';
    d.innerHTML = `${title ? `<h4>${esc(title)}</h4>` : ''}${(lines || []).map((t) => `<div>${esc(t)}</div>`).join('')}`;
    $tr.appendChild(d);
    bubble = null;
    bubbleRole = '';
    scroll();
  };
  const flushResult = () => {
    if (pendingResult && !resultShown) {
      resultShown = true;
      pendingResult();
    }
  };

  const stop = () => {
    stopped = true;
    session && session.close();
    mic && mic.stop();
    player && player.close();
    session = mic = player = null;
  };

  const drawControls = () => {
    const tap = settings.micMode === 'tap';
    $controls.innerHTML = `<div class="row">
        <button class="mic ${micOn ? '' : 'off'}" id="mic" aria-label="Mikrofonas">${micOn ? '🎙️' : '🔇'}<span class="ring" id="ring"></span></button>
        <div class="grow small muted">${tap ? (micOn ? 'Kalbėk… Baigusi paspausk mygtuką.' : 'Paspausk mikrofoną ir kalbėk.') : micOn ? 'Mikrofonas įjungtas – tiesiog kalbėk.' : 'Mikrofonas išjungtas.'}</div>
        <button class="btn secondary" id="end">Baigti</button></div>
      <div class="textrow"><input type="text" id="txt" placeholder="…arba parašyk" autocomplete="off">
        <button class="btn" id="send" aria-label="Siųsti">➤</button></div>
      ${opts.canAssess ? '<button class="btn secondary block" id="assess" style="margin-top:10px">✅ Noriu įvertinimo</button>' : ''}`;
    $controls.querySelector('#mic').onclick = () => {
      micOn = !micOn;
      if (!micOn && session) session.endAudio();
      drawControls();
    };
    $controls.querySelector('#end').onclick = () => {
      stop();
      status('Pokalbis baigtas', '');
      $controls.innerHTML = '<button class="btn block" id="restart">🔄 Pradėti iš naujo</button>';
      $controls.querySelector('#restart').onclick = () => mountTalk($el, opts);
      flushResult();
    };
    const $txt = $controls.querySelector('#txt');
    const send = () => {
      const t = $txt.value.trim();
      if (!t || !session) return;
      addText('me', t);
      bubble = null;
      session.sendText(t);
      $txt.value = '';
    };
    $controls.querySelector('#send').onclick = send;
    $txt.onkeydown = (e) => e.key === 'Enter' && send();
    const a = $controls.querySelector('#assess');
    if (a) a.onclick = () => {
      if (!session) return;
      sys('Paprašei įvertinimo');
      session.sendText("I think I'm ready. Please assess me now if I have done enough; if not, tell me what is still missing.");
    };
  };

  const start = async () => {
    if (!settings.apiKey) {
      sys('Pirmiau įvesk Gemini API raktą nustatymuose.');
      $controls.innerHTML = '<a class="btn block" href="#/settings">⚙️ Į nustatymus</a>';
      return;
    }
    player = new PcmPlayer();
    player.ensure(); // turi įvykti paspaudimo metu
    status('Jungiamasi…', '', 'thinking');
    $controls.innerHTML = '<button class="btn block" disabled>Jungiamasi…</button>';
    try {
      if (!settings.model) {
        const models = await listLiveModels(settings.apiKey);
        if (!models.length) throw new Error('Su šiuo raktu nerasta jokio Live modelio.');
        store.saveSettings({ model: models[0].id });
      }
      session = new LiveSession({
        apiKey: settings.apiKey,
        model: settings.model,
        voice: settings.voice,
        systemInstruction: opts.prompt(),
        tools: opts.tools,
      });
      wire(session);
      await session.connect();
      if (stopped) return session.close();
    } catch (e) {
      status('Nepavyko prisijungti', '');
      sys(`Klaida: ${e.message}. Patikrink API raktą ir modelį nustatymuose (${settings.model || 'modelis nepasirinktas'}).`);
      $controls.innerHTML = '<button class="btn block" id="retry">🔄 Bandyti dar kartą</button>';
      $controls.querySelector('#retry').onclick = () => mountTalk($el, opts);
      player && player.close();
      return;
    }
    try {
      mic = new MicRecorder({
        onChunk: (pcm) => {
          if (!session || !micOn) return;
          if (settings.micMode === 'auto' && player && player.playing) return; // kad Ema nepertrauktų pati savęs
          session.sendAudio(pcm);
        },
        onLevel: (lvl) => {
          const ring = document.getElementById('ring');
          if (ring) {
            const v = micOn ? Math.min(1, lvl * 12) : 0;
            ring.style.opacity = v;
            ring.style.transform = `scale(${1 + v * 0.25})`;
          }
        },
      });
      await mic.start();
    } catch (e) {
      mic = null;
      micOn = false;
      sys('Mikrofonas neleidžiamas – gali rašyti tekstu. (Leisk mikrofoną naršyklės nustatymuose.)');
    }
    status('Prisijungta', 'live');
    drawControls();
    session.sendText('(The learner has just opened the session. Please start now.)');
  };

  const wire = (s) => {
    s.addEventListener('audio', (e) => {
      player && player.play(e.detail);
      status('Ema kalba…', 'speaking');
    });
    s.addEventListener('output-text', (e) => addText('tutor', e.detail));
    s.addEventListener('input-text', (e) => addText('me', e.detail));
    s.addEventListener('interrupted', () => player && player.stop());
    s.addEventListener('turn-complete', () => {
      bubble = null;
      bubbleRole = '';
      status(micOn ? 'Klausausi…' : 'Tavo eilė', 'live');
      if (pendingResult) setTimeout(flushResult, 1500);
    });
    s.addEventListener('tool-call', (e) => {
      const fc = e.detail;
      const args = fc.args || {};
      let response = { result: 'ok' };
      if (fc.name === 'show_on_screen') {
        board(args);
        response = { result: 'shown' };
      } else if (fc.name === 'show_theory' && opts.lesson) {
        const d = document.createElement('div');
        d.className = 'card theory-inline';
        d.innerHTML = theoryHtml(opts.lesson, args.part);
        bindSay(d);
        $tr.appendChild(d);
        bubble = null;
        bubbleRole = '';
        scroll();
        response = { result: 'shown on screen' };
      } else if (fc.name === 'give_exercise') {
        const { q, error } = exerciseFromTool(args, opts.prepared || []);
        if (error) {
          response = { error: `Exercise not shown: ${error}. Fix the arguments and call give_exercise again.` };
        } else {
          if (openExercise) openExercise.finish(true);
          const d = document.createElement('div');
          d.className = 'inline-exercise';
          $tr.appendChild(d);
          bubble = null;
          bubbleRole = '';
          const secs = Math.max(0, Math.min(120, Math.round(Number(args.seconds) || 0)));
          const label = describeExercise(q, args.quiz_index || '').replace(/^#\S* /, '');
          openExercise = mountExercise(d, q, {
            seconds: secs,
            onDone: (r) => {
              openExercise = null;
              exDone++;
              if (r.ok) exRight++;
              store.recordExercise(r.ok);
              updateChips();
              if ($exs) {
                $exs.classList.remove('hidden');
                $exs.textContent = `🧩 ${exRight}/${exDone}`;
              }
              const msg = `[EXERCISE RESULT] ${label} | learner answered: "${r.given || '(nothing)'}" | correct: "${r.right}" | ${
                r.ok ? 'CORRECT' : r.timedOut ? 'WRONG (time ran out)' : 'WRONG'
              } | ${r.seconds}s${secs ? ` of ${secs}s` : ''}. React briefly (praise or explain in 1-2 sentences, ask the learner to say the correct sentence aloud if wrong), then continue the lesson.`;
              session && session.sendText(msg);
            },
          });
          scroll();
          response = { result: 'Exercise is on the learner\'s screen. Say only a short encouragement now and wait silently for the [EXERCISE RESULT] message. Do not reveal the answer.' };
        }
      } else if (fc.name === 'complete_lesson' && opts.onResult) {
        if (!pendingResult) {
          const r = {
            passed: !!args.passed,
            score: Math.max(0, Math.min(100, Math.round(Number(args.score) || 0))),
            summary_lt: args.summary_lt || '',
            strengths_lt: args.strengths_lt || [],
            mistakes: args.mistakes || [],
            advice_lt: args.advice_lt || '',
          };
          if (r.passed && r.score < 60) r.passed = false;
          pendingResult = opts.onResult(r);
          sys(r.passed ? '✅ Ema įvertino: pamoka išmokta!' : '⏳ Ema įvertino: dar reikia pasipraktikuoti.');
          response = { result: 'saved', passed: r.passed, score: r.score };
          setTimeout(flushResult, 20000); // jei Ema nieko nebepasakytų
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
      $controls.innerHTML = '<button class="btn block" id="retry">🔄 Pradėti iš naujo</button>';
      $controls.querySelector('#retry').onclick = () => mountTalk($el, opts);
      flushResult();
    });
  };

  $controls.querySelector('#start').onclick = start;
  activeTalk = { stop };
}

// ---------- Žodžių sprintas (60 s) ----------
function viewSprint() {
  setHeader('Žodžių sprintas', '#/path');
  setTab('path');
  // Žodžiai iš atrakintų pamokų (bent pirmų dviejų, kad būtų iš ko rinktis).
  const open = ALL.filter((x) => isUnlocked(x.index));
  const pool = (open.length >= 2 ? open : ALL.slice(0, 2)).flatMap((x) => x.lesson.vocab || []).filter((v) => v.en && v.lt);
  const strip = (s) => norm(s).replace(/^(to|a|an|the) /, '');
  const intro = () => {
    $view.innerHTML = `<div class="card" style="text-align:center">${ema('wave', 96)}
      <h2>⚡ Žodžių sprintas</h2><p>Matysi žodį lietuviškai – rašyk angliškai. Turi <b>60 sekundžių</b>.
      Teisingas atsakymas: +1 taškas ir +2 sek. Žodžiai – iš tavo atrakintų pamokų (${pool.length}).</p>
      <p class="muted">Rekordas: <b>${store.progress.sprintBest || 0}</b></p>
      <button class="btn block" id="go">Pradėti!</button></div>`;
    document.getElementById('go').onclick = run;
  };
  const run = () => {
    const deck = shuffle(pool);
    let i = 0;
    let score = 0;
    let time = 60;
    const missed = [];
    $view.innerHTML = `<div class="card"><div class="row"><b class="chip" id="t">⏱ 60</b><span class="grow"></span><b class="chip" id="sc">✅ 0</b></div>
      <div class="progressbar" style="margin:12px 0"><span id="bar" style="width:100%"></span></div>
      <div class="quiz-q" id="w" style="text-align:center;font-size:28px"></div>
      <input type="text" id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="angliškai…">
      <div class="row" style="margin-top:12px"><button class="btn secondary grow" id="skip">Praleisti</button><button class="btn grow" id="ok">Tikrinti</button></div>
      <div id="flash" class="small" style="min-height:24px;margin-top:10px;text-align:center"></div></div>`;
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
      if (ok) {
        score++;
        time += 2;
        $flash.innerHTML = `<span style="color:var(--ok)">✅ ${esc(v.en)}</span>`;
      } else {
        missed.push(v);
        $flash.innerHTML = `<span style="color:var(--bad)">➡️ ${esc(v.en)}</span>`;
      }
      document.getElementById('sc').textContent = `✅ ${score}`;
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
      document.getElementById('t').textContent = `⏱ ${time}`;
      document.getElementById('bar').style.width = `${Math.min(100, (time / 60) * 100)}%`;
      if (time <= 0) {
        clearInterval(timer);
        const best = store.recordSprint(score);
        $view.innerHTML = `<div class="card" style="text-align:center">${ema(score >= 10 ? 'happy' : 'encourage', 96)}
          <h2>${score} ${score === 1 ? 'žodis' : 'žodžiai'}!</h2>${best ? '<p><b>🏆 Naujas rekordas!</b></p>' : ''}
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
  setHeader('Laisvas pokalbis');
  setTab('talk');
  const level = currentLevel();
  $view.innerHTML = `<div class="card"><h3>💬 Pasikalbėk su Ema apie bet ką</h3>
    <p>Čia nėra testo – tiesiog kalbiesi ir pratiniesi. Ema prisitaikys prie tavo lygio (<b>${esc(level.name)}</b>) ir naudos jau išmoktą gramatiką.</p>
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
  $view.innerHTML = `<div class="stats">
      <div class="stat"><b>${passed}/${ALL.length}</b><span>išmoktos pamokos</span></div>
      <div class="stat"><b>${esc(currentLevel().name)}</b><span>dabartinis lygis</span></div>
      <div class="stat"><b>🔥 ${store.streakCount()}</b><span>dienų iš eilės</span></div>
      <div class="stat"><b>🗣️ ${p.speakingTurns || 0}</b><span>pasakytų replikų</span></div>
    </div>
    <div class="card" style="margin-top:12px"><h3>Lygiai</h3>${LEVELS.map((lv) => {
      const items = ALL.filter((x) => x.level === lv);
      const d = items.filter((x) => isPassed(x.lesson.id)).length;
      return `<div style="margin:10px 0"><div class="row"><b class="grow">${esc(lv.name)} · ${esc(lv.title)}</b><span class="small muted">${d}/${items.length}</span></div>
        <div class="progressbar"><span style="width:${(d / items.length) * 100}%;background:${LEVEL_COLORS[lv.id]}"></span></div></div>`;
    }).join('')}</div>
    <div class="card"><h3>✏️ Mano dažniausios klaidos</h3>${p.mistakes.length
      ? p.mistakes.slice(0, 20).map((m) => `<div class="mistake"><s>${esc(m.wrong)}</s> → <b>${esc(m.correct)}</b>${m.note_lt ? `<div class="small muted">${esc(m.note_lt)}</div>` : ''}</div>`).join('')
      : '<p class="muted">Kol kas tuščia. Čia atsiras klaidos, kurias Ema pastebės pokalbiuose – ji jas prisimins ir kartos su tavimi.</p>'}</div>
    <div class="card"><h3>📋 Pamokų rezultatai</h3>${results.length
      ? results.map((x) => {
          const s = store.lessonState(x.lesson.id);
          return `<div class="row" style="padding:6px 0;border-bottom:1px dashed var(--line)"><span>${esc(x.lesson.icon)}</span>
            <a class="grow" href="#/lesson/${x.lesson.id}/learn">${esc(x.lesson.title)}</a>
            <span class="small">${s.passed ? `✅ ${s.bestScore}` : `⏳ ${s.last.score}`}</span></div>`;
        }).join('')
      : '<p class="muted">Dar nėra įvertintų pamokų.</p>'}</div>`;
}

// ---------- Nustatymai ----------
function viewSettings() {
  setHeader('Nustatymai');
  setTab('settings');
  const voices = ['Kore', 'Aoede', 'Leda', 'Zephyr', 'Puck', 'Charon', 'Fenrir', 'Orus'];
  const opt = (v, cur, label) => `<option value="${esc(v)}" ${v === cur ? 'selected' : ''}>${esc(label || v)}</option>`;
  $view.innerHTML = `
    <div class="card"><h3>🔑 Gemini API raktas</h3>
      <p class="small">Nemokamą raktą gausi <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a>
      → „Create API key“. Raktas saugomas tik šiame telefone.</p>
      <label class="field"><span>API raktas</span><input type="password" id="key" value="${esc(settings.apiKey)}" placeholder="AIza…" autocomplete="off"></label>
      <label class="field"><span>Live modelis</span>
        <input type="text" id="model" value="${esc(settings.model)}" list="models" placeholder="gemini-3.8-live">
        <datalist id="models"></datalist>
        <small>Paspausk „Rasti modelius“ – programėlė paklaus Google, kokie Live modeliai prieinami, ir parinks naujausią (pirmenybė 3.8).</small></label>
      <div class="row wrap"><button class="btn secondary" id="find">🔎 Rasti modelius</button><span class="small muted" id="find-out"></span></div>
    </div>
    <div class="card"><h3>👩‍🏫 Mokytoja Ema</h3>
      <label class="field"><span>Kaip į tave kreiptis (vardas)</span><input type="text" id="name" value="${esc(settings.name)}"></label>
      <label class="field"><span>Balsas</span><select id="voice">${voices.map((v) => opt(v, settings.voice)).join('')}</select></label>
      <label class="field"><span>Kalbėjimo tempas</span><select id="pace">${opt('slow', settings.pace, 'Lėtai ir aiškiai')}${opt('normal', settings.pace, 'Natūraliai')}</select></label>
      <label class="field"><span>Kiek aiškinti lietuviškai</span><select id="lt">${opt('much', settings.ltHelp, 'Daug (pradžiai)')}${opt('some', settings.ltHelp, 'Kartais (rekomenduojama)')}${opt('little', settings.ltHelp, 'Beveik ne')}</select></label>
      <label class="field"><span>Mikrofonas</span><select id="mic">
        ${opt('auto', settings.micMode, 'Automatiškai, be ausinių (Ema nepertraukiama)')}
        ${opt('headphones', settings.micMode, 'Su ausinėmis (gali pertraukti Emą)')}
        ${opt('tap', settings.micMode, 'Paspausk ir kalbėk')}</select>
        <small>Jei Ema pati save pertraukinėja – rinkis „Paspausk ir kalbėk“ arba naudok ausines.</small></label>
      <label class="field"><span>Garso efektai</span><select id="sfx">${opt('on', settings.sfx, 'Įjungti')}${opt('off', settings.sfx, 'Išjungti')}</select></label>
    </div>
    <div class="card"><h3>💾 Pažanga</h3>
      <p class="small muted">Pažanga saugoma telefone. Kartais pasidaryk atsarginę kopiją.</p>
      <div class="row wrap"><button class="btn secondary" id="export">⬇️ Eksportuoti</button>
      <label class="btn secondary">⬆️ Importuoti<input type="file" id="import" accept="application/json" hidden></label>
      <button class="btn bad" id="reset">Ištrinti pažangą</button></div>
    </div>
    <p class="small muted" style="text-align:center;margin-top:16px">Kalbėk! · ${ALL.length} pamokos nuo A1+ iki B1</p>`;
  const bind = (id, key) => (document.getElementById(id).onchange = (e) => store.saveSettings({ [key]: e.target.value.trim() }));
  bind('key', 'apiKey');
  bind('model', 'model');
  bind('name', 'name');
  bind('voice', 'voice');
  bind('pace', 'pace');
  bind('lt', 'ltHelp');
  bind('mic', 'micMode');
  document.getElementById('sfx').addEventListener('change', (e) => setSfx(e.target.value !== 'off'));
  bind('sfx', 'sfx');
  document.getElementById('find').onclick = async () => {
    const out = document.getElementById('find-out');
    const key = document.getElementById('key').value.trim();
    store.saveSettings({ apiKey: key });
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

// ---------- Paleidimas ----------
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
if ('speechSynthesis' in window) speechSynthesis.getVoices();
route();
