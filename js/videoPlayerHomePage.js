document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');
  const source = videoPlayer.querySelector('source');
  const closeBtn = document.getElementById('videoClose');

  console.log('videos found:', document.querySelectorAll('.home-videos__video').length);

  document.querySelectorAll('.home-videos__video').forEach((card) => {
    card.addEventListener('click', () => {
      const src = card.dataset.video;

      source.src = src;
      videoPlayer.load();

      modal.classList.add('active');

      videoPlayer.play().catch((err) => {
        console.log('play error:', err);
      });
    });
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('active');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  });
});
