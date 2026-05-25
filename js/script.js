// NAVBAR SCROLL EFFECT & BACK TO TOP VISIBILITY
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    // Navbar scrolled effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button show/hide
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// BACK TO TOP CLICK ACTION
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// HAMBURGER MENU TOGGLE
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('header ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('ul-active');
    
    // Toggle hamburger icon between bars and cross (fa-bars / fa-xmark)
    if (navLinks.classList.contains('ul-active')) {
        hamburgerMenu.classList.remove('fa-bars');
        hamburgerMenu.classList.add('fa-xmark');
    } else {
        hamburgerMenu.classList.remove('fa-xmark');
        hamburgerMenu.classList.add('fa-bars');
    }
});

// Close nav menu on clicking any link and restore hamburger icon
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('ul-active');
        hamburgerMenu.classList.remove('fa-xmark');
        hamburgerMenu.classList.add('fa-bars');
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
