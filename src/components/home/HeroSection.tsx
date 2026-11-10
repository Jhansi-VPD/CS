import React from 'react';
import { ArrowRight, ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { HeroEnterpriseVisual } from './HeroEnterpriseVisual';
import { ScrollReveal } from '../common/ScrollReveal';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-8 lg:pb-10 bg-gradient-to-b from-[#FFF7F2]/80 via-white to-white border-b border-slate-200/70">
      {/* Subtle Hairline Architectural Grid Background */}
      <div className="absolute inset-0 bg-grid-animated opacity-20 -z-10 pointer-events-none" />
      {/* Soft Ambient Brand Warmth Glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-coral-orange/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Minimal Eyebrow Tag */}
            <ScrollReveal direction="down" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-300/80 text-[11px] font-mono font-semibold uppercase tracking-wider text-navy-midnight">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>IT & Non-IT Project Solutions</span>
              </div>
            </ScrollReveal>

            {/* Impactful Headline */}
            <ScrollReveal direction="up" delay={100}>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-navy-midnight tracking-tight leading-[1.36] sm:leading-[1.32] lg:leading-[1.28]">
                Connecting Global Opportunities with the{' '}
                <span className="swift-gradient-text inline-block">Right Delivery Partners.</span>
              </h1>
            </ScrollReveal>

            {/* Concise Supporting Description (Two clean lines) */}
            <ScrollReveal direction="up" delay={150}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                We connect international project needs with qualified delivery partners in India and other markets.
              </p>
            </ScrollReveal>

            {/* Two Clear CTAs */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
                <Button
                  to="/services"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold shadow-xs hover:shadow-md transition-all"
                >
                  Explore Solutions
                </Button>
                <Button
                  to="/partnerships#apply"
                  variant="outline"
                  size="md"
                  className="font-semibold border-slate-300 text-navy-midnight hover:bg-slate-50"
                >
                  Become a Partner
                </Button>
              </div>
            </ScrollReveal>

            {/* Three Short Assurance Points */}
            <ScrollReveal direction="up" delay={250}>
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-navy-midnight">
                    <FileCheck className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                    <span>Clear Scope</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Requirements agreed before work starts
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-navy-midnight">
                    <ShieldCheck className="w-3.5 h-3.5 text-coral-magenta shrink-0" />
                    <span>Screened Partners</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Capability and history reviewed
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-navy-midnight">
                    <Lock className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                    <span>Governed Delivery</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Progress and quality reported
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Layered Premium Visual Composition */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="scale" delay={150}>
              <HeroEnterpriseVisual />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
