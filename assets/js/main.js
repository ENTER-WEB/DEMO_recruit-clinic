const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');
const pageTop = document.querySelector('.page-top');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    const active = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(active));
  });
}

document.querySelectorAll('a[href^="#"], a[href*="index.html#"]').forEach((link) => {
  link.addEventListener('click', () => {
    header?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 80;
  header?.classList.toggle('is-scrolled', scrolled);
  pageTop?.classList.toggle('is-visible', scrolled);
}, { passive: true });

document.querySelector('.movie-box')?.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('is-playing');
});
