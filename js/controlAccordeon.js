document.addEventListener('DOMContentLoaded', () => {
  const accordeons = document.querySelectorAll('.control-accordeon__accordeon');

  accordeons.forEach(accordeon => {
    const header = accordeon.querySelector('.control-accordeon__accordeon-header');
    const icon = accordeon.querySelector('.control-accordeon__accordeon-icon-arrow');
    const content = accordeon.querySelector('.control-accordeon__accordeon-content');

    header.addEventListener('click', () => {
      const isExpanded = content.style.display === 'block';
      
      if (isExpanded) {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
      }
    });

    content.style.display = 'none';
  });
});
