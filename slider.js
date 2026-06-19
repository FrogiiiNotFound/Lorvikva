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

// Функция для переключения видимости контента
const toggleContent = () => {
  const isHidden = content.style.display === 'none' || content.style.display === '';
  content.style.display = isHidden ? 'block' : 'none';
};

// Функция для скрытия контента
const hideContent = () => {
  content.style.display = 'none';
};

// Открытие контента по клику на плюс
plus.addEventListener('click', (event) => {
  event.stopPropagation(); // Предотвращаем всплытие
  toggleContent();
});

// Закрытие контента по клику на кнопку закрытия
const closeBtn = document.querySelector('.slider__addition-content-close-btn');
if (closeBtn) {
  closeBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Предотвращаем всплытие
    hideContent();
  });
}

// Закрытие при клике вне контента
document.addEventListener('click', (event) => {
  if (content.style.display === 'block' && 
      !content.contains(event.target) && 
      !plus.contains(event.target)) {
    hideContent();
  }
});

// Предотвращаем закрытие при клике внутри контента
content.addEventListener('click', (event) => {
  event.stopPropagation();
});
