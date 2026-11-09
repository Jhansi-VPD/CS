'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
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
  cta?: { href: string; label: string; hoverClass: string };
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
        <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${accentText}`}>{label}</span>
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-midnight tracking-tight mt-4">
        {title}
      </h2>
    </div>
    <div className="max-w-md">
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      {cta && (
        <Link
          href={cta.href}
          className={`group inline-flex items-center gap-1.5 text-xs font-bold mt-4 tap-link ${cta.hoverClass}`}
        >
          <span>{cta.label}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  </div>
);

const CapabilitiesVisual: React.FC = () => (
  <svg
    viewBox="0 0 560 500"
    fill="none"
    className="w-full max-w-[440px] h-auto"
    role="img"
    aria-label="Interconnected capability domains: technology, operations and partnership"
  >
    <style>{`
      .svc-flow { stroke-dasharray: 3 7; animation: svcDash 7s linear infinite; }
      .svc-pulse { transform-box: fill-box; transform-origin: center; animation: svcPulse 2.8s ease-out infinite; }
      @keyframes svcDash { to { stroke-dashoffset: -60; } }
      @keyframes svcPulse { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(2.1); opacity: 0; } }
    `}</style>

    <circle cx="280" cy="248" r="212" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="2 6" />

    <circle cx="212" cy="172" r="112" stroke="#F98F33" strokeWidth="1.5" fill="rgba(249,143,51,0.06)" />
    <circle cx="368" cy="222" r="104" stroke="#E73B50" strokeWidth="1.5" fill="rgba(231,59,80,0.06)" />
    <circle cx="242" cy="330" r="98" stroke="#950B6D" strokeWidth="1.5" fill="rgba(149,11,109,0.06)" />

    <g className="svc-flow" stroke="#F5F6FA" strokeOpacity="0.4" strokeWidth="1.2" fill="none">
      <path d="M 280 246 C 250 205 222 130 214 66" />
      <path d="M 280 246 C 328 238 414 232 466 226" />
      <path d="M 280 246 C 268 300 248 372 243 424" />
    </g>

    <circle cx="316" cy="132" r="3.5" fill="#E73B50" opacity="0.9" />
    <circle cx="163" cy="273" r="3.5" fill="#F98F33" opacity="0.9" />
    <circle cx="340" cy="322" r="3.5" fill="#D21D61" opacity="0.9" />

    <circle cx="118" cy="118" r="2.5" fill="rgba(249,143,51,0.7)" />
    <circle cx="298" cy="86" r="2.5" fill="rgba(249,143,51,0.5)" />
    <circle cx="452" cy="286" r="2.5" fill="rgba(231,59,80,0.6)" />
    <circle cx="330" cy="412" r="2.5" fill="rgba(149,11,109,0.7)" />
    <circle cx="132" cy="372" r="2.5" fill="rgba(149,11,109,0.5)" />

    <circle cx="280" cy="246" r="10" className="svc-pulse" stroke="#F05E47" strokeWidth="1" />
    <circle cx="280" cy="246" r="12" stroke="rgba(240,94,71,0.35)" strokeWidth="1" />
    <circle cx="280" cy="246" r="5.5" fill="#F05E47" />

    <circle cx="214" cy="60" r="8" stroke="rgba(249,143,51,0.4)" strokeWidth="1" />
    <circle cx="214" cy="60" r="4" fill="#F98F33" />
    <circle cx="470" cy="226" r="8" stroke="rgba(231,59,80,0.4)" strokeWidth="1" />
    <circle cx="470" cy="226" r="4" fill="#E73B50" />
    <circle cx="243" cy="430" r="8" stroke="rgba(149,11,109,0.45)" strokeWidth="1" />
    <circle cx="243" cy="430" r="4" fill="#950B6D" />

    <text x="214" y="38" textAnchor="middle" fill="#B7BEE0" fontSize="10" fontWeight="700" letterSpacing="2">TECHNOLOGY</text>
    <text x="470" y="254" textAnchor="middle" fill="#B7BEE0" fontSize="10" fontWeight="700" letterSpacing="2">OPERATIONS</text>
    <text x="243" y="458" textAnchor="middle" fill="#B7BEE0" fontSize="10" fontWeight="700" letterSpacing="2">PARTNERSHIP</text>
  </svg>
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24">
          <Breadcrumbs dark items={[{ label: 'Solutions Portfolio' }]} />

          <div className="mt-6 lg:mt-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 animate-fadeIn">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-coral-orange">
                Solutions Portfolio
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white tracking-tight leading-[1.08] mt-5">
                Capabilities That Move<br className="hidden sm:block" /> Business Forward.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-5 max-w-xl">
                Technology, business operations and delivery partnerships — aligned to real business needs.
              </p>

              <nav aria-label="Section shortcuts" className="mt-8 flex flex-wrap gap-3">
                {heroShortcuts.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-coral-orange">{item.count}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-coral-orange" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CapabilitiesVisual />
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
              cta={{ href: '/services/it-solutions', label: 'Explore IT Services', hoverClass: 'text-coral-bright hover:text-coral-rose' }}
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral-orange">Engineering</p>
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
                        <span className="block text-sm sm:text-[15px] font-bold text-navy-midnight group-hover:text-coral-bright transition-colors">
                          {service.title}
                        </span>
                        <span className="block text-xs text-slate-500 leading-relaxed mt-1">
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
              cta={{ href: '/services/non-it-solutions', label: 'Explore Non-IT Services', hoverClass: 'text-coral-magenta hover:text-coral-purple' }}
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
                              <span className="font-mono text-[10px] font-bold text-coral-magenta">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="h-px flex-1 bg-slate-100" aria-hidden="true" />
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 transition-all duration-200 group-hover:text-coral-magenta group-hover:translate-x-0.5" />
                            </span>
                            <span className="block text-sm font-bold text-navy-midnight mt-2.5 group-hover:text-coral-magenta transition-colors">
                              {service.title}
                            </span>
                            <span className="block text-[11px] text-slate-500 leading-relaxed mt-1">
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

            <ScrollReveal direction="up" delay={120} className="lg:col-span-5">
              <figure className="relative lg:mt-10">
                <div aria-hidden="true" className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border border-coral-magenta/25 sm:-right-4 sm:-bottom-4" />
                <img
                  src="/images/solutions-non-it-operations.jpg"
                  alt="Operations specialists reviewing documents and workflows"
                  className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-card-soft"
                  loading="lazy"
                />
                <figcaption className="absolute left-4 top-4 rounded-xl bg-white/90 backdrop-blur-sm px-4 py-2.5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral-magenta">Operations</p>
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
              cta={{ href: '/partnerships', label: 'Explore Partnerships', hoverClass: 'text-coral-purple hover:text-coral-magenta' }}
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral-orange">Partnerships</p>
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
                      <p className="font-mono text-[10px] font-bold text-coral-purple/70">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="text-sm sm:text-[15px] font-bold text-navy-midnight mt-0.5">{service.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 max-w-md">{service.shortDescription}</p>
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
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Browse illustrative project categories, or see our six-stage delivery process.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button to="/project-opportunities" variant="outline" size="sm" icon={<Briefcase className="w-3.5 h-3.5" />}>
              Project Categories
            </Button>
            <Button to="/how-it-works" variant="secondary" size="sm" icon={<Layers className="w-3.5 h-3.5" />}>
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
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-coral-orange">
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
