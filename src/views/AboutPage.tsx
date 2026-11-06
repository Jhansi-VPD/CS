'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';
import { Target, Compass, ArrowRight, Layers, BookOpen, HelpCircle } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Coral Swift - Purpose, Vision & Business Model';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/80 pt-10 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Coral Swift' }]} />
          
          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Company Overview
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              About Coral Swift
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              A US-oriented IT and Non-IT project solutions and partnership platform connecting international requirements with qualified delivery organizations in India and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Business Purpose */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-coral-bright">
                Core Positioning
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                Connecting Global Opportunities with Delivery Excellence
              </h2>
              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
                <p>
                  Finding the right delivery partner takes time and carries risk. Established delivery centers in India often lack direct access to international projects.
                </p>
                <p>
                  Coral Swift bridges this gap. We source projects, screen partners, and coordinate delivery from start to finish.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-navy-midnight font-bold block mb-1">Our Core Principle:</strong>
                Connect capable delivery partners with clearly defined opportunities, measurable execution standards, and transparent commercial arrangements.
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} className="lg:col-span-5 space-y-4">
              {/* Image Feature */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-soft border border-slate-200/80 bg-white group aspect-[16/10]">
                <img
                  src="/images/about-global-delivery.jpg"
                  alt="Global delivery coordination with partner locations"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/80 via-navy-midnight/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-coral-orange px-2 py-0.5 rounded-full bg-navy-surface border border-navy-border inline-block mb-1">
                    Delivery Model
                  </span>
                  <p className="text-xs font-bold">
                    Coordinated Delivery Across Partner Locations
                  </p>
                </div>
              </div>

              {/* Guiding Principles Card */}
              <Card variant="dark" className="p-5 sm:p-6 space-y-4 shadow-card-soft">
                <div className="flex items-center justify-between pb-2.5 border-b border-navy-border">
                  <Logo variant="horizontal" theme="dark" size="sm" asLink={false} />
                  <span className="text-[10px] font-bold text-coral-orange uppercase tracking-wider bg-navy-surface px-2.5 py-0.5 rounded-full border border-navy-border">
                    Guiding Principles
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="p-2 rounded-xl bg-navy-surface border border-navy-border">
                    <strong className="text-white block font-bold text-[11px] mb-0.5">Technology</strong>
                    <span className="text-[10px] text-slate-400 block leading-tight">Sound engineering practices.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-navy-surface border border-navy-border">
                    <strong className="text-white block font-bold text-[11px] mb-0.5">Operations</strong>
                    <span className="text-[10px] text-slate-400 block leading-tight">Quality checks and confidentiality.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-navy-surface border border-navy-border">
                    <strong className="text-white block font-bold text-[11px] mb-0.5">Partnerships</strong>
                    <span className="text-[10px] text-slate-400 block leading-tight">Merit-based qualification.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-navy-surface border border-navy-border">
                    <strong className="text-white block font-bold text-[11px] mb-0.5">Growth</strong>
                    <span className="text-[10px] text-slate-400 block leading-tight">Sustainable, long-term growth.</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF7F2]/60 via-slate-50 to-[#FAF5F9]/60 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Our Purpose"
              title="Our Vision &"
              highlightText="Mission"
              subtitle="What we aim to build and how we work."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
            <ScrollReveal direction="left" delay={100} className="h-full">
              <Card variant="white" className="p-7 sm:p-8 border-t-4 border-t-coral-orange space-y-3 hover-lift h-full">
                <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-orange flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-coral-orange">
                  Aspiration
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                  Corporate Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                  “To build a trusted international ecosystem where qualified technology and operations companies can access scalable project opportunities.”
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  Transparent commercial terms and clear qualification standards.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200} className="h-full">
              <Card variant="white" className="p-7 sm:p-8 border-t-4 border-t-coral-bright space-y-3 hover-lift h-full">
                <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-bright flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-coral-bright">
                  Execution
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-midnight">
                  Corporate Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                  “To enable disciplined project execution across IT and Non-IT domains through partner screening, structured onboarding, operational governance and outcome-based delivery.”
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  Delivered through partner screening, structured onboarding and operational governance.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Three Pillars / Our Approach */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              badge="Our Approach"
              title="How We Structure"
              highlightText="Delivery Value"
              subtitle="Three areas that connect international demand with qualified delivery."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal direction="up" delay={100} className="h-full">
              <div className="p-6 rounded-3xl border border-slate-200/90 bg-white space-y-2.5 hover-lift shadow-card-soft h-full">
                <div className="text-xs font-bold text-coral-bright uppercase tracking-wider font-mono">
                  Pillar 01
                </div>
                <h3 className="text-base font-bold text-navy-midnight">Project Solutions</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We help define requirements, scope projects and set milestones across IT and Non-IT work.
                </p>
                <Link href="/services" className="inline-flex tap-link items-center gap-1 text-xs font-bold text-coral-bright hover:underline pt-1">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} className="h-full">
              <div className="p-6 rounded-3xl border border-slate-200/90 bg-white space-y-2.5 hover-lift shadow-card-soft h-full">
                <div className="text-xs font-bold text-coral-magenta uppercase tracking-wider font-mono">
                  Pillar 02
                </div>
                <h3 className="text-base font-bold text-navy-midnight">Partner Ecosystem</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We screen delivery partners against proposed criteria for history, workforce and financial strength.
                </p>
                <Link href="/partnerships" className="inline-flex tap-link items-center gap-1 text-xs font-bold text-coral-magenta hover:underline pt-1">
                  <span>See Partner Pathways</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} className="h-full">
              <div className="p-6 rounded-3xl border border-slate-200/90 bg-white space-y-2.5 hover-lift shadow-card-soft h-full">
                <div className="text-xs font-bold text-coral-purple uppercase tracking-wider font-mono">
                  Pillar 03
                </div>
                <h3 className="text-base font-bold text-navy-midnight">Governance & Growth</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We agree commercial terms, monitor delivery and report on quality for long-term partnerships.
                </p>
                <Link href="/how-it-works" className="inline-flex tap-link items-center gap-1 text-xs font-bold text-coral-purple hover:underline pt-1">
                  <span>See How It Works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Connected Resources Row */}
          <ScrollReveal direction="up" delay={250}>
            <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-sm font-bold text-navy-midnight">Explore More</h4>
                <p className="text-xs text-slate-500">Our delivery process, insights and frequently asked questions.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
                <Link href="/how-it-works" className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-navy-midnight inline-flex items-center gap-1.5 transition-colors">
                  <Layers className="w-3.5 h-3.5 text-coral-bright" />
                  <span>How It Works</span>
                </Link>
                <Link href="/insights" className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-navy-midnight inline-flex items-center gap-1.5 transition-colors">
                  <BookOpen className="w-3.5 h-3.5 text-coral-orange" />
                  <span>Insights</span>
                </Link>
                <Link href="/faq" className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-navy-midnight inline-flex items-center gap-1.5 transition-colors">
                  <HelpCircle className="w-3.5 h-3.5 text-coral-purple" />
                  <span>FAQ</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-[#080B2E] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-coral-bright/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-coral-purple/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold">
              Ready to Work With Us?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Discuss a project, or apply to become a delivery partner.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button to="/services" variant="primary" size="md">
                View Solutions
              </Button>
              <Button to="/contact" variant="white" size="md">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
