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

// TYPEWRITER EFFECT
const typewriterElement = document.getElementById('typewriter');
const words = [
    "Informatics Graduate",
    "Web Developer",
    "Junior Game Designer"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    if (!typewriterElement) return;
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Deleting characters
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster deletion
    } else {
        // Typing characters
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 120; // Natural typing speed
    }

    // Handle word completion
    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at completion
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeWriter, typeSpeed);
}

// PROJECTS FILTER SYSTEM
const projectFilterButtons = document.querySelectorAll('.project-filters .filter-btn');
const projectCards = document.querySelectorAll('.container-project .field-project');

projectFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in project filters
        projectFilterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            // Fade out transition
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

// PROJECT DETAILS DATA
const projectDetailsData = {
    bensburger: {
        title: "Ben's Burger",
        subtitle: "Cafe Promotion & Order Web",
        image: "PROJEK/bensburger.PNG",
        description: "A visually stunning cafe website designed to introduce premium burger products, manage promotions, and facilitate seamless customer orders.",
        features: [
            "Interactive menu exploration with realtime price calculation.",
            "Dynamic shopping cart with item additions and removals.",
            "Modern interactive scroll animations.",
            "Fully responsive design optimized for mobile and desktop screens."
        ],
        challenge: "Creating an engaging and seamless ordering experience without page reloads, while maintaining a smooth and aesthetic interface on all device sizes.",
        solution: "Developed local state-based cart logic in pure JavaScript for instant cart updates. Integrated AOS (Animate On Scroll) and customized CSS variables to provide premium glassmorphism visuals and fluid animations.",
        techStack: ["HTML", "CSS", "JAVASCRIPT"],
        demoLink: "https://zakqy.github.io/bensburger/"
    },
    breadgift: {
        title: "Bread Gift",
        subtitle: "Bakery and Gift Ordering Portal",
        image: "PROJEK/breadgift.PNG",
        description: "An elegant digital storefront built for a boutique bakery and custom gift provider, featuring premium UI layouts and catalog exploration.",
        features: [
            "Premium UX/UI catalog displaying baked goods and custom gifts.",
            "Secure backend and database integration.",
            "Seamless order form processing.",
            "Advanced layout systems built with Tailwind CSS."
        ],
        challenge: "Handling complex client-side state and ensuring server-side rendering is optimized for fast page loads and database interactions.",
        solution: "Built the application using React and Next.js for high-speed page loads. Integrated Tailwind CSS for state-of-the-art styling, and MySQL to manage safe and reliable data transactions.",
        techStack: ["NEXT.JS", "REACT.JS", "MYSQL", "TAILWIND"],
        demoLink: "https://breadgift.vercel.app/"
    },
    seaheroes: {
        title: "Sea Heroes Clean Up",
        subtitle: "Educational Ocean Cleanup Game",
        image: "PROJEK/GAME SEA HERO CLEAN UP.png",
        description: "An engaging educational web game where players save marine life by collecting waste and cleaning up a polluted ocean ecosystem.",
        features: [
            "Educational gameplay mechanics about environmental conservation.",
            "Score tracking and interactive waste collection behavior.",
            "Smooth and engaging audio and visual feedback.",
            "Web-compatible deployment for direct browser play."
        ],
        challenge: "Creating fluid, interactive physics and waste collection behavior that runs smoothly inside various mobile and desktop browser viewports without lags.",
        solution: "Built with Construct 3's high-performance physics behaviors and web canvas scaling. Optimized game assets and logic to ensure minimal resource load and maximum frame rates in modern browsers.",
        techStack: ["CONSTRUCT 3", "HTML5", "GAME DESIGN"],
        demoLink: "https://seaheroescleanup.itch.io/sea-heroes-clean-up"
    }
};

// MODAL FUNCTIONALITY
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openProjectModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data) return;

    // Generate tech stack badges HTML
    const techBadgesHTML = data.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
    
    // Generate features list HTML
    const featuresListHTML = data.features.map(feature => `<li><i class="fa-solid fa-circle-check"></i> <span>${feature}</span></li>`).join('');

    // Generate modal content
    modalBody.innerHTML = `
        <div class="modal-project-header">
            <h2>${data.title}</h2>
            <h4>${data.subtitle}</h4>
        </div>
        <img class="modal-project-img" src="${data.image}" alt="${data.title}">
        
        <div class="modal-project-info-grid">
            <div class="modal-left">
                <div class="modal-section-title">Project Overview</div>
                <p class="modal-text">${data.description}</p>
                
                <div class="modal-section-title">Key Features</div>
                <ul class="modal-features-list">
                    ${featuresListHTML}
                </ul>

                <div class="modal-section-title">Challenge</div>
                <p class="modal-text">${data.challenge}</p>

                <div class="modal-section-title">Solution</div>
                <p class="modal-text">${data.solution}</p>
            </div>
            
            <div class="modal-sidebar">
                <div class="modal-section-title">Technologies Used</div>
                <div class="modal-tech-stack">
                    ${techBadgesHTML}
                </div>
                
                <div class="modal-actions">
                    <a href="${data.demoLink}" target="_blank" class="modal-btn modal-btn-primary">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> ${projectId === 'seaheroes' ? 'Play Game' : 'Live Demo'}
                    </a>
                    <button onclick="closeProjectModal()" class="modal-btn modal-btn-secondary">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

    // Show modal with animation
    projectModal.style.display = 'flex';
    // Trigger reflow
    projectModal.offsetHeight;
    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Disable background scrolling
}

function closeProjectModal() {
    projectModal.classList.remove('show');
    document.body.style.overflow = ''; // Enable background scrolling
    setTimeout(() => {
        projectModal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside of modal-content
window.addEventListener('click', (event) => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal on Escape key press
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal && projectModal.classList.contains('show')) {
        closeProjectModal();
    }
});

// Start typewriter effect after DOM load
document.addEventListener('DOMContentLoaded', () => {
    if (typewriterElement) {
        // Clear fallback content
        typewriterElement.textContent = '';
        setTimeout(typeWriter, 1000);
    }
});
