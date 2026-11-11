'use client';

import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { faqData } from '../data/faqData';
import { Search, ChevronDown, HelpCircle, ArrowRight, X } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  useEffect(() => {
    document.title = 'Frequently Asked Questions | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All',
    'About Coral Swift',
    'IT Solutions',
    'Non-IT Solutions',
    'Business Enquiries',
    'Partnership Opportunities',
    'Screening Criteria',
    'Engagement Process',
    'Strategic Discussions'
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/80 pt-2 sm:pt-3 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <div className="mt-2 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Help
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-2 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              How we work, the services we cover, and the screening standards we propose for delivery partners.
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl relative">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="faq-search"
                name="faq-search"
                aria-label="Search frequently asked questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, such as screening, ERP, Hyderabad, or turnover"
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-300 text-sm text-navy-midnight bg-white shadow-sm focus:ring-2 focus:ring-coral-bright/20 focus:border-coral-bright transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 max-sm:min-h-[44px] rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-midnight text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 text-xs text-slate-500">
            <span>
              Showing <strong>{filteredFaqs.length}</strong> questions {selectedCategory !== 'All' && `in ${selectedCategory}`}
            </span>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-coral-bright font-bold hover:underline"
              >
                Clear search
              </button>
            )}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-navy-midnight">No matching questions</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try another keyword or a broader category. You can also contact our team directly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Search
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-coral-bright/40 bg-coral-50/20 shadow-sm'
                        : 'border-slate-200/90 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full py-4 px-5 sm:px-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-coral-bright block">
                          {faq.category}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-navy-midnight block">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 mt-2 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-coral-bright' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need More Assistance */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-4">
            <h3 className="text-lg font-heading font-bold text-navy-midnight">
              Still have a question?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Ask us about project scope, partner criteria, or commercial terms.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Contact Coral Swift
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
