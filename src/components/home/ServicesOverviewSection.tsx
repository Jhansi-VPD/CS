import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Terminal,
  Cpu,
  FileCheck,
  ShieldCheck,
  HeartPulse,
  Landmark,
  FileText,
  Clock,
  Layers,
  CheckCircle2,
  Building2,
  Lock,
  Users
} from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <ScrollReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-bright mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral-bright" />
              <span>WHAT WE DELIVER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-midnight tracking-tight leading-tight">
              Three Capabilities.{' '}
              <span className="swift-gradient-text">One Connected Ecosystem.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              From enterprise technology to business operations and governed partnerships, we connect the capabilities that help organizations move forward.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} className="shrink-0">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold text-coral-bright hover:text-coral-magenta transition-colors"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Asymmetric Editorial Layout: IT (65%) & Non-IT (35%) */}
        <div className="space-y-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 2. IT Solutions – Featured Panel (~65% width on desktop) */}
            <ScrollReveal
              direction="left"
              delay={100}
              className="lg:col-span-8 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-card-soft hover-lift overflow-hidden group transition-all duration-300"
            >
              <div>
                {/* Large Premium Enterprise Technology Image */}
                <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/solutions-it-engineering.jpg"
                    alt="Enterprise Technology and Custom Software Engineering"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/40 to-transparent" />

                  {/* Eyebrow Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-navy-surface/90 text-coral-bright border border-navy-border text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                      Featured Solution
                    </span>
                  </div>

                  {/* Title & Description Overlay on Bottom of Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-10">
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white leading-snug">
                      IT Solutions & Custom Software
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-mono mt-1">
                      Full-Lifecycle Engineering Pods • Milestone-Governed Sprints
                    </p>
                  </div>
                </div>

                {/* Content & 4 Concise Capability Labels */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                    Deploying agile engineering teams for enterprise ERP implementations, scalable cloud applications, automated regression testing, and client-dedicated source repositories.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-bright/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center shrink-0">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        SAP & Oracle ERP
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-orange/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-orange flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        React & Node.js SaaS
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-magenta/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-magenta flex items-center justify-center shrink-0">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        Automated QA & CI/CD
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-purple/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-purple flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        Client-Owned Repositories
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <Button
                  to="/services/it-solutions"
                  variant="outline"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  className="font-bold border-slate-300 hover:border-coral-bright"
                >
                  Explore IT Solutions
                </Button>
              </div>
            </ScrollReveal>

            {/* 3. Non-IT Operations – Secondary Panel (~35% width on desktop) */}
            <ScrollReveal
              direction="right"
              delay={150}
              className="lg:col-span-4 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-card-soft hover-lift overflow-hidden group transition-all duration-300"
            >
              <div>
                {/* Visually Distinct Professional Operations Image */}
                <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/solutions-non-it-operations.jpg"
                    alt="Regulated Business Process Operations"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/40 to-transparent" />

                  {/* Eyebrow Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-navy-surface/90 text-coral-orange border border-navy-border text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                      Operations Desk
                    </span>
                  </div>

                  {/* Title & Description Overlay on Bottom of Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-10">
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white leading-snug">
                      Non-IT & Business Operations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-mono mt-1">
                      High-Throughput Process Desks
                    </p>
                  </div>
                </div>

                {/* Content & 4 Concise Capability Labels */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Executing high-volume, regulated operational workflows with specialized talent, rigorous quality controls, and daily SLA compliance.
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-bright/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center shrink-0">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        Medical Coding
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-orange/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-orange flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        Banking KYC & AML
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-magenta/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-magenta flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        Document Processing
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 group/chip hover:border-coral-purple/40 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-coral-50 text-coral-purple flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-navy-midnight">
                        Operational Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <Button
                  to="/services/non-it-solutions"
                  variant="outline"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  className="font-bold border-slate-300 hover:border-coral-orange"
                >
                  Explore Operations
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* 4. Delivery Partnerships – Full-Width Feature Banner (Deep Midnight Navy) */}
          <ScrollReveal direction="up" delay={200}>
            <div className="relative rounded-3xl bg-[#080B2E] border border-slate-800/90 p-7 sm:p-9 lg:p-12 text-white overflow-hidden shadow-2xl group hover-lift transition-all duration-300">
              {/* Subtle top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-orange via-coral-bright to-coral-magenta" />

              {/* Soft Ambient Depth Glows */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-coral-bright/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-coral-purple/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Side: Editorial Proposition & CTA */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-coral-orange">
                    <Layers className="w-3.5 h-3.5 text-coral-orange" />
                    <span>DELIVERY PARTNERSHIPS</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-3xl font-heading font-extrabold text-white leading-tight">
                    Built on Governance.{' '}
                    <span className="swift-gradient-text block sm:inline">Designed for Collaboration.</span>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                    We connect qualified Indian delivery centers with international enterprise demand through structured bilateral agreements, vetted capabilities, and clear milestone execution.
                  </p>

                  <div className="pt-2">
                    <Button
                      to="/partnerships"
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      className="font-bold shadow-xs hover:shadow-md"
                    >
                      Explore Partnerships
                    </Button>
                  </div>
                </div>

                {/* Right Side: 4 Concise Highlights */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-coral-bright/15 text-coral-bright flex items-center justify-center">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Delivery Center Assessments
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Objective evaluation of team depth, operational tenure, and technical competence.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-coral-orange/15 text-coral-orange flex items-center justify-center">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Structured Commercial Terms
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Milestone-defined SOWs establishing clear deliverables and bilateral accountability.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-coral-magenta/15 text-coral-magenta flex items-center justify-center">
                      <Lock className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Dedicated Infrastructure
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Secure, client-specific virtual and physical environments supporting confidentiality.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-coral-purple/15 text-coral-purple flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      Direct Partner Engagement
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Direct technical alignment and communication channels between clients and delivery pods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
