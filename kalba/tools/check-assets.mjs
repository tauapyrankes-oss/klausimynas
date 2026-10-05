import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';
import { createHash } from 'node:crypto';
const root=new URL('..',import.meta.url).pathname;
const manifest=JSON.parse(await readFile(join(root,'assets/ema/manifest.json'),'utf8'));
const states=['idle','wave','listening','talking','thinking','happy','encourage'];
for(const state of states){const file=manifest.states[state];const path=join(root,'assets/ema',file);const svg=await readFile(path,'utf8');if((await stat(path)).size>30000)throw Error('Oversized '+state);if(!svg.includes('prefers-reduced-motion')||!svg.includes('viewBox="0 0 512 512"')||/<script|https?:\/\//.test(svg.replace('http://www.w3.org/2000/svg','')))throw Error('Invalid standalone asset '+state);}
for(const name of ['correct','wrong','levelup'])if((await stat(join(root,'assets/sfx',name+'.mp3'))).size>20000)throw Error('Oversized sound');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.png':'image/png','.webmanifest':'application/manifest+json','.mp3':'audio/mpeg'};
const server=createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const file=join(root,path.endsWith('/')?path+'index.html':path);let body;try{body=await readFile(file);}catch{res.writeHead(404);res.end();return;}res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream'});res.end(body);}).listen(0,'127.0.0.1');
await new Promise(r=>server.once('listening',r));
const base='http://127.0.0.1:'+server.address().port+'/';
const browser=await chromium.launch();
try{
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await page.goto(base);await page.waitForSelector('.sprint-cta .ema img');
 let image=page.locator('.sprint-cta .ema img');await image.evaluate(async img=>{await img.decode();});
 if(!await image.evaluate(img=>img.naturalWidth>0))throw Error('Home Ema not rendered');

 await page.goto(base+'#/talk');await page.waitForSelector('.ema[data-ema="wave"] img');
 image=page.locator('.ema[data-ema="wave"] img');await image.evaluate(async img=>{await img.decode();});
 if(!await image.evaluate(img=>img.naturalWidth>0))throw Error('Wave Ema not rendered');

 const gallery=await browser.newPage({viewport:{width:1260,height:930}});
 await gallery.goto(base+'codex/preview.html');await gallery.waitForSelector('.cell img');
 await gallery.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>img.decode()));});

 const moving=gallery.locator('#light .cell img').filter({visible:true});
 const hash=b=>createHash('sha256').update(b).digest('hex');
 const first=[];for(let i=0;i<7;i++)first.push(hash(await moving.nth(i).screenshot()));
 await gallery.waitForTimeout(640);
 let changed=0;for(let i=0;i<7;i++){const second=hash(await moving.nth(i).screenshot());if(first[i]!==second)changed++;}
 if(changed<4)throw Error('Too few visibly animated poses: '+changed);
 const reducedBrowser=await chromium.launch({args:['--force-prefers-reduced-motion']});
 const reducedPage=await reducedBrowser.newPage({viewport:{width:1260,height:930},reducedMotion:'reduce'});
 await reducedPage.goto(base+'codex/preview.html');
 await reducedPage.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(img=>img.decode()));});
 const reducedA=hash(await reducedPage.screenshot());await reducedPage.waitForTimeout(1100);const reducedB=hash(await reducedPage.screenshot());
 if(!await reducedPage.evaluate(()=>matchMedia('(prefers-reduced-motion:reduce)').matches)||reducedA!==reducedB)throw Error('Reduced motion did not freeze all states');
 await reducedBrowser.close();
 console.log(JSON.stringify({states:7,allFilesWithinLimits:true,homeAndTalkAutoLoad:true,animatedPosesObserved:changed,reducedMotionStable:true}));
}finally{await browser.close();server.close();}
