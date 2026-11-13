'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Lock, Clock, Calendar, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { MeetingRequestModal } from '../forms/MeetingRequestModal';
import { Button } from '../common/Button';

export const CtaBannerSection: React.FC = () => {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-2xl bg-[#080B2E] border border-white/10 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl text-white">
            {/* Ambient Lighting & Visual Depth */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-gradient-to-br from-coral-orange/15 to-coral-bright/10 rounded-full blur-[120px] pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-gradient-to-tr from-coral-magenta/15 to-coral-purple/10 rounded-full blur-[120px] pointer-events-none"
            />
            {/* Subtle Blueprint Mesh */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"
            />

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">
              {/* Minimal Eyebrow Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold uppercase tracking-[0.22em] text-coral-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-bright animate-pulse" />
                <span>Get Started</span>
              </div>

              {/* Bold Executive Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Let&apos;s Build the{' '}
                <span className="bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#E73B50] bg-clip-text text-transparent inline-block">
                  Right Connections
                </span>
                .
              </h2>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
                Whether you need project support or want to explore a delivery partnership, let&apos;s start a conversation.
              </p>

              {/* Clear Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  onClick={() => setIsMeetingOpen(true)}
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get in Touch
                </Button>
                <Button
                  to="/services"
                  variant="white"
                  size="md"
                >
                  Explore Solutions
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-10 mt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-coral-orange" />
                  <span className="font-medium">Confidential Discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-bright" />
                  <span className="font-medium">Clear Scope And Terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">Structured Six-Stage Process</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Meeting Request Modal */}
      <MeetingRequestModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />
    </section>
  );
};

export default CtaBannerSection;
