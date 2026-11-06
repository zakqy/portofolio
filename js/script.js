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

if (hamburgerMenu && navLinks) {
    const getMenuIcon = () => hamburgerMenu.querySelector('i') || hamburgerMenu;

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('ul-active');
        const icon = getMenuIcon();
        
        // Toggle hamburger icon between bars and cross (fa-bars / fa-xmark)
        if (navLinks.classList.contains('ul-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close nav menu on clicking any link and restore hamburger icon
    document.querySelectorAll('header ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('ul-active');
            const icon = getMenuIcon();
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

// CERTIFICATES FILTER SYSTEM
const certFilterButtons = document.querySelectorAll('.certificate-filters .filter-btn');
const certificateCards = document.querySelectorAll('.container-certificate .field-certificate');

certFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in cert filters
        certFilterButtons.forEach(btn => btn.classList.remove('active'));
        
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

// SKILLS FILTER SYSTEM
const skillFilterButtons = document.querySelectorAll('.skill-filters .filter-btn');
const skillCards = document.querySelectorAll('.container-image-skill .field-image-skill');

skillFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons in skill filters
        skillFilterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        skillCards.forEach(card => {
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
    "Lulusan Baru Informatika",
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

// PROJECT DETAILS DATA (Bahasa Indonesia)
const projectDetailsData = {
    jastipin: {
        title: "Jastipin",
        subtitle: "Aplikasi Layanan Jasa Titip & Pengantaran Mobile",
        image: "PROJEK/Aplikasi Mobile Jastipin .jpg",
        description: "Aplikasi layanan jasa titip dan pengantaran berbasis mobile 'Jastipin' yang dirancang untuk kenyamanan maksimal, menghubungkan kurir dengan pengguna secara langsung. Memungkinkan pelanggan mencari barang yang diinginkan, memverifikasi harga dan lokasi, serta membuat pesanan titipan secara praktis dengan kalkulasi ongkos kirim otomatis.",
        features: [
            "Saluran komunikasi langsung antara kurir dan pengguna untuk permintaan barang titipan.",
            "Pencarian barang lengkap dengan rincian harga, lokasi toko, dan opsi pemesanan.",
            "Sistem penanganan pesanan dan rute pengantaran kurir langsung.",
            "Kalkulator tarif kustom berdasarkan biaya pengantaran dan harga barang."
        ],
        challenge: "Menghubungkan kurir dengan pengguna secara real-time, mengelola status transaksi yang dinamis, dan menangani query basis data secara aman di berbagai perangkat mobile.",
        solution: "Mengembangkan state management kustom di Flutter dengan tampilan antarmuka bersih yang dirancang di Android Studio. Mengintegrasikan MySQL untuk tabel transaksi serta endpoint yang aman untuk pelacakan status pesanan.",
        techStack: ["FLUTTER", "ANDROID STUDIO", "MYSQL"],
        demoLink: "#"
    },
    tiket_wisata_lembah_hijau: {
        title: "Aplikasi Pemesanan Tiket Wisata Lembah Hijau",
        subtitle: "Aplikasi Mobile Pemesanan Tiket Wisata",
        image: "PROJEK/Aplikasi Pemesanan Tiket Wisata Lembah Hijau.jpg",
        description: "Aplikasi reservasi tiket wisata berbasis mobile untuk taman wisata Lembah Hijau. Memungkinkan pengunjung memesan tiket masuk dengan mudah, mengecek ketersediaan tiket secara real-time, menjelajahi panduan wahana, dan menerima tiket digital instan.",
        features: [
            "Portal pemesanan dan pengecekan ketersediaan kuota tiket secara real-time.",
            "Informasi interaktif seputar wahana kebun binatang dan waterpark.",
            "Pembuatan e-ticket otomatis dengan dukungan simulasi scan barcode/QR code.",
            "Pencatatan riwayat transaksi pembelian dan simulasi pembayaran terintegrasi."
        ],
        challenge: "Mengelola sinkronisasi status pemesanan tiket pada basis data secara aman guna mencegah kelebihan penjualan (overselling) tiket masuk pada hari libur ramai.",
        solution: "Membangun dashboard front-end responsif di Flutter yang terhubung dengan backend database MySQL menggunakan transactional lock untuk menjaga keamanan konkurensi data.",
        techStack: ["FLUTTER", "ANDROID STUDIO", "MYSQL"],
        demoLink: "#"
    },
    edukasi_buah_arvr: {
        title: "Edukasi Buah Interaktif 3D AR/VR",
        subtitle: "Media Edukasi Interaktif 3D AR/VR",
        image: "PROJEK/Edukasi Buah buahan Melalui ARVR (Augmented Reality Virtual Reality) 3D MODEL .jpg",
        description: "Aplikasi edukasi interaktif yang memanfaatkan Augmented Reality (AR) dan Virtual Reality (VR) dengan model 3D. Membantu anak-anak dan pelajar mengenal berbagai jenis buah, mempelajari struktur visual 3D, dan memahami informasi nutrisi penting secara imersif.",
        features: [
            "Model buah 3D interaktif beresolusi tinggi yang dirancang ramah anak.",
            "Fitur Augmented Reality yang memproyeksikan buah 3D ke lingkungan nyata di sekitar.",
            "Fakta edukatif seputar gizi, manfaat kesehatan, dan pelafalan nama buah.",
            "Kuis mini-game interaktif untuk menguji pemahaman dan daya ingat anak."
        ],
        challenge: "Mengoptimalkan beberapa aset 3D buah berdetail tinggi agar dapat di-render dengan lancar pada perangkat mobile tanpa lag atau penurunan FPS.",
        solution: "Memodelkan dan mengoptimasi mesh low-poly menggunakan Blender, mengimpor ke Unity, serta memanfaatkan Vuforia SDK untuk pelacakan AR yang akurat dan stabil.",
        techStack: ["UNITY 3D", "BLENDER 3D", "C#", "AUGMENTED REALITY"],
        demoLink: "#"
    },
    bensburger: {
        title: "Ben's Burger",
        subtitle: "Website Promosi & Pemesanan Kafe",
        image: "PROJEK/bensburger.PNG",
        description: "Website kafe modern yang dirancang untuk memperkenalkan menu burger premium, mengelola penawaran promo, dan memfasilitasi alur pemesanan pelanggan dengan mulus.",
        features: [
            "Eksplorasi menu interaktif dengan kalkulasi harga pesanan otomatis.",
            "Keranjang belanja dinamis dengan fitur tambah, ubah, dan hapus menu.",
            "Animasi scroll interaktif yang modern dan elegan.",
            "Desain responsif penuh yang dioptimalkan untuk layar ponsel hingga desktop."
        ],
        challenge: "Menciptakan pengalaman pemesanan yang cepat dan tanpa reload halaman, sambil mempertahankan tampilan visual estetis di semua ukuran layar.",
        solution: "Mengembangkan logika keranjang belanja berbasis state lokal dengan JavaScript murni untuk pembaruan instan. Mengintegrasikan AOS (Animate On Scroll) dan CSS glassmorphism untuk tampilan visual modern.",
        techStack: ["HTML", "CSS", "JAVASCRIPT"],
        demoLink: "https://zakqy.github.io/bensburger/"
    },
    breadgift: {
        title: "Bread Gift",
        subtitle: "Portal Pemesanan Roti & Hadiah Kustom",
        image: "PROJEK/breadgift.PNG",
        description: "Platform toko online elegan yang dibangun untuk butik bakery dan penyedia kado kustom, menghadirkan tata letak UI premium serta kemudahan eksplorasi katalog produk.",
        features: [
            "Katalog produk kue, roti, dan hadiah kustom dengan antarmuka UI/UX premium.",
            "Integrasi basis data dan backend yang aman dan andal.",
            "Formulir pemesanan online yang cepat dan mudah digunakan.",
            "Sistem tata letak modern yang dirancang dengan Tailwind CSS."
        ],
        challenge: "Mengelola state di sisi klien yang kompleks dan memastikan server-side rendering berjalan optimal untuk kecepatan muat halaman serta interaksi database.",
        solution: "Membangun aplikasi dengan React dan Next.js untuk performa muat halaman kilat. Memanfaatkan Tailwind CSS untuk styling modern, serta MySQL untuk penyimpanan transaksi data yang andal.",
        techStack: ["NEXT.JS", "REACT.JS", "MYSQL", "TAILWIND"],
        demoLink: "https://breadgift.vercel.app/"
    },
    seaheroes: {
        title: "Sea Heroes Clean Up",
        subtitle: "Game Edukasi Pembersihan Laut",
        image: "PROJEK/GAME SEA HERO CLEAN UP.png",
        description: "Game web edukatif yang menyenangkan di mana pemain berpetualang menyelamatkan biota laut dengan mengumpulkan sampah dan membersihkan ekosistem laut yang tercemar.",
        features: [
            "Mekanik gameplay edukatif tentang pelestarian lingkungan dan kepedulian laut.",
            "Pelacakan skor pencapaian dan perilaku pengumpulan sampah yang interaktif.",
            "Efek audio dan visual yang menarik serta responsif.",
            "Dukungan langsung di peramban web tanpa perlu instalasi aplikasi tambahan."
        ],
        challenge: "Menciptakan simulasi fisika gerakan air dan pengambilan sampah yang halus di berbagai ukuran layar peramban tanpa hambatan performa.",
        solution: "Dibangun dengan behavior fisika Construct 3 berkinerja tinggi serta canvas scaling web. Mengoptimasi aset grafis dan logika agar konsumsi sumber daya minimal dan frame rate tetap maksimal.",
        techStack: ["CONSTRUCT 3", "HTML5", "GAME DESIGN"],
        demoLink: "https://seaheroescleanup.itch.io/sea-heroes-clean-up"
    },
    niscala: {
        title: "Niscala",
        subtitle: "Portal & Profil Web Interaktif",
        image: "PROJEK/niscala.png",
        description: "Portal profil web interaktif yang dibangun dengan estetika desain modern, transisi halaman yang halus, dan tata letak modular yang bersih.",
        features: [
            "Komponen antarmuka glassmorphism modern dengan daya tarik visual tinggi.",
            "Elemen navigasi interaktif dengan interaksi scrolling halaman yang halus.",
            "Arsitektur kode HTML/CSS yang rapi dan semantik.",
            "Tata letak responsif penuh yang dirancang presisi untuk semua resolusi layar."
        ],
        challenge: "Mengembangkan animasi halaman ringan dan efek hover interaktif dinamis dengan CSS dan JavaScript murni tanpa membebani kecepatan pemuatan.",
        solution: "Menyusun struktur web menggunakan API web standar, CSS Flexbox dan Grid, serta meminimalkan dependensi eksternal untuk transisi halaman yang instan.",
        techStack: ["HTML", "CSS", "JAVASCRIPT"],
        demoLink: "#"
    },
    tugas_semester_4: {
        title: "Tugas Akhir Pemrograman Web 1",
        subtitle: "Aplikasi Web Akademik",
        image: "PROJEK/tugas semester 4.png",
        description: "Proyek pengembangan front-end yang dibuat untuk memenuhi tugas akademik, mendemonstrasikan kemampuan inti dalam desain antarmuka pengguna dan responsivitas web.",
        features: [
            "Elemen tata letak terstruktur yang diorganisir dengan sistem CSS grid modern.",
            "Fitur interaktif sisi klien yang dibangun menggunakan handler JavaScript murni.",
            "Struktur halaman bersih dan semantik dengan menu navigasi terintegrasi.",
            "Dioptimalkan untuk resolusi layar ponsel, tablet, dan desktop."
        ],
        challenge: "Mengintegrasikan berbagai komponen desain dan ketentuan tugas di bawah batas waktu akademik yang ketat dengan tetap menjaga kerapian kode.",
        solution: "Menetapkan sistem grid tata letak yang jelas sejak awal, memisahkan logika styling dan skrip interaktivitas untuk memudahkan iterasi dan pengujian.",
        techStack: ["HTML", "CSS", "JAVASCRIPT"],
        demoLink: "#"
    },
    desain_game_blender: {
        title: "Proyek 3D El's Coffee Roastery",
        subtitle: "Pemodelan Aset & Lingkungan 3D",
        image: "PROJEK/desain game.png",
        description: "Koleksi aset dan pemodelan lingkungan 3D yang mendetail, menampilkan model berkualitas tinggi yang dirancang khusus untuk optimasi game engine.",
        features: [
            "Pemodelan 3D dan texturing aset berkualitas tinggi menggunakan Blender.",
            "Topologi yang dioptimalkan khusus untuk efisiensi rendering dalam game engine.",
            "Pemodelan beragam objek mulai dari properti detail hingga latar pemandangan.",
            "Penataan pencahayaan realistis dan konfigurasi material visual yang memukau."
        ],
        challenge: "Mengembangkan aset game berdetail tinggi sambil menjaga jumlah poligon dan tekstur tetap optimal agar terhindar dari lag saat dijalankan dalam game.",
        solution: "Menerapkan teknik retopology cerdas dan membakar (bake) detail material kompleks ke mesh low-poly yang efisien untuk kompatibilitas penuh di game engine.",
        techStack: ["BLENDER 3D", "3D MODELING", "GAME DESIGN"],
        demoLink: "#"
    },
    uiux_figma: {
        title: "Studi Kasus Desain UI/UX Figma",
        subtitle: "Prototipe Aplikasi High-Fidelity",
        image: "PROJEK/uiux figma.png",
        description: "Proyek desain pengalaman pengguna menyeluruh (end-to-end) yang mencakup wireframing, styling berbasis komponen, dan prototipe interaktif high-fidelity.",
        features: [
            "Riset pengguna komprehensif, diagram alur (flowchart), dan wireframing.",
            "Design system yang konsisten mencakup komponen kustom dan skala tipografi.",
            "Prototipe interaktif yang dapat diklik dengan animasi transisi yang mulus.",
            "Konfigurasi auto-layout Figma untuk adaptasi ukuran layar yang fleksibel."
        ],
        challenge: "Menciptakan alur navigasi yang intuitif dan mudah dipahami oleh pengguna baru, dengan tetap menjaga gaya visual modern dan menarik.",
        solution: "Menerapkan uji coba pengguna pada wireframe mid-fidelity untuk menemukan kendala, lalu menyempurnakannya ke layout Figma final dengan konsistensi desain yang ketat.",
        techStack: ["FIGMA", "UI/UX DESIGN", "PROTOTYPING"],
        demoLink: "#"
    }
};

// MODAL FUNCTIONALITY
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openProjectModal(projectId) {
    const data = projectDetailsData[projectId];
    if (!data) return;

    // Determine category label (Bahasa Indonesia)
    let categoryLabel = "PROYEK WEB";
    if (projectId === 'jastipin' || projectId === 'tiket_wisata_lembah_hijau') {
        categoryLabel = "PROYEK APLIKASI MOBILE";
    } else if (projectId === 'edukasi_buah_arvr') {
        categoryLabel = "PROYEK GAME AR/VR";
    } else if (projectId === 'seaheroes') {
        categoryLabel = "PROYEK GAME WEB";
    } else if (projectId === 'desain_game_blender') {
        categoryLabel = "PROYEK PEMODELAN 3D";
    } else if (projectId === 'uiux_figma') {
        categoryLabel = "PROYEK DESAIN UI/UX";
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
            Lihat Proyek <span class="btn-arrow">↗</span>
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
                    <span class="modal-project-category">* PROYEK UNGGULAN: ${categoryLabel}</span>
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
                        <div class="extra-detail-title"><span class="arrow-green">↗</span> Tantangan</div>
                        <p class="extra-detail-text">${data.challenge}</p>
                    </div>
                    <div class="extra-detail-block">
                        <div class="extra-detail-title"><span class="arrow-green">↗</span> Solusi</div>
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

// Refresh AOS positions once all assets/images are loaded
window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});
