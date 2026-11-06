'use client';

import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { StrategicEnquiryForm } from '../components/forms/StrategicEnquiryForm';
import { Lock, ShieldCheck, Handshake } from 'lucide-react';

export const StrategicDiscussionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Strategic Discussions | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-navy-midnight text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-coral-magenta/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            dark
            items={[{ label: 'Strategic Discussions' }]}
          />

          <div className="mt-6 max-w-3xl space-y-4 animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-surface text-coral-orange border border-navy-border inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Restricted enquiry</span>
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Strategic Merger & Integration
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              For established IT and delivery organizations exploring deeper structural alignment, equity participation, or shared cross-border delivery. An enquiry starts a review only; it does not confirm a discussion or an outcome.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Strategic Overview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Executive Image Feature */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-soft border border-slate-200/90 bg-white group aspect-[16/9]">
                <img
                  src="/images/strategic-mna-boardroom.jpg"
                  alt="Boardroom used for confidential merger and integration enquiries"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/85 via-navy-midnight/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-coral-orange px-2 py-0.5 rounded-full bg-navy-surface border border-navy-border inline-block mb-1">
                      Executive dialogue
                    </span>
                    <p className="text-xs font-bold">
                      Confidential merger review
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 bg-navy-surface px-2.5 py-1 rounded-lg border border-navy-border hidden sm:inline-block">
                    Strict NDA
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-coral-magenta">
                  The pathway
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                  More Than Subcontracting
                </h2>
                <div className="prose prose-slate text-sm text-slate-600 leading-relaxed space-y-3">
                  <p>
                    This pathway is for established technology companies looking beyond project outsourcing. We explore models that combine delivery capacity, US market access, and shared operational governance.
                  </p>
                  <p>
                    Organizations that apply usually have deep domain expertise, full-time technical staff, and clean audited financials.
                  </p>
                </div>
              </div>

              {/* Due Diligence Checklist */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-card-soft">
                <h3 className="text-sm font-bold text-navy-midnight uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-coral-magenta" />
                  <span>Proposed eligibility checks, not approval promises:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                    <strong className="text-navy-midnight block mb-0.5">Experience:</strong>
                    <span>3+ years of established operations, with audited history.</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                    <strong className="text-navy-midnight block mb-0.5">Team size:</strong>
                    <span>50+ employed personnel with verifiable payroll or statutory records.</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                    <strong className="text-navy-midnight block mb-0.5">Finances:</strong>
                    <span>Audited financial statements and statutory filings.</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                    <strong className="text-navy-midnight block mb-0.5">Governance:</strong>
                    <span>Verified delivery history, IP controls, and secure facilities.</span>
                  </div>
                </div>
              </div>

              {/* Confidentiality Commitment */}
              <div className="p-4 rounded-2xl bg-coral-50/40 border border-coral-200/80 text-xs text-slate-700 flex items-start gap-3">
                <Lock className="w-5 h-5 text-coral-magenta shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Confidential:</strong> Submissions are handled under mutual non-disclosure agreements. Financial statements and company data stay access-restricted to authorized reviewers and are never published.
                </p>
              </div>
            </div>

            {/* Right: Embedded Strategic Form */}
            <div className="lg:col-span-5">
              <StrategicEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
