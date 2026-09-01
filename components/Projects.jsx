"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Code2, Layers, Cpu, Server, ShieldCheck, FileText, CheckCircle2, X, ChevronRight, Database, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Enterprise & ERP", "Gig & Staffing", "Institutional Web", "Next.js & 3D"];

  const projects = [
    {
      id: "staff-do",
      title: "STAFF-DO — On-Demand Staffing & Gig Marketplace Platform",
      category: "Gig & Staffing",
      role: "Full Stack / Lead Backend Developer",
      summary: "Full-featured enterprise-grade on-demand staffing & gig marketplace platform connecting enterprises with temporary contract workforces.",
      tags: ["Python 3.8+", "Django 4.2 LTS", "Django REST Framework", "MySQL", "Docker", "Gunicorn (Gevent)", "Celery", "PyMuPDF", "i18n"],
      imageGradient: "from-emerald-500/10 via-teal-500/5 to-white",
      accentColor: "emerald",
      liveUrl: "https://staffdo.com",
      githubUrl: "https://github.com",
      featured: true,
      
      cvEntry: {
        projectName: "STAFF-DO — On-Demand Staffing & Gig Marketplace Platform",
        role: "Full Stack / Backend Developer",
        techStack: "Python, Django 4.2 LTS, Django REST Framework, MySQL, Docker, Gunicorn, Gevent, Celery/Async Workflows, PyMuPDF, Sentry, Nginx, i18n (Spanish/English).",
        accomplishments: [
          "Architected Multi-Tenant Platform: Built end-to-end multi-role portal supporting Candidates, Companies, Contractors, and Administrators with custom RBAC permissions and OAuth/Social authentication (django-allauth).",
          "Engineered Real-Time Gig Management Engine: Implemented shift tracking with GPS geolocation check-in/check-out, break-time monitoring, dynamic tax & insurance calculations, and automated payout balance tracking.",
          "Built Job Portal & ATS Module: Developed robust job posting and candidate pipeline workflow, allowing custom screening questions, application shortlisting, candidate matching, and email notifications.",
          "Optimized Async Server Performance: Implemented high-concurrency request handling using Gunicorn with Gevent eventlets and custom database connection pooling to handle peak traffic during gig check-ins.",
          "Automated Document & Reporting Pipeline: Integrated PyMuPDF and xhtml2pdf for automated invoice and report generation, alongside openpyxl for Excel analytics exports.",
          "Implemented Security & Audit Trails: Integrated django-auditlog for full enterprise action logging, Content Security Policy (django-csp), dynamic XSS sanitization, and localized multi-language support (i18n)."
        ],
        shortBulletPoints: [
          "Built an end-to-end gig economy & temporary staffing platform connecting enterprises with on-demand contract workers.",
          "Developed real-time geolocation check-in/check-out and break tracking algorithms to automate wage, tax, and commission accounting.",
          "Designed RESTful APIs for job listings, applicant tracking (ATS), bookmarking, candidate ratings, and multi-channel notification alerts.",
          "Configured Dockerized dev/prod deployment pipeline with Gunicorn/Gevent concurrency, Nginx reverse proxy, and Sentry monitoring."
        ],
        interviewTalkingPoints: [
          {
            topic: "Handling Concurrency & Scaling",
            quote: "In STAFF-DO, we configured Gunicorn with Gevent asynchronous workers to handle high concurrency when multiple workers check into gigs simultaneously at shift start times, optimizing DB connection management to prevent connection leaks."
          },
          {
            topic: "Complex Business Logic (Gig Accounting Engine)",
            quote: "I built the time-tracking and wage calculation module. It handles check-in/check-out timestamps, tracks break times, factors in hourly rates, calculates platform commissions and insurance deductions, and maintains dynamic balance ledgers for candidates and companies."
          },
          {
            topic: "Multi-Tenant Security",
            quote: "We designed custom authentication backends and role-based permissions (User, Company, Contractor, Admin) with audit logging across all state-changing endpoints to comply with security standards."
          }
        ]
      }
    },
    {
      id: "csap-erp",
      title: "CSAP ERP — Enterprise Resource Planning & HRMS System",
      category: "Enterprise & ERP",
      role: "Full-Stack Django / Backend Developer",
      summary: "Modular enterprise management system covering HRMS, Payroll, PyZK Biometric Hardware sync, Inventory, Branch Accounting, and fine-grained permissions.",
      tags: ["Python 3", "Django 5.x", "DRF", "Celery", "Redis", "MySQL", "PyZK (Biometrics)", "Django Guardian", "WeasyPrint", "Docker"],
      imageGradient: "from-amber-500/10 via-indigo-500/5 to-white",
      accentColor: "amber",
      liveUrl: "https://csaperp.com",
      githubUrl: "https://github.com",
      featured: true,
      
      cvEntry: {
        projectName: "CSAP Enterprise Resource Planning (ERP) System",
        role: "Full-Stack Django / Backend Developer",
        techStack: "Python 3, Django 5.x, Django REST Framework (DRF), Celery, Redis, MySQL / PostgreSQL, PyZK (Biometric Device Integration), Django Guardian (Object-Level Permissions), WeasyPrint (PDF Generation), Docker, HTML5, CSS3, JavaScript.",
        accomplishments: [
          "Architected & Developed CSAP ERP, a modular, full-suite Enterprise Resource Planning platform covering HRMS, Payroll, Biometric Attendance, Inventory, Accounting, Branch Management, and Role-Based Access Control (RBAC).",
          "Integrated Biometric Attendance Sync using pyzk library and Celery/Redis background workers to automatically ingest, sync, and process real-time punch data from physical biometric hardware across multiple branches.",
          "Engineered Payroll & Leave Management Modules supporting custom pay structures, automated salary slip generation (PDF generation using WeasyPrint), leave calculations, and punch regularization workflows.",
          "Built Fine-Grained Access Control & Security implementing Django Guardian for object-level permissions alongside custom RBAC, ensuring strict multi-tenant branch data isolation and secure user role hierarchy.",
          "Designed & Consumption-Ready REST APIs using Django REST Framework (DRF) alongside dynamic server-side rendered dashboard UI views.",
          "Optimized Database Performance & Asynchronous Jobs with Django ORM query optimization, select_related/prefetch_related indexing, and Celery task queues for long-running reporting & bulk data exports.",
          "Containerized Deployment using Docker and Docker Compose with Nginx and Gunicorn to achieve environment consistency across development and production environments."
        ],
        shortBulletPoints: [
          "Developed enterprise management system unifying HR & Payroll, Biometric Hardware Sync, Inventory, Customer/Vendor Management, and Accounting.",
          "Integrated ZKTeco physical biometric hardware via pyzk and Celery background queues to process shift punch logs across branch networks.",
          "Implemented object-level security permissions using Django Guardian for strict multi-branch data isolation.",
          "Automated monthly bulk PDF payslip generation and Excel analytics reporting using WeasyPrint and OpenPyXL."
        ],
        interviewTalkingPoints: [
          {
            topic: "Hardware - Software Integration",
            quote: "Solved real-time biometric device data syncing challenges by utilizing background Celery workers and TCP/IP protocol integration via pyzk."
          },
          {
            topic: "Scalable Permission Model",
            quote: "Implemented dual-layer authorization — Django's built-in RBAC for application features + django-guardian for fine-grained row-level data permissions (e.g., branch managers can only view/edit records belonging to their assigned branch)."
          },
          {
            topic: "Background Processing & Performance",
            quote: "Asynchronous task processing with Redis + Celery prevented request blocking during heavy reporting, email dispatches, and attendance calculations."
          }
        ]
      }
    },
    {
      id: "ieci-erp",
      title: "IECI ERP — Institutional & Examination Management System",
      category: "Enterprise & ERP",
      role: "Backend / Full Stack Engineer",
      summary: "Institutional ERP & Examination Management System supporting student lifecycles, exam scheduling, 4-tier mark evaluation pipelines, and bulk PDF hall ticket generation.",
      tags: ["Python 3.8+", "Django 4.2 LTS", "DRF", "MySQL 8.0", "Redis", "Celery", "Pusher WebSockets", "WeasyPrint", "ReportLab", "Docker"],
      imageGradient: "from-indigo-500/10 via-purple-500/5 to-white",
      accentColor: "indigo",
      liveUrl: "https://iecierp.com",
      githubUrl: "https://github.com",
      featured: true,
      
      cvEntry: {
        projectName: "IECI ERP (Institutional & Examination Management ERP System)",
        role: "Software Engineer / Backend Developer",
        techStack: "Python 3.8+, Django 4.2 LTS, Django REST Framework (DRF), MySQL 8.0, Redis, Celery, Django-Celery-Beat, Pusher WebSockets, WeasyPrint, ReportLab, PyPDF2, xhtml2pdf, Docker, Gunicorn (gevent).",
        accomplishments: [
          "Designed and developed a modular Enterprise Resource Planning (ERP) platform using Django 4.2, MySQL, and Redis to streamline examination workflows for multi-tier educational institutions.",
          "Implemented Celery background worker queues to process asynchronous long-running tasks such as bulk PDF generation (Hall Tickets, Certificates) and Excel reporting without blocking HTTP request threads.",
          "Architected a multi-component scoring engine handling Continuous Evaluation (CE), Objective, Descriptive, and Practical marks with 3-tier approval/rejection audit logging.",
          "Built a multi-tenant Role-Based Access Control (RBAC) system with custom DRF permissions and Django authentication backends supporting 7 distinct user roles.",
          "Optimized MySQL queries using Django ORM select_related/prefetch_related and dynamic indexing, significantly improving dashboard response times.",
          "Containerized the entire application ecosystem using Docker, Gunicorn (gevent workers), and Nginx for dev/prod environment parity and high-concurrency request handling."
        ],
        shortBulletPoints: [
          "Engineered institutional examination ERP digitizing student lifecycles, exam center scheduling, and multi-tier answer mark evaluations.",
          "Built decoupled Celery bulk PDF generation pipeline for rendering thousands of student hall tickets and merit certificates asynchronously.",
          "Integrated Pusher WebSockets for real-time progress updates and background task notifications on user dashboards.",
          "Enforced 7-role RBAC authorization and immutable audit trails (StudentScoreLog) to prevent grade tampering."
        ],
        interviewTalkingPoints: [
          {
            topic: "High-Volume Bulk PDF Generation",
            quote: "Solved timeout issues during mass hall ticket generation for thousands of students by decoupling rendering into Celery background tasks with chunked file operations."
          },
          {
            topic: "Concurrency & Worker Safety",
            quote: "Tuned Gunicorn gevent async workers and configured MySQL connection pooling to prevent database connection exhaustion under heavy concurrent user access during exam registration periods."
          },
          {
            topic: "Granular Auditability",
            quote: "Designed StudentScoreLog model triggers to maintain an append-only audit trail of mark modifications, preventing unauthorized grade tampering across institutional and evaluation camp boundaries."
          }
        ]
      }
    },
    {
      id: "jdt-arts",
      title: "JDT Arts & Science College Portal — Management System & CMS",
      category: "Institutional Web",
      role: "Lead Backend / Full Stack Developer",
      summary: "Full-stack web application & CMS powering college department catalogs, Student Grievance Redressal engine, Alumni directory, and GitLab CI/CD security pipelines.",
      tags: ["Python 3.11", "Django 4.2", "DRF", "MySQL", "Docker", "Nginx", "Gunicorn (gevent)", "GitLab CI/CD", "Sentry", "OpenPyXL"],
      imageGradient: "from-teal-500/10 via-emerald-500/5 to-white",
      accentColor: "teal",
      liveUrl: "https://jdtarts.codesap.com",
      githubUrl: "https://github.com",
      featured: false,
      
      cvEntry: {
        projectName: "JDT Islam College of Arts & Science Management Portal",
        role: "Lead Backend / Full Stack Developer",
        techStack: "Python 3.11, Django 4.2 LTS, Django REST Framework, MySQL, Docker, Docker Compose, Nginx, Gunicorn (gevent), GitLab CI/CD, Sentry, OpenPyXL, HTML5/CSS3/JavaScript.",
        accomplishments: [
          "Core Platform Architecture: Designed clean, modular Django apps (user, administrator, website, common) following MVC principles, enabling seamless separation of user management, web client views, and admin workflows.",
          "Dynamic CMS & Content Management: Developed administrative portals allowing non-technical staff to control homepage banners, latest news, department catalogs, course details (with dynamic seat capacity & eligibility criteria), and leadership directories.",
          "Student & Alumni Services: Engineered interactive web endpoints for Student Grievance submissions and Alumni Profile registration, complete with data validation, export capabilities (OpenPyXL), and transaction tracking.",
          "DevOps & Security Automation: Created production Docker containers (Dockerfile, docker-compose.yml) and configured a 2-stage GitLab CI pipeline (test & deploy) that runs automated security audits (--tag security) and automatically syncs updates to staging servers.",
          "Application Security & Health: Applied strict session/cookie security settings (SESSION_COOKIE_SECURE, CSRF_COOKIE_SECURE), Google reCAPTCHA verification, and Sentry exception reporting for production reliability."
        ],
        shortBulletPoints: [
          "Architected full-stack university CMS serving students, faculty, and alumni with role-based administrative CRUD controls.",
          "Implemented Student Grievance Redressal system and Alumni directory with automated email alerts and OpenPyXL data exports.",
          "Configured GitLab CI/CD pipeline running automated security audits (manage.py check --tag security) and zero-downtime SSH deployments.",
          "Integrated Sentry SDK for runtime error monitoring, Gunicorn gevent async workers, and Nginx reverse proxy."
        ],
        interviewTalkingPoints: [
          {
            topic: "Custom User Authentication Architecture",
            quote: "In this project, instead of relying solely on default Django auth, I implemented a custom UserProfile inheriting from AbstractUser to support role-based permissions (Super Admin vs Admin). I also created a token management mechanism to handle API session storage."
          },
          {
            topic: "CI/CD & Automated Security Pipelines",
            quote: "I setup a GitLab CI pipeline with two stages: test and deploy. In the test stage, it spins up a MySQL service container and executes manage.py check --tag security --deploy to block insecure code from reaching production."
          }
        ]
      }
    },
    {
      id: "chroma-3d",
      title: "Chroma 3D Interactive Visualizer",
      category: "Next.js & 3D",
      role: "Frontend & 3D Engineer",
      summary: "Interactive WebGL 3D product visualizer featuring custom shaders, lighting controls, dynamic particle fields, and smooth camera lerp transitions.",
      tags: ["Next.js", "React.js", "Three.js", "React Three Fiber", "Tailwind CSS"],
      imageGradient: "from-cyan-500/10 via-indigo-500/5 to-white",
      accentColor: "cyan",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      
      cvEntry: {
        projectName: "Chroma 3D Interactive Visualizer",
        role: "Frontend & 3D Developer",
        techStack: "Next.js, React.js, Three.js, React Three Fiber, Drei, Tailwind CSS.",
        accomplishments: [
          "Engineered interactive 3D WebGL canvas container with dual wireframe mesh and inner glowing node core.",
          "Optimized mobile render loops using dynamic device pixel ratio (DPR) scaling and WebGL fallbacks.",
          "Implemented smooth mouse lerp parallax camera movement and orbit control bounds."
        ],
        shortBulletPoints: [
          "Built interactive 3D WebGL visualizer using React Three Fiber and Three.js.",
          "Implemented smooth mouse parallax camera movement and custom shader distort materials.",
          "Optimized mobile performance with responsive canvas resolution and particle reduction."
        ],
        interviewTalkingPoints: [
          {
            topic: "3D Canvas Performance Optimization",
            quote: "I decoupled render loops and scaled particle counts based on device capability, ensuring a smooth 60fps frame rate even on mobile web browsers."
          }
        ]
      }
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#fafafa] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-gradient-indigo">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Enterprise platforms, staffing marketplaces, ERP systems, and interactive 3D applications built with Django, Next.js, and Three.js.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-slate-900 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white border border-slate-200 hover:border-indigo-300 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              {/* Header Visual Banner */}
              <div className={`w-full p-6 sm:p-8 bg-gradient-to-br ${project.imageGradient} border-b border-slate-100 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
                
                <div className="flex items-center justify-between gap-2 relative z-10 mb-6">
                  <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Production Ready
                    </span>
                  )}
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 font-medium">
                    {project.role}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 6).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                        +{project.tags.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                    >
                      <FileText className="w-4 h-4 text-indigo-400" />
                      <span>Architecture & CV Entry</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Architecture & CV Modal (Light Mode) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 overflow-y-auto space-y-6 shadow-2xl my-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  {selectedProject.category} • CV & Architecture Breakdown
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  Role: <span className="text-slate-900 font-semibold">{selectedProject.role}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Standard CV Project Entry */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Standard CV Entry (Copy & Paste Ready)
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 space-y-2">
                <p><span className="text-indigo-700 font-bold">Project Name:</span> {selectedProject.cvEntry.projectName}</p>
                <p><span className="text-indigo-700 font-bold">Role:</span> {selectedProject.cvEntry.role}</p>
                <p><span className="text-indigo-700 font-bold">Tech Stack:</span> {selectedProject.cvEntry.techStack}</p>
              </div>
            </div>

            {/* Key Contributions & Accomplishments */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Key Contributions & Technical Accomplishments
              </h4>
              <div className="space-y-2">
                {selectedProject.cvEntry.accomplishments.map((acc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{acc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Concise Resume Bullet Points */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                ATS Short Bullet Points (For CV/Resume)
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700 p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono">
                {selectedProject.cvEntry.shortBulletPoints.map((bp, idx) => (
                  <li key={idx}>{bp}</li>
                ))}
              </ul>
            </div>

            {/* Interview Talking Points */}
            {selectedProject.cvEntry.interviewTalkingPoints && (
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-mono font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-600" />
                  Interview Talking Points (How to Explain in Interviews)
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProject.cvEntry.interviewTalkingPoints.map((tp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1">
                      <p className="text-xs font-mono font-bold text-indigo-800">{tp.topic}</p>
                      <p className="text-xs text-slate-700 italic">"{tp.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Close Breakdown
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
