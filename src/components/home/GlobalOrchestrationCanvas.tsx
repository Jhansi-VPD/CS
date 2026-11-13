'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Database, Server, HeartPulse, FileSpreadsheet, Lock } from 'lucide-react';

interface StreamData {
  id: 'it' | 'operations';
  label: string;
  demandTitle: string;
  demandCategory: string;
  demandSla: string;
  deliveryTitle: string;
  deliveryCategory: string;
  deliveryMetric: string;
  governanceProtocols: string[];
}

const streams: Record<'it' | 'operations', StreamData> = {
  it: {
    id: 'it',
    label: 'Enterprise IT Engineering',
    demandTitle: 'Cloud ERP & Digital Platform',
    demandCategory: 'US Enterprise Requirement',
    demandSla: 'Bi-Weekly Sprints & CI/CD',
    deliveryTitle: 'Hyderabad Dedicated Tech Pod',
    deliveryCategory: 'Tier-1 Engineering Center',
    deliveryMetric: '50+ Verified Engineers',
    governanceProtocols: [
      'Client Git Repositories',
      'Milestone-Based Escrow',
      'Direct Bilateral IP Rights'
    ]
  },
  operations: {
    id: 'operations',
    label: 'Non-IT Process Operations',
    demandTitle: 'Healthcare RCM & Clinical Coding',
    demandCategory: 'US Payer / Provider Requirement',
    demandSla: '99.2% Accuracy Guarantee',
    deliveryTitle: 'Certified Clinical Process Hub',
    deliveryCategory: 'HIPAA Audited Delivery Enclave',
    deliveryMetric: '24/7 Rotational Shift Desk',
    governanceProtocols: [
      'Encrypted VDI Workstations',
      'Continuous Audit Sampling',
      'Zero Direct Data Retention'
    ]
  }
};

export const GlobalOrchestrationCanvas: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'it' | 'operations'>('it');
  const current = streams[activeStream];

  return (
    <div className="w-full rounded-2xl sm:rounded-2xl bg-[#090D2A] border border-slate-800 shadow-2xl p-5 sm:p-7 relative overflow-hidden text-white transition-all">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-coral-bright/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-coral-purple/10 rounded-full blur-3xl pointer-events-none" />

      {/* Console Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/90 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase font-semibold">
            CROSS-BORDER DELIVERY ORCHESTRATION
          </span>
        </div>

        {/* Stream Toggle Switcher */}
        <div className="inline-flex p-1 rounded-lg bg-slate-900/90 border border-slate-700/80 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveStream('it')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeStream === 'it'
                ? 'bg-swift-gradient text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            IT Solutions
          </button>
          <button
            type="button"
            onClick={() => setActiveStream('operations')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeStream === 'operations'
                ? 'bg-swift-gradient text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Process Operations
          </button>
        </div>
      </div>

      {/* Orchestration Canvas Pipeline: Demand -> Hub -> Delivery */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 sm:gap-6 items-center my-6 relative z-10">
        {/* Left Block: International Enterprise Inflow */}
        <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono tracking-wider uppercase text-coral-orange font-bold">
              01 / Enterprise Demand
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              US / Global
            </span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-coral-50/10 text-coral-bright flex items-center justify-center shrink-0 mt-0.5 border border-coral-500/20">
              {activeStream === 'it' ? <Server className="w-5 h-5" /> : <HeartPulse className="w-5 h-5" />}
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {current.demandTitle}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {current.demandCategory}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-400">Execution Standard:</span>
            <span className="font-mono text-coral-orange font-medium">{current.demandSla}</span>
          </div>
        </div>

        {/* Center Node: The Coral Swift Core Hub */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center py-2 lg:py-0 text-center">
          <div className="relative group">
            {/* Concentric subtle radar pulse ring */}
            <div className="absolute -inset-3 rounded-full border border-coral-bright/30 animate-pulse pointer-events-none" />
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-coral-bright/50 shadow-glow-coral flex items-center justify-center p-3 relative z-10 transition-transform group-hover:scale-105">
              <img
                src="/assets/coral-swift-official-logo.png"
                alt="Coral Swift Platform"
                className="w-full h-full object-contain select-none"
              />
            </div>
          </div>

          <div className="mt-3">
            <span className="text-xs font-bold text-white tracking-wide block">
              Coral Swift
            </span>
            <span className="text-xs font-mono text-coral-orange uppercase tracking-wider block mt-0.5">
              Governed Matching Engine
            </span>
          </div>
        </div>

        {/* Right Block: Qualified Indian Delivery Center */}
        <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-bold">
              02 / Delivery Execution
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
              India Pods
            </span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
              {activeStream === 'it' ? <Database className="w-5 h-5" /> : <FileSpreadsheet className="w-5 h-5" />}
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {current.deliveryTitle}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {current.deliveryCategory}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-400">Audited Capacity:</span>
            <span className="font-mono text-emerald-400 font-medium">{current.deliveryMetric}</span>
          </div>
        </div>
      </div>

      {/* Governance Strip: Transparency & IP Guarantees */}
      <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300 relative z-10">
        {current.governanceProtocols.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800/70">
            <ShieldCheck className="w-3.5 h-3.5 text-coral-bright shrink-0" />
            <span className="text-xs font-medium text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

