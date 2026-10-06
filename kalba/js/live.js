// Plonas Gemini Live API (BidiGenerateContent per WebSocket) klientas.
import { bytesToBase64 } from './audio.js';

const API = 'https://generativelanguage.googleapis.com/v1beta';
const WS_URL =
  'wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent';

// Randa visus Live (bidiGenerateContent) modelius šiam raktui; naujausi ir „3.8“ – pirmi.
export async function listLiveModels(apiKey) {
  const res = await fetch(`${API}/models?pageSize=1000&key=${encodeURIComponent(apiKey)}`);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body.error && body.error.message) || `HTTP ${res.status}`);
  }
  const data = await res.json();
  const live = (data.models || [])
    .filter((m) => (m.supportedGenerationMethods || []).includes('bidiGenerateContent'))
    .map((m) => ({ id: m.name.replace(/^models\//, ''), label: m.displayName || m.name }));
  return live.sort((a, b) => modelRank(b.id) - modelRank(a.id));
}

function modelRank(id) {
  const v = id.match(/gemini-(\d+(?:\.\d+)?)/);
  let r = v ? parseFloat(v[1]) * 100 : 0;
  if (/3\.8/.test(id)) r += 10000;
  if (id === 'gemini-3.8-live') r += 1000;
  if (/extended-thinking/.test(id)) r -= 500; // lėtesnis – tik jei pasirinktas ranka
  if (/translate|transcribe/.test(id)) r -= 20000; // ne pokalbiui
  if (/live/.test(id)) r += 5;
  if (/native-audio/.test(id)) r += 4;
  if (/flash/.test(id)) r += 2;
  if (/preview/.test(id)) r -= 1;
  return r;
}

export class LiveSession extends EventTarget {
  constructor({ apiKey, model, systemInstruction, tools, voice, micMode = 'auto' }) {
    super();
    Object.assign(this, { apiKey, model, systemInstruction, tools, voice, micMode });
    // 3.8 Live įrankius pagal nutylėjimą kviečia neblokuojančiai; mūsų pamokai reikia, kad Ema palauktų
    // atsakymo (BLOCKING). „Extended thinking“ modelis palaiko tik NON_BLOCKING ir neturi scheduling.
    this.nonBlocking = /extended-thinking/.test(model);
    this.blockingField = !this.nonBlocking && /gemini-3\.(8|9)|gemini-[4-9]/.test(model);
    this.ws = null;
    this.resumeHandle = null;
    this.closedByUser = false;
  }

  emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }));
  }

  connect() {
    return new Promise((resolve, reject) => {
      let ready = false;
      this.ready = false;
      const ws = new WebSocket(`${WS_URL}?key=${encodeURIComponent(this.apiKey)}`);
      this.ws = ws;
      const timeout = setTimeout(() => { if (!ready) { reject(new Error('Prisijungimas užtruko. Pabandyk dar kartą.')); ws.close(); } }, 15000);

      ws.onopen = () => {
        const setup = {
          model: `models/${this.model}`,
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: this.voice || 'Kore' } } },
          },
          systemInstruction: { parts: [{ text: this.systemInstruction }] },
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          realtimeInputConfig: {
            automaticActivityDetection: this.micMode === 'tap' ? { disabled: true } : {
              disabled: false, startOfSpeechSensitivity: 'START_SENSITIVITY_LOW',
              endOfSpeechSensitivity: 'END_SENSITIVITY_LOW', prefixPaddingMs: 300, silenceDurationMs: 1400,
            },
            activityHandling: this.micMode === 'headphones' ? 'START_OF_ACTIVITY_INTERRUPTS' : 'NO_INTERRUPTION',
          },
          contextWindowCompression: { slidingWindow: {} },
          sessionResumption: this.resumeHandle ? { handle: this.resumeHandle } : {},
        };
        if (this.tools && this.tools.length) {
          const decls = this.blockingField ? this.tools.map((t) => ({ ...t, behavior: 'BLOCKING' })) : this.tools;
          setup.tools = [{ functionDeclarations: decls }];
        }
        ws.send(JSON.stringify({ setup }));
      };

      ws.onmessage = async (e) => {
        const raw = typeof e.data === 'string' ? e.data : await e.data.text();
        let msg;
        try {
          msg = JSON.parse(raw);
        } catch (_) {
          return;
        }
        if (msg.setupComplete) {
          ready = true;
          this.ready = true;
          clearTimeout(timeout);
          resolve();
          return;
        }
        this.handle(msg);
      };

      ws.onerror = () => {
        clearTimeout(timeout);
        if (!ready) reject(new Error('Nepavyko prisijungti prie Gemini Live.'));
      };

      ws.onclose = (e) => {
        clearTimeout(timeout);
        if (this.ws !== ws) return; // senas ryšys po persijungimo
        this.ready = false;
        const reason = e.reason || `kodas ${e.code}`;
        if (!ready) reject(new Error(reason));
        else this.emit('close', { code: e.code, reason, byUser: this.closedByUser });
      };
    });
  }

  handle(msg) {
    const sc = msg.serverContent;
    if (sc) {
      // 3.x modeliai viename įvykyje gali siųsti kelias dalis – apdorojame visas.
      const parts = (sc.modelTurn && sc.modelTurn.parts) || [];
      for (const p of parts) {
        if (p.thought) continue;
        if (p.inlineData && /^audio\//.test(p.inlineData.mimeType || 'audio/')) this.emit('audio', p.inlineData.data);
      }
      if (sc.inputTranscription && sc.inputTranscription.text) this.emit('input-text', sc.inputTranscription.text);
      if (sc.outputTranscription && sc.outputTranscription.text) this.emit('output-text', sc.outputTranscription.text);
      if (sc.interrupted) this.emit('interrupted');
      if (sc.turnComplete) this.emit('turn-complete');
    }
    if (msg.toolCall && msg.toolCall.functionCalls) {
      for (const fc of msg.toolCall.functionCalls) this.emit('tool-call', fc);
    }
    if (msg.toolCallCancellation?.ids) this.emit('tool-cancelled', msg.toolCallCancellation.ids);
    if (msg.sessionResumptionUpdate && msg.sessionResumptionUpdate.resumable && msg.sessionResumptionUpdate.newHandle) {
      this.resumeHandle = msg.sessionResumptionUpdate.newHandle;
    }
    if (msg.goAway) this.emit('go-away', msg.goAway);
  }

  send(obj) {
    if (this.ready && this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(obj));
  }

  sendAudio(pcmBuffer) {
    if (!this.ready || !this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    if (this.micMode === 'tap' && !this.audioActive) this.send({ realtimeInput: { activityStart: {} } });
    this.audioActive = true;
    this.send({ realtimeInput: { audio: { data: bytesToBase64(pcmBuffer), mimeType: 'audio/pcm;rate=16000' } } });
  }

  endAudio() {
    if (!this.audioActive) return;
    this.send({ realtimeInput: this.micMode === 'tap' ? { activityEnd: {} } : { audioStreamEnd: true } });
    this.audioActive = false;
  }

  // realtimeInput.text – rekomenduojamas būdas; clientContent su turnComplete visada nutrauktų Emą.
  sendText(text) {
    this.send({ realtimeInput: { text } });
  }

  // Blocking calls resume only when their actual result arrives. Extended Thinking
  // uses asynchronous calls and does not support function-response scheduling.
  sendToolResponse(functionResponses) {
    this.send({ toolResponse: { functionResponses } });
  }

  // Persijungia į naują ryšį tęsiant tą patį pokalbį (pvz., gavus „goAway“).
  async reconnect() {
    this.audioActive = false;
    this.ready = false;
    const old = this.ws;
    this.ws = null;
    try { old && old.close(); } catch (_) {}
    await this.connect();
  }

  close() {
    this.closedByUser = true;
    this.ready = false;
    try { this.ws && this.ws.close(); } catch (_) {}
  }
}

// Nepriklausomas vertintojas: stiprus tekstinis modelis (ne Live) peržiūri visą pamokos pokalbį ir įvertina atskirai.
// Pamoka užskaitoma tik tada, kai sutinka ir Ema (Live), ir vertintojas.
export async function judgeLesson({ apiKey, model = 'gemini-3.8-flash', lesson, level, transcript, exercises, liveVerdict, minTurns }) {
  const s = lesson.speaking || {};
  const prompt = `You are a strict but fair CEFR examiner for English. A Lithuanian adult learner (level ${level.name}) just finished a voice lesson with an AI tutor.
Lesson: ${lesson.titleEn}. Target: ${(lesson.grammar || {}).title || ''}.
Success criteria (ALL must be met in the learner's OWN spontaneous sentences; repeating after the tutor does not count):
${(s.successCriteria || []).map((c, i) => `${i + 1}. ${c}`).join('\n')}
Minimum learner turns: ${minTurns}.

Transcript (Learner lines are what the learner said; "[app]" lines are exercise results):
${transcript}

On-screen exercises: ${exercises.length} done, ${exercises.filter((e) => e.ok).length} correct.
The tutor's own verdict: passed=${liveVerdict.passed}, score=${liveVerdict.score}, attempts=${liveVerdict.attempts}, correct=${liveVerdict.correct}.

Judge independently from the transcript. Count every attempt by the learner to use the target language and how many were correct (or self-corrected after one hint). passed=true only if every criterion is met and accuracy is at least 75%. Be honest – a lenient pass hurts the learner. Lithuanian text fields must be in natural Lithuanian.`;
  const schema = {
    type: 'OBJECT',
    properties: {
      passed: { type: 'BOOLEAN' },
      score: { type: 'INTEGER' },
      target_attempts: { type: 'INTEGER' },
      target_correct: { type: 'INTEGER' },
      criteria: { type: 'ARRAY', items: { type: 'OBJECT', properties: { criterion: { type: 'STRING' }, met: { type: 'BOOLEAN' }, evidence: { type: 'STRING' } }, required: ['criterion', 'met', 'evidence'] } },
      mistakes: { type: 'ARRAY', items: { type: 'OBJECT', properties: { wrong: { type: 'STRING' }, correct: { type: 'STRING' }, note_lt: { type: 'STRING' } }, required: ['wrong', 'correct'] } },
      summary_lt: { type: 'STRING' },
      advice_lt: { type: 'STRING' },
    },
    required: ['passed', 'score', 'target_attempts', 'target_correct', 'criteria', 'summary_lt'],
  };
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 45000);
  try {
    const res = await fetch(`${API}/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: ctrl.signal,
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json', responseSchema: schema, temperature: 0.2 },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const text = (data.candidates?.[0]?.content?.parts || []).filter((p) => p.text && !p.thought).map((p) => p.text).join('');
    const v = JSON.parse(text);
    if (typeof v.passed !== 'boolean' || !Number.isFinite(v.score) ||
        !Number.isFinite(v.target_attempts) || !Number.isFinite(v.target_correct) ||
        !Array.isArray(v.criteria) || v.criteria.length < (s.successCriteria || []).length) {
      throw new Error('Vertintojo atsakymas nepilnas');
    }
    if (v.passed && (v.score < 60 || v.target_attempts < 6 || v.target_correct > v.target_attempts ||
        v.target_correct / v.target_attempts < 0.75 || v.criteria.some(c => c.met !== true || !String(c.evidence || '').trim()))) v.passed = false;
    v.model = model;
    return v;
  } finally {
    clearTimeout(t);
  }
}
