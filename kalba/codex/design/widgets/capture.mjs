// Design export, not a native test. From kalba: node codex/design/widgets/capture.mjs.
import { chromium } from '../../../node_modules/playwright/index.mjs';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
const root=new URL('../../../',import.meta.url).pathname,dir=new URL('./',import.meta.url).pathname;
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png'};
const server=createServer(async(req,res)=>{const p=decodeURIComponent(new URL(req.url,'http://local').pathname);try{const data=await readFile(join(root,p.endsWith('/')?p+'index.html':p));res.writeHead(200,{'content-type':types[extname(p)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end();}}).listen(0);
await new Promise(r=>server.on('listening',r));const base=`http://127.0.0.1:${server.address().port}/codex/design/widgets/`;
const browser=await chromium.launch(),ctx=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),page=await ctx.newPage();
const errors=[],results=[];page.on('pageerror',e=>errors.push(e.message));await mkdir(join(dir,'assets'),{recursive:true});await mkdir(join(dir,'png'),{recursive:true});
// Rasterize the existing Ema SVG in a browser, with every animation disabled by OS media preference.
for(const state of ['idle','wave','listening','talking','thinking','happy','encourage']){
 await page.setContent(`<style>body{margin:0;background:transparent}img{display:block;width:256px;height:256px}</style><img src="${base}../../../assets/ema/${state}.svg" alt="Ema">`);
 await page.waitForFunction(()=>document.images[0]?.complete&&document.images[0].naturalWidth>0);
 await page.locator('img').screenshot({path:join(dir,'assets',`ema-${state}.png`),omitBackground:true});
}
await page.setContent(`<style>body{margin:0;background:transparent}img{display:block;width:128px;height:128px}</style><img src="${base}assets/kalbek-mark.svg" alt="Kalbėk">`);
await page.waitForFunction(()=>document.images[0]?.complete&&document.images[0].naturalWidth>0);
await page.locator('img').screenshot({path:join(dir,'assets','kalbek-mark.png'),omitBackground:true});
await page.setViewportSize({width:1250,height:1700});await page.goto(base+'index.html');await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
const components=JSON.parse(await readFile(join(dir,'components.json'),'utf8'));
for(const [name,title] of Object.entries(components)){
 const target=page.locator(`#${name} .component-stage > *`).first();
 const shape=await target.evaluate(el=>({width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height,overflow:el.scrollWidth>el.clientWidth+1||el.scrollHeight>el.clientHeight+1}));
 if(shape.overflow)errors.push(`${name} overflows its native mock dimensions`);
 results.push({name,title,...shape});await target.screenshot({path:join(dir,'png',`${name}.png`)});
}
await page.screenshot({path:join(dir,'png','overview.png'),fullPage:true});
for(const name of ['home-context','lock-context']){await page.setViewportSize({width:390,height:844});await page.goto(base+name+'.html');await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))errors.push(`${name} horizontal overflow`);await page.screenshot({path:join(dir,'png',name+'.png')});}
// Motion timing + pause / Reduce Motion controls.
await page.goto(base+'motion.html');await page.locator('[data-play]').click();await page.waitForFunction(()=>document.documentElement.dataset.demoPhase==='speaking');
await page.waitForFunction(()=>document.documentElement.dataset.demoPhase==='listening',{timeout:5000});
await page.locator('[data-stop]').click();const stopped=await page.locator('.phase-title').textContent();await page.waitForTimeout(3500);if(await page.locator('.phase-title').textContent()!==stopped)errors.push('Pause did not stop the demonstration');
await page.locator('[data-reduce]').click();await page.locator('[data-play]').click();const anim=await page.locator('.phase-title').evaluate(e=>getComputedStyle(e).animationName);if(anim!=='none')errors.push('Reduced motion control did not disable transition');await page.locator('[data-stop]').click();
await ctx.close();
const videoCtx=await browser.newContext({viewport:{width:390,height:844},recordVideo:{dir:join(dir,'recording'),size:{width:390,height:844}}}),v=await videoCtx.newPage();await v.goto(base+'motion.html');await v.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));await v.locator('[data-play]').click();await v.waitForFunction(()=>document.documentElement.dataset.demoPhase==='completed',{timeout:14000});await v.waitForTimeout(1800);await v.locator('[data-stop]').click();const video=v.video();await videoCtx.close();await video.saveAs(join(dir,'motion.webm'));
await writeFile(join(dir,'qa.json'),JSON.stringify({nativeCompiled:false,lightDirection:true,source:'HTML mockups',errors,results,reducedMotionPassed:anim==='none',pausePassed:stopped==='Tavo eilė – kalbėk'},null,2)+'\n');
await browser.close();server.close();if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`OK: ${results.length} component PNGs + 2 iPhone contexts; motion, stop and reduced motion verified. Native implementation pending Claude.`);
