import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

const criteria = [
  {
    value: '3+ Years',
    label: 'Operating History',
    source: 'Verified via registration and statutory records',
  },
  {
    value: '50+',
    label: 'Personnel',
    source: 'Verified via payroll records',
  },
  {
    value: 'INR 2 Crore',
    label: 'Annual Turnover',
    source: 'Verified via audited financial statements',
  },
];

export const PartnerPathwaysSection: React.FC = () => {
  return (
    <section className="bg-[#F5F6FA] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-coral-bright">
            <span className="h-px w-5 bg-coral-bright/50" />
            Delivery Partnerships
          </p>
          <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-3xl">
            Building the Right <span className="swift-gradient-text">Delivery Partnerships.</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            We connect project opportunities with delivery organizations whose capabilities,
            experience, and operational strengths align with business requirements.
          </p>
        </ScrollReveal>

        {/* Ecosystem diagram: project owners → Coral Swift → delivery organizations */}
        <ScrollReveal direction="up" delay={120} className="mt-12 lg:mt-16">
          <div className="relative">
            <svg
              className="pointer-events-none absolute inset-x-0 top-12 hidden h-16 w-full sm:block"
              viewBox="0 0 1000 64"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="csPartnerLinkL" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F98F33" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#E73B50" />
                </linearGradient>
                <linearGradient id="csPartnerLinkR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#950B6D" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#950B6D" />
                </linearGradient>
              </defs>
              <path
                d="M 60 32 L 348 32"
                stroke="url(#csPartnerLinkL)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
              />
              <path
                d="M 652 32 L 940 32"
                stroke="url(#csPartnerLinkR)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
              />
              <circle cx="348" cy="32" r="3" fill="#E73B50" />
              <circle cx="652" cy="32" r="3" fill="#950B6D" />
            </svg>

            <div className="relative grid grid-cols-1 items-center gap-8 sm:grid-cols-3 sm:gap-6">
              {/* Node: project owners */}
              <div className="sm:text-center">
                <span className="block h-0.5 w-10 bg-coral-orange sm:mx-auto" aria-hidden="true" />
                <p className="mt-3 font-heading text-base font-bold text-navy-midnight sm:text-lg">
                  Project Owners
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:mx-auto sm:max-w-[240px] sm:text-sm">
                  Businesses with defined project requirements and delivery expectations.
                </p>
              </div>

              {/* Node: Coral Swift */}
              <div className="flex items-center gap-4 border-y border-slate-200/90 py-6 sm:flex-col sm:gap-3 sm:border-0 sm:px-6 sm:py-2 sm:text-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-card-soft sm:h-[76px] sm:w-[76px]">
                  <img
                    src="/assets/coral-swift-official-logo.png"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-base font-extrabold tracking-tight text-navy-midnight sm:text-lg">
                    Coral Swift
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    Requirement validation · Partner assessment · Delivery coordination
                  </p>
                </div>
              </div>

              {/* Node: delivery organizations */}
              <div className="sm:text-center">
                <span className="block h-0.5 w-10 bg-coral-purple sm:mx-auto" aria-hidden="true" />
                <p className="mt-3 font-heading text-base font-bold text-navy-midnight sm:text-lg">
                  Delivery Organizations
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:mx-auto sm:max-w-[240px] sm:text-sm">
                  Assessed IT and business operations companies aligned to project scope.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Screening criteria — single panel, clearly labelled as proposed */}
        <ScrollReveal direction="up" delay={160} className="mt-12 lg:mt-14">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Proposed Screening Criteria
              </p>
              <Link
                href="/partnerships#criteria"
                className="group inline-flex tap-link items-center gap-1.5 text-[13px] font-bold text-coral-bright transition-colors hover:text-coral-magenta"
              >
                View details
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-5 border-t border-slate-100 pt-6 sm:grid-cols-3 sm:gap-x-0 sm:divide-x sm:divide-slate-200/80">
              {criteria.map((c) => (
                <div key={c.label} className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <p className="font-heading text-xl font-extrabold text-navy-midnight sm:text-2xl">
                    {c.value}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-navy-secondary">{c.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{c.source}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
              These criteria describe the profile we review; they are not a guarantee of approval.
              Every engagement is confirmed only after due diligence.
            </p>
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={200} className="mt-8">
          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              to="/partnerships#apply"
              variant="primary"
              size="md"
              className="font-bold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Become a Partner
            </Button>
            <Button
              to="/partnerships#criteria"
              variant="outline"
              size="md"
              className="border-slate-300 font-semibold text-navy-midnight hover:bg-white"
            >
              View Screening Criteria
            </Button>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            Exploring a merger or integration?{' '}
            <Link
              href="/strategic-discussions"
              className="font-bold text-coral-bright underline-offset-2 hover:underline"
            >
              Start a confidential strategic discussion
            </Link>
            , subject to legal, financial and operational due diligence.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnerPathwaysSection;
