new Swiper('.slider__slide-info', {
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
  grabCursor: true,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
});

const plus = document.querySelector('.slider__addition-plus');
const content = document.querySelector('.slider__addition-content');

plus.addEventListener('click', () => {
  const isHidden = content.style.display === 'none' || content.style.display === '';
  content.style.display = isHidden ? 'block' : 'none';
});
