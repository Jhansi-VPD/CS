import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface Pillar {
  number: string;
  name: string;
  description: string;
  linkLabel: string;
  href: string;
  accent: string;
  eyebrowClass: string;
  hoverBorderClass: string;
  visual: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    number: '01',
    name: 'Project Solutions',
    description:
      'We translate business needs into practical project scopes, delivery milestones, and measurable expectations across technology and operations work.',
    linkLabel: 'Explore Solutions',
    href: '/services',
    accent: '#F98F33',
    eyebrowClass: 'text-coral-bright',
    hoverBorderClass: 'hover:border-coral-orange/50',
    visual: (
      <svg viewBox="0 0 96 40" className="h-10" aria-hidden="true" fill="none">
        <rect x="8" y="26" width="10" height="12" rx="2" fill="#F98F33" fillOpacity="0.35" />
        <rect x="26" y="18" width="10" height="20" rx="2" fill="#F98F33" fillOpacity="0.65" />
        <rect x="44" y="10" width="10" height="28" rx="2" fill="#F05E47" fillOpacity="0.85" />
        <path d="M 62 24 C 70 22 76 16 82 10" stroke="#F05E47" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 5" />
        <circle cx="84" cy="8" r="3" fill="#F05E47" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Partner Ecosystem',
    description:
      'We review organizational experience, team capabilities, and operational readiness to identify potential alignment with project needs.',
    linkLabel: 'See Partner Pathways',
    href: '/partnerships',
    accent: '#E73B50',
    eyebrowClass: 'text-coral-magenta',
    hoverBorderClass: 'hover:border-coral-rose/50',
    visual: (
      <svg viewBox="0 0 96 40" className="h-10" aria-hidden="true" fill="none">
        <path d="M 18 30 L 44 14 L 72 26 M 44 14 L 60 30" stroke="#E73B50" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="30" r="5" fill="#FFFFFF" stroke="#E73B50" strokeWidth="2" />
        <circle cx="44" cy="14" r="5" fill="#FFFFFF" stroke="#D21D61" strokeWidth="2" />
        <circle cx="72" cy="26" r="5" fill="#FFFFFF" stroke="#E73B50" strokeWidth="2" />
        <circle cx="60" cy="30" r="3" fill="#D21D61" fillOpacity="0.7" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Governance & Growth',
    description:
      'We align on roles, communication, quality expectations, and progress reporting to support accountable delivery and ongoing collaboration.',
    linkLabel: 'See How It Works',
    href: '/how-it-works',
    accent: '#950B6D',
    eyebrowClass: 'text-coral-purple',
    hoverBorderClass: 'hover:border-coral-purple/50',
    visual: (
      <svg viewBox="0 0 96 40" className="h-10" aria-hidden="true" fill="none">
        <circle cx="48" cy="20" r="15" stroke="#950B6D" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 6" />
        <circle cx="48" cy="20" r="9" stroke="#950B6D" strokeOpacity="0.45" strokeWidth="1.5" />
        <circle cx="48" cy="20" r="3.5" fill="#950B6D" />
        <path d="M 70 12 L 74 17 L 82 8" stroke="#D21D61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="30" r="2.5" fill="#D21D61" fillOpacity="0.6" />
      </svg>
    ),
  },
];

export const ApproachPillarsSection: React.FC = () => (
  <section className="bg-slate-50/80 border-b border-slate-200/60 py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="up">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
            Our Approach
          </span>
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight leading-snug">
            A practical model for coordinated delivery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From defining the work to aligning the right capabilities and tracking execution, we keep the collaboration clear at each stage.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.number} direction="up" delay={i * 140} className="h-full">
            <article
              className={`group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${pillar.hoverBorderClass}`}
            >
              <span
                aria-hidden="true"
                className="absolute top-3 right-5 font-heading text-6xl font-extrabold leading-none select-none"
                style={{ color: pillar.accent, opacity: 0.09 }}
              >
                {pillar.number}
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-14 rounded-full transition-all duration-300 group-hover:w-24"
                style={{ background: `linear-gradient(to right, ${pillar.accent}, ${pillar.accent}66)` }}
              />

              <span className={`mt-4 text-[11px] font-mono font-bold uppercase tracking-widest ${pillar.eyebrowClass}`}>
                Pillar {pillar.number}
              </span>
              <h3 className="mt-1.5 text-lg font-heading font-extrabold text-navy-midnight">
                {pillar.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                {pillar.description}
              </p>

              <div className="mt-4">{pillar.visual}</div>

              <Link
                href={pillar.href}
                className={`tap-link inline-flex items-center gap-1.5 mt-4 text-xs font-bold hover:underline ${pillar.eyebrowClass}`}
              >
                <span>{pillar.linkLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachPillarsSection;
