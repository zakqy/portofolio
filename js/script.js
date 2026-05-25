// NAVBAR SCROLL EFFECT
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// HAMBURGER MENU TOGGLE
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('header ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('ul-active');
});

// Close nav menu on clicking any link
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('ul-active');
    });
});

// CERTIFICATES FILTER SYSTEM
const filterButtons = document.querySelectorAll('.filter-btn');
const certificateCards = document.querySelectorAll('.field-certificate');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        certificateCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            // Fade out animation transition
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    // Trigger reflow
                    card.offsetHeight; 
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.display = 'none';
                }
            }, 300);
        });
    });
});

// AOS ANIMATION INIT
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
