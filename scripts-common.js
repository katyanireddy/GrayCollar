// ============================================================
// COMMON JAVASCRIPT FOR ALL PUBLIC PAGES
// ============================================================

// Smooth scroll behavior is handled by CSS

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Add any menu close logic here if you add mobile menu
    });
});

// ============================================================
// ROUTE/PAGE MAPPING
// ============================================================
// This file helps manage routes throughout the application
// URL Structure:
// / – Homepage (index.html)
// /login – Login page (login.html)
// /signup-employee – Employee signup (signup-employee.html)
// /signup-employer – Employer signup (signup-employer.html)
// /employee/dashboard – Employee dashboard (professional.html)
// /employee/jobs – Jobs list (professional.html#jobs-page)
// /employee/applications – Applications (professional.html#applications-page)
// /employee/profile – Profile (professional.html#profile-page)
// /employer/dashboard – Employer dashboard (employer.html)
// /employer/jobs – Jobs management (employer.html#jobs-page)
// /employer/jobs/new – Post new job (employer.html#post-job-page)
// /employer/applicants – Applicants list (employer.html#applicants-page)
// /employer/profile – Company profile (employer.html#company-page)

// ============================================================
// NAVIGATION HELPERS
// ============================================================

// Redirect user based on type
function redirectToDashboard(userType) {
    if (userType === 'employee') {
        window.location.href = 'employee-dashboard.html';
    } else if (userType === 'employer') {
        window.location.href = 'employer-dashboard.html';
    }
}

// Employer dashboard redirect helper
function redirectToEmployerDashboard() {
    window.location.href = 'employer-dashboard.html';
}

// ============================================================
// LOCAL STORAGE HELPERS (For Session Management)
// ============================================================

// Store user session
function setUserSession(userType, userData) {
    localStorage.setItem('userType', userType);
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Get user session
function getUserSession() {
    const userType = localStorage.getItem('userType');
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    return { userType, userData };
}

// Clear user session (logout)
function clearUserSession() {
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
    window.location.href = 'index.html';
}

// Check if user is authenticated
function isAuthenticated() {
    return localStorage.getItem('userType') !== null;
}

// ============================================================
// FORM VALIDATION
// ============================================================

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password strength
function isStrongPassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password);
}

// Validate phone number (India format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// ============================================================
// EVENT LISTENERS FOR SHARED FUNCTIONALITY
// ============================================================

// Logo click to go home
document.querySelectorAll('.nav-brand').forEach(brand => {
    brand.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

// Handle window resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle any responsive adjustments needed
    }, 250);
});

// ============================================================
// PAGE LOAD CHECKS
// ============================================================

// Check authentication on pages that require it
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    
    // Protected pages that require authentication
    const protectedPages = [
        'professional.html',
        'employer.html',
        'employee-dashboard.html',
        'employer-dashboard.html'
    ];
    
    const isProtectedPage = protectedPages.some(page => currentPage.includes(page));
    
    if (isProtectedPage && !isAuthenticated()) {
        // Redirect to login if not authenticated
        // Uncomment for production:
        // window.location.href = 'login.html';
    }
});

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

// Format date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Format currency (INR)
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

// Debounce function for search inputs
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ============================================================
// DEMO AUTHENTICATION (For Development)
// ============================================================

// Demo login (remove in production)
function demoLogin(userType) {
    const demoUsers = {
        employee: {
            id: 1,
            name: 'Rajesh Kumar',
            email: 'rajesh@example.com',
            userType: 'employee'
        },
        employer: {
            id: 2,
            name: 'TechCorp Solutions',
            email: 'hr@techcorp.com',
            userType: 'employer'
        }
    };
    
    setUserSession(userType, demoUsers[userType]);
    redirectToDashboard(userType);
}

// ============================================================
// CONSOLE MESSAGES FOR DEVELOPMENT
// ============================================================

console.log('%cGrayCollar Platform', 'font-size: 20px; font-weight: bold; color: #D4945F;');
console.log('%cRoute Structure:', 'font-size: 14px; font-weight: bold;');
console.log(`
    / – Homepage
    /login – Login
    /signup-employee – Employee Signup
    /signup-employer – Employer Signup
    /employee/dashboard – Employee Dashboard
    /employee/jobs – Find Jobs
    /employee/applications – Applications
    /employee/profile – Profile
    /employer/dashboard – Employer Dashboard
    /employer/jobs – My Jobs
    /employer/jobs/new – Post Job
    /employer/applicants – Applicants
    /employer/profile – Company Profile
`);