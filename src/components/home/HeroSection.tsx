import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/70">
      {/* Faint static architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        {/* Logo + discipline lockup */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-3.5">
            <img
              src="/assets/coral-swift-official-logo.png"
              alt="Coral Swift logo"
              className="h-9 w-9 object-contain"
            />
            <span className="h-5 w-px bg-slate-300" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-navy-secondary">
              IT &amp; Non-IT Project Solutions
            </span>
          </div>
        </ScrollReveal>

        {/* Display headline — the primary visual focus */}
        <ScrollReveal direction="up" delay={80}>
          <h1 className="mt-8 max-w-5xl font-heading text-4xl font-extrabold tracking-tight leading-[1.14] text-navy-midnight sm:text-6xl sm:leading-[1.08] lg:text-7xl lg:leading-[1.05]">
            We Connect Global Opportunities With{' '}
            <span className="swift-gradient-text">Delivery Excellence.</span>
          </h1>
        </ScrollReveal>

        {/* Support copy + CTAs, with a slim editorial annotation rail */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal direction="up" delay={140} className="lg:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Coral Swift brings international project requirements and capable delivery
              organizations together through technology solutions, business operations, and
              structured partnerships.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-bold"
              >
                Explore Solutions
              </Button>
              <Button
                to="/partnerships#apply"
                variant="outline"
                size="lg"
                className="border-slate-300 font-semibold text-navy-midnight hover:bg-slate-50"
              >
                Become a Partner
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} className="lg:col-span-4 lg:col-start-9">
            <div className="max-w-xs space-y-2 lg:border-l lg:border-slate-300/80 lg:pl-6">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-coral-bright">
                Delivery Model
              </p>
              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                US-oriented coordination · India-based delivery partners
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Connection band: requirements → Coral Swift → delivery organizations */}
        <ScrollReveal direction="up" delay={220}>
          <div
            className="relative mt-14 sm:mt-16 lg:mt-20"
            role="img"
            aria-label="Diagram: international project requirements connect through Coral Swift to capable delivery organizations"
          >
            {/* Route lines (desktop) */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-9 hidden h-14 w-full sm:block"
              viewBox="0 0 1000 56"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="csHeroRouteL" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F98F33" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#F05E47" />
                </linearGradient>
                <linearGradient id="csHeroRouteR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F05E47" />
                  <stop offset="100%" stopColor="#D21D61" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M 0 44 C 150 44 190 10 336 10"
                stroke="url(#csHeroRouteL)"
                strokeWidth="1.5"
                strokeDasharray="5 6"
                fill="none"
              />
              <path
                d="M 664 10 C 810 10 850 44 1000 44"
                stroke="url(#csHeroRouteR)"
                strokeWidth="1.5"
                strokeDasharray="5 6"
                fill="none"
              />
              <circle cx="336" cy="10" r="3" fill="#F05E47" />
              <circle cx="664" cy="10" r="3" fill="#F05E47" />
            </svg>

            <div className="relative grid grid-cols-1 items-center gap-8 sm:grid-cols-3 sm:gap-6">
              {/* Node: demand side */}
              <div className="sm:pr-4">
                <p className="font-heading text-base font-bold text-navy-midnight sm:text-lg">
                  International Project Requirements
                </p>
                <p className="mt-1.5 max-w-[260px] text-xs leading-relaxed text-slate-500 sm:text-sm">
                  Technology, operations and back-office needs from global businesses.
                </p>
              </div>

              {/* Node: Coral Swift */}
              <div className="flex items-center gap-4 border-y border-slate-200/90 py-6 sm:flex-col sm:gap-3 sm:border-0 sm:px-6 sm:py-2 sm:text-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-card-soft sm:h-[72px] sm:w-[72px]">
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
                    Requirement validation · Partner assessment · Structured coordination
                  </p>
                </div>
              </div>

              {/* Node: delivery side */}
              <div className="sm:pl-4 sm:text-right">
                <p className="font-heading text-base font-bold text-navy-midnight sm:text-lg">
                  Capable Delivery Organizations
                </p>
                <p className="mt-1.5 max-w-[260px] text-xs leading-relaxed text-slate-500 sm:ml-auto sm:text-sm sm:text-right">
                  Assessed IT and business operations companies.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
