
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const toggleButton = card.querySelector('.plus-mines');
  const hideShow = card.querySelector('.hide-show');

  toggleButton.addEventListener('click', function() {
    
    if (hideShow.style.display === 'none') {
      hideShow.style.display = 'block';
      toggleButton.textContent = '-'; 
      card.classList.toggle('active');
      toggleButton.style.padding = '0 1.4rem';
    } else {
      hideShow.style.display = 'none';
      toggleButton.textContent = '+'; 
      card.classList.remove('active');
    }

  
    
  });
});
