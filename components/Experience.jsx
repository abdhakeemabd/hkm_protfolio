"use client";

import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Full-Stack / Backend Developer",
      company: "STAFF-DO & CSAP ERP Engineering Team",
      period: "2024 - Present",
      location: "Remote",
      description: "Architecting multi-tenant gig economy marketplaces and enterprise HRMS/Payroll ERP systems using Python, Django 4.2/5.x, DRF, and Docker.",
      achievements: [
        "Architected STAFF-DO gig accounting engine handling GPS geolocation check-in/out, wage tracking, and PyMuPDF invoice generation.",
        "Integrated ZKTeco physical biometric hardware with PyZK and Celery background queues across multi-branch enterprise networks.",
        "Implemented fine-grained object-level access control using Django Guardian and django-auditlog enterprise tracking."
      ],
      technologies: ["Python 3.11", "Django 4.2/5.x", "DRF", "MySQL", "Gevent/Gunicorn", "Celery", "Docker"],
    },
    {
      role: "Backend & Systems Engineer",
      company: "IECI ERP Educational Project",
      period: "2023 - 2024",
      location: "Hybrid",
      description: "Engineered institutional examination ERP digitizing student lifecycles, exam center capacities, and multi-component score evaluations.",
      achievements: [
        "Built asynchronous bulk PDF document generation pipeline (Hall Tickets, Certificates) using WeasyPrint and Celery.",
        "Integrated Pusher WebSockets for real-time background task completion alerts on user dashboards.",
        "Enforced 7-role RBAC authorization and append-only audit trail logging (StudentScoreLog)."
      ],
      technologies: ["Django 4.2", "MySQL 8.0", "Redis", "Celery", "Pusher WebSockets", "WeasyPrint", "Docker"],
    },
    {
      role: "Lead Developer",
      company: "JDT Arts & Science College Portal",
      period: "2022 - 2023",
      location: "On-site",
      description: "Developed full-stack university CMS, Student Grievance Redressal portal, and Alumni directory.",
      achievements: [
        "Created production Docker containers and 2-stage GitLab CI/CD pipeline with automated security audits (--tag security).",
        "Integrated Sentry SDK for runtime exception monitoring, Gunicorn gevent async workers, and Nginx reverse proxy."
      ],
      technologies: ["Python", "Django", "MySQL", "GitLab CI/CD", "Nginx", "Gunicorn (gevent)", "Sentry"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional <span className="text-gradient-indigo">Experience</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            My engineering track record delivering enterprise applications, async server architectures, and full-stack solutions.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-emerald-500 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center shadow-md z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? "sm:pr-0" : "sm:pl-0"
                  }`}>
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 group shadow-sm hover:shadow-xl">
                      
                      {/* Role & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-700 mb-3">
                        {exp.company}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
