'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  FileSpreadsheet,
  Activity,
  FileHeart,
  TrendingUp,
  Briefcase,
  Layers,
  Eye,
  BarChart3,
  Clock,
  Check,
  Workflow
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { nonItServices } from '../data/servicesData';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { ScrollReveal } from '../components/common/ScrollReveal';

/* =========================================================================
   FORM SERVICE MAPPING
   ========================================================================= */
const serviceFormMapping: Record<string, string> = {
  'medical-coding-billing': 'Medical Coding & Medical Billing',
  'healthcare-support-processes': 'Healthcare Support Processes',
  'data-entry-document-processing': 'Data Entry & High-Volume Document Processing',
  'banking-kyc-mortgage': 'Banking KYC & Mortgage Processing',
  'mutual-fund-operations': 'Mutual-Fund Operations Support',
  'back-office-services': 'Enterprise Back-Office Services',
};

export const NonITSolutionsPage: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('healthcare');
  const [prefill, setPrefill] = useState<{ service: string; nonce: number }>({
    service: '',
    nonce: 0,
  });

  const discussService = (formServiceName: string) => {
    setPrefill((prev) => ({
      service: formServiceName,
      nonce: prev.nonce + 1,
    }));
  };

  useEffect(() => {
    document.title = 'Non-IT Solutions & Business Operations | Coral Swift';
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* ================================================================== */}
      {/* 1. HERO SECTION: Soft Peach-to-White Background                    */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden border-b border-[#F4E3D8] bg-gradient-to-b from-[#FFF5EE] via-[#FFF9F5] to-white pt-8 pb-14 sm:pb-18">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-coral-orange/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/services' },
              { label: 'Non-IT Solutions' },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-6 animate-fadeIn space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-coral-200/80 bg-coral-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-coral-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-coral-bright" />
                <span>NON-IT SOLUTIONS</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3.2rem] font-extrabold text-navy-midnight tracking-tight leading-[1.1]">
                Reliable Support for Essential Business Operations.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                We support healthcare, financial, data-processing, and back-office operations through structured workflows, quality checks, and clear reporting.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-swift-gradient px-6 py-3 text-sm font-bold text-white shadow-glow-coral transition-all duration-200 hover:shadow-glow-accent hover:-translate-y-0.5"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#service-navigation"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-navy-midnight transition-all duration-200 hover:border-coral-bright/50 hover:bg-coral-50/50 hover:text-coral-bright"
                >
                  <span>Explore Services</span>
                </a>
              </div>

              {/* Operations Tagline Strip */}
              <div className="pt-3 border-t border-[#F2DFD4] flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                <span>Healthcare</span>
                <span>·</span>
                <span>Data Keying</span>
                <span>·</span>
                <span>KYC & Mortgage</span>
                <span>·</span>
                <span>Mutual Funds</span>
                <span>·</span>
                <span>Back-Office</span>
              </div>
            </div>

            {/* Right Column: Operations Visual Card */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="scale" delay={100}>
                <div className="relative overflow-hidden rounded-3xl border border-[#EDD9CE] bg-white shadow-premium">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-midnight">
                    <Image
                      src="/images/solutions-non-it-operations.jpg"
                      alt="Operations team coordinating back-office and document processing"
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      priority
                      className="object-cover object-center opacity-85 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight via-navy-midnight/40 to-transparent" />

                    {/* Telemetry Chips */}
                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md text-white">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-coral-orange block font-bold">
                          Healthcare & Data
                        </span>
                        <p className="font-heading text-xs font-bold mt-0.5 truncate">
                          ICD-10 & Double-Key Entry
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md text-white">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-coral-magenta block font-bold">
                          Financial & Admin
                        </span>
                        <p className="font-heading text-xs font-bold mt-0.5 truncate">
                          KYC Audits & Shift Support
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 bg-[#FFFBF8] px-4 py-2.5 text-xs text-slate-600">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-coral-bright shrink-0" />
                      <span>Agreed Scopes & Milestone Reviews</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase">
                      US ⇄ India Workflows
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. QUALITY & REPORTING: Very Light Lavender Background            */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden border-b border-[#EDE4F3] bg-[#F8F5FC] py-14 sm:py-18">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal direction="up">
              <span className="inline-block rounded-full border border-purple-200/70 bg-white/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-coral-purple shadow-xs">
                OPERATIONAL RIGOR
              </span>
              <h2 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight">
                Quality Built Into Every Process.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear workflows, regular checks, and consistent reporting help maintain accuracy and visibility across operational tasks.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Double-Key Entry',
                desc: 'Where applicable, use a second-entry process to help identify data-entry differences.',
                icon: Layers,
                accent: '#F98F33',
              },
              {
                step: '02',
                title: 'Sample Checks',
                desc: 'Review selected work to identify errors and maintain quality.',
                icon: Eye,
                accent: '#F05E47',
              },
              {
                step: '03',
                title: 'Daily Progress Reports',
                desc: 'Provide visibility into completed work and pending tasks.',
                icon: BarChart3,
                accent: '#D21D61',
              },
              {
                step: '04',
                title: 'Process Monitoring',
                desc: 'Track workflow progress and agreed quality measures.',
                icon: Clock,
                accent: '#950B6D',
              },
            ].map((p, idx) => (
              <ScrollReveal key={p.step} direction="up" delay={idx * 60}>
                <div className="rounded-2xl border border-[#E8DEF0] bg-white p-5 shadow-card-soft transition-all duration-200 hover:shadow-card-hover hover:border-coral-purple/40">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold" style={{ color: p.accent }}>
                      STAGE {p.step}
                    </span>
                    <div
                      className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50"
                      style={{ color: p.accent }}
                    >
                      <p.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-bold text-navy-midnight">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-6 text-center font-mono text-[10px] text-slate-500">
            * Process capabilities configured during scoping based on task volume and guidelines.
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. SERVICE NAVIGATION BAR (Crisp White Divider)                   */}
      {/* ================================================================== */}
      <div id="service-navigation" className="sticky top-16 z-30 border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5 overflow-x-auto no-scrollbar gap-2 sm:gap-4">
            <nav className="flex items-center gap-1.5 sm:gap-2 shrink-0" aria-label="Service Domain Navigation">
              {[
                { id: 'healthcare', label: 'Healthcare Operations', count: '01 · 02' },
                { id: 'data-processing', label: 'Data & Document Processing', count: '03' },
                { id: 'financial-ops', label: 'Financial Operations', count: '04 · 05' },
                { id: 'back-office', label: 'Back-Office Support', count: '06' },
              ].map((item) => {
                const isActive = activeDomain === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveDomain(item.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-navy-midnight text-white'
                        : 'text-slate-600 hover:text-navy-midnight hover:bg-slate-100'
                    }`}
                  >
                    <span className={`font-mono text-[10px] ${isActive ? 'text-coral-bright font-bold' : 'text-slate-400'}`}>
                      {item.count}
                    </span>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <a
              href="#enquiry-form"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-coral-bright hover:underline shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 4. HEALTHCARE SERVICES: Warm White / Very Light Peach Background   */}
      {/* ================================================================== */}
      <section id="healthcare" className="scroll-mt-32 py-12 sm:py-16 border-b border-[#F3E3D7] bg-[#FFF9F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-orange">
              HEALTHCARE DOMAIN · 01 & 02
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-navy-midnight tracking-tight">
              Healthcare Operations & Administration
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Service 01: Medical Coding & Medical Billing */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EFE3D8] bg-white p-6 shadow-card-soft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-coral-orange">
                    01 · CODING & REVENUE CYCLE
                  </span>
                  <FileHeart className="h-5 w-5 text-coral-orange" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-navy-midnight">
                  Medical Coding & Medical Billing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Support healthcare administrative workflows through structured coding and billing processes.
                </p>

                <div className="space-y-1.5 pt-1">
                  {[
                    'ICD-10-CM, CPT, and HCPCS chart coding',
                    'Demographic entry, charge capture, and claim checks',
                    'Accounts receivable follow-up and denial management',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-coral-orange shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-medium text-slate-500 flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Specialty-Trained Coders</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Multi-Step Sampling</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Secure Remote Desktops</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 italic">Workflows reviewed prior to launch</span>
                <a
                  href="#enquiry-form"
                  onClick={() => discussService(serviceFormMapping['medical-coding-billing'])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-orange hover:underline"
                >
                  <span>Discuss Medical Coding</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Service 02: Healthcare Support Processes */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#EFE3D8] bg-white p-6 shadow-card-soft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-coral-bright">
                    02 · CLINICAL ADMINISTRATION
                  </span>
                  <Activity className="h-5 w-5 text-coral-bright" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-navy-midnight">
                  Healthcare Support Processes
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Assist healthcare operations with organised administrative and process support.
                </p>

                <div className="space-y-1.5 pt-1">
                  {[
                    'Prior authorization submission and insurer portal tracking',
                    'Insurance eligibility and benefits verification',
                    'Medical records indexing and filing',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-coral-bright shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-medium text-slate-500 flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Payer Guideline Alignment</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Standardized Checklists</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Audit-Ready Logs</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 italic">Client-approved systems only</span>
                <a
                  href="#enquiry-form"
                  onClick={() => discussService(serviceFormMapping['healthcare-support-processes'])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-bright hover:underline"
                >
                  <span>Discuss Healthcare Support</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. DATA ENTRY & DOCUMENT PROCESSING: Subtle Pale Lavender          */}
      {/* ================================================================== */}
      <section id="data-processing" className="scroll-mt-32 py-12 sm:py-16 border-b border-[#EADBEE] bg-[#F7F4FB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-bright">
              DATA OPERATIONS · 03
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-navy-midnight tracking-tight">
              Data Entry & Document Processing
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E5D7EB] bg-white p-6 sm:p-8 shadow-card-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Handle business information and document workflows through structured processing, multi-format conversion, and dual-entry verification.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 rounded-lg bg-[#FAF8FC] border border-slate-200/80 p-2.5">
                    <Check className="h-3.5 w-3.5 text-coral-bright shrink-0" />
                    <span>Scanned form transcription & double-keying</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FAF8FC] border border-slate-200/80 p-2.5">
                    <Check className="h-3.5 w-3.5 text-coral-bright shrink-0" />
                    <span>XML/JSON conversion & catalog indexing</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FAF8FC] border border-slate-200/80 p-2.5">
                    <Check className="h-3.5 w-3.5 text-coral-bright shrink-0" />
                    <span>Data cleanup, deduplication & validation</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#FAF8FC] border border-slate-200/80 p-2.5">
                    <Check className="h-3.5 w-3.5 text-coral-bright shrink-0" />
                    <span>PDF, TIFF, JPEG & structured formats</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 italic">Accuracy targets agreed during scoping</span>
                  <a
                    href="#enquiry-form"
                    onClick={() => discussService(serviceFormMapping['data-entry-document-processing'])}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-bright hover:underline"
                  >
                    <span>Discuss Data Entry</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* 3-Step Pipeline Visual */}
              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#FAF9FD] p-4 space-y-2 text-xs">
                <span className="font-mono text-[10px] font-bold uppercase text-slate-400 block mb-2">
                  Dual-Run Keying Flow
                </span>
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white border border-slate-200/60 shadow-xs">
                  <span className="font-mono font-bold text-coral-orange">01</span>
                  <span className="font-medium text-navy-midnight">Multi-Format Ingestion</span>
                  <span className="text-[10px] text-slate-400">PDF / TIFF</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-coral-50/80 border border-coral-200/70 shadow-xs">
                  <span className="font-mono font-bold text-coral-bright">02</span>
                  <span className="font-bold text-navy-midnight">Blind Double-Key Verification</span>
                  <span className="text-[10px] font-bold text-coral-bright">Diff Match</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white border border-slate-200/60 shadow-xs">
                  <span className="font-mono font-bold text-coral-magenta">03</span>
                  <span className="font-medium text-navy-midnight">Standardized Clean Output</span>
                  <span className="text-[10px] text-slate-400">XML / DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. FINANCIAL OPERATIONS: Very Light Rose / Soft Pink Background    */}
      {/* ================================================================== */}
      <section id="financial-ops" className="scroll-mt-32 py-12 sm:py-16 border-b border-[#F7D8DF] bg-[#FFF1F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-magenta">
              FINANCIAL DOMAIN · 04 & 05
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-navy-midnight tracking-tight">
              Banking, Mortgage & Fund Support
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Service 04: Banking KYC & Mortgage Processing */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#F3D5DC] bg-white p-6 shadow-card-soft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-coral-magenta">
                    04 · ONBOARDING & AUDIT
                  </span>
                  <ShieldCheck className="h-5 w-5 text-coral-magenta" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-navy-midnight">
                  Banking KYC & Mortgage Processing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Support financial operations through organised documentation and verification workflows.
                </p>

                <div className="space-y-1.5 pt-1">
                  {[
                    'KYC/AML onboarding file completeness checks',
                    'Mortgage package setup, indexing, and disclosure checks',
                    'Title report and insurance document review',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-coral-magenta shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-medium text-slate-500 flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Trained Financial Analysts</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Checklist-Driven</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Audit-Ready Logs</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 italic">Lending decisions stay with institutions</span>
                <a
                  href="#enquiry-form"
                  onClick={() => discussService(serviceFormMapping['banking-kyc-mortgage'])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-magenta hover:underline"
                >
                  <span>Discuss Banking Support</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Service 05: Mutual-Fund Operations Support */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#F3D5DC] bg-white p-6 shadow-card-soft">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-coral-purple">
                    05 · FUND ADMINISTRATION
                  </span>
                  <TrendingUp className="h-5 w-5 text-coral-purple" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-navy-midnight">
                  Mutual-Fund Operations Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Support mutual-fund administration through structured operational processes.
                </p>

                <div className="space-y-1.5 pt-1">
                  {[
                    'Daily custodian and bank statement reconciliation',
                    'Trade confirmation matching and discrepancy tracking',
                    'Corporate action data capture and verification',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-coral-purple shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-medium text-slate-500 flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Accounting Backgrounds</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Exception Escalation</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200/70 px-2 py-1">Multi-Currency Ledgers</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 italic">Fiduciary duties remain with client</span>
                <a
                  href="#enquiry-form"
                  onClick={() => discussService(serviceFormMapping['mutual-fund-operations'])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-purple hover:underline"
                >
                  <span>Discuss Fund Operations</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. BACK-OFFICE SERVICES: Light Warm Neutral Background            */}
      {/* ================================================================== */}
      <section id="back-office" className="scroll-mt-32 py-12 sm:py-16 border-b border-[#E7E2D9] bg-[#F8F7F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-purple">
              OPERATIONAL DOMAIN · 06
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-navy-midnight tracking-tight">
              Enterprise Back-Office Services
            </h2>
          </div>

          <div className="rounded-2xl border border-[#E5E0D6] bg-white p-6 sm:p-8 shadow-card-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Help businesses manage routine operational work through organised support processes, dedicated shifts, and SOP-driven execution.
                </p>

                <div className="space-y-1.5 pt-1">
                  {[
                    'Invoice matching and voucher creation',
                    'E-commerce catalog updates and tagging',
                    'Routine admin ticket handling and queue management',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-coral-purple shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-medium text-slate-500 flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2 py-1">Fast Ramp-Up</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2 py-1">US Business Hours Aligned</span>
                  <span className="rounded-md bg-slate-50 border border-slate-200 px-2 py-1">Weekly Reviews</span>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 italic">Staffing levels set to your specifications</span>
                  <a
                    href="#enquiry-form"
                    onClick={() => discussService(serviceFormMapping['back-office-services'])}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-purple hover:underline"
                  >
                    <span>Discuss Back-Office</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Shift Visual */}
              <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                <Image
                  src="/images/industry-enterprise-ops.jpg"
                  alt="Back-office operations team managing administrative queues"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between">
                  <span className="font-semibold">Dedicated Shifts</span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 font-mono text-[10px]">
                    SOP Model
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. PROJECT ENQUIRY SECTION: Midnight Navy with White Form Surface  */}
      {/* ================================================================== */}
      <section id="enquiry-form" className="scroll-mt-24 relative overflow-hidden bg-navy-midnight py-16 sm:py-20 text-white">
        {/* Subtle Ambient Brand Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-coral-orange/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-coral-magenta/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center space-y-2 max-w-xl mx-auto mb-8">
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-coral-bright backdrop-blur-xs">
                PROJECT ENQUIRY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Need Support With Your Operations?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Share your requirements and let's explore a suitable approach.
              </p>
            </div>

            {/* Clearly Visible Form Surface Card */}
            <div className="rounded-3xl border border-white/20 bg-white p-6 sm:p-10 shadow-2xl text-navy-midnight">
              <ProjectEnquiryForm
                initialCategory="Non-IT / Business Operations"
                initialService={prefill.service}
                prefillNonce={prefill.nonce}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default NonITSolutionsPage;
