// Viena interaktyvi užduotis (pasirinkimas, įrašymas, dėliojimas, diktantas, poros).
// Naudojama ir atskiruose pratimuose, ir Emos pamokoje (kai ji iškviečia give_exercise).
import { esc, rich, norm, shuffle, speak, sfx } from './util.js';

const INPUT = 'type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"';

// q – užduotis pagal docs/CURRICULUM_SCHEMA.md (+ tipai listen {en, lt} ir match {pairs}).
// opts: { head, seconds, onDone({ ok, given, right, timedOut, seconds }), nextLabel, onNext }
export function mountExercise($el, q, opts = {}) {
  let body = '';
  if (q.type === 'choice') {
    body = `<div class="quiz-q">${esc(q.q)}</div><div class="options">${q.options
      .map((o, k) => `<button class="option" data-k="${k}" aria-pressed="false">${esc(o)}</button>`)
      .join('')}</div>`;
  } else if (q.type === 'input') {
    body = `<div class="quiz-q">${esc(q.q)}</div><input ${INPUT} class="inp" placeholder="Rašyk angliškai…">`;
  } else if (q.type === 'listen') {
    body = `<div class="quiz-q">🎧 ${esc(q.q || 'Paklausyk ir užrašyk angliškai')}</div>
      <div class="row" style="margin-bottom:12px"><button class="btn secondary play">🔊 Groti</button>
      <button class="btn secondary slow">🐢 Lėtai</button></div>
      <input ${INPUT} class="inp" placeholder="Ką išgirdai?">`;
  } else if (q.type === 'write') {
    body = `<div class="quiz-q">✍️ ${esc(q.q)}</div>
      <textarea class="inp write" rows="5" autocapitalize="sentences" spellcheck="false" placeholder="Rašyk angliškai…"></textarea>
      <div class="small muted wc">0 žodžių${q.minWords ? ` (reikia bent ${q.minWords})` : ''}</div>`;
  } else if (q.type === 'match') {
    body = `<div class="quiz-q">🧩 ${esc(q.q || 'Sujunk poras')}</div><div class="match">
      <div>${shuffle(q.pairs.map((p, k) => [p[0], k])).map(([t, k]) => `<button class="option" data-side="en" data-k="${k}">${esc(t)}</button>`).join('')}</div>
      <div>${shuffle(q.pairs.map((p, k) => [p[1], k])).map(([t, k]) => `<button class="option" data-side="lt" data-k="${k}">${esc(t)}</button>`).join('')}</div></div>`;
  } else {
    body = `<div class="quiz-q">${esc(q.q || 'Sudėliok sakinį')}${q.lt ? `: <span class="muted">„${esc(q.lt)}“</span>` : ''}</div>
      <div class="answer-line"></div><div class="bank">${shuffle(q.words.map((w, k) => [w, k]))
        .map(([w, k]) => `<button class="word" data-k="${k}">${esc(w)}</button>`)
        .join('')}</div>`;
  }
  const seconds = opts.seconds || 0;
  $el.innerHTML = `<div class="card exercise">${opts.head || ''}
    ${seconds ? `<div class="row" style="margin-bottom:6px"><span class="chip timer">⏱ ${seconds}</span><div class="progressbar grow"><span class="tbar" style="width:100%"></span></div></div>` : ''}
    ${body}<div style="margin-top:18px"><button class="btn block check" disabled>Tikrinti</button></div><div class="fb"></div></div>`;
  const $ = (s) => $el.querySelector(s);
  const $check = $('.check');
  let getAnswer;
  let finished = false;
  const started = Date.now();

  if (q.type === 'choice') {
    let sel = -1;
    $el.querySelectorAll('.option').forEach((b) => {
      b.onclick = () => {
        $el.querySelectorAll('.option').forEach((o) => o.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        sel = +b.dataset.k;
        $check.disabled = false;
      };
    });
    getAnswer = () => {
      $el.querySelectorAll('.option').forEach((o) => (o.disabled = true));
      $(`.option[data-k="${q.answer}"]`).classList.add('right');
      if (sel >= 0 && sel !== q.answer) $(`.option[data-k="${sel}"]`).classList.add('wrong');
      return { ok: sel === q.answer, given: sel >= 0 ? q.options[sel] : '', right: q.options[q.answer] };
    };
  } else if (q.type === 'input' || q.type === 'listen') {
    const inp = $('.inp');
    inp.oninput = () => ($check.disabled = !inp.value.trim());
    inp.onkeydown = (e) => e.key === 'Enter' && !$check.disabled && $check.click();
    let answers;
    if (q.type === 'listen') {
      $('.play').onclick = () => speak(q.en);
      $('.slow').onclick = () => speak(q.en, 0.6);
      setTimeout(() => speak(q.en), 300);
      answers = [q.en];
    } else {
      answers = Array.isArray(q.answer) ? q.answer : [q.answer];
    }
    getAnswer = () => {
      inp.disabled = true;
      return {
        ok: answers.some((a) => norm(a) === norm(inp.value)),
        given: inp.value.trim(),
        right: q.type === 'listen' && q.lt ? `${answers[0]} (${q.lt})` : answers[0],
      };
    };
  } else if (q.type === 'write') {
    const inp = $('.inp');
    const count = () => inp.value.trim().split(/\s+/).filter(Boolean).length;
    inp.oninput = () => {
      const n = count();
      $('.wc').textContent = `${n} žodž.${q.minWords ? ` (reikia bent ${q.minWords})` : ''}`;
      $check.disabled = n < Math.max(1, q.minWords || 1);
    };
    $check.textContent = 'Siųsti Emai';
    getAnswer = () => {
      inp.disabled = true;
      return { ok: null, given: inp.value.trim(), right: '' };
    };
  } else if (q.type === 'match') {
    let sel = null;
    let misses = 0;
    let left = q.pairs.length;
    $el.querySelectorAll('.match .option').forEach((b) => (b.onclick = () => {
      if (b.disabled) return;
      if (!sel || sel.dataset.side === b.dataset.side) {
        if (sel) sel.setAttribute('aria-pressed', 'false');
        sel = b;
        b.setAttribute('aria-pressed', 'true');
        if (b.dataset.side === 'en') speak(b.textContent);
        return;
      }
      const a = sel;
      sel = null;
      a.setAttribute('aria-pressed', 'false');
      if (a.dataset.k === b.dataset.k) {
        a.classList.add('right');
        b.classList.add('right');
        a.disabled = b.disabled = true;
        if (--left === 0) {
          $check.disabled = false;
          $check.click();
        }
      } else {
        misses++;
        a.classList.add('wrong');
        b.classList.add('wrong');
        setTimeout(() => (a.classList.remove('wrong'), b.classList.remove('wrong')), 450);
      }
    }));
    getAnswer = () => ({
      ok: left === 0 && misses <= 1,
      given: left ? `sujungta ${q.pairs.length - left}/${q.pairs.length}, klaidų ${misses}` : `klaidų: ${misses}`,
      right: q.pairs.map((p) => `${p[0]} = ${p[1]}`).join('; '),
    });
  } else {
    const picked = [];
    const $line = $('.answer-line');
    const redraw = () => {
      $line.innerHTML = picked.map((k, n) => `<button class="word" data-n="${n}">${esc(q.words[k])}</button>`).join('');
      $line.querySelectorAll('.word').forEach((b) => (b.onclick = () => {
        const k = picked.splice(+b.dataset.n, 1)[0];
        $(`.bank .word[data-k="${k}"]`).classList.remove('used');
        redraw();
      }));
      $check.disabled = picked.length !== q.words.length;
    };
    $el.querySelectorAll('.bank .word').forEach((b) => (b.onclick = () => {
      if (b.classList.contains('used')) return;
      b.classList.add('used');
      picked.push(+b.dataset.k);
      redraw();
    }));
    getAnswer = () => {
      const given = picked.map((k) => q.words[k]).join(' ');
      return { ok: norm(given) === norm(q.answer), given, right: q.answer };
    };
  }

  let timer = null;
  const finish = (timedOut) => {
    if (finished) return;
    finished = true;
    clearInterval(timer);
    const r = { ...getAnswer(), timedOut: !!timedOut, seconds: Math.round((Date.now() - started) / 1000) };
    if (q.type === 'write') {
      $('.fb').innerHTML = `<div class="feedback right"><h3>📨 Išsiųsta Emai</h3><p class="small">Ji perskaitys ir pataisys.</p></div>`;
      $check.remove();
      opts.onDone && opts.onDone(r);
      return;
    }
    if (timedOut) r.ok = false;
    sfx(r.ok ? 'correct' : 'wrong');
    $('.fb').innerHTML = `<div class="feedback ${r.ok ? 'right' : 'wrong'}">
      <h3>${r.ok ? '✅ Teisingai!' : timedOut ? '⏰ Laikas baigėsi' : '❌ Ne visai'}</h3>${r.ok ? '' : `<p>Teisingai: <b>${esc(r.right)}</b></p>`}
      ${q.explain ? `<p class="small">${rich(q.explain)}</p>` : ''}</div>`;
    if (q.type === 'input' || q.type === 'order') speak(q.type === 'order' ? q.answer : r.right);
    if (opts.onNext) {
      $check.textContent = opts.nextLabel || 'Toliau';
      $check.className = `btn block check ${r.ok ? "ok" : "bad"}`;
      $check.disabled = false;
      $check.onclick = opts.onNext;
    } else {
      $check.remove();
    }
    opts.onDone && opts.onDone(r);
  };
  $check.onclick = () => finish(false);

  if (seconds) {
    let left = seconds;
    timer = setInterval(() => {
      if (!document.body.contains($el)) return clearInterval(timer);
      left--;
      $('.timer').textContent = `⏱ ${Math.max(0, left)}`;
      $('.tbar').style.width = `${Math.max(0, (left / seconds) * 100)}%`;
      if (left <= 0) finish(true);
    }, 1000);
  }
  const first = $('.inp');
  if (first && q.type === 'input') first.focus({ preventScroll: true });
  return { finish };
}

// Paverčia AI pateiktą (give_exercise) užduotį į vidinį formatą. Grąžina { q } arba { error }.
export function exerciseFromTool(args, prepared) {
  const a = args || {};
  if (a.quiz_index != null && a.quiz_index !== '') {
    const q = prepared[Number(a.quiz_index) - 1];
    if (!q) return { error: `quiz_index must be 1..${prepared.length}` };
    return { q: { ...q } };
  }
  const type = a.type;
  const question = a.question || '';
  if (type === 'choice') {
    const options = (a.options || []).map(String).filter(Boolean);
    const answer = Number(a.correct_option);
    if (options.length < 2 || !(answer >= 0 && answer < options.length)) return { error: 'choice needs options[] and a valid 0-based correct_option' };
    return { q: { type, q: question, options, answer, explain: a.explanation_lt || '' } };
  }
  if (type === 'input') {
    const answers = (a.accepted_answers || []).map(String).filter((s) => norm(s));
    if (!question || !answers.length) return { error: 'input needs question and accepted_answers[]' };
    return { q: { type, q: question, answer: answers, explain: a.explanation_lt || '' } };
  }
  if (type === 'order' || type === 'listen') {
    const sentence = String(a.sentence || '').trim();
    if (!norm(sentence)) return { error: `${type} needs sentence` };
    if (type === 'listen') return { q: { type, q: question, en: sentence, lt: a.translation_lt || '' } };
    const words = sentence.replace(/[.,!?;:]+/g, ' ').split(/\s+/).filter(Boolean);
    if (words.length < 3) return { error: 'order sentence needs at least 3 words' };
    if (words[0] !== 'I' && !/^I'/.test(words[0])) words[0] = words[0][0].toLowerCase() + words[0].slice(1);
    return { q: { type, q: question, words, answer: sentence, lt: a.translation_lt || '', explain: a.explanation_lt || '' } };
  }
  if (type === 'write') {
    if (!question) return { error: 'write needs question (the writing task)' };
    const minWords = Math.max(0, Math.min(150, Math.round(Number(a.min_words) || 0)));
    return { q: { type, q: question, minWords } };
  }
  if (type === 'match') {
    const pairs = (a.pairs || [])
      .map((p) => String(p).split(/\s*=\s*/))
      .filter((p) => p.length === 2 && p[0] && p[1]);
    if (pairs.length < 3) return { error: 'match needs at least 3 pairs like "english = lietuviškai"' };
    return { q: { type, q: question, pairs: pairs.slice(0, 6) } };
  }
  return { error: 'type must be one of choice, input, order, listen, match, write' };
}

// Trumpas užduoties aprašas AI mokytojai (prompt'e).
export function describeExercise(q, n) {
  const t = `#${n} [${q.type}]`;
  if (q.type === 'choice') return `${t} ${q.q} | options: ${q.options.join(' / ')} | answer: ${q.options[q.answer]}`;
  if (q.type === 'input') return `${t} ${q.q} | answer: ${[].concat(q.answer)[0]}`;
  if (q.type === 'order') return `${t} build the sentence: ${q.answer}`;
  if (q.type === 'listen') return `${t} dictation: ${q.en}`;
  if (q.type === 'write') return `${t} writing task: ${q.q}`;
  if (q.type === 'match') return `${t} match words: ${q.pairs.map((p) => p[0]).join(', ')}`;
  return t;
}
