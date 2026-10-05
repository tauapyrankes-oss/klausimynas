import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname,join } from 'node:path';
import assert from 'node:assert/strict';
const root=new URL('..',import.meta.url).pathname;
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.png':'image/png'};
const server=createServer(async(req,res)=>{const p=decodeURIComponent(new URL(req.url,'http://local').pathname);try{const b=await readFile(join(root,p.endsWith('/')?p+'index.html':p));res.writeHead(200,{'content-type':types[extname(p.endsWith('/')?p+'index.html':p)]||'application/octet-stream'});res.end(b);}catch{res.writeHead(404);res.end();}}).listen(0);
await new Promise(r=>server.on('listening',r));const base=`http://127.0.0.1:${server.address().port}`;
const b=await chromium.launch({args:['--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream']});
for(const [width,height] of [[390,844],[320,700]]){
 const ctx=await b.newContext({viewport:{width,height},permissions:['microphone']});
 await ctx.addInitScript(()=>localStorage.setItem('kalba.settings.v1',JSON.stringify({apiKey:'test-key',model:'gemini-3.8-live'})));
 await ctx.routeWebSocket(/generativelanguage\.googleapis\.com/,ws=>ws.onMessage(raw=>{
  const m=JSON.parse(raw);if(m.setup){ws.send(JSON.stringify({setupComplete:{}}));return;}
  if(!m.realtimeInput?.text)return;
  const text=m.realtimeInput.text==='lots'?'This is a long explanation.\n'.repeat(35):m.realtimeInput.text==='next'?'The next sentence stays in the conversation.':'Hello! Please introduce yourself.';
  ws.send(JSON.stringify({serverContent:{outputTranscription:{text},turnComplete:true}}));
 }));
 const p=await ctx.newPage();await p.goto(base);await p.waitForSelector('.node');const id=await p.locator('.node').first().getAttribute('data-id');
 await p.goto(`${base}/#/lesson/${id}`);await p.click('#start');await p.waitForSelector('.bubble.tutor');
 await p.waitForTimeout(200);
 const layout=await p.evaluate(()=>({scrollY,client:document.querySelector('#tr').clientHeight,tr:document.querySelector('#tr').getBoundingClientRect().toJSON(),controls:document.querySelector('#controls').getBoundingClientRect().toJSON(),bubble:document.querySelector('.bubble.tutor').getBoundingClientRect().toJSON(),h:innerHeight}));
 assert(layout.scrollY<=1,`Document was scrolled: ${width}`);assert(layout.client>=100,`Transcript has no readable space: ${width}/${layout.client}`);assert(layout.bubble.top>=layout.tr.top-1&&layout.bubble.bottom<=layout.tr.bottom+1,`Short reply hidden: ${width}`);assert(layout.controls.bottom<=height,`Controls outside viewport: ${width}`);
 await p.click('#speaker');assert.equal(await p.locator('#speaker').getAttribute('aria-pressed'),'true');await p.click('#mic');assert.equal(await p.locator('#speaker').getAttribute('aria-pressed'),'true','Mic toggle must preserve speaker mute');await p.click('#speaker');assert.equal(await p.locator('#speaker').getAttribute('aria-pressed'),'false');
 await p.click('#texttoggle');await p.fill('#txt','lots');await p.click('#send');await p.waitForFunction(()=>document.querySelector('#tr').scrollHeight>document.querySelector('#tr').clientHeight+150);
 await p.waitForTimeout(150);assert.equal(await p.evaluate(()=>scrollY),0,'Long reply must not scroll the page');
 await p.locator('#tr').evaluate(e=>{e.scrollTop=0;});await p.waitForTimeout(100);
 await p.fill('#txt','next');await p.click('#send');await p.waitForFunction(()=>document.querySelector('#tr').textContent.includes('The next sentence'));
 await p.waitForTimeout(150);assert.equal(await p.locator('#tr').evaluate(e=>e.scrollTop),0,'New reply yanked a reader away from older content');
 await p.setViewportSize({width,height:470});await p.fill('#txt','Writing while keyboard is open');await p.waitForTimeout(100);
 assert(await p.locator('#tr').evaluate(e=>e.clientHeight>=100),'Keyboard leaves no transcript space');assert(await p.locator('#send').isVisible(),'Send hidden with keyboard');
 await ctx.close();
}
await b.close();server.close();console.log('OK: replies remain visible; no document jumps; reading history respected; keyboard/send tested at 390 and 320 px.');
