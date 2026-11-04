import React from 'react';
import { Globe2, ShieldCheck } from 'lucide-react';

export const SimpleHeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-coral-orange/15 via-coral-rose/10 to-coral-purple/15 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Clean Architectural Card */}
      <div className="rounded-3xl bg-[#080C26] border border-slate-700/80 shadow-2xl overflow-hidden text-white transition-all">
        {/* Top Photographic Window */}
        <div className="relative aspect-[16/10] overflow-hidden group">
          <img
            src="/images/hero-enterprise-collab.jpg"
            alt="International Enterprise Technology and Operations Collaboration"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C26] via-[#080C26]/40 to-transparent" />

          {/* Simple Top Status Tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[10px] font-mono font-semibold uppercase tracking-wider text-coral-orange backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Bilateral Model</span>
            </span>
          </div>

          {/* Floating Minimal Route Pill */}
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-1.5 shrink-0">
                <img
                  src="/assets/coral-swift-official-logo.png"
                  alt="Coral Swift"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
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

        {/* Bottom Clean Capability & Governance Strip */}
        <div className="p-5 sm:p-6 space-y-4">
        </div>
      </div>
    </div>
  );
};

export default SimpleHeroVisual;
