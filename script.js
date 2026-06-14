// Header background on scroll + scroll-to-top button
const header = document.querySelector('.site-header');
const toTop = document.getElementById('to-top');
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 60);
  if (toTop) toTop.classList.toggle('show', y > 400);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Close mobile menu on link click
const navToggle = document.getElementById('nav-toggle');
document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => { navToggle.checked = false; })
);

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Testimonials slider
document.querySelectorAll('[data-slider]').forEach((slider) => {
  const track = slider.querySelector('.slider-track');
  const dotsWrap = slider.querySelector('.slider-dots');
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  const cards = Array.from(track ? track.children : []);
  if (!track || cards.length === 0) return;

  const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
  const step = () => cards[0].getBoundingClientRect().width + gap;
  const perView = () => Math.max(1, Math.round((track.clientWidth + gap) / step()));
  const pageCount = () => Math.max(1, Math.ceil(cards.length / perView()));
  const currentPage = () => Math.round(track.scrollLeft / (step() * perView()));

  function goTo(page) {
    const target = Math.max(0, Math.min(page, pageCount() - 1));
    track.scrollTo({ left: target * perView() * step(), behavior: 'smooth' });
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pageCount(); i++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'slider-dot';
      b.setAttribute('aria-label', `Zur Seite ${i + 1}`);
      b.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(b);
    }
  }

  function update() {
    const cp = currentPage();
    dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) => {
      const active = i === cp;
      d.classList.toggle('active', active);
      d.setAttribute('aria-current', active ? 'true' : 'false');
    });
  }

  next.addEventListener('click', () => goTo(currentPage() >= pageCount() - 1 ? 0 : currentPage() + 1));
  prev.addEventListener('click', () => goTo(currentPage() <= 0 ? pageCount() - 1 : currentPage() - 1));

  let raf;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(update);
  }, { passive: true });

  // Autoplay (respects reduced-motion, pauses on interaction)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer;
  const play = () => {
    if (reduceMotion) return;
    stop();
    timer = setInterval(() => goTo(currentPage() >= pageCount() - 1 ? 0 : currentPage() + 1), 6000);
  };
  const stop = () => { if (timer) clearInterval(timer); };
  ['mouseenter', 'focusin', 'pointerdown'].forEach((ev) => slider.addEventListener(ev, stop));
  ['mouseleave', 'focusout'].forEach((ev) => slider.addEventListener(ev, play));

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { buildDots(); update(); }, 200);
  });

  buildDots();
  update();
  play();
});
