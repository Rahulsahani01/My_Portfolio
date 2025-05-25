document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });

document.querySelectorAll('.skills-carousel').forEach(carousel => {
    carousel.innerHTML += carousel.innerHTML;
});
