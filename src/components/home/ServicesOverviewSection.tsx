import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface CapabilityPanel {
  index: string;
  label: string;
  title: string;
  description: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  span: string;
}

const PANELS: CapabilityPanel[] = [
  {
    index: '01',
    label: 'Technology',
    title: 'IT Services',
    description: 'Custom software, ERP, business portals, cloud support and testing.',
    capabilities: ['ERP and business portals', 'Custom software development', 'Cloud and infrastructure support', 'Testing and maintenance'],
    image: '/images/solutions-it-engineering.jpg',
    imageAlt: 'Software engineering team at work',
    href: '/services/it-solutions',
    cta: 'Explore IT Services',
    span: 'lg:col-span-4',
  },
  {
    index: '02',
    label: 'Operations',
    title: 'Non-IT & Business Operations',
    description: 'Healthcare, banking and back-office processes run by assessed partners.',
    capabilities: ['Medical coding and billing', 'Banking KYC and mortgage processing', 'Data entry and document processing', 'Back-office support'],
    image: '/images/solutions-non-it-operations.jpg',
    imageAlt: 'Business process operations desk',
    href: '/services/non-it-solutions',
    cta: 'Explore Operations',
    span: 'lg:col-span-3',
  },
  {
    index: '03',
    label: 'Collaboration',
    title: 'Partnership Services',
    description: 'We find, screen and coordinate delivery partners for defined project scope.',
    capabilities: ['Vendor discovery and assessment', 'Staffing and project alignment', 'Reporting and quality assurance', 'Commercial engagement support'],
    image: '/images/hero-enterprise-collab.jpg',
    imageAlt: 'International delivery collaboration',
    href: '/partnerships',
    cta: 'Explore Partnerships',
    span: 'md:col-span-2 lg:col-span-3',
  },
];

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="bg-slate-50/80 border-y border-slate-200/70 py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <ScrollReveal direction="up" className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pb-8 lg:pb-10">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-coral-bright">
              <span className="h-px w-5 bg-coral-bright/50" />
              Our Services
            </p>
            <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-navy-midnight sm:text-3xl">
              Technology<span className="text-coral-bright">.</span> Operations<span className="text-coral-bright">.</span> Partnerships
              <span className="text-coral-bright">.</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Three service areas: technology, business operations and delivery partnerships.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex tap-link items-center gap-1.5 text-[13px] font-bold text-navy-midnight transition-colors hover:text-coral-bright"
          >
            Explore All Solutions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>

        {/* Three Panels — 40 / 30 / 30 on desktop */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-10 lg:gap-5">
          {PANELS.map((p, i) => (
            <ScrollReveal
              key={p.index}
              direction="up"
              delay={100 + i * 90}
              className={`${p.span} h-full`}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card-hover">
                <div className="relative h-32 shrink-0 overflow-hidden sm:h-36 lg:h-32">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-white/90 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-coral-bright backdrop-blur-sm">
                    {p.index} · {p.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-heading text-[15px] font-bold leading-snug text-navy-midnight sm:text-base">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{p.description}</p>

                  <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                    {p.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-xs font-medium text-navy-secondary">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-coral-bright" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={p.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-bold text-coral-bright transition-colors hover:text-coral-magenta"
                  >
                    {p.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
