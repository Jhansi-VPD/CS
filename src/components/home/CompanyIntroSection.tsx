import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';

const ideas = [
  {
    index: '01',
    title: 'IT & Non-IT Capabilities',
    desc: 'Software, ERP, healthcare processes, banking operations and back-office support.',
    accent: '#F98F33',
  },
  {
    index: '02',
    title: 'Partner Assessment',
    desc: 'Reviewing operating history, workforce capabilities and financial strength.',
    accent: '#E73B50',
  },
  {
    index: '03',
    title: 'Delivery Governance',
    desc: 'Aligning project scope, quality expectations and reporting before work begins.',
    accent: '#950B6D',
  },
];

export const CompanyIntroSection: React.FC = () => {
  return (
    <section className="bg-[#F5F6FA] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial label */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-coral-bright" aria-hidden="true" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.24em] text-coral-bright">
              About Coral Swift
            </span>
          </div>
        </ScrollReveal>

        {/* Manifesto heading */}
        <ScrollReveal direction="up" delay={80}>
          <h2 className="mt-6 max-w-4xl font-heading text-3xl font-extrabold tracking-tight leading-[1.16] text-navy-midnight sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]">
            Where Business Needs Meet <span className="swift-gradient-text">Delivery Capability</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={140}>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-slate-600 sm:text-lg">
            Coral Swift connects international project requirements with capable delivery
            organizations through requirement validation, partner assessment, and structured
            coordination.
          </p>
        </ScrollReveal>

        {/* Three ideas as numbered editorial columns */}
        <div className="mt-12 grid grid-cols-1 border-t border-slate-200/80 lg:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-slate-200/80">
          {ideas.map((idea, i) => (
            <ScrollReveal
              key={idea.index}
              direction="up"
              delay={160 + i * 80}
              className={`border-t border-slate-200/80 pt-7 pb-1 first:border-t-0 first:pt-7 lg:border-t-0 lg:pt-10 lg:px-8 ${
                i === 0 ? 'lg:pl-0' : ''
              } ${i === ideas.length - 1 ? 'lg:pr-0' : ''}`}
            >
              <span
                className="block font-heading text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: idea.accent }}
              >
                {idea.index}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-navy-midnight sm:text-xl">
                {idea.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{idea.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={420}>
          <div className="mt-10 lg:mt-12">
            <Button
              to="/about"
              variant="secondary"
              size="md"
              className="group"
              icon={
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              }
            >
              Learn About Our Approach
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
