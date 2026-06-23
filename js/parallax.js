document.addEventListener('DOMContentLoaded', () => {
  const parallaxEl = document.querySelector('.anim-item-main');
  const parallaxElMobile = document.querySelector('.anim-item-main2');
  if (!parallaxEl && !parallaxElMobile) return;

  const scrollIntensity = 0.16;
  const initialOffset = 200;

  function createParallax(el) {
    el.classList.add('parallax-ready');

    window.addEventListener(
      'scroll',
      () => {
        const scrollY = window.scrollY;
        el.style.transform = `translateY(${initialOffset + scrollY * scrollIntensity * -1}px)`;
      },
      { passive: true },
    );
  }

  function initParallax(el) {
    return () => createParallax(el);
  }

  if (parallaxEl) {
    parallaxEl.addEventListener('animationend', initParallax(parallaxEl), { once: true });
  }

  if (parallaxElMobile) {
    parallaxElMobile.addEventListener('animationend', initParallax(parallaxElMobile), {
      once: true,
    });
  }
});
