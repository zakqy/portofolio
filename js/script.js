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
    "Informatics Fresh Graduate",
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
    jastipin: {
        title: "Jastipin",
        subtitle: "Mobile Purchase & Delivery Service App",
        image: "PROJEK/Aplikasi Mobile Jastipin .jpg",
        description: "Aplikasi titip beli barang berbasis mobile “Jastipin” dengan segala kepraktisannya, memfasilitasi koneksi kurir dengan pengguna, memungkinkan mengguna mencari barang yang diinginkan, mengetahui harga dan lokasi, serta memesan melalui aplikasi tersebut. Dan penyedia jasa bertugas membeli dan mengirimkan barang dengan biaya jasa.",
        features: [
            "Courier and user connection channel for purchase requests.",
            "Item searching with price, location details, and ordering options.",
            "Direct courier routing and order handling system.",
            "Custom pricing calculator based on delivery fee and item price."
        ],
        challenge: "Connecting couriers with users in real-time, managing transaction states, and handling database queries securely across mobile devices.",
        solution: "Developed custom states in Flutter with a clean UI designed in Android Studio. Integrated MySQL for transaction tables and secure endpoints for tracking and state updates.",
        techStack: ["FLUTTER", "ANDROID STUDIO", "MYSQL"],
        demoLink: "#"
    },
    tiket_wisata_lembah_hijau: {
        title: "Aplikasi Pemesanan Tiket Wisata Lembah Hijau",
        subtitle: "Tourism Ticket Booking Mobile App",
        image: "PROJEK/Aplikasi Pemesanan Tiket Wisata Lembah Hijau.jpg",
        description: "Aplikasi pemesanan tiket wisata berbasis mobile untuk Lembah Hijau. Memudahkan pengguna memesan tiket masuk, mengecek ketersediaan tiket, melihat informasi wahana secara langsung, dan mendapatkan tiket digital.",
        features: [
            "Real-time ticket availability and booking portal.",
            "Interactive information on zoo and waterpark attractions.",
            "Automated digital ticket generation with simulated scanner support.",
            "Secure purchase transaction records and payment integration simulation."
        ],
        challenge: "Managing booking statuses and synchronized database operations to prevent overselling of entry tickets during peak holiday periods.",
        solution: "Built a fully responsive front-end dashboard inside Flutter, linking with MySQL database backends utilizing transactional locks to ensure concurrency safety.",
        techStack: ["FLUTTER", "ANDROID STUDIO", "MYSQL"],
        demoLink: "#"
    },
    edukasi_buah_arvr: {
        title: "Edukasi Buah buahan Melalui ARVR (Augmented Reality Virtual Reality) 3D MODEL",
        subtitle: "Interactive 3D AR/VR Educational Tool",
        image: "PROJEK/Edukasi Buah buahan Melalui ARVR (Augmented Reality Virtual Reality) 3D MODEL .jpg",
        description: "Aplikasi edukasi buah-buahan berbasis Augmented Reality (AR) dan Virtual Reality (VR) dengan model 3D interaktif. Membantu pengguna, khususnya anak-anak, mengenali jenis buah, visualisasi 3D, serta informasi gizi secara imersif.",
        features: [
            "High-fidelity interactive 3D fruit models designed for children.",
            "Augmented reality layout projecting assets directly into current real-world environment.",
            "Educational trivia facts, nutrition insights, and pronunciations.",
            "Interactive mini-game quizzes to gauge retention."
        ],
        challenge: "Optimizing multiple high-detail 3D fruit assets to render seamlessly on standard mobile devices without lag.",
        solution: "Modelled and optimized low-poly fruit representations using Blender, importing them into Unity and using Vuforia SDK for fluid AR tracking and stable VR viewport rendering.",
        techStack: ["UNITY 3D", "BLENDER 3D", "C#", "AUGMENTED REALITY"],
        demoLink: "#"
    },
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
    },
    niscala: {
        title: "Niscala",
        subtitle: "Creative Interactive Web Portal",
        image: "PROJEK/niscala.png",
        description: "A highly creative and aesthetically pleasing web portal built to present profile information with smooth transitions and a modular layout design.",
        features: [
            "Modern glassmorphism UI components designed for high visual appeal.",
            "Interactive navigation elements with page-level scrolling interactions.",
            "Clean HTML/CSS architecture focusing on semantic markup.",
            "Fully responsive layouts styled meticulously for all viewport widths."
        ],
        challenge: "Developing lightweight page animations and dynamic interactive hover effects using pure CSS and vanilla JavaScript without slowing down load speeds.",
        solution: "Structured the application using standard web APIs, CSS Flexbox and Grid, and minimized external packages to achieve near-instantaneous page transitions.",
        techStack: ["HTML", "CSS", "JAVASCRIPT"],
        demoLink: "#"
    },
    tugas_semester_4: {
        title: "Tugas Akhir Pemrograman Web 1",
        subtitle: "Academic Web Application",
        image: "PROJEK/tugas semester 4.png",
        description: "A front-end development project created to fulfill academic coursework, demonstrating core capabilities in user interface design and page responsiveness.",
        features: [
            "Structured layout elements organized with modern CSS grid layouts.",
            "Dynamic client-side features built with raw JavaScript handlers.",
            "Clean, semantic page structure with embedded interactive menus.",
            "Optimized for standard mobile, tablet, and desktop display resolutions."
        ],
        challenge: "Integrating multiple design components and layout guidelines under a tight academic deadline while keeping visual presentation top-tier.",
        solution: "Established a clear layout grid system early on, separating styling concerns from interactivity scripting to facilitate quick iteration and debugging.",
        techStack: ["HTML", "CSS", "JAVASCRIPT"],
        demoLink: "#"
    },
    desain_game_blender: {
        title: "Projek Els Coffee Roastery",
        subtitle: "3D Assets & Environment Modeling",
        image: "PROJEK/desain game.png",
        description: "An asset collection and detailed 3D environment modeling project, featuring high-quality models built specifically for game engine optimization.",
        features: [
            "High-fidelity 3D modeling and asset texturing using Blender.",
            "Topology optimized specifically for rendering efficiency in games.",
            "Creative asset modeling ranging from props to environment scenery.",
            "Polished lighting setups and material designs."
        ],
        challenge: "Developing high-detail game assets while ensuring the polygon counts and textures are fully optimized to prevent lag during gameplay.",
        solution: "Employed smart retopology methods and baked complex material details onto optimized low-poly meshes, ensuring seamless game engine compatibility.",
        techStack: ["BLENDER 3D", "3D MODELING", "GAME DESIGN"],
        demoLink: "#"
    },
    uiux_figma: {
        title: "UI/UX Figma Design Case Study",
        subtitle: "High-Fidelity App Prototyping",
        image: "PROJEK/uiux figma.png",
        description: "An end-to-end user experience design project depicting wireframing, component-based styling, and high-fidelity interactive prototyping.",
        features: [
            "Comprehensive user research, flow charting, and wireframing.",
            "Cohesive design system including custom components and typography scales.",
            "Interactive and clickable prototypes showcasing transitions.",
            "Auto-layout configurations for seamless screen size adaptation."
        ],
        challenge: "Creating a navigation flow that is easy for new users to grasp, while maintaining an eye-catching, modern layout style.",
        solution: "Applied user testing cycles on mid-fidelity wireframes to identify bottlenecks, refining into final Figma layouts with strict design consistency.",
        techStack: ["FIGMA", "Tugas Akhir Ui Ux", "PROTOTYPING"],
        demoLink: "#"
    }
};

// MODAL FUNCTIONALITY
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openProjectModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data) return;

    // Determine category label
    let categoryLabel = "WEB PROJECT";
    if (projectId === 'jastipin' || projectId === 'tiket_wisata_lembah_hijau') {
        categoryLabel = "MOBILE APP PROJECT";
    } else if (projectId === 'edukasi_buah_arvr') {
        categoryLabel = "AR/VR GAME PROJECT";
    } else if (projectId === 'seaheroes') {
        categoryLabel = "WEB GAME PROJECT";
    } else if (projectId === 'desain_game_blender') {
        categoryLabel = "3D MODELING PROJECT";
    } else if (projectId === 'uiux_figma') {
        categoryLabel = "UI/UX DESIGN PROJECT";
    }

    // Generate tech stack badges HTML
    const techBadgesHTML = data.techStack.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('');
    
    // Generate features list HTML with ↗ arrow
    const featuresListHTML = data.features.map(feature => `
        <div class="modal-feature-item">
            <span class="feature-arrow">↗</span>
            <span class="feature-text">${feature}</span>
        </div>
    `).join('');

    // Generate Demo Link button conditionally
    const viewableProjects = ['bensburger', 'seaheroes', 'breadgift'];
    const hasDemoLink = viewableProjects.includes(projectId) && data.demoLink && data.demoLink !== '#';
    
    const demoButtonHTML = hasDemoLink ? `
        <a href="${data.demoLink}" target="_blank" class="modal-btn-view">
            View project <span class="btn-arrow">↗</span>
        </a>
    ` : '';

    const actionsHTML = demoButtonHTML ? `
        <div class="modal-project-actions">
            ${demoButtonHTML}
        </div>
    ` : '';

    // Generate modal content
    modalBody.innerHTML = `
        <div class="modal-project-wrapper">
            
            <div class="modal-project-columns">
                <!-- Left side: Image/Visual -->
                <div class="modal-project-visual">
                    <img class="modal-project-img-new" src="${data.image}" alt="${data.title}">
                </div>
                
                <!-- Right side: Info details -->
                <div class="modal-project-info">
                    <span class="modal-project-category">* FEATURED ${categoryLabel}</span>
                    <h2 class="modal-project-title">${data.title}</h2>
                    <p class="modal-project-desc">${data.description}</p>
                    
                    <div class="modal-project-tech-tags">
                        ${techBadgesHTML}
                    </div>
                    
                    <div class="modal-project-features-grid">
                        ${featuresListHTML}
                    </div>
                    
                    ${actionsHTML}
                </div>
            </div>
            
            <!-- Bottom details: Challenge & Solution -->
            <div class="modal-project-extra-details">
                <div class="extra-detail-divider"></div>
                <div class="extra-detail-grid">
                    <div class="extra-detail-block">
                        <div class="extra-detail-title"><span class="arrow-green">↗</span> The Challenge</div>
                        <p class="extra-detail-text">${data.challenge}</p>
                    </div>
                    <div class="extra-detail-block">
                        <div class="extra-detail-title"><span class="arrow-green">↗</span> The Solution</div>
                        <p class="extra-detail-text">${data.solution}</p>
                    </div>
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
