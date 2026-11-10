'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SearchCheck, AlertCircle, CheckCircle2, ShieldQuestion, RefreshCw } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { lookupEnquiryStatus, friendlyStatusError, EnquiryStatusResult } from '../services/enquiries';

const TYPE_LABELS: Record<string, string> = {
  general: 'General Enquiry',
  project: 'Project Enquiry',
  partner: 'Partner Application',
  strategic: 'Strategic Discussion',
  meeting: 'Meeting Request'
};

const STATUS_BADGES: Record<string, { label: string; className: string }> = {
  received: { label: 'Received', className: 'bg-coral-50 text-coral-700 border-coral-200' },
  in_review: { label: 'In Review', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  closed: { label: 'Closed', className: 'bg-slate-100 text-slate-600 border-slate-200' }
};

export const EnquiryStatusPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [referenceNumber, setReferenceNumber] = useState('');
  const [lookupToken, setLookupToken] = useState('');
  const [errors, setErrors] = useState<{ referenceNumber?: string; lookupToken?: string }>({});
  const [isChecking, setIsChecking] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [result, setResult] = useState<EnquiryStatusResult | null>(null);
  const autoLookupDoneRef = useRef(false);

  const runLookup = async (ref: string, token: string) => {
    setIsChecking(true);
    setLookupError(null);
    try {
      const status = await lookupEnquiryStatus(ref.trim(), token.trim());
      setResult(status);
    } catch (err) {
      setResult(null);
      setLookupError(friendlyStatusError(err));
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    const ref = searchParams.get('ref') || '';
    const token = searchParams.get('token') || '';
    if (ref && token) {
      setReferenceNumber(ref);
      setLookupToken(token);
      if (!autoLookupDoneRef.current) {
        autoLookupDoneRef.current = true;
        runLookup(ref, token);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const validate = () => {
    const errs: { referenceNumber?: string; lookupToken?: string } = {};
    if (!referenceNumber.trim()) errs.referenceNumber = 'Reference ID is required';
    if (!lookupToken.trim()) errs.lookupToken = 'Lookup token is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChecking) return;
    if (!validate()) return;
    runLookup(referenceNumber, lookupToken);
  };

  const statusBadge = result
    ? STATUS_BADGES[result.status] || {
        label: result.status.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        className: 'bg-slate-100 text-slate-600 border-slate-200'
      }
    : null;

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/80 pt-8 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Check Enquiry Status' }]} />
          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Enquiry Tracking
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Check Your Enquiry Status
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Track an enquiry you have already submitted using the reference ID and status lookup token shown in your submission confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Lookup Form */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card-soft space-y-4"
            >
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-lg font-heading font-bold text-navy-midnight">Status Lookup</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Both values are displayed immediately after you submit any Coral Swift enquiry or meeting request.
                </p>
              </div>

              <div>
                <label htmlFor="es-reference" className="block text-xs font-semibold text-navy-midnight mb-1">
                  Enquiry Reference ID <span className="text-coral-bright">*</span>
                </label>
                <input
                  id="es-reference"
                  type="text"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  placeholder="Enter the reference ID from your confirmation"
                  autoComplete="off"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.referenceNumber ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.referenceNumber && (
                  <p className="text-xs text-coral-bright mt-1">{errors.referenceNumber}</p>
                )}
              </div>

              <div>
                <label htmlFor="es-token" className="block text-xs font-semibold text-navy-midnight mb-1">
                  Status Lookup Token <span className="text-coral-bright">*</span>
                </label>
                <input
                  id="es-token"
                  type="text"
                  value={lookupToken}
                  onChange={(e) => setLookupToken(e.target.value)}
                  placeholder="Enter the lookup token from your confirmation"
                  autoComplete="off"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-midnight font-mono focus:ring-2 focus:ring-coral-bright/20 ${
                    errors.lookupToken ? 'border-coral-bright bg-coral-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.lookupToken && <p className="text-xs text-coral-bright mt-1">{errors.lookupToken}</p>}
              </div>

              {lookupError && (
                <div role="alert" className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{lookupError}</span>
                </div>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isChecking}
                  icon={<SearchCheck className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Check Status
                </Button>
              </div>
            </form>

            {result && (
              <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card-soft animate-fade-in text-center">
                <div className="w-14 h-14 bg-coral-50 text-coral-bright rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-midnight">Enquiry Found</h3>
                <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-200/60 gap-4">
                    <span className="font-semibold text-slate-700">Reference ID:</span>
                    <span className="font-mono text-coral-bright font-bold break-all text-right">{result.referenceNumber}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60 gap-4">
                    <span className="font-semibold text-slate-700">Enquiry Type:</span>
                    <span className="text-right">{TYPE_LABELS[result.enquiryType] || result.enquiryType}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-200/60 gap-4">
                    <span className="font-semibold text-slate-700 shrink-0">Current Status:</span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${statusBadge?.className || 'bg-slate-100 text-slate-600 border-slate-200'}`}
                    >
                      {statusBadge?.label}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 gap-4">
                    <span className="font-semibold text-slate-700">Submitted On:</span>
                    <span className="text-right">
                      {new Date(result.submittedAt).toLocaleString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  This status reflects the current state of the enquiry in the Coral Swift system. It is updated as our team reviews your submission.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setResult(null);
                    setLookupError(null);
                  }}
                  icon={<RefreshCw className="w-3.5 h-3.5" />}
                >
                  Check Another Enquiry
                </Button>
              </div>
            )}

            <div className="mt-6 p-4 rounded-xl bg-[#FFF7F2] border border-coral-200/70 flex items-start gap-2.5">
              <ShieldQuestion className="w-4 h-4 text-coral-bright shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep your reference ID and lookup token private — they together grant read-only access to this
                enquiry&apos;s status. Lost both values?{' '}
                <Link href="/contact" className="text-coral-bright underline">
                  Contact us
                </Link>{' '}
                and we will guide you through the next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
