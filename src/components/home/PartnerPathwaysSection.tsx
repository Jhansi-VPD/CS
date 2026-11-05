import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Users } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const PartnerPathwaysSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Partnership Proposition & CTAs */}
          <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>Delivery Partnerships</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
                Scale Your Delivery Center to{' '}
                <span className="swift-gradient-text">Global Enterprise Contracts.</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                We partner with established Indian engineering and business operations centers that maintain 50+ personnel and proven track records to access high-value North American enterprise engagements under disciplined bilateral governance.
              </p>
            </div>

            {/* Core Qualification Checklist */}
            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-midnight">3+ Years Operating History</h4>
                  <p className="text-[11px] text-slate-500">Established corporate registry and stable leadership tenure</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-magenta flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-midnight">50+ Full-Time Personnel</h4>
                  <p className="text-[11px] text-slate-500">Dedicated capacity in modern tech stacks or specialized operations</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-purple flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-midnight">Dedicated Infrastructure & VDI</h4>
                  <p className="text-[11px] text-slate-500">Isolated workspaces, client IP protection, and compliance logging</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button to="/partnerships#apply" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Apply as Delivery Partner
              </Button>
              <Button to="/partnerships#criteria" variant="outline" size="md">
                Review Screening Criteria
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Visual Partnership Showcase */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
              <img
                src="/images/partnerships-handshake.jpg"
                alt="Executive Global Partnership Discussion and Agreement"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/85 via-navy-midnight/30 to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-navy-midnight space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-coral-bright font-bold block">
                  Bilateral Alliance Model
                </span>
                <p className="text-xs sm:text-sm font-heading font-extrabold text-navy-midnight">
                  Zero Broker Friction • Transparent Milestone Escrow
                </p>
                <p className="text-[11px] text-slate-500">
                  Direct commercial terms between client and audited delivery pod under Coral Swift SLA governance.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnerPathwaysSection;
