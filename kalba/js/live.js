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
  if (/live/.test(id)) r += 5;
  if (/native-audio/.test(id)) r += 4;
  if (/flash/.test(id)) r += 2;
  if (/preview/.test(id)) r -= 1;
  return r;
}

export class LiveSession extends EventTarget {
  constructor({ apiKey, model, systemInstruction, tools, voice }) {
    super();
    Object.assign(this, { apiKey, model, systemInstruction, tools, voice });
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
      const ws = new WebSocket(`${WS_URL}?key=${encodeURIComponent(this.apiKey)}`);
      this.ws = ws;

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
          contextWindowCompression: { slidingWindow: {} },
          sessionResumption: this.resumeHandle ? { handle: this.resumeHandle } : {},
        };
        if (this.tools && this.tools.length) setup.tools = [{ functionDeclarations: this.tools }];
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
          resolve();
          return;
        }
        this.handle(msg);
      };

      ws.onerror = () => {
        if (!ready) reject(new Error('Nepavyko prisijungti prie Gemini Live.'));
      };

      ws.onclose = (e) => {
        if (this.ws !== ws) return; // senas ryšys po persijungimo
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
    if (msg.sessionResumptionUpdate && msg.sessionResumptionUpdate.resumable && msg.sessionResumptionUpdate.newHandle) {
      this.resumeHandle = msg.sessionResumptionUpdate.newHandle;
    }
    if (msg.goAway) this.emit('go-away', msg.goAway);
  }

  send(obj) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(obj));
  }

  sendAudio(pcmBuffer) {
    this.send({ realtimeInput: { audio: { data: bytesToBase64(pcmBuffer), mimeType: 'audio/pcm;rate=16000' } } });
  }

  endAudio() {
    this.send({ realtimeInput: { audioStreamEnd: true } });
  }

  sendText(text) {
    this.send({ clientContent: { turns: [{ role: 'user', parts: [{ text }] }], turnComplete: true } });
  }

  sendToolResponse(functionResponses) {
    this.send({ toolResponse: { functionResponses } });
  }

  // Persijungia į naują ryšį tęsiant tą patį pokalbį (pvz., gavus „goAway“).
  async reconnect() {
    const old = this.ws;
    this.ws = null;
    try { old && old.close(); } catch (_) {}
    await this.connect();
  }

  close() {
    this.closedByUser = true;
    try { this.ws && this.ws.close(); } catch (_) {}
  }
}
