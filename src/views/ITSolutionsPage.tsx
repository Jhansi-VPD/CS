'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { itServices } from '../data/servicesData';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

interface ServiceMeta {
  eyebrow: string;
  lead: string;
  formService: string;
  image: string;
  imageAlt: string;
  bg: string;
  chip: string;
  dot: string;
  visualSpan: string;
  textSpan: string;
  visualFirst: boolean;
}

const serviceMeta: Record<string, ServiceMeta> = {
  'erp-implementation': {
    eyebrow: 'Enterprise Systems',
    lead: 'Connect essential business processes through integrated enterprise systems.',
    formService: 'Enterprise Resource Planning (ERP)',
    image: '/images/solutions-it-erp.jpg',
    imageAlt: 'Illustration of an integrated ERP dashboard connected to HR, finance and operations modules',
    bg: 'bg-white',
    chip: 'border-coral-orange/40 bg-coral-orange/10 text-coral-orange',
    dot: 'bg-coral-orange',
    visualSpan: 'lg:col-span-7',
    textSpan: 'lg:col-span-5',
    visualFirst: true
  },
  'web-applications-portals': {
    eyebrow: 'Digital Platforms',
    lead: 'Build responsive digital platforms that make business interactions easier.',
    formService: 'Web Applications & Business Portals',
    image: '/images/solutions-it-web-portals.jpg',
    imageAlt: 'Illustration of web application and mobile portal interfaces connected through APIs',
    bg: 'bg-coral-warm',
    chip: 'border-coral-bright/40 bg-coral-bright/10 text-coral-bright',
    dot: 'bg-coral-bright',
    visualSpan: 'lg:col-span-6',
    textSpan: 'lg:col-span-6',
    visualFirst: false
  },
  'custom-software-development': {
    eyebrow: 'Bespoke Engineering',
    lead: 'Create software designed around your business requirements.',
    formService: 'Custom Software Development',
    image: '/images/solutions-it-custom-software.jpg',
    imageAlt: 'Illustration of a code editor beside a software architecture diagram with services and a database',
    bg: 'bg-white',
    chip: 'border-coral-rose/40 bg-coral-rose/10 text-coral-rose',
    dot: 'bg-coral-rose',
    visualSpan: 'lg:col-span-6',
    textSpan: 'lg:col-span-6',
    visualFirst: true
  },
  'cloud-infrastructure-support': {
    eyebrow: 'Cloud & Infrastructure',
    lead: 'Build and maintain reliable infrastructure for modern applications.',
    formService: 'Cloud & Infrastructure Support',
    image: '/images/solutions-it-cloud.jpg',
    imageAlt: 'Illustration of cloud infrastructure with servers, containers and a deployment pipeline',
    bg: 'bg-[#F5F6FA]',
    chip: 'border-coral-magenta/40 bg-coral-magenta/10 text-coral-magenta',
    dot: 'bg-coral-magenta',
    visualSpan: 'lg:col-span-7',
    textSpan: 'lg:col-span-5',
    visualFirst: false
  },
  'application-testing-maintenance': {
    eyebrow: 'Quality Engineering',
    lead: 'Improve application quality, performance, and reliability.',
    formService: 'Application Testing & Maintenance',
    image: '/images/solutions-it-testing.jpg',
    imageAlt: 'Illustration of automated quality testing with regression gauges and defect tracking',
    bg: 'bg-white',
    chip: 'border-coral-purple/40 bg-coral-purple/10 text-coral-purple',
    dot: 'bg-coral-purple',
    visualSpan: 'lg:col-span-5',
    textSpan: 'lg:col-span-7',
    visualFirst: true
  },
  'digital-transformation': {
    eyebrow: 'Modernization',
    lead: 'Improve business processes through practical digital solutions.',
    formService: 'Digital Transformation',
    image: '/images/solutions-it-transformation.jpg',
    imageAlt: 'Illustration of manual paper processes transforming into a digital dashboard',
    bg: 'bg-coral-warm',
    chip: 'border-coral-bright/40 bg-coral-bright/10 text-coral-bright',
    dot: 'bg-coral-bright',
    visualSpan: 'lg:col-span-6',
    textSpan: 'lg:col-span-6',
    visualFirst: false
  }
};

const techGroups = [
  { label: 'Enterprise Systems', stack: 'SAP S/4HANA · Oracle Cloud ERP · Dynamics 365', dot: 'bg-coral-orange' },
  { label: 'Development', stack: 'React & Next.js · TypeScript · Node.js & Python', dot: 'bg-coral-bright' },
  { label: 'Cloud & Infrastructure', stack: 'AWS · Azure · GCP · Docker · Kubernetes · Terraform', dot: 'bg-coral-rose' },
  { label: 'Quality Engineering', stack: 'Playwright · Selenium · Cypress · API Validation', dot: 'bg-coral-magenta' }
];

const deliveryPrinciples = [
  { title: 'Dedicated Delivery Teams', detail: 'Matched engineering teams aligned to your project scope and milestones.' },
  { title: 'Clear Code Ownership', detail: 'Work runs in shared repositories with ownership terms agreed up front.' },
  { title: 'Regular Progress Reviews', detail: 'Scheduled demos and milestone reviews keep delivery visible.' },
  { title: 'Quality-Focused Development', detail: 'Automated testing and structured checks across every release.' }
];

/* ---------------- Page ---------------- */

export const ITSolutionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'IT Solutions | Coral Swift';
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-coral-warm via-white to-white border-b border-slate-200/80">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-coral-100/60 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-20">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/services' },
              { label: 'IT Solutions' }
            ]}
          />

          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 animate-fadeIn">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
                IT Solutions
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold text-navy-midnight mt-4 leading-[1.08] tracking-tight">
                Technology That Works
                <br className="hidden sm:block" /> for Your Business.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mt-5 leading-relaxed max-w-xl">
                From enterprise systems to custom applications, we help businesses build, improve, and maintain technology that supports their growth.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?type=project&category=IT+Solutions"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold bg-swift-gradient text-white shadow-glow-coral hover:shadow-glow-accent hover:-translate-y-0.5 transition-all duration-200 max-sm:min-h-[44px]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold border border-slate-300 text-navy-midnight hover:text-coral-bright hover:border-coral-bright/50 hover:bg-coral-50/50 transition-all duration-200 max-sm:min-h-[44px]"
                >
                  Explore Capabilities
                </a>
              </div>
              <p className="mt-7 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-400">
                ERP — Portals — Custom Software — Cloud — Testing — Transformation
              </p>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="scale" delay={120}>
                <div className="group overflow-hidden rounded-3xl border border-navy-secondary/50 bg-navy-midnight shadow-card-soft">
                  <img
                    src="/images/solutions-it-hero-systems.jpg"
                    alt="Illustration of connected enterprise systems: ERP dashboard, cloud services, web portals and a data layer"
                    className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Quality and Scale */}
      <section id="capabilities" className="relative scroll-mt-24 bg-navy-midnight overflow-hidden">
        <div className="absolute top-0 -left-32 w-96 h-96 rounded-full bg-coral-orange/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal direction="up">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-coral-orange/50" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Delivery Approach</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                  Built for Quality and Scale.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-md">
                  Our approach combines capable engineering teams, clear project ownership, regular reviews, and structured delivery.
                </p>
                <div className="mt-8 relative group max-w-md">
                  <div className="absolute -left-3 -bottom-3 w-full h-full rounded-2xl border border-coral-orange/30" aria-hidden="true" />
                  <img
                    src="/images/solutions-it-engineering.jpg"
                    alt="Software engineering team collaborating on an enterprise build"
                    loading="lazy"
                    className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-card-soft transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-navy-midnight/90 border border-white/10 px-3 py-2 backdrop-blur-sm">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-coral-orange">Engineering</span>
                    <span className="block text-[10px] text-slate-300 mt-0.5">Shared repositories · reviewed milestones</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                  {deliveryPrinciples.map((principle, i) => (
                    <div key={principle.title} className="bg-navy-midnight p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.04]">
                      <span className="font-mono text-xs font-bold text-coral-orange">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-base font-bold text-white mt-3">{principle.title}</h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{principle.detail}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Six IT service sections */}
      {itServices.map((service, idx) => {
        const meta = serviceMeta[service.id];
        const items = [...service.useCases, ...service.capabilities];
        return (
          <section key={service.id} id={service.id} className={`scroll-mt-24 ${meta.bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className={`order-2 ${meta.visualSpan} ${meta.visualFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ScrollReveal direction="up" delay={meta.visualFirst ? 0 : 100}>
                    <div className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card-soft">
                      <img
                        src={meta.image}
                        alt={meta.imageAlt}
                        loading="lazy"
                        className="w-full aspect-[3/2] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </ScrollReveal>
                </div>

                <div className={`order-1 ${meta.textSpan} ${meta.visualFirst ? 'lg:order-2' : 'lg:order-1'}`}>
                  <ScrollReveal direction="up">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md border ${meta.chip}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-8 bg-slate-300" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{meta.eyebrow}</span>
                    </div>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{meta.lead}</p>

                    <ul className="mt-6 border-t border-slate-200">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 py-2.5 border-b border-slate-200/70 text-xs sm:text-sm text-slate-600">
                          <span className={`mt-[7px] h-1.5 w-1.5 rounded-full shrink-0 ${meta.dot}`} aria-hidden="true" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-[11px] font-mono text-slate-500 tracking-wide">{service.engagementApproach}</p>

                    <div className="mt-5">
                      <Link
                        href={`/contact?type=project&category=IT+Solutions&service=${encodeURIComponent(meta.formService)}`}
                        className="group/cta inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-navy-midnight text-white hover:bg-navy-secondary transition-colors duration-200 max-sm:min-h-[44px]"
                      >
                        <span>Discuss This Service</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                      </Link>
                      <p className="mt-3 text-[11px] text-slate-400 italic">* {service.disclaimer}</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Engineering technology showcase */}
      <section aria-label="Engineering stacks and standards" className="border-y border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-8 bg-coral-orange" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Engineering Stacks &amp; Standards
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {techGroups.map((group) => (
              <div key={group.label} className="flex items-start gap-3">
                <span className={`mt-1 h-2 w-2 rounded-full shrink-0 ${group.dot}`} aria-hidden="true" />
                <div>
                  <span className="block text-xs font-bold text-navy-midnight">{group.label}</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5 leading-relaxed">{group.stack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project enquiry & consultation CTA */}
      <section className="relative bg-navy-midnight text-white overflow-hidden py-16 sm:py-24 border-t border-navy-secondary">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-coral/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-coral-magenta/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-orange bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Project Consultation &amp; Scoping</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-6 tracking-tight leading-tight">
              Ready to Scope or Modernize Your <br className="hidden sm:block" />
              <span className="swift-gradient-text">Technology Solutions?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
              Connect directly with our engineering and architecture team to discuss requirements, feasibility, and structured delivery milestones.
            </p>

            {/* Action buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?type=project&category=IT+Solutions"
                className="inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm sm:text-base font-bold bg-swift-gradient text-white shadow-glow-coral hover:shadow-glow-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Go to Project Enquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?modal=meeting"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-coral-orange" />
                <span>Schedule Introductory Call</span>
              </Link>
            </div>

            {/* 3 Trust / Governance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 text-left">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-coral-bright shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">NDA &amp; Confidentiality Assured</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Every technical discussion is protected under mutual non-disclosure.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Clear Scope &amp; Milestones</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Structured deliverables, transparent timelines, and sprint milestones.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-coral-orange shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Rapid Scoping Turnaround</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Initial architecture and feasibility response within 1–2 business days.</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
