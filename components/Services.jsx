"use client";

import { Box, Layers, Layout, Server, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      title: "Enterprise ERP & Marketplace Backends",
      category: "Python & Django DRF",
      description: "Building scalable multi-tenant platforms, RBAC authorization, automated PDF accounting engines, and async Celery background task queues.",
      features: [
        "Django 4.2/5.x & REST Framework API architecture",
        "Geofenced check-in & biometric hardware integration",
        "Celery/Redis background task queues & OpenPyXL exports"
      ],
      icon: Server,
      accent: "from-indigo-600 to-blue-600",
      border: "border-indigo-200",
    },
    {
      title: "Modern Next.js & React Frontend",
      category: "Next.js App Router",
      description: "Scalable frontend application development utilizing Next.js App Router, React Server Components, and optimized client boundaries.",
      features: [
        "Fast page load times & high Lighthouse scores",
        "Semantic SEO metadata & Open Graph optimization",
        "Server-side rendering (SSR) & static generation"
      ],
      icon: Layers,
      accent: "from-blue-600 to-cyan-600",
      border: "border-blue-200",
    },
    {
      title: "Interactive 3D Web Experiences",
      category: "Three.js & R3F Graphics",
      description: "Custom 3D objects, interactive wireframe meshes, particle fields, and smooth mouse parallax effects built using React Three Fiber.",
      features: [
        "Custom 3D geometry & glowing shader materials",
        "Mobile-optimized rendering & particle scaling",
        "Smooth lerp interaction & WebGL fallbacks"
      ],
      icon: Box,
      accent: "from-emerald-600 to-teal-600",
      border: "border-emerald-200",
    },
    {
      title: "DevOps & CI/CD Pipelines",
      category: "Docker, Nginx & Gunicorn",
      description: "Containerized dev/prod environments, Gevent async concurrency tuning, Nginx reverse proxy, and automated GitLab CI security audits.",
      features: [
        "Docker & Docker Compose containerization",
        "Gunicorn with Gevent eventlet concurrency tuning",
        "GitLab CI/CD automated security checks & Sentry"
      ],
      icon: Layout,
      accent: "from-amber-500 to-yellow-600",
      border: "border-amber-200",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS & SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I <span className="text-gradient-indigo">Deliver</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Specialized full-stack backend development, enterprise ERP architecture, modern Next.js frontends, and 3D web experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-white border ${service.border} hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl`}
              >
                <div className="space-y-6">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-tr ${service.accent} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group-hover:translate-x-1"
                  >
                    <span>Discuss a Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
