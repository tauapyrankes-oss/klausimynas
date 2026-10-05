// From kalba: node codex/design/capture.mjs (npm i --no-save playwright).
import { chromium } from '../../node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
const root=new URL('../../',import.meta.url).pathname,design=new URL('./',import.meta.url).pathname;
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.json':'application/json','.png':'image/png'};
const server=createServer(async(req,res)=>{const p=decodeURIComponent(new URL(req.url,'http://local').pathname);try{const body=await readFile(join(root,p.endsWith('/')?p+'index.html':p));res.writeHead(200,{'content-type':types[extname(p)]||'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end();}}).listen(0);
await new Promise(r=>server.on('listening',r));const base=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch(),ctx=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,reducedMotion:'reduce'}),page=await ctx.newPage();
const failures=[],results=[];page.on('pageerror',e=>failures.push(e.message));const screens=JSON.parse(await readFile(join(design,'screens.json'),'utf8'));
for(const theme of ['light','dark']){await mkdir(join(design,'png',theme),{recursive:true});for(const [name,title] of Object.entries(screens)){
 await page.goto(`${base}/codex/design/screens/${name}.html?theme=${theme}&motion=off`);await page.evaluate(()=>document.fonts.ready);await page.waitForFunction(()=>[...document.images].every(i=>i.complete));
 const layout=await page.evaluate(()=>({width:innerWidth,height:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth||[...document.querySelectorAll(".content,.settings-group,.island")].some(e=>e.scrollWidth>e.clientWidth+1),missing:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),shortButtons:[...document.querySelectorAll('button,a,input,select,textarea')].filter(e=>e.getBoundingClientRect().height>0&&e.getBoundingClientRect().height<44).map(e=>({text:e.textContent.trim().slice(0,30),height:e.getBoundingClientRect().height})),content:document.querySelector('.content')?{scrollHeight:document.querySelector('.content').scrollHeight,clientHeight:document.querySelector('.content').clientHeight}:null}));
 if(layout.overflow||layout.missing.length||layout.shortButtons.length)failures.push(`${name}/${theme}: ${JSON.stringify(layout)}`);results.push({name,title,theme,...layout});await page.screenshot({path:join(design,'png',theme,`${name}.png`)});
 }
 await page.setViewportSize({width:1280,height:1180});await page.goto(`${base}/codex/design/system.html?theme=${theme}&motion=off`);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:join(design,'png',theme,'system.png'),fullPage:true});await page.setViewportSize({width:390,height:844});
}
await page.goto(`${base}/codex/design/screens/lesson-listening.html`);await page.locator('[data-text-toggle]').click();if(!await page.locator('#txt').isVisible())failures.push('Composer did not open');await page.locator('#txt').fill('Hello, Ema.');
await page.goto(`${base}/codex/design/screens/lesson-exercise.html`);await page.locator('.option').last().click();if(await page.locator('.option').last().getAttribute('aria-pressed')!=='true')failures.push('Selection failed');
await page.goto(`${base}/codex/design/screens/locked.html`);await page.locator('[data-close]').click();if(await page.locator('.modal-back').count())failures.push('Modal did not close');
await page.emulateMedia({reducedMotion:'reduce'});await page.goto(`${base}/codex/design/screens/lesson-listening.html`);if(await page.locator('.waveform i').first().evaluate(e=>getComputedStyle(e).animationName)!=='none')failures.push('Reduced motion failed');
for(const name of Object.keys(screens)){await page.setViewportSize({width:320,height:700});await page.goto(`${base}/codex/design/screens/${name}.html`);if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))failures.push(`320px overflow: ${name}`);}
await writeFile(join(design,'qa.json'),JSON.stringify({viewport:'390x844',themes:2,screens:Object.keys(screens).length,failures,results},null,2)+'\n');await browser.close();server.close();
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}else console.log(`OK: ${Object.keys(screens).length} screens × 2 themes; no overflow; images load; interactions and reduced motion pass.`);
