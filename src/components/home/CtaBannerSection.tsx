'use client';

import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import { MeetingRequestModal } from '../forms/MeetingRequestModal';

export const CtaBannerSection: React.FC = () => {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#080B2E]">
      {/* Restrained coral accents on Midnight Navy */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral-rose/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-coral-bright/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-coral-purple/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <ScrollReveal direction="up">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-coral-orange">
            Start a Conversation
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Let&apos;s Build the Right <span className="swift-gradient-text">Connections.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={140}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300">
            Whether you are looking for project capabilities or exploring a delivery partnership,
            start a conversation with Coral Swift.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="font-bold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
              className="border-slate-600 font-semibold text-white hover:bg-white/10"
            >
              Explore Solutions
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMeetingOpen(true)}
            className="mt-7 inline-flex max-sm:min-h-[44px] items-center justify-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            <Calendar className="h-4 w-4 text-coral-orange" aria-hidden="true" />
            Prefer a scheduled call? Request an introductory discussion
          </button>
        </ScrollReveal>
      </div>

      <MeetingRequestModal isOpen={isMeetingOpen} onClose={() => setIsMeetingOpen(false)} />
    </section>
  );
};

export default CtaBannerSection;
