// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.getElementById('backToTop');
const quoteForm = document.getElementById('quoteForm');
const newsletterForm = document.getElementById('newsletterForm');

// ===== NAVIGATION FUNCTIONALITY =====

// Mobile navigation toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Navbar background + back-to-top visibility: handler único, otimizado com
// requestAnimationFrame e troca de classe (evita reflow/travamentos no scroll)
let scrollTicking = false;

function updateOnScroll() {
    const scrolled = window.scrollY > 100;
    if (navbar) {
        navbar.classList.toggle('scrolled', scrolled);
    }
    if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    }
    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(updateOnScroll);
        scrollTicking = true;
    }
}, { passive: true });

// Estado inicial (caso a página já carregue rolada)
updateOnScroll();

// Highlight active nav link based on current page + set active class
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLLING =====

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== BACK TO TOP BUTTON =====

// Back to top functionality (visibilidade já é controlada pelo handler de scroll acima)
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SCROLL ANIMATIONS =====

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.project-card, .service-card, .contact-item, .section-header');
    
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// ===== FORM HANDLING (Formspree AJAX) =====
document.addEventListener('DOMContentLoaded', function() {
  // Orçamento
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccess = document.getElementById('form-success');
  if (quoteForm && quoteSuccess) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(quoteForm);
      fetch(quoteForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          quoteForm.reset();
          quoteSuccess.style.display = 'block';
          void quoteSuccess.offsetWidth;
          quoteSuccess.style.animation = 'fadeInSuccess 0.7s forwards';
        } else {
          alert('Erro ao enviar. Tente novamente.');
        }
      }).catch(() => {
        alert('Erro ao enviar. Tente novamente.');
      });
    });
  }
  // Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('form-newsletter-success');
  if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(newsletterForm);
      fetch(newsletterForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          newsletterForm.reset();
          newsletterSuccess.style.display = 'block';
          void newsletterSuccess.offsetWidth;
          newsletterSuccess.style.animation = 'fadeInSuccess 0.7s forwards';
        } else {
          alert('Erro ao enviar. Tente novamente.');
        }
      }).catch(() => {
        alert('Erro ao enviar. Tente novamente.');
      });
    });
  }
});

// ===== UTILITY FUNCTIONS =====

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data submitted:', data);
            resolve();
        }, 2000);
    });
}

// Simulate newsletter subscription (replace with actual API call)
function simulateNewsletterSubscription(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Newsletter subscription:', email);
            resolve();
        }, 1000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== ENHANCED INTERACTIONS =====
// (efeito de parallax no hero e hover via JS foram removidos: causavam
// travamentos no scroll e conflitavam com as transições já definidas no CSS)

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect if needed
// Uncomment the following lines to enable typing effect
/*
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});
*/

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Enter key on focusable elements
    if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('nav-link')) {
            focusedElement.click();
        }
    }
});

// Focus management for mobile menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            // Focus first menu item when opening
            const firstMenuItem = navMenu.querySelector('.nav-link');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        }
    });
}

// ===== ERROR HANDLING =====

// Global error handler
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showNotification('An unexpected error occurred. Please refresh the page.', 'error');
});

// ===== INITIALIZATION =====

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Syver website initialized successfully!');
    
    // Add loading animation to page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== CSS ANIMATIONS (injected via JavaScript) =====

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style); 

