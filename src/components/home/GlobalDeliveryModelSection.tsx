'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileCheck,
  FileText,
  RefreshCw,
  ShieldCheck
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
    description: 'Understand business needs and define project requirements.',
    deliverable: 'Requirement Matrix & SOW Draft',
    icon: FileText,
    color: '#F98F33'
  },
  {
    number: '02',
    name: 'Validation',
    tagline: 'Validate',
    description: 'Evaluate feasibility and establish the technical baseline.',
    deliverable: 'Technical Feasibility Report',
    icon: CheckCircle2,
    color: '#F05E47'
  },
  {
    number: '03',
    name: 'Partner Assessment',
    tagline: 'Assess',
    description: 'Evaluate partner capabilities and delivery readiness.',
    deliverable: 'Partner Assessment Report',
    icon: ShieldCheck,
    color: '#E73B50'
  },
  {
    number: '04',
    name: 'Scoping',
    tagline: 'Define',
    description: 'Establish project scope, responsibilities and commercial terms.',
    deliverable: 'Bilateral SOW and agreed commercial documentation',
    icon: FileCheck,
    color: '#D21D61'
  },
  {
    number: '05',
    name: 'Delivery & QA',
    tagline: 'Execute',
    description: 'Execute deliverables through structured delivery and quality reviews.',
    deliverable: 'Sprint Releases & CI/CD Records',
    icon: Cpu,
    color: '#950B6D'
  },
  {
    number: '06',
    name: 'Continuous Improvement',
    tagline: 'Optimize',
    description: 'Review performance and identify opportunities for improvement.',
    deliverable: 'Governance and Performance Review',
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
  const [scrollStage, setScrollStage] = useState(0);
  const [pinnedStage, setPinnedStage] = useState<number | null>(null);
  const pinnedOriginRef = useRef(0);
  const journeyRef = useRef<HTMLOListElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = pinnedStage ?? scrollStage;
  const activeStage = stages[activeIndex];
  const ActiveIcon = activeStage.icon;

  const selectStage = (index: number) => {
    setPinnedStage(index);
    pinnedOriginRef.current = scrollStage;
  };

  // Stage progression follows the scroll position while the journey is on screen.
  // Content changes are not motion; the connector/detail transitions are already
  // neutralised by the prefers-reduced-motion block in globals.css.
  useEffect(() => {
    const apply = () => {
      const journey = journeyRef.current;
      if (!journey) return;
      const viewportHeight = window.innerHeight;
      const { top } = journey.getBoundingClientRect();
      // Stage 0 as the journey enters the viewport, stage 5 once it reaches the upper quarter.
      const span = Math.max(viewportHeight * 0.65, 420);
      const progress = Math.min(1, Math.max(0, (viewportHeight * 0.9 - top) / span));
      const next = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      setScrollStage(next);
      // A manual selection survives until scrolling moves to a different stage.
      setPinnedStage((pinned) =>
        pinned !== null && next !== pinnedOriginRef.current ? null : pinned
      );
    };

    apply();
    window.addEventListener('scroll', apply, { passive: true });
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('scroll', apply);
      window.removeEventListener('resize', apply);
    };
  }, []);

  const moveFocus = (next: number) => {
    selectStage(next);
    tabRefs.current[next]?.focus();
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
    moveFocus(next);
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden">
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

        {/* Six-Stage Delivery Journey */}
        <ScrollReveal direction="up" delay={100} className="mt-9">
          <ol
            ref={journeyRef}
            role="tablist"
            aria-label="Six-stage delivery journey"
            className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6"
          >
            {stages.map((stage, index) => {
              const isActive = index === activeIndex;
              const isCompleted = index < activeIndex;

              return (
                <li key={stage.number} role="none" className="relative">
                  {/* Vertical connector (mobile journey) */}
                  {index < stages.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="md:hidden absolute left-[21px] top-[46px] -bottom-[22px] w-px bg-slate-200"
                    >
                      <span
                        className="block w-px bg-swift-gradient transition-all duration-500 ease-out"
                        style={{ height: isCompleted ? '100%' : '0%' }}
                      />
                    </span>
                  )}

                  {/* Horizontal connector (desktop process rail) */}
                  {index < stages.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute top-6 left-[calc(50%_+_1.125rem)] right-[calc(-50%_+_0.375rem)] h-px bg-slate-200"
                    >
                      <span
                        className="block h-px bg-swift-gradient transition-all duration-500 ease-out"
                        style={{ width: isCompleted ? '100%' : '0%' }}
                      />
                    </span>
                  )}

                  <button
                    role="tab"
                    type="button"
                    id={`delivery-journey-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="delivery-journey-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectStage(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-1 py-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC] lg:flex-col lg:items-center lg:text-center lg:gap-2.5 lg:px-1 lg:py-1.5 transition-colors`}
                  >
                    <span
                      className="relative z-10 w-9 h-9 shrink-0 rounded-full grid place-items-center font-mono text-[11px] font-bold bg-white border transition-all duration-300"
                      style={
                        isActive
                          ? {
                              backgroundColor: stage.color,
                              borderColor: stage.color,
                              color: '#FFFFFF',
                              boxShadow: `0 0 0 4px ${stage.color}1A`
                            }
                          : isCompleted
                            ? { borderColor: `${stage.color}59`, color: stage.color }
                            : { borderColor: '#E2E8F0', color: '#94A3B8' }
                      }
                    >
                      {stage.number}
                    </span>

                    <span className="min-w-0 lg:px-0.5">
                      <span
                        className={`block text-[13px] font-heading font-bold leading-snug transition-colors ${
                          isActive ? 'text-navy-midnight' : 'text-slate-600 group-hover:text-navy-midnight'
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

                  {/* Stage detail — expands inline under the active step on mobile only */}
                  <div
                    aria-hidden={!isActive}
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                      isActive ? 'max-h-56 opacity-100 mt-1' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="rounded-lg bg-white border border-slate-200/80 p-3">
                      <p className="text-[13px] text-slate-600 leading-relaxed">{stage.description}</p>
                      <p className="mt-2 pt-2 border-t border-slate-100 text-[11px] leading-snug">
                        <span className="font-mono uppercase tracking-wider text-slate-400">Deliverable · </span>
                        <span className="font-semibold text-navy-midnight">{stage.deliverable}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <p aria-live="polite" className="sr-only">
            Stage {activeStage.number}: {activeStage.name}. {activeStage.description}
          </p>

          {/* Active stage detail — tablet & desktop */}
          <div
            role="tabpanel"
            tabIndex={0}
            id="delivery-journey-panel"
            aria-labelledby={`delivery-journey-tab-${activeIndex}`}
            className="hidden md:block mt-5 rounded-xl bg-white border border-slate-200/80 shadow-card-soft px-4 sm:px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright/50"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3 min-w-0">
                <span
                  className="w-9 h-9 shrink-0 rounded-lg grid place-items-center"
                  style={{ backgroundColor: `${activeStage.color}12`, color: activeStage.color }}
                >
                  <ActiveIcon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-heading font-bold text-navy-midnight leading-snug">
                    <span className="font-mono text-[11px] text-slate-400 mr-1.5">{activeStage.number}</span>
                    {activeStage.name}
                    <span className="text-slate-400 font-medium"> · {activeStage.tagline}</span>
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed mt-0.5">
                    {activeStage.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 sm:text-right rounded-lg bg-slate-50 border border-slate-200/70 px-3.5 py-2">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Deliverable</p>
                <p className="text-[13px] font-semibold text-navy-midnight leading-snug mt-0.5">
                  {activeStage.deliverable}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Compact governance strip */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-5 rounded-xl bg-white border border-slate-200/80 px-4 py-3.5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Governed at every stage
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-2">
              {GOVERNANCE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-xs font-semibold text-navy-midnight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalDeliveryModelSection;
