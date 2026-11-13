'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Building, Users, FileCheck, ArrowRight, ArrowLeft, RefreshCw, ShieldCheck, Check } from 'lucide-react';
import { Button } from '../common/Button';
import { PartnerApplicationFormData } from '../../types';
import { submissionChecklist } from '../../data/partnerCriteriaData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { lookupCountryCode } from '../../services/countries';
import { submitEnquiry, newIdempotencyKey, friendlySubmitError, ApiError } from '../../services/enquiries';

const PATHWAY_MAP: Record<string, string> = {
  'Strategic Merger / Integration': 'strategic_merger_integration',
  'Direct Project Engagement': 'direct_project_engagement',
  'Vendor / Subcontracting Partnership': 'vendor_subcontracting'
};

const WORKFORCE_MAP: Record<string, string> = {
  'Under 25 employees': 'under_50',
  '25 - 49 employees': 'under_50',
  '50 - 100 employees': '50_to_100',
  '101 - 250 employees': '101_to_250',
  '250+ employees': 'over_250'
};

const TURNOVER_MAP: Record<string, string> = {
  'Under INR 1 Crore': 'under_inr_2_crore',
  'INR 1 Cr - 2 Cr': 'under_inr_2_crore',
  'INR 2 Cr - 5 Cr (or equivalent)': 'inr_2_to_10_crore',
  'INR 5 Cr - 15 Cr': 'inr_2_to_10_crore',
  'Above INR 15 Crore': 'over_inr_10_crore'
};

const EXPERTISE_MAP: Record<string, string> = {
  'Enterprise ERP (HRMS/Finance)': 'erp',
  'Web Applications & Portals': 'web_applications',
  'Custom Software Development': 'custom_software',
  'Cloud & Infrastructure Support': 'cloud_infrastructure',
  'Application Testing & QA': 'testing_maintenance',
  'Medical Coding & Billing': 'medical_coding_billing',
  'Healthcare Support Operations': 'healthcare_support',
  'Data Entry & Document Processing': 'data_entry_document_processing',
  'Banking KYC & Mortgage Review': 'banking_kyc_mortgage',
  'Mutual Fund Operations': 'mutual_fund_operations'
};

export const PartnerApplicationForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const formRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const [formData, setFormData] = useState<PartnerApplicationFormData>({
    contactPersonName: '',
    designation: '',
    businessEmail: '',
    companyName: '',
    companyWebsite: '',
    registeredAddress: '',
    country: '',
    contactNumber: '',
    organizationType: 'IT Solutions & Software Development',
    yearEstablished: '',
    employeeCount: '50 - 100 employees',
    annualTurnover: 'INR 2 Cr - 5 Cr (or equivalent)',
    preferredPathway: 'Direct Project Engagement',
    primaryExpertise: ['Enterprise ERP (HRMS/Finance)', 'Web Applications & Portals'],
    industryExperience: ['Information Technology & Software'],
    companyOverview: '',
    relevantCapabilities: '',
    clientReferences: [
      { name: '', organization: '', contact: '' },
      { name: '', organization: '', contact: '' }
    ],
    selectedEvidenceDocuments: ['Company Registration Proof', 'Three-Year Operating History'],
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
    data: PartnerApplicationFormData;
  } | null>(null);

  const idempotencyKeyRef = useRef('');
  useEffect(() => {
    idempotencyKeyRef.current = newIdempotencyKey();
  }, [formData]);

  useEffect(() => {
    const handleSelectPathway = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const mapping: Record<string, PartnerApplicationFormData['preferredPathway']> = {
        'strategic-merger': 'Strategic Merger / Integration',
        'direct-project': 'Direct Project Engagement',
        'subcontracting': 'Vendor / Subcontracting Partnership',
      };
      if (customEvent.detail && mapping[customEvent.detail]) {
        setFormData((prev) => ({ ...prev, preferredPathway: mapping[customEvent.detail] }));
      }
    };
    window.addEventListener('select-pathway', handleSelectPathway);
    return () => window.removeEventListener('select-pathway', handleSelectPathway);
  }, []);

  const expertiseOptions = [
    'Enterprise ERP (HRMS/Finance)',
    'Web Applications & Portals',
    'Custom Software Development',
    'Cloud & Infrastructure Support',
    'Application Testing & QA',
    'Medical Coding & Billing',
    'Healthcare Support Operations',
    'Data Entry & Document Processing',
    'Banking KYC & Mortgage Review',
    'Mutual Fund Operations'
  ];

  const industryOptions = [
    'Information Technology & Software',
    'Healthcare & Life Sciences',
    'Banking, Financial Services & Insurance (BFSI)',
    'Mortgage & Lending Services',
    'E-Commerce & Digital Media',
    'High-Volume Enterprise Operations'
  ];

  const validateStep = (currentStep: number) => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
      if (!formData.contactPersonName.trim()) errs.contactPersonName = 'Contact person name is required';
      if (!formData.designation.trim()) errs.designation = 'Designation is required';
      if (!formData.businessEmail.trim()) {
        errs.businessEmail = 'Business email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
        errs.businessEmail = 'Enter a valid corporate email';
      }
      if (!formData.contactNumber.trim()) errs.contactNumber = 'Contact number is required';
      if (!formData.country.trim()) {
        errs.country = 'Country is required';
      } else if (!lookupCountryCode(formData.country)) {
        errs.country = 'Please enter a valid country name (e.g. India, United States)';
      }
      if (!formData.registeredAddress.trim()) errs.registeredAddress = 'Registered address is required';
    }

    if (currentStep === 2) {
      if (!formData.yearEstablished) {
        errs.yearEstablished = 'Year established is required';
      } else if (!/^\d{4}$/.test(formData.yearEstablished.trim())) {
        errs.yearEstablished = 'Enter a 4-digit year (e.g. 2018)';
      } else {
        const year = parseInt(formData.yearEstablished, 10);
        const currentYear = new Date().getFullYear();
        if (year < 1800 || year > currentYear) {
          errs.yearEstablished = `Year must be between 1800 and ${currentYear}`;
        }
      }
      if (!formData.employeeCount) errs.employeeCount = 'Employee count is required';
      if (!formData.annualTurnover) errs.annualTurnover = 'Annual turnover band is required';
      if (!formData.preferredPathway) errs.preferredPathway = 'Please select a preferred pathway';
    }

    if (currentStep === 3) {
      if (formData.primaryExpertise.length === 0) {
        errs.primaryExpertise = 'Select at least one primary area of expertise';
      }
      if (formData.industryExperience.length === 0) {
        errs.industryExperience = 'Select at least one industry domain';
      }
      if (!formData.companyOverview.trim() || formData.companyOverview.length < 30) {
        errs.companyOverview = 'Please provide a company overview (minimum 30 characters)';
      }
    }

    if (currentStep === 4) {
      formData.clientReferences.forEach((ref, idx) => {
        if (!ref.name.trim()) errs[`clientRef${idx}Name`] = 'Reference name is required';
        if (!ref.organization.trim()) errs[`clientRef${idx}Organization`] = 'Organization is required';
        if (!ref.contact.trim()) errs[`clientRef${idx}Contact`] = 'Email or phone of the referee is required';
      });
      if (!formData.consent) {
        errs.consent = 'You must acknowledge the evaluation disclosure and privacy terms';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const scrollFormIntoView = () => {
    formRef.current?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => (prev < 4 ? ((prev + 1) as 1 | 2 | 3 | 4) : prev));
      scrollFormIntoView();
    }
  };

  const handleBack = () => {
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3 | 4) : prev));
    scrollFormIntoView();
  };

  const toggleExpertise = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      primaryExpertise: prev.primaryExpertise.includes(item)
        ? prev.primaryExpertise.filter((x) => x !== item)
        : [...prev.primaryExpertise, item]
    }));
  };

  const toggleIndustry = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      industryExperience: prev.industryExperience.includes(item)
        ? prev.industryExperience.filter((x) => x !== item)
        : [...prev.industryExperience, item]
    }));
  };

  const toggleDocument = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedEvidenceDocuments: prev.selectedEvidenceDocuments.includes(item)
        ? prev.selectedEvidenceDocuments.filter((x) => x !== item)
        : [...prev.selectedEvidenceDocuments, item]
    }));
  };

  const updateClientReference = (idx: number, field: 'name' | 'organization' | 'contact', value: string) => {
    setFormData((prev) => ({
      ...prev,
      clientReferences: prev.clientReferences.map((ref, i) => (i === idx ? { ...ref, [field]: value } : ref))
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const countryCode = lookupCountryCode(formData.country) as string;

      const experienceParts: string[] = [
        `Organization profile: ${formData.organizationType}`,
        `Industry experience: ${formData.industryExperience.join(', ')}`
      ];
      if (formData.relevantCapabilities.trim()) {
        experienceParts.push(`Additional capabilities: ${formData.relevantCapabilities.trim()}`);
      }

      const result = await submitEnquiry(
        '/api/v1/enquiries/partner',
        {
          full_name: formData.contactPersonName.trim(),
          designation: formData.designation.trim(),
          business_email: formData.businessEmail.trim(),
          phone: formData.contactNumber.trim(),
          country: countryCode,
          company_name: formData.companyName.trim(),
          website: formData.companyWebsite.trim() || undefined,
          year_established: parseInt(formData.yearEstablished, 10),
          registered_address: formData.registeredAddress.trim(),
          company_country: countryCode,
          preferred_engagement_pathway: PATHWAY_MAP[formData.preferredPathway],
          workforce_range: WORKFORCE_MAP[formData.employeeCount],
          turnover_range: TURNOVER_MAP[formData.annualTurnover],
          service_categories: formData.primaryExpertise
            .map((item) => EXPERTISE_MAP[item])
            .filter(Boolean),
          infrastructure_summary: formData.companyOverview.trim(),
          client_experience: experienceParts.join('. '),
          client_references: formData.clientReferences.map((ref) => ({
            name: ref.name.trim(),
            organization: ref.organization.trim(),
            contact: ref.contact.trim()
          })),
          privacy_consent: formData.consent,
          lead_source: 'website_partner_form'
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
          full_name: 'contactPersonName',
          designation: 'designation',
          business_email: 'businessEmail',
          phone: 'contactNumber',
          country: 'country',
          company_name: 'companyName',
          year_established: 'yearEstablished',
          registered_address: 'registeredAddress',
          company_country: 'country',
          preferred_engagement_pathway: 'preferredPathway',
          workforce_range: 'employeeCount',
          turnover_range: 'annualTurnover',
          service_categories: 'primaryExpertise',
          infrastructure_summary: 'companyOverview',
          client_experience: 'companyOverview',
          privacy_consent: 'consent'
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
      contactPersonName: '',
      designation: '',
      businessEmail: '',
      companyName: '',
      companyWebsite: '',
      registeredAddress: '',
      country: '',
      contactNumber: '',
      organizationType: 'IT Solutions & Software Development',
      yearEstablished: '',
      employeeCount: '50 - 100 employees',
      annualTurnover: 'INR 2 Cr - 5 Cr (or equivalent)',
      preferredPathway: 'Direct Project Engagement',
      primaryExpertise: ['Enterprise ERP (HRMS/Finance)', 'Web Applications & Portals'],
      industryExperience: ['Information Technology & Software'],
      companyOverview: '',
      relevantCapabilities: '',
      clientReferences: [
        { name: '', organization: '', contact: '' },
        { name: '', organization: '', contact: '' }
      ],
      selectedEvidenceDocuments: ['Company Registration Proof', 'Three-Year Operating History'],
      consent: false
    });
    setErrors({});
    setSubmitError(null);
    setStep(1);
    setSubmissionSuccess(null);
  };

  if (submissionSuccess) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card-soft animate-fade-in text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Partner Application Logged
        </span>

        <h3 className="text-2xl font-heading font-extrabold text-navy-midnight mt-3">
          Partner Expression of Interest Received
        </h3>

        <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs text-slate-600">
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Application Reference ID:</span>
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
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Applicant Organization:</span>
            <span className="font-medium text-navy-midnight text-right min-w-0 break-words">
              {submissionSuccess.data.companyName}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Authorized Contact:</span>
            <span className="text-right min-w-0 break-words">{submissionSuccess.data.contactPersonName} <span className="break-all">({submissionSuccess.data.businessEmail})</span></span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Preferred Pathway:</span>
            <span className="font-semibold text-coral-magenta text-right min-w-0">
              {submissionSuccess.data.preferredPathway}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Evidence Items Indicated:</span>
            <span className="text-right">{submissionSuccess.data.selectedEvidenceDocuments.length}</span>
          </div>
          <div className="flex justify-between items-center py-1 gap-4">
            <span className="font-semibold text-slate-700 shrink-0">Status:</span>
            <span className="capitalize text-right">{submissionSuccess.status}</span>
          </div>
        </div>

        <p className="text-xs mt-3">
          <a
            href={`/enquiry-status?ref=${encodeURIComponent(submissionSuccess.refId)}&token=${encodeURIComponent(submissionSuccess.lookupToken)}`}
            className="text-coral-bright underline font-semibold"
          >
            Check this application&apos;s status
          </a>
        </p>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 text-left mb-6">
          <p className="font-semibold mb-1">Proposed Evaluation Notice:</p>
          <p className="leading-relaxed">
            Applications are evaluated against the proposed 3-year operating baseline, 50-personnel workforce strength, and relevant financial standing. Submission of an application is an expression of interest and does not constitute a guarantee of project allocation or partnership approval.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="outline" size="sm" onClick={handleReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
            Submit Another Application
          </Button>
          <Button variant="primary" size="sm" to="/how-it-works">
            Review 6-Step Evaluation Stages
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef} className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card-soft scroll-mt-24">
      {/* Multi-step Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>Step {step} of 4: {
            step === 1 ? 'Company Profile' :
            step === 2 ? 'Operational Capacity' :
            step === 3 ? 'Expertise & Capabilities' :
            'Evidence & Review'
          }</span>
          <span className="text-coral-bright font-bold">{step * 25}% Complete</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-swift-gradient h-full transition-all duration-300 rounded-full"
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: Company Profile */}
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-heading font-bold text-navy-midnight">
                1. Organization & Contact Information
              </h3>
              <p className="text-xs text-slate-500">
                Please provide official entity details and corporate contact information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Legal Company Name <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Apex Software Technologies Pvt Ltd"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.companyName ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.companyName && <p className="text-xs text-coral-bright mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Company Website URL
                </label>
                <input
                  type="url"
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                  placeholder="https://www.yourcompany.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Authorized Contact Person Name <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="text"
                  value={formData.contactPersonName}
                  onChange={(e) => setFormData({ ...formData, contactPersonName: e.target.value })}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.contactPersonName ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.contactPersonName && (
                  <p className="text-xs text-coral-bright mt-1">{errors.contactPersonName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Designation / Role <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  placeholder="e.g. Managing Director / VP Delivery"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.designation ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.designation && (
                  <p className="text-xs text-coral-bright mt-1">{errors.designation}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Corporate Business Email <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="email"
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  placeholder="rajesh@yourcompany.com"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.businessEmail ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.businessEmail && <p className="text-xs text-coral-bright mt-1">{errors.businessEmail}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Corporate Phone Number <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  placeholder="+91 40 0000 0000"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.contactNumber ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.contactNumber && <p className="text-xs text-coral-bright mt-1">{errors.contactNumber}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Operating Country / Location <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. India (Hyderabad, Bangalore, etc.)"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.country ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.country && <p className="text-xs text-coral-bright mt-1">{errors.country}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1">
                Registered Office Address <span className="text-coral-bright">*</span>
              </label>
              <input
                type="text"
                value={formData.registeredAddress}
                onChange={(e) => setFormData({ ...formData, registeredAddress: e.target.value })}
                placeholder="Full registered legal office address..."
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                  errors.registeredAddress ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                }`}
              />
              {errors.registeredAddress && (
                <p className="text-xs text-coral-bright mt-1">{errors.registeredAddress}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: Operational Capacity & Eligibility */}
        {step === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-heading font-bold text-navy-midnight">
                2. Operational Capacity & Screening Baselines
              </h3>
              <p className="text-xs text-slate-500">
                Information to benchmark against the proposed screening thresholds (3 years age, 50+ staff, INR 2 Cr turnover).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Year of Incorporation / Establishment <span className="text-coral-bright">*</span>
                </label>
                <input
                  type="text"
                  value={formData.yearEstablished}
                  onChange={(e) => setFormData({ ...formData, yearEstablished: e.target.value })}
                  placeholder="e.g. 2018 (3+ years recommended)"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.yearEstablished ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.yearEstablished && (
                  <p className="text-xs text-coral-bright mt-1">{errors.yearEstablished}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Full-Time Employed Workforce <span className="text-coral-bright">*</span>
                </label>
                <select
                  value={formData.employeeCount}
                  onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
                >
                  <option value="Under 25 employees">Under 25 employees</option>
                  <option value="25 - 49 employees">25 - 49 employees</option>
                  <option value="50 - 100 employees">50 - 100 employees (Meets proposed baseline)</option>
                  <option value="101 - 250 employees">101 - 250 employees</option>
                  <option value="250+ employees">250+ employees</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Annual Turnover Band <span className="text-coral-bright">*</span>
                </label>
                <select
                  value={formData.annualTurnover}
                  onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
                >
                  <option value="Under INR 1 Crore">Under INR 1 Crore</option>
                  <option value="INR 1 Cr - 2 Cr">INR 1 Crore – 2 Crore</option>
                  <option value="INR 2 Cr - 5 Cr (or equivalent)">INR 2 Crore – 5 Crore (Meets direct project baseline)</option>
                  <option value="INR 5 Cr - 15 Cr">INR 5 Crore – 15 Crore</option>
                  <option value="Above INR 15 Crore">Above INR 15 Crore</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-midnight mb-1">
                  Organization Core Profile <span className="text-coral-bright">*</span>
                </label>
                <select
                  value={formData.organizationType}
                  onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
                >
                  <option value="IT Solutions & Software Development">IT Solutions & Software Development</option>
                  <option value="BPO & Business Process Operations">BPO & Business Process Operations</option>
                  <option value="Healthcare Coding & Billing Services">Healthcare Coding & Billing Services</option>
                  <option value="Banking & Financial Operations">Banking & Financial Operations</option>
                  <option value="Multi-disciplinary Delivery Center">Multi-disciplinary Delivery Center</option>
                </select>
              </div>
            </div>

            {/* Preferred Engagement Pathway */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-navy-midnight mb-2">
                Preferred Engagement Pathway <span className="text-coral-bright">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    id: 'Strategic Merger / Integration',
                    title: 'Strategic Merger / Integration',
                    subtitle: 'For mature IT organizations exploring deeper structural alignment and capital coordination.'
                  },
                  {
                    id: 'Direct Project Engagement',
                    title: 'Direct Project Engagement',
                    subtitle: 'For financially qualified partners meeting 50+ staff & INR 2 Cr turnover baselines.'
                  },
                  {
                    id: 'Vendor / Subcontracting Partnership',
                    title: 'Vendor Subcontracting',
                    subtitle: 'For domain specialists providing modular delivery, testing teams, or operational shifts.'
                  }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={formData.preferredPathway === p.id}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        preferredPathway: p.id as PartnerApplicationFormData['preferredPathway']
                      })
                    }
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all text-left ${
                      formData.preferredPathway === p.id
                        ? 'border-coral-bright bg-coral-50/40 ring-1 ring-coral-bright'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-navy-midnight">{p.title}</span>
                      {formData.preferredPathway === p.id && (
                        <Check className="w-4 h-4 text-coral-bright" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{p.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Expertise & Capabilities */}
        {step === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-heading font-bold text-navy-midnight">
                3. Domain Expertise & Experience
              </h3>
              <p className="text-xs text-slate-500">
                Select your core technical competencies and industry track record.
              </p>
            </div>

            {/* Primary Expertise Multi-select */}
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-2">
                Primary Areas of Expertise (Select all that apply) <span className="text-coral-bright">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {expertiseOptions.map((item) => {
                  const selected = formData.primaryExpertise.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleExpertise(item)}
                      className={`px-3 py-2 rounded-lg border text-xs cursor-pointer select-none transition-colors flex items-center justify-between text-left ${
                        selected
                          ? 'bg-navy-midnight text-white border-navy-midnight font-medium'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span className="truncate pr-1">{item}</span>
                      {selected && <Check className="w-3.5 h-3.5 shrink-0 text-coral-orange" />}
                    </button>
                  );
                })}
              </div>
              {errors.primaryExpertise && (
                <p className="text-xs text-coral-bright mt-1">{errors.primaryExpertise}</p>
              )}
            </div>

            {/* Industry Experience Multi-select */}
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-2">
                Industry Experience Domains <span className="text-coral-bright">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industryOptions.map((item) => {
                  const selected = formData.industryExperience.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleIndustry(item)}
                      className={`px-3 py-2 rounded-lg border text-xs cursor-pointer select-none transition-colors flex items-center justify-between text-left ${
                        selected
                          ? 'bg-navy-surface text-white border-navy-surface font-medium'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{item}</span>
                      {selected && <Check className="w-3.5 h-3.5 shrink-0 text-coral-orange" />}
                    </button>
                  );
                })}
              </div>
              {errors.industryExperience && (
                <p className="text-xs text-coral-bright mt-1">{errors.industryExperience}</p>
              )}
            </div>

            {/* Company Overview Description */}
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1">
                Company Overview & Delivery Capabilities Summary <span className="text-coral-bright">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.companyOverview}
                onChange={(e) => setFormData({ ...formData, companyOverview: e.target.value })}
                placeholder="Highlight your delivery teams, existing tools, past client scopes, quality management routines, and capacity to scale..."
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                  errors.companyOverview ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                }`}
              />
              {errors.companyOverview && (
                <p className="text-xs text-coral-bright mt-1">{errors.companyOverview}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 4: Evidence Checklist & Review */}
        {step === 4 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-heading font-bold text-navy-midnight">
                4. Initial Partner Submission Checklist & Confirmation
              </h3>
              <p className="text-xs text-slate-500">
                Provide two client references and confirm available verification items for due diligence.
              </p>
            </div>

            {/* Client References (required by backend: 2-5) */}
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-2">
                Client References <span className="text-coral-bright">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.clientReferences.map((ref, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Reference {idx + 1}
                    </span>
                    <div>
                      <label className="block text-[11px] font-semibold text-navy-midnight mb-1">
                        Contact Name <span className="text-coral-bright">*</span>
                      </label>
                      <input
                        type="text"
                        value={ref.name}
                        onChange={(e) => updateClientReference(idx, 'name', e.target.value)}
                        placeholder="Referee full name"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                          errors[`clientRef${idx}Name`] ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors[`clientRef${idx}Name`] && (
                        <p className="text-[11px] text-coral-bright mt-1">{errors[`clientRef${idx}Name`]}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-navy-midnight mb-1">
                        Organization <span className="text-coral-bright">*</span>
                      </label>
                      <input
                        type="text"
                        value={ref.organization}
                        onChange={(e) => updateClientReference(idx, 'organization', e.target.value)}
                        placeholder="Client organization name"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                          errors[`clientRef${idx}Organization`] ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors[`clientRef${idx}Organization`] && (
                        <p className="text-[11px] text-coral-bright mt-1">{errors[`clientRef${idx}Organization`]}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-navy-midnight mb-1">
                        Email or Phone <span className="text-coral-bright">*</span>
                      </label>
                      <input
                        type="text"
                        value={ref.contact}
                        onChange={(e) => updateClientReference(idx, 'contact', e.target.value)}
                        placeholder="Referee email or phone"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                          errors[`clientRef${idx}Contact`] ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors[`clientRef${idx}Contact`] && (
                        <p className="text-[11px] text-coral-bright mt-1">{errors[`clientRef${idx}Contact`]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8-Point Submission Checklist */}
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-2">
                Available Verification Documents (Check all ready for due diligence):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {submissionChecklist.map((item) => {
                  const checked = formData.selectedEvidenceDocuments.includes(item.name);
                  return (
                    <label
                      key={item.id}
                      className={`p-3 rounded-xl border cursor-pointer select-none transition-colors flex items-start gap-2.5 ${
                        checked
                          ? 'bg-coral-50/50 border-coral-bright/50'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleDocument(item.name)}
                        className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
                      />
                      <div>
                        <span className="text-xs font-bold text-navy-midnight block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Application Summary Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-slate-600">
              <div className="font-semibold text-navy-midnight border-b border-slate-200/70 pb-1">
                Application Review Summary:
              </div>
              <p><strong>Organization:</strong> {formData.companyName} ({formData.country})</p>
              <p><strong>Contact:</strong> {formData.contactPersonName} — {formData.businessEmail}</p>
              <p><strong>Pathway Selected:</strong> {formData.preferredPathway}</p>
              <p><strong>Capacity Metrics:</strong> Established {formData.yearEstablished || 'N/A'}, {formData.employeeCount}, Turnover: {formData.annualTurnover}</p>
            </div>

            {/* Consent & Disclosure Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I confirm that the submitted details are accurate to the best of my knowledge. I understand that the screening criteria (3-year age, 50-personnel, INR 2 Cr turnover) are proposed baselines subject to formal evaluation, and submission does not constitute a guaranteed project award or partnership contract.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-coral-bright mt-1">{errors.consent}</p>}
            </div>
          </div>
        )}

        {/* Submission Error */}
        {submitError && (
          <div role="alert" className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{submitError}</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleBack}
              icon={<ArrowLeft className="w-3.5 h-3.5" />}
              iconPosition="left"
              className="w-full sm:w-auto justify-center"
            >
              Previous Step
            </Button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {step < 4 ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNext}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto justify-center"
            >
              Continue to Step {step + 1}
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              icon={<CheckCircle2 className="w-4 h-4" />}
              className="w-full sm:w-auto justify-center"
            >
              Submit Partner Application
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
