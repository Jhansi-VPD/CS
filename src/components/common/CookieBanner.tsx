'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cs_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cs_cookie_consent', 'all');
    window.dispatchEvent(new Event('cs-cookie-consent-changed'));
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cs_cookie_consent', 'essential');
    window.dispatchEvent(new Event('cs-cookie-consent-changed'));
    setIsVisible(false);
  };

  // Dismissing records a choice; otherwise the banner returns on every navigation
  // and the chatbot launcher stays permanently raised to avoid it.
  const handleDismiss = () => {
    localStorage.setItem('cs_cookie_consent', 'dismissed');
    window.dispatchEvent(new Event('cs-cookie-consent-changed'));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto bg-navy-midnight text-white p-5 rounded-2xl shadow-2xl border border-navy-border animate-slide-up"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-coral-orange shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white">Privacy & Cookie Preferences</h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Coral Swift uses necessary cookies to ensure proper website functionality. We respect data minimization and do not track sensitive personal information.{' '}
            <Link href="/cookie-policy" className="text-coral-orange hover:underline">
              Read Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={handleAcceptAll}
              className="text-xs"
            >
              Accept All
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleEssentialOnly}
              className="text-xs"
            >
              Essential Only
            </Button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="shrink-0 -m-2 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-white rounded-md transition-colors"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

