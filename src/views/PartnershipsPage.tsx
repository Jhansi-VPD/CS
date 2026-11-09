'use client';

import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { proposedScreeningCriteria, engagementPathways, submissionChecklist } from '../data/partnerCriteriaData';
import { PartnerApplicationForm } from '../components/forms/PartnerApplicationForm';
import { CheckCircle2, FileCheck, Layers, Lock, Briefcase, Handshake } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const PartnershipsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Delivery Partnerships & Qualification | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Delivery Partnerships' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Partners
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Delivery Partners
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We work with established IT, BPO, healthcare, and banking operations companies in India on international projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="#apply" variant="primary" size="md">
                Apply as a Partner
              </Button>
              <Button to="#criteria" variant="outline" size="md">
                See Screening Criteria
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Who Can Become a Partner */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strategic Partnership Visual Composition */}
          <ScrollReveal direction="up">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card-soft mb-14">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-coral-bright bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200/60 inline-flex items-center gap-1.5">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Merit-Based Review</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                  Structured Project Allocation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We connect qualified Indian delivery centers to US enterprise projects with clear milestones and transparent commercial terms.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Direct Project Allocation', 'Cross-Border Governance', 'Documented Due Diligence', 'Clear Commercial Terms'].map((item) => (
                    <span key={item} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy-midnight">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white group aspect-[16/10]">
                  <img
                    src="/images/partnerships-handshake.jpg"
                    alt="Delivery partner collaboration"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-semibold flex items-center justify-between">
                    <span>Mutual Alignment</span>
                    <span className="text-coral-orange font-mono">Governed Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <SectionHeader
              badge="Partner Profiles"
              title="Who Can Become a"
              highlightText="Delivery Partner?"
              subtitle="Built for mature organizations with verified delivery capability, strong security practices, and scalable capacity. Each profile maps to one of our supported sectors on the industries page."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { num: '01', title: 'IT & Software Houses', color: 'text-coral-bright', text: 'Enterprise ERP, custom web and cloud applications, QA automation, and infrastructure support.' },
              { num: '02', title: 'Healthcare Process Operators', color: 'text-coral-rose', text: 'Medical coding, billing reconciliation, claims scrub, and patient authorization workflows.' },
              { num: '03', title: 'Financial Process Teams', color: 'text-coral-magenta', text: 'Banking KYC review, mortgage file packaging, title checks, and fund accounting.' },
              { num: '04', title: 'High-Volume BPO Centers', color: 'text-coral-purple', text: 'High-volume data entry, OCR cleanup, document indexing, and flexible shift operations.' }
            ].map((p, idx) => (
              <ScrollReveal key={p.num} direction="up" delay={idx * 80} className="h-full">
                <Card variant="white" className="p-6 space-y-3 hover-lift h-full">
                  <div className={`w-10 h-10 rounded-xl bg-coral-50 ${p.color} flex items-center justify-center font-bold`}>
                    {p.num}
                  </div>
                  <h3 className="text-base font-bold text-navy-midnight">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.text}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Three Engagement Pathways */}
      <section id="pathways" className="py-10 sm:py-14 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Pathways"
              title="Three Ways To"
              highlightText="Work With Us"
              subtitle="Pick the model that fits your company's scale and goals."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {engagementPathways.map((path, idx) => (
              <ScrollReveal key={path.id} direction="up" delay={idx * 100} className="h-full">
                <Card variant="white" className="p-7 flex flex-col justify-between space-y-6 hover-lift h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-coral-bright bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200">
                        {path.id === 'strategic-merger' ? 'Strategic Discussion' : path.id === 'direct-project' ? 'Project Engagement' : 'Vendor Partnership'}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-extrabold text-navy-midnight">
                      {path.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {path.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5 text-xs text-slate-600">
                      <div className="font-semibold text-navy-midnight">Target Profile:</div>
                      <p className="text-slate-500">{path.targetProfile}</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-navy-midnight block">Benefits:</span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {path.keyBenefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#apply"
                      className="w-full inline-flex items-center justify-center text-xs font-bold py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-coral-50 hover:text-coral-bright text-navy-midnight transition-colors"
                    >
                      Select this Pathway
                    </a>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Proposed Screening Criteria */}
      <section id="criteria" className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Eligibility"
              title="Proposed Partner"
              highlightText="Screening Criteria"
              subtitle="These are proposed screening baselines, not a promise of approval or a project award."
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div
              className="h-scroll mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
              role="region"
              aria-label="Proposed partner screening criteria"
              tabIndex={0}
            >
              <table className="w-full min-w-[560px] text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-midnight text-white">
                    <th scope="col" className="py-4 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs">Evaluation Criterion</th>
                    <th scope="col" className="py-4 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs">Source-Profile Threshold</th>
                    <th scope="col" className="py-4 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs">Verifiable Evidence Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {proposedScreeningCriteria.map((c, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-4 px-4 sm:px-6 font-bold text-navy-midnight align-top">
                        {c.criterion}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-coral-bright align-top">
                        {c.sourceThreshold}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-600 align-top leading-relaxed">
                        {c.evidenceRequired}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Initial Partner Submission Checklist */}
      <section id="checklist" className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Checklist"
              title="Partner"
              highlightText="Submission Checklist"
              subtitle="Have these documents ready before you apply."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {submissionChecklist.map((item, idx) => (
              <ScrollReveal key={item.id} direction="up" delay={idx * 60} className="h-full">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 hover-lift h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-coral-bright font-mono">0{idx + 1}</span>
                    <FileCheck className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-xs font-bold text-navy-midnight">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Related Partner Pathways & Stages */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-sm font-bold text-navy-midnight">See the Six-Stage Evaluation & Strategic Pathway</h4>
                <p className="text-xs text-slate-500">Review the evaluation stages or explore strategic options.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Button to="/how-it-works" variant="outline" size="sm" icon={<Layers className="w-3.5 h-3.5" />}>
                  Evaluation Stages
                </Button>
                <Button to="/strategic-discussions" variant="secondary" size="sm" icon={<Lock className="w-3.5 h-3.5" />}>
                  Strategic M&A Pathway
                </Button>
                <Button to="/project-opportunities" variant="ghost" size="sm" icon={<Briefcase className="w-3.5 h-3.5" />}>
                  Sample Scopes
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Partner Application Form */}
      <section id="apply" className="py-12 sm:py-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Apply"
              title="Submit Your"
              highlightText="Expression of Interest"
              subtitle="Complete the 4-step form below. Every submission goes through structured review."
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="mt-10">
              <PartnerApplicationForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
