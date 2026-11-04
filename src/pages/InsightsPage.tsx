import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Download, Clock, Calendar, ShieldCheck } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Corporate Insights & Articles | Coral Swift';
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 'article-1',
      title: 'Governance in Cross-Border IT Delivery: Mitigating Risk in Multi-Vendor Pods',
      category: 'Delivery Governance',
      date: 'October 2026',
      readTime: '6 min read',
      summary: 'Why traditional offshore contracting fails without milestone-based verification, transparent code repository visibility, and bi-weekly sprint demos.',
      tags: ['Governance', 'Agile Pods', 'Enterprise IT']
    },
    {
      id: 'article-2',
      title: 'Evaluating Delivery Partner Maturity: The 8-Point Submission Due Diligence Standard',
      category: 'Partner Ecosystem',
      date: 'September 2026',
      readTime: '5 min read',
      summary: 'A detailed look at why Coral Swift mandates 3-year operating baselines, statutory payroll records, and audited financial statements before project allocation.',
      tags: ['Due Diligence', 'Screening Criteria', 'Operational Maturity']
    },
    {
      id: 'article-3',
      title: 'Operational Excellence in Healthcare Revenue Cycle Management & Medical Coding',
      category: 'Non-IT Operations',
      date: 'August 2026',
      readTime: '7 min read',
      summary: 'How dedicated operational centers in India maintain high accuracy across ICD-10/CPT coding, denial analysis, and payer prior authorizations under secure VDI protocols.',
      tags: ['Healthcare BPO', 'Revenue Cycle', 'Information Security']
    },
    {
      id: 'article-4',
      title: 'Financial Process Operations: Maintaining Quality in KYC & Mortgage Verification',
      category: 'Financial Operations',
      date: 'July 2026',
      readTime: '5 min read',
      summary: 'Structuring checklist-driven back-office teams for financial document audits, KYC onboarding reviews, and loan package validation.',
      tags: ['Banking KYC', 'Mortgage Review', 'Compliance Checklist']
    }
  ];

  const handleDownloadProfile = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/docs/Coral_Swift_Corporate_Profile.pdf';
      link.download = 'Coral_Swift_Corporate_Profile_Draft.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadSuccess(false);
    }, 800);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Insights & Resources' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Knowledge & Governance
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Corporate Insights & Resources
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Perspectives on cross-border delivery governance, partner qualification frameworks, and operational quality management from Coral Swift.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Downloadable Corporate Profile Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-navy-midnight text-white border border-navy-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-coral-orange px-2.5 py-0.5 rounded-full bg-navy-surface border border-navy-border">
                Approved Document
              </span>
              <h3 className="text-xl font-heading font-extrabold text-white">
                Download Official Corporate Profile (Validation Draft)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review the comprehensive business framework, proposed screening criteria, and service portfolio in a consolidated PDF.
              </p>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={handleDownloadProfile}
              isLoading={downloadSuccess}
              icon={<Download className="w-4 h-4" />}
              className="shrink-0"
            >
              Download PDF Profile
            </Button>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <Card key={art.id} variant="white" className="p-7 flex flex-col justify-between space-y-6 hover-lift">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-coral-bright uppercase tracking-wider">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-navy-midnight hover:text-coral-bright transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {art.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {art.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date}</span>
                  </span>
                  <span className="font-semibold text-coral-bright hover:underline cursor-pointer">
                    Read Executive Summary →
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Governance Notice */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-coral-bright shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Editorial Governance:</strong> All resource articles adhere to verified corporate information. Market analyses avoid unsupported statistics and reflect the documented business model outlined in Coral Swift PRD Version 2.0/3.0.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
