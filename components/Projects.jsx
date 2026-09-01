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
      role: "Frontend Developer",
      summary: "Full-featured enterprise-grade on-demand staffing & gig marketplace platform connecting enterprises with temporary contract workforces.",
      tags: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript", "Python", "Django DRF", "MySQL", "i18n"],
      imageGradient: "from-emerald-500/10 via-teal-500/5 to-white",
      accentColor: "emerald",
      liveUrl: "https://staffdo.com",
      githubUrl: "https://github.com",
      featured: true,
      
      cvEntry: {
        projectName: "STAFF-DO — On-Demand Staffing & Gig Marketplace Platform",
        role: "Frontend Developer",
        techStack: "HTML5, Bootstrap 5 (Latest), CSS3, JavaScript, Python, Django REST Framework, Docker, Sentry, i18n.",
        accomplishments: [
          "Frontend Architecture: Built responsive HTML5 and Bootstrap 5 (Latest) multi-role web portal supporting Candidates, Companies, Contractors, and Administrators.",
          "Engineered Real-Time Gig UI Workflows: Built live shift tracking interfaces featuring browser/mobile GPS geolocation check-in/check-out, break-time countdown timers, and dynamic fee breakdowns.",
          "Built Job Portal & ATS Frontend Module: Developed responsive job application pipelines, candidate screening forms, interactive applicant shortlisting drawers, and notification toasts.",
          "Cross-Browser & Responsive Optimization: Ensured 100% mobile responsiveness and cross-browser compatibility across iOS, Android, Chrome, and Safari.",
          "Automated Document Preview & Multi-Language Support: Built interactive PDF invoice previews and integrated full i18n localization support across candidate and employer dashboards."
        ],
        shortBulletPoints: [
          "Developed responsive HTML5 and Bootstrap 5 (Latest) frontend components for an enterprise gig marketplace.",
          "Designed real-time GPS check-in/check-out UI components and interactive shift management dashboards.",
          "Architected reusable Bootstrap template components with multi-language (i18n) localization.",
          "Optimized mobile frontend responsiveness and cross-browser compatibility."
        ],
        interviewTalkingPoints: [
          {
            topic: "Frontend UI Architecture",
            quote: "In STAFF-DO, I engineered the responsive user interfaces using HTML5 and Bootstrap 5 (Latest) to ensure seamless usability across candidate mobile phones and company desktop portals."
          },
          {
            topic: "Real-Time Geolocation Workflows",
            quote: "I designed and implemented the geolocation check-in interface that captures real-time worker coordinates and renders live shift status indicators."
          }
        ]
      }
    },
    {
      id: "csap-erp",
      title: "CSAP ERP — Enterprise Resource Planning & HRMS System",
      category: "Enterprise & ERP",
      role: "Senior Frontend Developer",
      summary: "Modular enterprise management system covering HRMS, Payroll, Biometric Hardware Sync UI, Inventory, Branch Accounting, and fine-grained permissions.",
      tags: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript", "Python", "Django 5.x", "MySQL", "Docker"],
      imageGradient: "from-amber-500/10 via-indigo-500/5 to-white",
      accentColor: "amber",
      liveUrl: "https://csaperp.com",
      githubUrl: "https://github.com",
      featured: true,
      
      cvEntry: {
        projectName: "CSAP Enterprise Resource Planning (ERP) System",
        role: "Senior Frontend Developer",
        techStack: "HTML5, Bootstrap 5 (Latest), CSS3, JavaScript (ES6+), jQuery / AJAX, Python, Django 5.x, Django REST Framework (DRF), Docker.",
        accomplishments: [
          "Designed & Built CSAP ERP Frontend: Developed UI/UX design and responsive Bootstrap 5 (Latest) component architecture for a modular ERP platform encompassing HRMS, Payroll, Biometric Attendance, Inventory, and Branch Accounting.",
          "Biometric Hardware Sync Interface: Created real-time attendance monitor dashboard widgets that render live employee punch-in events streamed from physical biometric devices.",
          "Engineered Interactive Payslip & HR Workflows: Built dynamic payroll calculators, leave approval drawers, interactive salary slip PDF renderers, and punch regularization forms.",
          "Fine-Grained Role Permissions UI: Designed conditional UI rendering based on object-level permission models, restricting feature access dynamically for branch managers versus system administrators."
        ],
        shortBulletPoints: [
          "Engineered responsive HTML5 and Bootstrap 5 (Latest) UI components for enterprise HRMS platform unifying Payroll, Biometric Sync, and Branch Accounting.",
          "Built real-time biometric punch stream UI widgets and dynamic payroll calculation tools.",
          "Designed role-based conditional UI components for multi-tenant branch management compliance."
        ],
        interviewTalkingPoints: [
          {
            topic: "Responsive ERP Dashboards",
            quote: "I designed clean, high-density HTML5 and Bootstrap 5 (Latest) dashboards that allow branch managers to review attendance logs, process payroll, and generate payslips effortlessly."
          }
        ]
      }
    },
    {
      id: "ieci-erp",
      title: "IECI ERP — Institutional & Examination Management System",
      category: "Enterprise & ERP",
      role: "Frontend Developer",
      summary: "Institutional ERP & Examination Management System supporting student lifecycles, exam scheduling, 4-tier mark evaluation pipelines, and bulk PDF hall ticket generation.",
      tags: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript", "AJAX", "Python", "Django 4.2", "MySQL"],
      imageGradient: "from-indigo-500/10 via-purple-500/5 to-white",
      accentColor: "indigo",
      liveUrl: "https://iecierp.com",
      githubUrl: "https://github.com",
      featured: true,
      
      cvEntry: {
        projectName: "IECI ERP (Institutional & Examination Management ERP System)",
        role: "Frontend Developer",
        techStack: "HTML5, Bootstrap 5 (Latest), CSS3, JavaScript, AJAX, Python 3.8+, Django 4.2 LTS, DRF, MySQL.",
        accomplishments: [
          "Frontend UI Architecture: Designed responsive HTML5 and Bootstrap 5 (Latest) frontend interfaces for examination workflows serving multi-tier educational institutions.",
          "Batch Task Progress Alerts UI: Integrated progress indicator bars and toast alerts when mass hall ticket PDF generation completes.",
          "Evaluation Score Engine UI: Built dynamic multi-component score entry forms for Continuous Evaluation, Objective, Descriptive, and Practical marks with inline AJAX validation.",
          "High-Density Data Grid Optimization: Implemented optimized HTML tabular rendering for student rosters, improving data entry speed for faculty members."
        ],
        shortBulletPoints: [
          "Engineered institutional examination ERP frontend digitizing student lifecycles and exam evaluation workflows using HTML5 and Bootstrap 5 (Latest).",
          "Integrated task progress indicators and alert notifications for administrative evaluation camps.",
          "Built high-density score entry tables for rapid grade evaluations by faculty members."
        ],
        interviewTalkingPoints: [
          {
            topic: "Tabular Data Entry Optimization",
            quote: "I structured HTML5 tables with custom keyboard navigation so evaluation staff could rapidly enter thousands of student marks without mouse friction."
          }
        ]
      }
    },
    {
      id: "jdt-arts",
      title: "JDT Arts & Science College Portal — Management System & CMS",
      category: "Institutional Web",
      role: "Frontend Developer",
      summary: "Full-stack web application & CMS powering college department catalogs, Student Grievance Redressal engine, Alumni directory, and GitLab CI/CD pipelines.",
      tags: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript", "Python", "Django", "MySQL", "GitLab CI/CD"],
      imageGradient: "from-teal-500/10 via-emerald-500/5 to-white",
      accentColor: "teal",
      liveUrl: "https://jdtarts.codesap.com",
      githubUrl: "https://github.com",
      featured: false,
      
      cvEntry: {
        projectName: "JDT Islam College of Arts & Science Management Portal",
        role: "Frontend Developer",
        techStack: "HTML5, Bootstrap 5 (Latest), CSS3, JavaScript, Python, Django 4.2 LTS, DRF, MySQL.",
        accomplishments: [
          "Frontend UI Design: Built intuitive CMS admin interfaces using HTML5 and Bootstrap 5 (Latest) allowing non-technical college staff to update homepage content, course seat capacities, and department news.",
          "Interactive Student & Alumni Forms: Developed responsive web forms for Student Grievance submission and Alumni registration with dynamic field validation.",
          "Frontend Build & Performance Optimization: Configured asset minification and image compression to ensure crisp, rapid rendering on low-bandwidth mobile networks."
        ],
        shortBulletPoints: [
          "Engineered HTML5 and Bootstrap 5 (Latest) frontend components of university web CMS serving students, faculty, and alumni.",
          "Built interactive Student Grievance forms and administrative content management interfaces.",
          "Optimized mobile frontend performance and cross-browser compatibility."
        ],
        interviewTalkingPoints: [
          {
            topic: "CMS User Experience",
            quote: "Designed ultra-simple Bootstrap 5 admin workflows for non-technical college staff, allowing easy news, banner, and department catalog updates."
          }
        ]
      }
    },
    {
      id: "chroma-3d",
      title: "Chroma 3D Interactive Visualizer",
      category: "Next.js & 3D",
      role: "Frontend & 3D Developer",
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
            Featured Projects
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
