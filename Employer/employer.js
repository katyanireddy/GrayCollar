// ============================================================
// SAMPLE DATA
// ============================================================
const jobsDataEmp = [
    {
        id: 1,
        title: 'Senior Sales Executive',
        category: 'sales',
        location: 'Bangalore, India',
        salary: '₹45,000 - ₹60,000',
        type: 'Full-time',
        hours: '9 AM - 6 PM',
        applicants: 12,
        shortlisted: 3,
        status: 'active',
        postedDate: '2025-12-01',
        description: 'We are looking for an experienced sales executive to lead our sales team and achieve quarterly targets.',
        skills: ['Sales Management', 'Negotiation', 'CRM'],
        experience: '3-5',
        openings: 2
    },
    {
        id: 2,
        title: 'Delivery Manager',
        category: 'delivery',
        location: 'Mumbai, India',
        salary: '₹30,000 - ₹40,000',
        type: 'Full-time',
        hours: '8 AM - 5 PM',
        applicants: 8,
        shortlisted: 2,
        status: 'active',
        postedDate: '2025-12-02',
        description: 'Join our growing delivery network. Manage delivery operations and ensure customer satisfaction.',
        skills: ['Logistics', 'Team Management', 'Route Planning'],
        experience: '1-3',
        openings: 3
    },
    {
        id: 3,
        title: 'Customer Service Officer',
        category: 'office',
        location: 'Remote',
        salary: '₹25,000 - ₹35,000',
        type: 'Part-time',
        hours: 'Flexible',
        applicants: 15,
        shortlisted: 4,
        status: 'active',
        postedDate: '2025-12-03',
        description: 'Support customer inquiries via chat, email, and phone. Work flexible hours from home.',
        skills: ['Customer Service', 'Communication'],
        experience: 'fresher',
        openings: 5
    },
    {
        id: 4,
        title: 'Healthcare Caregiver',
        category: 'caregiver',
        location: 'Pune, India',
        salary: '₹20,000 - ₹30,000',
        type: 'Full-time',
        hours: '10 AM - 6 PM',
        applicants: 6,
        shortlisted: 1,
        status: 'closed',
        postedDate: '2025-11-25',
        description: 'Provide compassionate care to senior citizens. Training provided.',
        skills: ['Patient Care', 'Compassion'],
        experience: 'fresher',
        openings: 2
    },
    {
        id: 5,
        title: 'Sales Team Lead',
        category: 'sales',
        location: 'Delhi, India',
        salary: '₹50,000 - ₹70,000',
        type: 'Full-time',
        hours: '9 AM - 6 PM',
        applicants: 6,
        shortlisted: 2,
        status: 'draft',
        postedDate: '2025-12-07',
        description: 'Lead a team of sales representatives. Achieve targets and mentor junior staff.',
        skills: ['Leadership', 'Sales', 'Analytics'],
        experience: '3-5',
        openings: 1
    }
];

const applicantsDataEmp = [
    {
        id: 101,
        name: 'Amit Patel',
        jobId: 1,
        jobTitle: 'Senior Sales Executive',
        age: 45,
        location: 'Bangalore',
        experience: '8 years',
        skills: ['Sales', 'CRM', 'Client Management'],
        status: 'new',
        appliedDate: '2025-12-07',
        phone: '+91 98765 43210',
        email: 'amit@example.com'
    },
    {
        id: 102,
        name: 'Priya Sharma',
        jobId: 1,
        jobTitle: 'Senior Sales Executive',
        age: 38,
        location: 'Bangalore',
        experience: '6 years',
        skills: ['Sales', 'Negotiation', 'Presentations'],
        status: 'shortlisted',
        appliedDate: '2025-12-05',
        phone: '+91 87654 32109',
        email: 'priya@example.com'
    },
    {
        id: 103,
        name: 'Rahul Verma',
        jobId: 2,
        jobTitle: 'Delivery Manager',
        age: 35,
        location: 'Mumbai',
        experience: '5 years',
        skills: ['Logistics', 'Management', 'Operations'],
        status: 'shortlisted',
        appliedDate: '2025-12-06',
        phone: '+91 76543 21098',
        email: 'rahul@example.com'
    },
    {
        id: 104,
        name: 'Meera Singh',
        jobId: 3,
        jobTitle: 'Customer Service Officer',
        age: 28,
        location: 'Delhi',
        experience: '2 years',
        skills: ['Customer Service', 'Communication', 'Problem Solving'],
        status: 'new',
        appliedDate: '2025-12-08',
        phone: '+91 65432 10987',
        email: 'meera@example.com'
    },
    {
        id: 105,
        name: 'Vikram Kumar',
        jobId: 3,
        jobTitle: 'Customer Service Officer',
        age: 32,
        location: 'Remote',
        experience: '3 years',
        skills: ['Chat Support', 'Email Support', 'Problem Handling'],
        status: 'rejected',
        appliedDate: '2025-12-04',
        phone: '+91 54321 09876',
        email: 'vikram@example.com'
    }
];

const activityDataEmp = [
    {
        type: 'application',
        text: '5 new applicants for Senior Sales Executive',
        time: '2 hours ago'
    },
    {
        type: 'shortlist',
        text: 'You shortlisted Priya Sharma for Delivery Manager',
        time: '1 hour ago'
    },
    {
        type: 'rejection',
        text: 'You rejected 2 candidates',
        time: '30 minutes ago'
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
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    const activeLink = document.querySelector(`[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Load page content if needed
    if (page === 'dashboard') {
        loadDashboard();
    } else if (page === 'jobs') {
        loadJobsTable();
    } else if (page === 'applicants') {
        loadApplicants();
    } else if (page === 'shortlisted') {
        loadShortlisted();
    }
}

// ============================================================
// DASHBOARD
// ============================================================
function loadDashboard() {
    loadRecentActivity();
    loadActiveJobsSummary();
}

function loadRecentActivity() {
    const container = document.getElementById('activityFeed');
    container.innerHTML = '';
    
    activityDataEmp.forEach(activity => {
        const actItem = document.createElement('div');
        actItem.className = 'activity-item-emp';
        actItem.innerHTML = `
            <div class="activity-text">
                <h4>${activity.text}</h4>
                <p>${activity.time}</p>
            </div>
            <div class="activity-time">${activity.time}</div>
        `;
        container.appendChild(actItem);
    });
}

function loadActiveJobsSummary() {
    const container = document.getElementById('jobsSummaryList');
    container.innerHTML = '';
    
    const activeJobs = jobsDataEmp.filter(job => job.status === 'active').slice(0, 3);
    
    activeJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-summary-card';
        card.innerHTML = `
            <div class="job-summary-info">
                <h3>${job.title}</h3>
                <p>${job.location} • ${job.type}</p>
            </div>
            <div class="job-summary-stats">
                <div class="stat-badge">
                    <strong>${job.applicants}</strong>
                    <small>Applicants</small>
                </div>
                <div class="stat-badge">
                    <strong>${job.shortlisted}</strong>
                    <small>Shortlisted</small>
                </div>
                <button class="action-btn-small" onclick="viewJobApplicants(${job.id})">View</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============================================================
// JOBS TABLE
// ============================================================
function loadJobsTable() {
    const tbody = document.getElementById('jobsTableBody');
    tbody.innerHTML = '';
    
    jobsDataEmp.forEach(job => {
        const row = document.createElement('tr');
        
        let statusClass = `status-${job.status}`;
        let statusText = job.status.charAt(0).toUpperCase() + job.status.slice(1);
        
        row.innerHTML = `
            <td><strong>${job.title}</strong></td>
            <td><span class="job-status-badge ${statusClass}">${statusText}</span></td>
            <td>${job.applicants}</td>
            <td>${formatDate(job.postedDate)}</td>
            <td>
                <div class="actions-group">
                    <button class="action-link" onclick="viewJobApplicants(${job.id})">Applicants</button>
                    <button class="action-link" onclick="editJob(${job.id})">Edit</button>
                    <button class="action-link" onclick="toggleJobStatus(${job.id})">${job.status === 'active' ? 'Close' : 'Reopen'}</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

function editJob(jobId) {
    alert('Edit job functionality would open the job form with pre-filled data.');
}

function toggleJobStatus(jobId) {
    const job = jobsDataEmp.find(j => j.id === jobId);
    if (job) {
        job.status = job.status === 'active' ? 'closed' : 'active';
        alert(`Job ${job.status === 'active' ? 'reopened' : 'closed'} successfully!`);
        loadJobsTable();
    }
}

// ============================================================
// APPLICANTS PAGE
// ============================================================
function loadApplicants() {
    loadJobFilterOptions('jobFilterApplicants');
    renderApplicants();
    
    document.getElementById('jobFilterApplicants')?.addEventListener('change', renderApplicants);
    document.getElementById('statusFilterApplicants')?.addEventListener('change', renderApplicants);
}

function renderApplicants() {
    const container = document.getElementById('applicantsList');
    const jobFilter = document.getElementById('jobFilterApplicants')?.value || '';
    const statusFilter = document.getElementById('statusFilterApplicants')?.value || '';
    
    let filtered = applicantsDataEmp;
    
    if (jobFilter) {
        filtered = filtered.filter(app => app.jobId === parseInt(jobFilter));
    }
    
    if (statusFilter) {
        filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 2rem;">No applicants found.</p>';
        return;
    }
    
    filtered.forEach(applicant => {
        const card = document.createElement('div');
        card.className = 'applicant-card';
        
        const skillsHTML = applicant.skills
            .map(skill => `<span class="skill-chip-emp">${skill}</span>`)
            .join('');
        
        card.innerHTML = `
            <div class="applicant-info">
                <div class="applicant-name">${applicant.name}</div>
                <div class="applicant-meta">
                    <p><strong>Age:</strong> ${applicant.age} | <strong>Location:</strong> ${applicant.location}</p>
                    <p><strong>Experience:</strong> ${applicant.experience}</p>
                    <p><strong>Applied for:</strong> ${applicant.jobTitle}</p>
                </div>
                <div class="applicant-skills">
                    ${skillsHTML}
                </div>
            </div>
            <div class="applicant-actions">
                <button class="action-btn-small" onclick="openApplicantDetail(${applicant.id})">View Profile</button>
                <button class="action-btn-small" onclick="shortlistApplicant(${applicant.id})">Shortlist</button>
                <button class="action-btn-small reject" onclick="rejectApplicant(${applicant.id})">Reject</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function shortlistApplicant(applicantId) {
    const applicant = applicantsDataEmp.find(a => a.id === applicantId);
    if (applicant) {
        applicant.status = 'shortlisted';
        const job = jobsDataEmp.find(j => j.id === applicant.jobId);
        if (job) {
            job.shortlisted++;
            job.applicants--;
        }
        alert('Applicant shortlisted successfully!');
        renderApplicants();
    }
}

function rejectApplicant(applicantId) {
    const applicant = applicantsDataEmp.find(a => a.id === applicantId);
    if (applicant) {
        applicant.status = 'rejected';
        alert('Applicant rejected!');
        renderApplicants();
    }
}

function openApplicantDetail(applicantId) {
    const applicant = applicantsDataEmp.find(a => a.id === applicantId);
    if (!applicant) return;
    
    const modal = document.getElementById('applicantDetailModal');
    const content = document.getElementById('applicantDetailContent');
    
    const skillsHTML = applicant.skills
        .map(skill => `<span class="skill-chip-emp">${skill}</span>`)
        .join('');
    
    content.innerHTML = `
        <div class="applicant-detail-header">
            <h2 class="applicant-detail-name">${applicant.name}</h2>
            <p><strong>Applied for:</strong> ${applicant.jobTitle}</p>
        </div>
        
        <div class="applicant-detail-info">
            <div>
                <strong>Age:</strong>
                <p>${applicant.age}</p>
            </div>
            <div>
                <strong>Location:</strong>
                <p>${applicant.location}</p>
            </div>
            <div>
                <strong>Experience:</strong>
                <p>${applicant.experience}</p>
            </div>
            <div>
                <strong>Applied Date:</strong>
                <p>${formatDate(applicant.appliedDate)}</p>
            </div>
        </div>
        
        <div class="detail-section">
            <h4>Skills</h4>
            <div class="applicant-skills">
                ${skillsHTML}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>Contact Information</h4>
            <p><strong>Phone:</strong> ${applicant.phone}</p>
            <p><strong>Email:</strong> ${applicant.email}</p>
        </div>
        
        <div class="detail-section">
            <h4>Application Status</h4>
            <p><strong>${applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}</strong></p>
        </div>
        
        <div class="detail-actions">
            <button class="btn-primary" onclick="shortlistApplicant(${applicantId})">
                <i class="fas fa-star"></i> Shortlist
            </button>
            <button class="btn-secondary" onclick="scheduleInterview(${applicantId})">
                <i class="fas fa-calendar"></i> Schedule Interview
            </button>
            <button class="btn-secondary reject" onclick="rejectApplicant(${applicantId})">
                <i class="fas fa-times"></i> Reject
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function scheduleInterview(applicantId) {
    alert('Interview scheduling feature would open a date/time picker.');
}

// ============================================================
// SHORTLISTED PAGE
// ============================================================
function loadShortlisted() {
    loadJobFilterOptions('jobFilterShortlisted');
    renderShortlisted();
    
    document.getElementById('jobFilterShortlisted')?.addEventListener('change', renderShortlisted);
}

function renderShortlisted() {
    const container = document.getElementById('shortlistedList');
    const jobFilter = document.getElementById('jobFilterShortlisted')?.value || '';
    
    let filtered = applicantsDataEmp.filter(a => a.status === 'shortlisted');
    
    if (jobFilter) {
        filtered = filtered.filter(app => app.jobId === parseInt(jobFilter));
    }
    
    container.innerHTML = '';
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-gray); padding: 2rem;">No shortlisted candidates.</p>';
        return;
    }
    
    filtered.forEach(applicant => {
        const card = document.createElement('div');
        card.className = 'applicant-card';
        
        const skillsHTML = applicant.skills
            .map(skill => `<span class="skill-chip-emp">${skill}</span>`)
            .join('');
        
        card.innerHTML = `
            <div class="applicant-info">
                <div class="applicant-name">${applicant.name}</div>
                <div class="applicant-meta">
                    <p><strong>Location:</strong> ${applicant.location} | <strong>Experience:</strong> ${applicant.experience}</p>
                    <p><strong>Job:</strong> ${applicant.jobTitle}</p>
                </div>
                <div class="applicant-skills">
                    ${skillsHTML}
                </div>
            </div>
            <div class="applicant-actions">
                <button class="action-btn-small" onclick="openApplicantDetail(${applicant.id})">View Profile</button>
                <button class="action-btn-small" onclick="scheduleInterview(${applicant.id})">Schedule Interview</button>
                <button class="action-btn-small" onclick="markAsHired(${applicant.id})">Mark as Hired</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function markAsHired(applicantId) {
    const applicant = applicantsDataEmp.find(a => a.id === applicantId);
    if (applicant) {
        alert(`${applicant.name} marked as hired!`);
        renderShortlisted();
    }
}

// ============================================================
// POST JOB PAGE
// ============================================================
document.getElementById('jobForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Job posted successfully!');
    document.getElementById('jobForm').reset();
});

document.getElementById('saveDraftBtn')?.addEventListener('click', () => {
    alert('Job saved as draft!');
});

document.getElementById('skillInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const input = e.target;
        const skill = input.value.trim();
        
        if (skill) {
            const tagsContainer = document.getElementById('skillsTags');
            const tag = document.createElement('span');
            tag.className = 'skill-tag-emp';
            tag.innerHTML = `${skill} <span class="remove-skill" onclick="this.parentElement.remove()">×</span>`;
            tagsContainer.appendChild(tag);
            input.value = '';
        }
    }
});

// ============================================================
// COMPANY PROFILE
// ============================================================
document.getElementById('saveCompanyBtn')?.addEventListener('click', () => {
    alert('Company profile updated successfully!');
});

// ============================================================
// QUICK ACTIONS
// ============================================================
document.getElementById('postNewJobQuick')?.addEventListener('click', () => {
    navigateTo('post-job');
});

document.getElementById('viewAllJobsQuick')?.addEventListener('click', () => {
    navigateTo('jobs');
});

document.getElementById('browseApplicantsQuick')?.addEventListener('click', () => {
    navigateTo('applicants');
});

document.getElementById('postJobBtn')?.addEventListener('click', () => {
    navigateTo('post-job');
});

// ============================================================
// MODALS
// ============================================================
document.getElementById('closeApplicantModal')?.addEventListener('click', () => {
    document.getElementById('applicantDetailModal').classList.remove('active');
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('applicantDetailModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// ============================================================
// ACCOUNT DROPDOWN
// ============================================================
document.getElementById('accountBtn')?.addEventListener('click', () => {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('active');
});

document.getElementById('settingsLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('company');
});

document.getElementById('logoutLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
    }
});

// ============================================================
// NOTIFICATION CLICKS
// ============================================================
document.getElementById('newApplications')?.addEventListener('click', () => {
    navigateTo('applicants');
});

document.getElementById('messages')?.addEventListener('click', () => {
    alert('You have 5 new messages from candidates.');
});

// ============================================================
// HELPER FUNCTION
// ============================================================
function loadJobFilterOptions(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    // Clear existing options except the first one
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    jobsDataEmp.forEach(job => {
        const option = document.createElement('option');
        option.value = job.id;
        option.textContent = job.title;
        select.appendChild(option);
    });
}

function viewJobApplicants(jobId) {
    navigateTo('applicants');
    setTimeout(() => {
        const select = document.getElementById('jobFilterApplicants');
        if (select) {
            select.value = jobId;
            renderApplicants();
        }
    }, 100);
}

// ============================================================
// LOGOUT
// ============================================================
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
        // window.location.href = '/login';
    }
});

// ============================================================
// INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});