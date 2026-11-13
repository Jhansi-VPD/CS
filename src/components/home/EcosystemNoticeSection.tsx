import React from 'react';
import { MapPin } from 'lucide-react';
import { Card } from '../common/Card';
import { ScrollReveal } from '../common/ScrollReveal';

export const EcosystemNoticeSection: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50/70 border-b border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <Card variant="white" className="p-6 sm:p-8 border border-slate-200/90 shadow-card-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-coral-50 text-coral-bright flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-navy-midnight">
                    Regional Delivery Focus: Hyderabad Ecosystem
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tier-1 Indian engineering hubs & operational centers
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0 self-start sm:self-auto">
                Proposed Hub
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hyderabad is proposed as our primary partner and delivery ecosystem, providing deep capability across Enterprise ERP, web applications, healthcare coding, and financial back-office operations.
            </p>

          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};
