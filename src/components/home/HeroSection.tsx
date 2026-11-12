'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Laptop, Layers, Handshake, ChartBarIncreasing } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const featureHighlights = [
  {
    icon: Laptop,
    label: 'IT Services',
    href: '/services/it-solutions',
  },
  {
    icon: Layers,
    label: 'Non-IT Operations',
    href: '/services/non-it-solutions',
  },
  {
    icon: Handshake,
    label: 'Strategic Partnerships',
    href: '/partnerships',
  },
  {
    icon: ChartBarIncreasing,
    label: 'Scalable Delivery',
    href: '/how-it-works',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-10">
      {/* SVG Gradient Definition for Icons */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="swiftHeroIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F98F33" />
            <stop offset="50%" stopColor="#E73B50" />
            <stop offset="100%" stopColor="#D21D61" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3D Translucent Globe & Flowing Gradient Wave Artwork Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-white pointer-events-none select-none">
        <Image
          src="/images/hero-globe-pure-white.png"
          alt="Coral Swift global business and delivery ecosystem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top sm:object-[86%_top] opacity-100"
        />
        {/* Mobile / Tablet readability overlay: gentle white blend to ensure text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-55% to-white/40 lg:hidden pointer-events-none"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-0 sm:pt-1">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 max-w-2xl space-y-4 sm:space-y-5 text-left relative z-10">
            {/* Eyebrow Tag */}
            <ScrollReveal direction="down" delay={50}>
              <p className="font-mono text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-slate-700 uppercase">
                US-FOCUSED <span className="text-coral-rose mx-2 sm:mx-2.5 font-bold">•</span> IT &amp; NON-IT SOLUTIONS <span className="text-coral-rose mx-2 sm:mx-2.5 font-bold">•</span> STRATEGIC PARTNERSHIPS
              </p>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal direction="up" delay={100}>
              <h1 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-navy-midnight tracking-tight leading-[1.12]">
                Connecting Global<br />
                Opportunities with<br />
                <span className="bg-gradient-to-r from-[#F98F33] via-[#E73B50] to-[#D21D61] bg-clip-text text-transparent inline-block">
                  Reliable Delivery.
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal direction="up" delay={150}>
              <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                A trusted platform that connects international business requirements with qualified delivery organizations.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F98F33] via-[#E73B50] to-[#D21D61] px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-glow-coral hover:shadow-glow-accent hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Solutions</span>
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-navy-midnight bg-white/90 backdrop-blur-[2px] px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-navy-midnight hover:bg-navy-midnight hover:text-white transition-all duration-200"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual breathing room showcasing the 3D globe and network connections */}
          <div className="hidden lg:block lg:col-span-5 h-[180px] lg:h-[220px] pointer-events-none" aria-hidden="true" />
        </div>

        {/* Bottom Feature Strip with 4 Pillars - Clean borderless inline layout */}
        <ScrollReveal direction="up" delay={250}>
          <div className="mt-14 sm:mt-16 pt-2 pb-0 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
              {featureHighlights.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-center sm:justify-start gap-3 py-1.5 transition-all duration-200"
                >
                  <item.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-110"
                    stroke="url(#swiftHeroIconGradient)"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm sm:text-[15px] font-heading font-bold text-navy-midnight group-hover:text-coral-rose transition-colors leading-tight">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
