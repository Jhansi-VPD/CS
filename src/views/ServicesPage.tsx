'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { itServices, nonItServices, partnershipServices } from '../data/servicesData';
import { ArrowRight, Briefcase, ChevronRight, Layers } from 'lucide-react';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { CapabilityStrip } from '../components/common/CapabilityStrip';
import { ScrollReveal } from '../components/common/ScrollReveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  accentText: string;
  accentBar: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  label,
  accentText,
  accentBar,
  title,
  description,
  cta
}) => (
  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 lg:pb-14 border-b border-slate-200">
    <div className="max-w-xl">
      <div className="flex items-center gap-3">
        <span className={`font-mono text-xs font-bold ${accentText}`}>{index}</span>
        <span className={`h-px w-10 ${accentBar}`} aria-hidden="true" />
        <span className={`text-xs font-bold uppercase tracking-[0.18em] ${accentText}`}>{label}</span>
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-midnight tracking-tight mt-4">
        {title}
      </h2>
    </div>
    <div className="max-w-md">
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      {cta && (
        <Button
          to={cta.href}
          variant="outline"
          size="md"
          className="mt-4"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          {cta.label}
        </Button>
      )}
    </div>
  </div>
);

const heroShortcuts = [
  { href: '#it-solutions', label: 'IT Solutions', count: '06' },
  { href: '#non-it-solutions', label: 'Non-IT Operations', count: '06' },
  { href: '#partnership-services', label: 'Delivery Partnerships', count: '04' }
];

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Solutions & Capabilities | Coral Swift';
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* ===== HERO — midnight navy ===== */}
      <section className="relative overflow-hidden bg-navy-midnight">
        <div aria-hidden="true" className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-coral-magenta/20 blur-3xl" />
        <div aria-hidden="true" className="absolute top-48 -left-32 h-80 w-80 rounded-full bg-coral-orange/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-12 sm:pb-16 lg:pb-20">
          <Breadcrumbs dark items={[{ label: 'Solutions Portfolio' }]} />

          <div className="mt-2 sm:mt-3 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 animate-fadeIn">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-coral-orange">
                Solutions Portfolio
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08] mt-3">
                Capabilities That Move<br className="hidden sm:block" /> Business Forward.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-5 max-w-xl">
                Technology, business operations and delivery partnerships — aligned to real business needs.
              </p>

              <p className="mt-8 mb-3 text-xs font-bold uppercase tracking-wide text-slate-300">Jump to a section</p>
              <nav aria-label="Section shortcuts" className="flex flex-wrap gap-3">
                {heroShortcuts.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-orange"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-coral-orange">{item.count}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-coral-orange" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="scale" delay={120}>
                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                  {/* Soft Brand Radial Underglow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-coral-orange/20 via-coral-rose/10 to-coral-purple/20 blur-xl"
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-navy-surface shadow-2xl group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-midnight">
                      <Image
                        src="/images/hero-enterprise-collab.jpg"
                        alt="Enterprise engineering and operations teams collaborating on project solutions"
                        fill
                        priority
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/85 via-navy-midnight/25 to-transparent" />

                      {/* Glassmorphic Capability Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-navy-midnight/90 p-3.5 backdrop-blur-md border border-white/15 text-white">
                        <div>
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral-orange block">
                            Integrated Delivery
                          </span>
                          <p className="font-heading text-xs sm:text-sm font-bold text-white">
                            Technology · Operations · Partnerships
                          </p>
                        </div>
                        <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-coral-bright shrink-0">
                          <Layers className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 01 — IT SOLUTIONS ===== */}
      <section id="it-solutions" className="scroll-mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up">
            <SectionHeading
              index="01"
              label="IT Solutions"
              accentText="text-coral-orange"
              accentBar="bg-coral-orange"
              title="Technology Built Around Business Needs."
              description="From enterprise systems to custom applications, we support technology that helps businesses operate and grow."
              cta={{ href: '/services/it-solutions', label: 'Explore IT Services' }}
            />
          </ScrollReveal>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <ScrollReveal direction="up" className="lg:col-span-6">
              <figure className="relative">
                <div aria-hidden="true" className="absolute -left-3 -bottom-3 h-full w-full rounded-2xl border border-coral-orange/30 sm:-left-4 sm:-bottom-4" />
                <img
                  src="/images/solutions-it-engineering.jpg"
                  alt="Engineering workspace with enterprise code on screen"
                  className="relative w-full aspect-[3/2] object-cover rounded-2xl shadow-card-soft"
                  loading="lazy"
                />
                <figcaption className="absolute left-4 bottom-4 rounded-xl bg-navy-midnight/85 backdrop-blur-sm px-4 py-2.5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-orange">Engineering</p>
                  <p className="text-xs text-white font-medium mt-0.5">Enterprise platforms to custom builds</p>
                </figcaption>
              </figure>
            </ScrollReveal>

            <div className="lg:col-span-6">
              <ul className="divide-y divide-slate-200 border-y border-slate-200">
                {itServices.map((service, i) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/it-solutions#${service.id}`}
                      className="group flex items-start gap-4 sm:gap-5 px-3 sm:px-4 -mx-3 sm:-mx-4 py-4 sm:py-5 rounded-xl transition-colors hover:bg-slate-50"
                    >
                      <span className="font-mono text-xs font-bold text-coral-orange/80 pt-1 w-6 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 min-w-0 block">
                        <span className="block text-sm sm:text-base font-bold text-navy-midnight group-hover:text-coral-bright transition-colors">
                          {service.title}
                        </span>
                        <span className="block text-xs text-slate-600 leading-relaxed mt-1">
                          {service.shortDescription}
                        </span>
                      </span>
                      <ChevronRight className="w-4 h-4 mt-1 shrink-0 text-slate-300 transition-all duration-200 group-hover:text-coral-bright group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Capability strip ===== */}
      <CapabilityStrip />

      {/* ===== 02 — NON-IT & BUSINESS OPERATIONS ===== */}
      <section id="non-it-solutions" className="scroll-mt-24 bg-coral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up">
            <SectionHeading
              index="02"
              label="Non-IT & Business Operations"
              accentText="text-coral-magenta"
              accentBar="bg-coral-magenta"
              title="Reliable Support for Essential Operations."
              description="Structured operational support across healthcare, financial processes and business administration."
              cta={{ href: '/services/non-it-solutions', label: 'Explore Non-IT Services' }}
            />
          </ScrollReveal>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-x-5">
                {[0, 1].map((col) => (
                  <div key={col} className={`space-y-4 ${col === 1 ? 'sm:pt-10' : ''}`}>
                    {nonItServices.map((service, i) =>
                      i % 2 === col ? (
                        <ScrollReveal key={service.id} direction="up" delay={col * 80}>
                          <Link
                            href={`/services/non-it-solutions#${service.id}`}
                            className="group block bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 transition-all duration-200 hover:border-coral-magenta/40 hover:shadow-card-soft"
                          >
                            <span className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-coral-magenta">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="h-px flex-1 bg-slate-100" aria-hidden="true" />
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 transition-all duration-200 group-hover:text-coral-magenta group-hover:translate-x-0.5" />
                            </span>
                            <span className="block text-sm font-bold text-navy-midnight mt-2.5 group-hover:text-coral-magenta transition-colors">
                              {service.title}
                            </span>
                            <span className="block text-xs text-slate-600 leading-relaxed mt-1">
                              {service.shortDescription}
                            </span>
                          </Link>
                        </ScrollReveal>
                      ) : null
                    )}
                  </div>
                ))}
              </div>
            </div>

            <ScrollReveal direction="up" delay={120} className="lg:col-span-5 lg:self-stretch">
              <figure className="relative h-80 sm:h-96 lg:h-full">
                <div aria-hidden="true" className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border border-coral-magenta/25 sm:-right-4 sm:-bottom-4" />
                <img
                  src="/images/solutions-non-it-operations.jpg"
                  alt="Operations specialists reviewing documents and workflows"
                  className="relative h-full w-full object-cover rounded-2xl shadow-card-soft"
                  loading="lazy"
                />
                <figcaption className="absolute left-4 top-4 rounded-xl bg-white/90 backdrop-blur-sm px-4 py-2.5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-magenta">Operations</p>
                  <p className="text-xs text-navy-midnight font-medium mt-0.5">Process-led, checklist-driven teams</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 03 — DELIVERY PARTNERSHIPS ===== */}
      <section id="partnership-services" className="scroll-mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up">
            <SectionHeading
              index="03"
              label="Delivery Partnerships"
              accentText="text-coral-purple"
              accentBar="bg-coral-purple"
              title="The Right Capabilities. The Right Opportunities."
              description="We help identify suitable delivery organizations and align capabilities with project requirements."
              cta={{ href: '/partnerships', label: 'Explore Partnerships' }}
            />
          </ScrollReveal>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <ScrollReveal direction="up" className="lg:col-span-6">
              <figure className="relative">
                <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-coral-purple/25 sm:-right-4 sm:-top-4" />
                <img
                  src="/images/partnerships-handshake.jpg"
                  alt="Delivery partners collaborating in a review meeting"
                  className="relative w-full aspect-[16/10] object-cover rounded-2xl shadow-card-soft"
                  loading="lazy"
                />
                <figcaption className="absolute left-4 bottom-4 rounded-xl bg-navy-midnight/85 backdrop-blur-sm px-4 py-2.5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-orange">Partnerships</p>
                  <p className="text-xs text-white font-medium mt-0.5">Discovery, alignment and coordinated delivery</p>
                </figcaption>
              </figure>
            </ScrollReveal>

            <div className="lg:col-span-6">
              <div className="relative">
                <div aria-hidden="true" className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-coral-purple/40 via-coral-magenta/30 to-coral-orange/20" />
                <ul className="space-y-7">
                  {partnershipServices.map((service, i) => (
                    <li key={service.id} className="relative pl-9">
                      <span aria-hidden="true" className="absolute left-0 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-coral-purple bg-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-coral-magenta" />
                      </span>
                      <p className="font-mono text-xs font-bold text-coral-purple">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="text-sm sm:text-base font-bold text-navy-midnight mt-0.5">{service.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1 max-w-md">{service.shortDescription}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pl-9">
                <Button
                  to="/partnerships"
                  variant="primary"
                  size="md"
                  className="group"
                  icon={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                >
                  Explore Delivery Partnerships
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related resources ===== */}
      <section className="bg-slate-50/80 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h3 className="text-sm sm:text-base font-heading font-bold text-navy-midnight">
              Want Examples of Project Categories?
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Browse illustrative project categories, or see our six-stage delivery process.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button to="/project-opportunities" variant="outline" size="sm" icon={<Briefcase className="w-3.5 h-3.5" />}>
              Project Categories
            </Button>
            <Button to="/how-it-works" variant="outline" size="sm" icon={<Layers className="w-3.5 h-3.5" />}>
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY — midnight navy ===== */}
      <section className="relative overflow-hidden bg-navy-midnight">
        <div aria-hidden="true" className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-coral-purple/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-16 -right-24 h-72 w-72 rounded-full bg-coral-bright/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-coral-orange">
                Project Enquiry
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
                Have a Project in Mind?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                Tell us what you need. Let&apos;s explore the right approach.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
              <ProjectEnquiryForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
