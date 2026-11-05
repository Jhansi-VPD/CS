'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Upload, FileText, ArrowRight, RefreshCw, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { ProjectEnquiryFormData } from '../../types';

export interface ProjectEnquiryFormProps {
  initialCategory?: 'IT Solutions' | 'Non-IT / Business Operations' | 'Partnership Services';
  initialService?: string;
  onSuccess?: (refId: string) => void;
}

export const ProjectEnquiryForm: React.FC<ProjectEnquiryFormProps> = ({
  initialCategory = 'IT Solutions',
  initialService = '',
  onSuccess
}) => {
  const [formData, setFormData] = useState<ProjectEnquiryFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    designation: '',
    country: '',
    contactNumber: '',
    serviceCategory: initialCategory,
    specificService: initialService,
    requirementSummary: '',
    estimatedBudget: '',
    expectedTimeline: '',
    additionalInfo: '',
    consent: false
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    refId: string;
    submittedAt: string;
    data: ProjectEnquiryFormData;
  } | null>(null);

  // Dynamic service options based on category
  const itOptions = [
    'Enterprise Resource Planning (ERP)',
    'Web Applications & Business Portals',
    'Custom Software Development',
    'Cloud & Infrastructure Support',
    'Application Testing & Maintenance',
    'Digital Transformation',
    'Multiple IT Disciplines'
  ];

  const nonItOptions = [
    'Medical Coding & Medical Billing',
    'Healthcare Support Processes',
    'Data Entry & High-Volume Document Processing',
    'Banking KYC & Mortgage Processing',
    'Mutual-Fund Operations Support',
    'Enterprise Back-Office Services',
    'Multiple Operational Workflows'
  ];

  const partnershipOptions = [
    'Vendor Discovery & Capability Assessment',
    'Staffing Alignment & Project Allocation',
    'Reporting & Operational Governance',
    'Commercial Engagement Support',
    'Cross-Border Delivery Consortium'
  ];

  const currentServiceOptions =
    formData.serviceCategory === 'IT Solutions'
      ? itOptions
      : formData.serviceCategory === 'Non-IT / Business Operations'
      ? nonItOptions
      : partnershipOptions;

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Enter a valid email address';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.country.trim()) errs.country = 'Country is required';
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = 'Contact number is required';
    } else if (!/^[0-9+()-\s]{6,20}$/.test(formData.contactNumber)) {
      errs.contactNumber = 'Enter a valid phone number';
    }
    if (!formData.specificService) errs.specificService = 'Please select a specific service';
    if (!formData.requirementSummary.trim() || formData.requirementSummary.length < 20) {
      errs.requirementSummary = 'Please provide a requirement description (minimum 20 characters)';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the privacy notice to proceed';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (file) {
      // 10 MB limit
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size must not exceed 10 MB');
        setSelectedFile(null);
        return;
      }
      const allowedExtensions = ['pdf', 'doc', 'docx', 'xlsx', 'txt'];
      const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
      if (!allowedExtensions.includes(fileExt)) {
        setFileError('Allowed formats: PDF, DOC, DOCX, XLSX, TXT');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate front-end demo submission with structured reference ID
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `CS-PRJ-2026-${randomSuffix}`;
      const successPayload = {
        refId: generatedRef,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString(),
        data: { ...formData }
      };

      setIsSubmitting(false);
      setSubmissionSuccess(successPayload);
      if (onSuccess) onSuccess(generatedRef);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      designation: '',
      country: '',
      contactNumber: '',
      serviceCategory: 'IT Solutions',
      specificService: '',
      requirementSummary: '',
      estimatedBudget: '',
      expectedTimeline: '',
      additionalInfo: '',
      consent: false
    });
    setSelectedFile(null);
    setErrors({});
    setSubmissionSuccess(null);
  };

  if (submissionSuccess) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card-soft animate-fade-in text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Enquiry Received (Interactive Frontend Demo)
        </span>

        <h3 className="text-2xl font-heading font-extrabold text-navy-midnight mt-3">
          Project Requirement Logged
        </h3>

        <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs text-slate-600">
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Reference ID:</span>
            <span className="font-mono text-coral-bright font-bold text-sm">
              {submissionSuccess.refId}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Company / Contact:</span>
            <span>{submissionSuccess.data.companyName} ({submissionSuccess.data.fullName})</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Service Category:</span>
            <span className="font-medium text-navy-midnight">{submissionSuccess.data.serviceCategory}</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
            <span className="font-semibold text-slate-700">Specific Requirement:</span>
            <span>{submissionSuccess.data.specificService}</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="font-semibold text-slate-700">Submission Timestamp:</span>
            <span>{submissionSuccess.submittedAt}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
          <strong>Interactive Notice:</strong> This is a validated frontend simulation for Coral Swift’s Phase 1 public portal. In production, this record routes directly to the Business Development Queue for scoping and delivery center matching.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="outline" size="sm" onClick={handleReset} icon={<RefreshCw className="w-3.5 h-3.5" />}>
            Submit Another Requirement
          </Button>
          <Button variant="primary" size="sm" to="/how-it-works">
            View Evaluation Process
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card-soft space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-heading font-bold text-navy-midnight">
          Submit Project or Business Requirement
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Provide your project details to evaluate scope and coordinate suitable delivery capabilities.
        </p>
      </div>

      {/* Row 1: Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Full Name <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. John Doe"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20 ${
              errors.fullName ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.fullName && <p className="text-xs text-coral-bright mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Business Email <span className="text-coral-bright">*</span>
          </label>
          <input
            type="email"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="name@company.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20 ${
              errors.businessEmail ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.businessEmail && <p className="text-xs text-coral-bright mt-1">{errors.businessEmail}</p>}
        </div>
      </div>

      {/* Row 2: Company & Designation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Company Name <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Acme Enterprise Corp"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20 ${
              errors.companyName ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.companyName && <p className="text-xs text-coral-bright mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Designation / Role
          </label>
          <input
            type="text"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            placeholder="e.g. VP of Operations / CTO"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20"
          />
        </div>
      </div>

      {/* Row 3: Country & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Country <span className="text-coral-bright">*</span>
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            placeholder="e.g. United States, United Kingdom"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20 ${
              errors.country ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.country && <p className="text-xs text-coral-bright mt-1">{errors.country}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Contact Number <span className="text-coral-bright">*</span>
          </label>
          <input
            type="tel"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20 ${
              errors.contactNumber ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          />
          {errors.contactNumber && <p className="text-xs text-coral-bright mt-1">{errors.contactNumber}</p>}
        </div>
      </div>

      {/* Row 4: Service Category & Specific Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Domain Category <span className="text-coral-bright">*</span>
          </label>
          <select
            value={formData.serviceCategory}
            onChange={(e) => {
              const val = e.target.value as ProjectEnquiryFormData['serviceCategory'];
              setFormData({ ...formData, serviceCategory: val, specificService: '' });
            }}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
          >
            <option value="IT Solutions">IT Solutions</option>
            <option value="Non-IT / Business Operations">Non-IT / Business Operations</option>
            <option value="Partnership Services">Partnership Services</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Specific Capability Required <span className="text-coral-bright">*</span>
          </label>
          <select
            value={formData.specificService}
            onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20 ${
              errors.specificService ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
            }`}
          >
            <option value="">-- Select Specific Service --</option>
            {currentServiceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.specificService && (
            <p className="text-xs text-coral-bright mt-1">{errors.specificService}</p>
          )}
        </div>
      </div>

      {/* Row 5: Requirement Summary */}
      <div>
        <label className="block text-xs font-semibold text-navy-midnight mb-1">
          Project / Requirement Summary <span className="text-coral-bright">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.requirementSummary}
          onChange={(e) => setFormData({ ...formData, requirementSummary: e.target.value })}
          placeholder="Please describe the business requirement, desired volume or team size, technology preferences, and operational objectives..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight transition-colors focus:ring-2 focus:ring-coral-bright/20 ${
            errors.requirementSummary ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
          }`}
        />
        {errors.requirementSummary && (
          <p className="text-xs text-coral-bright mt-1">{errors.requirementSummary}</p>
        )}
      </div>

      {/* Row 6: Budget & Timeline (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Estimated Budget (Optional)
          </label>
          <select
            value={formData.estimatedBudget}
            onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
          >
            <option value="">-- Under Review / To be discussed --</option>
            <option value="Under $25k">Under $25,000 USD</option>
            <option value="$25k - $50k">$25,000 – $50,000 USD</option>
            <option value="$50k - $150k">$50,000 – $150,000 USD</option>
            <option value="$150k+">$150,000+ USD</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy-midnight mb-1">
            Expected Timeline (Optional)
          </label>
          <select
            value={formData.expectedTimeline}
            onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-navy-midnight bg-white focus:ring-2 focus:ring-coral-bright/20"
          >
            <option value="">-- Select Target Kickoff --</option>
            <option value="Immediate (Within 30 days)">Immediate (Within 30 days)</option>
            <option value="1 - 3 months">1 to 3 months</option>
            <option value="3 - 6 months">3 to 6 months</option>
            <option value="Planning / Exploratory">Planning / Exploratory</option>
          </select>
        </div>
      </div>

      {/* File Upload Attachment (Optional) */}
      <div>
        <label className="block text-xs font-semibold text-navy-midnight mb-1">
          Attach Scope Document / RFP (Optional)
        </label>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 px-4 py-2.5 border border-dashed border-slate-300 hover:border-coral-bright rounded-lg cursor-pointer bg-slate-50 hover:bg-coral-50/30 transition-colors text-xs font-medium text-slate-700">
            <Upload className="w-4 h-4 text-coral-bright" />
            <span>{selectedFile ? 'Change File' : 'Select Scope File'}</span>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.xlsx,.txt"
              className="hidden"
            />
          </label>
          {selectedFile && (
            <div className="flex items-center gap-2 text-xs text-navy-midnight font-medium bg-slate-100 px-3 py-1.5 rounded-lg">
              <FileText className="w-3.5 h-3.5 text-coral-bright" />
              <span className="truncate max-w-[200px]">{selectedFile.name}</span>
              <span className="text-slate-400">({(selectedFile.size / 1024).toFixed(0)} KB)</span>
            </div>
          )}
        </div>
        {fileError && <p className="text-xs text-coral-bright mt-1">{fileError}</p>}
        <p className="text-[11px] text-slate-400 mt-1">
          Max file size: 10 MB. Supported formats: PDF, DOC, DOCX, XLSX.
        </p>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I agree to the processing of this business requirement enquiry under Coral Swift’s{' '}
            <a href="/privacy-policy" target="_blank" className="text-coral-bright underline">
              Privacy Policy
            </a>
            . I understand that public forms collect business-level capability requirements and not sensitive personal or financial records.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-coral-bright mt-1">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Encrypted frontend demo submission</span>
        </div>
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Submit Project Enquiry
        </Button>
      </div>
    </form>
  );
};

