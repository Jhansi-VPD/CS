import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { itServices } from '../data/servicesData';
import { Code, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ITSolutionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'IT Solutions & Engineering | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/services' },
              { label: 'IT Solutions' }
            ]}
          />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Technology & Engineering
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Enterprise IT Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Connecting international businesses requiring disciplined software engineering, ERP implementation, cloud management, and automated QA with qualified Indian delivery centers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Editorial Visual Feature */}
          <ScrollReveal direction="up">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card-soft">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral-bright bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200/60">
                  <Code className="w-3.5 h-3.5" />
                  <span>Governed Agile Pods</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                  Engineered for Enterprise Scalability & Code Quality
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We connect international product and enterprise teams with vetted Indian software engineering centers. Every engagement operates under transparent code repositories, bi-weekly sprint demos, automated QA pipelines, and strict intellectual property protection.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['ERP Architecture', 'Microservices', 'Cloud Migration', 'Automated QA', 'CI/CD Pipelines'].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy-midnight">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white group aspect-[16/10]">
                  <img
                    src="/images/solutions-it-engineering.jpg"
                    alt="Modern Software Engineering and Development Pods"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-semibold flex items-center justify-between">
                    <span>Verified Engineering Centers</span>
                    <span className="text-coral-orange font-mono">100% IP Transferred</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Service Breakdown */}
          <div className="space-y-10">
            {itServices.map((service, idx) => (
              <ScrollReveal key={service.id} direction="up" delay={idx * 80}>
                <div
                  id={service.id}
                  className="scroll-mt-24 p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-card-soft hover-lift space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-bright flex items-center justify-center font-bold shrink-0">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-coral-bright">
                          Capability 0{idx + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
                      Governed Agile Delivery
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Typical Use Cases */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <h3 className="text-xs font-bold text-navy-midnight uppercase tracking-wider mb-2.5">
                        Common Business Requirements:
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.useCases.map((uc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-coral-bright shrink-0 mt-0.5" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Capabilities */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <h3 className="text-xs font-bold text-navy-midnight uppercase tracking-wider mb-2.5">
                        Delivery Capabilities:
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Engagement & Scoping Info */}
                  <div className="p-4 rounded-xl bg-coral-50/30 border border-coral-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                    <div>
                      <span className="font-bold text-navy-midnight block">Engagement Approach:</span>
                      <span className="text-slate-600">{service.engagementApproach}</span>
                    </div>
                    <a
                      href="#enquiry-form"
                      className="inline-flex items-center gap-1 font-bold text-coral-bright hover:underline whitespace-nowrap"
                    >
                      <span>Request Scoping for this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="text-[11px] text-slate-400 italic">
                    * {service.disclaimer}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form Anchor */}
          <ScrollReveal direction="up" delay={200}>
            <div id="enquiry-form" className="pt-12 border-t border-slate-200 max-w-3xl mx-auto">
              <ProjectEnquiryForm initialCategory="IT Solutions" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
