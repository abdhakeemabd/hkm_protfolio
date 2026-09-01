"use client";

import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, Layers, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

// Dynamic lazy import of ThreeScene with professional light mode loading fallback
const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin" />
        <Sparkles className="w-5 h-5 text-indigo-600 absolute" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-sm font-mono text-indigo-600 font-semibold tracking-wide">
          Loading 3D Experience...
        </p>
        <p className="text-xs text-slate-400">Initializing WebGL & Interactive Shaders</p>
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-[#fafafa]">
      {/* Light glow radial backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for full-stack & frontend projects
            </div>

            {/* Main Title - Single Unified Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Abdul Hakeem
              </h1>
              <div className="text-xl sm:text-3xl font-bold text-slate-800 tracking-tight flex flex-wrap items-center gap-2">
                <span>Frontend & Full-Stack Developer</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs sm:text-sm font-semibold shadow-xs">
                  React.js
                </span>
                <span className="text-slate-300">•</span>
                <span className="px-3.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs sm:text-sm font-semibold shadow-xs">
                  Next.js
                </span>
                <span className="text-slate-300">•</span>
                <span className="px-3.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs sm:text-sm font-semibold shadow-xs">
                  Python / Django
                </span>
                <span className="text-slate-300">•</span>
                <span className="px-3.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs sm:text-sm font-semibold shadow-xs">
                  Three.js
                </span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Building modern, responsive and interactive web experiences with React, Next.js, Django, and interactive 3D WebGL technologies.
            </p>

            {/* CTA Buttons & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Work & Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-xs"
              >
                <span>Get in Touch</span>
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-6 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" /> Next.js App Router
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-600" /> Three.js 3D Canvas
              </span>
            </div>

          </div>

          {/* Right 3D Experience Scene Container */}
          <div className="lg:col-span-5 w-full h-[400px] sm:h-[480px] lg:h-[520px]">
            <ThreeScene />
          </div>

        </div>
      </div>
    </section>
  );
}
