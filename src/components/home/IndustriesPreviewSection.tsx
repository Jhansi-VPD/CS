import React from 'react';
import { ArrowRight, Code, HeartPulse, Landmark, Building2 } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import Link from 'next/link';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  badge: string;
}

const industries: IndustrySector[] = [
  {
    id: 'it-software',
    name: 'IT & Enterprise Software',
    tagline: 'ERP, Cloud & Agile Pods',
    description: 'Cloud native architectures, enterprise ERP migrations, full-stack web platforms, and automated regression testing.',
    image: '/images/industry-it-software.jpg',
    icon: Code,
    badge: 'Technology'
  },
  {
    id: 'healthcare-operations',
    name: 'Healthcare & Life Sciences',
    tagline: 'RCM & Certified Medical Coding',
    description: 'HIPAA-compliant revenue cycle management, certified medical coding (ICD-10 / CPT-4), and claims scrubbing.',
    image: '/images/industry-healthcare.jpg',
    icon: HeartPulse,
    badge: 'Healthcare'
  },
  {
    id: 'banking-financial-services',
    name: 'Banking & Financial Services',
    tagline: 'KYC, AML & Loan Audits',
    description: 'Customer KYC remediation, anti-money laundering (AML) screening, mortgage loan audits, and escrow reconciliation.',
    image: '/images/industry-bfsi.jpg',
    icon: Landmark,
    badge: 'BFSI'
  },
  {
    id: 'enterprise-operations',
    name: 'Enterprise Operations & BPO',
    tagline: 'High-Volume Transaction Desks',
    description: 'High-volume data processing, document OCR indexing, and 24/7 rotational back-office operational desks.',
    image: '/images/industry-enterprise-ops.jpg',
    icon: Building2,
    badge: 'Operations'
  }
];

export const IndustriesPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Target Industries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              Calibrated Across Four{' '}
              <span className="swift-gradient-text">Core Enterprise Verticals.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Every vertical demands strict compliance, domain-specific security, and audited workflows.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button to="/industries" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              All Industry Use Cases
            </Button>
          </ScrollReveal>
        </div>

        {/* 4-Column Responsive Visual Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal
                key={ind.id}
                direction="up"
                delay={100 + index * 50}
                className="h-full"
              >
                <Link
                  href={`/industries#${ind.id}`}
                  className="group relative flex flex-col justify-between h-full min-h-[340px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-card-soft hover-lift transition-all duration-300"
                >
                  {/* Background Photography */}
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* High-Contrast Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight via-navy-midnight/65 to-navy-midnight/25 transition-opacity group-hover:opacity-90" />

                  {/* Top Row: Category Badge & Icon */}
                  <div className="relative z-10 p-6 flex items-start justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                      {ind.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/10 text-coral-orange border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-coral-500 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Row: Title, Concise Label & Arrow */}
                  <div className="relative z-10 p-6 space-y-2 text-white">
                    <h3 className="text-lg font-heading font-extrabold text-white leading-snug group-hover:text-coral-orange transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {ind.description}
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-coral-orange group-hover:translate-x-1 transition-transform">
                      <span>Explore Vertical</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
