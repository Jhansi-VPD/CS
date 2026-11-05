import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, FileCheck, Cpu, RefreshCw } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

interface Stage {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
  color: string;
  borderHover: string;
  badgeBg: string;
}

const stages: Stage[] = [
  {
    number: '01',
    name: 'Requirement',
    tagline: 'Discovery & Need Definition',
    description: 'Translating business objectives into explicit technical and operational scope specifications.',
    deliverable: 'Requirement Matrix & SOW Draft',
    icon: FileText,
    color: '#F98F33',
    borderHover: 'hover:border-[#F98F33]/60',
    badgeBg: 'bg-[#FFF7F2] text-[#F98F33]'
  },
  {
    number: '02',
    name: 'Validation',
    tagline: 'Feasibility & Stack Baseline',
    description: 'Evaluating architecture compatibility, staffing models, and regulatory compliance standards.',
    deliverable: 'Technical Feasibility Report',
    icon: CheckCircle2,
    color: '#F05E47',
    borderHover: 'hover:border-[#F05E47]/60',
    badgeBg: 'bg-[#FFF5F0] text-[#F05E47]'
  },
  {
    number: '03',
    name: 'Partner Assessment',
    tagline: '8-Point Center Auditing',
    description: 'Vetting Indian delivery centers against tenure, 50+ personnel, and dedicated VDI infrastructure.',
    deliverable: 'Audit & Compliance Certificate',
    icon: ShieldCheck,
    color: '#E73B50',
    borderHover: 'hover:border-[#E73B50]/60',
    badgeBg: 'bg-[#FFF0F3] text-[#E73B50]'
  },
  {
    number: '04',
    name: 'Scoping',
    tagline: 'Bilateral Terms & Escrow',
    description: 'Finalizing direct bilateral contracts, milestone release schedules, and 100% client IP terms.',
    deliverable: 'Bilateral SOW & Escrow Lock',
    icon: FileCheck,
    color: '#D21D61',
    borderHover: 'hover:border-[#D21D61]/60',
    badgeBg: 'bg-[#FDF2F7] text-[#D21D61]'
  },
  {
    number: '05',
    name: 'Delivery & QA',
    tagline: 'Dedicated Pod Execution',
    description: 'Deploying engineering pods, conducting bi-weekly sprint demos, and automating regression QA.',
    deliverable: 'Sprint Releases & CI/CD Logs',
    icon: Cpu,
    color: '#950B6D',
    borderHover: 'hover:border-[#950B6D]/60',
    badgeBg: 'bg-[#FBF4FD] text-[#950B6D]'
  },
  {
    number: '06',
    name: 'Continuous Improvement',
    tagline: 'SLA Benchmarking & Scaling',
    description: 'Reviewing daily throughput metrics, optimizing velocity, and scaling dedicated pod capacity.',
    deliverable: 'Executive Governance & SLA Audit',
    icon: RefreshCw,
    color: '#080B2E',
    borderHover: 'hover:border-[#080B2E]/60',
    badgeBg: 'bg-slate-100 text-navy-midnight'
  }
];

export const GlobalDeliveryModelSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              A Disciplined Six-Stage{' '}
              <span className="swift-gradient-text">Delivery Methodology.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              From requirement definition to continuous optimization, every engagement is governed by transparent milestones and verified execution.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button
              to="/how-it-works"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Full 6-Stage Methodology
            </Button>
          </ScrollReveal>
        </div>

        {/* 6-Stage Process Sequential Grid (Clean Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {stages.map((st, index) => {
            const Icon = st.icon;
            return (
              <ScrollReveal
                key={st.number}
                direction="up"
                delay={80 + index * 60}
                className="h-full"
              >
                <div
                  className={`group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card-soft hover-lift ${st.borderHover} transition-all duration-300 overflow-hidden`}
                >
                  {/* Subtle top indicator line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: st.color }}
                  />

                  {/* Top Row: Stage Number & Icon */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-xl"
                          style={{ color: st.color, backgroundColor: `${st.color}15` }}
                        >
                          STAGE {st.number}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 font-medium">
                          {st.tagline}
                        </span>
                      </div>
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{ color: st.color, backgroundColor: `${st.color}12` }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Stage Name & Description */}
                    <div>
                      <h3 className="text-lg font-heading font-extrabold text-navy-midnight leading-snug group-hover:text-coral-bright transition-colors">
                        {st.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Deliverable Artifact */}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400">Deliverable:</span>
                    <span className="font-semibold text-navy-midnight text-right truncate max-w-[190px]">
                      {st.deliverable}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Process Flow Assurance Bar */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>
              <strong>Bilateral Lifecycle Guarantee:</strong> Direct client Git repository ownership, 100% intellectual property escrow, and bi-weekly regression reviews.
            </span>
          </div>
          <Button to="/how-it-works" variant="ghost" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            Detailed Lifecycle Deep Dive
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GlobalDeliveryModelSection;
