'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, Info } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Logo } from '../components/common/Logo';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { illustrativeOpportunities } from '../data/opportunitiesData';
import type { OpportunityItem } from '../types';

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
    image: '/images/industry-enterprise-ops.jpg',
    imageAlt: 'Employees working at computers in a large operations office',
  },
  'opp-web-portal-dev': {
    number: '02',
    tagline: 'Build responsive digital platforms for modern business needs.',
    labels: ['Web Applications', 'APIs', 'User Access', 'Quality Testing'],
    image: '/images/home-keyboard-typing-8k.jpg',
    imageAlt: 'Hands working at a laptop in a software development workspace',
  },
  'opp-healthcare-coding-billing': {
    number: '03',
    tagline: 'Support structured healthcare administrative and documentation workflows.',
    labels: ['Medical Coding', 'Billing', 'Claims', 'Documentation'],
    image: '/images/industry-healthcare.jpg',
    imageAlt: 'Healthcare professional using a mobile device in a clinical setting',
  },
  'opp-financial-kyc-mortgage': {
    number: '04',
    tagline: 'Support organised financial documentation and operational processes.',
    labels: ['KYC', 'Mortgage Processing', 'Mutual Funds', 'Reconciliation'],
    image: '/images/industry-bfsi.jpg',
    imageAlt: 'Modern office towers in an international financial district',
  },
  'opp-high-volume-data': {
    number: '05',
    tagline: 'Manage large-scale document and data workflows with structured processing.',
    labels: ['Data Entry', 'Document Conversion', 'Indexing', 'Quality Checks'],
    image: '/images/services-operations-4k.jpg',
    imageAlt: 'Operations team reviewing documents and a laptop at a workstation',
  },
};

const getOpp = (id: string): OpportunityItem =>
  illustrativeOpportunities.find((opportunity) => opportunity.id === id) as OpportunityItem;

const heroFlowSteps = [
  { n: '01', title: 'Project Requirements', text: 'Scoped business needs and expectations', highlight: false },
  { n: '02', title: 'Coral Swift', text: 'Capability matching and coordination', highlight: true },
  { n: '03', title: 'Delivery Capabilities', text: 'Organisations equipped to deliver', highlight: false },
];

const ConnectionFlowVisual: React.FC = () => (
  <div role="group" aria-labelledby="connection-flow-label" className="relative">
    <p id="connection-flow-label" className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 sm:text-xs">
      The connection in practice
    </p>
    <div className="relative mt-7">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[1.25rem] hidden h-2 w-full lg:block"
        viewBox="0 0 1000 20"
        preserveAspectRatio="none"
      >
        <path className="opp-flow-path" d="M120 10H500" fill="none" stroke="#F98F33" strokeWidth="1.5" />
        <path className="opp-flow-path opp-flow-path-reverse" d="M500 10H880" fill="none" stroke="#D21D61" strokeWidth="1.5" />
      </svg>
      <div
        aria-hidden="true"
        className="absolute bottom-5 left-[1.2rem] top-5 w-px bg-gradient-to-b from-coral-orange/70 via-coral-bright/70 to-coral-magenta/70 lg:hidden"
      />
      <ol className="relative grid gap-6 lg:grid-cols-3 lg:gap-4">
        {heroFlowSteps.map((step) => (
          <li
            key={step.n}
            className="relative grid grid-cols-[2.5rem_1fr] items-center gap-4 lg:flex lg:min-h-[150px] lg:flex-col lg:items-center lg:gap-3 lg:text-center"
          >
            <span
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10px] font-bold ${
                step.highlight
                  ? 'border-coral-bright bg-navy-midnight text-coral-orange'
                  : 'border-white/45 bg-navy-midnight/80 text-white'
              }`}
            >
              {step.n}
            </span>
            <div className="lg:min-h-[80px]">
              {step.highlight ? (
                <div className="flex flex-col items-start gap-1 lg:items-center">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-coral-orange">
                    Connection hub
                  </span>
                  <Logo variant="horizontal" theme="dark" size="sm" showSubtitle={false} asLink={false} />
                </div>
              ) : (
                <p className="font-heading text-base font-bold text-white sm:text-lg">{step.title}</p>
              )}
              <p className="mt-1 text-xs leading-relaxed text-white/70 sm:text-sm">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const CapabilityLine: React.FC<{ labels: string[]; dark?: boolean }> = ({ labels, dark = false }) => (
  <ul className={`mt-6 flex flex-wrap gap-x-5 gap-y-3 ${dark ? 'text-white/85' : 'text-navy-midnight'}`}>
    {labels.map((label) => (
      <li key={label} className="inline-flex items-center gap-2 text-xs font-semibold sm:text-sm">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral-bright" aria-hidden="true" />
        {label}
      </li>
    ))}
  </ul>
);

const ScopeDetails: React.FC<{
  opp: OpportunityItem;
  panelId: string;
  open: boolean;
  onToggle: () => void;
  dark?: boolean;
}> = ({ opp, panelId, open, onToggle, dark = false }) => {
  const borderColor = dark ? 'border-white/20' : 'border-navy-midnight/15';
  const headingColor = dark ? 'text-white' : 'text-navy-midnight';
  const bodyColor = dark ? 'text-white/75' : 'text-slate-600';
  const mutedColor = dark ? 'text-white/55' : 'text-slate-500';

  return (
    <div className={`mt-8 border-y ${borderColor}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-coral-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-bright ${headingColor}`}
      >
        <span>Explore This Requirement</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-coral-bright transition-transform duration-300 motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className={`${open ? 'grid' : ''} gap-8 border-t ${borderColor} py-6 md:grid-cols-2`}
      >
        <div>
          <h3 className={`text-[11px] font-bold uppercase tracking-wider ${mutedColor}`}>Sample Scope</h3>
          <ul className="mt-3 space-y-2.5">
            {opp.sampleScope.map((scope) => (
              <li key={scope} className={`flex items-start gap-2 text-xs leading-relaxed ${bodyColor}`}>
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-orange" aria-hidden="true" />
                <span>{scope}</span>
              </li>
            ))}
          </ul>
          <p className={`mt-4 text-xs leading-relaxed ${bodyColor}`}>
            <span className={`font-bold ${headingColor}`}>Typical Volume: </span>
            {opp.typicalVolume}
          </p>
        </div>
        <div>
          <h3 className={`text-[11px] font-bold uppercase tracking-wider ${mutedColor}`}>Key Skills</h3>
          <ul className={`mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs leading-relaxed ${bodyColor}`}>
            {opp.requiredSkills.map((skill) => (
              <li key={skill} className="border-b border-coral-orange/40 pb-1">
                {skill}
              </li>
            ))}
          </ul>
          <p className={`mt-4 text-xs leading-relaxed ${bodyColor}`}>
            <span className={`font-bold ${headingColor}`}>Security Requirements: </span>
            {opp.securityRequirements}
          </p>
        </div>
      </div>
    </div>
  );
};

const SubmitLink: React.FC<{ dark?: boolean }> = ({ dark = false }) => (
  <a
    href="#enquiry-form"
    className={`group/cta inline-flex min-h-11 items-center gap-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-bright ${
      dark ? 'text-coral-orange hover:text-white' : 'text-coral-purple hover:text-coral-bright'
    }`}
  >
    <span className="underline-offset-4 group-hover/cta:underline">Submit a Requirement</span>
    <ArrowRight
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none"
    />
  </a>
);

const partnershipSteps = [
  { title: 'Project Requirements', text: 'Understand the work and expectations.' },
  { title: 'Partner Alignment', text: 'Identify organisations with relevant capabilities.' },
  { title: 'Delivery Coordination', text: 'Align scope, responsibilities, and execution expectations.' },
];

export const ProjectOpportunitiesPage: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const toggleDetails = (id: string) => setOpenDetails((previous) => (previous === id ? null : id));

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
        @keyframes opp-flow-dash {
          to { stroke-dashoffset: -44; }
        }
        .opp-flow-path {
          stroke-dasharray: 4 9;
          animation: opp-flow-dash 14s linear infinite;
        }
        .opp-flow-path-reverse {
          animation-direction: reverse;
        }
        @media (prefers-reduced-motion: reduce) {
          .opp-flow-path {
            animation: none;
          }
        }
      `}</style>

      <section aria-labelledby="opportunities-title" className="relative isolate overflow-hidden bg-navy-midnight text-white">
        <Image
          src="/images/about-global-delivery.jpg"
          alt="Business team reviewing project information together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/80 via-[#080B2E]/45 to-[#080B2E]/10" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/45 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-2 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <Breadcrumbs items={[{ label: 'Project Opportunities' }]} dark />
          <div className="mt-10 grid items-center gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-coral-orange" aria-hidden="true" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-coral-orange sm:text-xs">
                  Project Opportunities
                </span>
              </div>
              <h1
                id="opportunities-title"
                className="mt-5 max-w-2xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]"
              >
                Explore the Work Behind Every Opportunity.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                Explore examples of IT and Non-IT project requirements to understand the capabilities and delivery
                experience businesses may need.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-swift-gradient px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange motion-reduce:transition-none"
                >
                  Explore Project Types
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="#enquiry-form"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Discuss a Partnership
                </a>
              </div>
              <p className="mt-6 flex max-w-xl items-start gap-2 border-l-2 border-coral-orange/70 pl-3 text-xs leading-relaxed text-white/80 sm:text-sm">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-coral-orange" aria-hidden="true" />
                All examples are illustrative and do not represent currently available or awarded projects.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="lg:col-span-6">
              <ConnectionFlowVisual />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="erp-title" className="scroll-mt-24 bg-white">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <figure className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-[650px]">
            <Image
              src={erpMeta.image}
              alt={erpMeta.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover object-[center_48%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/65 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:bottom-8 sm:left-8 sm:text-xs">
              {erp.category} <span className="mx-2 text-coral-orange">/</span> Illustrative Example
            </figcaption>
          </figure>

          <div className="flex items-center px-5 py-14 sm:px-10 sm:py-18 lg:px-14 lg:py-20">
            <ScrollReveal direction="up" className="mx-auto w-full max-w-xl">
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                <span className="text-coral-bright">{erpMeta.number}</span>
                <span className="h-px w-8 bg-coral-bright/55" aria-hidden="true" />
                <span>Enterprise Systems</span>
              </div>
              <h2 id="erp-title" className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-4xl">
                {erp.title}
              </h2>
              <p className="mt-4 text-base font-semibold leading-relaxed text-navy-secondary sm:text-lg">{erpMeta.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{erp.description}</p>
              <CapabilityLine labels={erpMeta.labels} />
              <div className="mt-6">
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

      <section aria-labelledby="web-title" className="overflow-hidden bg-navy-midnight text-white">
        <div className="grid lg:min-h-[690px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center px-5 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20 xl:px-16">
            <ScrollReveal direction="up" className="mx-auto w-full max-w-xl">
              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                <span className="text-coral-orange">{webMeta.number}</span>
                <span className="h-px w-8 bg-coral-orange/70" aria-hidden="true" />
                <span>{web.category}</span>
              </div>
              <h2 id="web-title" className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {web.title}
              </h2>
              <p className="mt-4 text-base font-semibold leading-relaxed text-white/90 sm:text-lg">{webMeta.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{web.description}</p>
              <CapabilityLine labels={webMeta.labels} dark />
              <div className="mt-6">
                <SubmitLink dark />
              </div>
              <ScopeDetails
                opp={web}
                panelId="opp-details-web"
                open={openDetails === 'opp-web-portal-dev'}
                onToggle={() => toggleDetails('opp-web-portal-dev')}
                dark
              />
            </ScrollReveal>
          </div>

          <figure className="relative min-h-[320px] overflow-hidden sm:min-h-[440px] lg:min-h-[690px]">
            <Image
              src={webMeta.image}
              alt={webMeta.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-[center_52%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/35 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 right-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 sm:bottom-8 sm:right-8 sm:text-xs">
              Digital Platforms <span className="mx-2 text-coral-orange">/</span> Software Delivery
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="health-title" className="bg-[#F5F6FA]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal direction="up">
            <header className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
              <div className="md:col-span-7">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-rose">
                  {healthMeta.number} <span className="mx-2 text-slate-400">/</span> Healthcare Operations
                </p>
                <h2 id="health-title" className="mt-3 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-4xl lg:text-5xl">
                  {health.title}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-slate-600 md:col-span-5 md:pb-1 sm:text-lg">{healthMeta.tagline}</p>
            </header>
          </ScrollReveal>

          <div className="mt-9 grid items-center gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal direction="left" className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:col-span-7 lg:min-h-[500px]">
              <Image
                src={healthMeta.image}
                alt={healthMeta.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-[center_42%]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/35 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7 sm:text-xs">
                Healthcare Administration
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{health.description}</p>
              <CapabilityLine labels={healthMeta.labels} />
              <div className="mt-6">
                <SubmitLink />
              </div>
              <ScopeDetails
                opp={health}
                panelId="opp-details-health"
                open={openDetails === 'opp-healthcare-coding-billing'}
                onToggle={() => toggleDetails('opp-healthcare-coding-billing')}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="financial-title" className="overflow-hidden bg-coral-warm">
        <div className="grid lg:min-h-[700px] lg:grid-cols-[1fr_1fr]">
          <div className="flex items-center px-5 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20 xl:px-16">
            <ScrollReveal direction="up" className="mx-auto w-full max-w-xl">
              <span aria-hidden="true" className="font-heading text-6xl font-extrabold leading-none text-coral-bright/75 sm:text-7xl">
                {finMeta.number}
              </span>
              <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                Financial Process Operations
              </p>
              <h2 id="financial-title" className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-4xl">
                {fin.title}
              </h2>
              <p className="mt-4 text-base font-semibold leading-relaxed text-navy-secondary sm:text-lg">{finMeta.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{fin.description}</p>
              <CapabilityLine labels={finMeta.labels} />
              <div className="mt-6">
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

          <figure className="relative min-h-[320px] overflow-hidden sm:min-h-[440px] lg:min-h-[700px]">
            <Image
              src={finMeta.image}
              alt={finMeta.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-[center_48%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-coral-warm/40" />
            <figcaption className="absolute bottom-6 right-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 sm:bottom-8 sm:right-8 sm:text-xs">
              Financial District <span className="mx-2 text-coral-orange">/</span> Illustrative
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="documents-title" className="relative isolate overflow-hidden bg-navy-midnight text-white">
        <Image
          src={docsMeta.image}
          alt={docsMeta.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/95 via-[#080B2E]/75 to-[#080B2E]/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/90 via-transparent to-[#080B2E]/15" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal direction="up" className="max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="text-coral-orange">{docsMeta.number}</span>
              <span className="h-px w-8 bg-coral-orange/75" aria-hidden="true" />
              <span>{docs.category} · Illustrative</span>
            </div>
            <h2 id="documents-title" className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {docs.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">{docsMeta.tagline}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">{docs.description}</p>
            <CapabilityLine labels={docsMeta.labels} dark />
            <div className="mt-6">
              <SubmitLink dark />
            </div>
            <ScopeDetails
              opp={docs}
              panelId="opp-details-docs"
              open={openDetails === 'opp-high-volume-data'}
              onToggle={() => toggleDetails('opp-high-volume-data')}
              dark
            />
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="partnership-context-title" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal direction="up" className="max-w-3xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-coral-bright sm:text-xs">
              Partnership Context
            </p>
            <h2 id="partnership-context-title" className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl">
              The Right Capabilities. The Right Connection.
            </h2>
          </ScrollReveal>

          <div className="relative mt-10 sm:mt-14">
            <div
              aria-hidden="true"
              className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-gradient-to-b from-coral-orange via-coral-bright to-coral-magenta lg:bottom-auto lg:left-[16.66%] lg:right-[16.66%] lg:top-8 lg:h-px lg:w-auto lg:bg-gradient-to-r"
            />
            <ol className="relative grid gap-8 lg:grid-cols-3 lg:gap-10">
              {partnershipSteps.map((step, index) => (
                <ScrollReveal key={step.title} as="li" direction="up" delay={index * 100}>
                  <div className="grid grid-cols-[3rem_1fr] items-start gap-4 lg:block">
                    <span className="relative z-10 inline-flex min-h-12 items-center bg-white pr-2 font-heading text-3xl font-extrabold tracking-tight text-navy-midnight sm:text-4xl lg:mb-5 lg:min-h-0 lg:bg-white lg:pr-3 lg:text-5xl">
                      0{index + 1}
                    </span>
                    <div className="pt-1 lg:pt-0">
                      <h3 className="font-heading text-lg font-bold text-navy-midnight sm:text-xl">{step.title}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">{step.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="enquiry-form" aria-labelledby="enquiry-title" className="relative isolate scroll-mt-24 bg-navy-midnight text-white">
        <div aria-hidden="true" className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-coral-bright/70 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
          <ScrollReveal direction="up" className="lg:col-span-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-coral-orange sm:text-xs">
              Partnership Enquiries
            </p>
            <h2 id="enquiry-title" className="mt-3 max-w-lg font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Does Your Team Have the Right Capabilities?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
              Tell us about your organisation and the types of projects you are equipped to support.
            </p>
            <Link
              href="/partnerships"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-coral-orange transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange"
            >
              Explore a Partnership
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} className="lg:col-span-7">
            <ProjectEnquiryForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
