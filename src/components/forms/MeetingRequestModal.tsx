'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { MeetingRequestFormData } from '../../types';

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
    companyName: '',
    timeZone: 'Eastern Time (US & Canada) - EST/EDT',
    preferredDate: '',
    preferredTimeSlot: '09:00 AM - 09:30 AM',
    meetingPurpose: 'Initial Project Scoping'
  });

  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessEmail || !formData.preferredDate) {
      alert('Please fill in your name, email, and preferred date.');
      return;
    }

    const ref = `CS-CAL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setBookingRef('');
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      timeZone: 'Eastern Time (US & Canada) - EST/EDT',
      preferredDate: '',
      preferredTimeSlot: '09:00 AM - 09:30 AM',
      meetingPurpose: 'Initial Project Scoping'
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

          <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
            <em>Interactive Simulation Notice:</em> In production, this verifies calendar availability and generates a calendar invite with dial-in credentials.
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
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all"
              />
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
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all"
              />
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
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-coral-bright/25 focus:border-coral-bright transition-all cursor-pointer"
              />
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

          <div className="pt-3.5 flex items-center justify-end gap-2.5 border-t border-slate-100">
            <Button variant="ghost" size="sm" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Confirm Meeting Request
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
