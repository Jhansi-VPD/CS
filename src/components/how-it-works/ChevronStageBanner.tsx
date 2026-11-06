'use client';

import React, { useId } from 'react';
import { LucideIcon, ChevronDown, CheckCircle2, Users, ArrowRight } from 'lucide-react';

export interface StageTheme {
  gradient: string;
  bgSolid: string;
  textAccent: string;
  borderAccent: string;
  bgLight: string;
  iconColor: string;
}

export interface ChevronStageBannerProps {
  step: number;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  stakeholders: string[];
  nextStep: string;
  theme: StageTheme;
  icon: LucideIcon;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export const ChevronStageBanner: React.FC<ChevronStageBannerProps> = ({
  step,
  name,
  headline,
  description,
  deliverables,
  stakeholders,
  nextStep,
  theme,
  icon: Icon,
  isActive = false,
  onHover,
  onLeave
}) => {
  const drawerId = useId();
  const formattedStep = step < 10 ? `0${step}` : `${step}`;

  return (
    <div
      className="w-full my-3 sm:my-4 transition-all duration-300 group"
      onMouseEnter={onHover}
      onClick={onHover}
    >
      {/* Outer Row: Left Icon Column + Origami Fold & Chevron Ribbon */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* 1. Left Icon Container */}
        <div className="shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
          <div
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ease-out ${
              isActive
                ? 'scale-105 shadow-md brightness-105'
                : 'group-hover:scale-105 group-hover:shadow-sm'
            } ${theme.bgLight}`}
            style={{ color: theme.iconColor }}
          >
            <Icon
              className={`w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75] transition-transform duration-300 ease-out ${
                isActive ? 'rotate-6' : 'group-hover:rotate-6'
              }`}
            />
          </div>
        </div>

        {/* 2. Origami Ribbon Wrapper with 3D Drop Shadow */}
        <div className="flex-grow min-w-0 relative filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out">
          {/* Background Fold Shadow overlay for left 3D slant */}
          <div
            className="absolute -left-2 top-0 bottom-0 w-8 bg-black/20 -skew-x-[25deg] blur-xs -z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* The Colored Ribbon Body with Diagonal Left & Chevron Right Point */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            aria-controls={drawerId}
            onFocus={onHover}
            onBlur={(e) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                onLeave?.();
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (isActive) {
                  onLeave?.();
                } else {
                  onHover?.();
                }
              }
            }}
            className={`relative cursor-pointer transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white text-white py-3.5 sm:py-5 pl-7 sm:pl-10 pr-14 sm:pr-20 bg-gradient-to-r ${theme.gradient} ${
              isActive
                ? '-translate-y-0.5 brightness-105 shadow-md'
                : 'opacity-90 hover:opacity-100 hover:-translate-y-0.5 hover:brightness-105'
            }`}
            style={{
              clipPath:
                'polygon(28px 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 0% 100%)'
            }}
          >
            {/* Top-Left Origami Fold White Triangle Flap */}
            <div
              className="absolute left-0 top-0 w-7 h-full bg-white/20 backdrop-blur-xs pointer-events-none"
              style={{
                clipPath: 'polygon(0% 0%, 28px 0%, 0% 100%)'
              }}
            />

            <div className="flex items-center justify-between gap-4">
              {/* Text Info */}
              <div className="space-y-0.5 sm:space-y-1 min-w-0 pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-white/90 transition-colors">
                    Stage {formattedStep}
                  </span>
                  {headline && (
                    <>
                      <span className="hidden sm:inline-block text-white/60">•</span>
                      <span className="hidden sm:inline-block text-[11px] font-medium text-white/90 truncate">
                        {headline}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-sm sm:text-lg lg:text-xl font-heading font-extrabold text-white truncate leading-snug">
                  {name}
                </h3>

                {/* Description revealed smoothly on hover/active */}
                <div
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    isActive
                      ? 'max-h-24 opacity-100 translate-y-0 pt-0.5'
                      : 'max-h-0 opacity-0 -translate-y-1'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-white/95 line-clamp-2 max-w-2xl leading-relaxed font-normal">
                    {description}
                  </p>
                </div>
              </div>

              {/* Right Diamond Badge with Step Number */}
              <div className="shrink-0 flex items-center mr-1 sm:mr-3">
                <div
                  className={`relative w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-lg sm:rounded-xl shadow-lg rotate-45 flex items-center justify-center transition-all duration-300 ease-out ${
                    isActive ? 'scale-105 shadow-xl' : 'group-hover:scale-105'
                  }`}
                >
                  <span
                    className="font-extrabold text-xs sm:text-sm -rotate-45"
                    style={{ color: theme.iconColor }}
                  >
                    {formattedStep}
                  </span>
                </div>
              </div>
            </div>

            {/* Micro-hint */}
            <div className="absolute bottom-1 right-10 text-[9px] text-white/80 font-mono hidden md:flex items-center gap-1 transition-colors group-hover:text-white">
              <span>{isActive ? 'Details Active' : 'Hover to reveal'}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  isActive ? 'rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep-Dive Content (Deliverables, Stakeholders & Next Steps) - Revealed on Hover/Tap */}
      <div
        id={drawerId}
        aria-hidden={!isActive}
        className={`ml-14 sm:ml-22 mr-2 sm:mr-6 transition-all duration-300 ease-out overflow-hidden ${
          isActive
            ? 'max-h-[500px] opacity-100 mt-2.5 translate-y-0 pointer-events-auto'
            : 'max-h-0 opacity-0 mt-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* Left: Deliverables */}
            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Key Stage Deliverables:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Stakeholders & Next Stage */}
            <div className="md:col-span-5 space-y-3 md:border-l md:border-slate-200 md:pl-5 text-xs">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Stakeholders:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stakeholders.map((party, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] flex items-center gap-1"
                    >
                      <Users className="w-3 h-3 text-slate-400" />
                      <span>{party}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Subsequent Stage:</span>
                <span className="font-semibold text-xs flex items-center gap-1" style={{ color: theme.iconColor }}>
                  <span>{nextStep}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChevronStageBanner;