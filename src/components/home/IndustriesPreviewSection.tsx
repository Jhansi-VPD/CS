'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Code2, HeartPulse, Landmark } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  badge: string;
  highlights: string[];
}

const industries: IndustrySector[] = [
  {
    id: 'it-software',
    name: 'Technology & Enterprise Software',
    tagline: 'ERP, Web & Custom Software Delivery',
    description: 'Enterprise ERP implementations, multi-tenant web portals, bespoke application development and comprehensive quality engineering.',
    image: '/images/industry-it-software.jpg',
    icon: Code2,
    badge: 'Technology',
    highlights: ['ERP & CRM Systems', 'Custom Cloud Applications', 'Full-Cycle QA & Testing'],
  },
  {
    id: 'healthcare-operations',
    name: 'Healthcare & Life Sciences',
    tagline: 'Coding & Billing Support',
    description: 'Medical coding, revenue cycle billing, patient record verification and healthcare administrative workflows.',
    image: '/images/industry-healthcare.jpg',
    icon: HeartPulse,
    badge: 'Healthcare',
    highlights: ['Medical Coding & Billing', 'RCM Documentation', 'EHR Data Management'],
  },
  {
    id: 'banking-financial-services',
    name: 'Banking & Financial Services',
    tagline: 'KYC & Mortgage Processing',
    description: 'KYC document verification, mortgage processing and mutual-fund back-office operations.',
    image: '/images/industry-bfsi.jpg',
    icon: Landmark,
    badge: 'BFSI',
    highlights: ['KYC Document Review', 'Loan & Mortgage Files', 'Financial Reconciliation'],
  },
  {
    id: 'enterprise-operations',
    name: 'Enterprise Operations & BPO',
    tagline: 'Data & Back-Office Support',
    description: 'Transaction processing, document digitization, indexing and quality assurance workflows.',
    image: '/images/industry-enterprise-ops.jpg',
    icon: Building2,
    badge: 'Operations',
    highlights: ['Document Digitization', 'Workflow Indexing', 'Continuous QA Governance'],
  },
];

export const IndustriesPreviewSection: React.FC = () => {
  return (
    <section className="overflow-hidden border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-12 sm:px-6 sm:py-16 md:flex-row md:items-end md:justify-between lg:px-8">
        <ScrollReveal direction="up" className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-[0.22em] text-coral-bright">
            <span className="h-2 w-2 rounded-full bg-coral-bright" />
            <span>Target Industries</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-4xl lg:text-5xl">
            Four Industries We{' '}
            <span className="bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#E73B50] bg-clip-text text-transparent">
              Focus On.
            </span>
          </h2>
          <p className="pt-1 text-base leading-relaxed text-slate-600 sm:text-lg">
            Project work spans IT and business operations across these core sectors.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} className="shrink-0">
          <Link
            href="/industries"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-navy-midnight/25 bg-white px-6 text-sm font-semibold text-navy-midnight transition-all hover:border-navy-midnight hover:bg-navy-midnight hover:text-white"
          >
            <span>View All Industries</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {industries.map((industry, index) => {
          const Icon = industry.icon;

          return (
            <ScrollReveal key={industry.id} direction="up" delay={index * 70}>
              <Link
                href={`/industries#${industry.id}`}
                className="group relative isolate flex h-[410px] overflow-hidden sm:h-[460px] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-midnight/85 via-navy-midnight/15 to-navy-midnight/5 transition-colors duration-500 group-hover:from-navy-midnight/95 group-hover:via-navy-midnight/45"
                />

                <div className="relative z-10 flex w-full flex-col justify-between p-5 text-white sm:p-6 xl:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/30 bg-navy-midnight/25 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {industry.badge}
                    </span>
                    <Icon className="h-5 w-5 shrink-0 text-coral-orange drop-shadow" aria-hidden="true" />
                  </div>

                  <div>
                    <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-coral-orange sm:text-xs">
                        {industry.tagline}
                      </p>
                      <h3 className="max-w-[18rem] font-heading text-xl font-extrabold leading-snug text-white sm:text-2xl">
                        {industry.name}
                      </h3>
                    </div>

                    <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-64 group-hover:opacity-100 group-focus-visible:max-h-64 group-focus-visible:opacity-100 [@media(hover:none)]:max-h-64 [@media(hover:none)]:opacity-100">
                      <p className="max-w-md text-sm leading-relaxed text-white/90">
                        {industry.description}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {industry.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-xs font-medium text-white/90">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-coral-orange" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral-orange">
                        Explore industry
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesPreviewSection;
