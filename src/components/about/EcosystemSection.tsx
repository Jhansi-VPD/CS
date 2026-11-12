'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Milestone,
  Users,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { ScrollReveal } from '../common/ScrollReveal';

const ownerDuties = [
  {
    icon: Crosshair,
    title: 'Clarify business requirements.',
    detail: 'Shape the outcome before delivery begins.',
  },
  {
    icon: Milestone,
    title: 'Define project scopes and milestones.',
    detail: 'Turn intent into measurable checkpoints.',
  },
  {
    icon: Users,
    title: 'Identify relevant delivery capabilities.',
    detail: 'Match the need to the right team.',
  },
];

const partnerSteps = [
  'Share capabilities and experience.',
  'Explore project fit for relevant work.',
  'Align on delivery and commercial expectations.',
];

const HubConnector: React.FC = () => (
  <>
    <div
      className="relative hidden min-h-[440px] flex-col items-center justify-center lg:flex"
      aria-label="Coral Swift connects project owners and delivery organizations"
    >
      <svg
        className="ecosystem-connectors pointer-events-none absolute left-1/2 top-1/2 h-32 w-[230px] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="0 0 230 128"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <marker id="ecosystem-owner-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#F05E47" />
          </marker>
          <marker id="ecosystem-partner-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
            <path d="M0 0L7 3.5L0 7Z" fill="#D21D61" />
          </marker>
        </defs>
        <path
          d="M0 64C28 64 48 64 78 64"
          stroke="#F05E47"
          strokeWidth="1.5"
          strokeDasharray="4 7"
          markerEnd="url(#ecosystem-owner-arrow)"
          className="ecosystem-flow"
        />
        <path
          d="M230 64C202 64 182 64 152 64"
          stroke="#D21D61"
          strokeWidth="1.5"
          strokeDasharray="4 7"
          markerEnd="url(#ecosystem-partner-arrow)"
          className="ecosystem-flow ecosystem-flow-reverse"
        />
        <circle cx="7" cy="64" r="2.5" fill="#F98F33" />
        <circle cx="223" cy="64" r="2.5" fill="#950B6D" />
      </svg>

      <div className="relative grid h-28 w-28 place-items-center rounded-full border border-white/90 bg-white/90 shadow-[0_12px_42px_rgba(8,11,46,0.12)]">
        <span aria-hidden="true" className="absolute inset-[-13px] rounded-full border border-[#F05E47]/15" />
        <span aria-hidden="true" className="absolute inset-[-27px] rounded-full border border-[#D21D61]/10" />
        <Logo variant="emblem-only" theme="light" size="md" asLink={false} />
      </div>
      <span className="mt-7 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#080B2E]/65">
        The Connection Hub
      </span>
      <span className="mt-2 max-w-[190px] text-center text-xs leading-relaxed text-slate-500">
        Aligning project needs with delivery capabilities
      </span>
    </div>

    <div
      className="flex flex-col items-center py-7 lg:hidden"
      aria-label="Coral Swift connects project owners and delivery organizations"
    >
      <svg className="h-9 w-8" viewBox="0 0 32 36" fill="none" aria-hidden="true">
        <path d="M16 0V36" stroke="#F05E47" strokeWidth="1.5" strokeDasharray="3 5" className="ecosystem-flow" />
      </svg>
      <div className="relative grid h-[76px] w-[76px] place-items-center rounded-full border border-white/90 bg-white shadow-[0_8px_32px_rgba(8,11,46,0.12)]">
        <span aria-hidden="true" className="absolute inset-[-9px] rounded-full border border-[#F05E47]/15" />
        <Logo variant="emblem-only" theme="light" size="sm" asLink={false} />
      </div>
      <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#080B2E]/65">
        The Connection Hub
      </span>
      <span className="mt-1 max-w-[220px] text-center text-xs leading-relaxed text-slate-500">
        Aligning project needs with delivery capabilities
      </span>
      <svg className="mt-3 h-9 w-8" viewBox="0 0 32 36" fill="none" aria-hidden="true">
        <path d="M16 0V36" stroke="#D21D61" strokeWidth="1.5" strokeDasharray="3 5" className="ecosystem-flow ecosystem-flow-reverse" />
      </svg>
    </div>
  </>
);

export const EcosystemSection: React.FC = () => (
  <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-[#FFF9F6] py-16 sm:py-20 lg:py-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-[#F98F33]/[0.08] blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D21D61]/[0.07] blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: 'radial-gradient(#080B2E 0.7px, transparent 0.7px)',
        backgroundSize: '24px 24px',
      }}
    />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="up">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E65349]">
            <span className="h-px w-8 bg-[#F05E47]/60" />
            Our Ecosystem
            <span className="h-px w-8 bg-[#F05E47]/60" />
          </div>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#080B2E] sm:text-4xl lg:text-5xl">
            Two sides.{' '}
            <span className="bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#D21D61] bg-clip-text text-transparent">
              One connected ecosystem.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We bring project owners and delivery organizations into a structured collaboration built around clear expectations.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-0 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_230px_minmax(0,1fr)]">
        <ScrollReveal direction="left" className="relative z-10 lg:pr-8">
          <div className="pointer-events-none absolute -left-12 -top-10 h-48 w-48 rounded-full bg-[#F98F33]/[0.06] blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E65349]">
              For Project Owners
            </p>
            <h3 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#080B2E] sm:text-4xl lg:text-[42px]">
              Define the need.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Start with a defined business need and establish the right foundation for a coordinated engagement.
            </p>

            <div className="mt-8 max-w-xl">
              {ownerDuties.map((duty, index) => (
                <div
                  key={duty.title}
                  className="group flex items-start gap-4 border-b border-slate-200/70 py-4 first:pt-0 last:border-0"
                >
                  <duty.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F05E47] transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold leading-snug text-[#080B2E] sm:text-[15px]">
                      {duty.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {duty.detail}
                    </p>
                  </div>
                  <span className="ml-auto hidden pt-1 font-mono text-[10px] font-bold text-[#F05E47]/65 sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#E65349] transition-colors hover:text-[#D21D61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F05E47]"
            >
              Discuss a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <HubConnector />

        <ScrollReveal direction="right" delay={120} className="relative z-10 lg:pl-8">
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-[#D21D61]/[0.07] blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D21D61]">
              For Delivery Organizations
            </p>
            <h3 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#080B2E] sm:text-4xl lg:text-[42px]">
              Bring the capability.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Present your capabilities, explore relevant opportunities and align on expectations before an engagement moves forward.
            </p>

            <ol className="mt-8 max-w-xl">
              {partnerSteps.map((step, index) => (
                <li
                  key={step}
                  className="group flex items-start gap-4 border-b border-slate-200/70 py-5 first:pt-0 last:border-0"
                >
                  <span className="min-w-9 font-heading text-xl font-extrabold leading-none text-[#D21D61] transition-transform duration-300 group-hover:translate-x-0.5">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-[#080B2E] sm:text-[15px]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <Link
              href="/partnerships"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#D21D61] transition-colors hover:text-[#950B6D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D21D61]"
            >
              Explore partnerships
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={180}>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 text-center sm:mt-14">
          <div className="h-px w-16 bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#D21D61]" />
          <p className="text-xs font-medium leading-relaxed text-slate-500 sm:text-sm">
            Clear requirements. Relevant capabilities. Structured collaboration.
          </p>
        </div>
      </ScrollReveal>
    </div>

    <style jsx>{`
      @keyframes ecosystem-flow {
        to {
          stroke-dashoffset: -44;
        }
      }

      .ecosystem-flow {
        animation: ecosystem-flow 4.5s linear infinite;
      }

      .ecosystem-flow-reverse {
        animation-direction: reverse;
      }

      @media (prefers-reduced-motion: reduce) {
        .ecosystem-flow {
          animation: none;
        }
      }
    `}</style>
  </section>
);

export default EcosystemSection;
