'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileCheck,
  FileText,
  RefreshCw,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface Stage {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
  color: string;
}

const stages: Stage[] = [
  {
    number: '01',
    name: 'Requirement',
    tagline: 'Discover',
    description: 'Understand business goals and define technical project requirements.',
    deliverable: 'Requirement Matrix & SOW Draft',
    icon: FileText,
    color: '#F98F33'
  },
  {
    number: '02',
    name: 'Validation',
    tagline: 'Validate',
    description: 'Evaluate technical feasibility and establish operational baselines.',
    deliverable: 'Technical Feasibility Report',
    icon: CheckCircle2,
    color: '#F05E47'
  },
  {
    number: '03',
    name: 'Partner Assessment',
    tagline: 'Assess',
    description: 'Audit delivery centers against workforce, security and tenure standards.',
    deliverable: 'Partner Assessment Report',
    icon: ShieldCheck,
    color: '#E73B50'
  },
  {
    number: '04',
    name: 'Scoping',
    tagline: 'Define',
    description: 'Establish project scope, bilateral responsibilities and commercial terms.',
    deliverable: 'Bilateral SOW & Milestone Governance',
    icon: FileCheck,
    color: '#D21D61'
  },
  {
    number: '05',
    name: 'Delivery & QA',
    tagline: 'Execute',
    description: 'Execute deliverables through structured sprint cycles and automated QA.',
    deliverable: 'Sprint Releases & CI/CD Records',
    icon: Cpu,
    color: '#950B6D'
  },
  {
    number: '06',
    name: 'Continuous Improvement',
    tagline: 'Optimize',
    description: 'Review SLA performance, retrospectives and opportunities for scaled growth.',
    deliverable: 'Governance & Performance Review',
    icon: RefreshCw,
    color: '#080B2E'
  }
];

const GOVERNANCE_POINTS = [
  'Client Repository Ownership',
  'Structured Delivery Governance',
  'Quality and Performance Reviews'
];

export const GlobalDeliveryModelSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState<number | null>(null);
  const lastScrollY = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  // Trigger staggered stage reveal when section scrolls into viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll-driven progressive stage activation during normal page scrolling
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section is not in view
      if (rect.top > windowHeight || rect.bottom < 0) return;

      // Reset manual override if user has scrolled substantially (> 60px)
      if (manualOverride !== null) {
        if (Math.abs(window.scrollY - lastScrollY.current) > 60) {
          setManualOverride(null);
        } else {
          return;
        }
      }

      // Compute scroll progression across the section
      const topThreshold = windowHeight * 0.75;
      const bottomThreshold = windowHeight * 0.15;
      const scrollRange = (topThreshold - bottomThreshold) + rect.height * 0.5;
      const currentScroll = topThreshold - rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / scrollRange));

      const nextIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      setActiveIndex(nextIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualOverride]);

  const displayedIndex = manualOverride ?? activeIndex;
  const activeStage = stages[displayedIndex];
  const ActiveIcon = activeStage.icon;

  const handleSelectStage = (index: number) => {
    setManualOverride(index);
    lastScrollY.current = window.scrollY;
  };

  const handleNext = () => {
    const next = displayedIndex < stages.length - 1 ? displayedIndex + 1 : 0;
    handleSelectStage(next);
  };

  const handlePrev = () => {
    const prev = displayedIndex > 0 ? displayedIndex - 1 : stages.length - 1;
    handleSelectStage(prev);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = stages.length - 1;
    let next: number | null = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = index === lastIndex ? 0 : index + 1;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = index === 0 ? lastIndex : index - 1;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = lastIndex;
    }

    if (next === null) return;
    event.preventDefault();
    handleSelectStage(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-coral-bright mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              From Requirement to{' '}
              <span className="swift-gradient-text">Results.</span>
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Every engagement follows a structured six-stage process designed for transparency, accountability and continuous improvement.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-navy-midnight hover:text-coral-bright transition-colors"
            >
              <span>Explore Full Methodology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Process Timeline Rail (Sequential Scroll-Triggered Reveal) */}
        <div className="mt-8 relative">
          {/* Desktop Connecting Line between Stage Circles */}
          <div
            className="hidden lg:block absolute top-[28px] left-[calc(8.333%)] right-[calc(8.333%)] h-[2px] bg-slate-200 z-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="h-full bg-swift-gradient transition-all duration-500 ease-out"
              style={{
                width: isRevealed
                  ? `${(displayedIndex / (stages.length - 1)) * 100}%`
                  : '0%'
              }}
            />
          </div>

          <ol
            role="tablist"
            aria-label="Six-stage delivery methodology"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10"
          >
            {stages.map((stage, index) => {
              const isActive = index === displayedIndex;
              const isPassed = index <= displayedIndex;
              const staggerDelay = index * 100; // 0ms, 100ms, 200ms, 300ms, 400ms, 500ms

              return (
                <li
                  key={stage.number}
                  role="none"
                  className="relative transition-all"
                  style={{
                    opacity: isRevealed || prefersReducedMotion ? 1 : 0,
                    transform:
                      isRevealed || prefersReducedMotion
                        ? 'translateY(0)'
                        : 'translateY(18px)',
                    transition: prefersReducedMotion
                      ? 'none'
                      : `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}ms, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}ms`
                  }}
                >
                  <button
                    role="tab"
                    type="button"
                    id={`home-stage-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="home-stage-panel"
                    tabIndex={0}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => handleSelectStage(index)}
                    onMouseEnter={() => handleSelectStage(index)}
                    onKeyDown={(e) => onKeyDown(e, index)}
                    className={`group relative flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright lg:flex-col lg:items-center lg:text-center ${
                      isActive
                        ? 'bg-white shadow-md border border-slate-300/90 -translate-y-0.5 ring-2 ring-coral-bright/20'
                        : isPassed
                        ? 'bg-white/80 border border-slate-200/90 hover:bg-white'
                        : 'bg-white/50 border border-slate-200/70 hover:bg-white/80'
                    }`}
                  >
                    <span
                      className="w-8 h-8 shrink-0 rounded-full grid place-items-center font-mono text-xs font-bold transition-all duration-300"
                      style={
                        isActive
                          ? {
                              backgroundColor: stage.color,
                              color: '#FFFFFF',
                              boxShadow: `0 0 0 3px ${stage.color}25`
                            }
                          : isPassed
                          ? {
                              backgroundColor: '#080B2E',
                              color: '#FFFFFF'
                            }
                          : {
                              backgroundColor: '#F1F5F9',
                              color: '#64748B'
                            }
                      }
                    >
                      {stage.number}
                    </span>

                    <span className="min-w-0">
                      <span
                        className={`block text-xs sm:text-sm font-heading font-bold leading-snug transition-colors ${
                          isActive
                            ? 'text-navy-midnight'
                            : isPassed
                            ? 'text-navy-midnight/80'
                            : 'text-slate-600 group-hover:text-navy-midnight'
                        }`}
                      >
                        {stage.name}
                      </span>
                      <span
                        className="block font-mono text-[10px] uppercase tracking-wider leading-tight mt-0.5 transition-colors"
                        style={{ color: isActive ? stage.color : '#94A3B8' }}
                      >
                        {stage.tagline}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Active Stage Detail Panel (Revealed Progressively on Scroll) */}
        <div
          role="tabpanel"
          id="home-stage-panel"
          aria-labelledby={`home-stage-tab-${displayedIndex}`}
          className="mt-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-7 relative overflow-hidden transition-all duration-500"
          style={{
            opacity: isRevealed || prefersReducedMotion ? 1 : 0,
            transform:
              isRevealed || prefersReducedMotion
                ? 'translateY(0)'
                : 'translateY(16px)',
            transition: prefersReducedMotion
              ? 'none'
              : 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 350ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 350ms'
          }}
        >
          {/* Subtle Top Accent Stripe matching active stage color */}
          <div
            className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
            style={{ backgroundColor: activeStage.color }}
          />

          <div
            key={activeStage.number}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 animate-fade-in-up"
          >
            <div className="flex items-start gap-4 min-w-0 max-w-2xl">
              <span
                className="w-12 h-12 shrink-0 rounded-xl grid place-items-center transition-colors duration-500 shadow-xs"
                style={{
                  backgroundColor: `${activeStage.color}15`,
                  color: activeStage.color,
                  border: `1px solid ${activeStage.color}30`
                }}
              >
                <ActiveIcon className="w-6 h-6 transition-transform duration-300" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-colors duration-500"
                    style={{ backgroundColor: `${activeStage.color}15`, color: activeStage.color }}
                  >
                    Stage {activeStage.number} · {activeStage.tagline}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Step {displayedIndex + 1} of {stages.length}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-navy-midnight leading-snug mt-1.5">
                  {activeStage.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  {activeStage.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:items-end gap-3">
              <div className="rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-3 sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Key Deliverable</p>
                <p className="text-xs sm:text-sm font-semibold text-navy-midnight leading-snug mt-0.5">
                  {activeStage.deliverable}
                </p>
              </div>

              {/* Previous / Next buttons */}
              <div className="flex items-center gap-1.5 self-end">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous stage"
                  className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-navy-midnight flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next stage"
                  className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-navy-midnight flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Governance Strip */}
        <div
          className="mt-5 rounded-xl bg-white border border-slate-200/80 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-500"
          style={{
            opacity: isRevealed || prefersReducedMotion ? 1 : 0,
            transform:
              isRevealed || prefersReducedMotion
                ? 'translateY(0)'
                : 'translateY(16px)',
            transition: prefersReducedMotion
              ? 'none'
              : 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) 500ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 500ms'
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
            Governed at every stage
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
            {GOVERNANCE_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-xs font-semibold text-navy-midnight">
                <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GlobalDeliveryModelSection;