document.addEventListener('scroll', () => {
  const overlay = document.querySelector('.hero-overlay');
  overlay.style.opacity = Math.min(0.7 + window.scrollY / 600, 1);
});

