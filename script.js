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

// Decorative Instagram gallery tiles linking to the profile.
// Replace with the live Instagram feed once an API token / embed widget is available.
const IG_URL = 'https://www.instagram.com/ramina.cosmetics';
const tones = ['#c9a96a', '#b08d4f', '#8a6f48', '#d8c4a0', '#2d241b', '#a98a5c', '#e3d6c2', '#6e5837'];
const grid = document.getElementById('ig-grid');
if (grid) {
  for (let i = 0; i < 8; i++) {
    const a = document.createElement('a');
    a.href = IG_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'ig-tile reveal';
    a.style.background = `linear-gradient(135deg, ${tones[i]}, ${tones[(i + 3) % tones.length]})`;
    a.setAttribute('aria-label', 'Ramina Cosmetics auf Instagram ansehen');
    a.textContent = '☼';
    grid.appendChild(a);
    io.observe(a);
  }
}
