'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Lock, Shield, ArrowRight, RefreshCw, KeyRound, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { StrategicEnquiryFormData } from '../../types';
import { lookupCountryCode } from '../../services/countries';
import { submitEnquiry, newIdempotencyKey, friendlySubmitError, ApiError } from '../../services/enquiries';

const GroupHeader: React.FC<{ id: string; index: string; title: string; hint: string }> = ({
  id,
  index,
  title,
  hint
}) => (
  <div id={id} className="mb-5">
    <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-midnight">
      <span className="mr-1.5 font-mono text-coral-bright">{index}</span>
      {title}
    </span>
    <span className="mt-1 block text-xs text-slate-500">{hint}</span>
  </div>
);

const DISCUSSION_TYPE_MAP: Record<StrategicEnquiryFormData['natureOfOpportunity'], string> = {
  'Strategic Merger / Equity Integration': 'merger',
  'Enterprise Asset Transition': 'integration',
  'Structured Joint Delivery': 'strategic_partnership',
  'Other Strategic Discussion': 'strategic_partnership'
};

const FIELD_ERROR_MAP: Record<string, string> = {
  full_name: 'fullName',
  designation: 'designation',
  business_email: 'businessEmail',
  phone: 'phone',
  country: 'country',
  company_name: 'companyName',
  business_overview: 'businessOverview',
  confidential_summary: 'confidentialSummary',
  discussion_type: 'natureOfOpportunity',
  privacy_consent: 'confidentialityConsent',
  authorized_representative: 'authorizedRepresentative'
};

export const StrategicEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<StrategicEnquiryFormData>({
    fullName: '',
    designation: '',
    businessEmail: '',
    phone: '',
    companyName: '',
    country: '',
    natureOfOpportunity: 'Strategic Merger / Equity Integration',
    currentTurnoverBand: 'INR 5 Cr - 15 Cr',
    currentWorkforce: '50 - 100 specialists',
    businessOverview: '',
    confidentialSummary: '',
    preferredContactMethod: 'Secure Virtual Meeting',
    authorizedRepresentative: false,
    confidentialityConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    refId: string;
    submittedAt: string;
    status: string;
    lookupToken: string;
    data: StrategicEnquiryFormData;
  } | null>(null);

  const idempotencyKeyRef = useRef('');
  useEffect(() => {
    idempotencyKeyRef.current = newIdempotencyKey();
  }, [formData]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Valid business email is required';
    }
    if (!formData.designation.trim()) errs.designation = 'Designation is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+()\-\s]{6,30}$/.test(formData.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.country.trim()) {
      errs.country = 'Country is required';
    } else if (!lookupCountryCode(formData.country)) {
      errs.country = 'Enter a recognised country name (e.g. India, United States)';
    }
    if (!formData.businessOverview.trim() || formData.businessOverview.length < 25) {
      errs.businessOverview = 'Please provide a brief organisational overview (minimum 25 characters)';
    }
    if (!formData.confidentialSummary.trim() || formData.confidentialSummary.length < 25) {
      errs.confidentialSummary = 'Please provide an outline of your strategic objectives (minimum 25 characters)';
    }
    if (!formData.authorizedRepresentative) {
      errs.authorizedRepresentative = 'Please confirm you are authorised to make this inquiry';
    }
    if (!formData.confidentialityConsent) {
      errs.confidentialityConsent = 'You must acknowledge the mutual non-disclosure terms';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const countryCode = lookupCountryCode(formData.country) ?? '';
      const businessOverview = [
        `Declared scope: ${formData.natureOfOpportunity}`,
        `Approximate turnover: ${formData.currentTurnoverBand}`,
        `Technical workforce: ${formData.currentWorkforce}`,
        `Preferred contact channel: ${formData.preferredContactMethod}`,
        formData.businessOverview.trim()
      ].join('. ');

      const result = await submitEnquiry(
        '/api/v1/enquiries/strategic',
        {
          full_name: formData.fullName.trim(),
          designation: formData.designation.trim(),
          business_email: formData.businessEmail.trim(),
          phone: formData.phone.trim(),
          country: countryCode,
          company_name: formData.companyName.trim(),
          discussion_type: DISCUSSION_TYPE_MAP[formData.natureOfOpportunity],
          business_overview: businessOverview,
          confidential_summary: formData.confidentialSummary.trim(),
          authorized_representative: formData.authorizedRepresentative,
          privacy_consent: formData.confidentialityConsent,
          lead_source: 'website_strategic_form'
        },
        idempotencyKeyRef.current
      );

      setSubmissionSuccess({
        refId: result.referenceNumber,
        submittedAt: new Date(result.submittedAt).toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        status: result.status,
        lookupToken: result.lookupToken,
        data: { ...formData }
      });
    } catch (err) {
      if (err instanceof ApiError && Object.keys(err.fieldErrors).length > 0) {
        const mapped: Record<string, string> = {};
        for (const [field, message] of Object.entries(err.fieldErrors)) {
          mapped[FIELD_ERROR_MAP[field] ?? field] = message;
        }
        setErrors(mapped);
        setSubmitError('Please correct the highlighted fields and submit again.');
      } else {
        setSubmitError(friendlySubmitError(err));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      designation: '',
      businessEmail: '',
      phone: '',
      companyName: '',
      country: '',
      natureOfOpportunity: 'Strategic Merger / Equity Integration',
      currentTurnoverBand: 'INR 5 Cr - 15 Cr',
      currentWorkforce: '50 - 100 specialists',
      businessOverview: '',
      confidentialSummary: '',
      preferredContactMethod: 'Secure Virtual Meeting',
      authorizedRepresentative: false,
      confidentialityConsent: false
    });
    setErrors({});
    setSubmitError(null);
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
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Status Lookup Token:</span>
            <span className="font-mono text-slate-600 break-all text-right">
              {submissionSuccess.lookupToken}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Status:</span>
            <span className="capitalize">{submissionSuccess.status}</span>
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

        <p className="text-xs mt-3">
          <a
            href={`/enquiry-status?ref=${encodeURIComponent(submissionSuccess.refId)}&token=${encodeURIComponent(submissionSuccess.lookupToken)}`}
            className="text-coral-bright underline font-semibold"
          >
            Check this request&apos;s status
          </a>
        </p>

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
    <form onSubmit={handleSubmit} className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card-soft">
      <div className="border-b border-slate-100 bg-gradient-to-b from-[#FFFDFA] to-white px-6 pb-7 pt-8 sm:px-10">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-coral-magenta">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Confidential &amp; Privileged Inquiry</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-navy-midnight sm:text-3xl">
          Start a Strategic Conversation.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Tell us about your organisation and the kind of strategic relationship you would like to explore.
        </p>
      </div>

      <div className="divide-y divide-slate-100 px-6 sm:px-10">
        {/* Group 1 – Executive Information */}
        <div role="group" aria-labelledby="sef-group-1" className="py-8">
          <GroupHeader
            id="sef-group-1"
            index="01"
            title="Executive Information"
            hint="For the authorised representative of your organisation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="sef-fullname" className="block text-xs font-semibold text-navy-midnight mb-1">
                Executive Full Name <span className="text-coral-bright">*</span>
              </label>
              <input
                id="sef-fullname"
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
              <label htmlFor="sef-email" className="block text-xs font-semibold text-navy-midnight mb-1">
                Corporate Email Address <span className="text-coral-bright">*</span>
              </label>
              <input
                id="sef-email"
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

            <div>
              <label htmlFor="sef-designation" className="block text-xs font-semibold text-navy-midnight mb-1">
                Designation <span className="text-coral-bright">*</span>
              </label>
              <input
                id="sef-designation"
                type="text"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. Managing Director / VP Corporate Development"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                  errors.designation ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                }`}
              />
              {errors.designation && <p className="text-xs text-coral-bright mt-1">{errors.designation}</p>}
            </div>

            <div>
              <label htmlFor="sef-phone" className="block text-xs font-semibold text-navy-midnight mb-1">
                Direct Phone Number <span className="text-coral-bright">*</span>
              </label>
              <input
                id="sef-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 40 0000 0000"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                  errors.phone ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                }`}
              />
              {errors.phone && <p className="text-xs text-coral-bright mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="sef-company" className="block text-xs font-semibold text-navy-midnight mb-1">
                Organization Legal Name <span className="text-coral-bright">*</span>
              </label>
              <input
                id="sef-company"
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
              <label htmlFor="sef-country" className="block text-xs font-semibold text-navy-midnight mb-1">
                Country of Incorporation <span className="text-coral-bright">*</span>
              </label>
              <input
                id="sef-country"
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
        </div>

        {/* Group 2 – Strategic Interest */}
        <div role="group" aria-labelledby="sef-group-2" className="py-8">
          <GroupHeader
            id="sef-group-2"
            index="02"
            title="Strategic Interest"
            hint="Shared to indicate the general scope and scale of the discussion."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="sef-nature" className="block text-xs font-semibold text-navy-midnight mb-1">
                Nature of Discussion <span className="text-coral-bright">*</span>
              </label>
              <select
                id="sef-nature"
                value={formData.natureOfOpportunity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    natureOfOpportunity: e.target.value as StrategicEnquiryFormData['natureOfOpportunity']
                  })
                }
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
              >
                <option value="Strategic Merger / Equity Integration">Strategic Merger / Integration</option>
                <option value="Structured Joint Delivery">Structured Joint Delivery</option>
                <option value="Enterprise Asset Transition">Enterprise Asset Transition</option>
                <option value="Other Strategic Discussion">Other Strategic Discussion</option>
              </select>
            </div>

            <div>
              <label htmlFor="sef-turnover" className="block text-xs font-semibold text-navy-midnight mb-1">
                Approximate Turnover
              </label>
              <select
                id="sef-turnover"
                value={formData.currentTurnoverBand}
                onChange={(e) => setFormData({ ...formData, currentTurnoverBand: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
              >
                <option value="INR 2 Cr - 5 Cr">INR 2 Cr – 5 Cr</option>
                <option value="INR 5 Cr - 15 Cr">INR 5 Cr – 15 Cr</option>
                <option value="INR 15 Cr - 50 Cr">INR 15 Cr – 50 Cr</option>
                <option value="Above INR 50 Cr">Above INR 50 Cr</option>
              </select>
            </div>

            <div>
              <label htmlFor="sef-workforce" className="block text-xs font-semibold text-navy-midnight mb-1">
                Technical Workforce
              </label>
              <select
                id="sef-workforce"
                value={formData.currentWorkforce}
                onChange={(e) => setFormData({ ...formData, currentWorkforce: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
              >
                <option value="50 - 100 specialists">50 – 100 specialists</option>
                <option value="101 - 250 specialists">101 – 250 specialists</option>
                <option value="250+ specialists">250+ specialists</option>
              </select>
            </div>
          </div>
        </div>

        {/* Group 3 – Confidential Overview */}
        <div role="group" aria-labelledby="sef-group-3" className="py-8">
          <GroupHeader
            id="sef-group-3"
            index="03"
            title="Confidential Overview"
            hint="A brief outline is sufficient at this stage."
          />
          <label htmlFor="sef-overview" className="block text-xs font-semibold text-navy-midnight mb-1">
            Organisational Overview <span className="text-coral-bright">*</span>
          </label>
          <textarea
            id="sef-overview"
            rows={3}
            value={formData.businessOverview}
            onChange={(e) => setFormData({ ...formData, businessOverview: e.target.value })}
            placeholder="Briefly describe your organisation, its scale, and its market position..."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.businessOverview ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.businessOverview && (
            <p className="text-xs text-coral-bright mt-1">{errors.businessOverview}</p>
          )}

          <label htmlFor="sef-summary" className="mt-4 block text-xs font-semibold text-navy-midnight mb-1">
            Confidential Discussion Overview <span className="text-coral-bright">*</span>
          </label>
          <textarea
            id="sef-summary"
            rows={4}
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

        {/* Group 4 – Acknowledgement */}
        <div role="group" aria-labelledby="sef-group-4" className="py-8">
          <GroupHeader
            id="sef-group-4"
            index="04"
            title="Acknowledgement"
            hint="Required before this enquiry can be submitted."
          />
          <label htmlFor="sef-representative" className="flex items-start gap-2.5 cursor-pointer">
            <input
              id="sef-representative"
              type="checkbox"
              checked={formData.authorizedRepresentative}
              onChange={(e) => setFormData({ ...formData, authorizedRepresentative: e.target.checked })}
              className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I confirm that I am the authorised representative of the organisation named in this inquiry and am empowered to initiate strategic discussions on its behalf.
            </span>
          </label>
          {errors.authorizedRepresentative && (
            <p className="text-xs text-coral-bright mt-1">{errors.authorizedRepresentative}</p>
          )}

          <label htmlFor="sef-consent" className="mt-5 flex items-start gap-2.5 cursor-pointer">
            <input
              id="sef-consent"
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
      </div>

      {submitError && (
        <div className="px-6 pt-6 sm:px-10">
          <div role="alert" className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{submitError}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 border-t border-slate-100 bg-slate-50/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Shield className="w-4 h-4 text-coral-magenta" aria-hidden="true" />
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
