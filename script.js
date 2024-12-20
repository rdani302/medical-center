// Smooth scroll to "About Us" section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic button hover effect
const ctaButton = document.querySelector('.cta-btn');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'scale(1.15)';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'scale(1)';
});

// Show a welcome alert on page load (optional)
window.addEventListener('load', () => {
    alert('Welcome to Medical Center!');
});
