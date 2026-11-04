import React from 'react';
import { ArrowRight, Layers, Handshake, GitMerge, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const PartnerPathwaysSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Delivery Partnerships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              Collaborate as an{' '}
              <span className="swift-gradient-text">Execution Partner.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Connect your delivery organization with international enterprise projects under transparent milestone contracts.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button to="/partnerships" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              All Partner Criteria
            </Button>
          </ScrollReveal>
        </div>

        {/* Visual Composition: 3 Pathways + Alliance Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-10">
          {/* Left Column: 3 Simple Partnership Tracks */}
          <div className="lg:col-span-7 space-y-3.5">
            <ScrollReveal direction="left" delay={100}>
              <div className="p-4 sm:p-5 rounded-2xl border border-coral-bright/80 bg-slate-50/80 shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-swift-gradient text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-navy-midnight">
                      Direct Project Allocation Track
                    </h3>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-coral-50 text-coral-bright">
                      Primary
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    Dedicated agile pods and shift teams deployed against international client SOWs.
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-slate-500">
                    <span>Baseline: 3+ Yrs Operating Age</span>
                    <span>•</span>
                    <span>50+ Technical Personnel</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150}>
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/60 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-navy-midnight flex items-center justify-center shrink-0 mt-0.5">
                  <GitMerge className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-navy-midnight">
                    Strategic M&A & Equity Alliances
                  </h3>
                  <p className="text-xs text-slate-600 leading-snug">
                    Executive integration pathways for established IT companies seeking global scale.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 pt-0.5">
                    Structured under confidential bilateral NDAs
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/60 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-navy-midnight flex items-center justify-center shrink-0 mt-0.5">
                  <Handshake className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-navy-midnight">
                    Specialized Subcontracting & Overflow
                  </h3>
                  <p className="text-xs text-slate-600 leading-snug">
                    Burst technical capacity and niche operational desks for specific project modules.
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 pt-0.5">
                    Milestone-gated work orders & escrow
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Alliance Visual Card & CTA */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/partnerships-handshake.jpg"
                  alt="Corporate Partnership"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-coral-orange px-2 py-0.5 rounded-full bg-navy-surface border border-navy-border inline-block">
                    Verified Alliances
                  </span>
                  <h4 className="text-base font-heading font-extrabold text-white">
                    Direct International Pipeline
                  </h4>
                  <p className="text-xs text-slate-300">
                    Transparent milestone contracts without overseas marketing overhead.
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-3.5">
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Predictable cash flows via milestone escrow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Merit-based qualification & fair allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cross-border enterprise project exposure</span>
                  </li>
                </ul>

                <Button
                  to="/partnerships#apply"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Apply as a Delivery Partner
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnerPathwaysSection;
