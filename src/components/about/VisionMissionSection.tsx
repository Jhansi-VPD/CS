import React from 'react';
import { Compass } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const missionPillars = ['Partner screening', 'Structured onboarding', 'Delivery governance'];

export const VisionMissionSection: React.FC = () => (
  <section className="bg-gradient-to-br from-[#FCEDEB] via-[#F5EFF8] to-[#FFF7F2] border-b border-slate-200/60 py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="up">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-coral-bright" aria-hidden="true" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-coral-bright">
            Our Purpose
          </span>
        </div>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-midnight tracking-tight">
          Vision & Mission
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-10">
        {/* Vision — large light editorial block with network arcs */}
        <ScrollReveal direction="left" className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-card-soft p-7 sm:p-10">
            <svg
              aria-hidden="true"
              className="absolute -bottom-10 -right-6 w-64 h-64 text-coral-orange"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="150" cy="150" r="60" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="3 8" />
              <circle cx="150" cy="150" r="95" stroke="#950B6D" strokeOpacity="0.14" strokeWidth="1.5" strokeDasharray="3 8" />
              <circle cx="150" cy="150" r="130" stroke="#F05E47" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 8" />
              <circle cx="90" cy="150" r="3" fill="#F98F33" />
              <circle cx="150" cy="55" r="3" fill="#D21D61" />
              <circle cx="205" cy="118" r="3" fill="#950B6D" />
            </svg>

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-coral-orange">
                <Compass className="w-3.5 h-3.5" />
                Vision
              </span>
              <p className="mt-5 font-heading text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-navy-midnight leading-snug tracking-tight">
                “A trusted international ecosystem where qualified technology and operations companies can access scalable project opportunities.”
              </p>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Anchored in transparent commercial terms and clear qualification standards — so collaboration starts from a shared, honest baseline.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission — offset navy editorial panel, deliberately different treatment */}
        <ScrollReveal direction="right" delay={140} className="lg:col-span-5 lg:mt-14">
          <div className="relative h-full overflow-hidden rounded-3xl bg-navy-midnight shadow-premium p-7 sm:p-9">
            <div
              className="absolute -top-16 -right-16 w-56 h-56 bg-coral-rose/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-coral-orange">
                Mission
              </span>
              <p className="mt-5 font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                Disciplined project execution across IT and Non-IT domains.
              </p>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Delivered through partner screening, structured onboarding, operational governance and outcome-based delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {missionPillars.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg bg-navy-surface border border-navy-border text-[11px] font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
