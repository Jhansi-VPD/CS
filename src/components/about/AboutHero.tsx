import React from 'react';
import { Globe2, Handshake, Workflow, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

const ecosystemNodes = [
  {
    id: 'needs',
    step: '01',
    label: 'Global Needs',
    icon: Globe2,
    accent: '#F98F33',
    x: 10,
    y: 40,
    side: 'right' as const,
  },
  {
    id: 'fit',
    step: '02',
    label: 'Partner Fit',
    icon: Handshake,
    accent: '#D21D61',
    x: 50,
    y: 68,
    side: 'right' as const,
  },
  {
    id: 'work',
    step: '03',
    label: 'Coordinated Delivery',
    icon: Workflow,
    accent: '#950B6D',
    x: 90,
    y: 36,
    side: 'left' as const,
  },
];

const serviceIndex = [
  { step: '01', label: 'IT Solutions', accent: '#F98F33' },
  { step: '02', label: 'Non-IT Operations', accent: '#E73B50' },
  { step: '03', label: 'Delivery Partnerships', accent: '#950B6D' },
];

// Anchor points in the 1200×280 band viewBox, matching the node % coordinates.
const ECOSYSTEM_PATH = 'M 120 112 C 300 150 430 190 600 190 C 770 190 930 140 1080 101';

export const AboutHero: React.FC = () => (
  <section className="relative bg-[#FFF7F2] overflow-hidden pt-8 sm:pt-10 pb-14 sm:pb-16 lg:pb-20">
    {/* Faint corner hairline arcs */}
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      className="pointer-events-none absolute -right-24 -top-24 h-96 w-96"
    >
      <circle cx="200" cy="200" r="120" stroke="#080B2E" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="2 8" />
      <circle cx="200" cy="200" r="170" stroke="#950B6D" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="2 8" />
      <circle cx="200" cy="200" r="195" stroke="#F05E47" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 8" />
    </svg>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: 'About Coral Swift' }]} />

      <ScrollReveal direction="up" delay={0}>
        <div className="mt-8 lg:mt-10 flex items-center gap-3">
          <span className="w-10 h-px bg-coral-bright" aria-hidden="true" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-coral-bright">
            About Coral Swift
          </span>
        </div>
      </ScrollReveal>

      {/* Editorial cascade: wide heading, then offset dominant introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 mt-6 lg:mt-7">
        <ScrollReveal direction="up" delay={80} className="lg:col-span-9">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-navy-midnight tracking-tight leading-[1.14]">
            Connecting <span className="text-coral-bright">Global Opportunities</span> with{' '}
            <span className="text-coral-purple">Delivery Excellence</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160} className="lg:col-span-7 lg:col-start-6 mt-7 lg:mt-9">
          <div className="flex gap-4 sm:gap-5">
            <span className="w-[3px] rounded-full bg-swift-gradient shrink-0" aria-hidden="true" />
            <p className="text-lg sm:text-xl lg:text-[1.4rem] text-slate-600 leading-[1.7] max-w-2xl">
              <span className="font-semibold text-navy-midnight">Coral Swift</span> is a US-oriented IT and Non-IT
              project solutions and partnership platform. We connect international project requirements with capable
              delivery organizations, and coordinate engagement from scoping through structured delivery.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={240}>
        <div className="mt-8 lg:mt-10 flex flex-wrap gap-3">
          <Button to="/services" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Explore Solutions
          </Button>
          <Button to="/contact" variant="secondary" size="md">
            Talk to Our Team
          </Button>
        </div>
      </ScrollReveal>

      {/* Integrated business-ecosystem band (desktop / tablet) */}
      <ScrollReveal direction="up" delay={300}>
        <div
          role="img"
          aria-label="Coral Swift business ecosystem: global needs connected to partner fit and coordinated delivery"
          className="relative hidden sm:block h-[240px] lg:h-[280px] mt-12 lg:mt-16"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 280"
            preserveAspectRatio="none"
            fill="none"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient id="aboutEcoGrad" gradientUnits="userSpaceOnUse" x1="120" y1="112" x2="1080" y2="101">
                <stop offset="0%" stopColor="#F98F33" />
                <stop offset="52%" stopColor="#D21D61" />
                <stop offset="100%" stopColor="#950B6D" />
              </linearGradient>
            </defs>

            {/* Constellation dots */}
            <circle cx="260" cy="60" r="2.5" fill="#F98F33" fillOpacity="0.45" />
            <circle cx="420" cy="236" r="2" fill="#D21D61" fillOpacity="0.35" />
            <circle cx="760" cy="248" r="2" fill="#E73B50" fillOpacity="0.3" />
            <circle cx="960" cy="52" r="2.5" fill="#950B6D" fillOpacity="0.4" />

            {/* Connection path: faint base + animated flow layer */}
            <path
              d={ECOSYSTEM_PATH}
              stroke="url(#aboutEcoGrad)"
              strokeOpacity="0.22"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d={ECOSYSTEM_PATH}
              stroke="url(#aboutEcoGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              className="cs-dash-flow"
            />

            {/* Pulsing halos at node anchors */}
            {ecosystemNodes.map((node, i) => (
              <circle
                key={`halo-${node.id}`}
                cx={(node.x / 100) * 1200}
                cy={(node.y / 100) * 280}
                r="5"
                fill={node.accent}
                className="cs-node-pulse"
                style={{ animationDelay: `${i * 0.85}s` }}
              />
            ))}
          </svg>

          {/* Open typographic stations (no cards) */}
          {ecosystemNodes.map((node) => (
            <div key={node.id} className="absolute" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
              <span
                className="absolute grid h-11 w-11 lg:h-12 lg:w-12 place-items-center rounded-full border-2 bg-white shadow-sm -translate-x-1/2 -translate-y-1/2"
                style={{ borderColor: node.accent }}
              >
                <node.icon className="h-[18px] w-[18px]" style={{ color: node.accent }} />
              </span>
              <span
                className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-0.5 whitespace-nowrap ${
                  node.side === 'right' ? 'items-start left-7 lg:left-8' : 'items-end text-right right-7 lg:right-8'
                }`}
              >
                <span className="text-[10px] font-mono font-bold tracking-[0.2em]" style={{ color: node.accent }}>
                  {node.step}
                </span>
                <span className="text-sm lg:text-base font-heading font-bold text-navy-midnight">{node.label}</span>
                <span
                  className="h-px w-7"
                  style={{ backgroundColor: node.accent, opacity: 0.45 }}
                  aria-hidden="true"
                />
              </span>
            </div>
          ))}

          <span className="absolute bottom-0 right-1 text-[9px] font-mono font-semibold uppercase tracking-[0.24em] text-slate-400">
            The Coral Swift Model
          </span>
        </div>
      </ScrollReveal>

      {/* Integrated business-ecosystem flow (mobile) */}
      <ScrollReveal direction="up" delay={300}>
        <div
          role="img"
          aria-label="Coral Swift business ecosystem: global needs connected to partner fit and coordinated delivery"
          className="sm:hidden relative mt-12 flex flex-col items-center"
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-5 bottom-5 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#F98F33] via-[#D21D61] to-[#950B6D] opacity-50"
          />
          {ecosystemNodes.map((node) => (
            <div key={node.id} className="relative z-10 my-4 flex flex-col items-center gap-1.5 text-center">
              <span
                className="grid h-11 w-11 place-items-center rounded-full border-2 bg-white shadow-sm"
                style={{ borderColor: node.accent }}
              >
                <node.icon className="h-[18px] w-[18px]" style={{ color: node.accent }} />
              </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em]" style={{ color: node.accent }}>
                {node.step}
              </span>
              <span className="text-sm font-heading font-bold text-navy-midnight">{node.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Divided service index strip */}
      <ScrollReveal direction="up" delay={340}>
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-slate-200/80">
          {serviceIndex.map((item, i) => (
            <div
              key={item.step}
              className={`flex items-baseline gap-3 py-4 sm:py-5 ${
                i > 0 ? 'border-t border-slate-200/80 sm:border-t-0 sm:border-l sm:pl-8' : ''
              }`}
            >
              <span className="font-mono text-sm font-bold" style={{ color: item.accent }}>
                {item.step}
              </span>
              <span className="text-sm font-heading font-bold text-navy-midnight">{item.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutHero;
