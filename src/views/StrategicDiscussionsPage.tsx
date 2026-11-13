'use client';

import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { StrategicEnquiryForm } from '../components/forms/StrategicEnquiryForm';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Button } from '../components/common/Button';

const visionPillars = [
  { index: '01', title: 'Delivery Strength', text: 'Established teams, domain expertise, and operational capability.' },
  { index: '02', title: 'Market Alignment', text: 'Opportunities to connect business capabilities with international requirements.' },
  { index: '03', title: 'Shared Direction', text: 'Long-term alignment around responsibilities, governance, and growth.' }
];

const orgProfiles = [
  'Established IT and software companies.',
  'Business-process and operational service providers.',
  'Organisations with proven domain expertise and delivery teams.',
  'Companies exploring strategic integration or equity participation.'
];

const readinessAreas = [
  {
    index: '01',
    title: 'Operating Experience',
    text: 'Business history, operating stability, and relevant experience.',
    guideline: '3+ years of established operations, with audited history.'
  },
  {
    index: '02',
    title: 'Workforce & Capabilities',
    text: 'Team structure, workforce evidence, and service expertise.',
    guideline: '50+ employed personnel with verifiable payroll or statutory records.'
  },
  {
    index: '03',
    title: 'Financial Position',
    text: 'Financial statements, turnover information, and statutory records.',
    guideline: null
  },
  {
    index: '04',
    title: 'Governance & Delivery',
    text: 'Delivery history, management practices, IP controls, and relevant security processes.',
    guideline: null
  }
];

const journeySteps = [
  { title: 'Initial Enquiry', text: "Share your organisation's background and interest." },
  { title: 'Preliminary Review', text: 'Relevant information is reviewed for potential alignment.' },
  { title: 'Further Discussion', text: 'Suitable enquiries may progress to a detailed conversation.' },
  { title: 'Formal Evaluation', text: 'Any next steps are subject to due diligence and mutually agreed terms.' }
];

const journeyNodeColors = ['bg-coral-orange', 'bg-coral-bright', 'bg-coral-rose', 'bg-coral-magenta'];

const confidentialityPoints = [
  {
    title: 'Restricted Enquiry Handling',
    text: 'Enquiries are treated as restricted correspondence and considered only for preliminary strategic review.'
  },
  {
    title: 'Appropriate Access',
    text: 'Submitted information is made available only to authorised reviewers for the purpose of this evaluation.'
  },
  {
    title: 'Bilateral NDA Arrangements',
    text: 'Formal confidential discussions are preceded by bilateral NDA arrangements, where applicable.'
  }
];

/* Hero visual: two established organisations joined by a shared strategic connection */

const ConnectionVisual: React.FC = () => (
  <div className="relative overflow-hidden rounded-3xl border border-navy-border bg-navy-surface/60 p-4 sm:p-8">
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy-muted">
      Two Organisations · One Strategic Connection
    </p>
    <div className="mt-8 flex items-center">
      <div className="w-[30%] space-y-2.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Established Organisation</p>
        <div className="h-2 w-full rounded-full bg-white/10" />
        <div className="h-2 w-4/5 rounded-full bg-white/10" />
        <div className="h-2 w-3/5 rounded-full bg-coral-orange/40" />
      </div>

      <div className="relative mx-3 h-10 flex-1 sm:mx-5" aria-hidden="true">
        <div className="absolute left-0 right-1/2 top-1/2 h-px bg-gradient-to-r from-white/15 to-coral-orange/60" />
        <div className="absolute left-1/2 right-0 top-1/2 h-px bg-gradient-to-l from-white/15 to-coral-magenta/60" />
        <span className="conn-dot conn-dot-left" />
        <span className="conn-dot conn-dot-right" />
        <span className="conn-core absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-swift-gradient shadow-glow-accent">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
        </span>
      </div>

      <div className="w-[30%] space-y-2.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Established Organisation</p>
        <div className="h-2 w-full rounded-full bg-white/10" />
        <div className="h-2 w-4/5 rounded-full bg-white/10" />
        <div className="h-2 w-3/5 rounded-full bg-coral-magenta/40" />
      </div>
    </div>
    <p className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
      Shared Strategic Connection
    </p>
  </div>
);

export const StrategicDiscussionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strategic Discussions | Coral Swift';
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <style>{`
        .conn-dot {
          position: absolute;
          top: 50%;
          width: 7px;
          height: 7px;
          margin-top: -3.5px;
          border-radius: 9999px;
          opacity: 0;
        }
        .conn-dot-left {
          left: 0;
          background: #F98F33;
          animation: conn-to-center 3.6s ease-in-out infinite;
        }
        .conn-dot-right {
          right: 0;
          background: #D21D61;
          animation: conn-from-right 3.6s ease-in-out infinite;
        }
        @keyframes conn-to-center {
          0% { left: 0; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: calc(50% - 7px); opacity: 0; }
        }
        @keyframes conn-from-right {
          0% { right: 0; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { right: calc(50% - 7px); opacity: 0; }
        }
        .conn-core::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 1px solid rgba(240, 94, 71, 0.5);
          animation: conn-halo 3.6s ease-out infinite;
        }
        @keyframes conn-halo {
          0% { transform: scale(0.7); opacity: 0.9; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-navy-midnight text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dark-grid opacity-[0.15]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-coral-magenta/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-2 sm:pt-3 sm:px-6 sm:pb-16 lg:px-8">
          <Breadcrumbs dark items={[{ label: 'Strategic Discussions' }]} />

          <div className="mt-1.5 sm:mt-2 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="animate-fadeIn lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-coral-orange" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-coral-orange">
                  Strategic Discussions · Confidential Enquiries
                </span>
              </div>
              <h1 className="mt-3 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Building Stronger Business{' '}
                <span className="bg-swift-gradient bg-clip-text text-transparent">Foundations Together.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                We welcome discussions with established organisations exploring strategic alignment, business
                integration, and long-term cross-border opportunities.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href="#strategic-enquiry"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Begin a Confidential Enquiry
                </Button>
                <Button
                  href="#vision"
                  variant="purple"
                  size="md"
                >
                  Understand the Approach
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="scale" delay={140}>
                <ConnectionVisual />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Strategic Vision ---------------- */}
      <section id="vision" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral-bright">Strategic Vision</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
              More Than Subcontracting.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We explore strategic relationships that bring together delivery capabilities, market access, and shared
              business direction.
            </p>
          </ScrollReveal>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[5px] hidden h-px bg-gradient-to-r from-coral-orange/40 via-coral-bright/40 to-coral-magenta/40 lg:block"
            />
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-slate-200">
              {visionPillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} direction="up" delay={i * 120}>
                  <div className={`lg:px-8 ${i === 0 ? 'lg:pl-0' : ''} ${i === visionPillars.length - 1 ? 'lg:pr-0' : ''}`}>
                    <span
                      aria-hidden="true"
                      className="block h-2.5 w-2.5 rounded-full bg-coral-bright ring-4 ring-white"
                    />
                    <p className="mt-6 font-mono text-xs font-bold text-coral-bright">{pillar.index}</p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-navy-midnight">{pillar.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{pillar.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Who Should Explore This ---------------- */}
      <section className="bg-navy-light py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <ScrollReveal direction="up">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral-bright">
                Who Should Explore This
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
                For Established Organisations With a Long-Term Vision.
              </h2>
              <div className="group relative mt-8 overflow-hidden rounded-3xl border border-slate-200/70 shadow-card-soft">
                <img
                  src="/images/strategic-mna-boardroom.jpg"
                  alt="Boardroom setting used for confidential strategic discussions"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {orgProfiles.map((profile, i) => (
                <ScrollReveal key={profile} direction="up" delay={i * 100}>
                  <div className="flex items-baseline gap-6 py-7">
                    <span className="font-mono text-sm font-bold text-coral-bright">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-heading text-lg font-semibold leading-snug text-navy-midnight sm:text-xl">
                      {profile}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Strategic Alignment Framework ---------------- */}
      <section id="readiness" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral-bright">
              Strategic Alignment Framework
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
              Understanding Organisational Readiness.
            </h2>
            <p className="mt-4 text-sm italic leading-relaxed text-slate-500">
              The areas below reflect current preliminary evaluation guidelines for initial discussions. They are not
              automatic approval conditions, and no outcome is guaranteed.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid border-l border-t border-slate-200 lg:grid-cols-2">
            {readinessAreas.map((area, i) => (
              <ScrollReveal key={area.title} direction="up" delay={i * 90}>
                <div className="flex h-full items-start gap-6 border-b border-r border-slate-200 p-8 sm:gap-8 lg:p-10">
                  <span
                    aria-hidden="true"
                    className="select-none font-heading text-5xl font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(240,94,71,0.5)] sm:text-6xl"
                  >
                    {area.index}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy-midnight">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.text}</p>
                    {area.guideline && (
                      <p className="mt-3 text-xs leading-relaxed text-slate-500">
                        <span className="font-semibold text-navy-midnight">Current proposed guideline: </span>
                        {area.guideline}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Strategic Discussion Journey ---------------- */}
      <section id="journey" className="scroll-mt-24 bg-navy-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral-bright">The Journey</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
              From Initial Interest to Strategic Review.
            </h2>
          </ScrollReveal>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[5px] hidden h-px bg-gradient-to-r from-coral-orange/40 via-coral-bright/40 to-coral-magenta/40 lg:block"
            />
            <div aria-hidden="true" className="absolute bottom-6 left-[5px] top-2 w-px bg-slate-300 lg:hidden" />
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
              {journeySteps.map((step, i) => (
                <ScrollReveal key={step.title} direction="up" delay={i * 110}>
                  <div className="relative pl-8 lg:pl-0">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1 h-2.5 w-2.5 rounded-full ring-4 ring-navy-light lg:static ${journeyNodeColors[i]} lg:ring-white`}
                    />
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Step 0{i + 1}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-navy-midnight">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="up">
            <p className="mt-14 max-w-3xl border-l-2 border-coral-orange/50 pl-3 text-xs italic leading-relaxed text-slate-500">
              Submitting an enquiry does not guarantee a meeting, approval, merger, investment, or any commercial
              outcome. All next steps depend on mutual review and mutually agreed terms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- Confidentiality ---------------- */}
      <section id="confidentiality" className="relative scroll-mt-24 overflow-hidden bg-navy-midnight py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-coral-magenta/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-coral-orange" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-coral-orange">Confidentiality</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your Information Deserves Careful Handling.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Information submitted through this enquiry is intended for preliminary strategic review and should be
              handled in accordance with Coral Swift&rsquo;s applicable privacy practices.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/10">
            {confidentialityPoints.map((point, i) => (
              <ScrollReveal key={point.title} direction="up" delay={i * 110}>
                <div className={`lg:px-8 ${i === 0 ? 'lg:pl-0' : ''} ${i === confidentialityPoints.length - 1 ? 'lg:pr-0' : ''}`}>
                  <p className="font-mono text-xs font-bold text-coral-orange">0{i + 1}</p>
                  <h3 className="mt-2 font-heading text-lg font-bold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{point.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Strategic Enquiry ---------------- */}
      <section id="strategic-enquiry" className="scroll-mt-24 bg-gradient-to-b from-[#FFFDFA] via-white to-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <StrategicEnquiryForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------- Closing ---------------- */}
      <section className="relative overflow-hidden bg-navy-secondary py-16 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-coral-orange/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal direction="up">
            <div
              className="mx-auto h-px w-14 bg-gradient-to-r from-coral-orange to-coral-magenta"
              aria-hidden="true"
            />
            <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Strong Partnerships Begin With Strategic Alignment.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              If your organisation is exploring a meaningful long-term business relationship, we welcome an initial
              conversation.
            </p>
            <div className="mt-8">
              <Button
                href="#strategic-enquiry"
                variant="white"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Begin a Confidential Enquiry
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
