'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, CheckCircle2, ChevronDown } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { industriesData } from '../data/industriesData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import type { IndustryItem } from '../types';

interface ExpandableDetailsProps {
  businessRequirements: string[];
  applicableSolutions: string[];
  collaborationOpportunities: string[];
  panelId: string;
  accentColor: string;
  tone?: 'light' | 'dark';
}

const ExpandableDetails: React.FC<ExpandableDetailsProps> = ({
  businessRequirements,
  applicableSolutions,
  collaborationOpportunities,
  panelId,
  accentColor,
  tone = 'light',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = tone === 'dark';
  const borderColor = isDark ? 'border-white/20' : 'border-navy-midnight/15';
  const headingColor = isDark ? 'text-white' : 'text-navy-midnight';
  const bodyColor = isDark ? 'text-white/80' : 'text-slate-600';
  const mutedColor = isDark ? 'text-white/60' : 'text-slate-500';

  return (
    <div className={`mt-8 border-y ${borderColor}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-coral-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-bright ${headingColor}`}
      >
        <span>{isOpen ? 'Hide Detailed Profile' : 'View In-Depth Sector Profile'}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-coral-bright transition-transform duration-300 motion-reduce:transition-none ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        id={panelId}
        hidden={!isOpen}
        className={`${isOpen ? 'grid' : ''} gap-6 border-t ${borderColor} py-6 md:grid-cols-3`}
      >
        <div>
          <h3 className={`text-[11px] font-bold uppercase tracking-wider ${mutedColor}`}>Typical Requirements</h3>
          <ul className="mt-3 space-y-2.5">
            {businessRequirements.map((requirement) => (
              <li key={requirement} className={`flex items-start gap-2 text-xs leading-relaxed ${bodyColor}`}>
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`text-[11px] font-bold uppercase tracking-wider ${mutedColor}`}>Applicable Solutions</h3>
          <ul className="mt-3 space-y-2.5">
            {applicableSolutions.map((solution) => (
              <li key={solution} className={`flex items-start gap-2 text-xs leading-relaxed ${bodyColor}`}>
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`text-[11px] font-bold uppercase tracking-wider ${mutedColor}`}>Collaboration Models</h3>
          <ul className="mt-3 space-y-2.5">
            {collaborationOpportunities.map((opportunity) => (
              <li key={opportunity} className={`flex items-start gap-2 text-xs leading-relaxed ${bodyColor}`}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CapabilityList: React.FC<{
  items: string[];
  accentColor: string;
  columns?: 1 | 2;
  dark?: boolean;
}> = ({ items, accentColor, columns = 2, dark = false }) => (
  <ul
    className={`grid gap-x-8 ${columns === 2 ? 'sm:grid-cols-2' : ''} ${
      dark ? 'text-white/85' : 'text-navy-midnight'
    }`}
  >
    {items.map((item, index) => (
      <li
        key={item}
        className={`flex items-start gap-3 border-b py-3 text-sm leading-relaxed ${
          dark ? 'border-white/15' : 'border-navy-midnight/10'
        }`}
      >
        <span className="mt-0.5 font-mono text-[10px] font-bold" style={{ color: accentColor }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Industries We Support | Coral Swift';
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const sectorMap = industriesData.reduce<Record<string, IndustryItem>>((acc, sector) => {
    acc[sector.id] = sector;
    return acc;
  }, {});
  const itData = sectorMap['it-software'] ?? industriesData[0];
  const healthData = sectorMap['healthcare-operations'] ?? industriesData[1] ?? industriesData[0];
  const bankData = sectorMap['banking-financial-services'] ?? industriesData[2] ?? industriesData[0];
  const enterData = sectorMap['enterprise-operations'] ?? industriesData[3] ?? industriesData[0];

  if (!itData || !healthData || !bankData || !enterData) {
    return null;
  }

  return (
    <div className="bg-white">
      <section
        aria-labelledby="industries-title"
        className="relative isolate overflow-hidden bg-navy-midnight text-white"
      >
        <Image
          src="/images/about-global-delivery.jpg"
          alt="Business colleagues collaborating around a table in a bright office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/80 via-[#080B2E]/45 to-[#080B2E]/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/45 via-transparent to-transparent"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-2 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <Breadcrumbs items={[{ label: 'Industries' }]} dark />
          <ScrollReveal direction="left" className="mt-12 max-w-3xl sm:mt-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-coral-orange" aria-hidden="true" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-coral-orange sm:text-xs">
                Industries We Support
              </span>
            </div>
            <h1
              id="industries-title"
              className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]"
            >
              Understanding Industries. Connecting the Right Capabilities.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
              We connect business requirements across technology, healthcare, financial services, and enterprise
              operations with suitable delivery capabilities.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#it-software"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-swift-gradient px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral-orange motion-reduce:transition-none"
              >
                Explore Industries
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="/contact?type=project"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discuss Your Requirements
              </a>
            </div>

            <nav
              aria-label="Industry quick links"
              className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/25 pt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-xs"
            >
              <a href="#it-software" className="transition-colors hover:text-coral-orange">01 Technology</a>
              <a href="#healthcare-operations" className="transition-colors hover:text-coral-orange">02 Healthcare</a>
              <a href="#banking-financial-services" className="transition-colors hover:text-coral-orange">03 Financial</a>
              <a href="#enterprise-operations" className="transition-colors hover:text-coral-orange">04 Enterprise Ops</a>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="it-software"
        aria-labelledby="it-software-title"
        className="scroll-mt-24 overflow-hidden border-b border-[#F4E3D8] bg-[#FFFBF8]"
      >
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
          <ScrollReveal
            direction="left"
            className="relative min-h-[340px] overflow-hidden sm:min-h-[480px] lg:col-span-5 lg:min-h-[680px]"
          >
            <Image
              src="/images/services-it-4k.jpg"
              alt="Software engineers collaborating at a computer workstation"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover object-[65%_center] sm:object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/65 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:bottom-8 sm:left-8 sm:text-xs">
              Software Engineering <span className="mx-2 text-coral-orange">/</span> Technology
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" className="relative flex items-center lg:col-span-7">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-10 font-heading text-[8rem] font-extrabold leading-none text-coral-orange/10 sm:text-[11rem]"
            >
              01
            </span>
            <div className="relative w-full">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-orange">
                SECTOR 01 · TECHNOLOGY
              </p>
              <h2
                id="it-software-title"
                className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-4xl lg:text-5xl"
              >
                Information Technology & Software
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Supporting businesses with software development, enterprise systems, and modern technology solutions.
              </p>

              <div className="mt-7">
                <CapabilityList
                  items={[
                    'Application Development',
                    'Cloud & Infrastructure',
                    'ERP Solutions',
                    'Quality Engineering',
                    'Modernization & Maintenance',
                  ]}
                  accentColor="#F98F33"
                />
              </div>

              <p className="mt-6 max-w-2xl border-l-2 border-coral-orange/80 pl-4 text-sm leading-relaxed text-slate-600">
                <span className="font-bold text-navy-midnight">How We Can Support: </span>
                We connect technology organizations with screened engineering teams for agile sprint delivery,
                fixed-scope releases, and continuous application maintenance.
              </p>
              <div className="mt-6">
                <Button
                  to="/contact?type=project&industry=it-software"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="h-3.5 w-3.5" />}
                >
                  Discuss Your Requirements
                </Button>
              </div>
              <ExpandableDetails
                businessRequirements={itData.businessRequirements}
                applicableSolutions={itData.applicableSolutions}
                collaborationOpportunities={itData.collaborationOpportunities}
                panelId="it-software-details"
                accentColor="#F98F33"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="healthcare-operations"
        aria-labelledby="healthcare-operations-title"
        className="scroll-mt-24 bg-[#FFF1F4]"
      >
        <div className="relative isolate min-h-[450px] overflow-hidden bg-navy-midnight text-white sm:min-h-[560px]">
          <Image
            src="/images/industry-healthcare.jpg"
            alt="Healthcare professional using a mobile device in a clinical setting"
            fill
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#080B2E]/85 via-[#080B2E]/45 to-[#080B2E]/10"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/55 via-transparent to-transparent" />
          <div className="relative mx-auto flex min-h-[450px] max-w-7xl items-end px-4 py-12 sm:min-h-[560px] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <ScrollReveal direction="left" className="max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-bright">
                SECTOR 02 · HEALTHCARE
              </p>
              <h2
                id="healthcare-operations-title"
                className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Healthcare & Medical Support
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Supporting healthcare administration and operational workflows through structured processes.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-20">
          <ScrollReveal direction="up" className="lg:col-span-7">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-coral-rose">
              Healthcare Capabilities
            </p>
            <div className="mt-4">
              <CapabilityList
                items={[
                  'Medical Coding & Billing',
                  'Revenue-Cycle Support',
                  'Authorizations',
                  'Benefits Verification',
                  'EHR Data Work',
                ]}
                accentColor="#F05E47"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              <span className="font-bold text-navy-midnight">How We Can Support: </span>
              We match healthcare practices and networks with dedicated administrative teams operating under
              client-approved SOPs and secure remote environments.
            </p>
            <div className="mt-6">
              <Button
                to="/contact?type=project&industry=healthcare-operations"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Discuss Your Requirements
              </Button>
            </div>
            <ExpandableDetails
              businessRequirements={healthData.businessRequirements}
              applicableSolutions={healthData.applicableSolutions}
              collaborationOpportunities={healthData.collaborationOpportunities}
              panelId="healthcare-operations-details"
              accentColor="#F05E47"
            />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="banking-financial-services"
        aria-labelledby="banking-financial-services-title"
        className="scroll-mt-24 overflow-hidden bg-navy-midnight text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
          <ScrollReveal
            direction="left"
            className="relative min-h-[360px] overflow-hidden sm:min-h-[500px] lg:col-span-7 lg:min-h-[660px]"
          >
            <Image
              src="/images/industry-enterprise-ops.jpg"
              alt="Modern glass office towers viewed from street level"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-[center_48%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/65 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 sm:bottom-8 sm:left-8 sm:text-xs">
              Financial District <span className="mx-2 text-coral-magenta">/</span> Financial Services
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" className="relative lg:col-span-5">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-12 font-heading text-[8rem] font-extrabold leading-none text-coral-magenta/15 sm:text-[10rem]"
            >
              03
            </span>
            <div className="relative">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-magenta">
                SECTOR 03 · FINANCIAL SERVICES
              </p>
              <h2
                id="banking-financial-services-title"
                className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
              >
                Banking, Financial Services & Mortgage
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Helping financial operations manage documentation and business processes efficiently.
              </p>

              <div className="mt-6">
                <CapabilityList
                  items={[
                    'KYC & AML Documentation',
                    'Mortgage Processing',
                    'Reconciliation',
                    'Fund Operations',
                  ]}
                  accentColor="#D21D61"
                  columns={1}
                  dark
                />
              </div>

              <p className="mt-6 border-l-2 border-coral-magenta/80 pl-4 text-sm leading-relaxed text-white/70">
                <span className="font-bold text-white">How We Can Support: </span>
                We align financial institutions with back-office operations teams trained in checklist verification,
                timestamped auditing, and daily statement balancing.
              </p>
              <div className="mt-6">
                <Button
                  to="/contact?type=project&industry=banking-financial-services"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="h-3.5 w-3.5" />}
                >
                  Discuss Your Requirements
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-12">
            <ExpandableDetails
              businessRequirements={bankData.businessRequirements}
              applicableSolutions={bankData.applicableSolutions}
              collaborationOpportunities={bankData.collaborationOpportunities}
              panelId="banking-financial-services-details"
              accentColor="#D21D61"
              tone="dark"
            />
          </div>
        </div>
      </section>

      <section
        id="enterprise-operations"
        aria-labelledby="enterprise-operations-title"
        className="scroll-mt-24 bg-[#F8F7F4]"
      >
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <ScrollReveal direction="up" className="relative max-w-3xl">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 -top-16 font-heading text-[6rem] font-extrabold leading-none text-coral-purple/10 sm:text-[12rem]"
            >
              04
            </span>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-purple">
              SECTOR 04 · ENTERPRISE OPERATIONS
            </p>
            <h2
              id="enterprise-operations-title"
              className="relative mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-4xl lg:text-5xl"
            >
              Enterprise Operations & High-Volume Data
            </h2>
            <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Supporting enterprise workflows, document processing, and operational data management.
            </p>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            className="relative mt-9 min-h-[300px] overflow-hidden sm:mt-12 sm:min-h-[440px] lg:min-h-[540px]"
          >
            <Image
              src="/images/services-operations-4k.jpg"
              alt="Colleagues reviewing paperwork beside a laptop during an operations meeting"
              fill
              sizes="100vw"
              className="object-cover object-[center_48%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7 sm:text-xs">
              Enterprise Operations <span className="mx-2 text-coral-purple">/</span> Data Workflows
            </span>
          </ScrollReveal>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-coral-purple">
                Operational Capabilities
              </p>
              <div className="mt-4">
                <CapabilityList
                  items={[
                    'ERP Operations',
                    'Data Digitization',
                    'OCR & Document Processing',
                    'Invoice Processing',
                    'Vendor Data & Administration',
                  ]}
                  accentColor="#950B6D"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                <span className="font-bold text-navy-midnight">How We Can Support: </span>
                We coordinate high-volume data transcription, invoice matching, and enterprise ERP maintenance
                through flexible shifts aligned with your operating schedule.
              </p>
              <div className="mt-6">
                <Button
                  to="/contact?type=project&industry=enterprise-operations"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="h-3.5 w-3.5" />}
                >
                  Discuss Your Requirements
                </Button>
              </div>
              <ExpandableDetails
                businessRequirements={enterData.businessRequirements}
                applicableSolutions={enterData.applicableSolutions}
                collaborationOpportunities={enterData.collaborationOpportunities}
                panelId="enterprise-operations-details"
                accentColor="#950B6D"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cross-industry-title"
        className="overflow-hidden bg-navy-midnight text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <ScrollReveal direction="up" className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-coral-orange">
              Cross-Sector Collaboration
            </p>
            <h2
              id="cross-industry-title"
              className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              One Connection. Multiple Business Needs.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Whether your requirements involve technology, healthcare, financial operations, or business support,
              let's explore a suitable approach.
            </p>
          </ScrollReveal>

          <div className="relative mt-12 sm:mt-16">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-4 top-8 w-px bg-gradient-to-b from-coral-orange via-coral-bright to-coral-purple lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-5 lg:h-px lg:w-auto lg:bg-gradient-to-r"
            />
            <ol className="relative grid gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-8">
              {[
                { number: '01', label: 'Technology', color: '#F98F33' },
                { number: '02', label: 'Healthcare', color: '#F05E47' },
                { number: '03', label: 'Financial Services', color: '#D21D61' },
                { number: '04', label: 'Enterprise Operations', color: '#950B6D' },
              ].map((industry, index) => (
                <ScrollReveal
                  key={industry.number}
                  as="li"
                  direction="up"
                  delay={index * 80}
                  className="grid grid-cols-[2.5rem_1fr] items-center gap-4 lg:flex lg:flex-col lg:items-center lg:gap-4 lg:text-center"
                >
                  <span
                    className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border bg-navy-midnight font-mono text-[10px] font-bold"
                    style={{ borderColor: `${industry.color}80`, color: industry.color }}
                  >
                    {industry.number}
                  </span>
                  <span className="font-heading text-base font-bold text-white sm:text-lg">{industry.label}</span>
                </ScrollReveal>
              ))}
            </ol>
          </div>

          <div className="mt-10 sm:mt-12">
            <Button to="/contact?type=project" variant="primary" size="lg">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
