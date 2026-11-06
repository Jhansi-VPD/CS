'use client';

import React, { useState, useRef } from 'react';
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = hoveredIndex ?? selectedIndex;
  const activeStage = stages[activeIndex];
  const ActiveIcon = activeStage.icon;

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
    setSelectedIndex(next);
    setHoveredIndex(next);
    tabRefs.current[next]?.focus();
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

        {/* Process Timeline Rail (Interactive with Smooth Hover & Tap) */}
        <ScrollReveal direction="up" delay={100} className="mt-8">
          <div className="relative">
            {/* Desktop Connecting Line between Stage Circles */}
            <div
              className="hidden lg:block absolute top-[28px] left-[calc(8.333%)] right-[calc(8.333%)] h-[2px] bg-slate-200 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="h-full bg-swift-gradient transition-all duration-300 ease-out"
                style={{
                  width: `${(activeIndex / (stages.length - 1)) * 100}%`
                }}
              />
            </div>

            <ol
              role="tablist"
              aria-label="Six-stage delivery methodology"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {stages.map((stage, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={stage.number} role="none" className="relative">
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
                      onMouseEnter={() => setHoveredIndex(index)}
                      onFocus={() => setHoveredIndex(index)}
                      onBlur={() => setHoveredIndex(null)}
                      onClick={() => {
                        setSelectedIndex(index);
                        setHoveredIndex(null);
                      }}
                      onKeyDown={(e) => onKeyDown(e, index)}
                      className={`group relative flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright lg:flex-col lg:items-center lg:text-center ${
                        isActive
                          ? 'bg-white shadow-sm border border-slate-300/90 -translate-y-0.5'
                          : 'bg-white/60 hover:bg-white border border-slate-200/70 hover:border-slate-300'
                      }`}
                    >
                      <span
                        className="w-8 h-8 shrink-0 rounded-full grid place-items-center font-mono text-xs font-bold transition-all duration-200"
                        style={
                          isActive
                            ? {
                                backgroundColor: stage.color,
                                color: '#FFFFFF',
                                boxShadow: `0 0 0 3px ${stage.color}25`
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
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Active Stage Detail Panel with Smooth Slide-Up & Fade-In */}
          <div
            role="tabpanel"
            id="home-stage-panel"
            aria-labelledby={`home-stage-tab-${activeIndex}`}
            className="mt-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-5 sm:p-6 transition-all duration-300 min-h-[110px] sm:min-h-[96px] flex flex-col justify-center"
          >
            <div
              key={activeStage.number}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in-up"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <span
                  className="w-10 h-10 shrink-0 rounded-xl grid place-items-center transition-colors duration-300"
                  style={{ backgroundColor: `${activeStage.color}15`, color: activeStage.color }}
                >
                  <ActiveIcon className="w-5 h-5 transition-transform duration-300" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-heading font-bold text-navy-midnight leading-snug">
                    <span className="font-mono text-xs text-slate-400 mr-2">Stage {activeStage.number}</span>
                    {activeStage.name}
                    <span className="text-slate-400 font-medium"> · {activeStage.tagline}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1 max-w-2xl">
                    {activeStage.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 sm:text-right rounded-xl bg-slate-50 border border-slate-200/80 px-4 py-2.5 transition-colors duration-300">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Key Deliverable</p>
                <p className="text-xs sm:text-sm font-semibold text-navy-midnight leading-snug mt-0.5">
                  {activeStage.deliverable}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Compact Governance Strip */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-5 rounded-xl bg-white border border-slate-200/80 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalDeliveryModelSection;
