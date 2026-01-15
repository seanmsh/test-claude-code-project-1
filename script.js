// ================================
// FAQ ACCORDION FUNCTIONALITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ================================
    // MOBILE MENU TOGGLE
    // ================================

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    if (mobileMenuToggle && headerNav) {
        mobileMenuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // ================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default if it's not just "#"
            if (href !== '#') {
                e.preventDefault();

                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ================================
    // PRODUCT CARD INTERACTIONS
    // ================================

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const quickViewBtn = card.querySelector('.product-cta');

        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Quick view clicked for:', card.querySelector('.product-title').textContent);
                // Add your quick view modal logic here
            });
        }
    });

    // ================================
    // HEADER SCROLL EFFECT
    // ================================

    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ================================
    // CART FUNCTIONALITY (PLACEHOLDER)
    // ================================

    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            console.log('Cart clicked');
            // Add your cart modal/page logic here
        });
    }

    // ================================
    // SEARCH FUNCTIONALITY (PLACEHOLDER)
    // ================================

    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            console.log('Search clicked');
            // Add your search modal/functionality here
        });
    }

    // ================================
    // CTA BUTTON HANDLERS
    // ================================

    const ctaButtons = document.querySelectorAll('.hero-cta, .cta-primary');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.textContent.includes('Shop')) {
                console.log('Navigate to shop page');
                // Add navigation logic
            }
        });
    });

    const quoteButtons = document.querySelectorAll('.cta-button, .cta-secondary');

    quoteButtons.forEach(btn => {
        if (btn.textContent.includes('Quote')) {
            btn.addEventListener('click', function(e) {
                console.log('Open quote form');
                // Add quote form modal logic
            });
        }
    });

    // ================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe section elements for fade-in animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ================================
    // CATEGORY CARD TRACKING
    // ================================

    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const categoryName = this.querySelector('h3').textContent;
            console.log('Category clicked:', categoryName);
            // Add analytics tracking here
        });
    });
});
