'use client';

import React, { useState } from 'react';
import { Lock, Shield, CheckCircle2, ArrowRight, RefreshCw, KeyRound } from 'lucide-react';
import { Button } from '../common/Button';
import { StrategicEnquiryFormData } from '../../types';

export const StrategicEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<StrategicEnquiryFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    country: '',
    natureOfOpportunity: 'Strategic Merger / Equity Integration',
    currentTurnoverBand: 'INR 5 Cr - 15 Cr',
    currentWorkforce: '50 - 100 specialists',
    confidentialSummary: '',
    preferredContactMethod: 'Secure Virtual Meeting',
    confidentialityConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    refId: string;
    submittedAt: string;
    data: StrategicEnquiryFormData;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Valid business email is required';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.confidentialSummary.trim() || formData.confidentialSummary.length < 25) {
      errs.confidentialSummary = 'Please provide an outline of your strategic objectives (minimum 25 characters)';
    }
    if (!formData.confidentialityConsent) {
      errs.confidentialityConsent = 'You must acknowledge the mutual non-disclosure terms';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `CS-MNA-2026-${randomSuffix}`;
      setSubmissionSuccess({
        refId: generatedRef,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString(),
        data: { ...formData }
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      country: '',
      natureOfOpportunity: 'Strategic Merger / Equity Integration',
      currentTurnoverBand: 'INR 5 Cr - 15 Cr',
      currentWorkforce: '50 - 100 specialists',
      confidentialSummary: '',
      preferredContactMethod: 'Secure Virtual Meeting',
      confidentialityConsent: false
    });
    setErrors({});
    setSubmissionSuccess(null);
  };

  if (submissionSuccess) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card-soft animate-fade-in text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-navy-midnight text-coral-orange rounded-full flex items-center justify-center mx-auto mb-4 border border-navy-border">
          <KeyRound className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-navy-surface text-slate-200 border border-navy-border">
          Confidential Strategic Record Logged
        </span>

        <h3 className="text-2xl font-heading font-extrabold text-navy-midnight mt-3">
          Strategic Discussion Request Received
        </h3>

        <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs text-slate-600">
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Restricted Tracking ID:</span>
            <span className="font-mono text-coral-bright font-bold text-sm">
              {submissionSuccess.refId}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Entity:</span>
            <span>{submissionSuccess.data.companyName} ({submissionSuccess.data.country})</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Discussion Scope:</span>
            <span className="font-medium text-navy-midnight">{submissionSuccess.data.natureOfOpportunity}</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="font-semibold text-slate-700">Preferred Channel:</span>
            <span>{submissionSuccess.data.preferredContactMethod}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          <strong>Confidentiality Notice:</strong> In production, strategic merger and structural partnership inquiries bypass general sales queues and are routed directly to executive leadership under strict access control.
        </p>

        <div className="mt-6">
          <Button variant="outline" size="sm" onClick={handleReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
            Submit Another Strategic Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card-soft space-y-5">
      <div className="flex items-center gap-2 text-xs font-semibold text-coral-magenta mb-1">
        <Lock className="w-3.5 h-3.5" />
        <span>Confidential & Privileged Inquiry</span>
      </div>

      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-xl font-heading font-bold text-navy-midnight">
          Request a Confidential Strategic Discussion
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          For established IT companies and enterprises exploring structural mergers, equity alignments, or joint enterprise delivery programs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Executive Full Name <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Managing Director / Founder"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.fullName ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.fullName && <p className="text-xs text-coral-bright mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Corporate Email Address <span className="text-coral-bright">*</span>
          </label>
          <input
            type="email"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="executive@company.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.businessEmail ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.businessEmail && <p className="text-xs text-coral-bright mt-1">{errors.businessEmail}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Organization Legal Name <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Vertex Technologies Ltd"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.companyName ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.companyName && <p className="text-xs text-coral-bright mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Country of Incorporation <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. India, United States"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.country ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.country && <p className="text-xs text-coral-bright mt-1">{errors.country}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Nature of Discussion <span className="text-coral-bright">*</span>
          </label>
          <select
            value={formData.natureOfOpportunity}
            onChange={(e) =>
              setFormData({
                ...formData,
                natureOfOpportunity: e.target.value as StrategicEnquiryFormData['natureOfOpportunity']
              })
            }
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-navy-midnight bg-white"
          >
            <option value="Strategic Merger / Equity Integration">Strategic Merger / Integration</option>
            <option value="Structured Joint Delivery">Structured Joint Delivery</option>
            <option value="Enterprise Asset Transition">Enterprise Asset Transition</option>
            <option value="Other Strategic Discussion">Other Strategic Discussion</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Approximate Turnover
          </label>
          <select
            value={formData.currentTurnoverBand}
            onChange={(e) => setFormData({ ...formData, currentTurnoverBand: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-navy-midnight bg-white"
          >
            <option value="INR 2 Cr - 5 Cr">INR 2 Cr – 5 Cr</option>
            <option value="INR 5 Cr - 15 Cr">INR 5 Cr – 15 Cr</option>
            <option value="INR 15 Cr - 50 Cr">INR 15 Cr – 50 Cr</option>
            <option value="Above INR 50 Cr">Above INR 50 Cr</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Technical Workforce
          </label>
          <select
            value={formData.currentWorkforce}
            onChange={(e) => setFormData({ ...formData, currentWorkforce: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-navy-midnight bg-white"
          >
            <option value="50 - 100 specialists">50 – 100 specialists</option>
            <option value="101 - 250 specialists">101 – 250 specialists</option>
            <option value="250+ specialists">250+ specialists</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-midnight mb-1">
          Confidential Discussion Overview <span className="text-coral-bright">*</span>
        </label>
        <textarea
          rows={3}
          value={formData.confidentialSummary}
          onChange={(e) => setFormData({ ...formData, confidentialSummary: e.target.value })}
          placeholder="Briefly state your strategic objectives, key capabilities, and expectations for collaboration..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
            errors.confidentialSummary ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
          }`}
        />
        {errors.confidentialSummary && (
          <p className="text-xs text-coral-bright mt-1">{errors.confidentialSummary}</p>
        )}
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.confidentialityConsent}
            onChange={(e) => setFormData({ ...formData, confidentialityConsent: e.target.checked })}
            className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I acknowledge that this inquiry is submitted for preliminary exploratory evaluation. Both parties agree that formal strategic discussions require execution of a bilateral Non-Disclosure Agreement (NDA).
          </span>
        </label>
        {errors.confidentialityConsent && (
          <p className="text-xs text-coral-bright mt-1">{errors.confidentialityConsent}</p>
        )}
      </div>

      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Shield className="w-4 h-4 text-coral-magenta" />
          <span>Restricted Executive Queue</span>
        </div>
        <Button
          type="submit"
          variant="secondary"
          size="md"
          isLoading={isSubmitting}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Submit Strategic Inquiry
        </Button>
      </div>
    </form>
  );
};

