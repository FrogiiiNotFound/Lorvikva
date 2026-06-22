document.addEventListener('DOMContentLoaded', () => {
  const parallaxEl = document.querySelector('.anim-item-main');
  if (!parallaxEl) return;

  const scrollIntensity = 0.3;

  function initParallax() {
    parallaxEl.classList.add('parallax-ready');

    window.addEventListener(
      'scroll',
      () => {
        const scrollY = window.scrollY;
        parallaxEl.style.transform = `translateY(${scrollY * scrollIntensity * -1}px)`;
      },
      { passive: true },
    );
  }

  parallaxEl.addEventListener('animationend', initParallax, { once: true });
});
