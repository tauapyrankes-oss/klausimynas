// UI demonstration only. ActivityKit must update on true session phase changes.
const root=document.documentElement;
let timers=[];
const states=[
 {phase:'speaking',title:'Ema kalba',detail:'Klausyk. Neskubėk atsakyti.',ema:'talking',symbol:'volume'},
 {phase:'listening',title:'Tavo eilė – kalbėk',detail:'Grįžk į pamoką ir atsakyk.',ema:'listening',symbol:'mic'},
 {phase:'exercise',title:'Užduotis ekrane',detail:'Atidaryk pamoką ir atlik užduotį.',ema:'encourage',symbol:'pen'},
 {phase:'completed',title:'Pamoka išmokta',detail:'Ema patvirtino tavo pažangą.',ema:'happy',symbol:'check'}
];
const paths={volume:'<path d="M3 9h4l5-4v14l-5-4H3ZM16 8a6 6 0 0 1 0 8"/>',mic:'<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',pen:'<path d="m15 3 6 6-11 11-7 1 1-7ZM12 6l6 6"/>',check:'<path d="m5 12 4 4L19 6"/>'};
const svg=n=>`<svg class="wi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[n]}</svg>`;
function setPhase(index){
 const state=states[index];
 document.querySelectorAll('.live-card').forEach(card=>{
  card.dataset.phase=state.phase;card.querySelector('.phase-title').textContent=state.title;card.querySelector('.phase-detail').textContent=state.detail;
  card.querySelector('.widget-ema').src=`assets/ema-${state.ema}.png`;
  card.querySelector('.phase-symbol').innerHTML=svg(state.symbol)+'<b>'+ (index===3?'8 / 8 replikų':'3 / 8 replikų')+'</b>';
 });
 document.querySelectorAll('.phase-glyph').forEach(e=>e.innerHTML=svg(state.symbol));
 document.querySelectorAll('.compact-trailing').forEach(e=>e.textContent=index===3?'✓':'3/8');
 document.querySelectorAll('.live-card,.island-compact,.widget-medium').forEach(e=>{e.classList.remove('is-changing');void e.offsetWidth;e.classList.add('is-changing');});
 const w=document.querySelector('.motion-widget .widget-medium');
 if(w){w.querySelector('.widget-ema').src=`assets/ema-${index===3?'happy':'encourage'}.png`;w.querySelector('.widget-kicker').textContent=index===3?'Šiandien jau mokeisi':'Kita pamoka · A1+';w.querySelector('h2').textContent=index===3?'Puikiai padirbėjai!':'Veiksmažodis „to be“ ir įvardžiai';}
 root.dataset.demoPhase=state.phase;
}
function stop(){timers.forEach(clearTimeout);timers=[];}
function play(){stop();setPhase(0);states.slice(1).forEach((s,i)=>timers.push(setTimeout(()=>setPhase(i+1),(i+1)*3000)));}
document.querySelectorAll('[data-play]').forEach(b=>b.onclick=play);
document.querySelectorAll('[data-stop]').forEach(b=>b.onclick=stop);
document.querySelectorAll('[data-reduce]').forEach(b=>b.onclick=()=>{root.dataset.reduce=root.dataset.reduce==='true'?'false':'true';b.textContent=root.dataset.reduce==='true'?'Judesys išjungtas':'Mažiau judesio';});
document.querySelectorAll('a[href^="kalbek:"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
