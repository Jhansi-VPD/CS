'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  FileHeart,
  TrendingUp,
  Layers,
  Eye,
  BarChart3,
  Clock,
  Check
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
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

    const observer = new IntersectionObserver(
      (entries) => {
        const activeSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target.id;

        if (activeSection) {
          setActiveDomain(activeSection);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    );

    ['healthcare', 'data-processing', 'financial-ops', 'back-office'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 sm:pt-3 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/services' },
            { label: 'Non-IT Solutions' },
          ]}
        />
      </div>

      {/* Cinematic, full-bleed operations hero */}
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-navy-midnight sm:min-h-[700px]">
        <Image
          src="/images/services-operations-4k.jpg"
          alt="Business operations team reviewing documents in a modern workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_48%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/95 via-[#080B2E]/80 to-[#080B2E]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/55 via-transparent to-[#080B2E]/10"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal direction="left">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 border-l-2 border-coral-orange pl-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-orange">
                NON-IT SOLUTIONS
              </span>
              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Reliable Support for Essential Business Operations.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                We support healthcare, financial, data-processing, and back-office operations through structured workflows, quality checks, and clear reporting.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry-form"
                  className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-swift-gradient px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#service-navigation"
                  className="inline-flex min-h-12 items-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span>Explore Services</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/25 pt-5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/75 sm:text-xs">
                <span>Healthcare</span>
                <span aria-hidden="true" className="text-coral-orange">·</span>
                <span>Data Keying</span>
                <span aria-hidden="true" className="text-coral-orange">·</span>
                <span>KYC & Mortgage</span>
                <span aria-hidden="true" className="text-coral-orange">·</span>
                <span>Mutual Funds</span>
                <span aria-hidden="true" className="text-coral-orange">·</span>
                <span>Back-Office</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/65">
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-coral-orange" />
                  Agreed Scopes & Milestone Reviews
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  US ⇄ India Workflows
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-[#EDE4F3] bg-[#F5F6FA] py-16 sm:py-20">
        <Image
          src="/images/how-it-works-agile.jpg"
          alt="Team mapping a workflow during an operations planning session"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] mix-blend-multiply"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#F5F6FA]/95 via-[#F5F6FA]/90 to-[#FFF7F2]/95"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <ScrollReveal direction="up" className="lg:col-span-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-purple">
                OPERATIONAL RIGOR
              </span>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl lg:text-5xl">
                Quality Built Into Every Process.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={80} className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Clear workflows, regular checks, and consistent reporting help maintain accuracy and visibility across operational tasks.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-coral-orange via-coral-bright to-coral-purple lg:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-coral-orange via-coral-bright to-coral-purple lg:block"
            />
            <div className="grid gap-8 lg:grid-cols-4 lg:gap-10">
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
              ].map((step, index) => (
                <ScrollReveal key={step.step} direction="up" delay={index * 70}>
                  <div className="relative flex gap-5 lg:block lg:pt-12">
                    <span
                      className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-[#F5F6FA] font-heading text-2xl font-extrabold"
                      style={{ color: step.accent }}
                    >
                      {step.step}
                    </span>
                    <div className="pt-1 lg:pt-0">
                      <div className="flex items-center gap-2">
                        <step.icon className="h-4 w-4 shrink-0" style={{ color: step.accent }} />
                        <h3 className="font-heading text-base font-bold text-navy-midnight sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <p className="mt-10 border-t border-navy-midnight/10 pt-4 font-mono text-[10px] text-slate-500">
            * Process capabilities configured during scoping based on task volume and guidelines.
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. STICKY SERVICE NAVIGATION (Midnight-Navy Bar)                   */}
      {/* ================================================================== */}
      <div id="service-navigation" className="sticky top-16 z-30 border-b border-white/10 bg-navy-midnight/95 shadow-xs backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-2.5">
            <nav className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto overscroll-x-contain no-scrollbar sm:gap-2" aria-label="Service Domain Navigation">
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
                    aria-current={isActive ? 'location' : undefined}
                    className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-orange sm:text-sm ${
                      isActive
                        ? 'bg-white/10 text-white ring-1 ring-white/15'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
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
              className="inline-flex min-h-10 shrink-0 items-center gap-1 text-[11px] font-bold text-coral-orange transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-orange sm:text-xs"
            >
              <span>Get Started</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <section id="healthcare" className="relative isolate scroll-mt-32 overflow-hidden bg-navy-midnight text-white">
        <Image
          src="/images/industry-healthcare.jpg"
          alt="Healthcare professional coordinating work on a mobile device"
          fill
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/95 via-[#080B2E]/85 to-[#080B2E]/60"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#080B2E]/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal direction="up">
            <header className="max-w-3xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-orange">
                HEALTHCARE DOMAIN · 01 & 02
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Healthcare Operations & Administration
              </h2>
            </header>
          </ScrollReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="up" delay={60}>
              <article className="border-t border-white/30 pt-6 lg:pr-8">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold text-coral-orange">01</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                    CODING & REVENUE CYCLE
                  </span>
                  <FileHeart className="ml-auto h-5 w-5 text-coral-orange" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                  Medical Coding & Medical Billing
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  Support healthcare administrative workflows through structured coding and billing processes.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    'ICD-10-CM, CPT, and HCPCS chart coding',
                    'Demographic entry, charge capture, and claim checks',
                    'Accounts receivable follow-up and denial management',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/70">
                  <span>Specialty-Trained Coders</span>
                  <span aria-hidden="true" className="text-coral-orange">·</span>
                  <span>Multi-Step Sampling</span>
                  <span aria-hidden="true" className="text-coral-orange">·</span>
                  <span>Secure Remote Desktops</span>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4">
                  <span className="text-xs italic text-white/60">Workflows reviewed prior to launch</span>
                  <a
                    href="#enquiry-form"
                    onClick={() => discussService(serviceFormMapping['medical-coding-billing'])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-coral-orange transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange"
                  >
                    Discuss Medical Coding <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={140}>
              <article className="border-t border-white/30 pt-6 lg:mt-16 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold text-coral-bright">02</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                    CLINICAL ADMINISTRATION
                  </span>
                  <Activity className="ml-auto h-5 w-5 text-coral-bright" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                  Healthcare Support Processes
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  Assist healthcare operations with organised administrative and process support.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    'Prior authorization submission and insurer portal tracking',
                    'Insurance eligibility and benefits verification',
                    'Medical records indexing and filing',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-bright" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/70">
                  <span>Payer Guideline Alignment</span>
                  <span aria-hidden="true" className="text-coral-bright">·</span>
                  <span>Standardized Checklists</span>
                  <span aria-hidden="true" className="text-coral-bright">·</span>
                  <span>Audit-Ready Logs</span>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4">
                  <span className="text-xs italic text-white/60">Client-approved systems only</span>
                  <a
                    href="#enquiry-form"
                    onClick={() => discussService(serviceFormMapping['healthcare-support-processes'])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-coral-bright transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-bright"
                  >
                    Discuss Healthcare Support <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="data-processing" className="relative isolate scroll-mt-32 overflow-hidden bg-navy-midnight text-white">
        <Image
          src="/images/home-keyboard-typing-8k.jpg"
          alt="Operations specialist entering information at a workstation"
          fill
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/95 via-[#080B2E]/90 to-[#080B2E]/75"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#080B2E]/15" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal direction="up" className="lg:col-span-5">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-bright">
                DATA OPERATIONS · 03
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Data Entry & Document Processing
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
                Handle business information and document workflows through structured processing, multi-format conversion, and dual-entry verification.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  'Scanned form transcription & double-keying',
                  'XML/JSON conversion & catalog indexing',
                  'Data cleanup, deduplication & validation',
                  'PDF, TIFF, JPEG & structured formats',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-bright" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5">
                <span className="text-xs italic text-white/60">Accuracy targets agreed during scoping</span>
                <a
                  href="#enquiry-form"
                  onClick={() => discussService(serviceFormMapping['data-entry-document-processing'])}
                  className="inline-flex items-center gap-2 text-sm font-bold text-coral-orange transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange"
                >
                  Discuss Data Entry <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} className="lg:col-span-6 lg:col-start-7">
              <div className="border-y border-white/25 py-6 sm:py-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  DUAL-RUN KEYING FLOW
                </span>
                <div className="relative mt-7">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-8 left-[1.15rem] top-8 w-px bg-gradient-to-b from-coral-orange via-coral-bright to-coral-magenta"
                  />
                  <ol className="relative">
                    {[
                      { step: '01', title: 'Multi-Format Ingestion', detail: 'PDF / TIFF' },
                      { step: '02', title: 'Blind Double-Key Verification', detail: 'Diff Match' },
                      { step: '03', title: 'Standardized Clean Output', detail: 'XML / DB' },
                    ].map((item, index) => (
                      <li
                        key={item.step}
                        className={`relative flex items-center gap-5 py-5 ${
                          index < 2 ? 'border-b border-white/15' : ''
                        }`}
                      >
                        <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-navy-midnight font-mono text-xs font-bold text-coral-orange">
                          {item.step}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                            {item.title}
                          </h3>
                          <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-coral-orange">
                            {item.detail}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="financial-ops" className="relative isolate scroll-mt-32 overflow-hidden bg-coral-warm">
        <Image
          src="/images/industry-bfsi.jpg"
          alt="Modern office towers in an international financial district"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#FFF7F2]/95 via-[#FFF7F2]/90 to-[#FFF7F2]/75"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal direction="up">
            <header className="max-w-3xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-magenta">
                FINANCIAL DOMAIN · 04 & 05
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl lg:text-5xl">
                Banking, Mortgage & Fund Support
              </h2>
            </header>
          </ScrollReveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal direction="up" delay={60} className="lg:col-span-5">
              <article className="border-t border-coral-magenta/50 pt-6 lg:pr-8">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold text-coral-magenta">04</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-coral-magenta">
                    ONBOARDING & AUDIT
                  </span>
                  <ShieldCheck className="ml-auto h-5 w-5 text-coral-magenta" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-navy-midnight sm:text-3xl">
                  Banking KYC & Mortgage Processing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Support financial operations through organised documentation and verification workflows.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    'KYC/AML onboarding file completeness checks',
                    'Mortgage package setup, indexing, and disclosure checks',
                    'Title report and insurance document review',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-magenta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
                  <span>Trained Financial Analysts</span>
                  <span aria-hidden="true" className="text-coral-magenta">·</span>
                  <span>Checklist-Driven</span>
                  <span aria-hidden="true" className="text-coral-magenta">·</span>
                  <span>Audit-Ready Logs</span>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-navy-midnight/15 pt-4">
                  <span className="text-xs italic text-slate-500">Lending decisions stay with institutions</span>
                  <a
                    href="#enquiry-form"
                    onClick={() => discussService(serviceFormMapping['banking-kyc-mortgage'])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-coral-magenta transition-colors hover:text-navy-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-magenta"
                  >
                    Discuss Banking Support <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={140} className="lg:col-span-6 lg:col-start-7 lg:mt-20">
              <article className="border-t border-coral-purple/50 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-4xl font-extrabold text-coral-purple">05</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-coral-purple">
                    FUND ADMINISTRATION
                  </span>
                  <TrendingUp className="ml-auto h-5 w-5 text-coral-purple" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-navy-midnight sm:text-3xl">
                  Mutual-Fund Operations Support
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Support mutual-fund administration through structured operational processes.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    'Daily custodian and bank statement reconciliation',
                    'Trade confirmation matching and discrepancy tracking',
                    'Corporate action data capture and verification',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral-purple" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
                  <span>Accounting Backgrounds</span>
                  <span aria-hidden="true" className="text-coral-purple">·</span>
                  <span>Exception Escalation</span>
                  <span aria-hidden="true" className="text-coral-purple">·</span>
                  <span>Multi-Currency Ledgers</span>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-navy-midnight/15 pt-4">
                  <span className="text-xs italic text-slate-500">Fiduciary duties remain with client</span>
                  <a
                    href="#enquiry-form"
                    onClick={() => discussService(serviceFormMapping['mutual-fund-operations'])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-coral-purple transition-colors hover:text-navy-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-purple"
                  >
                    Discuss Fund Operations <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="back-office" className="relative isolate scroll-mt-32 overflow-hidden bg-navy-midnight text-white">
        <Image
          src="/images/industry-enterprise-ops.jpg"
          alt="Business operations team working together in a modern office"
          fill
          sizes="100vw"
          className="object-cover object-[center_48%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/95 via-[#080B2E]/88 to-[#080B2E]/60"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <ScrollReveal direction="up" className="lg:col-span-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-purple">
              OPERATIONAL DOMAIN · 06
            </span>
            <div className="mt-5 flex items-start gap-4">
              <span className="font-heading text-4xl font-extrabold leading-none text-coral-bright sm:text-5xl">
                06
              </span>
              <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Enterprise Back-Office Services
              </h2>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Help businesses manage routine operational work through organised support processes, dedicated shifts, and SOP-driven execution.
            </p>
            <a
              href="#enquiry-form"
              onClick={() => discussService(serviceFormMapping['back-office-services'])}
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-coral-orange transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange"
            >
              Discuss Back-Office <ArrowRight className="h-4 w-4" />
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="lg:col-span-5 lg:col-start-8">
            <div className="border-y border-white/25 py-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                OPERATIONAL CAPABILITIES
              </span>
              <ul className="mt-5 divide-y divide-white/15">
                {[
                  'Invoice matching and voucher creation',
                  'E-commerce catalog updates and tagging',
                  'Routine admin ticket handling and queue management',
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="font-mono text-xs font-bold text-coral-orange">
                      0{index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-5 text-xs font-medium text-white/70">
                <span>Dedicated Shifts</span>
                <span aria-hidden="true" className="text-coral-bright">·</span>
                <span>SOP Model</span>
                <span aria-hidden="true" className="text-coral-bright">·</span>
                <span>Fast Ramp-Up</span>
                <span aria-hidden="true" className="text-coral-bright">·</span>
                <span>US Business Hours Aligned</span>
                <span aria-hidden="true" className="text-coral-bright">·</span>
                <span>Weekly Reviews</span>
              </div>
              <p className="mt-5 text-xs italic text-white/60">
                Staffing levels set to your specifications
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. PROJECT ENQUIRY SECTION: Midnight Navy with White Form Surface  */}
      {/* ================================================================== */}
      <section id="enquiry-form" className="scroll-mt-24 relative overflow-hidden bg-navy-midnight py-16 sm:py-20 text-white">
        <Image
          src="/images/home-open-office-8k.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-navy-midnight/85" />
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
