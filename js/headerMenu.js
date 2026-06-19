const body = document.querySelector('body');
const menuIcon = document.querySelector('.icon-menu');
const menuIcon2 = document.querySelector('.icon-menu2');
const menuBody = document.querySelector('.menu__body');
const headerContainer = document.querySelector('.header__container');

if (menuIcon && menuBody && body) {
  menuIcon.addEventListener('click', (e) => {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    headerContainer.classList.toggle('_active');
    body.classList.toggle('_active');
    body.classList.toggle('no-scroll');
  });
}

if (menuIcon2) {
  menuIcon2.addEventListener('click', (e) => {
    menuIcon.classList.toggle('_active');
    menuIcon2.classList.toggle('_active');
    headerContainer.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    body.classList.toggle('_active');
    body.classList.toggle('no-scroll');
  });
}
