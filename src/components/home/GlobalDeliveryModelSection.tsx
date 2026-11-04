import React from 'react';
import { ArrowRight, LayoutGrid, Database, ShieldCheck, CheckSquare } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const GlobalDeliveryModelSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F6F9] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              A Four-Stage{' '}
              <span className="swift-gradient-text">Delivery Lifecycle.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              A transparent, milestone-governed workflow from requirement discovery to release.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Button
              to="/how-it-works"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Full 6-Stage Process
            </Button>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid - Styled strictly to Coral Swift Brand Palette (Zero spheres/balls) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Card 01: Scope Formulation (Primary Dark Card - Deep Midnight Navy with Coral Orange Accents) */}
          <ScrollReveal direction="up" delay={100} className="h-full">
            <div className="group relative h-full rounded-3xl p-6 sm:p-7 bg-[#080B2E] text-white border border-[#1E2563]/60 shadow-[0_15px_35px_-8px_rgba(8,11,46,0.35)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-8px_rgba(240,94,71,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top subtle brand accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F98F33] via-[#F05E47] to-[#D21D61]" />

              {/* Top Row: Title & Top-Right Icon */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F98F33] block font-bold">
                      Stage 01
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white mt-0.5 leading-snug">
                      Scope Formulation
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#F98F33] border border-white/10 flex items-center justify-center shrink-0">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[210px]">
                  Translating business objectives into milestone-defined SOWs with clear sprint schedules.
                </p>
              </div>

              {/* Bottom Row: Arrow + Clean Isometric Architectural Blocks (Zero balls) */}
              <div className="pt-8 flex items-end justify-between relative z-10">
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#F05E47] group-hover:text-white text-white/90 flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>

                {/* SVG Geometric Composition: Isometric Architecture Stack in Coral Swift Palette */}
                <div className="absolute right-0 -bottom-1 w-28 h-24 pointer-events-none select-none">
                  <svg viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="card1BlockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFA25B" />
                        <stop offset="100%" stopColor="#F98F33" />
                      </linearGradient>
                      <linearGradient id="card1BlockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F98F33" />
                        <stop offset="100%" stopColor="#F05E47" />
                      </linearGradient>
                    </defs>

                    {/* Lower Isometric Podium Block */}
                    {/* Top Face */}
                    <polygon points="32,60 62,45 92,60 62,75" fill="url(#card1BlockGrad1)" fillOpacity="0.9" />
                    {/* Left Face */}
                    <polygon points="32,60 62,75 62,92 32,77" fill="#F05E47" />
                    {/* Right Face */}
                    <polygon points="62,75 92,60 92,77 62,92" fill="#E73B50" />
                    
                    {/* Architectural Hatching / Grid Lines on Lower Block */}
                    <line x1="47" y1="67.5" x2="77" y2="52.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="47" y1="52.5" x2="77" y2="67.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="32" y1="68" x2="62" y2="83" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.3" />

                    {/* Upper Stepped Isometric Block */}
                    {/* Top Face */}
                    <polygon points="64,32 82,23 100,32 82,41" fill="#FFC28E" />
                    {/* Left Face */}
                    <polygon points="64,32 82,41 82,56 64,47" fill="url(#card1BlockGrad2)" />
                    {/* Right Face */}
                    <polygon points="82,41 100,32 100,47 82,56" fill="#F05E47" />

                    {/* Side Stepped Accent Block */}
                    <polygon points="18,72 32,65 46,72 32,79" fill="#F98F33" fillOpacity="0.7" />
                    <polygon points="18,72 32,79 32,88 18,81" fill="#D21D61" />
                    <polygon points="32,79 46,72 46,81 32,88" fill="#F05E47" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 02: Pod Matching (Warm Coral Bright Card) */}
          <ScrollReveal direction="up" delay={150} className="h-full">
            <div className="group relative h-full rounded-3xl p-6 sm:p-7 bg-white text-navy-midnight border border-slate-200/80 shadow-[0_15px_35px_-8px_rgba(240,94,71,0.12)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-8px_rgba(240,94,71,0.22)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top subtle hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F05E47] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top Row: Title & Top-Right Icon */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F05E47] block font-bold">
                      Stage 02
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-navy-midnight mt-0.5 leading-snug">
                      Pod Matching
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0EA] text-[#F05E47] border border-[#FFD1BF]/60 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[210px]">
                  Auditing Indian delivery centers against 8-point baselines: 3-year tenure and 50+ personnel.
                </p>
              </div>

              {/* Bottom Row: Arrow + Clean Architectural Gateway & Fluted Column (Zero balls) */}
              <div className="pt-8 flex items-end justify-between relative z-10">
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#F05E47] group-hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>

                {/* SVG Geometric Composition: Architectural Portal Arch & Fluted Pedestal (No balls) */}
                <div className="absolute right-0 -bottom-1 w-28 h-24 pointer-events-none select-none">
                  <svg viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="card2ArchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F98F33" />
                        <stop offset="100%" stopColor="#F05E47" />
                      </linearGradient>
                    </defs>

                    {/* Architectural Portal Gateway */}
                    <path
                      d="M52 88 L52 46 C52 26 86 26 86 46 L86 88 L74 88 L74 48 C74 38 64 38 64 48 L64 88 Z"
                      fill="url(#card2ArchGrad)"
                    />
                    {/* Portal Archway Inner Contour Line */}
                    <path
                      d="M56 88 L56 46 C56 30 82 30 82 46 L82 88"
                      stroke="#FFFFFF"
                      strokeWidth="1.25"
                      strokeOpacity="0.4"
                      fill="none"
                    />

                    {/* Fluted Column Pedestal on Left */}
                    <rect x="26" y="52" width="22" height="36" rx="4" fill="#FFEAE4" stroke="#F05E47" strokeWidth="1.25" strokeOpacity="0.6" />
                    {/* Vertical Fluting Lines on Column */}
                    <line x1="31" y1="56" x2="31" y2="84" stroke="#F05E47" strokeWidth="1.25" strokeOpacity="0.45" />
                    <line x1="37" y1="56" x2="37" y2="84" stroke="#F05E47" strokeWidth="1.25" strokeOpacity="0.45" />
                    <line x1="43" y1="56" x2="43" y2="84" stroke="#F05E47" strokeWidth="1.25" strokeOpacity="0.45" />

                    {/* Stepped Pedestal Base */}
                    <rect x="22" y="86" width="70" height="4" rx="2" fill="#F05E47" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 03: Bilateral Agreement (Coral Magenta / Rose Card) */}
          <ScrollReveal direction="up" delay={200} className="h-full">
            <div className="group relative h-full rounded-3xl p-6 sm:p-7 bg-white text-navy-midnight border border-slate-200/80 shadow-[0_15px_35px_-8px_rgba(210,29,97,0.12)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-8px_rgba(210,29,97,0.22)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top subtle hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D21D61] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top Row: Title & Top-Right Icon */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D21D61] block font-bold">
                      Stage 03
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-navy-midnight mt-0.5 leading-snug">
                      Bilateral Terms
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#FDF2F7] text-[#D21D61] border border-[#F9CBE0]/60 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[210px]">
                  Establishing client Git ownership, secure VDI enclaves, and direct commercial terms.
                </p>
              </div>

              {/* Bottom Row: Arrow + Interlocking Chevron Slabs (Zero balls) */}
              <div className="pt-8 flex items-end justify-between relative z-10">
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#D21D61] group-hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>

                {/* SVG Geometric Composition: Layered Chevron Diamond Slabs in Coral Magenta (No balls) */}
                <div className="absolute right-0 -bottom-1 w-28 h-24 pointer-events-none select-none">
                  <svg viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="card3PlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E73B50" />
                        <stop offset="100%" stopColor="#D21D61" />
                      </linearGradient>
                    </defs>

                    {/* Back Chevron Plate */}
                    <polygon points="46,26 82,14 100,34 64,46" fill="#FCE7F3" stroke="#D21D61" strokeWidth="1" strokeOpacity="0.4" />
                    <polygon points="46,26 64,46 64,54 46,34" fill="#D21D61" fillOpacity="0.3" />

                    {/* Middle Chevron Plate */}
                    <polygon points="36,44 72,32 90,52 54,64" fill="url(#card3PlateGrad)" fillOpacity="0.85" />
                    <polygon points="36,44 54,64 54,72 36,52" fill="#950B6D" fillOpacity="0.7" />
                    <polygon points="54,64 90,52 90,60 54,72" fill="#D21D61" />
                    {/* Linear Hatchings on Middle Plate */}
                    <line x1="48" y1="44" x2="66" y2="60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="56" y1="40" x2="74" y2="56" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />

                    {/* Front Chevron Plate */}
                    <polygon points="26,62 62,50 80,70 44,82" fill="url(#card3PlateGrad)" />
                    <polygon points="26,62 44,82 44,90 26,70" fill="#950B6D" />
                    <polygon points="44,82 80,70 80,78 44,90" fill="#D21D61" />
                    {/* Clean Chevron Angle Notch Line */}
                    <line x1="38" y1="62" x2="56" y2="78" stroke="#FFFFFF" strokeWidth="1.25" strokeOpacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 04: Sprint Governance (Imperial Coral Purple Card) */}
          <ScrollReveal direction="up" delay={250} className="h-full">
            <div className="group relative h-full rounded-3xl p-6 sm:p-7 bg-white text-navy-midnight border border-slate-200/80 shadow-[0_15px_35px_-8px_rgba(149,11,109,0.12)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-8px_rgba(149,11,109,0.22)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top subtle hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#950B6D] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top Row: Title & Top-Right Icon */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#950B6D] block font-bold">
                      Stage 04
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-extrabold text-navy-midnight mt-0.5 leading-snug">
                      Sprint Governance
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#FBF4FD] text-[#950B6D] border border-[#ECCAF5]/60 flex items-center justify-center shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[210px]">
                  Bi-weekly sprint demos, automated QA regression sign-offs, and daily SLA tracking.
                </p>
              </div>

              {/* Bottom Row: Arrow + Ascending Milestone Pedestals (Zero balls) */}
              <div className="pt-8 flex items-end justify-between relative z-10">
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#950B6D] group-hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>

                {/* SVG Geometric Composition: Ascending Isometric Milestone Pillars (No balls) */}
                <div className="absolute right-0 -bottom-1 w-28 h-24 pointer-events-none select-none">
                  <svg viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="card4PillarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D21D61" />
                        <stop offset="100%" stopColor="#950B6D" />
                      </linearGradient>
                    </defs>

                    {/* Foundation Plinth Slab */}
                    <polygon points="18,80 58,66 98,80 58,94" fill="#FBF4FD" stroke="#950B6D" strokeWidth="1" strokeOpacity="0.3" />

                    {/* Pillar 1 (Lowest Milestone - Sprint 1) */}
                    <polygon points="26,68 38,62 50,68 38,74" fill="#D21D61" />
                    <polygon points="26,68 38,74 38,86 26,80" fill="#950B6D" />
                    <polygon points="38,74 50,68 50,80 38,86" fill="#750654" />

                    {/* Pillar 2 (Mid Milestone - Sprint 2 / QA) */}
                    <polygon points="46,50 58,44 70,50 58,56" fill="#E73B50" />
                    <polygon points="46,50 58,56 58,82 46,76" fill="#D21D61" />
                    <polygon points="58,56 70,50 70,76 58,82" fill="#950B6D" />
                    {/* Tick Mark on Pillar 2 */}
                    <line x1="46" y1="62" x2="58" y2="68" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.5" />

                    {/* Pillar 3 (Tallest Milestone - Release Governance) */}
                    <polygon points="66,32 78,26 90,32 78,38" fill="#F98F33" />
                    <polygon points="66,32 78,38 78,78 66,72" fill="#F05E47" />
                    <polygon points="78,38 90,32 90,72 78,78" fill="url(#card4PillarGrad)" />
                    {/* Milestone Release Rings / Lines on Tall Pillar */}
                    <line x1="66" y1="46" x2="78" y2="52" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="78" y1="52" x2="90" y2="46" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="66" y1="60" x2="78" y2="66" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
                    <line x1="78" y1="66" x2="90" y2="60" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GlobalDeliveryModelSection;