'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Server, Cloud, Code, Database, ShieldCheck, HeartPulse, Landmark, Layers } from 'lucide-react';

interface TechItem {
  domain: string;
  category: string;
  technologies: string[];
  icon: React.ElementType;
  highlight: string;
}

const techItems: TechItem[] = [
  {
    domain: 'Enterprise ERP Solutions',
    category: 'IT Engineering',
    technologies: ['SAP S/4HANA', 'Oracle Cloud ERP', 'Microsoft Dynamics 365'],
    icon: Server,
    highlight: 'Enterprise Scale'
  },
  {
    domain: 'Cloud Architecture & DevOps',
    category: 'Cloud Infrastructure',
    technologies: ['AWS Cloud', 'Microsoft Azure', 'Kubernetes', 'Terraform CI/CD'],
    icon: Cloud,
    highlight: 'Resilient Ops'
  },
  {
    domain: 'Full-Stack Software Development',
    category: 'Product Engineering',
    technologies: ['React & Next.js', 'Node.js & Python', 'TypeScript', 'PostgreSQL'],
    icon: Code,
    highlight: 'Agile Pods'
  },
  {
    domain: 'Automated QA & Testing',
    category: 'Quality Engineering',
    technologies: ['Selenium Grid', 'Cypress & Playwright', 'Postman API Testing'],
    icon: Database,
    highlight: 'Zero Regressions'
  },
  {
    domain: 'Healthcare Coding & RCM',
    category: 'Non-IT Operations',
    technologies: ['ICD-10-CM / CPT-4', 'HL7 & FHIR Standards', 'Payer Portal EDI'],
    icon: HeartPulse,
    highlight: '99%+ Accuracy'
  },
  {
    domain: 'Banking KYC & Mortgage Review',
    category: 'Financial Operations',
    technologies: ['AML Screening Checklists', 'Encompass LOS', 'Escrow & Title Verification'],
    icon: Landmark,
    highlight: 'SLA-Governed'
  },
  {
    domain: 'Security & Delivery Governance',
    category: 'Compliance & Audits',
    technologies: ['SOC 2 Type II Alignable', 'HIPAA VDI Protocols', 'Milestone Code Audits'],
    icon: ShieldCheck,
    highlight: 'Strict IP Protection'
  },
  {
    domain: 'High-Volume Data Operations',
    category: 'BPO Workflows',
    technologies: ['Double-Key Data Entry', 'OCR Indexing & Tagging', '24/7 Shift Coverage'],
    icon: Layers,
    highlight: 'Scalable Shifts'
  }
];

export const TechCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Cards visible depends on screen width: 1 on mobile, 2 on tablet, 3 on desktop
  const maxIndex = techItems.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral-bright bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200/70 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technology & Operational Stacks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
              Enterprise Stacks & Delivery Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Representative platforms, frameworks, and compliance standards supported across our qualified Indian delivery network.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous capabilities slide"
              className="flex items-center justify-center p-2.5 max-sm:min-h-[44px] max-sm:min-w-[44px] rounded-xl border border-slate-200 bg-white hover:bg-slate-100 hover:text-coral-bright text-navy-midnight transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next capabilities slide"
              className="flex items-center justify-center p-2.5 max-sm:min-h-[44px] max-sm:min-w-[44px] rounded-xl border border-slate-200 bg-white hover:bg-slate-100 hover:text-coral-bright text-navy-midnight transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative mt-4 cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-5"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {techItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="min-w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] shrink-0"
                >
                  <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover-lift space-y-4 h-full flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-coral-50 text-coral-bright flex items-center justify-center font-bold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-coral-rose bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200/60 font-mono">
                          {item.highlight}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <h3 className="text-base font-bold text-navy-midnight group-hover:text-coral-bright transition-colors mt-0.5">
                          {item.domain}
                        </h3>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Milestone Verified</span>
                      <span className="text-coral-bright font-semibold">Active Pod Capability →</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {techItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentIndex === idx}
              className="tap-btn"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-7 bg-coral-bright'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

