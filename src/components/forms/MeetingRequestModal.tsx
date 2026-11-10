'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Globe2, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { MeetingRequestFormData } from '../../types';
import { lookupCountryCode } from '../../services/countries';
import { submitEnquiry, newIdempotencyKey, friendlySubmitError, ApiError } from '../../services/enquiries';

const SLOT_TIMES: Record<string, [string, string]> = {
  '09:00 AM - 09:30 AM': ['09:00', '09:30'],
  '10:00 AM - 10:30 AM': ['10:00', '10:30'],
  '11:30 AM - 12:00 PM': ['11:30', '12:00'],
  '02:00 PM - 02:30 PM': ['14:00', '14:30'],
  '04:00 PM - 04:30 PM': ['16:00', '16:30']
};

const TIMEZONE_IANA_MAP: Record<string, string> = {
  'Eastern Time (US & Canada) - EST/EDT': 'America/New_York',
  'Central Time (US & Canada) - CST/CDT': 'America/Chicago',
  'Pacific Time (US & Canada) - PST/PDT': 'America/Los_Angeles',
  'India Standard Time (IST - UTC+5:30)': 'Asia/Kolkata',
  'Greenwich Mean Time (GMT / UTC)': 'UTC',
  'Central European Time (CET / UTC+1)': 'Europe/Paris'
};

const FIELD_ERROR_MAP: Record<string, string> = {
  full_name: 'fullName',
  business_email: 'businessEmail',
  phone: 'phone',
  country: 'country',
  purpose: 'meetingPurpose',
  preferred_slots: 'preferredTimeSlot',
  timezone: 'timeZone',
  privacy_consent: 'privacyConsent'
};

export interface MeetingRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeetingRequestModal: React.FC<MeetingRequestModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState<MeetingRequestFormData>({
    fullName: '',
    businessEmail: '',
    phone: '',
    companyName: '',
    country: '',
    timeZone: 'Eastern Time (US & Canada) - EST/EDT',
    preferredDate: '',
    preferredTimeSlot: '09:00 AM - 09:30 AM',
    meetingPurpose: 'Initial Project Scoping',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [bookingToken, setBookingToken] = useState('');

  const idempotencyKeyRef = useRef('');
  useEffect(() => {
    idempotencyKeyRef.current = newIdempotencyKey();
  }, [formData]);

  const timeZones = [
    'Eastern Time (US & Canada) - EST/EDT',
    'Central Time (US & Canada) - CST/CDT',
    'Pacific Time (US & Canada) - PST/PDT',
    'India Standard Time (IST - UTC+5:30)',
    'Greenwich Mean Time (GMT / UTC)',
    'Central European Time (CET / UTC+1)'
  ];

  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '10:00 AM - 10:30 AM',
    '11:30 AM - 12:00 PM',
    '02:00 PM - 02:30 PM',
    '04:00 PM - 04:30 PM'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Your name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+()\-\s]{6,30}$/.test(formData.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!formData.country.trim()) {
      errs.country = 'Country is required';
    } else if (!lookupCountryCode(formData.country)) {
      errs.country = 'Enter a recognised country name (e.g. India, United States)';
    }
    if (!formData.preferredDate) errs.preferredDate = 'Preferred date is required';
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'Please acknowledge the privacy notice to continue';
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
      const [slotStart, slotEnd] = SLOT_TIMES[formData.preferredTimeSlot];
      const result = await submitEnquiry(
        '/api/v1/meetings',
        {
          full_name: formData.fullName.trim(),
          business_email: formData.businessEmail.trim(),
          phone: formData.phone.trim(),
          country: lookupCountryCode(formData.country) ?? '',
          company_name: formData.companyName.trim() || undefined,
          purpose: formData.meetingPurpose,
          preferred_slots: [
            {
              start: `${formData.preferredDate}T${slotStart}:00Z`,
              end: `${formData.preferredDate}T${slotEnd}:00Z`
            }
          ],
          timezone: TIMEZONE_IANA_MAP[formData.timeZone] || formData.timeZone,
          privacy_consent: formData.privacyConsent,
          lead_source: 'website_meeting_request'
        },
        idempotencyKeyRef.current
      );

      setBookingRef(result.referenceNumber);
      setBookingStatus(result.status);
      setBookingToken(result.lookupToken);
      setIsBooked(true);
    } catch (err) {
      if (err instanceof ApiError && Object.keys(err.fieldErrors).length > 0) {
        const mapped: Record<string, string> = {};
        for (const [field, message] of Object.entries(err.fieldErrors)) {
          mapped[FIELD_ERROR_MAP[field] ?? field] = message;
        }
        setErrors(mapped);
        setSubmitError('Please correct the highlighted fields and try again.');
      } else {
        setSubmitError(friendlySubmitError(err));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsBooked(false);
    setBookingRef('');
    setBookingToken('');
    setBookingStatus('');
    setErrors({});
    setSubmitError(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      phone: '',
      companyName: '',
      country: '',
      timeZone: 'Eastern Time (US & Canada) - EST/EDT',
      preferredDate: '',
      preferredTimeSlot: '09:00 AM - 09:30 AM',
      meetingPurpose: 'Initial Project Scoping',
      privacyConsent: false
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Schedule an Introductory Discussion"
      subtitle="Select a time-zone aware slot for a direct business introduction with the Coral Swift team."
      maxWidth="lg"
    >
      {isBooked ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h4 className="text-xl font-heading font-bold text-navy-midnight">
            Meeting Request Logged
          </h4>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-left space-y-2 max-w-sm mx-auto">
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Request Ref:</span>
              <span className="font-mono text-coral-bright font-bold">{bookingRef}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="font-semibold text-slate-700 shrink-0">Status Lookup Token:</span>
              <span className="font-mono text-slate-600 break-all text-right">{bookingToken}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Status:</span>
              <span className="capitalize">{bookingStatus}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Contact:</span>
              <span>{formData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Email:</span>
              <span>{formData.businessEmail}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Selected Date:</span>
              <span>{formData.preferredDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Time Window:</span>
              <span>{formData.preferredTimeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">Time Zone:</span>
              <span>{formData.timeZone.split('(')[0]}</span>
            </div>
          </div>

          <p className="text-xs">
            <a
              href={`/enquiry-status?ref=${encodeURIComponent(bookingRef)}&token=${encodeURIComponent(bookingToken)}`}
              className="text-coral-bright underline font-semibold"
            >
              Check this request&apos;s status
            </a>
          </p>

          <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
            This request is confirmed by our team after a real availability check; a calendar invite with dial-in credentials follows the confirmation.
          </p>

          <Button variant="primary" size="sm" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Name"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all ${
                  errors.fullName ? 'border-coral-bright' : 'border-slate-300'
                }`}
              />
              {errors.fullName && <p className="text-[11px] text-coral-bright mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5">
                Corporate Email *
              </label>
              <input
                type="email"
                required
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                placeholder="corporate@domain.com"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all ${
                  errors.businessEmail ? 'border-coral-bright' : 'border-slate-300'
                }`}
              />
              {errors.businessEmail && <p className="text-[11px] text-coral-bright mt-1">{errors.businessEmail}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 40 0000 0000"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all ${
                  errors.phone ? 'border-coral-bright' : 'border-slate-300'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-coral-bright mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5">
                Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. India, United States"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all ${
                  errors.country ? 'border-coral-bright' : 'border-slate-300'
                }`}
              />
              {errors.country && <p className="text-[11px] text-coral-bright mt-1">{errors.country}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Organization"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5">
                Meeting Purpose
              </label>
              <select
                value={formData.meetingPurpose}
                onChange={(e) => setFormData({ ...formData, meetingPurpose: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all cursor-pointer"
              >
                <option value="Initial Project Scoping">Initial Project Scoping</option>
                <option value="Delivery Partnership Briefing">Delivery Partnership Briefing</option>
                <option value="Strategic Merger / M&A Discussion">Strategic Merger / M&A</option>
                <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-midnight mb-1.5 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-coral-bright" />
              <span>Select Your Time Zone</span>
            </label>
            <select
              value={formData.timeZone}
              onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all cursor-pointer"
            >
              {timeZones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-coral-bright" />
                <span>Preferred Date *</span>
              </label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all cursor-pointer ${
                  errors.preferredDate ? 'border-coral-bright' : 'border-slate-300'
                }`}
              />
              {errors.preferredDate && (
                <p className="text-[11px] text-coral-bright mt-1">{errors.preferredDate}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-midnight mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-coral-bright" />
                <span>Preferred Window</span>
              </label>
              <select
                value={formData.preferredTimeSlot}
                onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all cursor-pointer"
              >
                {timeSlots.map((ts) => (
                  <option key={ts} value={ts}>
                    {ts}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {submitError && (
            <div role="alert" className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{submitError}</span>
            </div>
          )}

          <div className="flex items-start gap-2.5">
            <input
              id="mrm-consent"
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-0.5 w-4 h-4 rounded text-coral-bright border-slate-300 focus:ring-coral-bright"
            />
            <label htmlFor="mrm-consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
              I agree that my contact details may be processed to schedule and confirm this discussion, in line with the Privacy Policy.
            </label>
          </div>
          {errors.privacyConsent && (
            <p className="text-[11px] text-coral-bright mt-1">{errors.privacyConsent}</p>
          )}

          <div className="pt-3.5 flex items-center justify-end gap-2.5 border-t border-slate-100">
            <Button variant="ghost" size="sm" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" isLoading={isSubmitting} icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Confirm Meeting Request
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
