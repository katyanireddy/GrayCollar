// Sample Jobs Data
const jobs = [
    {
        id: 1,
        title: 'Senior Consultant',
        company: 'TechCorp India',
        category: 'Consulting',
        type: 'Part-time',
        salary: '₹50,000 - ₹80,000/month',
        description: 'We are looking for an experienced senior consultant with 20+ years of industry expertise to guide our team.',
        requirements: ['20+ years experience', 'Leadership skills', 'Strategic planning'],
        posted: '2 days ago'
    },
    {
        id: 2,
        title: 'Mentor - IT Leadership',
        company: 'StartupHub',
        category: 'Mentoring',
        type: 'Flexible',
        salary: '₹30,000 - ₹50,000/month',
        description: 'Join our mentorship program and guide young entrepreneurs and tech leaders.',
        requirements: ['15+ years IT experience', 'Mentoring ability', 'Communication skills'],
        posted: '1 day ago'
    },
    {
        id: 3,
        title: 'Finance Manager',
        company: 'Global Finance Ltd',
        category: 'Consulting',
        type: 'Contract',
        salary: '₹60,000 - ₹90,000/month',
        description: 'Experienced finance manager needed for project-based work.',
        requirements: ['18+ years in finance', 'Budget management', 'Analysis'],
        posted: '3 days ago'
    },
    {
        id: 4,
        title: 'Business Development Advisor',
        company: 'Growth Ventures',
        category: 'Consulting',
        type: 'Part-time',
        salary: '₹40,000 - ₹70,000/month',
        description: 'Guide our team on market expansion and business strategies.',
        requirements: ['15+ years in business', 'Market knowledge', 'Strategy'],
        posted: '4 days ago'
    }
];

// Sample Applications
const applications = [
    { id: 1, jobTitle: 'Senior Consultant', company: 'TechCorp India', status: 'applied', appliedDate: '2 days ago' },
    { id: 2, jobTitle: 'Mentor - IT Leadership', company: 'StartupHub', status: 'interviewed', appliedDate: '1 day ago' },
    { id: 3, jobTitle: 'Finance Manager', company: 'Global Finance Ltd', status: 'applied', appliedDate: '3 days ago' }
];

let currentJobId = null;
let allJobs = [...jobs];

function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    // Show selected page
    document.getElementById(page + '-page').style.display = 'block';
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');

    if (page === 'jobs') {
        renderJobs();
    } else if (page === 'applications') {
        renderApplications();
    }
}

function renderJobs() {
    const jobsList = document.getElementById('jobsList');
    jobsList.innerHTML = allJobs.map(job => `
        <div class="job-card" onclick="openJobModal(${job.id})">
            <div class="job-info">
                <div class="job-title">${job.title}</div>
                <div class="job-company">${job.company}</div>
                <div class="job-tags">
                    <span class="tag">${job.category}</span>
                    <span class="tag">${job.type}</span>
                </div>
                <div class="job-meta">
                    <span>💰 ${job.salary}</span>
                    <span>⏰ ${job.posted}</span>
                </div>
            </div>
            <div class="job-actions">
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); applyJob(${job.id})">Apply</button>
            </div>
        </div>
    `).join('');
}

function renderApplications() {
    const appsList = document.getElementById('applicationsList');
    appsList.innerHTML = applications.map(app => `
        <div class="job-card">
            <div class="job-info">
                <div class="job-title">${app.jobTitle}</div>
                <div class="job-company">${app.company}</div>
                <div class="job-meta">
                    <span>Applied ${app.appliedDate}</span>
                </div>
            </div>
            <div class="job-actions">
                <span class="status-badge status-${app.status}">${app.status.charAt(0).toUpperCase() + app.status.slice(1)}</span>
            </div>
        </div>
    `).join('');
}

function openJobModal(jobId) {
    const job = allJobs.find(j => j.id === jobId);
    if (job) {
        currentJobId = jobId;
        const details = document.getElementById('jobDetails');
        details.innerHTML = `
            <div>
                <h3>${job.title}</h3>
                <p style="color: var(--color-text-secondary); margin: 8px 0 16px;">${job.company}</p>
                <div style="background: var(--color-primary-light); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                    <strong>${job.salary}</strong> • ${job.type}
                </div>
                <h4 style="margin: 16px 0 8px;">About this role</h4>
                <p>${job.description}</p>
                <h4 style="margin: 16px 0 8px;">Requirements</h4>
                <ul style="margin-left: 20px;">
                    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
        `;
        document.getElementById('jobModal').classList.add('active');
    }
}

function closeModal() {
    document.getElementById('jobModal').classList.remove('active');
}

function applyJob(jobId = currentJobId) {
    alert('✅ Application submitted successfully! We will notify you of updates.');
    closeModal();
}

function filterJobs() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    allJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(search) || 
                            job.company.toLowerCase().includes(search);
        const matchesCategory = !category || job.category === category;
        return matchesSearch && matchesCategory;
    });

    renderJobs();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
    }
}

// Initial render
renderJobs();