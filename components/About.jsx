"use client";

import { User, Code, Sparkles, Server } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "HTML5 & Bootstrap 5 UI Architecture",
      description: "Building responsive, mobile-first web user interfaces using HTML5 semantic elements and Bootstrap 5 (Latest) grid systems, utilities, and components.",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      title: "Modern JavaScript & Responsive Web Dev",
      description: "Engineered web applications with ES6+ JavaScript, DOM manipulation, dynamic AJAX data fetching, and cross-browser CSS3 styling.",
      icon: Sparkles,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      title: "Interactive Web Graphics & WebGL",
      description: "Integrating modern 3D visualizers with Three.js to complement responsive HTML5 and Bootstrap 5 user interfaces.",
      icon: Server,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
  ];

  const stats = [
    { label: "Primary Role", value: "Senior Frontend Developer" },
    { label: "Core UI Stack", value: "HTML5 & Bootstrap 5" },
    { label: "Scripting & Logic", value: "JavaScript (ES6+)" },
    { label: "Design Systems", value: "Responsive Layouts" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Digital Platforms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Frontend Developer specializing in responsive HTML5, Bootstrap 5 (Latest), JavaScript (ES6+), and modern web application development.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Ashey Light Photo Glass Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Soft Drop Shadow Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-white border border-slate-200 p-3 overflow-hidden shadow-xl">
                <div className="relative h-96 sm:h-[420px] w-full rounded-2xl overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Abdul Hakeem"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-emerald-300 font-semibold px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 w-fit block">
                        Frontend Developer
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">
                        Abdul Hakeem
                      </h3>
                      <p className="text-xs text-slate-200 font-mono">
                        HTML5 • Bootstrap 5 (Latest) • JavaScript • CSS3
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Skill Badge Overlay */}
                <div className="absolute top-6 right-6 bg-white/90 border border-emerald-200 px-3 py-1.5 rounded-xl text-[11px] font-mono text-emerald-700 font-bold shadow-md backdrop-blur-md">
                  Available for Hire
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frontend Engineering & Web Excellence
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I specialize in frontend development and building responsive, mobile-first web applications using <span className="text-indigo-700 font-semibold">HTML5</span>, <span className="text-indigo-700 font-semibold">Bootstrap 5 (Latest)</span>, <span className="text-emerald-700 font-semibold">CSS3</span>, and <span className="text-amber-700 font-semibold">JavaScript (ES6+)</span>. I craft web interfaces that excel in cross-browser compatibility, visual presentation, and seamless user interaction.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              My track record includes developing enterprise resource planning systems (CSAP ERP), institutional exam portals (IECI ERP), gig economy marketplace platforms (STAFF-DO), and college CMS web applications (JDT Arts).
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <p className="text-xs text-slate-500 font-mono mb-1">{stat.label}</p>
                  <p className="text-base font-bold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Highlights List */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-white border ${item.border} shadow-xs hover:shadow-md transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
