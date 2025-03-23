// Save Kittens and Cats Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Subtle hover effect for fact cards
    const factCards = document.querySelectorAll('.fact-card');
    
    factCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ffebf3';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--light-color)';
        });
    });
}); 