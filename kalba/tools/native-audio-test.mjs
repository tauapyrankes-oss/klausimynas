// Verifies bridge selection, PCM byte integrity, playback state and late-capture cleanup.
import assert from 'node:assert/strict';
const listeners=new Map(),calls=[];
const bridge={
 addListener(name,fn){listeners.set(name,fn);return {remove:async()=>{listeners.delete(name);}};},
 async prepare(){calls.push('prepare');return {sampleRate:48000,running:true};},
 async startCapture(){calls.push('startCapture');return {sampleRate:48000,running:true,input:'Built-in mic',echoCancellation:true};},
 async stopCapture(){calls.push('stopCapture');},async play(data){calls.push(['play',data]);},
 async setRate(data){calls.push(['rate',data]);},async clear(){calls.push('clear');},async mute(data){calls.push(['mute',data]);},async close(){calls.push('close');},
};
globalThis.window={Capacitor:{isNativePlatform:()=>true,getPlatform:()=> 'ios',Plugins:{AudioBridge:bridge}}};
globalThis.AudioContext=class{constructor(){throw Error('Native iOS must not create a Web Audio context');}};
const {MicRecorder,PcmPlayer,bytesToBase64}=await import('../js/audio.js');
const player=new PcmPlayer();player.ensure();await player.ready;assert.equal(player.ctx.sampleRate,48000);assert.equal(player.ctx.state,'running');
let chunks=[];let level=0;const mic=new MicRecorder({onChunk:b=>chunks.push(new Int16Array(b)),onLevel:v=>level=v});await mic.start(player.ctx);
const pcm=new Int16Array([-32768,0,16384,32767]);const encoded=bytesToBase64(pcm.buffer);
listeners.get('audioChunk')({pcm:encoded,level:0.3});assert.deepEqual([...chunks[0]],[...pcm]);assert.equal(level,0.3);assert.match(mic.stream.getAudioTracks()[0].label,/native iOS/);
player.play(encoded);await new Promise(r=>setImmediate(r));assert.equal(calls.find(c=>Array.isArray(c)&&c[0]==='play')[1].pcm,encoded);
player.setRate(0.85);await new Promise(r=>setImmediate(r));assert.equal(calls.filter(c=>Array.isArray(c)&&c[0]==='rate').at(-1)[1].rate,0.85);
player.setMuted(true);player.setMuted(false);await new Promise(r=>setImmediate(r));assert.deepEqual(calls.filter(c=>Array.isArray(c)&&c[0]==='mute').map(c=>c[1].muted),[true,false]);
listeners.get('playback')({buffered:0.4});assert.equal(player.playing,true);player.stop();assert.equal(player.buffered,0);
mic.stop();assert.equal(listeners.has('audioChunk'),false);player.close();await new Promise(r=>setImmediate(r));assert.equal(listeners.has('playback'),false);assert(calls.includes('close'));
const before=calls.length;player.play(encoded);await new Promise(r=>setImmediate(r));assert.equal(calls.length,before,'Closed player must not reopen for late packets');
bridge.startCapture=async()=>{throw {code:'NotAllowedError',message:'denied'};};const denied=new MicRecorder({onChunk:()=>{}});await assert.rejects(()=>denied.start({}),e=>e.name==='NotAllowedError');assert.equal(listeners.has('audioChunk'),false);
let resolveStart;bridge.startCapture=()=>new Promise(r=>resolveStart=r);const delayed=new MicRecorder({onChunk:()=>{throw Error('late capture');}});const pending=delayed.start({});await new Promise(r=>setImmediate(r));delayed.stop();resolveStart({sampleRate:48000,running:true,input:'mic'});await pending;assert.equal(delayed.stream,null);assert.equal(listeners.has('audioChunk'),false);
console.log('OK: native bridge avoids Web Audio; PCM preserved; capture/playback and permission/cancellation cleanup pass.');
