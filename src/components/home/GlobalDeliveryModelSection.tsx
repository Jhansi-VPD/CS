'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface Stage {
  number: string;
  name: string;
  subaction: string;
  description: string;
  deliverable: string;
}

const stages: Stage[] = [
  {
    number: '01',
    name: 'Requirement',
    subaction: 'Setting goals & scope',
    description: 'Understand business goals and define project requirements.',
    deliverable: 'Documented requirement list'
  },
  {
    number: '02',
    name: 'Validation',
    subaction: 'Checking feasibility & fit',
    description: 'Evaluate feasibility, volume baselines, and delivery fit.',
    deliverable: 'Validated requirement brief'
  },
  {
    number: '03',
    name: 'Partner Assessment',
    subaction: 'Auditing capabilities',
    description: 'Review partner capacity, security standards, and history.',
    deliverable: 'Partner assessment report'
  },
  {
    number: '04',
    name: 'Scoping',
    subaction: 'Defining terms & contract',
    description: 'Agree scope, responsibilities, milestones, and terms.',
    deliverable: 'Agreed scope and contract'
  },
  {
    number: '05',
    name: 'Delivery & QA',
    subaction: 'Coding & sprint testing',
    description: 'Sprint delivery, acceptance testing, and milestone sign-off.',
    deliverable: 'Reviewed delivery output'
  },
  {
    number: '06',
    name: 'Continuous Improvement',
    subaction: 'Testing & optimizing',
    description: 'Review SLA performance, quality metrics, and next phase.',
    deliverable: 'Performance & quality review'
  }
];

const GOVERNANCE_POINTS = [
  'Scope agreed before work starts',
  'Quality checked during delivery',
  'Progress reported to clients'
];

export const GlobalDeliveryModelSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="stages-section"
      className="relative py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100 overflow-hidden"
    >
      {/* Background Minimal Circular Arc Graphic (Reference Design) */}
      <div
        aria-hidden="true"
        className="absolute top-2 right-4 sm:right-16 lg:right-28 w-80 h-80 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] pointer-events-none select-none -z-0 opacity-70 sm:opacity-90"
      >
        <svg
          viewBox="0 0 440 440"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner subtle filled circle */}
          <circle cx="220" cy="220" r="68" fill="#F4F7FB" />

          {/* Inner dashed concentric ring */}
          <circle
            cx="220"
            cy="220"
            r="135"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.85"
          />

          {/* Outer continuous thin outline ring */}
          <circle
            cx="220"
            cy="220"
            r="175"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Prominent thick arc segment: Top-Right (approx 20 deg to 110 deg) */}
          <path
            d="M 305 75 A 160 160 0 0 1 380 220"
            stroke="#E8EEF5"
            strokeWidth="36"
            strokeLinecap="round"
          />

          {/* Prominent thick arc segment: Bottom-Left (approx 190 deg to 250 deg) */}
          <path
            d="M 105 265 A 160 160 0 0 1 138 345"
            stroke="#EEF3F8"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Vertical "• • • STAGES •" rail indicator from Reference Design */}
      <div
        aria-hidden="true"
        className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-2 select-none pointer-events-none text-slate-400 z-10"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.28em] [writing-mode:vertical-rl] text-slate-400 py-2">
          STAGES
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-slate-100">
          <ScrollReveal direction="up" className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright">
              <span className="w-2 h-2 rounded-full bg-coral-bright" />
              <span>Delivery Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-navy-midnight tracking-tight leading-[1.12]">
              How we work
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
              We validate your requirements, assess partner capabilities, and coordinate milestone-governed delivery for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} className="shrink-0">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-coral-50 border border-slate-200 hover:border-coral-200 text-xs sm:text-sm font-heading font-bold text-navy-midnight hover:text-coral-bright transition-all shadow-xs"
            >
              <span>See Full Methodology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Linear Stages Progression Flow */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <ol
            aria-label="Six-stage delivery methodology"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 lg:gap-4 xl:gap-6"
          >
            {stages.map((stage, index) => {
              const isHovered = hoveredIndex === index;
              const isLastInDesktop = index === stages.length - 1;
              const isLastInRowTablet = index === 2 || index === 5;

              return (
                <li
                  key={stage.number}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex flex-col justify-between transition-all duration-300"
                >
                  <ScrollReveal
                    direction="up"
                    delay={index * 80}
                    className="flex flex-col h-full"
                  >
                    {/* Top Row: Large Number + Horizontal Connecting Arrow */}
                    <div className="flex items-center justify-between w-full">
                      {/* Big Bold Number (matches the large vibrant numbers in reference image) */}
                      <span className="font-heading font-black text-4xl sm:text-4xl lg:text-5xl xl:text-5xl tracking-tight text-coral-bright leading-none select-none transition-transform duration-300 group-hover:scale-105 inline-block">
                        {stage.number}
                      </span>

                      {/* Horizontal Arrow Line (hidden on last item in desktop; wraps appropriately on tablet) */}
                      <div
                        className={`flex-1 flex items-center pl-3 pr-1 sm:pl-4 sm:pr-2 select-none pointer-events-none ${
                          isLastInDesktop ? 'lg:hidden' : ''
                        } ${isLastInRowTablet ? 'md:max-lg:hidden' : ''}`}
                        aria-hidden="true"
                      >
                        <div className="w-full relative flex items-center">
                          {/* Horizontal Arrow Shaft */}
                          <div
                            className={`w-full h-[2px] transition-colors duration-300 ${
                              isHovered ? 'bg-coral-bright' : 'bg-slate-300 group-hover:bg-coral-bright/60'
                            }`}
                          />
                          {/* Arrowhead */}
                          <svg
                            className={`w-3.5 h-3.5 -ml-1 shrink-0 transition-colors duration-300 ${
                              isHovered ? 'text-coral-bright' : 'text-slate-300 group-hover:text-coral-bright'
                            }`}
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M5 2L10 7L5 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Stage Details Below Number (matches clean 2-line title & subtitle from image) */}
                    <div className="mt-3 sm:mt-4 space-y-1.5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Primary Stage Title */}
                        <h3 className="font-heading font-extrabold text-base sm:text-base lg:text-base xl:text-base text-navy-midnight leading-snug group-hover:text-coral-bright transition-colors">
                          {stage.name}
                        </h3>

                        {/* Sub-action label (e.g., Setting goals, Developing prototype) */}
                        <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5 leading-snug">
                          {stage.subaction}
                        </p>

                        {/* Brief explanation */}
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">
                          {stage.description}
                        </p>
                      </div>

                      {/* Key Deliverable Indicator */}
                      <div className="pt-2 mt-2 border-t border-slate-100 flex items-start gap-1.5 text-xs font-semibold text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0 mt-0.5" />
                        <span className="leading-tight">{stage.deliverable}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Bottom Governance Reassurance Strip */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-12 sm:mt-14 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
              {GOVERNANCE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 font-semibold text-navy-midnight"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 font-bold text-coral-bright hover:underline shrink-0"
            >
              <span>Explore 6-Stage Governance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalDeliveryModelSection;
