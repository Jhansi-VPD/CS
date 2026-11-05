import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Globe } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Storytelling */}
          <ScrollReveal direction="left" className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
              <img
                src="/images/about-global-delivery.jpg"
                alt="Executive Global Delivery Strategy and Enterprise Governance"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-navy-midnight/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-between text-navy-midnight">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-coral-bright font-bold block">
                    Institutional Presence
                  </span>
                  <p className="text-xs sm:text-sm font-heading font-extrabold text-navy-midnight">
                    US Corporate Alignment • Tier-1 Indian Delivery
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Brief Corporate Introduction */}
          <ScrollReveal direction="right" delay={100} className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>About Coral Swift</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
                Bridging Global Demand With{' '}
                <span className="swift-gradient-text">Verified Execution.</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                Coral Swift structures transparent, bilateral delivery relationships between North American enterprise organizations and thoroughly vetted delivery centers across India. By enforcing strict operational audits and milestone-based escrow, we eliminate traditional agency risk.
              </p>
            </div>

            {/* Three Concise Value Pillars */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-coral-50 text-coral-bright flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-midnight">Direct Bilateral Contracts</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Transparent milestone-defined SOWs without broker markups or hidden margin layers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-coral-50 text-coral-magenta flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-midnight">Hyderabad Delivery Ecosystem</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Audited centers with minimum 3-year operating histories and 50+ verified full-time engineers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-coral-50 text-coral-purple flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-midnight">100% Client Intellectual Property Rights</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Direct code commits to client repositories under strict non-solicitation covenants.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Our Governance Model
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
