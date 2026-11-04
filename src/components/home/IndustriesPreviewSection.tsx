import React, { useState } from 'react';
import { ArrowRight, Code, HeartPulse, Landmark, Building2, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  standards: string[];
  capabilities: string[];
}

const sectors: IndustrySector[] = [
  {
    id: 'it-software',
    name: 'IT & Enterprise Software',
    tagline: 'Enterprise ERP, Cloud Infrastructure & Agile Pods',
    description: 'Supporting international ISVs and corporate IT departments with dedicated full-stack engineering pods, ERP integration, and automated QA testing.',
    image: '/images/industry-it-software.jpg',
    icon: Code,
    standards: ['SOC 2 Type II Alignable', 'Milestone Sprints', 'Client Git Repositories'],
    capabilities: ['SAP S/4HANA & Oracle Cloud', 'React & Next.js Web Portals', 'Automated Selenium & Cypress QA']
  },
  {
    id: 'healthcare-operations',
    name: 'Healthcare & Clinical Operations',
    tagline: 'Medical Coding, Revenue Cycle & Prior Authorization',
    description: 'Providing US health systems and billing operators with certified medical coders (ICD-10-CM, CPT), claims denial scrubbers, and patient authorization desks.',
    image: '/images/industry-healthcare.jpg',
    icon: HeartPulse,
    standards: ['HIPAA Compliant VDI', '99%+ Accuracy SLAs', 'Payer Portal Security'],
    capabilities: ['ICD-10-CM & CPT-4 Coding', 'Prior Authorization Scrutiny', 'Claims Scrubbing & AR Recovery']
  },
  {
    id: 'banking-financial-services',
    name: 'Banking & Financial Services',
    tagline: 'KYC Reviews, Mortgage Audits & AML Screening',
    description: 'Aligning banking and mortgage institutions with disciplined process desks for customer KYC remediation, loan file packaging, and escrow reconciliations.',
    image: '/images/industry-bfsi.jpg',
    icon: Landmark,
    standards: ['AML Screening Checklists', 'Restricted Data Enclaves', 'Audit Log Retention'],
    capabilities: ['Customer KYC Remediation', 'Mortgage Loan File Review', 'Title Check & Escrow Audit']
  },
  {
    id: 'enterprise-operations',
    name: 'Enterprise Operations & BPO',
    tagline: 'High-Volume Data Transcription, OCR & 24/7 Shifts',
    description: 'Scaling large corporate back-office processes through rotational 24/7 shifts, double-key data entry, and continuous quality sampling.',
    image: '/images/industry-enterprise-ops.jpg',
    icon: Building2,
    standards: ['Double-Key Data Entry', '24/7 Rotational Desks', 'Daily Error Rate Tracking'],
    capabilities: ['High-Volume Form Transcription', 'OCR Indexing & XML Cleanup', 'Cross-Border SLA Governance']
  }
];

export const IndustriesPreviewSection: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<IndustrySector>(sectors[0]);

  const Icon = selectedSector.icon;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              Tailored Across Four{' '}
              <span className="swift-gradient-text">Core Enterprise Sectors.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Every vertical requires tailored compliance, security protocols, and operational workflows. We align delivery centers with domain-specific standards.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button to="/industries" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Sector Use Cases
            </Button>
          </ScrollReveal>
        </div>

        {/* Interactive Industry Showcase Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10">
          {/* Left Column: Sector Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {sectors.map((sector) => {
              const ItemIcon = sector.icon;
              const isSelected = selectedSector.id === sector.id;

              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setSelectedSector(sector)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-navy-midnight text-white border-transparent shadow-lg scale-[1.02]'
                      : 'bg-white hover:bg-slate-50/80 text-navy-midnight border-slate-200/90'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-swift-gradient text-white shadow-xs'
                        : 'bg-coral-50 text-coral-bright'
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm sm:text-base font-bold leading-tight">
                        {sector.name}
                      </h4>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-coral-orange translate-x-1' : 'text-slate-400'
                        }`}
                      />
                    </div>
                    <p
                      className={`text-xs leading-snug line-clamp-1 ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {sector.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Stage with Photo Backdrop & Technical Deliverables */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group aspect-[16/11]">
              <img
                src={selectedSector.image}
                alt={selectedSector.name}
                loading="lazy"
                key={selectedSector.id}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/95 via-navy-midnight/60 to-navy-midnight/20" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-surface/90 text-coral-orange border border-navy-border backdrop-blur-md">
                    Sector Architecture Focus
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Audited Delivery Framework</span>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                      {selectedSector.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed max-w-xl">
                      {selectedSector.description}
                    </p>
                  </div>

                  {/* Capabilities & Standards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/20">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-coral-orange uppercase tracking-wider font-bold block">
                        Core Capabilities:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-200">
                        {selectedSector.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral-bright shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block">
                        Compliance Standards:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-200">
                        {selectedSector.standards.map((std, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{std}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      to={`/industries#${selectedSector.id}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Explore {selectedSector.name.split('&')[0]} Details
                    </Button>
                    <span className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">
                      HYDERABAD DELIVERY PODS AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
