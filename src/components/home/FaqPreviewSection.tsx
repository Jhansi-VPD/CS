'use client';

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { faqData } from '../../data/faqData';
import { ScrollReveal } from '../common/ScrollReveal';

export const FaqPreviewSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  // Preview 5 top questions
  const previewQuestions = faqData.slice(0, 5);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Clear Answers on Our"
            highlightText="Model & Standards"
            subtitle="Learn more about how Coral Swift operates, our partner screening baselines, and our international engagement approach."
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <div className="mt-10 space-y-3">
            {previewQuestions.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-coral-bright/40 bg-coral-50/20 shadow-sm'
                      : 'border-slate-200/90 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-navy-midnight">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-coral-bright' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button
              to="/faq"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Frequently Asked Questions
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

