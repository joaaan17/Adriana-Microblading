/* ============================================
   MAIN JAVASCRIPT - Adriana Tortosa Microblading
   Navegación, Animaciones, Formulario
============================================= */

'use strict';

// ========== DOM ELEMENTS ==========
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const currentYear = document.getElementById('current-year');

// ========== MOBILE NAVIGATION ==========
function openMenu() {
    navMenu.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navMenu.classList.remove('show');
    document.body.style.overflow = '';
}

// Toggle menu
if (navToggle) {
    navToggle.addEventListener('click', openMenu);
}

if (navClose) {
    navClose.addEventListener('click', closeMenu);
}

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
        closeMenu();
    }
});

// ========== HEADER SCROLL EFFECT ==========
let lastScroll = 0;

function handleScroll() {
    const currentScroll = window.scrollY;
    
    // Add/remove scrolled class
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== BACK TO TOP ==========
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== PORTFOLIO SWIPER ==========
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.portfolio-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    centeredSlides: false,
                },
            },
        });
    }
}

// ========== AOS INITIALIZATION ==========
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: 'mobile', // Disable on mobile for better performance
        });
    }
}

// ========== FORM VALIDATION & SUBMISSION ==========
function initForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        const errors = validateForm(data);
        
        if (errors.length > 0) {
            showFormError(errors[0]);
            return;
        }
        
        // Get submit button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <span>Enviando...</span>
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32">
                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `;
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        try {
            // For now, we'll simulate a successful submission
            // In production, you would send to Formspree, EmailJS, etc.
            await simulateSubmission();
            
            // Show success message
            showFormSuccess();
            this.reset();
            
        } catch (error) {
            showFormError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Por favor, introduce tu nombre completo.');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Por favor, introduce un email válido.');
    }
    
    if (data.phone && !isValidPhone(data.phone)) {
        errors.push('Por favor, introduce un teléfono válido.');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
    return phoneRegex.test(phone);
}

function simulateSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}

function showFormSuccess() {
    const notification = createNotification('success', '¡Mensaje enviado correctamente! Te contactaré pronto.');
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function showFormError(message) {
    const notification = createNotification('error', message);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function createNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success' 
                    ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
                    : '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                }
            </svg>
            <span>${message}</span>
        </div>
        <button class="notification__close" onclick="this.parentElement.remove()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;
    
    // Add notification styles dynamically if not already present
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 16px 24px;
                background: #1a1a1a;
                color: white;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                z-index: 9999;
                opacity: 0;
                transition: all 0.3s ease;
            }
            .notification.show {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            .notification--success { border-left: 4px solid #22c55e; }
            .notification--error { border-left: 4px solid #ef4444; }
            .notification__content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification--success svg { color: #22c55e; }
            .notification--error svg { color: #ef4444; }
            .notification__close {
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                padding: 4px;
                transition: color 0.2s;
            }
            .notification__close:hover { color: white; }
        `;
        document.head.appendChild(styles);
    }
    
    return notification;
}

// ========== CURRENT YEAR ==========
function setCurrentYear() {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

// ========== LAZY LOADING IMAGES ==========
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ========== PARALLAX EFFECT (Optional) ==========
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            
            hero.style.backgroundPositionY = `${rate}px`;
        }, { passive: true });
    }
}

// ========== INITIALIZE ALL ==========
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initSwiper();
    initForm();
    setCurrentYear();
    initLazyLoading();
    initParallax();
    handleScroll(); // Initial check
    highlightNavOnScroll(); // Initial check
});

// ========== HANDLE PAGE VISIBILITY ==========
document.addEventListener('visibilitychange', () => {
    // Pause animations when tab is not visible
    if (document.hidden) {
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c✨ Adriana Tortosa Microblading', 'font-size: 24px; font-weight: bold; color: #B8860B;');
console.log('%cDesarrollado con 💖', 'font-size: 14px; color: #666;');

