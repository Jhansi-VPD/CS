import React from 'react';
import { Globe2, ShieldCheck, Lock, GitBranch, CheckCircle2 } from 'lucide-react';

export const HeroEnterpriseVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Soft Depth Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-coral-orange/15 via-coral-rose/10 to-coral-purple/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Architectural Card */}
      <div className="relative rounded-3xl bg-[#080B2E] border border-slate-700/70 shadow-2xl overflow-hidden text-white transition-all duration-300 hover:border-slate-600/80">
        {/* Top Photographic Layer with Dark Glass Overlay */}
        <div className="relative aspect-[16/10] overflow-hidden group">
          <img
            src="/images/hero-enterprise-collab.jpg"
            alt="International Enterprise Technology and Operations Collaboration"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          {/* Subtle gradient vignette to blend image with card background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B2E] via-[#080B2E]/50 to-transparent" />

          {/* Top Status Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080B2E]/90 border border-slate-700/80 text-[10px] font-mono font-semibold uppercase tracking-wider text-coral-orange backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Bilateral Model</span>
            </span>
          </div>

          {/* Central Global Route Arc SVG */}
          <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
            <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-md opacity-85">
              <defs>
                <linearGradient id="heroArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F98F33" />
                  <stop offset="50%" stopColor="#F05E47" />
                  <stop offset="100%" stopColor="#D21D61" />
                </linearGradient>
                <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connecting Global Arc */}
              <path
                d="M 50 110 Q 200 15 350 110"
                stroke="url(#heroArcGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                filter="url(#arcGlow)"
              />

              {/* US Demand Node */}
              <circle cx="50" cy="110" r="6" fill="#F98F33" />
              <circle cx="50" cy="110" r="12" stroke="#F98F33" strokeWidth="1.5" strokeOpacity="0.5" />

              {/* Central Engine Node (Coral Swift) */}
              <circle cx="200" cy="62" r="7" fill="#F05E47" />
              <circle cx="200" cy="62" r="14" stroke="#F05E47" strokeWidth="1.5" strokeOpacity="0.4" />

              {/* Hyderabad Pod Node */}
              <circle cx="350" cy="110" r="6" fill="#D21D61" />
              <circle cx="350" cy="110" r="12" stroke="#D21D61" strokeWidth="1.5" strokeOpacity="0.5" />
            </svg>
          </div>

          {/* Floating Lower Node Summary */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-2xl bg-[#080B2E]/92 border border-slate-700/80 backdrop-blur-md flex items-center justify-between text-xs shadow-lg">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center p-1.5 shrink-0">
                <img
                  src="/assets/coral-swift-official-logo.png"
                  alt="Coral Swift"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Cross-Border Delivery Bridge
                </span>
                <span className="font-bold text-white text-xs sm:text-sm">
                  US Enterprise Demand ⟷ Hyderabad Hubs
                </span>
              </div>
            </div>
            <Globe2 className="w-4 h-4 text-coral-orange shrink-0 hidden sm:block" />
          </div>
        </div>

        {/* Lower Telemetry Assurance Grid */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-[#080B2E] to-[#0A0F38] border-t border-slate-800 grid grid-cols-3 gap-2.5 text-center">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] space-y-1">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">Governance</span>
            <span className="font-bold text-white text-xs sm:text-xs block">Clear Scope</span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] space-y-1">
            <span className="text-[10px] font-mono text-coral-orange block uppercase">Delivery Network</span>
            <span className="font-bold text-white text-xs sm:text-xs block">Hyderabad Partners</span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 block uppercase">Ownership</span>
            <span className="font-bold text-white text-xs sm:text-xs block">Client Ownership</span>
          </div>
        </div>
      </div>
    </div>
  );
};

