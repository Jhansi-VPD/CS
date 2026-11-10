import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Code, HeartPulse, Landmark } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface IndustryFeature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accent: string;
}

const FEATURE = {
  id: 'it-software',
  name: 'Information Technology & Software',
  tagline: 'ERP, Web & Custom Software',
  description:
    'ERP implementations, business portals, custom software and application testing delivered through assessed partners.',
  image: '/images/industry-it-software.jpg',
  imageAlt: 'Technology team reviewing an enterprise software implementation',
  icon: Code,
  accent: '#F98F33',
};

const STRIPS: IndustryFeature[] = [
  {
    id: 'healthcare-operations',
    name: 'Healthcare & Medical Support',
    tagline: 'Coding · Billing · Documentation',
    description: 'Medical coding, billing and healthcare documentation workflows.',
    icon: HeartPulse,
    accent: '#E73B50',
  },
  {
    id: 'banking-financial-services',
    name: 'Banking, Financial Services & Mortgage',
    tagline: 'KYC · Mortgage Processing',
    description: 'Banking KYC review, mortgage documentation and financial back-office support.',
    icon: Landmark,
    accent: '#D21D61',
  },
  {
    id: 'enterprise-operations',
    name: 'Enterprise Operations & High-Volume Data',
    tagline: 'Data Entry · Back-Office Support',
    description: 'High-volume data entry, document processing, indexing and quality control.',
    icon: Building2,
    accent: '#950B6D',
  },
];

export const IndustriesPreviewSection: React.FC = () => {
  const FeatureIcon = FEATURE.icon;

  return (
    <section className="bg-[#FFF7F2] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal direction="up" className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-coral-bright">
              <span className="h-px w-5 bg-coral-bright/50" />
              Target Industries
            </p>
            <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-3xl">
              Understanding Industries.{' '}
              <span className="swift-gradient-text">Connecting the Right Capabilities.</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Four sectors where project requirements meet assessed delivery capability.
            </p>
          </div>
          <Link
            href="/industries"
            className="group inline-flex tap-link items-center gap-1.5 text-[13px] font-bold text-navy-midnight transition-colors hover:text-coral-bright"
          >
            View All Industries
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>

        {/* Image-led feature: Information Technology & Software */}
        <ScrollReveal direction="up" delay={100} className="mt-12 lg:mt-16">
          <Link
            href={`/industries#${FEATURE.id}`}
            className="group grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-card-soft">
                <Image
                  src={FEATURE.image}
                  alt={FEATURE.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${FEATURE.accent}1A` }}
              >
                <FeatureIcon className="h-5 w-5" style={{ color: FEATURE.accent }} aria-hidden="true" />
              </span>
              <p
                className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: FEATURE.accent }}
              >
                {FEATURE.tagline}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-navy-midnight transition-colors duration-200 group-hover:text-coral-orange sm:text-[1.7rem]">
                {FEATURE.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {FEATURE.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-coral-bright transition-colors hover:text-coral-magenta">
                Explore Industry
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </ScrollReveal>

        {/* Typographic capability strips */}
        <div className="mt-10 space-y-3 lg:mt-14">
          {STRIPS.map((s, i) => {
            const StripIcon = s.icon;
            return (
              <ScrollReveal key={s.id} direction="up" delay={100 + i * 80}>
                <Link
                  href={`/industries#${s.id}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-slate-200/80 bg-white px-4 py-4 transition-colors duration-200 hover:border-slate-300 hover:shadow-card-soft sm:gap-6 sm:px-6"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${s.accent}1A` }}
                  >
                    <StripIcon className="h-4 w-4" style={{ color: s.accent }} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <h3 className="truncate font-heading text-sm font-bold text-navy-midnight transition-colors duration-200 sm:text-[15px]">
                      {s.name}
                    </h3>
                    <p className="mt-0.5 truncate text-xs text-slate-500 sm:text-[13px]">{s.description}</p>
                  </span>
                  <span className="hidden items-center gap-3 md:flex">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {s.tagline}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-colors duration-200 group-hover:text-coral-bright" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreviewSection;
