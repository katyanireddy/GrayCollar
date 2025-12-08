// ============================================================
// PROFESSIONAL DASHBOARD JAVASCRIPT
// ============================================================

// Static Data (Simulating Backend)
const jobsData = [
    {
        id: 1,
        title: 'Senior Sales Executive',
        company: 'TechCorp Solutions',
        location: 'Bangalore, India',
        salary: '₹45,000 - ₹60,000',
        type: 'Full-time',
        experience: '3-5 Years',
        description: 'Leading sales team and achieving quarterly targets. We\'re looking for an experienced professional...',
        skills: ['Sales', 'Negotiation', 'CRM']
    },
    {
        id: 2,
        title: 'Delivery Manager',
        company: 'LogisticsHub',
        location: 'Mumbai, India',
        salary: '₹30,000 - ₹40,000',
        type: 'Full-time',
        experience: '1-3 Years',
        description: 'Manage delivery operations and ensure customer satisfaction. Join our growing network of professionals...',
        skills: ['Logistics', 'Management', 'Operations']
    },
    {
        id: 3,
        title: 'Customer Service Officer',
        company: 'CustomerFirst Inc',
        location: 'Remote',
        salary: '₹25,000 - ₹35,000',
        type: 'Part-time',
        experience: 'Fresher',
        description: 'Support customer inquiries via chat, email, and phone. Work flexible hours from home...',
        skills: ['Customer Service', 'Communication', 'Problem Solving']
    },
    {
        id: 5,
        title: 'Sales Team Lead',
        company: 'EnterpriseInc',
        location: 'Delhi, India',
        salary: '₹50,000 - ₹70,000',
        type: 'Full-time',
        experience: '3-5 Years',
        description: 'Lead a team of sales representatives. Achieve targets and mentor junior staff...',
        skills: ['Leadership', 'Sales', 'Analytics']
    }
];

const applicationsData = [
    {
        id: 1,
        jobId: 1,
        jobTitle: 'Senior Sales Executive',
        company: 'TechCorp Solutions',
        status: 'shortlisted',
        appliedDate: 'Dec 5, 2025',
        responseDate: 'Dec 7, 2025',
        experience: '3-5 Years'
    },
    {
        id: 2,
        jobId: 2,
        jobTitle: 'Delivery Manager',
        company: 'LogisticsHub',
        status: 'review',
        appliedDate: 'Dec 3, 2025',
        responseDate: 'Pending',
        experience: '1-3 Years'
    },
    {
        id: 3,
        jobId: 3,
        jobTitle: 'Customer Service Officer',
        company: 'CustomerFirst Inc',
        status: 'interview',
        appliedDate: 'Nov 28, 2025',
        responseDate: 'Nov 30, 2025',
        interviewDate: 'Dec 10, 2025',
        experience: 'Fresher'
    }
];

let savedJobs = [1, 3];  // Job IDs that are saved

// ============================================================
// PAGE NAVIGATION
// ============================================================

function switchPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    const pageElement = document.getElementById(`${pageName}-page`);
    if (pageElement) {
        pageElement.style.display = 'block';
    }

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[onclick="switchPage('${pageName}')"]`)?.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// ============================================================
// ACCOUNT MENU
// ============================================================

function toggleAccountMenu() {
    const menu = document.getElementById('accountMenu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.account-dropdown');
    if (!dropdown.contains(e.target)) {
        const menu = document.getElementById('accountMenu');
        menu.classList.remove('active');
    }
});

// ============================================================
// JOB ACTIONS
// ============================================================

function applyJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        showToast(`✓ Applied to "${job.title}" at ${job.company}!`, 'success');
        // In a real app, this would send data to backend
    }
}

function saveJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        if (!savedJobs.includes(jobId)) {
            savedJobs.push(jobId);
            showToast(`♥ Saved "${job.title}"!`, 'success');
        }
    }
}

function unsaveJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        savedJobs = savedJobs.filter(id => id !== jobId);
        showToast(`Removed from saved jobs`, 'info');
    }
}

// ============================================================
// APPLICATION FILTERING
// ============================================================

function filterApplications(status) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter applications (in a real app, would filter the displayed list)
    console.log(`Filtering applications by status: ${status}`);
}

// ============================================================
// FILTER TOGGLE
// ============================================================

function toggleFilters() {
    const panel = document.getElementById('filtersPanel');
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'flex';
    } else {
        panel.style.display = 'none';
    }
}

// ============================================================
// LOGOUT
// ============================================================

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear session
        clearUserSession();
        // Redirect to homepage
        window.location.href = 'index.html';
    }
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    
    container.appendChild(toast);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ============================================================
// RESPONSIVE SIDEBAR
// ============================================================

let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
}

// Close sidebar when clicking on a nav item (mobile)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('active');
            sidebarOpen = false;
        }
    });
});

// ============================================================
// FORM INTERACTIONS
// ============================================================

// Search functionality
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        console.log('Searching for:', query);
        // In a real app, would filter jobs based on search
    }, 300));
}

// Debounce helper (already in scripts-common.js, but adding for reference)
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Set first nav item as active
    document.querySelector('.nav-item').classList.add('active');

    // Log for debugging
    console.log('Employee Dashboard Loaded');
    console.log('Available Jobs:', jobsData.length);
    console.log('Your Applications:', applicationsData.length);
    console.log('Saved Jobs:', savedJobs.length);
});

// ============================================================
// REUSABLE COMPONENT TEMPLATES
// These are the reusable components used throughout the dashboard
// ============================================================

/*
JOB CARD COMPONENT (Grid Variant):
<div class="job-card">
    <div class="job-card-header">
        <h3>Job Title</h3>
        <button class="btn-icon" onclick="saveJob(id)">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    <div class="job-card-meta">
        <span class="company">Company Name</span>
        <span class="location"><i class="fas fa-map-marker-alt"></i> Location</span>
    </div>
    <p class="job-description">Description...</p>
    <div class="job-card-footer">
        <div class="job-details">
            <span class="badge salary">Salary</span>
            <span class="badge type">Type</span>
            <span class="badge experience">Experience</span>
        </div>
        <button class="btn-primary btn-sm" onclick="applyJob(id)">Apply Now</button>
    </div>
</div>

JOB CARD COMPONENT (List Variant):
<div class="job-card job-card-list">
    <div class="job-card-header">
        <div>
            <h3>Job Title</h3>
            <span class="company">Company Name</span>
        </div>
        <button class="btn-icon" onclick="saveJob(id)">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    <div class="job-card-meta-list">
        <span><i class="fas fa-map-marker-alt"></i> Location</span>
        <span><i class="fas fa-briefcase"></i> Type</span>
        <span><i class="fas fa-rupee-sign"></i> Salary</span>
    </div>
    <p class="job-description">Description...</p>
    <div class="job-card-footer-list">
        <div class="skills-tags">
            <span class="tag">Skill 1</span>
            <span class="tag">Skill 2</span>
        </div>
        <button class="btn-primary btn-sm" onclick="applyJob(id)">View & Apply</button>
    </div>
</div>

STAT CARD COMPONENT:
<div class="stat-card">
    <div class="stat-icon applications">
        <i class="fas fa-paper-plane"></i>
    </div>
    <div class="stat-content">
        <p class="stat-label">Label</p>
        <p class="stat-value">12</p>
    </div>
</div>

APPLICATION CARD COMPONENT:
<div class="application-card">
    <div class="app-header">
        <div class="app-info">
            <h3>Job Title</h3>
            <p class="company">Company Name</p>
        </div>
        <span class="status-badge shortlisted">
            <i class="fas fa-star"></i> Status
        </span>
    </div>
    <div class="app-meta">
        <span><strong>Applied:</strong> Date</span>
        <span><strong>Response:</strong> Date</span>
        <span><strong>Experience:</strong> Level</span>
    </div>
    <div class="app-actions">
        <a href="#" class="link-text">View Job Details</a>
        <button class="btn-secondary btn-sm">Action</button>
    </div>
</div>

ACTIVITY ITEM COMPONENT:
<div class="activity-item">
    <div class="activity-icon success">
        <i class="fas fa-check"></i>
    </div>
    <div class="activity-content">
        <p><strong>Action</strong> description</p>
        <span class="activity-time">Time ago</span>
    </div>
</div>

PROFILE SECTION COMPONENT:
<section class="section">
    <div class="profile-section">
        <div class="section-header-inline">
            <h3>Section Title</h3>
            <button class="btn-link">Edit</button>
        </div>
        <!-- Content here -->
    </div>
</section>
*/

// ============================================================
// DATA FETCHING PATTERNS (For Future Backend Integration)
// ============================================================

/*
// Example of how to fetch from backend when ready:

async function fetchJobs() {
    try {
        const response = await fetch('/api/jobs');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        showToast('Error loading jobs', 'error');
    }
}

async function applyToJob(jobId) {
    try {
        const response = await fetch(`/api/jobs/${jobId}/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jobId: jobId,
                userId: getCurrentUserId()
            })
        });
        const data = await response.json();
        if (data.success) {
            showToast('Applied successfully!', 'success');
        }
    } catch (error) {
        console.error('Error applying to job:', error);
        showToast('Error applying to job', 'error');
    }
}

// Usage:
// const jobs = await fetchJobs();
// jobsData = jobs;
// renderJobs();
*/