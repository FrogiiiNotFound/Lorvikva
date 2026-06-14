document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.querySelector('.effective-page__btn1');
  const btn2 = document.querySelector('.effective-page__btn2');
  const cnsBlock = document.querySelector('.effective-page__cns');
  const generalBlock = document.querySelector('.effective-page__general');

  function showGeneral() {
    btn1.classList.add('_active');
    btn2.classList.remove('_active');
    cnsBlock.style.display = 'none';
    generalBlock.style.display = 'block';
  }

  function showCNS() {
    btn1.classList.remove('_active');
    btn2.classList.add('_active');
    cnsBlock.style.display = 'block';
    generalBlock.style.display = 'none';
  }

  btn1.addEventListener('click', showGeneral);
  btn2.addEventListener('click', showCNS);

  showGeneral();
});
