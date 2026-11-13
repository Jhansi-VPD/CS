'use client';

import React from 'react';
import { Server, Cloud, Code, CheckCircle2, HeartPulse, Landmark, ShieldCheck, Layers } from 'lucide-react';

interface CapabilityGroup {
  domain: string;
  stack: string;
  icon: React.ElementType;
}

const capabilityGroups: CapabilityGroup[] = [
  { domain: 'Enterprise Technology', stack: 'SAP S/4HANA · Oracle Cloud ERP · Dynamics 365', icon: Server },
  { domain: 'Cloud & DevOps', stack: 'AWS · Azure · Kubernetes · Terraform CI/CD', icon: Cloud },
  { domain: 'Software Engineering', stack: 'React & Next.js · Node.js & Python · PostgreSQL', icon: Code },
  { domain: 'QA & Testing', stack: 'Selenium · Cypress & Playwright · API Testing', icon: CheckCircle2 },
  { domain: 'Healthcare Operations', stack: 'ICD-10-CM / CPT-4 · HL7 & FHIR · Payer EDI', icon: HeartPulse },
  { domain: 'Financial Operations', stack: 'KYC Checklists · Encompass LOS · Mortgage Review', icon: Landmark },
  { domain: 'Delivery Governance', stack: 'Access Controls · Confidential Workspaces · Milestone Reviews', icon: ShieldCheck },
  { domain: 'Data Operations', stack: 'Double-Key Entry · OCR Indexing · Shift Coverage', icon: Layers },
];

export const CapabilityStrip: React.FC = () => {
  return (
    <section aria-label="Capability stacks" className="border-y border-slate-200/80 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-coral-orange" aria-hidden="true" />
          <span className="text-xs font-bold text-slate-600">
            Stacks &amp; Standards Supported Across the Delivery Network
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.domain} className="flex items-start gap-4 py-1">
                <Icon className="w-5 h-5 text-coral-orange mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold text-navy-midnight">{group.domain}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{group.stack}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
