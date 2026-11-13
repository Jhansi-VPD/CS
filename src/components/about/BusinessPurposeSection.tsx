import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

const storyParts = [
  {
    step: '01',
    title: 'The Challenge',
    accent: '#F98F33',
    text: 'Finding capable delivery partners — and accessing suitable international project opportunities — can be difficult, slow, and risky.',
  },
  {
    step: '02',
    title: 'Our Role',
    accent: '#E73B50',
    text: 'We understand requirements, assess partner fit, and coordinate project engagement from first discussion to final delivery.',
  },
  {
    step: '03',
    title: 'The Outcome',
    accent: '#950B6D',
    text: 'Better alignment, clearer responsibilities, and structured delivery that both sides can rely on.',
  },
];

export const BusinessPurposeSection: React.FC = () => (
  <section className="relative overflow-hidden bg-navy-midnight py-12 sm:py-16">
    <div className="absolute inset-0 bg-dark-grid pointer-events-none" aria-hidden="true" />
    <div className="absolute -top-28 -left-24 w-96 h-96 bg-coral-bright/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    <div className="absolute -bottom-28 -right-24 w-96 h-96 bg-coral-purple/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-coral-rose/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <ScrollReveal direction="up">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-coral-orange" aria-hidden="true" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-coral-orange">
            Why Coral Swift Exists
          </span>
        </div>
        <h2 className="mt-4 max-w-3xl font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Great projects stall in the gap between global needs and delivery capability.
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8">
        {storyParts.map((part, i) => (
          <ScrollReveal key={part.step} direction="up" delay={i * 140}>
            <div className="flex items-center">
              <span
                className="shrink-0 w-10 h-10 rounded-full border-2 grid place-items-center font-mono text-xs font-bold text-white bg-white/5"
                style={{ borderColor: part.accent }}
              >
                {part.step}
              </span>
              <span
                className="flex-1 h-px ml-4"
                style={{
                  background:
                    i < storyParts.length - 1
                      ? `linear-gradient(to right, ${part.accent}, transparent)`
                      : `linear-gradient(to right, ${part.accent}, rgba(255,255,255,0.06))`,
                }}
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-4 text-lg font-heading font-bold text-white">{part.title}</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{part.text}</p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal direction="up" delay={150}>
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            <span className="swift-gradient-text">Connect.</span>{' '}
            <span className="swift-gradient-text">Align.</span>{' '}
            <span className="swift-gradient-text">Deliver.</span>
          </p>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Our core principle: connect capable delivery partners with clearly defined opportunities, measurable execution standards, and transparent commercial arrangements.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BusinessPurposeSection;
