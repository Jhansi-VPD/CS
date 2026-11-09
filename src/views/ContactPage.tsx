'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { GeneralContactForm } from '../components/forms/GeneralContactForm';
import { ProjectEnquiryForm } from '../components/forms/ProjectEnquiryForm';
import { PartnerApplicationForm } from '../components/forms/PartnerApplicationForm';
import { StrategicEnquiryForm } from '../components/forms/StrategicEnquiryForm';
import { MeetingRequestModal } from '../components/forms/MeetingRequestModal';
import { Mail, Phone, MapPin, Calendar, ShieldAlert, ArrowRight, MessageSquare, Briefcase, Handshake, Lock } from 'lucide-react';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ContactPage: React.FC = () => {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'general';

  const [activeForm, setActiveForm] = useState<'general' | 'project' | 'partner' | 'strategic'>(
    initialType === 'project'
      ? 'project'
      : initialType === 'partner'
      ? 'partner'
      : initialType === 'strategic'
      ? 'strategic'
      : 'general'
  );

  // Only this page's own button opens this instance. The ?modal=meeting /
  // #schedule URLs are handled by the single header-owned instance, so the two
  // can never stack into duplicate dialogs.
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Business Enquiries | Coral Swift';
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#FFF7F2] via-white to-white border-b border-slate-200/80 pt-8 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div className="mt-6 max-w-3xl animate-fadeIn">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200">
              Direct Communication
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-midnight mt-3 tracking-tight">
              Connect with Coral Swift
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Tell us what you need: a project, a partnership, a strategic discussion, or a meeting request.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Communication Channels & Meeting Scheduler */}
            <ScrollReveal direction="left" className="lg:col-span-4 space-y-6">
              {/* Meeting Card */}
              <Card variant="dark" className="p-6 space-y-4 hover-lift">
                <div className="w-10 h-10 rounded-xl bg-navy-surface text-coral-orange flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Request an Introductory Call</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Send a meeting request for a time-zone aware introductory call with our team.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setIsMeetingOpen(true)}
                  className="w-full justify-center"
                >
                  Request a Meeting
                </Button>
              </Card>

              {/* Verified Contact Details Disclosure */}
              <Card variant="white" className="p-6 space-y-4 border border-slate-200 hover-lift">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-midnight">
                  <ShieldAlert className="w-4 h-4 text-coral-bright" />
                  <span>Contact Details</span>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-midnight block">Email:</strong>
                      <span className="text-slate-500">Official domain email coming once the corporate registry is confirmed.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-midnight block">Delivery Partner Network:</strong>
                      <span className="text-slate-500">Partner delivery ecosystem based in Hyderabad, Telangana, India.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-midnight block">Phone:</strong>
                      <span className="text-slate-500">Corporate lines to be confirmed.</span>
                    </div>
                  </div>
                </div>

              </Card>

              {/* Quick Links */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <h4 className="font-bold text-navy-midnight">Need Immediate Answers?</h4>
                <p className="text-slate-500">
                  Answers on partner eligibility, scope, and engagement models:
                </p>
                <Link href="/faq" className="text-coral-bright font-bold hover:underline inline-flex tap-link items-center gap-1 pt-1">
                  <span>Visit Knowledge Base & FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Dynamic Interactive Form Selector */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-8 space-y-6">
              {/* Form Navigation Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveForm('general')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeForm === 'general'
                      ? 'bg-white text-navy-midnight shadow-sm'
                      : 'text-slate-600 hover:text-navy-midnight'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>General</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveForm('project')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeForm === 'project'
                      ? 'bg-white text-coral-bright shadow-sm'
                      : 'text-slate-600 hover:text-navy-midnight'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Project Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveForm('partner')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeForm === 'partner'
                      ? 'bg-white text-navy-midnight shadow-sm'
                      : 'text-slate-600 hover:text-navy-midnight'
                  }`}
                >
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Partner Apply</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveForm('strategic')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeForm === 'strategic'
                      ? 'bg-white text-coral-magenta shadow-sm'
                      : 'text-slate-600 hover:text-navy-midnight'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Strategic M&A</span>
                </button>
              </div>

              {/* Render Active Form Component */}
              <div className="animate-fadeIn">
                {activeForm === 'general' && <GeneralContactForm />}
                {activeForm === 'project' && <ProjectEnquiryForm />}
                {activeForm === 'partner' && <PartnerApplicationForm />}
                {activeForm === 'strategic' && <StrategicEnquiryForm />}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meeting Request Modal */}
      <MeetingRequestModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />
    </div>
  );
};
