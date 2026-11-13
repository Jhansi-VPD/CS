'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../common/Button';

export const AboutHero: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setRevealed(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate min-h-0 overflow-hidden border-b border-[#E8DDD8] bg-[#FFF9F5] pt-3 pb-12 sm:pt-4 sm:pb-16 lg:min-h-[min(720px,calc(100vh-4rem))] lg:flex lg:items-center lg:py-16 xl:py-20">
      {/* Desktop Full-Bleed Editorial Background (Active only on lg: and wider) */}
      <div className="hidden lg:block absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/about-hero-executive.jpg"
          alt="Coral Swift executive leadership and global delivery alignment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_top] xl:object-[85%_top] opacity-100 contrast-[1.12] saturate-[1.08] lg:contrast-[1.18]"
        />
        {/* Directional gradient: solid warm cream on the left where typography sits, easing softly toward transparency before the portrait */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#FFF9F5] from-38% via-[#FFF9F5]/92 via-52% to-transparent to-70% xl:from-32% xl:via-[#FFF9F5]/85 xl:via-46% xl:to-transparent xl:to-62%"
        />
        {/* Subtle top & bottom blends - restricted on the right to preserve crisp image contrast */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-1/3 bottom-0 h-24 bg-gradient-to-t from-[#FFF9F5] to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 right-1/3 top-0 h-16 bg-gradient-to-b from-[#FFF9F5]/80 to-transparent"
        />
      </div>

      {/* Ambient background geometry rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border border-coral-purple/[0.08] sm:h-[44rem] sm:w-[44rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[26rem] w-[26rem] rounded-full border border-coral-orange/[0.1] sm:h-[36rem] sm:w-[36rem]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Coral Swift' }]} />

        {/* Responsive Grid: Stacks on mobile, 2-col on tablet & portrait laptop (768px-1023px), editorial split on desktop */}
        <div className="mt-3 sm:mt-4 lg:mt-5 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8 lg:gap-12 md:items-center">
          {/* Left Column: All narrative text and CTAs */}
          <div className="md:col-span-7 lg:col-span-7 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-coral-bright" aria-hidden="true" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-coral-purple">
                Who We Are
              </p>
            </div>
            <h1
              className={`mt-3 font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-navy-midnight transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Good Work Starts
              <span className="block text-coral-bright">with the Right Alignment.</span>
            </h1>

            <p
              className={`mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700 transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Coral Swift brings project owners and delivery organizations together through clear requirements,
              suitable partner alignment and structured coordination. We focus on creating the right foundation
              for successful business engagements.
            </p>

            <div
              className={`mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Button
                to="/services"
                variant="primary"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto justify-center"
              >
                Explore Solutions
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto justify-center"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>

          {/* Right Column Visual: Dedicated responsive card on tablet/portrait (md:<lg), floating badge on desktop (lg:) */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
            {/* Tablet & Mobile Dedicated Executive Portrait Card (< lg) */}
            <div className="lg:hidden relative w-full h-[280px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-[#E8DDD8] bg-navy-midnight">
              <Image
                src="/images/about-hero-executive.jpg"
                alt="Coral Swift executive leadership and global delivery alignment"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 42vw"
                className="object-cover object-[78%_15%] contrast-[1.08] saturate-[1.05]"
              />
              {/* Subtle bottom vignette to ensure badge contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-navy-midnight/20 to-transparent"
              />
              {/* Floating Leadership Badge pinned to bottom */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 rounded-xl border border-white/80 bg-white/92 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-md backdrop-blur-md">
                <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-coral-orange">
                  Executive Leadership
                </p>
                <p className="text-xs sm:text-xs font-semibold text-navy-midnight mt-0.5 truncate">
                  Structured Alignment · Global Delivery
                </p>
              </div>
            </div>

            {/* Desktop Unobstructed Floating Badge (lg:) */}
            <div className="hidden lg:flex flex-col justify-end items-end min-h-[420px] lg:min-h-[480px] pb-4">
              <div className="rounded-lg border border-white/80 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur-md">
                <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-coral-orange">
                  Executive Leadership
                </p>
                <p className="text-xs font-semibold text-navy-midnight mt-0.5">
                  Structured Alignment · Global Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
