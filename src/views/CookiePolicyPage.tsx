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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy-midnight mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. They are widely used to make websites function efficiently and to provide basic preference recognition.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-midnight mb-2">2. How Coral Swift Uses Cookies</h2>
            <p>We use cookies strictly for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essential / Technical Cookies:</strong> Required for site navigation, form state retention during multi-step submissions, and remembering cookie consent preferences.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Aggregate, anonymized traffic counts to understand which service pages and resources are accessed most frequently.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-midnight mb-2">3. Managing Your Preferences</h2>
            <p>
              You can modify your browser settings to decline cookies or receive notifications when a cookie is placed. Note that disabling essential cookies may impact certain interactive features such as multi-step form previews.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
