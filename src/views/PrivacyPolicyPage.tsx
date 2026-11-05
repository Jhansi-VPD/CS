import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertCircle, ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: November 2026 • Legal Draft for Corporate Validation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 mb-8 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Legal Notice:</strong> This document represents a proposed operational privacy policy draft for Coral Swift’s Phase 1 public portal. Final legal entity registration, jurisdiction selection, and specific regulatory disclosures will be inserted upon corporate validation.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">1. Scope and Purpose</h2>
              <p>
                Coral Swift (“we,” “our,” or “the Platform”) operates as a business solutions and partnership platform connecting international project requirements with qualified delivery organizations. This Privacy Policy outlines how we collect, process, and protect corporate and business contact information submitted through our public website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">2. Principle of Data Minimization</h2>
              <p>
                In strict compliance with our corporate governance guidelines (PRD Section 19 & 28), Coral Swift enforces strict data minimization:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We collect only business-level capability and contact information necessary to evaluate project scoping and delivery partner eligibility.</li>
                <li><strong>Prohibition on Sensitive Personal Data:</strong> Public website forms do NOT collect or accept sensitive personal health records, patient data, personal financial account credentials, credit card details, or social security numbers.</li>
                <li>Operational scopes in healthcare or banking are discussed at an institutional capability level only.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">3. Information We Collect</h2>
              <p>We may collect the following categories of information submitted voluntarily by visitors:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contact Details:</strong> Full name, authorized corporate email address, business telephone number, and job title.</li>
                <li><strong>Organizational Profile:</strong> Company legal name, country of incorporation, website URL, operational scale, year of establishment, and headcount.</li>
                <li><strong>Project Scoping Data:</strong> High-level business requirements, target technology stacks, desired shift volumes, and estimated timelines.</li>
                <li><strong>Partner Due Diligence Evidence:</strong> Verification document categories selected by prospective delivery partners.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">4. How We Use Collected Information</h2>
              <p>Submitted information is used exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reviewing and responding to project and business inquiries.</li>
                <li>Evaluating partner eligibility against proposed screening thresholds (3 years age, 50+ staff, turnover).</li>
                <li>Conducting preliminary bilateral introductory calls and scheduling meetings.</li>
                <li>Executing mutual Non-Disclosure Agreements (NDAs) prior to detailed technical or financial discovery.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">5. Confidentiality & Third-Party Disclosure</h2>
              <p>
                Coral Swift does not sell, rent, or trade business contact information. Data is shared with prospective delivery organizations only after formal mutual consent, project scoping validation, and execution of confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">6. Retention & Data Rights</h2>
              <p>
                Business inquiries and partner expressions of interest are retained for the duration of the evaluation lifecycle. You may request review, correction, or deletion of your corporate contact record by writing to our designated privacy desk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
