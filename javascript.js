
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
      toggleButton.textContent = ' - '; 
      
      card.querySelector('.plus-mines').style.padding = '0 2.3rem 0.3rem 2.3rem';
      card.classList.toggle('active');

      
    } else {
      hideShow.style.display = 'none';
      toggleButton.textContent = '+'; 
      card.classList.remove('active');
    }

  
    
  });
});



const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

let currentIndex = 0;

// Function to slide the individual block
function moveSlide() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.transform = 'translateX(0)'; // Active slide stays in place
    } else if (index < currentIndex) {
      slide.style.transform = 'translateX(-100%)'; // Slides before the current one go left
    } else {
      slide.style.transform = 'translateX(100%)'; // Slides after the current one go right
    }
  });
}

// Click event for the left arrow
leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlide();
  }
});

// Click event for the right arrow
rightArrow.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    moveSlide();
  }
});

// Initialize slide positions
moveSlide();
