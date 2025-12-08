GrayCollar Platform - Route Map & Pages Structure
Complete URL/Page Routing System
🏠 Public Pages (No Authentication Required)

1. Homepage ✅

Route: / or /index.html

File: index.html

Purpose: Landing page with hero, features, stats, CTA

Features:

Navigation bar with Home, About, Features links

Hero section promoting both employee & employer

Features section (4 features)

Stats section showing platform metrics

CTA section

Footer with links

CTAs: Sign up as Employee, Sign up as Employer

2. Login Page ✅

Route: /login or /login.html

File: login.html

Purpose: User login (both employee & employer)

Features:

Email & password input

Remember me checkbox

Forgot password link

Google login option

Side panel with benefits

Signup links for both user types

Handles: Authentication for both user types

3. Employee Signup ✅

Route: /signup-employee or /signup-employee.html

File: signup-employee.html

Purpose: Employee registration (3-step form)

Steps:

Step 1 - Personal Info: Name, Email, Phone, Age, City

Step 2 - Professional: Occupation, Experience, Skills, Work Type, Preferred Location

Step 3 - Security: Password, Confirm Password, Terms & Newsletter

Features:

Tab-based navigation

Skill tags input

Password strength indicator

Checkbox validation

Redirects To: Login page after signup

4. Employer Signup ✅

Route: /signup-employer or /signup-employer.html

File: signup-employer.html

Purpose: Employer/Company registration (3-step form)

Steps:

Step 1 - Company Info: Company name, Industry, Size, Website, Description, Location

Step 2 - Contact: HR Name, Email, Phone, Job Title, Authorization confirmation

Step 3 - Security: Password, Confirm Password, Terms & Newsletter

Features:

Tab-based navigation

Company information validation

Redirects To: Login page after signup

👨‍💼 Employee Dashboard Pages (Authenticated)

5. Employee Dashboard (Main) ✅

Route: /employee/dashboard or /employee-dashboard.html

File: professional.html (redirects)

Purpose: Main employee hub

Features:

Welcome greeting

Profile completion progress bar

Job recommendations

Recent activity feed

Navigation sidebar

Top notification bar

Accessible Via: Clicking "Dashboard" in sidebar

6. Find Jobs Page

Route: /employee/jobs or within professional.html

File: professional.html (page: #jobs-page)

Purpose: Browse and search job listings

Features:

Search bar (by title/company)

Filters: Location, Work Type, Experience, Salary, Category

Job cards display with metadata

Apply & Save buttons

Pagination (future)

Accessible Via: Sidebar "Find Jobs" link

7. Job Details Modal

Route: Popup from jobs page

Within: professional.html

Purpose: View complete job details

Features:

Full job description

Salary, location, work type

Required skills

Company info

Apply/Save buttons

Accessible Via: Clicking "View Details" on job card

8. My Applications Page

Route: /employee/applications or within professional.html

File: professional.html (page: #applications-page)

Purpose: Track application status

Features:

Tabbed filter: All, Under Review, Shortlisted, Interview, Rejected

Application cards with:

Job title & company

Application date

Current status badge

View details button

Withdraw application (future)

Accessible Via: Sidebar "Applications" link

9. Saved Jobs Page

Route: /employee/saved-jobs or within professional.html

File: professional.html (page: #saved-page)

Purpose: View bookmarked jobs

Features:

List of saved jobs

Apply Now button

Remove from saved

Same job card layout as Find Jobs

Accessible Via: Sidebar "Saved Jobs" link

10. Employee Profile Page ✅

Route: /employee/profile or within professional.html

File: professional.html (page: #profile-page)

Purpose: Manage employee profile

Sections:

Personal Info: Name, Age, City, Email, Phone

Skills: Add/Remove skills (tags)

Experience: Add/Remove work experience

Education: Add/Remove education records

Resume: Upload/Update PDF

Work Preferences: Salary, Work Type, Locations

Features:

Inline editing

Save changes button

Profile completion progress

Accessible Via: Sidebar "Profile" link or profile avatar click

11. Support/Help Page

Route: /employee/support or within professional.html

File: professional.html (page: #support-page)

Purpose: FAQs and support contact

Features:

Accordion FAQs

Contact support button

Help resources

Accessible Via: Sidebar "Support" link

👔 Employer Dashboard Pages (Authenticated)

12. Employer Dashboard (Main) ✅

Route: /employer/dashboard or /employer-dashboard.html

File: employer.html (redirects)

Purpose: Main employer hub

Features:

4 overview stat cards: Active Jobs, Total Applicants, Shortlisted, Interviews

Quick action buttons

Recent activity feed

Active jobs summary

Navigation sidebar

Accessible Via: Clicking "Dashboard" in sidebar

13. My Jobs Page ✅

Route: /employer/jobs or within employer.html

File: employer.html (page: #jobs-page)

Purpose: Manage all job postings

Features:

Table view with columns:

Job Title

Status (Active/Closed/Draft)

Applicants count

Posted date

Actions per job: View Applicants, Edit, Close/Reopen

Filter by status

Pagination (future)

Accessible Via: Sidebar "My Jobs" link

14. Post New Job Page ✅

Route: /employer/jobs/new or within employer.html

File: employer.html (page: #post-job-page)

Purpose: Create new job posting

Sections:

Job Details: Title, Category, Location, Type, Salary, Hours, Openings, Experience

Job Description: Full description textarea

Requirements: Skill tags input

Features:

Multi-section form

Publish & Save as Draft buttons

Skill tags with add/remove

Accessible Via: Sidebar "Post New Job" link or top "Post a Job" button

15. Applicants Page ✅

Route: /employer/applicants or within employer.html

File: employer.html (page: #applicants-page)

Purpose: Review job applicants

Features:

Filters: By Job, By Status (New, Shortlisted, Rejected, Interview)

Applicant cards with:

Name, age, location, experience

Skills tags

Application date

Actions: View Profile, Shortlist, Reject

Applicant detail modal popup

Accessible Via: Sidebar "Applicants" link or "View Applicants" from jobs

16. Applicant Detail Modal

Route: Popup from applicants page

Within: employer.html

Purpose: View complete applicant profile

Features:

Full candidate info

Contact details

Skills & experience

Application status

Actions: Shortlist, Schedule Interview, Reject

Accessible Via: Clicking "View Profile" on applicant card

17. Shortlisted Candidates Page ✅

Route: /employer/shortlisted or within employer.html

File: employer.html (page: #shortlisted-page)

Purpose: View shortlisted candidates

Features:

Filter by job

Candidate cards with key info

Actions: View Profile, Schedule Interview, Mark as Hired

Same card layout as applicants

Accessible Via: Sidebar "Shortlisted" link

18. Company Profile Page ✅

Route: /employer/profile or within employer.html

File: employer.html (page: #company-page)

Purpose: Manage company information

Sections:

Company Info: Name, Industry, Size, Website, Email, Phone

About: Company description

Office Location: Address, City, State, Postal Code

Features:

Form-based editing

Save changes button

Accessible Via: Sidebar "Company Profile" link or account dropdown

19. Support/Help Page (Employer)

Route: /employer/support or within employer.html

File: employer.html (page: #support-page)

Purpose: FAQs and support

Features:

Employer-specific FAQs

Contact support

Blog/resources

Accessible Via: Sidebar "Support" link

📊 Complete Routing Summary
text
PUBLIC PAGES
├── / ..................... Homepage (index.html)
├── /login ................ Login (login.html)
├── /signup-employee ...... Employee Signup (signup-employee.html)
└── /signup-employer ...... Employer Signup (signup-employer.html)

EMPLOYEE PAGES (Authenticated)
└── /employee
    ├── /dashboard ........ Main Dashboard (professional.html)
    ├── /jobs ............ Find Jobs (professional.html#jobs-page)
    ├── /applications .... My Applications (professional.html#applications-page)
    ├── /saved-jobs ...... Saved Jobs (professional.html#saved-page)
    ├── /profile ........ My Profile (professional.html#profile-page)
    └── /support ........ Support (professional.html#support-page)

EMPLOYER PAGES (Authenticated)
└── /employer
    ├── /dashboard ...... Main Dashboard (employer.html)
    ├── /jobs .......... My Jobs (employer.html#jobs-page)
    ├── /jobs/new ...... Post New Job (employer.html#post-job-page)
    ├── /applicants .... View Applicants (employer.html#applicants-page)
    ├── /shortlisted ... Shortlisted (employer.html#shortlisted-page)
    ├── /profile ...... Company Profile (employer.html#company-page)
    └── /support ...... Support (employer.html#support-page)
🔐 Authentication Flow
User Visits → index.html (Homepage)

Click Sign Up → signup-employee.html OR signup-employer.html

Complete Registration → Redirects to login.html

Login → Sets session in localStorage

Redirect to Dashboard → employee-dashboard.html OR employer-dashboard.html

Session Active → Can access all dashboard pages

Logout → Clears session, redirects to homepage

📁 File Structure
text
GrayCollar/
├── index.html ...................... Homepage
├── login.html ...................... Login
├── signup-employee.html ............ Employee signup
├── signup-employer.html ............ Employer signup
├── employee-dashboard.html ......... Employee dashboard entry
├── employer-dashboard.html ......... Employer dashboard entry
├── professional.html .............. Employee dashboard (main)
├── professional.css ............... Employee dashboard styles
├── professional.js ................ Employee dashboard logic
├── employer.html .................. Employer dashboard (main)
├── employer.css ................... Employer dashboard styles
├── employer.js .................... Employer dashboard logic
├── styles-common.css .............. Shared styles (auth, homepage)
├── scripts-common.js .............. Shared scripts
├── fonts/ ......................... Font files (if custom)
└── images/ ........................ Images & icons
🎯 Key Features by Page
Page	Features	Actions
Homepage	Hero, Features, Stats, CTA	Browse, Sign Up
Login	Email/Password, Social, Remember	Authenticate
Emp Signup	3-Step form, Skills, Experience	Register
Emp Dashboard	Overview, Recommendations, Activity	Apply, Save, View
Find Jobs	Search, Filters, Job Cards	Apply, View, Save
Applications	Status Tabs, Application List	Track, Withdraw
Emp Profile	Personal, Skills, Experience, Resume	Edit, Save
Emp Dashboard	Stats, Quick Actions, Activity	Post, View, Edit
My Jobs	Job Table, Status Management	Edit, Close, View
Post Job	Multi-section Form, Skills	Publish, Draft
Applicants	Filter, Cards, Modals	Shortlist, Reject, View
Shortlisted	Candidate List, Actions	Interview, Hire
Emp Profile	Company Info, Location	Edit, Save
✅ Implementation Checklist
 Homepage

 Login Page

 Employee Signup

 Employer Signup

 Employee Dashboard

 Employer Dashboard

 Common Styles & Scripts

 Routes in backend (when using backend)

 Authentication API integration

 Database integration

 Email verification

 Password reset

 Profile picture uploads

 Resume uploads

 Job search API integration

 Notification system

 Chat/Messaging system

This structure provides a complete, organized routing system for the GrayCollar platform!