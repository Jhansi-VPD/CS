import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-4 tracking-tight">
            Terms & Conditions of Website Use
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
              <h2 className="text-lg font-bold text-navy-midnight mb-2">1. Nature of Published Information</h2>
              <p>
                The Coral Swift website serves as an informational platform and business-development interface. Material published on this website—including service descriptions, delivery models, and partner pathways—is intended for exploratory discussions and does not constitute a formal commercial offer, binding guarantee of project award, or warranty of capacity.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">2. Illustrative Opportunities & Project Categories</h2>
              <p>
                Project opportunities, sample scopes, and volume ranges presented on this website are explicitly designated as <strong>illustrative categories</strong>. They reflect representative project types and do not indicate that specific unassigned contracts are immediately available for allocation. Actual allocations depend on client requirements and formal qualification.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">3. Proposed Partner Screening Baselines</h2>
              <p>
                References to criteria such as three years of operating history, 50 full-time personnel, and minimum annual turnover of INR 2 Crore are <strong>proposed screening baselines</strong>. Submission of a partner application or expression of interest does not create a partnership, joint venture, agency, or contractual obligation between the applicant and Coral Swift.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">4. Intellectual Property</h2>
              <p>
                All text, graphics, logos, marks, icons, and interface designs appearing on this website are the property of Coral Swift or its licensors and are protected under applicable intellectual property laws. Unauthorized reproduction or reverse engineering is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">5. Regulatory & Certification Disclosures</h2>
              <p>
                Descriptions of healthcare, banking, or enterprise back-office services describe operational capabilities and do not constitute independent claims of certification (such as HIPAA, SOC 2, ISO, or PCI DSS) unless formally evidenced and verified on a per-project, per-facility basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
