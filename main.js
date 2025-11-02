// Main JS for Larr Store (music removed) 
const WA_NUMBER = '6282283996884';

function copyToClipboard(text){
  navigator.clipboard?.writeText(text).then(()=>{
    showToast('Tersalin: ' + text);
  }).catch(()=> showToast('Gagal menyalin'));
}

function showToast(msg, time=2200){
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.style.opacity = '1';
  el.style.transform = 'translateY(0px)';
  el.setAttribute('aria-hidden','false');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>{
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.setAttribute('aria-hidden','true');
  }, time);
}

function order(item){
  const message = 'Halo Larr Store, saya mau order:%0A- ' + encodeURIComponent(item);
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + message, '_blank');
}

// Smooth reveal on scroll (fade & slide)
function initRevealOnScroll() {
  const els = document.querySelectorAll('.fade, .reveal-up');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  els.forEach(el=> io.observe(el));
}

document.addEventListener('DOMContentLoaded', ()=>{
  // set years
  ['year','year2','year3','year4'].forEach(id=>{ const el = document.getElementById(id); if(el) el.textContent = new Date().getFullYear(); });
  // init reveal animations
  initRevealOnScroll();
  // add reveal-up animation delay sequencing
  document.querySelectorAll('.reveal-up').forEach((el,i)=>{ el.style.transitionDelay = (i*0.06)+'s'; });
  // fade initial elements delay
  document.querySelectorAll('.fade').forEach((el,i)=>{ el.style.animationDelay = (0.06 * i) + 's'; });
});
