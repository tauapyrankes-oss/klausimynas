import assert from 'node:assert/strict';
import { LiveSession } from '../js/live.js';
class Socket {
 static OPEN=1;readyState=1;sent=[];
 constructor(){queueMicrotask(()=>this.onopen?.());}
 send(raw){const m=JSON.parse(raw);this.sent.push(m);if(m.setup)queueMicrotask(()=>this.onmessage?.({data:'{"setupComplete":{}}'}));}
 close(){this.readyState=3;this.onclose?.({code:1000,reason:''});}
}
globalThis.WebSocket=Socket;
for(const micMode of ['auto','tap']) {
 const s=new LiveSession({apiKey:'test',model:'gemini-3.8-live',micMode,systemInstruction:'test'});const connecting=s.connect();s.sendAudio(new ArrayBuffer(1600));await connecting;
 const config=s.ws.sent[0].setup.realtimeInputConfig;
 assert.equal(config.automaticActivityDetection.disabled,micMode==='tap');
 if(micMode==='auto')assert.equal(config.automaticActivityDetection.silenceDurationMs,1400);
 s.endAudio();assert.equal(s.ws.sent.length,1,'No phantom turn when a form opens before anyone speaks');
 s.sendAudio(new ArrayBuffer(1600));s.sendAudio(new ArrayBuffer(1600));s.endAudio();s.endAudio();
 const signals=s.ws.sent.map(m=>m.realtimeInput).filter(Boolean);
 if(micMode==='tap'){assert.equal(signals.filter(m=>m.activityStart).length,1);assert.equal(signals.filter(m=>m.activityEnd).length,1);assert(!signals.some(m=>m.audioStreamEnd));}
 else assert.equal(signals.filter(m=>m.audioStreamEnd).length,1);
 let cancelled;s.addEventListener('tool-cancelled',e=>cancelled=e.detail);s.handle({toolCallCancellation:{ids:['write-1']}});assert.deepEqual(cancelled,['write-1']);s.close();
}
const data=new Map([['kalba.progress.v1',JSON.stringify({lessons:{one:{passed:true,bestScore:88},two:{passed:true,bestScore:91}},xp:142,streak:{count:2,last:'2026-10-06'},mistakes:[]})]]);
globalThis.localStorage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};
const store=await import('../js/store.js');assert.equal(store.progress.xp,142);assert(store.progress.lessons.two.passed);
store.sessions.three={turns:2,textDraft:'My draft'};store.saveSessions();store.recordResult('one',{passed:false,score:40});
assert(store.progress.lessons.one.passed,'A failed review must not erase a completed lesson');assert(store.progress.lessons.two.passed);assert.equal(store.progress.lessons.two.bestScore,91);
assert.equal(JSON.parse(data.get('kalba.sessions.v1')).three.textDraft,'My draft');
console.log('OK: manual turn boundaries, patient automatic pauses, tool cancellation and existing completed lessons preserved.');
