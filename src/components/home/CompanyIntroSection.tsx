import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

const pillars = [
  {
    step: '01',
    title: 'IT & Non-IT Capabilities',
    desc: 'Software, ERP, healthcare processes, banking operations and back-office support.',
    accent: '#F98F33',
  },
  {
    step: '02',
    title: 'Partner Assessment',
    desc: 'Reviewing operating history, workforce capabilities and financial strength.',
    accent: '#E73B50',
  },
  {
    step: '03',
    title: 'Delivery Governance',
    desc: 'Aligning project scope, quality expectations and reporting before work begins.',
    accent: '#950B6D',
  },
];

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="relative bg-[#FFF7F2] py-12 sm:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-coral-bright" aria-hidden="true" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-coral-bright">
              About Coral Swift
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <h2 className="mt-5 max-w-3xl font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-navy-midnight tracking-tight leading-[1.18]">
            Where Project Needs Meet <span className="text-coral-bright">Delivery Capability</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160}>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-[1.8]">
            Coral Swift connects international project requirements with capable delivery organizations.
            Through requirement validation, partner assessment and structured coordination, we help
            establish clear expectations for business engagements.
          </p>
        </ScrollReveal>

        {/* Asymmetric editorial body: visual left, numbered pillars right */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 lg:items-center">
          {/* Visual area */}
          <ScrollReveal direction="scale" delay={140} className="lg:col-span-5">
            <figure className="group relative">
              {/* Offset editorial frame */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-coral-rose/25 sm:-right-4 sm:-top-4"
              />
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
                <Image
                  src="/images/about-global-delivery.jpg"
                  alt="Representatives of a project owner and a delivery organization reaching agreement, reflecting how Coral Swift connects both sides"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Delivery model label integrated into the composition */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy-midnight px-4 py-3 sm:px-5">
                  <span className="block text-[9px] font-mono font-bold uppercase tracking-[0.22em] text-coral-bright">
                    Delivery Model
                  </span>
                  <p className="mt-1 text-[11px] sm:text-xs font-medium text-white/90 leading-snug">
                    US-oriented coordination · India-based delivery partners
                  </p>
                </figcaption>
              </div>
            </figure>
          </ScrollReveal>

          {/* Content area */}
          <div className="mt-12 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <ScrollReveal direction="up" delay={220}>
              <ul className="divide-y divide-slate-200 border-y border-slate-200">
                {pillars.map((pillar) => (
                  <li
                    key={pillar.step}
                    className="group flex items-start gap-4 sm:gap-5 -mx-3 rounded-xl px-3 py-5 transition-colors duration-200 hover:bg-white/80"
                  >
                    <div className="shrink-0 pt-0.5 text-center">
                      <span className="block font-mono text-base font-bold" style={{ color: pillar.accent }}>
                        {pillar.step}
                      </span>
                      <span
                        className="mx-auto mt-1.5 block h-px w-7 transition-all duration-200 group-hover:w-10"
                        style={{ backgroundColor: pillar.accent, opacity: 0.5 }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-heading font-bold text-navy-midnight">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={280}>
              <div className="mt-8">
                <Button
                  to="/about"
                  variant="secondary"
                  size="md"
                  className="group"
                  icon={
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  }
                >
                  Learn About Our Approach
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
