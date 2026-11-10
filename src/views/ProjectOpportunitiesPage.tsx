'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { illustrativeOpportunities } from '../data/opportunitiesData';
import type { OpportunityItem } from '../types';
import { ArrowRight, Check, ChevronDown, Info } from 'lucide-react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { ScrollReveal } from '../components/common/ScrollReveal';

interface ShowcaseMeta {
  number: string;
  tagline: string;
  labels: string[];
  image: string;
  imageAlt: string;
}

const showcaseMeta: Record<string, ShowcaseMeta> = {
  'opp-enterprise-erp': {
    number: '01',
    tagline: 'Connect essential business operations through integrated enterprise systems.',
    labels: ['HRMS', 'Finance', 'Procurement', 'Reporting', 'Integrations'],
    image: '/images/opportunities-erp.jpg',
    imageAlt:
      'Isometric illustration of an enterprise ERP dashboard connected to HR, finance and procurement module cards'
  },
  'opp-web-portal-dev': {
    number: '02',
    tagline: 'Build responsive digital platforms for modern business needs.',
    labels: ['Web Applications', 'APIs', 'User Access', 'Quality Testing'],
    image: '/images/opportunities-web-apps.jpg',
    imageAlt:
      'Layered illustration of browser windows and mobile app screens connected by interface lines'
  },
  'opp-healthcare-coding-billing': {
    number: '03',
    tagline: 'Support structured healthcare administrative and documentation workflows.',
    labels: ['Medical Coding', 'Billing', 'Claims', 'Documentation'],
    image: '/images/opportunities-healthcare.jpg',
    imageAlt:
      'Illustration of medical claim folders moving through a structured healthcare documentation workflow'
  },
  'opp-financial-kyc-mortgage': {
    number: '04',
    tagline: 'Support organised financial documentation and operational processes.',
    labels: ['KYC', 'Mortgage Processing', 'Mutual Funds', 'Reconciliation'],
    image: '/images/opportunities-financial.jpg',
    imageAlt:
      'Illustration of an identity card, mortgage folder and financial statements linked by a verification process'
  },
  'opp-high-volume-data': {
    number: '05',
    tagline: 'Manage large-scale document and data workflows with structured processing.',
    labels: ['Data Entry', 'Document Conversion', 'Indexing', 'Quality Checks'],
    image: '/images/opportunities-documents.jpg',
    imageAlt:
      'Illustration of a high volume stream of documents flowing into an organised indexed archive'
  }
};

const getOpp = (id: string): OpportunityItem =>
  illustrativeOpportunities.find((o) => o.id === id) as OpportunityItem;

/* Hero flow: Project Requirements → Coral Swift → Delivery Capabilities */

const heroFlowSteps = [
  { n: '1', title: 'Project Requirements', text: 'Scoped business needs and expectations', highlight: false },
  { n: '2', title: 'Coral Swift', text: 'Capability matching and coordination', highlight: true },
  { n: '3', title: 'Delivery Capabilities', text: 'Organisations equipped to deliver', highlight: false }
];

const ConnectionFlowVisual: React.FC = () => (
  <div className="relative rounded-3xl border border-coral-orange/20 bg-gradient-to-br from-white via-coral-warm to-coral-light p-6 sm:p-8 shadow-card-soft">
    <div
      className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-coral-orange/10 blur-3xl"
      aria-hidden="true"
    />
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">How Connection Works</p>
    <div className="mt-5">
      {heroFlowSteps.map((step, i) => (
        <div key={step.title}>
          {i > 0 && <div className="opp-flow-line" aria-hidden="true" />}
          <div
            className={`flex items-center gap-4 rounded-2xl border px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 ${
              step.highlight
                ? 'border-navy-midnight bg-navy-midnight text-white shadow-glow-accent'
                : 'border-slate-200/80 bg-white/85'
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                step.highlight
                  ? 'bg-swift-gradient text-white'
                  : 'border border-coral-200 bg-coral-50 text-coral-bright'
              }`}
            >
              {step.n}
            </span>
            <div>
              <p className={`font-heading text-sm font-bold ${step.highlight ? 'text-white' : 'text-navy-midnight'}`}>
                {step.title}
              </p>
              <p className={`mt-0.5 text-xs ${step.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{step.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* Compact expandable scope details (real data from opportunitiesData) */

const ScopeDetails: React.FC<{
  opp: OpportunityItem;
  panelId: string;
  open: boolean;
  onToggle: () => void;
}> = ({ opp, panelId, open, onToggle }) => (
  <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={panelId}
      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright/60 focus-visible:ring-offset-2"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-midnight">
        Explore This Requirement
      </span>
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-coral-bright transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      />
    </button>
    {open && (
      <div id={panelId} className="grid gap-8 border-t border-slate-200/70 px-5 py-6 md:grid-cols-2">
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Sample Scope</h4>
          <ul className="mt-3 space-y-2">
            {opp.sampleScope.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-bright" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            <span className="font-bold text-navy-midnight">Typical Volume: </span>
            {opp.typicalVolume}
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Key Skills</h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {opp.requiredSkills.map((sk, i) => (
              <span key={i} className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700">
                {sk}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            <span className="font-bold text-navy-midnight">Security Requirements: </span>
            {opp.securityRequirements}
          </p>
        </div>
      </div>
    )}
  </div>
);

const SubmitLink: React.FC = () => (
  <a
    href="#enquiry-form"
    className="group/cta inline-flex items-center gap-1.5 rounded text-sm font-bold text-coral-bright transition-colors hover:text-coral-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright/60 focus-visible:ring-offset-2"
  >
    <span className="underline-offset-4 group-hover/cta:underline">Submit a Requirement</span>
    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
  </a>
);

const partnershipSteps = [
  { title: 'Project Requirements', text: 'Understand the work and expectations.' },
  { title: 'Partner Alignment', text: 'Identify organisations with relevant capabilities.' },
  { title: 'Delivery Coordination', text: 'Align scope, responsibilities, and execution expectations.' }
];

export const ProjectOpportunitiesPage: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const toggleDetails = (id: string) => setOpenDetails((prev) => (prev === id ? null : id));

  useEffect(() => {
    document.title = 'Project Opportunities | Coral Swift';
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  const erp = getOpp('opp-enterprise-erp');
  const web = getOpp('opp-web-portal-dev');
  const health = getOpp('opp-healthcare-coding-billing');
  const fin = getOpp('opp-financial-kyc-mortgage');
  const docs = getOpp('opp-high-volume-data');
  const erpMeta = showcaseMeta['opp-enterprise-erp'];
  const webMeta = showcaseMeta['opp-web-portal-dev'];
  const healthMeta = showcaseMeta['opp-healthcare-coding-billing'];
  const finMeta = showcaseMeta['opp-financial-kyc-mortgage'];
  const docsMeta = showcaseMeta['opp-high-volume-data'];

  return (
    <div className="bg-white">
      <style>{`
        .opp-flow-line {
          position: relative;
          width: 2px;
          height: 36px;
          margin-left: 2.125rem;
          background: linear-gradient(to bottom, rgba(249,143,51,0.45), rgba(240,94,71,0.45));
        }
        .opp-flow-line::after {
          content: '';
          position: absolute;
          left: -3px;
          top: 0;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #F05E47;
          opacity: 0;
          animation: opp-flow-dot 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes opp-flow-dot {
          0% { top: 0; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { top: calc(100% - 8px); opacity: 0; }
        }
      `}</style>

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-[#FFFDFA]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-coral-orange/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-coral-magenta/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <Breadcrumbs items={[{ label: 'Project Opportunities' }]} />

          <div className="mt-8 grid items-center gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
            <div className="animate-fadeIn lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-coral-bright" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-coral-bright">
                  Project Opportunities
                </span>
              </div>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-midnight sm:text-5xl lg:text-[3.4rem]">
                Explore the Work Behind{' '}
                <span className="bg-swift-gradient bg-clip-text text-transparent">Every Opportunity.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Explore examples of IT and Non-IT project requirements to understand the capabilities and delivery
                experience businesses may need.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-swift-gradient px-7 py-3.5 text-sm font-bold text-white shadow-glow-coral transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright/60 focus-visible:ring-offset-2"
                >
                  Explore Project Types
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-midnight/20 bg-white/70 px-7 py-3.5 text-sm font-bold text-navy-midnight transition-colors hover:border-navy-midnight/50 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-midnight/40 focus-visible:ring-offset-2"
                >
                  Discuss a Partnership
                </a>
              </div>

              <p className="mt-7 flex max-w-xl items-start gap-2 border-l-2 border-coral-orange/50 pl-3 text-xs italic text-slate-500">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-orange" aria-hidden="true" />
                All examples are illustrative and do not represent currently available or awarded projects.
              </p>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="scale" delay={120}>
                <ConnectionFlowVisual />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 01 Enterprise ERP — large split-screen editorial ---------------- */}
      <section id="projects" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-card-soft">
                <img
                  src={erpMeta.image}
                  alt={erpMeta.imageAlt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-midnight backdrop-blur">
                  {erp.category}
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={100}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-coral-bright">{erpMeta.number}</span>
                <span className="h-px w-8 bg-coral-bright/50" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Illustrative Example
                </span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
                {erp.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{erpMeta.tagline}</p>
              <ul className="mt-7 space-y-3">
                {erpMeta.labels.map((label) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-medium text-navy-midnight">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral-orange" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <SubmitLink />
              </div>
              <ScopeDetails
                opp={erp}
                panelId="opp-details-erp"
                open={openDetails === 'opp-enterprise-erp'}
                onToggle={() => toggleDetails('opp-enterprise-erp')}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------- 02 Web & Application Development — asymmetrical ---------------- */}
      <section className="overflow-hidden bg-coral-warm py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <ScrollReveal direction="up">
              <span
                aria-hidden="true"
                className="block select-none font-heading text-[6rem] font-extrabold leading-[0.75] text-coral-orange/15 sm:text-[8rem]"
              >
                02
              </span>
              <h2 className="-mt-2 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:-mt-4 sm:text-4xl">
                Web &amp; Application Development
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">{webMeta.tagline}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {webMeta.labels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-coral-orange/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-midnight"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <SubmitLink />
              </div>
              <ScopeDetails
                opp={web}
                panelId="opp-details-web"
                open={openDetails === 'opp-web-portal-dev'}
                onToggle={() => toggleDetails('opp-web-portal-dev')}
              />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 lg:mt-16">
            <ScrollReveal direction="up" delay={120}>
              <div className="group relative overflow-hidden rounded-3xl border border-white shadow-card-soft">
                <img
                  src={webMeta.image}
                  alt={webMeta.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-midnight backdrop-blur">
                  {web.category}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------- 03 Healthcare Operations — horizontal visual showcase ---------------- */}
      <section className="bg-navy-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-midnight font-mono text-sm font-bold text-white">
                  03
                </span>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
                  {health.title}
                </h2>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {health.category} · Illustrative
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="group mt-8 overflow-hidden rounded-3xl border border-slate-200/70 shadow-card-soft">
              <img
                src={healthMeta.image}
                alt={healthMeta.imageAlt}
                loading="lazy"
                className="aspect-[21/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={160}>
            <div className="mt-8 grid items-start gap-8 border-t border-slate-200 pt-8 lg:grid-cols-12">
              <p className="text-base font-medium leading-relaxed text-navy-midnight sm:text-lg lg:col-span-5">
                {healthMeta.tagline}
              </p>
              <p className="text-sm font-semibold leading-loose text-navy-midnight lg:col-span-4">
                {healthMeta.labels.map((label, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && (
                      <span className="mx-2 text-coral-bright" aria-hidden="true">
                        ·
                      </span>
                    )}
                    {label}
                  </React.Fragment>
                ))}
              </p>
              <div className="lg:col-span-3 lg:justify-self-end">
                <SubmitLink />
              </div>
            </div>
          </ScrollReveal>

          <ScopeDetails
            opp={health}
            panelId="opp-details-health"
            open={openDetails === 'opp-healthcare-coding-billing'}
            onToggle={() => toggleDetails('opp-healthcare-coding-billing')}
          />
        </div>
      </section>

      {/* ---------------- 04 Financial Process Operations — typography-led ---------------- */}
      <section className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <span
                aria-hidden="true"
                className="block select-none font-heading text-[9rem] font-extrabold leading-[0.8] text-transparent [-webkit-text-stroke:2px_rgba(240,94,71,0.35)] sm:text-[11rem]"
              >
                04
              </span>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-5xl">
                {fin.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{finMeta.tagline}</p>
              <p className="mt-6 text-base font-semibold text-navy-midnight sm:text-lg">
                {finMeta.labels.map((label, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && (
                      <span className="mx-2 text-coral-bright" aria-hidden="true">
                        ·
                      </span>
                    )}
                    {label}
                  </React.Fragment>
                ))}
              </p>
              <div className="mt-8">
                <SubmitLink />
              </div>
              <ScopeDetails
                opp={fin}
                panelId="opp-details-fin"
                open={openDetails === 'opp-financial-kyc-mortgage'}
                onToggle={() => toggleDetails('opp-financial-kyc-mortgage')}
              />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={120}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 shadow-card-soft">
                <img
                  src={finMeta.image}
                  alt={finMeta.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-midnight backdrop-blur">
                  {fin.category}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------- 05 High-Volume Document Operations — connected workflow ---------------- */}
      <section className="bg-coral-light py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <ScrollReveal direction="up">
              <div className="group relative overflow-hidden rounded-3xl border border-white shadow-card-soft">
                <img
                  src={docsMeta.image}
                  alt={docsMeta.imageAlt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-midnight backdrop-blur">
                  {docs.category}
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={100}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-midnight font-mono text-sm font-bold text-white">
                  05
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  {docs.category} · Illustrative
                </span>
              </div>
              <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
                {docs.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">{docsMeta.tagline}</p>
              <div className="mt-7 flex flex-wrap items-center gap-y-3">
                {docsMeta.labels.map((label, i) => (
                  <React.Fragment key={label}>
                    {i > 0 && (
                      <span
                        aria-hidden="true"
                        className="mx-1 hidden h-px w-5 bg-gradient-to-r from-coral-orange/60 to-coral-bright/60 sm:block"
                      />
                    )}
                    <span className="rounded-full border border-coral-orange/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-midnight shadow-xs">
                      {label}
                    </span>
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-8">
                <SubmitLink />
              </div>
              <ScopeDetails
                opp={docs}
                panelId="opp-details-docs"
                open={openDetails === 'opp-high-volume-data'}
                onToggle={() => toggleDetails('opp-high-volume-data')}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------- Partnership context ---------------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral-bright">Partnership Context</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
              The Right Capabilities. The Right Connection.
            </h2>
          </ScrollReveal>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-coral-orange/50 via-coral-bright/50 to-coral-magenta/50 lg:block"
            />
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              {partnershipSteps.map((step, i) => (
                <ScrollReveal key={step.title} direction="up" delay={i * 120}>
                  <div className="flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-coral-orange/40 bg-white font-heading text-lg font-extrabold text-navy-midnight">
                      {i + 1}
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-navy-midnight">{step.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Enquiry ---------------- */}
      <section className="bg-gradient-to-b from-coral-warm via-white to-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-5">
            <ScrollReveal direction="up">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral-bright">
                Partnership Enquiries
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
                Does Your Team Have the Right Capabilities?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Tell us about your organisation and the types of projects you are equipped to support.
              </p>
              <Link
                href="/partnerships"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-midnight px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-midnight/40 focus-visible:ring-offset-2"
              >
                Explore a Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7">
            <div id="enquiry-form" className="scroll-mt-24">
              <ScrollReveal direction="up" delay={100}>
                <ProjectEnquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
