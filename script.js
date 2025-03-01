// Get the CTA button
const ctaButton = document.getElementById('cta-button');

// Add click event listener
ctaButton.addEventListener('click', () => {
    alert('Thanks for clicking! This is where you can add your custom functionality.');
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.bg-white.p-6');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize cards with initial state
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bg-white.p-6');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
}); 