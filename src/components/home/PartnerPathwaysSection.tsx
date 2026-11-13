import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Users, Handshake, ChevronRight, Lock } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import Link from 'next/link';

export const PartnerPathwaysSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50/90 via-[#FFF7F2]/40 to-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Strategic Mandate & Qualifications */}
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                <span>Delivery Partnerships</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-snug sm:leading-snug lg:leading-[1.28]">
                Three Ways to Work With{' '}
                <span className="swift-gradient-text inline-block">Coral Swift.</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed pt-1">
                We talk with established IT and business operations companies. Every engagement starts with an eligibility review.
              </p>
            </div>

            {/* Core Qualification Checklist */}
            <div className="space-y-2.5 pt-1">
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Proposed Screening Criteria
              </p>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-midnight">3+ Years Operating History</h4>
                  <p className="text-[11px] text-slate-500">Verified through registration and statutory records</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-magenta flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-midnight">50+ Personnel</h4>
                  <p className="text-[11px] text-slate-500">Supported by verifiable payroll records</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-purple flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-midnight">INR 2 Crore Annual Turnover</h4>
                  <p className="text-[11px] text-slate-500">Supported by audited financial statements</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button to="/partnerships#apply" variant="purple" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Become a Partner
              </Button>
              <Button to="/partnerships#criteria" variant="navy" size="md">
                View Screening Criteria
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Two Structured Pathway Tracks + Visual Anchor */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-7 space-y-5">
            {/* Top Visual Anchor Bar */}
            <div className="relative rounded-2xl overflow-hidden shadow-card-soft border border-slate-200 aspect-[21/9] group">
              <Image
                src="/images/partnerships-handshake.jpg"
                alt="Executive Global Partnership Agreement"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/85 via-navy-midnight/35 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-coral-orange font-bold block">
                    Partnership Model
                  </span>
                  <p className="text-xs sm:text-sm font-heading font-extrabold text-white">
                    Direct contracts • Defined scope • Regular reporting
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hidden sm:inline-block">
                  Governed Delivery
                </span>
              </div>
            </div>

            {/* Two Distinct Pathway Track Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pathway 1: Delivery Center Partner */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card-soft hover-lift space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h3 className="text-base font-bold text-navy-midnight">
                    Delivery Partner
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For established Indian IT and BPO centers ready for international project work.
                  </p>
                  <ul className="space-y-1.5 pt-1 text-[11px] text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                      <span>Work under a defined scope</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                      <span>Milestone-based payments</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/partnerships#apply"
                  className="inline-flex tap-link items-center gap-1 text-xs font-bold text-coral-bright hover:underline pt-2"
                >
                  <span>Apply as a Delivery Partner</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pathway 2: Strategic Integration */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card-soft hover-lift space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-purple flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="text-base font-bold text-navy-midnight">
                    Strategic Integration
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For mature organizations exploring a merger or integration, subject to legal, financial and operational due diligence.
                  </p>
                  <ul className="space-y-1.5 pt-1 text-[11px] text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                      <span>Confidential evaluation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-purple shrink-0" />
                      <span>Reviewed case by case</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/strategic-discussions"
                  className="inline-flex tap-link items-center gap-1 text-xs font-bold text-coral-purple hover:underline pt-2"
                >
                  <span>Explore Strategic Discussions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PartnerPathwaysSection;
