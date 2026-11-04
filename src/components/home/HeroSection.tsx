import React from 'react';
import { ArrowRight, ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { SimpleHeroVisual } from './SimpleHeroVisual';
import { ScrollReveal } from '../common/ScrollReveal';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-7 sm:pb-12 lg:pt-8 lg:pb-14 bg-gradient-to-b from-slate-50/60 via-white to-white border-b border-slate-200/70">
      {/* Subtle Hairline Architectural Grid Background */}
      <div className="absolute inset-0 bg-grid-animated opacity-25 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left pt-2 sm:pt-3 lg:pt-4">
            {/* Minimal Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300/80 text-[11px] font-mono font-semibold uppercase tracking-wider text-navy-midnight">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Global Delivery Orchestration</span>
            </div>

            {/* Impactful Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-navy-midnight tracking-tight leading-[1.15]">
              Connecting Global Enterprise Demand With{' '}
              <span className="swift-gradient-text">Delivery Excellence.</span>
            </h1>

            {/* Concise Supporting Description (Max 2 lines on desktop) */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Coral Swift aligns North American enterprise technology and operations requirements with audited delivery centers across India through disciplined bilateral governance.
            </p>

            {/* Two Clear CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
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

            {/* Credibility Micro-Assurance Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-2 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy-midnight">
                  <FileCheck className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                  <span>Direct SOWs</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Transparent milestone terms
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy-midnight">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-magenta shrink-0" />
                  <span>8-Point Audit</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Vetted delivery centers
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy-midnight">
                  <Lock className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                  <span>100% IP Escrow</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Client code repositories
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Simple Enterprise Visual Composition */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="scale" delay={100}>
              <SimpleHeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
