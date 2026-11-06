'use client';

import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { globalDeliverySteps, sixStageEvaluation } from '../data/partnerCriteriaData';
import { 
  CheckCircle2, 
  Megaphone, 
  TrendingUp, 
  Handshake, 
  Wallet, 
  Layers, 
  Award,
  FileText,
  ShieldCheck,
  Cpu,
  FileSignature,
  Rocket
} from 'lucide-react';
import { ChevronStageBanner, StageTheme } from '../components/how-it-works/ChevronStageBanner';

const stageThemes: StageTheme[] = [
  {
    gradient: 'from-[#F98F33] to-[#F05E47]',
    bgSolid: '#F98F33',
    textAccent: 'text-[#F98F33]',
    borderAccent: 'border-[#F98F33]',
    bgLight: 'bg-[#F98F33]/15',
    iconColor: '#F98F33'
  },
  {
    gradient: 'from-[#F05E47] to-[#E73B50]',
    bgSolid: '#F05E47',
    textAccent: 'text-[#F05E47]',
    borderAccent: 'border-[#F05E47]',
    bgLight: 'bg-[#F05E47]/15',
    iconColor: '#F05E47'
  },
  {
    gradient: 'from-[#E73B50] to-[#D21D61]',
    bgSolid: '#E73B50',
    textAccent: 'text-[#E73B50]',
    borderAccent: 'border-[#E73B50]',
    bgLight: 'bg-[#E73B50]/15',
    iconColor: '#E73B50'
  },
  {
    gradient: 'from-[#D21D61] to-[#950B6D]',
    bgSolid: '#D21D61',
    textAccent: 'text-[#D21D61]',
    borderAccent: 'border-[#D21D61]',
    bgLight: 'bg-[#D21D61]/15',
    iconColor: '#D21D61'
  },
  {
    gradient: 'from-[#950B6D] to-[#6A0DAD]',
    bgSolid: '#950B6D',
    textAccent: 'text-[#950B6D]',
    borderAccent: 'border-[#950B6D]',
    bgLight: 'bg-[#950B6D]/15',
    iconColor: '#950B6D'
  },
  {
    gradient: 'from-[#6A0DAD] to-[#25294D]',
    bgSolid: '#6A0DAD',
    textAccent: 'text-[#6A0DAD]',
    borderAccent: 'border-[#6A0DAD]',
    bgLight: 'bg-[#6A0DAD]/15',
    iconColor: '#6A0DAD'
  }
];

const clientIcons = [Megaphone, TrendingUp, Handshake, Wallet, Layers, Award];
const partnerIcons = [FileText, ShieldCheck, Cpu, FileSignature, Rocket, TrendingUp];

export const HowItWorksPage: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'client' | 'partner'>('client');
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'How It Works | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  // Reset active stage when switching workflows
  useEffect(() => {
    setActiveStageIndex(null);
  }, [activeWorkflow]);

  const stepsToDisplay = activeWorkflow === 'client' ? globalDeliverySteps : sixStageEvaluation;
  const currentIcons = activeWorkflow === 'client' ? clientIcons : partnerIcons;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'How It Works' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              How It Works
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              How Coral Swift Works
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Two clear paths, each in six stages: commission a project or join as a delivery partner.
            </p>
          </div>

          {/* Workflow Toggle */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-slate-200/70 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveWorkflow('client')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeWorkflow === 'client'
                  ? 'bg-navy-midnight text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-midnight'
              }`}
            >
              Client Delivery (6 Stages)
            </button>
            <button
              type="button"
              onClick={() => setActiveWorkflow('partner')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeWorkflow === 'partner'
                  ? 'bg-navy-midnight text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-midnight'
              }`}
            >
              Partner Evaluation (6 Stages)
            </button>
          </div>
        </div>
      </section>

      {/* Main Process Timeline */}
      <section className="py-16 sm:py-20 bg-[#FBFBFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Workflow Feature Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card-soft mb-12 animate-fadeIn">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-bright bg-coral-50 px-2.5 py-1 rounded-full border border-coral-200/60 inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Milestone Gates</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                Clear Stages, Predictable Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every stage has a clear checkpoint: scoping, partner due diligence, milestone delivery, and sign-off.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Requirement Discovery', 'Partner Due Diligence', 'Scoping & Contracting', 'Delivery & QA'].map((item) => (
                  <span key={item} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-navy-midnight">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white group aspect-[16/10]">
                <img
                  src="/images/how-it-works-agile.jpg"
                  alt="Project delivery stages and milestone reviews"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-semibold flex items-center justify-between">
                  <span>Sprint Delivery</span>
                  <span className="text-coral-orange font-mono">Stages 01 – 06</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infographic Chevron Ribbon Stage List (Hover/Tap Interactive Reveal) */}
          <div
            className="space-y-4 sm:space-y-6"
            onMouseLeave={() => setActiveStageIndex(null)}
          >
            {stepsToDisplay.map((step, idx) => (
              <div key={`${activeWorkflow}-${step.step}`} className="animate-fadeIn">
                <ChevronStageBanner
                  step={step.step}
                  name={step.name}
                  headline={step.headline}
                  description={step.description}
                  deliverables={step.deliverables}
                  stakeholders={step.stakeholders}
                  nextStep={step.nextStep}
                  theme={stageThemes[idx % stageThemes.length]}
                  icon={currentIcons[idx % currentIcons.length]}
                  isActive={activeStageIndex === idx}
                  onHover={() => setActiveStageIndex(idx)}
                  onLeave={() => setActiveStageIndex(null)}
                />
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-16 text-center space-y-4 animate-fadeIn">
            <h3 className="text-xl font-heading font-bold text-navy-midnight">
              Ready to Get Started?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact?type=project" variant="primary" size="md">
                Submit Project Requirement
              </Button>
              <Button to="/partnerships#apply" variant="secondary" size="md">
                Apply as a Delivery Partner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
