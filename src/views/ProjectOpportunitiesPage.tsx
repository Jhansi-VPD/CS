'use client';

import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { illustrativeOpportunities } from '../data/opportunitiesData';
import { AlertTriangle, ArrowRight, Check, SlidersHorizontal, LayoutList } from 'lucide-react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { CardSlider } from '../components/common/CardSlider';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ProjectOpportunitiesPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'slider' | 'list'>('slider');

  useEffect(() => {
    document.title = 'Project Opportunities | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  const renderOpportunityCard = (opp: typeof illustrativeOpportunities[0], idx: number) => (
    <div
      key={opp.id}
      className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-card-soft hover-lift space-y-5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-navy-midnight text-white font-mono">
            0{idx + 1}
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
            {opp.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 border border-amber-200">
            Illustrative Category
          </span>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {opp.category}
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
        {opp.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Sample Scope */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
          <h3 className="text-xs font-bold text-navy-midnight uppercase tracking-wider">
            Representative Scope Components:
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {opp.sampleScope.map((sc, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-coral-bright shrink-0 mt-0.5" />
                <span className="leading-snug">{sc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills & Capacity */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2.5 text-xs">
          <div>
            <span className="font-bold text-navy-midnight block mb-1">
              Typical Project Volume:
            </span>
            <span className="text-slate-600 font-medium">{opp.typicalVolume}</span>
          </div>

          <div className="pt-2 border-t border-slate-200/60">
            <span className="font-bold text-navy-midnight block mb-1">
              Relevant Technical / Operational Skills:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {opp.requiredSkills.map((sk, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 text-[11px]"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200/60">
            <span className="font-bold text-navy-midnight block mb-1">
              Information Security Requirements:
            </span>
            <span className="text-slate-500 text-[11px] leading-relaxed">
              {opp.securityRequirements}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
        <span className="text-xs text-slate-400 italic">
          Have an enterprise requirement matching this profile?
        </span>
        <a
          href="#enquiry-form"
          className="inline-flex tap-link items-center gap-1 text-xs font-bold text-coral-bright hover:underline self-start sm:self-auto"
        >
          <span>Submit Similar Requirement</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Project Opportunities' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Sample Project Categories
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Illustrative Project Scopes
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Representative examples of technology and operational project requirements structured through Coral Swift. These samples illustrate typical volume, skill profiles, and security frameworks.
            </p>
          </div>

          {/* Mandatory Publication Safeguard Notice */}
          <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3 max-w-3xl text-xs text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Publication Safeguard Notice (PRD Section 9 & 24):</strong> The categories listed on this page are sample illustrative scopes designed to demonstrate typical requirements. They do not constitute a representation of live, unassigned contracts or guaranteed project awards. Live allocations occur following client contracting and formal partner due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Presentation */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Mode Switcher */}
          <ScrollReveal direction="up" className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Showing {illustrativeOpportunities.length} Illustrative Specifications
            </div>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  viewMode === 'slider'
                    ? 'bg-navy-midnight text-white shadow-xs'
                    : 'text-slate-600 hover:text-navy-midnight'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slider View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  viewMode === 'list'
                    ? 'bg-navy-midnight text-white shadow-xs'
                    : 'text-slate-600 hover:text-navy-midnight'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>List View</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Conditional View */}
          {viewMode === 'slider' ? (
            <ScrollReveal direction="up" delay={100}>
              <CardSlider
                items={illustrativeOpportunities.map((opp, idx) => renderOpportunityCard(opp, idx))}
                autoPlay={false}
              />
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {illustrativeOpportunities.map((opp, idx) => (
                <ScrollReveal key={opp.id} direction="up" delay={idx * 80}>
                  {renderOpportunityCard(opp, idx)}
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Enquiry Form Anchor */}
          <ScrollReveal direction="up" delay={200}>
            <div id="enquiry-form" className="pt-12 border-t border-slate-200 max-w-3xl mx-auto">
              <ProjectEnquiryForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
