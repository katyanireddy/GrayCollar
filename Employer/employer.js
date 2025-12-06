// Sample Talent Data
const talentProfiles = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        title: 'IT Project Manager',
        experience: 28,
        skills: ['Project Management', 'Leadership', 'Agile', 'Team Management'],
        location: 'Bangalore'
    },
    {
        id: 2,
        name: 'Priya Sharma',
        title: 'Finance Consultant',
        experience: 22,
        skills: ['Financial Planning', 'Budget Management', 'Analysis', 'Audit'],
        location: 'Mumbai'
    },
    {
        id: 3,
        name: 'Amit Patel',
        title: 'Business Strategist',
        experience: 25,
        skills: ['Strategy', 'Business Development', 'Market Analysis', 'Mentoring'],
        location: 'Delhi'
    },
    {
        id: 4,
        name: 'Meera Desai',
        title: 'HR Director',
        experience: 20,
        skills: ['HR Management', 'Recruitment', 'Training', 'Organizational Development'],
        location: 'Pune'
    },
    {
        id: 5,
        name: 'Vikram Singh',
        title: 'Operations Manager',
        experience: 26,
        skills: ['Operations', 'Process Optimization', 'Supply Chain', 'Quality'],
        location: 'Bangalore'
    }
];

// Sample Jobs
const myJobs = [
    { id: 1, title: 'Senior Consultant', applications: 12, status: 'active', posted: '5 days ago' },
    { id: 2, title: 'Mentor - IT Leadership', applications: 8, status: 'active', posted: '2 days ago' },
    { id: 3, title: 'Finance Manager', applications: 5, status: 'closed', posted: '10 days ago' }
];

// Sample Candidates
const candidates = [
    { id: 1, name: 'Rajesh Kumar', appliedFor: 'Senior Consultant', status: 'pending', date: '2 days ago' },
    { id: 2, name: 'Priya Sharma', appliedFor: 'Senior Consultant', status: 'reviewed', date: '1 day ago' },
    { id: 3, name: 'Amit Patel', appliedFor: 'Mentor - IT Leadership', status: 'pending', date: '3 days ago' }
];

let allTalent = [...talentProfiles];

function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    // Show selected page
    document.getElementById(page + '-page').style.display = 'block';
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');

    if (page === 'browse-talent') {
        renderTalent();
    } else if (page === 'my-jobs') {
        renderMyJobs();
    } else if (page === 'candidates') {
        renderCandidates();
    }
}

function renderTalent() {
    const talentList = document.getElementById('talentList');
    talentList.innerHTML = allTalent.map(talent => `
        <div class="talent-card" onclick="openCandidateModal(${talent.id})">
            <div class="talent-header">
                <div class="talent-avatar">${talent.name.charAt(0)}${talent.name.charAt(talent.name.lastIndexOf(' ') + 1)}</div>
                <div>
                    <div class="talent-name">${talent.name}</div>
                    <div class="talent-title">${talent.title}</div>
                </div>
            </div>
            <div class="talent-skills">
                ${talent.skills.slice(0, 3).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="talent-experience">
                <strong>${talent.experience}+ years</strong> experience • ${talent.location}
            </div>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();">View Profile</button>
        </div>
    `).join('');
}

function renderMyJobs() {
    const jobsList = document.getElementById('myJobsList');
    jobsList.innerHTML = myJobs.map(job => `
        <div class="job-card">
            <div class="job-info">
                <div class="job-title">${job.title}</div>
                <div class="job-meta">
                    <span>📨 ${job.applications} applications</span>
                    <span>📅 Posted ${job.posted}</span>
                </div>
            </div>
            <div class="job-actions">
                <span class="status-badge status-${job.status}">${job.status.charAt(0).toUpperCase() + job.status.slice(1)}</span>
            </div>
        </div>
    `).join('');
}

function renderCandidates() {
    const candidatesList = document.getElementById('candidatesList');
    candidatesList.innerHTML = candidates.map(candidate => `
        <div class="candidate-card" onclick="openCandidateModal(${candidate.id})">
            <div class="candidate-info">
                <div class="candidate-name">${candidate.name}</div>
                <div class="candidate-role">Applied for: ${candidate.appliedFor} • ${candidate.date}</div>
            </div>
            <div class="job-actions">
                <span class="status-badge status-${candidate.status}">${candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}</span>
            </div>
        </div>
    `).join('');
}

function submitJob(event) {
    event.preventDefault();
    alert('✅ Job posted successfully! Start receiving applications.');
    event.target.reset();
}

function filterTalent() {
    const search = document.getElementById('talentSearch').value.toLowerCase();
    const experience = document.getElementById('experienceFilter').value;

    allTalent = talentProfiles.filter(talent => {
        const matchesSearch = talent.name.toLowerCase().includes(search) || 
                            talent.skills.some(skill => skill.toLowerCase().includes(search));
        const matchesExperience = !experience || talent.experience >= parseInt(experience);
        return matchesSearch && matchesExperience;
    });

    renderTalent();
}

function openCandidateModal(talentId) {
    const talent = talentProfiles.find(t => t.id === talentId);
    if (talent) {
        const details = document.getElementById('candidateDetails');
        details.innerHTML = `
            <div>
                <h3>${talent.name}</h3>
                <p style="color: var(--color-text-secondary); margin: 8px 0 16px;">${talent.title}</p>
                <div style="background: #fff3e0; padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                    <strong>${talent.experience}+ years</strong> experience • ${talent.location}
                </div>
                <h4 style="margin: 16px 0 8px;">Skills</h4>
                <div class="talent-skills">
                    ${talent.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <h4 style="margin: 16px 0 8px;">About</h4>
                <p>Experienced professional with strong background in ${talent.title.toLowerCase()}. Known for delivering results and mentoring junior team members.</p>
            </div>
        `;
        document.getElementById('candidateModal').classList.add('active');
    }
}

function closeCandidateModal() {
    document.getElementById('candidateModal').classList.remove('active');
}

function approveCandidate() {
    alert('✅ Candidate approved! You can now schedule an interview.');
    closeCandidateModal();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
    }
}

// Initial render
renderTalent();