// Main JavaScript for EZZE Concept

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle Functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target) && mainNav.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
    // Check if we're on the index page and apply special header class
    const isIndexPage = window.location.pathname === '/' || 
                       window.location.pathname === '/index.html' || 
                       window.location.pathname.endsWith('/index.html');
    
    const header = document.querySelector('.header');
    if (isIndexPage && header) {
        header.classList.add('home-header');
    }
    // Video playback rate
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.playbackRate = 0.7;
        heroVideo.addEventListener('error', function() {
            document.querySelector('.hero-section').style.backgroundImage = 'url("path/to/fallback-image.jpg")';
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields (Name, Email, Message)');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Form validation
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation could be added here
            
            // For demo purposes, show a success message
            alert('Search submitted successfully! This would normally perform a search.');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links with hash
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handle scroll events
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.header');
        const logoImg = document.querySelector('.logo-img');
        const isIndexPage = window.location.pathname === '/' || 
                           window.location.pathname === '/index.html' || 
                           window.location.pathname.endsWith('/index.html');
        
        // Only apply scroll animations on index.html
        if (isIndexPage) {
            // Toggle header class on scroll for smooth background transition
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
                // Change logo to dark version when scrolled
                if (logoImg && logoImg.getAttribute('src') !== 'assets/logos/4(1)(1).png') {
                    logoImg.setAttribute('src', 'assets/logos/4(1)(1).png');
                }
            } else {
                header.classList.remove('scrolled');
                // Change logo to light/white version when at top
                if (logoImg && logoImg.getAttribute('src') !== 'assets/logos/1(1)(1).png') {
                    logoImg.setAttribute('src', 'assets/logos/1(1)(1).png');
                }
            }
        }
        
        // Check which section is in view for active menu
        function checkActiveSection() {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const menuItem = document.querySelector(`.navbar-nav a[href*='${sectionId}']`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.navbar-nav a').forEach(item => {
                        item.classList.remove('active');
                    });
                    menuItem?.classList.add('active');
                }
            });
        }
        checkActiveSection();
    });
    
    // Navbar animation code removed
    
    // Stats counter animation for About section
    const statNumbers = document.querySelectorAll('.stat-number');
    const aboutSection = document.getElementById('about');
    
    if (aboutSection && statNumbers.length > 0) {
        let counted = false;
        
        window.addEventListener('scroll', function() {
            if (isElementInViewport(aboutSection) && !counted) {
                counted = true;
                
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    let count = 0;
                    const duration = 2000; // 2 seconds
                    const increment = Math.ceil(target / (duration / 30)); // Update every 30ms
                    
                    const counter = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            stat.textContent = target;
                            clearInterval(counter);
                        } else {
                            stat.textContent = count;
                        }
                    }, 30);
                });
            }
        });
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
});