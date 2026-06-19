const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const source = videoPlayer.querySelector('source');
const closeBtn = document.getElementById('videoClose');

document.querySelectorAll('.videos__video').forEach((card) => {
  card.addEventListener('click', () => {
    const src = card.getAttribute('data-video');

    source.src = src;
    videoPlayer.load();

    modal.classList.add('active');

    videoPlayer.play().catch((err) => {
      console.log('Autoplay blocked:', err);
    });
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');

  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

const videoClickLayer = document.getElementById('videoClickLayer');

videoClickLayer.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});


