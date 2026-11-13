'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { Button } from '../common/Button';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-y border-slate-200/80 py-16 sm:py-20 lg:py-24">
      {/* Background Architectural Accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-96 h-96 bg-coral-orange/05 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-coral-rose/05 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-[0.22em] text-coral-bright">
              <span className="w-2 h-2 rounded-full bg-coral-bright" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-midnight tracking-tight leading-[1.15]">
              Capabilities for the work that{' '}
              <span className="bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#E73B50] bg-clip-text text-transparent inline-block">
                moves business forward.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
              From technology delivery to business operations and partner coordination, explore how we can support your next project.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button
              to="/services"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Solutions
            </Button>
          </ScrollReveal>
        </div>

        {/* Asymmetrical Enterprise Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-12 items-stretch">
          {/* Service 01: IT Services (Prominent Marquee Panel - 58% Width) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal direction="up" delay={80} className="h-full flex flex-col">
              <article className="group relative flex flex-col justify-between h-full min-h-[520px] lg:min-h-[580px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 bg-navy-midnight text-white">
                {/* 4K Real Photography */}
                <Image
                  src="/images/services-it-4k.jpg"
                  alt="Software engineering and enterprise application development"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Localized Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight via-navy-midnight/80 via-60% to-navy-midnight/25 group-hover:via-navy-midnight/85 transition-all duration-300" />

                {/* Top Label & Index Tag */}
                <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/25">
                    Technology
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-coral-orange tracking-tight">
                    01
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white group-hover:text-coral-orange transition-colors">
                    IT Services
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                    Build, modernize and support software that fits your business and operational needs.
                  </p>

                  {/* Compact Capability List */}
                  <div className="pt-2 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'ERP implementation and portals',
                      'Custom software development',
                      'Cloud and infrastructure support',
                      'Testing and maintenance',
                    ].map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-coral-orange shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-3">
                    <Button
                      to="/services/it-solutions"
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore IT Services
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Right Column: Stacked Services (42% Width) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            {/* Service 02: Non-IT & Business Operations */}
            <ScrollReveal direction="up" delay={140} className="flex-1">
              <article className="group relative flex flex-col justify-between h-full min-h-[260px] sm:min-h-[275px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 bg-navy-midnight text-white">
                <Image
                  src="/images/services-operations-4k.jpg"
                  alt="Business process operations and document workflow review"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight via-navy-midnight/80 to-navy-midnight/30 group-hover:via-navy-midnight/85 transition-all duration-300" />

                <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/25">
                    Operations
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-coral-bright tracking-tight">
                    02
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-coral-bright transition-colors">
                    Non-IT & Business Operations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Support dependable, detail-focused workflows across business and regulated operations.
                  </p>

                  <div className="pt-2 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {[
                      'Medical coding and billing',
                      'Banking KYC and mortgage processing',
                      'Data entry and document processing',
                      'Back-office support',
                    ].map((cap, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-medium truncate">
                        <CheckCircle2 className="w-3 h-3 text-coral-bright shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      to="/services/non-it-solutions"
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Operations
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* Service 03: Partnership Services */}
            <ScrollReveal direction="up" delay={200} className="flex-1">
              <article className="group relative flex flex-col justify-between h-full min-h-[260px] sm:min-h-[275px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-500 bg-navy-midnight text-white">
                <Image
                  src="/images/partnerships-handshake.jpg"
                  alt="Enterprise delivery partnership and international team collaboration"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight via-navy-midnight/80 to-navy-midnight/30 group-hover:via-navy-midnight/85 transition-all duration-300" />

                <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/25">
                    Collaboration
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-coral-bright tracking-tight">
                    03
                  </span>
                </div>

                <div className="relative z-10 p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-coral-bright transition-colors">
                    Partnership Services
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Connect with assessed delivery partners and coordinate engagements around a defined scope.
                  </p>

                  <div className="pt-2 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {[
                      'Vendor discovery and assessment',
                      'Staffing and project alignment',
                      'Reporting and quality assurance',
                      'Commercial engagement support',
                    ].map((cap, i) => (
                      <div key={i} className="flex items-center gap-1.5 font-medium truncate">
                        <CheckCircle2 className="w-3 h-3 text-coral-bright shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      to="/partnerships"
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Partnerships
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
