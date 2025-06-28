// Loading Screen
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', function() {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Get header height to offset scroll position
            const headerHeight = document.querySelector('.header').offsetHeight;
            // Add an additional 20px offset for better visibility
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            // Scroll to the target with offset
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Removed Header Background on Scroll effect as requested

// Gallery Lightbox (Simple implementation)
function openLightbox(title) {
    alert(`Opening lightbox for: ${title}\n\nIn a full implementation, this would open a detailed view of the photograph with navigation controls.`);
}

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    alert(`Thank you for your message!\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nWe'll get back to you soon.`);

    // Reset form
    this.reset();
});

// Removed Intersection Observer for Animations and Parallax Effect as requested

// Dynamic Gallery Item Background Colors
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    item.style.background = colors[index % colors.length];
});

// Removed Typewriter Effect for Hero Title as requested
