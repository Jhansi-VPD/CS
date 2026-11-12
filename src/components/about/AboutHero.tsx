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
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden border-b border-[#E8DDD8] bg-[#FFF9F5] pt-3 pb-16 sm:pt-4 sm:pb-20 lg:pt-5 lg:pb-24">
      {/* Background Image: Corporate leadership portrait with directional gradient overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/about-hero-executive.jpg"
          alt="Coral Swift executive leadership and global delivery alignment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_top] lg:object-[85%_top] opacity-95 lg:opacity-100 contrast-[1.12] saturate-[1.08] lg:contrast-[1.18]"
        />
        {/* Directional gradient: solid warm cream on the left where typography sits, easing softly toward transparency before the portrait */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#FFF9F5] via-[#FFF9F5]/95 via-45% to-[#FFF9F5]/20 lg:from-[#FFF9F5] lg:from-32% lg:via-[#FFF9F5]/85 lg:via-46% lg:to-transparent lg:to-62%"
        />
        {/* Subtle top & bottom blends - restricted on the right to preserve crisp image contrast */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 lg:right-1/3 bottom-0 h-24 bg-gradient-to-t from-[#FFF9F5] to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 lg:right-1/3 top-0 h-16 bg-gradient-to-b from-[#FFF9F5]/80 to-transparent"
        />
      </div>

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

        {/* Clean, natural spacing into 'Who We Are' section */}
        <div className="mt-3 sm:mt-4 lg:mt-5 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: All narrative text and CTAs with high contrast */}
          <div className="lg:col-span-7 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-coral-bright" aria-hidden="true" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.26em] text-coral-purple sm:text-xs">
                Who We Are
              </p>
            </div>
            <h1
              className={`mt-3 font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-navy-midnight transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Good Work Starts
              <span className="block text-coral-bright">with the Right Alignment.</span>
            </h1>

            <p
              className={`mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700 transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Coral Swift brings project owners and delivery organizations together through clear requirements,
              suitable partner alignment and structured coordination. We focus on creating the right foundation
              for successful business engagements.
            </p>

            <div
              className={`mt-7 flex flex-wrap items-center gap-3.5 transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Button
                to="/services"
                variant="primary"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Solutions
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                Talk to Our Team
              </Button>
            </div>
          </div>

          {/* Right Column: Unobstructed view of the executive portrait with a subtle floating badge */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end min-h-[420px] lg:min-h-[480px] pb-4">
            <div className="rounded-xl border border-white/80 bg-white/75 px-4 py-2.5 shadow-sm backdrop-blur-md">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-coral-orange">
                Executive Leadership
              </p>
              <p className="text-xs font-semibold text-navy-midnight mt-0.5">
                Structured Alignment · Global Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
