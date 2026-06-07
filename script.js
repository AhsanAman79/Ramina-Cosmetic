// Header background on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

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
