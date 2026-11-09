import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';
import { Button } from '../common/Button';

export const ClosingCtaSection: React.FC = () => (
  <section className="relative overflow-hidden bg-navy-midnight py-14 sm:py-20 text-center">
    <div className="absolute inset-0 bg-dark-grid pointer-events-none" aria-hidden="true" />
    {/* Coral-to-magenta gradient wash with a slow breathing glow */}
    <div
      className="absolute -top-36 left-1/2 -translate-x-1/2 w-[42rem] h-[26rem] rounded-full bg-gradient-to-r from-coral-bright/25 via-coral-magenta/20 to-coral-purple/25 blur-3xl pointer-events-none animate-glow-pulse"
      aria-hidden="true"
    />
    <div
      className="absolute top-1/4 -right-24 w-72 h-72 bg-coral-purple/15 rounded-full blur-3xl pointer-events-none animate-float-slow"
      aria-hidden="true"
    />
    <div
      className="absolute bottom-0 -left-24 w-72 h-72 bg-coral-bright/15 rounded-full blur-3xl pointer-events-none animate-float-reverse"
      aria-hidden="true"
    />
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-coral-bright/60 to-transparent"
      aria-hidden="true"
    />

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <ScrollReveal direction="up">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let&apos;s Build the{' '}
          <span className="swift-gradient-text">Right Connections.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
          Whether you need project support or want to explore a delivery partnership, let&apos;s start a conversation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-7">
          <Button to="/services" variant="primary" size="lg">
            Explore Solutions
          </Button>
          <Button to="/contact" variant="white" size="lg">
            Get in Touch
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ClosingCtaSection;
