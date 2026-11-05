'use client';

import React, { useState } from 'react';
import { Server, Code, HeartPulse, Landmark, ShieldCheck, CheckCircle2, Cpu, ArrowRight, Sparkles } from 'lucide-react';

interface NodeData {
  id: string;
  side: 'demand' | 'delivery';
  label: string;
  category: string;
  metric: string;
  detail: string;
  icon: React.ElementType;
  coords: { x: number; y: number };
}

const demandNodes: NodeData[] = [
  {
    id: 'd1',
    side: 'demand',
    label: 'Enterprise ERP SOW',
    category: 'US Corporate Demand',
    metric: 'SAP & Oracle Cloud',
    detail: 'Complete milestone scoping with defined deliverables & sprint cadence.',
    icon: Server,
    coords: { x: 120, y: 80 }
  },
  {
    id: 'd2',
    side: 'demand',
    label: 'Full-Stack Web & Cloud',
    category: 'Product Engineering',
    metric: 'React, Node, AWS CI/CD',
    detail: 'Scalable cloud infrastructure & microservices architecture.',
    icon: Code,
    coords: { x: 90, y: 200 }
  },
  {
    id: 'd3',
    side: 'demand',
    label: 'Healthcare Coding & RCM',
    category: 'Clinical Operations',
    metric: 'ICD-10 / Prior Auth',
    detail: 'HIPAA-alignable revenue cycle operations & medical billing reconciliation.',
    icon: HeartPulse,
    coords: { x: 100, y: 320 }
  },
  {
    id: 'd4',
    side: 'demand',
    label: 'Banking KYC & Mortgage',
    category: 'Financial Reviews',
    metric: 'AML / Title Review',
    detail: 'Disciplined loan file packaging & compliance screening checklists.',
    icon: Landmark,
    coords: { x: 130, y: 440 }
  }
];

const deliveryNodes: NodeData[] = [
  {
    id: 'p1',
    side: 'delivery',
    label: 'Hyderabad Delivery Hub',
    category: 'Tier-1 Partner Center',
    metric: '3+ Yr Audited Baseline',
    detail: 'Established Indian operations center with verified delivery governance.',
    icon: ShieldCheck,
    coords: { x: 640, y: 80 }
  },
  {
    id: 'p2',
    side: 'delivery',
    label: 'Agile Engineering Pods',
    category: 'Software Capability',
    metric: '50+ Workforce Capacity',
    detail: 'Pre-vetted developers, daily standups, and bi-weekly sprint demos.',
    icon: Cpu,
    coords: { x: 670, y: 200 }
  },
  {
    id: 'p3',
    side: 'delivery',
    label: 'HIPAA Clinical Pods',
    category: 'Healthcare BPO',
    metric: '99%+ Accuracy SLA',
    detail: 'Certified medical coders working via secured VDI infrastructure.',
    icon: CheckCircle2,
    coords: { x: 660, y: 320 }
  },
  {
    id: 'p4',
    side: 'delivery',
    label: 'High-Volume Shift Desk',
    category: 'Process Operations',
    metric: '24/7 Shift Coverage',
    detail: 'Double-key verification & structured quality sampling controls.',
    icon: Sparkles,
    coords: { x: 630, y: 440 }
  }
];

export const CoralSwiftNetworkVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);

  // Center Core position
  const corePos = { x: 380, y: 260 };

  return (
    <div className="relative w-full max-w-3xl mx-auto select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral-orange/10 via-coral-bright/15 to-coral-purple/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Glass Chassis */}
      <div className="relative rounded-3xl bg-navy-midnight/95 border border-navy-border shadow-2xl p-4 sm:p-6 overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

        {/* Header Telemetry Bar */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-navy-border/80 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white tracking-wide">CORAL SWIFT ORCHESTRATION NEXUS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>MODEL: GLOBAL-TO-LOCAL</span>
            <span className="text-coral-orange font-bold">STATUS: GOVERNED</span>
          </div>
        </div>

        {/* Desktop / Tablet SVG Network Visual */}
        <div className="relative w-full aspect-[760/520] hidden sm:block">
          <svg
            viewBox="0 0 760 520"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Coral Ribbon Linear Gradients */}
              <linearGradient id="nexusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F98F33" />
                <stop offset="35%" stopColor="#F05E47" />
                <stop offset="70%" stopColor="#E73B50" />
                <stop offset="100%" stopColor="#950B6D" />
              </linearGradient>

              <linearGradient id="leftPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F98F33" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F05E47" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="rightPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E73B50" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#950B6D" stopOpacity="0.4" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Orbiting Concentric Calibration Rings */}
            <circle
              cx={corePos.x}
              cy={corePos.y}
              r="150"
              stroke="#F05E47"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="animate-spin-slow origin-center"
              style={{ transformOrigin: `${corePos.x}px ${corePos.y}px` }}
            />
            <circle
              cx={corePos.x}
              cy={corePos.y}
              r="110"
              stroke="#F98F33"
              strokeOpacity="0.18"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="animate-spin origin-center"
              style={{ transformOrigin: `${corePos.x}px ${corePos.y}px`, animationDuration: '40s' }}
            />
            <circle
              cx={corePos.x}
              cy={corePos.y}
              r="75"
              stroke="url(#nexusGradient)"
              strokeOpacity="0.3"
              strokeWidth="2"
            />

            {/* Connection Pathways: Demand (Left) -> Core */}
            {demandNodes.map((node) => {
              const isActive = activeNode?.id === node.id;
              const pathD = `M ${node.coords.x + 85} ${node.coords.y} C ${node.coords.x + 180} ${node.coords.y}, ${corePos.x - 140} ${corePos.y}, ${corePos.x - 55} ${corePos.y}`;

              return (
                <g key={`path-${node.id}`}>
                  {/* Background path line */}
                  <path
                    d={pathD}
                    stroke={isActive ? '#F05E47' : 'url(#leftPathGrad)'}
                    strokeWidth={isActive ? 3 : 1.5}
                    strokeOpacity={isActive ? 1 : 0.45}
                    filter={isActive ? 'url(#glow)' : undefined}
                    className="transition-all duration-300"
                  />
                  {/* Flowing animated light pulse */}
                  <path
                    d={pathD}
                    stroke="#FFFFFF"
                    strokeWidth={isActive ? 3 : 2}
                    strokeDasharray="10 120"
                    strokeDashoffset="100"
                    className="animate-pulse"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="130"
                      to="0"
                      dur={isActive ? '1.5s' : '3s'}
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              );
            })}

            {/* Connection Pathways: Core -> Delivery (Right) */}
            {deliveryNodes.map((node) => {
              const isActive = activeNode?.id === node.id;
              const pathD = `M ${corePos.x + 55} ${corePos.y} C ${corePos.x + 140} ${corePos.y}, ${node.coords.x - 180} ${node.coords.y}, ${node.coords.x - 85} ${node.coords.y}`;

              return (
                <g key={`path-${node.id}`}>
                  {/* Background path line */}
                  <path
                    d={pathD}
                    stroke={isActive ? '#E73B50' : 'url(#rightPathGrad)'}
                    strokeWidth={isActive ? 3 : 1.5}
                    strokeOpacity={isActive ? 1 : 0.45}
                    filter={isActive ? 'url(#glow)' : undefined}
                    className="transition-all duration-300"
                  />
                  {/* Flowing animated light pulse */}
                  <path
                    d={pathD}
                    stroke="#F98F33"
                    strokeWidth={isActive ? 3 : 2}
                    strokeDasharray="10 120"
                    strokeDashoffset="0"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-130"
                      dur={isActive ? '1.5s' : '3s'}
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              );
            })}
          </svg>

          {/* Central Coral Swift Core Hub */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer group"
            style={{ left: `${(corePos.x / 760) * 100}%`, top: `${(corePos.y / 520) * 100}%` }}
          >
            {/* Core Circular Chassis */}
            <div className="relative w-24 h-24 rounded-full bg-navy-surface border-2 border-coral-bright/80 shadow-glow-coral flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-coral-purple/30 via-coral-rose/20 to-coral-orange/20 animate-spin-slow" />
              {/* Exact official emblem */}
              <img
                src="/assets/coral-swift-official-logo.png"
                alt="Coral Swift Core"
                className="w-14 h-14 object-contain relative z-10 select-none drop-shadow-md"
              />
            </div>

            {/* Core Label */}
            <div className="mt-2 text-center">
              <span className="text-xs font-bold text-white tracking-wider block">
                CORAL SWIFT
              </span>
              <span className="text-[9px] font-mono text-coral-orange font-bold uppercase tracking-widest bg-navy-midnight/90 px-2 py-0.5 rounded-full border border-navy-border inline-block mt-0.5">
                Governance Engine
              </span>
            </div>
          </div>

          {/* Demand Nodes (Left Column) */}
          {demandNodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode?.id === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                className={`absolute -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105 z-30' : 'hover:scale-102 z-20'
                }`}
                style={{
                  left: `${((node.coords.x - 70) / 760) * 100}%`,
                  top: `${(node.coords.y / 520) * 100}%`,
                  width: '170px'
                }}
              >
                <div
                  className={`p-3 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-navy-surface border-coral-bright shadow-glow-coral'
                      : 'bg-navy-surface/85 hover:bg-navy-surface border-navy-border hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-coral-50/15 text-coral-orange flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono text-coral-orange uppercase tracking-wider line-clamp-1">
                      {node.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {node.label}
                  </h4>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 border-t border-navy-border/60 pt-1">
                    <span className="font-semibold text-slate-300">{node.metric}</span>
                    <span className="text-coral-bright font-bold">→</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Delivery Nodes (Right Column) */}
          {deliveryNodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode?.id === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                className={`absolute -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105 z-30' : 'hover:scale-102 z-20'
                }`}
                style={{
                  left: `${((node.coords.x - 90) / 760) * 100}%`,
                  top: `${(node.coords.y / 520) * 100}%`,
                  width: '180px'
                }}
              >
                <div
                  className={`p-3 rounded-2xl border transition-all ${
                    isActive
                      ? 'bg-navy-surface border-coral-rose shadow-glow-coral'
                      : 'bg-navy-surface/85 hover:bg-navy-surface border-navy-border hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-coral-50/15 text-coral-rose flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono text-coral-rose uppercase tracking-wider line-clamp-1">
                      {node.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {node.label}
                  </h4>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400 border-t border-navy-border/60 pt-1">
                    <span className="font-semibold text-slate-300">{node.metric}</span>
                    <span className="text-emerald-400 font-bold">✓</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Simplified Interactive Architecture (stacked) */}
        <div className="block sm:hidden space-y-4 py-2">
          {/* Mobile Center Engine */}
          <div className="p-4 rounded-2xl bg-navy-surface border border-coral-bright/60 flex items-center gap-3.5 shadow-glow-coral">
            <div className="w-12 h-12 rounded-xl bg-navy-midnight border border-navy-border flex items-center justify-center p-1.5 shrink-0">
              <img
                src="/assets/coral-swift-official-logo.png"
                alt="Coral Swift Core"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-coral-orange uppercase tracking-wider font-bold">
                Governance & Allocation
              </span>
              <h4 className="text-sm font-bold text-white">Coral Swift Platform</h4>
              <p className="text-[11px] text-slate-300">
                Orchestrating US & international SOWs with verified Indian delivery pods.
              </p>
            </div>
          </div>

          {/* Quick Dual Cards */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-navy-surface/80 border border-navy-border space-y-1">
              <span className="text-[10px] font-mono text-coral-orange uppercase tracking-wider block">
                01. Enterprise Demand
              </span>
              <strong className="text-white text-xs block leading-snug">US IT & Ops SOWs</strong>
              <p className="text-[10px] text-slate-400">ERP, Cloud, Healthcare RCM & KYC</p>
            </div>
            <div className="p-3 rounded-xl bg-navy-surface/80 border border-navy-border space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                02. Qualified Delivery
              </span>
              <strong className="text-white text-xs block leading-snug">Hyderabad Ecosystem</strong>
              <p className="text-[10px] text-slate-400">Pre-screened 50+ FTE Centers</p>
            </div>
          </div>
        </div>

        {/* Interactive Inspection Tooltip Bar */}
        <div className="mt-3 pt-3 border-t border-navy-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-[11px]">Hover/tap any node to inspect:</span>
            {activeNode ? (
              <span className="text-white font-semibold bg-navy-surface px-2 py-0.5 rounded text-[11px] border border-coral-bright/40">
                {activeNode.label} — <span className="text-coral-orange">{activeNode.detail}</span>
              </span>
            ) : (
              <span className="text-slate-500 italic text-[11px]">
                Showing active cross-border pipeline & delivery governance
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400 font-mono self-end sm:self-auto">
            100% IP ASSIGNMENT • MILESTONE GATES
          </span>
        </div>
      </div>
    </div>
  );
};
