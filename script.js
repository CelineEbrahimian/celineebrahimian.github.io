// ---- image lightbox (click any project photo to enlarge)
const lb = document.getElementById('lb');
if (lb) {
  const lbImg = lb.querySelector('img');
  document.querySelectorAll('.gallery img, .card img, .plots img, .sensor img').forEach(img => {
    img.addEventListener('click', () => { lbImg.src = img.src; lbImg.alt = img.alt; lb.showModal(); });
  });
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
}

// ---- menu: underline the section you're in
const links = [...document.querySelectorAll('nav ul a[data-sec]')];
const navUl = document.querySelector('nav ul');
function showActive(idx) {
  links.forEach((a, i) => {
    const on = i === idx;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
  if (idx >= 0 && navUl.scrollWidth > navUl.clientWidth) {
    navUl.scrollTo({ left: links[idx].offsetLeft - navUl.offsetLeft - 16, behavior: 'smooth' });
  }
}
const pageSection = document.body.dataset.section;   // set on project detail pages
if (pageSection) {
  showActive(links.findIndex(a => a.dataset.sec === pageSection));
} else {
  const targets = links.map(a => document.getElementById(a.dataset.sec));
  let current = null;
  function updateActive() {
    const line = 64 + window.innerHeight * 0.3;
    let idx = -1;
    targets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= line) idx = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) idx = targets.length - 1;
    if (idx !== current) { current = idx; showActive(idx); }
  }
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(() => { updateActive(); ticking = false; }); }
  }, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();
}
