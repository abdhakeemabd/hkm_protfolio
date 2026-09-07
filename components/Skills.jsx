"use client";

import { Cpu } from "lucide-react";

export default function Skills() {
  // Exact order as required by specification:
    // 1. Next.js 2. React.js 3. Tailwind CSS 4. HTML5 5. JavaScript 6. Three.js 7. Python 8. Bootstrap
  const skillsList = [
    { name: "Next.js", rank: 1, category: "Modern Stack", level: "Primary Focus", desc: "App Router, SSR, Server Components", highlight: true, color: "from-slate-700 to-slate-900" },
    { name: "React.js", rank: 2, category: "Modern Stack", level: "Primary Focus", desc: "Component Architecture, Hooks, Dynamic UI", highlight: true, color: "from-blue-500 to-cyan-600" },
    { name: "Tailwind CSS", rank: 3, category: "Styling & UI", level: "Core Stack", desc: "Utility-first Layouts, Responsive UI", highlight: true, color: "from-teal-500 to-emerald-600" },
    { name: "HTML5", rank: 4, category: "Frontend Core", level: "Primary Focus", desc: "Semantic Markup, Responsive Layouts, SEO", highlight: true, color: "from-orange-500 to-amber-600" },
    { name: "JavaScript", rank: 5, category: "Frontend Core", level: "Primary Focus", desc: "ES6+, DOM Manipulation, Async Logic", highlight: true, color: "from-amber-500 to-yellow-600" },
    { name: "Three.js", rank: 6, category: "3D & WebGL", level: "Interactive UI", desc: "3D Visualizers, Canvas Shaders", highlight: true, color: "from-indigo-600 to-purple-600" },
    { name: "Python", rank: 7, category: "Backend Stack", level: "Core Stack", desc: "Scripting, Business Logic", highlight: false, color: "from-amber-600 to-blue-600" },
    { name: "Bootstrap", rank: 8, category: "Frontend Core", level: "Core Stack", desc: "Mobile-First Grid, Utility Classes", highlight: false, color: "from-purple-600 to-indigo-600" },
  ];

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Prioritized engineering toolkit with primary focus on modern frontend web technologies, enterprise Python/Django frameworks, and interactive 3D graphics.
          </p>
        </div>

        {/* Priority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill) => (
            <div
              key={skill.rank}
              className={`relative p-6 rounded-2xl bg-white border transition-all duration-300 group hover:-translate-y-1 ${
                skill.highlight
                  ? "border-indigo-200 hover:border-indigo-400 shadow-md hover:shadow-xl"
                  : "border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              {/* Top Row: Rank Badge & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                  #{skill.rank}
                </span>
                <span
                  className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                    skill.highlight
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Skill Name & Gradient Bar */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-mono">{skill.desc}</p>
              </div>

              {/* Progress / Focus Bar Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${Math.max(45, 100 - (skill.rank - 1) * 4)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
