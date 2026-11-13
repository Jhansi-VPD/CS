
"use client";

import * as React from "react";
import Link from "next/link";
import { Compass, ShieldCheck, CheckCircle2, ArrowRight, Target, Layers } from "lucide-react";
import { Logo } from "../common/Logo";
import { ScrollReveal } from "../common/ScrollReveal";

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-navy-midnight text-white">
      {/* =========================================================================
          1. SECTION A – VISION (PERSPECTIVE 01)
          Visual Theme: Global business connectivity, modern international architecture
          Composition: Content positioned on the LEFT, keeping corporate glass towers visible
          ========================================================================= */}
      <div className="relative w-full min-h-0 py-14 sm:min-h-[520px] sm:py-20 lg:min-h-[640px] flex items-center overflow-hidden border-b border-white/10 group">
        {/* Background Photograph */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/about-vision-cinematic.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-vision-cinematic.jpg"
            alt="Global business connectivity and modern international enterprise architecture"
            className="w-full h-full object-cover object-[75%_center] sm:object-[65%_center] lg:object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            loading="eager"
          />
        </picture>

        {/* Localized Directional Gradient Overlay (Protects text contrast on left, keeps towers bright on right) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-midnight/95 via-navy-midnight/80 to-navy-midnight/50 sm:bg-gradient-to-r sm:from-navy-midnight/95 sm:via-navy-midnight/80 sm:to-transparent lg:from-navy-midnight/90 lg:via-navy-midnight/65 lg:to-transparent pointer-events-none"
        />

        {/* Vision Content Block (Left-Aligned) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <ScrollReveal direction="left">
              {/* Perspective Label */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold uppercase tracking-[0.2em] text-coral-orange">
                  <Compass className="w-3.5 h-3.5 text-coral-orange" />
                  Perspective 01 &bull; Global Reach
                </span>
              </div>

              {/* Large Editorial Heading */}
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white">
                VISION
              </h3>

              {/* Coral Swift Brand Accent Bar */}
              <div className="w-16 h-1 bg-gradient-to-r from-coral-orange to-coral-rose rounded-full mt-3 mb-6" />

              {/* PRD-Approved Vision Statement (Preserved Exactly) */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-heading font-normal text-white/95 leading-relaxed sm:leading-snug tracking-tight">
                &ldquo;Build a trusted international ecosystem where qualified technology and operations companies can access scalable project opportunities.&rdquo;
              </blockquote>

              {/* Key Pillars of Vision */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-3 sm:gap-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-orange" />
                  Trusted International Ecosystem
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
                  Qualified Technology &amp; Operations
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-rose" />
                  Scalable Project Opportunities
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. VISUAL CONNECTION: BRAND BRIDGE & TRANSITION
          Thin Coral Swift gradient line connecting the sections with an emblem node
          ========================================================================= */}
      <div className="relative w-full h-[2px] bg-gradient-to-r from-coral-orange via-coral-rose via-coral-magenta to-coral-purple z-20">
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 sm:-top-6 z-30">
          <div className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-navy-midnight border border-white/20 shadow-xl transition-transform duration-300 hover:scale-110">
            <Logo variant="emblem-only" theme="light" size="sm" asLink={false} />
            <span className="sr-only">Coral Swift Unified Purpose</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. SECTION B – MISSION (PERSPECTIVE 02)
          Visual Theme: Professional business collaboration, strategic planning & execution
          Composition: Content positioned on the RIGHT / OFFSET, visually distinct from Vision
          ========================================================================= */}
      <div className="relative w-full min-h-0 py-14 sm:min-h-[520px] sm:py-20 lg:min-h-[640px] flex items-center overflow-hidden border-b border-white/10 group">
        {/* Background Photograph */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/about-mission-cinematic.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-mission-cinematic.jpg"
            alt="Professional business collaboration, strategic project delivery, and operational governance"
            className="w-full h-full object-cover object-[25%_center] sm:object-[35%_center] lg:object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </picture>

        {/* Localized Directional Gradient Overlay (Protects text contrast on right, keeps collaboration workspace visible on left) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-midnight/95 via-navy-midnight/80 to-navy-midnight/50 sm:bg-gradient-to-l sm:from-navy-midnight/95 sm:via-navy-midnight/80 sm:to-transparent lg:from-navy-midnight/90 lg:via-navy-midnight/70 lg:to-transparent pointer-events-none"
        />

        {/* Mission Content Block (Right-Aligned / Offset Composition) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl sm:ml-auto">
            <ScrollReveal direction="right">
              {/* Perspective Label */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold uppercase tracking-[0.2em] text-coral-bright">
                  <Target className="w-3.5 h-3.5 text-coral-bright" />
                  Perspective 02 &bull; Disciplined Execution
                </span>
              </div>

              {/* Large Editorial Heading */}
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white">
                MISSION
              </h3>

              {/* Coral Swift Brand Accent Bar */}
              <div className="w-16 h-1 bg-gradient-to-r from-coral-bright to-coral-magenta rounded-full mt-3 mb-6" />

              {/* PRD-Approved Mission Statement (Preserved Exactly) */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-heading font-normal text-white/95 leading-relaxed sm:leading-snug tracking-tight">
                &ldquo;Enable disciplined project execution through partner screening, structured onboarding, operational governance and outcome-based delivery.&rdquo;
              </blockquote>

              {/* Key Pillars of Mission */}
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-3 sm:gap-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-bright shrink-0" />
                  Partner Screening
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <Layers className="w-3.5 h-3.5 text-coral-rose shrink-0" />
                  Structured Onboarding
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <Compass className="w-3.5 h-3.5 text-coral-magenta shrink-0" />
                  Operational Governance
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-midnight/70 backdrop-blur-sm border border-white/10 text-xs font-mono font-medium text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral-orange shrink-0" />
                  Outcome-Based Delivery
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AppleCardCarousel = VisionMissionSection;
export default VisionMissionSection;
