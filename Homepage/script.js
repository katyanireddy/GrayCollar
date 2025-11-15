// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show/hide navigation on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const heroSection = document.getElementById('hero');
    
    if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroBottom - 50) {
            nav.classList.add('nav-visible');
        } else {
            nav.classList.remove('nav-visible');
        }
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all stat and job cards
document.querySelectorAll('.stat-card, .job-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add smooth scroll behavior to page
document.documentElement.style.scrollBehavior = 'smooth';
