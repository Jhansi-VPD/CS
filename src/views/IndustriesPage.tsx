'use client';

import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { industriesData } from '../data/industriesData';
import { Code, HeartPulse, Landmark, Building2, Check, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Target Industries | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  const industryIcons = {
    'it-software': Code,
    'healthcare-operations': HeartPulse,
    'banking-financial-services': Landmark,
    'enterprise-operations': Building2
  };

  const industryImages: Record<string, { src: string; alt: string; badge: string }> = {
    'it-software': {
      src: '/images/industry-it-software.jpg',
      alt: 'Enterprise IT Architecture and Software Development Pods',
      badge: 'Software & Cloud Engineering'
    },
    'healthcare-operations': {
      src: '/images/industry-healthcare.jpg',
      alt: 'Healthcare Operations, Clinical Billing and Medical Data Workflows',
      badge: 'Clinical Billing & RCM'
    },
    'banking-financial-services': {
      src: '/images/industry-bfsi.jpg',
      alt: 'Banking, Financial Services KYC and Mortgage Review Operations',
      badge: 'KYC & Mortgage Verification'
    },
    'enterprise-operations': {
      src: '/images/industry-enterprise-ops.jpg',
      alt: 'High-Volume Enterprise Back-Office Operations and Facilities',
      badge: 'Back-Office Scalability'
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Target Industries' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Sector Expertise
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Industries & Target Sectors
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Aligning cross-border technology capabilities and specialized operational pods with the distinct regulatory, technical, and volume demands of four core enterprise sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 gap-12">
            {industriesData.map((ind, idx) => {
              const Icon = industryIcons[ind.id as keyof typeof industryIcons] || Code;
              const imgData = industryImages[ind.id] || {
                src: '/images/industry-it-software.jpg',
                alt: ind.title,
                badge: 'Enterprise Sector'
              };

              return (
                <ScrollReveal key={ind.id} direction="up" delay={idx * 100}>
                  <div
                    id={ind.id}
                    className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-card-soft hover-lift space-y-6"
                  >
                    {/* Photo Header Banner for each Industry */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[21/9] sm:aspect-[24/8] group">
                      <img
                        src={imgData.src}
                        alt={imgData.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/85 via-navy-midnight/30 to-transparent" />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-navy-midnight border border-white/60">
                          {imgData.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3.5 left-4 right-4 text-white flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold drop-shadow-sm">
                          {ind.title}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-coral-orange hidden sm:inline-block">
                          Sector 0{idx + 1}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-bright flex items-center justify-center font-bold shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-coral-bright font-mono">
                            Sector 0{idx + 1}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                            {ind.title}
                          </h2>
                        </div>
                      </div>
                      <Button
                        to={`/contact?type=project&industry=${ind.id}`}
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Discuss {ind.title.split('&')[0]} Needs
                      </Button>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                      {ind.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {ind.overview}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                      {/* Business Requirements */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                        <h3 className="text-xs font-bold text-navy-midnight uppercase tracking-wider mb-2.5">
                          Typical Requirements:
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {ind.businessRequirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-coral-bright shrink-0 mt-0.5" />
                              <span className="leading-snug">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applicable Solutions */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                        <h3 className="text-xs font-bold text-navy-midnight uppercase tracking-wider mb-2.5">
                          Applicable Solutions:
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {ind.applicableSolutions.map((sol, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-coral-rose shrink-0 mt-1.5" />
                              <span className="leading-snug">{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Collaboration Models */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                        <h3 className="text-xs font-bold text-navy-midnight uppercase tracking-wider mb-2.5">
                          Collaboration Models:
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {ind.collaborationOpportunities.map((collab, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{collab}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA Banner */}
          <ScrollReveal direction="scale">
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-midnight text-white text-center space-y-4 shadow-xl">
              <h3 className="text-2xl font-heading font-extrabold text-white">
                Do Your Industry Requirements Span Multiple Disciplines?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                We structure custom cross-border pods that combine software engineering with specialized back-office support under unified project governance.
              </p>
              <div className="pt-2">
                <Button to="/contact?type=project" variant="primary" size="md">
                  Initiate Cross-Disciplinary Scoping
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
