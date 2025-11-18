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

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `position:fixed;top:20px;right:20px;padding:12px 24px;border-radius:4px;color:white;z-index:1000;transition:opacity 0.3s;${type === 'success' ? 'background:#4CAF50' : 'background:#f44336'}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn.disabled) return; // Prevent multiple clicks
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    const formData = new FormData(this);
    const submissionUrl = this.action;
    
    try {
        await fetch(submissionUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });
        
        showToast('Your response has been submitted successfully!');
        this.reset();
    } catch (error) {
        showToast('There was an error submitting your response. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});