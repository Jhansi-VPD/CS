import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface CapabilityRow {
  index: string;
  accent: string;
  title: string;
  titleHover: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  ctaClass: string;
  imageSide: 'left' | 'right';
  bandClass: string;
}

const CAPABILITIES: CapabilityRow[] = [
  {
    index: '01',
    accent: '#F98F33',
    title: 'IT Solutions & Custom Software',
    titleHover: 'group-hover:text-coral-orange',
    description:
      'ERP, web applications, business portals, custom software, cloud support, testing and digital transformation.',
    keywords: ['ERP', 'Web Applications', 'Custom Software', 'Cloud Support', 'Testing'],
    image: '/images/solutions-it-engineering.jpg',
    imageAlt: 'Software engineering team at work',
    href: '/services/it-solutions',
    cta: 'Explore IT Solutions',
    ctaClass: 'text-coral-bright',
    imageSide: 'right',
    bandClass: 'bg-white border-t border-slate-200/80',
  },
  {
    index: '02',
    accent: '#E73B50',
    title: 'Non-IT & Business Operations',
    titleHover: 'group-hover:text-coral-rose',
    description:
      'Medical coding and billing, healthcare support, data processing, banking KYC, financial operations and back-office services.',
    keywords: ['Medical Coding & Billing', 'Banking KYC', 'Data Processing', 'Back-Office Services'],
    image: '/images/solutions-non-it-operations.jpg',
    imageAlt: 'Business process operations desk',
    href: '/services/non-it-solutions',
    cta: 'Explore Business Operations',
    ctaClass: 'text-coral-rose',
    imageSide: 'left',
    bandClass: 'bg-[#FFF7F2] border-t border-slate-200/70',
  },
  {
    index: '03',
    accent: '#D21D61',
    title: 'Delivery Partnerships',
    titleHover: 'group-hover:text-coral-magenta',
    description:
      'Vendor discovery, capability assessment, staffing alignment, project coordination, reporting and quality assurance.',
    keywords: ['Vendor Discovery', 'Capability Assessment', 'Project Coordination', 'Quality Assurance'],
    image: '/images/partnerships-handshake.jpg',
    imageAlt: 'International delivery collaboration',
    href: '/partnerships',
    cta: 'Explore Partnerships',
    ctaClass: 'text-coral-magenta',
    imageSide: 'right',
    bandClass: 'bg-[#F5F6FA] border-t border-b border-slate-200/70',
  },
];

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="bg-white pt-14 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pb-10 lg:pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-coral-bright" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-coral-bright">
                Our Services
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight leading-[1.16] text-navy-midnight sm:text-4xl sm:leading-[1.12]">
              Three Capabilities. One Connected Approach.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex tap-link items-center gap-1.5 text-[13px] font-bold text-navy-midnight transition-colors hover:text-coral-bright"
          >
            Explore All Solutions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>
      </div>

      {/* Asymmetric horizontal showcase — each capability gets its own band */}
      <div>
        {CAPABILITIES.map((cap) => (
          <div key={cap.index} className={cap.bandClass}>
            <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href={cap.href}
                className="group grid grid-cols-1 items-center gap-6 py-9 sm:py-11 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                {/* Image — leads on mobile, alternates sides on desktop */}
                <div
                  className={`order-1 lg:order-none lg:col-span-5 ${
                    cap.imageSide === 'left' ? 'lg:col-start-1' : 'lg:col-start-8'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-card-soft">
                    <Image
                      src={cap.image}
                      alt={cap.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Typographic content */}
                <div
                  className={`lg:col-span-6 ${
                    cap.imageSide === 'left' ? 'lg:col-start-7' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-heading text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl"
                      aria-hidden="true"
                    >
                      {cap.index}
                    </span>
                    <span className="h-1 w-10 rounded-full" style={{ backgroundColor: cap.accent }} aria-hidden="true" />
                  </div>
                  <h3
                    className={`mt-3 font-heading text-2xl font-extrabold tracking-tight text-navy-midnight transition-colors duration-200 sm:text-3xl lg:text-4xl ${cap.titleHover}`}
                  >
                    {cap.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {cap.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {cap.keywords.map((k) => (
                      <li
                        key={k}
                        className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: cap.accent }} aria-hidden="true" />
                        {k}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-transform duration-200 ${cap.ctaClass}`}
                  >
                    {cap.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
