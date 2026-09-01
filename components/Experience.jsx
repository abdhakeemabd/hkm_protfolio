"use client";

import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "CSAP ERP",
      period: "2024 - Present",
      location: "Remote",
      description: "Senior Frontend Developer building responsive UI architecture for enterprise HRMS platforms, biometric attendance portals, and payroll accounting modules using HTML5, Bootstrap 5 (Latest), CSS3, and JavaScript.",
      achievements: [
        "Designed and built the CSAP ERP responsive frontend UI suite using HTML5 and Bootstrap 5 (Latest) encompassing HRMS, Payroll, Biometric Attendance, Inventory, and Branch Accounting.",
        "Created real-time biometric attendance dashboard widgets rendering live punch logs across multi-branch enterprise networks.",
        "Engineered interactive payslip calculators, leave approval interfaces, punch regularization forms, and salary slip PDF preview renderers.",
        "Implemented role-based conditional UI views based on object-level permission models for multi-tenant branch management."
      ],
      technologies: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript (ES6+)", "jQuery / AJAX", "Responsive Layouts", "UI Design"],
    },
    {
      role: "Frontend Developer",
      company: "IECI Educational ERP Project",
      period: "2023 - 2024",
      location: "Hybrid",
      description: "Engineered responsive frontend interfaces and interactive assessment dashboards for institutional examination ERP systems using HTML5, Bootstrap 5 (Latest), and JavaScript.",
      achievements: [
        "Designed and built responsive Bootstrap 5 component layouts for multi-tier exam scoring, seat management, and hall ticket preview interfaces.",
        "Integrated real-time progress indicators and background batch task completion alerts for administrator dashboards.",
        "Enforced WCAG accessibility compliance, mobile-responsive layouts, and performant data tables for large student evaluation lists."
      ],
      technologies: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript", "AJAX", "Responsive Layouts"],
    },
    {
      role: "Frontend Developer",
      company: "JDT Arts & Science College Portal",
      period: "2022 - 2023",
      location: "On-site",
      description: "Engineered frontend web application development for university CMS, interactive student grievance redressal portal, and alumni directory using HTML5, Bootstrap 5 (Latest), and CSS3.",
      achievements: [
        "Developed responsive university portals, department catalogs, and interactive student application forms using HTML5 and Bootstrap 5.",
        "Established modular UI architecture and Bootstrap style guides ensuring consistent visual design across all college department web modules.",
        "Configured frontend performance optimizations, asset minification, and cross-browser testing to guarantee smooth mobile and desktop browsing."
      ],
      technologies: ["HTML5", "Bootstrap 5 (Latest)", "CSS3", "JavaScript", "UI Design"],
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
            Professional Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            My engineering track record in frontend development, building modern web applications, design systems, and responsive enterprise solutions.
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
