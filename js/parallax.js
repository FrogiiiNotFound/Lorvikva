document.addEventListener('DOMContentLoaded', () => {
  const parallaxEl = document.querySelector('.anim-item-main');
  if (!parallaxEl) return;

  const intensity = 30;

  function initParallax() {
    parallaxEl.classList.add('parallax-ready'); // отключаем CSS-анимацию, освобождая transform

    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      parallaxEl.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
    });
  }

  // ждём завершения анимации появления, потом включаем параллакс
  parallaxEl.addEventListener('animationend', initParallax, { once: true });
});
