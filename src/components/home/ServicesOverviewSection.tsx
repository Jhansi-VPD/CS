import React from 'react';
import { ArrowRight, Terminal, Code, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Our Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              Enterprise Technology &{' '}
              <span className="swift-gradient-text">Operational Execution.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Two specialized delivery tracks calibrated for technical scale and operational compliance.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button to="/services" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              All Solutions
            </Button>
          </ScrollReveal>
        </div>

        {/* Dual-Track Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Track 01: IT Solutions */}
          <ScrollReveal direction="left" delay={100} className="flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-card-soft overflow-hidden group">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/solutions-it-engineering.jpg"
                  alt="Enterprise Software Engineering"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/35 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-navy-surface/90 text-coral-bright border border-navy-border text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                    Track 01 / IT
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                    Enterprise Software & Cloud
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    1–4 Week Sprints • Client Git Ownership
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated agile engineering pods for core ERP integration, modern web applications, and automated regression testing.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                    <span>SAP & Oracle ERP</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-coral-rose shrink-0" />
                    <span>React & Web Portals</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-coral-magenta shrink-0" />
                    <span>AWS & Cloud CI/CD</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                    <span>Automated QA Testing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs text-slate-500 font-mono">100% Client IP Assignment</span>
              <Button to="/it-solutions" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Explore IT Track
              </Button>
            </div>
          </ScrollReveal>

          {/* Track 02: Non-IT Operations */}
          <ScrollReveal direction="right" delay={150} className="flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-card-soft overflow-hidden group">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="/images/solutions-non-it-operations.jpg"
                  alt="Non-IT Process Operations"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/35 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-navy-surface/90 text-coral-magenta border border-navy-border text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                    Track 02 / Operations
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
                    Healthcare RCM & Process BPO
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    99%+ SLA Accuracy • 24/7 Rotational Desks
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-volume back-office process desks operating within encrypted VDI enclaves under strict daily accuracy benchmarks.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-coral-magenta shrink-0" />
                    <span>Medical Coding (ICD-10)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-coral-rose shrink-0" />
                    <span>Banking KYC & AML</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                    <span>Double-Key Form Entry</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-medium text-navy-midnight flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                    <span>Continuous QA Audits</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs text-slate-500 font-mono">HIPAA & SOC 2 Alignable</span>
              <Button to="/non-it-solutions" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Explore Operations Track
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
