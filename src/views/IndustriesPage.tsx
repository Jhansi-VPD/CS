'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  HeartPulse,
  Landmark,
  Building2,
  Check,
  ChevronDown,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Clock,
  Briefcase,
  FileCheck2,
  Workflow
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { industriesData } from '../data/industriesData';
import { ScrollReveal } from '../components/common/ScrollReveal';

/* =========================================================================
   HERO 4-SECTOR CONSTELLATION VISUAL
   A bespoke architectural quadrant showing the connection of:
   Technology, Healthcare, Financial Services, and Enterprise Operations.
   ========================================================================= */

const HeroIndustriesVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Soft Ambient Radial Underglow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-coral-orange/15 via-coral-rose/10 to-coral-purple/15 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-[#EADBCE] bg-white/95 p-6 shadow-premium backdrop-blur-xl sm:p-7">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-bright opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral-bright" />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-navy-midnight">
              Cross-Sector Capability Matrix
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-400 uppercase">
            4 Core Domains
          </span>
        </div>

        {/* 4 Interconnected Sector Quadrants */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Quadrant 1: IT & Software */}
          <a
            href="#it-software"
            className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all duration-300 hover:border-coral-orange/60 hover:bg-white hover:shadow-card-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-coral-orange uppercase tracking-wider">
                01 · TECHNOLOGY
              </span>
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white border border-slate-200/80 text-coral-orange group-hover:scale-105 transition-transform">
                <Code2 className="h-3.5 w-3.5" />
              </div>
            </div>
            <h4 className="mt-2 font-heading text-sm font-bold text-navy-midnight leading-snug group-hover:text-coral-orange transition-colors">
              IT & Software Development
            </h4>
            <p className="mt-1 text-[11px] text-slate-500 line-clamp-1">
              Cloud, Custom Apps, ERP & Testing
            </p>
          </a>

          {/* Quadrant 2: Healthcare */}
          <a
            href="#healthcare-operations"
            className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all duration-300 hover:border-coral-bright/60 hover:bg-white hover:shadow-card-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-coral-bright uppercase tracking-wider">
                02 · HEALTHCARE
              </span>
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white border border-slate-200/80 text-coral-bright group-hover:scale-105 transition-transform">
                <HeartPulse className="h-3.5 w-3.5" />
              </div>
            </div>
            <h4 className="mt-2 font-heading text-sm font-bold text-navy-midnight leading-snug group-hover:text-coral-bright transition-colors">
              Healthcare & Medical Support
            </h4>
            <p className="mt-1 text-[11px] text-slate-500 line-clamp-1">
              Medical Coding, RCM & Pre-Auth
            </p>
          </a>

          {/* Quadrant 3: Financial Services */}
          <a
            href="#banking-financial-services"
            className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all duration-300 hover:border-coral-magenta/60 hover:bg-white hover:shadow-card-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-coral-magenta uppercase tracking-wider">
                03 · FINANCIAL
              </span>
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white border border-slate-200/80 text-coral-magenta group-hover:scale-105 transition-transform">
                <Landmark className="h-3.5 w-3.5" />
              </div>
            </div>
            <h4 className="mt-2 font-heading text-sm font-bold text-navy-midnight leading-snug group-hover:text-coral-magenta transition-colors">
              Banking & Mortgage Operations
            </h4>
            <p className="mt-1 text-[11px] text-slate-500 line-clamp-1">
              KYC Checks, Mortgage & Reconciliation
            </p>
          </a>

          {/* Quadrant 4: Enterprise Operations */}
          <a
            href="#enterprise-operations"
            className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all duration-300 hover:border-coral-purple/60 hover:bg-white hover:shadow-card-soft"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-coral-purple uppercase tracking-wider">
                04 · ENTERPRISE
              </span>
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white border border-slate-200/80 text-coral-purple group-hover:scale-105 transition-transform">
                <Building2 className="h-3.5 w-3.5" />
              </div>
            </div>
            <h4 className="mt-2 font-heading text-sm font-bold text-navy-midnight leading-snug group-hover:text-coral-purple transition-colors">
              Enterprise Operations & Data
            </h4>
            <p className="mt-1 text-[11px] text-slate-500 line-clamp-1">
              Digitization, ERP & Shift Support
            </p>
          </a>
        </div>

        {/* Central Accountable Nexus Footnote */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-4 w-4 text-coral-bright shrink-0" />
            <span>Structured Scoping & Quality Governance</span>
          </span>
          <span className="font-mono text-[10px] font-semibold text-coral-purple uppercase">
            Vetted Delivery Centers
          </span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   COLLAPSIBLE DEEP DIVE ACCORDION
   Displays Typical Requirements, Applicable Solutions, and Collaboration Models
   on demand without cluttering the default clean view.
   ========================================================================= */

interface ExpandableDetailsProps {
  businessRequirements: string[];
  applicableSolutions: string[];
  collaborationOpportunities: string[];
  accentColor: string;
  isDark?: boolean;
}

const ExpandableDetails: React.FC<ExpandableDetailsProps> = ({
  businessRequirements,
  applicableSolutions,
  collaborationOpportunities,
  accentColor,
  isDark = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 pt-4 border-t border-current/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 text-xs font-bold transition-all duration-200 ${
          isDark
            ? 'text-slate-300 hover:text-white'
            : 'text-slate-600 hover:text-navy-midnight'
        }`}
        aria-expanded={isOpen}
      >
        <span className="font-mono text-[10px] uppercase tracking-wider">
          {isOpen ? 'Hide Detailed Profile' : 'View In-Depth Sector Profile'}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: accentColor }}
        />
      </button>

      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 animate-fadeIn">
          {/* Business Requirements */}
          <div
            className={`rounded-xl p-4 text-xs ${
              isDark
                ? 'bg-white/5 border border-white/10 text-slate-300'
                : 'bg-white border border-slate-200/80 text-slate-700 shadow-xs'
            }`}
          >
            <h5 className={`font-mono text-[10px] font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-white' : 'text-navy-midnight'}`}>
              Typical Requirements
            </h5>
            <ul className="space-y-1.5">
              {businessRequirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applicable Solutions */}
          <div
            className={`rounded-xl p-4 text-xs ${
              isDark
                ? 'bg-white/5 border border-white/10 text-slate-300'
                : 'bg-white border border-slate-200/80 text-slate-700 shadow-xs'
            }`}
          >
            <h5 className={`font-mono text-[10px] font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-white' : 'text-navy-midnight'}`}>
              Applicable Solutions
            </h5>
            <ul className="space-y-1.5">
              {applicableSolutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: accentColor }} />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration Models */}
          <div
            className={`rounded-xl p-4 text-xs ${
              isDark
                ? 'bg-white/5 border border-white/10 text-slate-300'
                : 'bg-white border border-slate-200/80 text-slate-700 shadow-xs'
            }`}
          >
            <h5 className={`font-mono text-[10px] font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-white' : 'text-navy-midnight'}`}>
              Collaboration Models
            </h5>
            <ul className="space-y-1.5">
              {collaborationOpportunities.map((collab, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{collab}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   MAIN INDUSTRIES PAGE COMPONENT
   ========================================================================= */

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Industries We Support | Coral Swift';
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Retrieve typed sector data
  const itData = industriesData.find((d) => d.id === 'it-software')!;
  const healthData = industriesData.find((d) => d.id === 'healthcare-operations')!;
  const bankData = industriesData.find((d) => d.id === 'banking-financial-services')!;
  const enterData = industriesData.find((d) => d.id === 'enterprise-operations')!;

  return (
    <div className="bg-white">
      {/* ================================================================== */}
      {/* 1. HERO SECTION: Soft Peach and Warm White                         */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden border-b border-[#F4E3D8] bg-gradient-to-b from-[#FFF5EE] via-[#FFF9F5] to-white pt-8 pb-14 sm:pb-18">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-coral-orange/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Industries' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Editorial Headline & Narrative */}
            <div className="lg:col-span-6 animate-fadeIn space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-coral-200/80 bg-coral-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-coral-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-coral-bright" />
                <span>INDUSTRIES WE SUPPORT</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-navy-midnight tracking-tight leading-[1.08]">
                Understanding Industries. Connecting the Right Capabilities.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                We connect business requirements across technology, healthcare, financial services, and enterprise operations with suitable delivery capabilities.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#it-software"
                  className="inline-flex items-center gap-2 rounded-xl bg-swift-gradient px-6 py-3 text-sm font-bold text-white shadow-glow-coral transition-all duration-200 hover:shadow-glow-accent hover:-translate-y-0.5"
                >
                  <span>Explore Industries</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Button to="/contact?type=project" variant="secondary" size="md">
                  Discuss Your Requirements
                </Button>
              </div>

              {/* Industry Quick Jumps */}
              <div className="pt-3 border-t border-[#F2DFD4] flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                <a href="#it-software" className="hover:text-coral-orange transition-colors">01 Technology</a>
                <span>·</span>
                <a href="#healthcare-operations" className="hover:text-coral-bright transition-colors">02 Healthcare</a>
                <span>·</span>
                <a href="#banking-financial-services" className="hover:text-coral-magenta transition-colors">03 Financial</a>
                <span>·</span>
                <a href="#enterprise-operations" className="hover:text-coral-purple transition-colors">04 Enterprise Ops</a>
              </div>
            </div>

            {/* Right: Quadrant Visual Matrix */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="scale" delay={100}>
                <HeroIndustriesVisual />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. SECTOR 01: IT & SOFTWARE (Large Split-Screen Layout)            */}
      {/* Background: Clean White / Light Peach Accent                       */}
      {/* ================================================================== */}
      <section id="it-software" className="scroll-mt-24 py-14 sm:py-18 lg:py-20 border-b border-[#F4E3D8] bg-[#FFFBF8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Asset with Floating Pipeline Pill */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#EDD9CE] bg-white shadow-card-soft group">
                  <Image
                    src="/images/industry-it-software.jpg"
                    alt="Information Technology and software engineering team collaborating on application build"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />

                  {/* Glassmorphic Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 p-3.5 backdrop-blur-md border border-white/60 shadow-md">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-coral-orange block">
                        Core Capabilities
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold text-navy-midnight">
                        Custom Software · Cloud · QA Automation
                      </p>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-coral-50 text-coral-orange shrink-0">
                      <Code2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sector Narrative & Relevant Capabilities */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-orange">
                      SECTOR 01 · TECHNOLOGY
                    </span>
                  </div>
                  <h2 className="mt-1 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight">
                    Information Technology & Software
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Supporting businesses with software development, enterprise systems, and modern technology solutions.
                </p>

                {/* Relevant Capabilities List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    'Application Development',
                    'Cloud & Infrastructure',
                    'ERP Solutions',
                    'Quality Engineering',
                    'Modernization & Maintenance',
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-white border border-[#EFE3D8] p-2.5 shadow-xs">
                      <Check className="h-3.5 w-3.5 text-coral-orange shrink-0" />
                      <span className="font-medium text-navy-midnight">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* How We Can Support */}
                <div className="rounded-xl border border-coral-200/70 bg-coral-50/40 p-3.5 text-xs text-slate-700">
                  <span className="font-bold text-navy-midnight block mb-0.5">
                    How We Can Support:
                  </span>
                  <span>
                    We connect technology organizations with screened engineering teams for agile sprint delivery, fixed-scope releases, and continuous application maintenance.
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact?type=project&industry=it-software"
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="h-3.5 w-3.5" />}
                  >
                    Discuss Your Requirements
                  </Button>
                </div>

                {/* Collapsible Deep-Dive Details */}
                <ExpandableDetails
                  businessRequirements={itData.businessRequirements}
                  applicableSolutions={itData.applicableSolutions}
                  collaborationOpportunities={itData.collaborationOpportunities}
                  accentColor="#F98F33"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. SECTOR 02: HEALTHCARE & MEDICAL (Asymmetric Editorial Section)   */}
      {/* Background: Pale Rose / Soft Pink                                  */}
      {/* ================================================================== */}
      <section id="healthcare-operations" className="scroll-mt-24 py-14 sm:py-18 lg:py-20 border-b border-[#F7D8DF] bg-[#FFF1F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Sector Narrative & Capabilities */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-bright">
                    SECTOR 02 · HEALTHCARE
                  </span>
                  <h2 className="mt-1 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight">
                    Healthcare & Medical Support
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Supporting healthcare administration and operational workflows through structured processes.
                </p>

                {/* 5 Relevant Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    'Medical Coding & Billing',
                    'Revenue-Cycle Support',
                    'Authorizations',
                    'Benefits Verification',
                    'EHR Data Work',
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-white border border-[#F3D5DC] p-2.5 shadow-xs">
                      <Check className="h-3.5 w-3.5 text-coral-bright shrink-0" />
                      <span className="font-medium text-navy-midnight">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* How We Can Support */}
                <div className="rounded-xl border border-coral-200/70 bg-white/70 p-3.5 text-xs text-slate-700">
                  <span className="font-bold text-navy-midnight block mb-0.5">
                    How We Can Support:
                  </span>
                  <span>
                    We match healthcare practices and networks with dedicated administrative teams operating under client-approved SOPs and secure remote environments.
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact?type=project&industry=healthcare-operations"
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="h-3.5 w-3.5" />}
                  >
                    Discuss Your Requirements
                  </Button>
                </div>

                {/* Collapsible Deep-Dive Details */}
                <ExpandableDetails
                  businessRequirements={healthData.businessRequirements}
                  applicableSolutions={healthData.applicableSolutions}
                  collaborationOpportunities={healthData.collaborationOpportunities}
                  accentColor="#F05E47"
                />
              </div>

              {/* Right Column: Visual Anchor */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#F3D5DC] bg-white shadow-card-soft group">
                  <Image
                    src="/images/industry-healthcare.jpg"
                    alt="Healthcare billing, patient charts and medical administrative support operations"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 p-3.5 backdrop-blur-md border border-white/60 shadow-md">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-coral-bright block">
                        Clinical Administration
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold text-navy-midnight">
                        ICD-10 Coding · Prior Authorizations · RCM
                      </p>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-coral-50 text-coral-bright shrink-0">
                      <HeartPulse className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. SECTOR 03: BANKING, FINANCIAL & MORTGAGE (Dark Navy Showcase)   */}
      {/* Background: Midnight Navy (#080B2E)                                */}
      {/* ================================================================== */}
      <section id="banking-financial-services" className="scroll-mt-24 py-16 sm:py-20 border-b border-navy-secondary/60 bg-navy-midnight text-white relative overflow-hidden">
        {/* Ambient Subtle Highlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-coral-magenta/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-coral-purple/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Asset */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-navy-surface shadow-2xl group">
                  <Image
                    src="/images/industry-bfsi.jpg"
                    alt="Financial analysts conducting document reviews and transaction reconciliation"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight via-transparent to-transparent" />

                  {/* Dark-Mode Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-navy-midnight/90 p-3.5 backdrop-blur-md border border-white/15">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-coral-magenta block">
                        Compliance & Audit Support
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold text-white">
                        KYC Verification · Mortgage Audits · Reconciliations
                      </p>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-coral-magenta shrink-0">
                      <Landmark className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Capabilities */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-magenta">
                    SECTOR 03 · FINANCIAL SERVICES
                  </span>
                  <h2 className="mt-1 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    Banking, Financial Services & Mortgage
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Helping financial operations manage documentation and business processes efficiently.
                </p>

                {/* 4 Relevant Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white">
                  {[
                    'KYC & AML Documentation',
                    'Mortgage Processing',
                    'Reconciliation',
                    'Fund Operations',
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 p-2.5 backdrop-blur-xs">
                      <Check className="h-3.5 w-3.5 text-coral-magenta shrink-0" />
                      <span className="font-medium text-white">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* How We Can Support */}
                <div className="rounded-xl border border-white/15 bg-white/5 p-3.5 text-xs text-slate-300">
                  <span className="font-bold text-white block mb-0.5">
                    How We Can Support:
                  </span>
                  <span>
                    We align financial institutions with back-office operations teams trained in checklist verification, timestamped auditing, and daily statement balancing.
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact?type=project&industry=banking-financial-services"
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="h-3.5 w-3.5" />}
                  >
                    Discuss Your Requirements
                  </Button>
                </div>

                {/* Collapsible Deep-Dive Details */}
                <ExpandableDetails
                  businessRequirements={bankData.businessRequirements}
                  applicableSolutions={bankData.applicableSolutions}
                  collaborationOpportunities={bankData.collaborationOpportunities}
                  accentColor="#D21D61"
                  isDark
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. SECTOR 04: ENTERPRISE OPERATIONS (Wide Horizontal Layout)       */}
      {/* Background: Light Warm Neutral                                     */}
      {/* ================================================================== */}
      <section id="enterprise-operations" className="scroll-mt-24 py-14 sm:py-18 lg:py-20 border-b border-[#E8E4DD] bg-[#F8F7F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Narrative & 5 Capabilities */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral-purple">
                    SECTOR 04 · ENTERPRISE OPERATIONS
                  </span>
                  <h2 className="mt-1 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight">
                    Enterprise Operations & High-Volume Data
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Supporting enterprise workflows, document processing, and operational data management.
                </p>

                {/* 5 Relevant Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    'ERP Operations',
                    'Data Digitization',
                    'OCR & Document Processing',
                    'Invoice Processing',
                    'Vendor Data & Administration',
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-white border border-[#E5E0D6] p-2.5 shadow-xs">
                      <Check className="h-3.5 w-3.5 text-coral-purple shrink-0" />
                      <span className="font-medium text-navy-midnight">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* How We Can Support */}
                <div className="rounded-xl border border-purple-200/60 bg-white p-3.5 text-xs text-slate-700">
                  <span className="font-bold text-navy-midnight block mb-0.5">
                    How We Can Support:
                  </span>
                  <span>
                    We coordinate high-volume data transcription, invoice matching, and enterprise ERP maintenance through flexible shifts aligned with your operating schedule.
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button
                    to="/contact?type=project&industry=enterprise-operations"
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="h-3.5 w-3.5" />}
                  >
                    Discuss Your Requirements
                  </Button>
                </div>

                {/* Collapsible Deep-Dive Details */}
                <ExpandableDetails
                  businessRequirements={enterData.businessRequirements}
                  applicableSolutions={enterData.applicableSolutions}
                  collaborationOpportunities={enterData.collaborationOpportunities}
                  accentColor="#950B6D"
                />
              </div>

              {/* Right Column: Visual Component */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#E5E0D6] bg-white shadow-card-soft group">
                  <Image
                    src="/images/industry-enterprise-ops.jpg"
                    alt="Enterprise operations team managing business workflows and data digitization"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/95 p-3.5 backdrop-blur-md border border-white/60 shadow-md">
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-coral-purple block">
                        Operational Scale
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold text-navy-midnight">
                        ERP Support · Document Workflows · Shifts
                      </p>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-coral-50 text-coral-purple shrink-0">
                      <Building2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. CROSS-INDUSTRY COLLABORATION SECTION: Midnight Navy             */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-navy-midnight py-16 sm:py-20 text-white">
        {/* Ambient Subtle Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-coral-orange/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-coral-purple/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal direction="up">
            <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-coral-bright backdrop-blur-xs">
              CROSS-SECTOR COLLABORATION
            </span>

            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight leading-snug">
              One Connection. Multiple Business Needs.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether your requirements involve technology, healthcare, financial operations, or business support, let's explore a suitable approach.
            </p>

            {/* 4 Connected Domain Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-slate-300">
                Technology
              </span>
              <span className="text-white/30">·</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-slate-300">
                Healthcare
              </span>
              <span className="text-white/30">·</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-slate-300">
                Financial Services
              </span>
              <span className="text-white/30">·</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-slate-300">
                Enterprise Operations
              </span>
            </div>

            <div className="pt-6">
              <Button to="/contact?type=project" variant="primary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
