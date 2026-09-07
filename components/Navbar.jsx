"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Unified Single Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-slate-900 font-bold text-xl tracking-tight"
          >
            <div className="w-32 h-10 flex items-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-slate-200/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for work
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 hover:scale-[1.02]"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 backdrop-blur-xl px-6 py-6 mt-2 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-lg">
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3.5 py-1.5 rounded-full w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for work
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-indigo-600 text-base font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-slate-900 py-3 rounded-full shadow-md"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
