document.addEventListener('DOMContentLoaded', () => {
  const accordeons = document.querySelectorAll('.control-accordeon__accordeon');

  accordeons.forEach(accordeon => {
    const header = accordeon.querySelector('.control-accordeon__accordeon-header');
    const icon = accordeon.querySelector('.control-accordeon__accordeon-icon');
    const content = accordeon.querySelector('.control-accordeon__accordeon-content');

    header.addEventListener('click', () => {
      const isExpanded = content.style.display === 'block';
      
      if (isExpanded) {
        content.style.display = 'none';
        icon.classList.remove('active');
      } else {
        content.style.display = 'block';
        icon.classList.add('active');
      }
    });

    content.style.display = 'none';
  });
});
