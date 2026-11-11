import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-2 sm:pt-3 pb-8 sm:pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-2 tracking-tight">
            Website Terms & Conditions
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
              <h2 className="text-lg font-bold text-navy-midnight mb-2">1. For Information Only</h2>
              <p>
                This website supports business development discussions. Service descriptions, delivery models, and partner pathways are informational. They are not a formal offer, a guarantee of project award, or a warranty of capacity.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">2. Illustrative Opportunities</h2>
              <p>
                Project examples and volume ranges are labelled <strong>illustrative categories</strong>. They show representative work types, not specific contracts available today. Actual allocation depends on client requirements and formal qualification.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">3. Proposed Screening Baselines</h2>
              <p>
                The references to 3+ years of established operations, 50+ employed personnel, and INR 2 Crore minimum annual turnover are <strong>proposed screening baselines</strong>, not a promise of merger approval or project award. Applying does not create a partnership, joint venture, agency, or contract.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">4. Intellectual Property</h2>
              <p>
                Text, graphics, logos, marks, icons, and interface designs belong to Coral Swift or its licensors and are protected by intellectual property law. Do not reproduce or reverse engineer them without permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy-midnight mb-2">5. Certifications and Compliance</h2>
              <p>
                Descriptions of healthcare, banking, and back-office services state operational capabilities only. They are not claims of HIPAA, SOC 2, ISO, or PCI DSS certification unless separately evidenced for a specific project and facility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
