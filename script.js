const $=(s,r=document)=>[...r.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
$('#yr')[0].textContent=new Date().getFullYear();
addEventListener('load',()=>setTimeout(()=>{document.body.classList.add('ready');$('.hero .rv,.hero h1').forEach(e=>e.classList.add('in'))},rm?0:1000));
function count(el){const to=+el.textContent,from=+el.dataset.from;if(rm)return;const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1100,1),v=from+(to-from)*(1-Math.pow(1-p,3));el.textContent=Math.round(v);if(p<1)requestAnimationFrame(f)})(t0)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');$('.count',e.target).forEach(count);io.unobserve(e.target)}}),{threshold:.15});
$('.rv').filter(e=>!e.closest('.hero')).forEach(e=>io.observe(e));
const bar=$('#bar')[0];addEventListener('scroll',()=>{bar.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'},{passive:true});
const links=$('nav a'),so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$('main section[id]').forEach(s=>so.observe(s));
if(fine&&!rm){
  $('[data-tilt]').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*12}deg) rotateX(${-y*12}deg)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
  $('[data-mag]').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
  const h=$('.hero')[0];h.addEventListener('pointermove',e=>{const r=h.getBoundingClientRect();h.style.setProperty('--mx',(e.clientX-r.left)/r.width-.5);h.style.setProperty('--my',(e.clientY-r.top)/r.height-.5)});
}

// hamburger menu toggle
const _tog=$('.menu-toggle')[0],_nav=$('#nav')[0];
if(_tog&&_nav){_tog.addEventListener('click',()=>{const o=_tog.classList.toggle('open');_nav.classList.toggle('open');_tog.setAttribute('aria-expanded',o)});$('#nav a').forEach(a=>a.addEventListener('click',()=>{_tog.classList.remove('open');_nav.classList.remove('open');_tog.setAttribute('aria-expanded','false')}))}
