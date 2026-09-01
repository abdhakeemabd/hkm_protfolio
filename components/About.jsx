"use client";

import { User, Code, Sparkles, Server } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Enterprise ERP & Marketplace Backends",
      description: "Architecting multi-tenant Django & Python backends handling high-concurrency gig management, payroll, and biometric hardware syncing.",
      icon: Server,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      title: "Next.js & Modern React Architecture",
      description: "Building fast, SEO-friendly server-rendered web applications with optimized React Server Components and state management.",
      icon: Code,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
    },
    {
      title: "Interactive 3D Web Graphics",
      description: "Leveraging Three.js & React Three Fiber to build high-performance 3D visual experiences without compromising load times.",
      icon: Sparkles,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
  ];

  const stats = [
    { label: "Core Full-Stack Stack", value: "Django & Next.js" },
    { label: "3D & Interactive", value: "Three.js / R3F" },
    { label: "Architecture Quality", value: "Enterprise Grade" },
    { label: "Async Performance", value: "Gevent / Celery" },
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
            Engineering Digital <span className="text-gradient-indigo">Platforms</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Full Stack & Frontend Developer specializing in enterprise Python/Django platforms, modern Next.js web applications, and interactive 3D graphics.
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
                        Full Stack Developer
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">
                        Abdul Hakeem
                      </h3>
                      <p className="text-xs text-slate-200 font-mono">
                        React.js • Next.js • Python / Django • Three.js
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
              Passionate Engineering & <span className="text-indigo-600">Innovation</span>
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I specialize in architecting full-stack web applications, multi-tenant ERP platforms, and interactive frontend interfaces. By pairing robust <span className="text-emerald-700 font-semibold">Python / Django</span> backends with modern <span className="text-indigo-700 font-semibold">React.js</span>, <span className="text-indigo-700 font-semibold">Next.js</span>, and <span className="text-amber-700 font-semibold">Three.js</span>, I build applications that excel in both complex business logic and visual presentation.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              My engineering track record includes building on-demand gig staffing platforms (STAFF-DO), biometric HRMS ERP systems (CSAP ERP), institutional exam evaluation engines (IECI ERP), and college CMS portals (JDT Arts).
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
