import React from 'react';
import Link from 'next/link';
import { ArrowRight, Crosshair, Milestone, Users } from 'lucide-react';
import { Logo } from '../common/Logo';
import { ScrollReveal } from '../common/ScrollReveal';

const ownerDuties = [
  {
    icon: Crosshair,
    title: 'Clarify business requirements',
    detail: 'Shape the outcome before delivery begins.',
  },
  {
    icon: Milestone,
    title: 'Define project scopes and milestones',
    detail: 'Turn intent into measurable checkpoints.',
  },
  {
    icon: Users,
    title: 'Identify relevant delivery capabilities',
    detail: 'Match the need to the right team.',
  },
];

const partnerSteps = [
  'Share capabilities and experience',
  'Explore project fit for relevant work',
  'Align on delivery and commercial expectations',
];

const HubConnector: React.FC = () => (
  <div className="self-center flex flex-col items-center py-2 lg:py-0" aria-hidden="true">
    {/* Desktop: horizontal dashed connectors converging on the hub */}
    <div className="relative hidden lg:flex items-center justify-center w-44 h-28">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 176 112" fill="none">
        <path d="M 0 56 C 36 40 56 50 70 56" stroke="#F05E47" strokeOpacity="0.55" strokeWidth="1.5" className="cs-dash-flow" />
        <path d="M 176 56 C 140 40 120 50 106 56" stroke="#D21D61" strokeOpacity="0.55" strokeWidth="1.5" className="cs-dash-flow" />
      </svg>
      <span className="relative w-16 h-16 rounded-full bg-white border border-slate-200 shadow-md grid place-items-center">
        <Logo variant="emblem-only" theme="light" size="sm" asLink={false} />
      </span>
    </div>
    <span className="hidden lg:block mt-1 text-[9px] font-mono font-semibold uppercase tracking-widest text-slate-400">
      Coral Swift
    </span>
    {/* Mobile: simple vertical connector */}
    <span className="lg:hidden w-px h-10 border-l-2 border-dashed border-coral-bright/40" />
  </div>
);

export const EcosystemSection: React.FC = () => (
  <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-[#F2EEF9] border-b border-slate-200/60 py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="up">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
            Our Ecosystem
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight leading-snug">
            Two sides, one structured collaboration
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We bring project owners and delivery organizations into a structured collaboration built around clear expectations.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 max-w-6xl mx-auto items-center">
        {/* Side A — Project Owners */}
        <ScrollReveal direction="left">
          <div className="group/panel relative h-full overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-card-soft p-6 sm:p-7 hover:shadow-card-hover transition-shadow duration-300">
            <div
              className="absolute -top-14 -left-14 w-44 h-44 rounded-full bg-gradient-to-br from-coral-orange/15 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-coral-bright">
                For Project Owners
              </span>
              <h3 className="mt-2 text-lg sm:text-xl font-heading font-extrabold text-navy-midnight">
                A clearer path from requirement to delivery
              </h3>
              <ul className="mt-5 space-y-1.5">
                {ownerDuties.map((duty) => (
                  <li
                    key={duty.title}
                    className="group/row flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 transition-colors duration-200 hover:bg-coral-50/50"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-coral-50 text-coral-bright grid place-items-center transition-colors duration-200 group-hover/row:bg-coral-100">
                      <duty.icon className="w-4 h-4" />
                    </span>
                    <span className="leading-snug">
                      <span className="block text-sm font-bold text-navy-midnight">{duty.title}</span>
                      <span className="block text-xs text-slate-500 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover/row:opacity-100 group-hover/row:max-h-8">
                        {duty.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="tap-link inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-coral-bright hover:underline"
              >
                <span>Discuss a project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/panel:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <HubConnector />

        {/* Side B — Delivery Organizations */}
        <ScrollReveal direction="right" delay={120}>
          <div className="group/panel relative h-full overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-card-soft p-6 sm:p-7 hover:shadow-card-hover transition-shadow duration-300">
            <div
              className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full bg-gradient-to-tl from-coral-magenta/12 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-coral-magenta">
                For Delivery Organizations
              </span>
              <h3 className="mt-2 text-lg sm:text-xl font-heading font-extrabold text-navy-midnight">
                A structured way to explore partnership
              </h3>
              <ol className="mt-5 space-y-1.5">
                {partnerSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 transition-colors duration-200 hover:bg-[#F5EFF8]"
                  >
                    <span className="shrink-0 font-mono text-[11px] font-bold text-coral-magenta/80 pt-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-sm font-bold text-navy-midnight leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/partnerships"
                className="tap-link inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-coral-magenta hover:underline"
              >
                <span>Explore partnerships</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/panel:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default EcosystemSection;
