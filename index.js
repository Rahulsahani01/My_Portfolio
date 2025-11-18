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
document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevents new tab opening
    
    const formData = new FormData(this);
    const submissionUrl = this.action; // Gets the form's action URL
    
    try {
        await fetch(submissionUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });
        
        // Show success message
        alert('Your response has been submitted successfully!');
        this.reset(); // Clear the form
    } catch (error) {
        alert('There was an error submitting your response. Please try again.');
    }
});