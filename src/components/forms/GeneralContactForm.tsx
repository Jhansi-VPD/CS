'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { GeneralContactFormData } from '../../types';
import { lookupCountryCode } from '../../services/countries';
import { submitEnquiry, newIdempotencyKey, friendlySubmitError, ApiError } from '../../services/enquiries';

const CONTACT_TOPIC_MAP: Record<GeneralContactFormData['enquiryType'], string> = {
  'General Enquiry': 'general_information',
  'Project Requirement': 'services',
  'Partnership Question': 'partnership',
  'Media / Corporate': 'other'
};

export const GeneralContactForm: React.FC = () => {
  const [formData, setFormData] = useState<GeneralContactFormData>({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    enquiryType: 'General Enquiry',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    refId: string;
    submittedAt: string;
    status: string;
    lookupToken: string;
    data: GeneralContactFormData;
  } | null>(null);

  const idempotencyKeyRef = useRef('');
  useEffect(() => {
    idempotencyKeyRef.current = newIdempotencyKey();
  }, [formData]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+()\-\s]{6,30}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!formData.country.trim()) {
      errs.country = 'Country is required';
    } else if (!lookupCountryCode(formData.country)) {
      errs.country = 'Please enter a valid country name (e.g. India, United States)';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide a message (minimum 15 characters)';
    }
    if (!formData.consent) {
      errs.consent = 'Please accept the privacy terms';
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
      const result = await submitEnquiry(
        '/api/v1/enquiries/contact',
        {
          full_name: formData.name.trim(),
          business_email: formData.email.trim(),
          phone: formData.phone.trim(),
          country: lookupCountryCode(formData.country) as string,
          company_name: formData.company?.trim() || undefined,
          enquiry_type: CONTACT_TOPIC_MAP[formData.enquiryType],
          message: formData.message.trim(),
          privacy_consent: formData.consent,
          lead_source: 'website_contact_page'
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
        const fieldMap: Record<string, string> = {
          full_name: 'name',
          business_email: 'email',
          phone: 'phone',
          country: 'country',
          company_name: 'company',
          message: 'message',
          privacy_consent: 'consent',
          enquiry_type: 'enquiryType'
        };
        for (const [backendField, msg] of Object.entries(err.fieldErrors)) {
          const localField = fieldMap[backendField];
          if (localField) mapped[localField] = msg;
        }
        setErrors((prev) => ({ ...prev, ...mapped }));
      }
      setSubmitError(friendlySubmitError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      phone: '',
      enquiryType: 'General Enquiry',
      message: '',
      consent: false
    });
    setErrors({});
    setSubmitError(null);
    setSubmissionSuccess(null);
  };

  if (submissionSuccess) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card-soft animate-fade-in text-center max-w-lg mx-auto">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Message Sent
        </span>

        <h3 className="text-xl font-heading font-bold text-navy-midnight mt-3">
          Thank You for Contacting Coral Swift
        </h3>

        <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1.5 text-xs text-slate-600">
          <div className="flex justify-between py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Enquiry Reference ID:</span>
            <span className="font-mono text-coral-bright font-bold">{submissionSuccess.refId}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200/60 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Status Lookup Token:</span>
            <span className="font-mono text-slate-600 break-all text-right">{submissionSuccess.lookupToken}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Name:</span>
            <span>{submissionSuccess.data.name}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Category:</span>
            <span>{submissionSuccess.data.enquiryType}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Status:</span>
            <span className="capitalize">{submissionSuccess.status}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-semibold text-slate-700">Logged At:</span>
            <span>{submissionSuccess.submittedAt}</span>
          </div>
        </div>

        <p className="text-xs mt-3">
          <a
            href={`/enquiry-status?ref=${encodeURIComponent(submissionSuccess.refId)}&token=${encodeURIComponent(submissionSuccess.lookupToken)}`}
            className="text-coral-bright underline font-semibold"
          >
            Check this enquiry&apos;s status
          </a>
        </p>

        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          Your enquiry has been recorded in the Coral Swift system with the reference above. Keep it handy if you would like to follow up on this message.
        </p>

        <Button variant="outline" size="sm" onClick={handleReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card-soft space-y-4">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-lg font-heading font-bold text-navy-midnight">
          General Inquiries
        </h3>
        <p className="text-xs text-slate-500">
          Reach out for corporate information, media questions, or general platform inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Name <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.name ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.name && <p className="text-xs text-coral-bright mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Email Address <span className="text-coral-bright">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@domain.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.email ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.email && <p className="text-xs text-coral-bright mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Phone Number <span className="text-coral-bright">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.phone ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.phone && <p className="text-xs text-coral-bright mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Country <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. United States, India"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
              errors.country ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.country && <p className="text-xs text-coral-bright mt-1">{errors.country}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-midnight mb-1">
          Company (Optional)
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Organization name"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-midnight mb-1">
          Enquiry Category
        </label>
        <select
          value={formData.enquiryType}
          onChange={(e) =>
            setFormData({
              ...formData,
              enquiryType: e.target.value as GeneralContactFormData['enquiryType']
            })
          }
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
        >
          <option value="General Enquiry">General Corporate Enquiry</option>
          <option value="Project Requirement">Project Requirement Overview</option>
          <option value="Partnership Question">Partnership Question</option>
          <option value="Media / Corporate">Media / Corporate Communications</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-midnight mb-1">
          Message <span className="text-coral-bright">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we assist you?"
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
            errors.message ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
          }`}
        />
        {errors.message && <p className="text-xs text-coral-bright mt-1">{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to Coral Swift collecting my contact details to reply to this message in accordance with the{' '}
            <a href="/privacy-policy" target="_blank" className="text-coral-bright underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && <p className="text-xs text-coral-bright mt-1">{errors.consent}</p>}
      </div>

      {submitError && (
        <div role="alert" className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{submitError}</span>
        </div>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};
