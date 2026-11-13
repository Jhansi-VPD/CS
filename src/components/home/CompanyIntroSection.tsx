'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { Button } from '../common/Button';

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
    <section className="relative w-full overflow-hidden bg-navy-midnight text-white">
      {/* 4K Background Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/conference-team-4k.jpg"
          alt="International business and technology collaboration meeting"
          fill
          priority={false}
          loading="lazy"
          sizes="100vw"
          className="object-cover object-right lg:object-center transform scale-100"
        />
        {/* Localized Asymmetric Gradient: Keep photograph naturally visible while ensuring crisp text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#080B2E]/95 via-[#080B2E]/80 to-[#080B2E]/50 lg:bg-gradient-to-r lg:from-[#080B2E]/95 lg:via-[#080B2E]/80 lg:via-55% lg:to-transparent"
        />
        {/* Subtle Brand Ambient Glow at Corner */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-coral-rose/15 blur-3xl pointer-events-none"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-28">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-6 sm:space-y-8">
          {/* Eyebrow Label */}
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-3">
              <span className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-coral-orange to-coral-bright" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-coral-orange">
                About Coral Swift
              </span>
            </div>
          </ScrollReveal>

          {/* Main Section Heading */}
          <ScrollReveal direction="up" delay={80}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
              Where Project Needs Meet{' '}
              <span className="bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#E73B50] bg-clip-text text-transparent inline-block">
                Delivery Capability
              </span>
              .
            </h2>
          </ScrollReveal>

          {/* Supporting Narrative */}
          <ScrollReveal direction="up" delay={140}>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Coral Swift matches international projects with capable delivery partners. We review requirements,
              assess partners and coordinate work to set clear expectations.
            </p>
          </ScrollReveal>

          {/* Numbered Capability Rows (Editorial Style) */}
          <ScrollReveal direction="up" delay={200}>
            <div className="pt-2 border-t border-white/15 divide-y divide-white/10 space-y-1">
              {pillars.map((pillar) => (
                <div
                  key={pillar.step}
                  className="group py-4 sm:py-5 flex items-start gap-4 sm:gap-6 transition-all duration-200"
                >
                  {/* Monospace Step Indicator */}
                  <div className="shrink-0 pt-0.5">
                    <span
                      className="block font-mono text-base sm:text-lg font-bold tracking-tight"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.step}
                    </span>
                    <span
                      className="block mt-1.5 h-0.5 w-6 group-hover:w-10 transition-all duration-300"
                      style={{ backgroundColor: pillar.accent }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Pillar Narrative */}
                  <div className="min-w-0 space-y-1">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-coral-orange transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Link */}
          <ScrollReveal direction="up" delay={260}>
            <div className="pt-3">
              <Button
                to="/about"
                variant="orange"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn About Our Approach
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
