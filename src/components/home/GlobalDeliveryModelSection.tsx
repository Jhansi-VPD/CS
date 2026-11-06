'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const timelineRailRef = useRef<HTMLOListElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Compute scroll progression across the pinned runway
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const headerHeight =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--cs-header-h')
      ) || 64;

    const scrollDistance = track.offsetHeight - window.innerHeight;
    if (scrollDistance <= 0) return;

    // Scrolled distance into the pinned section
    const scrolled = -rect.top + headerHeight;
    const rawProgress = Math.min(1, Math.max(0, scrolled / scrollDistance));

    setScrollProgress(rawProgress);

    // Quantize into 6 stages (0 to 5) with generous, deliberate spacing
    const nextIndex = Math.min(stages.length - 1, Math.floor(rawProgress * stages.length));
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [handleScroll]);

  // Keep mobile timeline rail centered on active stage
  useEffect(() => {
    const rail = timelineRailRef.current;
    const activeTab = tabRefs.current[activeIndex];
    if (!rail || !activeTab) return;

    const railRect = rail.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const offset = tabRect.left - railRect.left - railRect.width / 2 + tabRect.width / 2;
    rail.scrollBy({ left: offset, behavior: 'smooth' });
  }, [activeIndex]);

  // Programmatic smooth scroll to jump to a specific stage within the pinned runway
  const scrollToStage = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const headerHeight =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--cs-header-h')
      ) || 64;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = track.offsetHeight - window.innerHeight;

    const stageSegmentProgress = (index + 0.5) / stages.length;
    const targetY = trackTop - headerHeight + stageSegmentProgress * scrollDistance;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  const handleNextStage = () => {
    if (activeIndex < stages.length - 1) {
      scrollToStage(activeIndex + 1);
    }
  };

  const handlePrevStage = () => {
    if (activeIndex > 0) {
      scrollToStage(activeIndex - 1);
    }
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
    scrollToStage(next);
    tabRefs.current[next]?.focus();
  };

  const activeStage = stages[activeIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <div
      ref={trackRef}
      className="relative h-[280vh] sm:h-[320vh] lg:h-[380vh]"
      id="stages-section"
    >
      {/* Pinned Sticky Section Viewport */}
      <section className="sticky top-[var(--cs-header-h,64px)] h-[calc(100dvh-var(--cs-header-h,64px))] min-h-[540px] max-h-[960px] flex flex-col justify-between py-5 sm:py-6 lg:py-8 bg-[#F8FAFC] border-y border-slate-200/80 overflow-y-auto lg:overflow-hidden select-none">
        {/* Subtle Ambient Background Gradient Lighting */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-700"
            style={{ backgroundColor: activeStage.color }}
          />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-navy-midnight/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between relative z-10 gap-4 sm:gap-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200/80 shrink-0">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-coral-bright mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>How We Work</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500 font-semibold">Stage {activeStage.number} of 06</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
                From Requirement to{' '}
                <span className="swift-gradient-text">Results.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-navy-midnight hover:text-coral-bright transition-colors"
              >
                <span>Full Methodology</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Process Timeline Rail (Interactive Connected Stages) */}
          <div className="relative shrink-0">
            {/* Desktop Connecting Line between Stage Circles */}
            <div
              className="hidden lg:block absolute top-[28px] left-[calc(8.333%)] right-[calc(8.333%)] h-[3px] bg-slate-200/90 rounded-full z-0 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="h-full bg-swift-gradient rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(activeIndex / (stages.length - 1)) * 100}%`
                }}
              />
            </div>

            <ol
              ref={timelineRailRef}
              role="tablist"
              aria-label="Six-stage delivery methodology"
              className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth relative z-10 py-1 lg:grid lg:grid-cols-6 lg:gap-3"
            >
              {stages.map((stage, index) => {
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex;

                return (
                  <li key={stage.number} role="none" className="min-w-[140px] sm:min-w-[160px] lg:min-w-0 flex-1">
                    <button
                      role="tab"
                      type="button"
                      id={`home-stage-tab-${index}`}
                      aria-selected={isActive}
                      aria-controls="home-stage-panel"
                      tabIndex={isActive ? 0 : -1}
                      ref={(el) => {
                        tabRefs.current[index] = el;
                      }}
                      onClick={() => scrollToStage(index)}
                      onKeyDown={(e) => onKeyDown(e, index)}
                      className={`group relative flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright lg:flex-col lg:items-center lg:text-center ${
                        isActive
                          ? 'bg-white shadow-md border border-slate-300/90 -translate-y-0.5 ring-2 ring-coral-bright/25'
                          : isCompleted
                          ? 'bg-white/80 border border-slate-200/80 hover:bg-white'
                          : 'bg-white/40 border border-slate-200/60 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <span
                        className="w-8 h-8 shrink-0 rounded-full grid place-items-center font-mono text-xs font-bold transition-all duration-500"
                        style={
                          isActive
                            ? {
                                backgroundColor: stage.color,
                                color: '#FFFFFF',
                                boxShadow: `0 0 0 3px ${stage.color}25`
                              }
                            : isCompleted
                            ? {
                                backgroundColor: '#080B2E',
                                color: '#FFFFFF'
                              }
                            : {
                                backgroundColor: '#F1F5F9',
                                color: '#94A3B8'
                              }
                        }
                      >
                        {stage.number}
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block text-xs sm:text-sm font-heading font-bold leading-snug transition-colors duration-300 ${
                            isActive
                              ? 'text-navy-midnight'
                              : isCompleted
                              ? 'text-navy-midnight/80'
                              : 'text-slate-500'
                          }`}
                        >
                          {stage.name}
                        </span>
                        <span
                          className="block font-mono text-[10px] uppercase tracking-wider leading-tight mt-0.5 transition-colors duration-300"
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

          {/* Active Stage Spotlight Presentation Card */}
          <div
            role="tabpanel"
            id="home-stage-panel"
            aria-labelledby={`home-stage-tab-${activeIndex}`}
            className="rounded-2xl bg-white border border-slate-200/90 shadow-md p-5 sm:p-7 relative overflow-hidden flex-1 flex flex-col justify-between"
          >
            {/* Stage Color Accent Stripe */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
              style={{ backgroundColor: activeStage.color }}
            />

            <div
              key={activeStage.number}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 animate-fade-in-up"
            >
              {/* Left Side: Stage Identity & Description */}
              <div className="flex items-start gap-4 min-w-0 max-w-2xl">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl grid place-items-center transition-all duration-500 shadow-sm"
                  style={{
                    backgroundColor: `${activeStage.color}15`,
                    color: activeStage.color,
                    border: `1px solid ${activeStage.color}30`
                  }}
                >
                  <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${activeStage.color}15`,
                        color: activeStage.color
                      }}
                    >
                      Stage {activeStage.number} · {activeStage.tagline}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Step {activeIndex + 1} of {stages.length}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-extrabold text-navy-midnight mt-1.5 leading-snug">
                    {activeStage.name}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mt-1.5">
                    {activeStage.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Key Deliverable Card */}
              <div className="shrink-0 w-full lg:w-72 rounded-xl bg-slate-50 border border-slate-200/80 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Key Deliverable
                  </span>
                  <span
                    className="w-6 h-6 rounded-md grid place-items-center text-xs font-bold text-white shadow-xs"
                    style={{ backgroundColor: activeStage.color }}
                  >
                    {activeStage.number}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-heading font-bold text-navy-midnight leading-snug">
                    {activeStage.deliverable}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Governed by Milestone Sign-Off</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls & Scroll Cue */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-4">
              {/* Scroll Cue Hint */}
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: activeStage.color }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: activeStage.color }}
                  />
                </span>
                <span>
                  {activeIndex === stages.length - 1
                    ? 'Final stage completed · Scroll to continue'
                    : `Scroll to advance (${activeIndex + 1} of 6)`}
                </span>
              </div>

              {/* Navigation Arrows & Dot Indicators */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1" aria-hidden="true">
                  {stages.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === activeIndex
                          ? 'w-5 bg-coral-bright'
                          : dotIdx < activeIndex
                          ? 'w-1.5 bg-navy-midnight/50'
                          : 'w-1.5 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevStage}
                    disabled={activeIndex === 0}
                    aria-label="Previous Stage"
                    className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-white hover:text-navy-midnight disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStage}
                    disabled={activeIndex === stages.length - 1}
                    aria-label="Next Stage"
                    className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-white hover:text-navy-midnight disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Governance Strip */}
          <div className="rounded-xl bg-white border border-slate-200/80 px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shrink-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
              Governed at every stage
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
              {GOVERNANCE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-1.5 text-xs font-semibold text-navy-midnight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalDeliveryModelSection;