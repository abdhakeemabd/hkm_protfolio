"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
              AH
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Abdul Hakeem <span className="text-indigo-600 font-mono text-xs font-normal">| Full-Stack & Frontend Developer</span>
              </p>
              <p className="text-xs text-slate-500 font-mono">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Core Tech Stack Info */}
          <div className="text-xs text-slate-600 font-mono flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <span>Built with</span>
            <span className="text-orange-600 font-semibold">HTML5</span>
            <span>•</span>
            <span className="text-purple-600 font-semibold">Bootstrap 5 (Latest)</span>
            <span>•</span>
            <span className="text-amber-600 font-semibold">JavaScript</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">Django</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all group shadow-xs"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
