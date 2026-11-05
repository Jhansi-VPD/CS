import React from 'react';
import { ArrowRight, Terminal, HeartPulse, ShieldCheck, CheckCircle2, Cpu, FileCheck, Layers } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Core Business Areas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              Enterprise Technology, Operations &{' '}
              <span className="swift-gradient-text">Governed Partnerships.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Three specialized delivery tracks calibrated for technical scale, operational compliance, and cross-border execution.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button to="/services" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              All Solutions Overview
            </Button>
          </ScrollReveal>
        </div>

        {/* Visually Distinctive 3-Part Layout */}
        <div className="space-y-8 mt-10">
          {/* Top Row: Asymmetric Dual Showcase (IT Solutions + Non-IT Operations) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Area 01: IT Solutions (7 Columns on desktop) */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-card-soft overflow-hidden group hover-lift">
              <div>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/solutions-it-engineering.jpg"
                    alt="Enterprise Software Engineering and Cloud ERP"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/35 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-navy-surface/90 text-coral-bright border border-navy-border text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                      Area 01 / Technology
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                      IT Solutions & Custom Software
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      Dedicated Agile Pods • 1–4 Week Sprints • Direct Client Git Ownership
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Full-lifecycle engineering pods executing Cloud ERP, custom SaaS architectures, modern web portals, and automated regression testing.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                      <span>SAP & Oracle ERP</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-coral-orange shrink-0" />
                      <span>React & Node SaaS</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <FileCheck className="w-3.5 h-3.5 text-coral-magenta shrink-0" />
                      <span>Automated QA & CI/CD</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                      <span>100% Client Repos</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Button to="/services/it-solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore IT Solutions
                </Button>
              </div>
            </ScrollReveal>

            {/* Area 02: Non-IT Operations (5 Columns on desktop) */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-card-soft overflow-hidden group hover-lift">
              <div>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/solutions-non-it-operations.jpg"
                    alt="Regulated Business Process Operations"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/35 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-navy-surface/90 text-coral-orange border border-navy-border text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                      Area 02 / Operations
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                      Non-IT & Business Operations
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      Healthcare RCM • Banking KYC • 24/7 Shifts
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    High-throughput operational execution for complex regulated workflows requiring rigorous accuracy, compliance, and dedicated team oversight.
                  </p>

                  <div className="space-y-2 pt-1 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <HeartPulse className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                      <span>Medical Coding (ICD-10 / CPT-4)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-coral-orange shrink-0" />
                      <span>Banking KYC, AML & Title Review</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>HIPAA-Compliant VDI Enclaves</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Button to="/services/non-it-solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Operations Solutions
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Row: Area 03 - Partnership Services & Governance (Full-Width Architectural Banner) */}
          <ScrollReveal direction="up" delay={200}>
            <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-card-soft overflow-hidden group hover-lift">
              {/* Subtle top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-orange via-coral-bright to-coral-magenta" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-purple">
                    <Layers className="w-3.5 h-3.5 text-coral-purple" />
                    <span>Area 03 / Delivery Partnerships</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                    Bilateral Delivery Governance & Pod Allocation
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                    We audit Indian delivery centers against an 8-point baseline—verifying 3+ years operational history, 50+ personnel, and dedicated VDI infrastructure before matchmaking with global enterprise demand.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      ✓ 8-Point Center Audit
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      ✓ Bilateral Escrow Terms
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      ✓ Dedicated VDI Infrastructure
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      ✓ Zero Intermediary Margins
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Button to="/partnerships" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    View Partnership Capabilities
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
