import React from 'react';
import { ShieldCheck, FileCheck, Lock, Clock } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface Differentiator {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const differentiators: Differentiator[] = [
  {
    num: '01',
    title: 'Direct Bilateral Terms',
    subtitle: 'Commercial Clarity',
    description: 'Direct milestone-based SOWs with predictable payment gates. Zero hidden broker markups or unverified intermediaries.',
    icon: FileCheck
  },
  {
    num: '02',
    title: '8-Point Due Diligence',
    subtitle: 'Verified Execution',
    description: 'Screening baselines requiring 3+ years operational history, 50+ technical personnel, and validated infrastructure.',
    icon: ShieldCheck
  },
  {
    num: '03',
    title: 'Full IP Protection',
    subtitle: 'Security & Enclaves',
    description: 'Source code authored directly in client Git repositories. Workstations secured via encrypted VDI enclaves under bilateral NDAs.',
    icon: Lock
  },
  {
    num: '04',
    title: 'Timezone Synergy',
    subtitle: 'US-India Cadence',
    description: 'Structured US governance and daily sprint synchronization backed by round-the-clock 24/7 delivery execution in India.',
    icon: Clock
  }
];

export const WhyPartnerSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
            <span>Why Coral Swift</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
            Institutional Differentiators in{' '}
            <span className="swift-gradient-text">Global Delivery.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Built to provide international enterprises and qualified delivery organizations with transparent, governed, and risk-aligned collaboration.
          </p>
        </ScrollReveal>

        {/* 4-Column Numbered Architectural Grid (McKinsey / Corporate Consulting Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <ScrollReveal
                key={diff.num}
                direction="up"
                delay={idx * 100}
                className="lg:px-8 first:lg:pl-0 last:lg:pr-0 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-3xl font-heading font-extrabold text-slate-300 font-mono">
                    {diff.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-coral-50 text-coral-bright flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-coral-bright font-bold block">
                    {diff.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-navy-midnight mt-1">
                    {diff.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
