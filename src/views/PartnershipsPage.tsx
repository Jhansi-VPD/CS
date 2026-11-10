'use client';

import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { proposedScreeningCriteria, engagementPathways, submissionChecklist } from '../data/partnerCriteriaData';
import { PartnerApplicationForm } from '../components/forms/PartnerApplicationForm';
import { 
  CheckCircle2, 
  FileCheck, 
  Layers, 
  Lock, 
  Briefcase, 
  Handshake, 
  ArrowRight, 
  Sparkles,
  Building2,
  Users,
  ShieldCheck,
  FileText,
  Clock,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const PartnershipsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Delivery Partnerships & Qualification | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION: Midnight Navy Executive Canvas */}
      <section className="bg-navy-midnight text-white pt-10 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden border-b border-navy-secondary">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-coral/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-coral-magenta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Delivery Partnerships' }]} dark />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-8">
            {/* Left Column: Heading & Executive Value */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-orange bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>Delivery Partnerships</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Governed Delivery.<br />
                <span className="swift-gradient-text">International Scale.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                We qualify and coordinate established Indian technology and business-operations companies for direct project allocation across US and transatlantic enterprise programs.
              </p>

              {/* 4 Proof Metric Badges (Frosted Glass on Dark) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xs font-mono font-extrabold text-coral-bright">₹2 Cr+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Audited Baseline</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xs font-mono font-extrabold text-coral-rose">50+ Staff</div>
                  <div className="text-[11px] text-slate-400 font-medium">Verified Team</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xs font-mono font-extrabold text-coral-magenta">Direct Tier</div>
                  <div className="text-[11px] text-slate-400 font-medium">Client Contracts</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="text-xs font-mono font-extrabold text-coral-purple">Zero Bidding</div>
                  <div className="text-[11px] text-slate-400 font-medium">Milestone QA</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button to="#apply" variant="primary" size="md">
                  Apply for Qualification
                </Button>
                <Button to="#pathways" variant="secondary" size="md">
                  Explore Commercial Models
                </Button>
              </div>
            </div>

            {/* Right Column: Architectural Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-white/5 group">
                <img
                  src="/images/partnerships-handshake.jpg"
                  alt="Delivery partner collaboration"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/35 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-navy-midnight/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Protocol CS-04
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-coral-orange font-bold">
                    Independent Coordination
                  </div>
                  <h3 className="text-lg font-heading font-extrabold leading-snug">
                    Transparent Governance Across Every Delivery Gate
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    Scope validation, vendor due diligence, and milestone-based commercial security for cross-border engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTOR CAPABILITIES: Soft Lavender / Lilac Canvas */}
      <section className="bg-gradient-to-b from-[#FAF8FD] via-[#F6F2FC] to-[#FAF8FD] border-b border-purple-100/70 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Sector Capabilities"
              title="Who We Partner With."
              highlightText="Four Delivery Domains."
              subtitle="Built for mature organizations with verified operational track records, robust data security, and specialized talent pods."
            />
          </ScrollReveal>

          {/* 4 Sector Architectural Matrix (Interconnected Bento) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                num: '01',
                title: 'IT & Software Engineering',
                accentColor: 'text-coral-bright',
                badgeBg: 'bg-coral-50 border-coral-200/80',
                borderHover: 'hover:border-coral-300',
                desc: 'Enterprise ERP systems, custom web apps, cloud migrations, and QA automation.',
                deliverables: ['Custom Web Portals', 'Cloud Infrastructure', 'Automation Testing', 'ERP Integration']
              },
              {
                num: '02',
                title: 'Healthcare Operations',
                accentColor: 'text-coral-rose',
                badgeBg: 'bg-rose-50 border-rose-200/80',
                borderHover: 'hover:border-rose-300',
                desc: 'Medical coding, billing reconciliation, prior authorizations, and claims scrub workflows.',
                deliverables: ['ICD-10 & CPT Coding', 'Claims Adjudication', 'Patient Intake Recon', 'HIPAA Audits']
              },
              {
                num: '03',
                title: 'Banking & Financial (BFSI)',
                accentColor: 'text-coral-magenta',
                badgeBg: 'bg-pink-50 border-pink-200/80',
                borderHover: 'hover:border-pink-300',
                desc: 'KYC/AML file packaging, mortgage underwriting review, and fund reconciliation.',
                deliverables: ['KYC Verification', 'Mortgage File Packaging', 'Title Search Checks', 'Accounting Recon']
              },
              {
                num: '04',
                title: 'High-Volume Back-Office BPO',
                accentColor: 'text-coral-purple',
                badgeBg: 'bg-purple-50 border-purple-200/80',
                borderHover: 'hover:border-purple-300',
                desc: 'Intelligent data extraction, OCR cleanup, document indexing, and flexible shift operations.',
                deliverables: ['Document Indexing', 'OCR Validation', 'Dual-Shift Operations', 'High-Speed Entry']
              }
            ].map((sector, idx) => (
              <ScrollReveal key={sector.num} direction="up" delay={idx * 80} className="h-full">
                <div className={`p-6 rounded-2xl bg-white border border-purple-100 shadow-2xs ${sector.borderHover} hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between space-y-5`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`w-9 h-9 rounded-xl ${sector.badgeBg} ${sector.accentColor} font-mono font-bold text-xs flex items-center justify-center border`}>
                        {sector.num}
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase text-slate-400">
                        Capability
                      </span>
                    </div>

                    <h3 className="text-base font-heading font-extrabold text-navy-midnight leading-snug">
                      {sector.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sector.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {sector.deliverables.map((item, i) => (
                        <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-50 border border-slate-200/60 text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENT PATHWAYS: Warm Neutral / Soft Sand Canvas (Zero Cards) */}
      <section id="pathways" className="bg-gradient-to-b from-[#FCFBF9] via-[#FAF7F2] to-[#FCFBF9] border-b border-slate-200/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>Commercial Models</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
                Three Pathways.<br />
                <span className="swift-gradient-text">One Delivery Standard.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
                Structured commercial collaboration models matched to your firm&apos;s verified scale and delivery capabilities.
              </p>
            </div>
          </ScrollReveal>

          {/* Editorial Spectrum - Hairline Columns, ZERO CARDS, Ultra Minimal Content */}
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 border-y border-slate-200/90 py-6 sm:py-10">
              
              {/* 01 · Strategic Merger */}
              <div className="pb-10 md:pb-0 md:pr-8 lg:pr-12 flex flex-col justify-between space-y-8">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-slate-300">01</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-coral-purple bg-purple-50 px-2.5 py-1 rounded border border-purple-200/60">
                      Equity & Scale
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                      Strategic Merger
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      Structural integration and capital alignment for mature IT organizations.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>Best for: Established IT firms (3+ yrs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>Global enterprise pipeline access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>Shared transatlantic governance & leadership</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <a
                    href="#apply"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(
                          new CustomEvent('select-pathway', { detail: 'strategic-merger' })
                        );
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-midnight hover:text-coral-bright transition-colors group"
                  >
                    <span>Select this Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* 02 · Direct Project Allocation (Primary Model) */}
              <div className="py-10 md:py-0 md:px-8 lg:px-12 flex flex-col justify-between space-y-8 bg-coral-50/20 md:-my-10 md:py-10 relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-coral to-coral-bright hidden md:block" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-coral-bright">02</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-extrabold uppercase tracking-wider text-coral-bright bg-coral-100/70 px-2.5 py-1 rounded border border-coral-200">
                      <Sparkles className="w-3 h-3 text-coral-bright" />
                      Primary Model
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                      Direct Projects
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1.5 font-medium leading-relaxed">
                      Direct contract allocation for verified delivery organizations.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-bold text-coral-magenta">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-bright shrink-0" />
                      <span>Best for: ₹2 Cr+ turnover · 50+ engineers</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-bright shrink-0" />
                      <span>Direct international client contracts</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-bright shrink-0" />
                      <span>Milestone-gated commercial payouts</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-coral-100">
                  <a
                    href="#apply"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(
                          new CustomEvent('select-pathway', { detail: 'direct-project' })
                        );
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-coral-bright hover:text-navy-midnight transition-colors group"
                  >
                    <span>Select this Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* 03 · Modular Subcontracting */}
              <div className="pt-10 md:pt-0 md:pl-8 lg:pl-12 flex flex-col justify-between space-y-8">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-slate-300">03</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy-secondary bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      Modular Delivery
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                      Vendor Pods
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      Modular enterprise work packages for niche technical specialists.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>Best for: Specialized pods & niche QA teams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>Discrete sprint-based work modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>Structured progression to direct tier</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <a
                    href="#apply"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(
                          new CustomEvent('select-pathway', { detail: 'subcontracting' })
                        );
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-midnight hover:text-coral-bright transition-colors group"
                  >
                    <span>Select this Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. PROPOSED SCREENING CRITERIA: Cool Ice Slate Canvas */}
      <section id="criteria" className="bg-gradient-to-b from-[#F4F7FB] via-[#F8FAFC] to-[#EEF2F6] border-b border-slate-200/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Audit Baselines"
              title="Transparent Qualification"
              highlightText="Screening Criteria"
              subtitle="Proposed screening baselines to ensure delivery continuity, financial stability, and workforce security."
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div
              className="mt-10 overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm bg-white"
              role="region"
              aria-label="Proposed partner screening criteria"
              tabIndex={0}
            >
              <table className="w-full min-w-[620px] text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-midnight text-white">
                    <th scope="col" className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Evaluation Criterion</th>
                    <th scope="col" className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Threshold Required</th>
                    <th scope="col" className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Verifiable Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {proposedScreeningCriteria.map((c, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/60' : 'bg-slate-50/40 hover:bg-slate-50/80'}>
                      <td className="py-4 px-6 font-bold text-navy-midnight align-top">
                        {c.criterion}
                      </td>
                      <td className="py-4 px-6 font-semibold text-coral-bright align-top">
                        {c.sourceThreshold}
                      </td>
                      <td className="py-4 px-6 text-slate-600 align-top leading-relaxed">
                        {c.evidenceRequired}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Governance Assurance Note */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Confidential Review Protocol:</strong> All evidence submissions are handled under strict non-disclosure. Exceptions or tiered entry models are evaluated per project scope requirements.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. SUBMISSION CHECKLIST: Soft Rose / Blush Canvas */}
      <section id="checklist" className="bg-gradient-to-b from-[#FFF5F6] via-[#FFF8F9] to-[#FFF0F2] border-b border-rose-100/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Readiness Checklist"
              title="Partner Document"
              highlightText="Submission Checklist"
              subtitle="Have these four standard documentation items ready before applying."
            />
          </ScrollReveal>

          {/* 4 Connected Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {submissionChecklist.map((item, idx) => (
              <ScrollReveal key={item.id} direction="up" delay={idx * 60} className="h-full">
                <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-2xs space-y-3 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-extrabold text-coral-rose bg-rose-50 px-2 py-0.5 rounded border border-rose-200/60">
                        Step 0{idx + 1}
                      </span>
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="text-xs font-bold text-navy-midnight pt-1">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                    Mandatory Document
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Quick Cross-Navigation Strip: Midnight Navy Banner */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-12 p-7 sm:p-9 rounded-3xl bg-navy-midnight text-white border border-navy-secondary shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-coral/15 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-1.5 text-center md:text-left relative z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-coral-orange">
                  Framework Navigation
                </span>
                <h4 className="text-base sm:text-lg font-bold font-heading text-white">Explore the Six-Stage Evaluation Framework</h4>
                <p className="text-xs text-slate-300">Review our cross-border governance stages, M&A criteria, or sample scopes.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
                <Button to="/how-it-works" variant="primary" size="sm" icon={<Layers className="w-3.5 h-3.5" />}>
                  Evaluation Stages
                </Button>
                <Button to="/strategic-discussions" variant="secondary" size="sm" icon={<Lock className="w-3.5 h-3.5" />}>
                  Strategic M&A Pathway
                </Button>
                <Button to="/project-opportunities" variant="ghost" size="sm" className="text-white hover:text-coral-bright hover:bg-white/10" icon={<Briefcase className="w-3.5 h-3.5" />}>
                  Sample Scopes
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. PARTNER APPLICATION FORM: Clean, Light, Premium Surface (No Dark BG) */}
      <section id="apply" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFBF8] via-white to-[#FFF6F0] border-t border-slate-200/80 scroll-mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
                Expression of Interest
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-midnight mt-4 tracking-tight">
                Apply for Delivery Qualification
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Complete the structured four-step form below. Every submission undergoes confidential review by our delivery governance team.
              </p>
            </div>
          </ScrollReveal>

          {/* Form Surface: Clean, High-Comfort Light Container */}
          <ScrollReveal direction="up" delay={150}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/90 text-slate-900">
              <PartnerApplicationForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
