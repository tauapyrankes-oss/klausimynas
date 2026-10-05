// Demonstration controls only. No curriculum, progression, scoring or Gemini connection.
const params = new URLSearchParams(location.search);
let theme = 'light'; // Vartotojo patvirtinta vienintelė programėlės tema.
const root = document.documentElement;
root.dataset.theme = theme;
if (params.get('motion') === 'off') root.dataset.motion = 'off';
function applyTheme(){
  root.dataset.theme=theme;
  document.querySelectorAll('iframe').forEach(frame=>{
    const url=new URL(frame.src);url.searchParams.set('theme',theme);frame.src=url;
  });
  document.querySelectorAll('a[href$=".html"]').forEach(a=>{
    const url=new URL(a.href);url.searchParams.set('theme',theme);a.href=url;
  });
}
applyTheme();
document.querySelectorAll('[data-theme-toggle],[data-gallery-theme]').forEach(b=>b.onclick=()=>{theme=theme==='light'?'dark':'light';applyTheme();});
document.querySelectorAll('[data-motion-toggle]').forEach(b=>b.onclick=()=>{
 const off=root.dataset.motion!=='off';root.dataset.motion=off?'off':'on';b.textContent=`Animacijos: ${off?'išjungtos':'įjungtos'}`;
 document.querySelectorAll('iframe').forEach(f=>f.contentWindow.setPrototypeMotion?.(off));
});
document.querySelectorAll('[data-text-toggle]').forEach(b=>b.onclick=()=>{const row=document.querySelector('.textrow');row.hidden=!row.hidden;if(!row.hidden)row.querySelector('input').focus();});
document.querySelectorAll('.options .option').forEach(b=>b.onclick=()=>{b.parentElement.querySelectorAll('.option').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));});
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>document.querySelector('.modal-back').remove());

// SVG images have their own animation context. Freeze their source for the manual demo switch.
window.setPrototypeMotion = async (off) => {
 root.dataset.motion = off ? 'off' : 'on';
 await Promise.all([...document.querySelectorAll('img.ema')].map(async img => {
  const source = img.dataset.originalSrc || img.src;
  img.dataset.originalSrc = source;
  if (!off) { img.src = source; return; }
  const svg = await fetch(source).then(r => r.text());
  const still = svg.replace('</svg>', '<style>*{animation:none!important;transition:none!important}</style></svg>');
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(still);
 }));
};
if (params.get('motion') === 'off') window.setPrototypeMotion(true);
