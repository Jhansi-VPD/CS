import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: November 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">1. What This Covers</h2>
              <p>
                Coral Swift (“we”) is a project solutions and partnership platform. This policy explains what information we collect through our website, how we use it, how long we keep it, and your choices.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">2. Minimal Data Collection</h2>
              <p>
                We collect as little as possible:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Only the business and contact details needed to assess a project or a partner.</li>
                <li><strong>No sensitive personal data:</strong> Our public forms never accept health records, patient data, financial account credentials, card details, or social security numbers.</li>
                <li>Healthcare and banking work is discussed at company capability level only.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">3. What We Collect</h2>
              <p>Information you choose to submit:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contact:</strong> name, business email, phone number, job title.</li>
                <li><strong>Company:</strong> legal name, country, website, size, founding year, headcount.</li>
                <li><strong>Project scope:</strong> requirements, target technology, volumes, timelines.</li>
                <li><strong>Partner evidence:</strong> the verification documents an applicant selects.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">4. How We Use It</h2>
              <p>
                We use it only to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To review and reply to project and business enquiries.</li>
                <li>To screen partners against proposed baselines: 3+ years of operations, 50+ personnel, annual turnover.</li>
                <li>To schedule introductory calls.</li>
                <li>To put a mutual NDA in place before detailed technical or financial discussion.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">5. Who We Share It With</h2>
              <p>
                We do not sell, rent, or trade business contact information. We share it with a delivery organization only after both sides agree, the scope is validated, and confidentiality terms are in place.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">6. Retention and Your Rights</h2>
              <p>
                We keep enquiries and partner applications for as long as the evaluation runs. You can ask us to review, correct, or delete your record by contacting us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
