const btns = document.querySelector('.videos__btns');
const videos = document.querySelector('.videos__videos-page');
const materials = document.querySelector('.videos__materials');

function showVideos() {
  videos.style.display = 'flex';
  materials.style.display = 'none';
  btns.querySelector('.videos__btn1').classList.add('_active');
  btns.querySelector('.videos__btn2').classList.remove('_active');
}

function showMaterials() {
  materials.style.display = 'block';
  videos.style.display = 'none';
  btns.querySelector('.videos__btn2').classList.add('_active');
  btns.querySelector('.videos__btn1').classList.remove('_active');
}

btns.addEventListener('click', (e) => {
  if (e.target.closest('.videos__btn1')) showVideos();
  if (e.target.closest('.videos__btn2')) showMaterials();
});

showVideos();
