// ============================================================
// SAMPLE DATA
// ============================================================
const jobsData = [
    {
        id: 1,
        title: 'Senior Sales Executive',
        company: 'TechCorp Solutions',
        location: 'Bangalore, India',
        salary: '₹45,000 - ₹60,000',
        workType: 'Full-time',
        type: 'Full-time',
        category: 'sales',
        experience: '3-5',
        description: 'We are looking for an experienced sales executive to lead our sales team and achieve quarterly targets.',
        skills: ['Sales Management', 'Negotiation', 'CRM', 'Client Management'],
        badges: ['Urgent', 'Easy Apply'],
        applied: false,
        saved: false,
        postedDate: '2025-12-05'
    },
    {
        id: 2,
        title: 'Delivery Manager',
        company: 'QuickDeliver Inc',
        location: 'Mumbai, India',
        salary: '₹30,000 - ₹40,000',
        workType: 'Full-time',
        type: 'Full-time',
        category: 'delivery',
        experience: '1-3',
        description: 'Join our growing delivery network. Manage delivery operations and ensure customer satisfaction.',
        skills: ['Logistics', 'Team Management', 'Route Planning', 'Customer Service'],
        badges: ['New'],
        applied: false,
        saved: false,
        postedDate: '2025-12-06'
    },
    {
        id: 3,
        title: 'Customer Service Officer',
        company: 'GlobalSupport Ltd',
        location: 'Remote',
        salary: '₹25,000 - ₹35,000',
        workType: 'Part-time',
        type: 'Part-time',
        category: 'office',
        experience: 'fresher',
        description: 'Support customer inquiries via chat, email, and phone. Work flexible hours from home.',
        skills: ['Customer Service', 'Communication', 'Problem Solving'],
        badges: ['Easy Apply'],
        applied: false,
        saved: false,
        postedDate: '2025-12-04'
    },
    {
        id: 4,
        title: 'Healthcare Caregiver',
        company: 'CareHub Services',
        location: 'Pune, India',
        salary: '₹20,000 - ₹30,000',
        workType: 'Full-time',
        type: 'Full-time',
        category: 'caregiver',
        experience: 'fresher',
        description: 'Provide compassionate care to senior citizens. Training provided.',
        skills: ['Patient Care', 'Compassion', 'Patience', 'First Aid'],
        badges: ['Urgent'],
        applied: false,
        saved: false,
        postedDate: '2025-12-07'
    },
    {
        id: 5,
        title: 'Sales Team Lead',
        company: 'RetailPro India',
        location: 'Delhi, India',
        salary: '₹50,000 - ₹70,000',
        workType: 'Full-time',
        type: 'Full-time',
        category: 'sales',
        experience: '3-5',
        description: 'Lead a team of sales representatives. Achieve targets and mentor junior staff.',
        skills: ['Leadership', 'Sales', 'Team Management', 'Analytics'],
        badges: ['Easy Apply', 'New'],
        applied: false,
        saved: false,
        postedDate: '2025-12-03'
    }
];

let applicationsData = [
    {
        id: 101,
        jobId: 1,
        jobTitle: 'Senior Sales Executive',
        company: 'TechCorp Solutions',
        appliedDate: '2025-12-01',
        status: 'shortlisted'
    },
    {
        id: 102,
        jobId: 3,
        jobTitle: 'Customer Service Officer',
        company: 'GlobalSupport Ltd',
        appliedDate: '2025-11-28',
        status: 'under-review'
    },
    {
        id: 103,
        jobId: 5,
        jobTitle: 'Sales Team Lead',
        company: 'RetailPro India',
        appliedDate: '2025-12-05',
        status: 'interview'
    }
];

const recentActivityData = [
    {
        type: 'applied',
        jobTitle: 'Senior Sales Executive',
        company: 'TechCorp Solutions',
        date: '2025-12-01'
    },
    {
        type: 'viewed',
        company: 'RetailPro India',
        action: 'viewed your profile',
        date: '2025-12-06'
    },
    {
        type: 'interview',
        company: 'GlobalSupport Ltd',
        action: 'Interview scheduled',
        date: '2025-12-07'
    }
];

// ============================================================
// PAGE NAVIGATION
// ============================================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        navigateTo(page);
    });
});

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // Show selected page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    // Add active class to clicked nav link
    const activeLink = document.querySelector(`[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Load page content if needed
    if (page === 'jobs') {
        loadJobsList();
    } else if (page === 'applications') {
        loadApplicationsList();
    } else if (page === 'saved') {
        loadSavedJobs();
    } else if (page === 'dashboard') {
        loadDashboard();
    }
}

// ============================================================
// DASHBOARD
// ============================================================
function loadDashboard() {
    loadJobRecommendations();
    loadRecentActivity();
}

function loadJobRecommendations() {
    const container = document.getElementById('jobRecommendations');
    container.innerHTML = '';
    
    jobsData.slice(0, 3).forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
}

function loadRecentActivity() {
    const container = document.getElementById('activityList');
    container.innerHTML = '';
    
    recentActivityData.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        let iconClass = 'fas fa-check-circle';
        let content = '';
        
        if (activity.type === 'applied') {
            iconClass = 'fas fa-file-alt';
            content = `Applied to <strong>${activity.jobTitle}</strong> at ${activity.company}`;
        } else if (activity.type === 'viewed') {
            iconClass = 'fas fa-eye';
            content = `<strong>${activity.company}</strong> ${activity.action}`;
        } else if (activity.type === 'interview') {
            iconClass = 'fas fa-calendar-check';
            content = `<strong>${activity.company}</strong> - ${activity.action}`;
        }
        
        const dateObj = new Date(activity.date);
        const formattedDate = dateObj.toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="activity-content">
                <h4>${content}</h4>
                <p>${formattedDate}</p>
            </div>
        `;
        
        container.appendChild(activityItem);
    });
}

// ============================================================
// JOB CARDS
// ============================================================
function createJobCard(job, showActions = true) {
    const card = document.createElement('div');
    card.className = 'job-card';
    
    const badgesHTML = job.badges
        .map(badge => {
            const badgeClass = badge === 'Urgent' ? 'badge-urgent' : badge === 'Easy Apply' ? 'badge-easy' : 'badge-new';
            return `<span class="badge ${badgeClass}">${badge}</span>`;
        })
        .join('');
    
    const skillsHTML = job.skills
        .map(skill => `<span class="skill-chip">${skill}</span>`)
        .join('');
    
    card.innerHTML = `
        <div class="job-header">
            <div>
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company">${job.company}</p>
            </div>
            <div class="job-badges">
                ${badgesHTML}
            </div>
        </div>
        
        <div class="job-description">
            ${job.description}
        </div>
        
        <div class="job-meta">
            <div class="job-meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${job.location}</span>
            </div>
            <div class="job-meta-item">
                <i class="fas fa-dollar-sign"></i>
                <span>${job.salary}</span>
            </div>
            <div class="job-meta-item">
                <i class="fas fa-clock"></i>
                <span>${job.workType}</span>
            </div>
        </div>
        
        <div class="job-skills">
            ${skillsHTML}
        </div>
        
        ${showActions ? `
            <div class="job-actions">
                <button class="btn-primary" onclick="openJobDetails(${job.id})">
                    <i class="fas fa-arrow-right"></i> View Details
                </button>
                <button class="btn-primary" onclick="applyJob(${job.id})">
                    <i class="fas fa-check"></i> Apply Now
                </button>
                <button class="btn-secondary" onclick="saveJob(${job.id})">
                    <i class="fas fa-bookmark"></i> Save
                </button>
            </div>
        ` : ''}
    `;
    
    return card;
}

function openJobDetails(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;
    
    const modal = document.getElementById('jobDetailModal');
    const content = document.getElementById('jobDetailContent');
    
    const skillsHTML = job.skills
        .map(skill => `<span class="skill-chip">${skill}</span>`)
        .join('');
    
    const isApplied = applicationsData.some(app => app.jobId === jobId);
    
    content.innerHTML = `
        <div class="job-detail-header">
            <h2 class="job-detail-title">${job.title}</h2>
            <p class="job-company">${job.company}</p>
        </div>
        
        <div class="job-detail-meta">
            <div>
                <strong>Location:</strong>
                <p>${job.location}</p>
            </div>
            <div>
                <strong>Salary:</strong>
                <p>${job.salary}</p>
            </div>
            <div>
                <strong>Work Type:</strong>
                <p>${job.workType}</p>
            </div>
            <div>
                <strong>Experience:</strong>
                <p>${job.experience} years</p>
            </div>
        </div>
        
        <div class="job-detail-section">
            <h4>About This Job</h4>
            <p>${job.description}</p>
        </div>
        
        <div class="job-detail-section">
            <h4>Required Skills</h4>
            <div class="job-skills">
                ${skillsHTML}
            </div>
        </div>
        
        <div class="job-detail-section">
            <h4>About the Company</h4>
            <p>${job.company} is a leading organization in their field. They offer competitive benefits and a great work culture.</p>
        </div>
        
        <div class="job-detail-actions">
            ${isApplied ? 
                `<div class="status-applied">✓ Already Applied</div>` :
                `<button class="btn-primary" onclick="applyJob(${jobId})">
                    <i class="fas fa-check"></i> Apply Now
                </button>`
            }
            <button class="btn-secondary" onclick="saveJob(${jobId})">
                <i class="fas fa-bookmark"></i> Save Job
            </button>
            <button class="btn-secondary" onclick="shareJob(${jobId})">
                <i class="fas fa-share"></i> Share
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function shareJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;
    
    const whatsappText = `Check out this job: ${job.title} at ${job.company} - ${job.location}. Salary: ${job.salary}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
}

function applyJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    const existingApp = applicationsData.find(app => app.jobId === jobId);
    
    if (existingApp) {
        alert('You have already applied for this job!');
        return;
    }
    
    const application = {
        id: Math.max(...applicationsData.map(a => a.id), 0) + 1,
        jobId: jobId,
        jobTitle: job.title,
        company: job.company,
        appliedDate: new Date().toISOString().split('T')[0],
        status: 'under-review'
    };
    
    applicationsData.push(application);
    job.applied = true;
    
    alert('Applied successfully!');
    closeModal('jobDetailModal');
    
    // Update job cards
    loadJobsList();
}

function saveJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;
    
    job.saved = !job.saved;
    alert(job.saved ? 'Job saved!' : 'Job removed from saved');
}

// ============================================================
// JOBS LIST PAGE
// ============================================================
function loadJobsList() {
    const container = document.getElementById('jobsList');
    container.innerHTML = '';
    
    jobsData.forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
}

// ============================================================
// APPLICATIONS PAGE
// ============================================================
function loadApplicationsList() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.getAttribute('data-filter');
            renderApplications(filter);
        });
    });
    
    renderApplications('all');
}

function renderApplications(filter) {
    const container = document.getElementById('applicationsList');
    container.innerHTML = '';
    
    let filtered = applicationsData;
    if (filter !== 'all') {
        filtered = applicationsData.filter(app => app.status === filter);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 2rem;">No applications found.</p>';
        return;
    }
    
    filtered.forEach(app => {
        const statusLabel = {
            'under-review': 'Under Review',
            'shortlisted': 'Shortlisted',
            'interview': 'Interview',
            'rejected': 'Rejected',
            'offered': 'Offer'
        };
        
        const card = document.createElement('div');
        card.className = 'application-card';
        
        const dateObj = new Date(app.appliedDate);
        const formattedDate = dateObj.toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        card.innerHTML = `
            <div class="application-info">
                <h3>${app.jobTitle}</h3>
                <p class="application-company">${app.company}</p>
                <p class="application-date">Applied on ${formattedDate}</p>
            </div>
            <span class="status-badge status-${app.status}">
                ${statusLabel[app.status] || app.status}
            </span>
        `;
        
        container.appendChild(card);
    });
}

// ============================================================
// SAVED JOBS PAGE
// ============================================================
function loadSavedJobs() {
    const container = document.getElementById('savedJobsList');
    container.innerHTML = '';
    
    const savedJobs = jobsData.filter(job => job.saved);
    
    if (savedJobs.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 2rem;">No saved jobs yet.</p>';
        return;
    }
    
    savedJobs.forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
}

// ============================================================
// QUICK ACTIONS
// ============================================================
document.getElementById('findJobsQuick')?.addEventListener('click', () => {
    navigateTo('jobs');
});

document.getElementById('editProfileQuick')?.addEventListener('click', () => {
    navigateTo('profile');
});

document.getElementById('updateAvailability')?.addEventListener('click', () => {
    document.getElementById('availabilityModal').classList.add('active');
});

document.getElementById('addSkillsBtn')?.addEventListener('click', () => {
    navigateTo('profile');
    const skillsSection = document.querySelector('.skills-container');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('addExperienceBtn')?.addEventListener('click', () => {
    navigateTo('profile');
    const expSection = document.querySelector('.experience-list');
    expSection?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('uploadResumeBtn')?.addEventListener('click', () => {
    navigateTo('profile');
    const resumeSection = document.querySelector('.resume-section');
    resumeSection?.scrollIntoView({ behavior: 'smooth' });
});

// ============================================================
// PROFILE PAGE
// ============================================================
function removeSkill(element) {
    element.parentElement.remove();
}

document.getElementById('addNewSkillBtn')?.addEventListener('click', () => {
    const skillName = prompt('Enter skill name:');
    if (skillName) {
        const container = document.getElementById('skillsContainer');
        const newSkill = document.createElement('span');
        newSkill.className = 'skill-tag';
        newSkill.innerHTML = `${skillName} <i class="fas fa-times" onclick="removeSkill(this)"></i>`;
        container.appendChild(newSkill);
    }
});

document.getElementById('addNewExperienceBtn')?.addEventListener('click', () => {
    const container = document.getElementById('experienceList');
    const newExperience = document.createElement('div');
    newExperience.className = 'experience-item';
    newExperience.innerHTML = `
        <h4>New Position</h4>
        <p class="company">Company Name • Work Type</p>
        <p class="dates">Start Date - End Date</p>
        <p class="description">Add description here...</p>
    `;
    container.appendChild(newExperience);
});

document.getElementById('addNewEducationBtn')?.addEventListener('click', () => {
    const container = document.getElementById('educationList');
    const newEducation = document.createElement('div');
    newEducation.className = 'education-item';
    newEducation.innerHTML = `
        <h4>Education Degree</h4>
        <p class="institution">Institute/University</p>
        <p class="year">2025</p>
    `;
    container.appendChild(newEducation);
});

document.getElementById('updateResumeBtn')?.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx';
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            alert(`Resume "${file.name}" uploaded successfully!`);
        }
    };
    fileInput.click();
});

document.getElementById('saveProfileBtn')?.addEventListener('click', () => {
    alert('Profile saved successfully!');
});

// ============================================================
// MODAL MANAGEMENT
// ============================================================
document.getElementById('closeJobModal')?.addEventListener('click', () => {
    closeModal('jobDetailModal');
});

document.getElementById('closeAvailabilityModal')?.addEventListener('click', () => {
    closeModal('availabilityModal');
});

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const jobModal = document.getElementById('jobDetailModal');
    const availModal = document.getElementById('availabilityModal');
    
    if (event.target === jobModal) {
        closeModal('jobDetailModal');
    }
    if (event.target === availModal) {
        closeModal('availabilityModal');
    }
});

// ============================================================
// AVAILABILITY
// ============================================================
function saveAvailability() {
    const selected = document.querySelector('input[name="availability"]:checked');
    if (selected) {
        alert(`Availability updated to: ${selected.value}`);
        closeModal('availabilityModal');
    }
}

// ============================================================
// FILTERS
// ============================================================
document.getElementById('applyFiltersBtn')?.addEventListener('click', () => {
    const location = document.getElementById('locationFilter').value;
    const workType = document.getElementById('workTypeFilter').value;
    const experience = document.getElementById('experienceFilter').value;
    const salary = document.getElementById('salaryFilter').value;
    const category = document.getElementById('categoryFilter').value;
    
    let filtered = jobsData;
    
    if (location) {
        filtered = filtered.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }
    if (workType) {
        filtered = filtered.filter(job => job.type.toLowerCase() === workType.toLowerCase());
    }
    if (experience) {
        filtered = filtered.filter(job => job.experience === experience);
    }
    if (category) {
        filtered = filtered.filter(job => job.category === category);
    }
    
    const container = document.getElementById('jobsList');
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 2rem;">No jobs found matching your criteria.</p>';
        return;
    }
    
    filtered.forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
});

document.getElementById('clearFiltersBtn')?.addEventListener('click', () => {
    document.getElementById('locationFilter').value = '';
    document.getElementById('workTypeFilter').value = '';
    document.getElementById('experienceFilter').value = '';
    document.getElementById('salaryFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    
    loadJobsList();
});

// Search functionality
document.getElementById('searchInput')?.addEventListener('keyup', (e) => {
    const query = e.target.value.toLowerCase();
    let filtered = jobsData;
    
    if (query) {
        filtered = jobsData.filter(job => 
            job.title.toLowerCase().includes(query) || 
            job.company.toLowerCase().includes(query)
        );
    }
    
    const container = document.getElementById('jobsList');
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 2rem;">No jobs found.</p>';
        return;
    }
    
    filtered.forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
});

// ============================================================
// LOGOUT
// ============================================================
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
        // Redirect to login page
        // window.location.href = '/login';
    }
});

// ============================================================
// USER PROFILE CLICK
// ============================================================
document.getElementById('userProfile')?.addEventListener('click', () => {
    navigateTo('profile');
});

// ============================================================
// NOTIFICATION CLICKS
// ============================================================
document.getElementById('jobMatches')?.addEventListener('click', () => {
    navigateTo('jobs');
});

document.getElementById('profileViews')?.addEventListener('click', () => {
    alert('Your profile was viewed by 2 employers today!');
});

document.getElementById('interviews')?.addEventListener('click', () => {
    navigateTo('applications');
});

document.getElementById('messages')?.addEventListener('click', () => {
    alert('You have 5 new messages from employers.');
});

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});