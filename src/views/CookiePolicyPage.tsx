import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: November 2026 • Policy Version 1.0
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">1. What Cookies Are</h2>
              <p>
                Cookies are small text files a website places on your device. They help sites work properly and remember basic choices.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">2. How We Use Cookies</h2>
              <p>We use cookies only to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Essential:</strong> site navigation, keeping your progress in multi-step forms, and remembering your consent choice.</li>
                <li><strong>Analytics:</strong> anonymized, aggregate traffic counts, so we can see which pages are used most.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">3. Your Choices</h2>
              <p>
                Your browser can decline cookies or alert you when one is set. Blocking essential cookies may disable features such as multi-step form previews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
