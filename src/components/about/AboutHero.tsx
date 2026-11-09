'use client';

import React, { useEffect, useState } from 'react';
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
    <section className="relative isolate overflow-hidden border-b border-[#E8DDD8] bg-[#FFF9F5] py-8 sm:py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border border-coral-purple/[0.08] sm:h-[44rem] sm:w-[44rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[26rem] w-[26rem] rounded-full border border-coral-orange/[0.1] sm:h-[36rem] sm:w-[36rem]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Coral Swift' }]} />

        <div className="mt-8 grid grid-cols-1 gap-7 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-coral-bright" aria-hidden="true" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.26em] text-coral-purple sm:text-xs">
                Who We Are
              </p>
            </div>
            <h1
              className={`mt-5 max-w-5xl font-heading text-[2.65rem] font-extrabold leading-[1.04] tracking-[-0.05em] text-navy-midnight transition-all duration-700 ease-out motion-reduce:transition-none sm:text-6xl lg:text-[4rem] ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Good Work Starts
              <span className="block text-coral-bright">with the Right Alignment.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p
              className={`max-w-lg border-l-2 border-coral-bright/50 pl-4 text-sm leading-7 text-slate-600 transition-all duration-700 ease-out motion-reduce:transition-none sm:text-base sm:leading-8 ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              Coral Swift brings project owners and delivery organizations together through clear requirements,
              suitable partner alignment and structured coordination. We focus on creating the right foundation
              for successful business engagements.
            </p>
            <div
              className={`mt-5 flex flex-wrap gap-3 pl-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '340ms' }}
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
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
