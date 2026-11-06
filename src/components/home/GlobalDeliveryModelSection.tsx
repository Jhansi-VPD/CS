'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  ChevronRight,
  MousePointer
} from 'lucide-react';

interface Stage {
  number: string;
  name: string;
  tagline: string;
  badge: string;
  headline: string;
  description: string;
  activities: string[];
  deliverable: string;
  deliverableType: string;
  stakeholders: string;
  icon: React.ElementType;
  color: string;
}

const stages: Stage[] = [
  {
    number: '01',
    name: 'Requirement',
    tagline: 'Discover',
    badge: 'Discovery Phase',
    headline: 'Requirement Discovery & Baseline Scoping',
    description: 'Translating high-level business goals into rigorous technical specifications, resource sizing models, and project milestone roadmaps.',
    activities: [
      'Business objective mapping & technical baseline',
      'Requirement matrix formulation & constraint definition',
      'Resource sizing, skill mapping & timeline estimation'
    ],
    deliverable: 'Requirement Matrix & SOW Draft',
    deliverableType: 'Structured Technical Specification',
    stakeholders: 'Client Leadership & Solutions Architects',
    icon: FileText,
    color: '#F98F33'
  },
  {
    number: '02',
    name: 'Validation',
    tagline: 'Validate',
    badge: 'Validation Phase',
    headline: 'Technical Feasibility & Architecture Baseline',
    description: 'Rigorous technical feasibility evaluation, architecture reviews, and operational constraint modeling before commercial commitment.',
    activities: [
      'Architecture & tech stack suitability review',
      'Security & compliance feasibility baseline',
      'Sprint cadence & SLA parameter calibration'
    ],
    deliverable: 'Technical Feasibility Report',
    deliverableType: 'Verified Architecture Baseline',
    stakeholders: 'Technical Evaluators & System Architects',
    icon: CheckCircle2,
    color: '#F05E47'
  },
  {
    number: '03',
    name: 'Partner Assessment',
    tagline: 'Assess',
    badge: 'Assessment Phase',
    headline: 'Delivery Partner Audit & Capability Matching',
    description: 'Auditing qualified Indian delivery centers against 8-point baselines: 3-year operating tenure, 50+ personnel, and dedicated security infrastructure.',
    activities: [
      '8-point baseline delivery center audit',
      'Workforce depth & domain specialization check',
      'Physical & VDI security infrastructure verification'
    ],
    deliverable: 'Partner Assessment Dossier',
    deliverableType: 'Audited Capability Certification',
    stakeholders: 'Partner Evaluation Desk & Practice Leads',
    icon: ShieldCheck,
    color: '#E73B50'
  },
  {
    number: '04',
    name: 'Scoping',
    tagline: 'Define',
    badge: 'Contracting Phase',
    headline: 'Bilateral Scoping & Governance Contracting',
    description: 'Establishing transparent milestone-defined SOWs, intellectual property assignment, and bilateral accountability with zero hidden intermediary margins.',
    activities: [
      'Milestone-governed Statement of Work (SOW)',
      'Mutual NDA & 100% client IP ownership terms',
      'Client-dedicated Git repositories & VDI enclaves'
    ],
    deliverable: 'Bilateral SOW & Commercial Agreement',
    deliverableType: 'Binding Governance Contract',
    stakeholders: 'Commercial Operations & Legal Governance',
    icon: FileCheck,
    color: '#D21D61'
  },
  {
    number: '05',
    name: 'Delivery & QA',
    tagline: 'Execute',
    badge: 'Execution Phase',
    headline: 'Disciplined Sprint Execution & Automated QA',
    description: 'Executing structured sprint iterations with bi-weekly demos, automated regression test suites, and transparent daily SLA tracking.',
    activities: [
      'Bi-weekly agile sprint demos & release reviews',
      'Automated CI/CD pipelines & test regressions',
      'Daily operational SLA tracking & shift reports'
    ],
    deliverable: 'Sprint Releases & CI/CD Verification',
    deliverableType: 'Production Sprint Deployments',
    stakeholders: 'Dedicated Delivery Pod & Client PMs',
    icon: Cpu,
    color: '#950B6D'
  },
  {
    number: '06',
    name: 'Continuous Improvement',
    tagline: 'Optimize',
    badge: 'Optimization Phase',
    headline: 'Governance Retrospectives & Scaled Growth',
    description: 'Ongoing executive governance, SLA retrospective audits, quality scoring, and structured capacity expansion for sustainable long-term scale.',
    activities: [
      'Monthly operational governance dashboards',
      'Quarterly quality & SLA performance audits',
      'Capacity roadmaps & team scaling models'
    ],
    deliverable: 'Governance & Performance Reviews',
    deliverableType: 'Long-Term Partnership Health Score',
    stakeholders: 'Executive Steering Committee',
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRailRef = useRef<HTMLOListElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Compute scroll progress through the dedicated multi-viewport scroll runway
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const headerOffset = 64; // height of sticky header
    const scrollDistance = container.offsetHeight - window.innerHeight;

    if (scrollDistance <= 0) return;

    // Distance scrolled through the track
    const scrolled = -rect.top + headerOffset;
    const progress = Math.min(1, Math.max(0, scrolled / scrollDistance));

    setScrollProgress(progress);

    // Map progress into active stage (0 to stages.length - 1)
    const stageIndex = Math.min(stages.length - 1, Math.floor(progress * stages.length));
    setActiveIndex(stageIndex);
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
    if (!rail) return;
    const activeTab = rail.children[activeIndex] as HTMLElement | undefined;
    if (activeTab) {
      const railRect = rail.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const offset = tabRect.left - railRect.left - railRect.width / 2 + tabRect.width / 2;
      rail.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }, [activeIndex]);

  // Programmatic smooth scroll to jump to a specific stage within the track
  const scrollToStage = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const headerOffset = 64;
    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = container.offsetHeight - window.innerHeight;

    // Position scroll target at the center of the target stage's range
    const stageSegmentProgress = (index + 0.5) / stages.length;
    const targetY = containerTop - headerOffset + stageSegmentProgress * scrollDistance;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
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
      ref={containerRef}
      className="cs-pin-track relative min-h-[300vh] lg:min-h-[330vh]"
      id="stages-section"
    >
      {/* Sticky Viewport Container */}
      <section className="cs-pin-panel sticky top-[var(--cs-header-h)] h-[calc(100dvh-var(--cs-header-h))] min-h-[min(540px,calc(100dvh-var(--cs-header-h)))] max-h-[960px] flex flex-col justify-between py-4 sm:py-5 lg:py-7 bg-[#F8FAFC] border-y border-slate-200/80 overflow-y-auto lg:overflow-hidden select-none">
        {/* Subtle Ambient Background Gradient Lighting */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-700"
            style={{ backgroundColor: activeStage.color }}
          />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-navy-midnight/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between relative z-10">
          {/* 1. Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-200/80 shrink-0">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-coral-bright mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright animate-pulse" />
                <span>HOW WE WORK • SIX-STAGE DELIVERY METHODOLOGY</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
                From Requirement to{' '}
                <span className="swift-gradient-text">Results.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Active Stage Indicator Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <span
                  className="w-2 h-2 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: activeStage.color }}
                />
                <span className="font-mono text-xs font-bold text-navy-midnight">
                  Stage {activeStage.number} <span className="text-slate-400 font-normal">/ 06</span>
                </span>
              </div>

              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-bright hover:text-coral-magenta transition-colors group max-sm:min-h-[44px]"
              >
                <span>Full Methodology</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 2. Interactive Process Timeline Rail */}
          <div className="py-2 sm:py-2.5 shrink-0">
            <div className="relative">
              {/* Connecting Background Line (Desktop) */}
              <div className="hidden lg:block absolute top-4 left-6 right-6 h-0.5 bg-slate-200/90 z-0">
                <div
                  className="h-full bg-swift-gradient transition-all duration-300 ease-out"
                  style={{
                    width: `${Math.max(0, Math.min(100, scrollProgress * 100))}%`
                  }}
                />
              </div>

              {/* Stage Step Tabs */}
              <ol
                ref={timelineRailRef}
                role="tablist"
                aria-label="Six-stage delivery progression"
                className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar scroll-smooth relative z-10 py-1"
              >
                {stages.map((stage, idx) => {
                  const isActive = idx === activeIndex;
                  const isCompleted = idx < activeIndex;

                  return (
                    <li key={stage.number} role="none" className="shrink-0 flex-1 min-w-[125px] lg:min-w-0">
                      <button
                        role="tab"
                        type="button"
                        id={`delivery-tab-${idx}`}
                        aria-selected={isActive}
                        aria-controls="delivery-spotlight-card"
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => scrollToStage(idx)}
                        onKeyDown={(e) => onKeyDown(e, idx)}
                        ref={(node) => {
                          tabRefs.current[idx] = node;
                        }}
                        className={`w-full group flex flex-col items-center text-center p-1.5 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright ${
                          isActive
                            ? 'bg-white shadow-xs border border-slate-200'
                            : 'hover:bg-white/60'
                        }`}
                      >
                        {/* Step Circle Indicator */}
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold border transition-all duration-300 mb-1"
                          style={
                            isActive
                              ? {
                                  backgroundColor: stage.color,
                                  borderColor: stage.color,
                                  color: '#FFFFFF',
                                  boxShadow: `0 0 0 3px ${stage.color}25`
                                }
                              : isCompleted
                              ? {
                                  backgroundColor: '#FFFFFF',
                                  borderColor: stage.color,
                                  color: stage.color
                                }
                              : {
                                  backgroundColor: '#FFFFFF',
                                  borderColor: '#CBD5E1',
                                  color: '#94A3B8'
                                }
                          }
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : (
                            stage.number
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <span
                          className={`block text-[11px] sm:text-xs font-heading font-bold truncate max-w-full transition-colors ${
                            isActive ? 'text-navy-midnight' : 'text-slate-600 group-hover:text-navy-midnight'
                          }`}
                        >
                          {stage.name}
                        </span>
                        <span
                          className="block font-mono text-[9px] uppercase tracking-wider mt-0.5"
                          style={{ color: isActive ? stage.color : '#94A3B8' }}
                        >
                          {stage.tagline}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* 3. The Active Stage Hero Spotlight Card */}
          <div
            id="delivery-spotlight-card"
            role="tabpanel"
            aria-labelledby={`delivery-tab-${activeIndex}`}
            className="flex-1 my-1.5 sm:my-2 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden relative flex flex-col justify-between transition-all duration-500"
          >
            {/* Top Color Accent Line */}
            <div
              className="h-1.5 w-full transition-colors duration-500"
              style={{ backgroundColor: activeStage.color }}
            />

            {/* Giant Watermark Background Number */}
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-10 text-[140px] sm:text-[220px] font-heading font-black select-none pointer-events-none transition-all duration-700 opacity-[0.04] leading-none"
              style={{ color: activeStage.color }}
            >
              {activeStage.number}
            </div>

            <div
              key={activeStage.number}
              className="animate-fade-in p-4 sm:p-6 lg:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center relative z-10"
            >
              {/* Left Column: Stage Objective & Key Activities */}
              <div className="lg:col-span-7 space-y-3.5">
                {/* Eyebrow & Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${activeStage.color}15`,
                      borderColor: `${activeStage.color}35`,
                      color: activeStage.color
                    }}
                  >
                    Stage {activeStage.number} • {activeStage.badge}
                  </span>

                  <span className="text-slate-300 hidden sm:inline">•</span>

                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    Step {activeIndex + 1} of 6
                  </span>
                </div>

                {/* Stage Headline */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-navy-midnight leading-tight tracking-tight">
                  {activeStage.headline}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {activeStage.description}
                </p>

                {/* 3 Key Operational Activities */}
                <div className="pt-1 space-y-1.5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Key Operational Activities:
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {activeStage.activities.map((activity, aIdx) => (
                      <li
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-midnight font-medium bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 transition-all hover:bg-white hover:border-slate-300"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5 transition-colors"
                          style={{ color: activeStage.color }}
                        />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Key Deliverable Card & Interactive Navigation */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
                {/* Milestone Deliverable Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/80 border border-slate-200/90 shadow-xs relative overflow-hidden space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500">
                      MILESTONE DELIVERABLE
                    </span>
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-xs"
                      style={{
                        backgroundColor: activeStage.color,
                        color: '#FFFFFF'
                      }}
                    >
                      <ActiveIcon className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-base font-heading font-extrabold text-navy-midnight leading-snug">
                      {activeStage.deliverable}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {activeStage.deliverableType}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/70 text-[11px] text-slate-600 space-y-1">
                    <p>
                      <span className="font-mono text-slate-400 uppercase">Stakeholders: </span>
                      <span className="font-medium text-navy-midnight">{activeStage.stakeholders}</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-emerald-700 font-semibold pt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Governed by Milestone Sign-Off</span>
                    </p>
                  </div>
                </div>

                {/* Stage Progression Controls & Scroll Cue */}
                <div className="flex items-center justify-between pt-0.5">
                  {/* Scroll Cue Hint */}
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-coral-bright animate-ping" />
                    <span>Scroll page to advance</span>
                  </div>

                  {/* Manual Prev / Next Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevStage}
                      disabled={activeIndex === 0}
                      aria-label="Previous Stage"
                      className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-white hover:text-navy-midnight disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStage}
                      disabled={activeIndex === stages.length - 1}
                      aria-label="Next Stage"
                      className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-white hover:text-navy-midnight disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Mini Progress Bar */}
            <div className="h-1 bg-slate-100 w-full overflow-hidden">
              <div
                className="h-full bg-swift-gradient transition-all duration-300 ease-out"
                style={{
                  width: `${((activeIndex + 1) / stages.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* 4. Compact Governance Strip */}
          <div className="rounded-xl bg-white border border-slate-200/80 px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 shrink-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
              Governed at every stage
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
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
