'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { itServices, nonItServices, partnershipServices } from '../data/servicesData';
import { Code, FileSpreadsheet, Handshake, ArrowRight, CheckCircle2, ChevronRight, Layers, Briefcase } from 'lucide-react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { TechCarousel } from '../components/common/TechCarousel';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'it' | 'non-it' | 'partnership'>('all');

  useEffect(() => {
    document.title = 'Solutions & Capabilities | Coral Swift';
    window.scrollTo(0, 0);

    if (window.location.hash === '#partnership-services') {
      setActiveTab('partnership');
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Solutions Portfolio' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Core Capabilities
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Enterprise Solutions & Capabilities
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Bridging international enterprise requirements with qualified delivery organizations across IT engineering, operational workflows, and delivery partnership governance.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              { id: 'all', label: 'All Solutions' },
              { id: 'it', label: 'IT Solutions', count: 6 },
              { id: 'non-it', label: 'Non-IT & Operations', count: 6 },
              { id: 'partnership', label: 'Partnership Services', count: 4 }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-navy-midnight text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    activeTab === tab.id ? 'bg-coral-bright text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* CATEGORY 1: IT Solutions */}
          {(activeTab === 'all' || activeTab === 'it') && (
            <ScrollReveal direction="up" className="space-y-8">
              <div id="it-solutions" className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 text-coral-bright font-bold text-xs uppercase tracking-wider mb-1">
                      <Code className="w-4 h-4" />
                      <span>Technology Domain</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                      IT Solutions & Engineering
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                      Custom software engineering, ERP deployments, web portals, cloud management, and automated QA.
                    </p>
                  </div>
                  <Button to="/services/it-solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Dedicated IT Page
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itServices.map((service) => (
                    <Card key={service.id} variant="white" className="p-6 flex flex-col justify-between hover-lift">
                      <div className="space-y-3.5">
                        <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center font-bold">
                          <Code className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-navy-midnight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-bold text-navy-midnight uppercase tracking-wider block mb-1.5">
                            Typical Scopes:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-500">
                            {service.useCases.slice(0, 2).map((uc, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright shrink-0 mt-1.5" />
                                <span className="leading-snug">{uc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <Link
                          href={`/services/it-solutions#${service.id}`}
                          className="text-xs font-bold text-coral-bright hover:text-coral-rose inline-flex tap-link items-center gap-1 group"
                        >
                          <span>View Technical Scope</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Interactive Technology Stack Carousel Showcase */}
          <ScrollReveal direction="up" delay={100}>
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
              <TechCarousel />
            </div>
          </ScrollReveal>

          {/* CATEGORY 2: Non-IT / Business Operations */}
          {(activeTab === 'all' || activeTab === 'non-it') && (
            <ScrollReveal direction="up" className="space-y-8">
              <div id="non-it-solutions" className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 text-coral-magenta font-bold text-xs uppercase tracking-wider mb-1">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Operational Domain</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                      Non-IT & Business Process Operations
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                      Medical coding, revenue cycle billing, banking KYC, mortgage documentation, and high-volume back office.
                    </p>
                  </div>
                  <Button to="/services/non-it-solutions" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Dedicated Non-IT Page
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nonItServices.map((service) => (
                    <Card key={service.id} variant="white" className="p-6 flex flex-col justify-between hover-lift">
                      <div className="space-y-3.5">
                        <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-magenta flex items-center justify-center font-bold">
                          <FileSpreadsheet className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-navy-midnight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-bold text-navy-midnight uppercase tracking-wider block mb-1.5">
                            Operational Focus:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-500">
                            {service.useCases.slice(0, 2).map((uc, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-coral-magenta shrink-0 mt-1.5" />
                                <span className="leading-snug">{uc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <Link
                          href={`/services/non-it-solutions#${service.id}`}
                          className="text-xs font-bold text-coral-magenta hover:text-coral-purple inline-flex tap-link items-center gap-1 group"
                        >
                          <span>View Operations Scope</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* CATEGORY 3: Partnership Services */}
          {(activeTab === 'all' || activeTab === 'partnership') && (
            <ScrollReveal direction="up" className="space-y-8">
              <div id="partnership-services" className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 text-coral-purple font-bold text-xs uppercase tracking-wider mb-1">
                      <Handshake className="w-4 h-4" />
                      <span>Governance & Alignment</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                      Partnership & Governance Services
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                      Vendor discovery, capability verification, staffing coordination, and SLA governance.
                    </p>
                  </div>
                  <Button to="/partnerships" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Partnership Ecosystem
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {partnershipServices.map((service) => (
                    <Card key={service.id} variant="white" className="p-6 space-y-4 hover-lift">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-purple flex items-center justify-center font-bold shrink-0">
                          <Handshake className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-navy-midnight">
                            {service.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5 text-slate-600">
                        <span className="font-semibold text-navy-midnight block">Core Governance Deliverables:</span>
                        <ul className="space-y-1">
                          {service.capabilities.slice(0, 3).map((cap, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-[11px] text-slate-400 italic">
                        * {service.disclaimer}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Related Frameworks & Opportunities Callout */}
          <ScrollReveal direction="scale">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-base font-heading font-bold text-navy-midnight">
                  Looking for Representative Scopes or Engagement Timelines?
                </h3>
                <p className="text-xs text-slate-500 max-w-xl">
                  Explore illustrative project categories across ERP, healthcare and banking, or review the 6-stage international delivery lifecycle.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Button to="/project-opportunities" variant="outline" size="sm" icon={<Briefcase className="w-3.5 h-3.5" />}>
                  Sample Scopes
                </Button>
                <Button to="/how-it-works" variant="secondary" size="sm" icon={<Layers className="w-3.5 h-3.5" />}>
                  Delivery Lifecycle
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Embedded Project Enquiry Form Section */}
          <ScrollReveal direction="up" delay={150}>
            <div className="pt-8 border-t border-slate-200">
              <div className="max-w-3xl mx-auto">
                <ProjectEnquiryForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
