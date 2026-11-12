'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { footerLinks } from '../../data/navigationData';
import { Logo } from './Logo';
import { ScrollReveal } from './ScrollReveal';
import { SocialMediaLinks } from './SocialMediaLinks';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Footer: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-navy-border bg-navy-midnight pt-6 pb-3 text-slate-300 transition-colors sm:pt-8 sm:pb-4">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-coral-bright/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-coral-purple/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {/* Brand Column */}
            <div className="space-y-2 lg:col-span-2">
              <Logo variant="horizontal" theme="dark" size="sm" />
              <p className="max-w-sm text-xs font-medium leading-relaxed text-slate-300">
                Connecting Global Opportunities with Delivery Excellence.
              </p>
              <p className="max-w-md text-[11px] leading-relaxed text-slate-400">
                A US-oriented IT and Non-IT project solutions and partnership platform connecting international project requirements with qualified delivery organizations in India and global markets.
              </p>
              <div className="pt-1">
                <h3 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Connect With Us
                </h3>
                <SocialMediaLinks />
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Solutions & Delivery
              </h3>
              <ul className="space-y-0">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-6 items-center text-xs leading-tight text-slate-400 transition-colors hover:text-coral-orange max-sm:min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnerships Column */}
            <div>
              <h3 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Delivery Partnerships
              </h3>
              <ul className="space-y-0">
                {footerLinks.partnerships.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-6 items-center text-xs leading-tight text-slate-400 transition-colors hover:text-coral-orange max-sm:min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate & Legal Column */}
            <div>
              <h3 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Company & Legal
              </h3>
              <ul className="space-y-0">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-6 items-center text-xs leading-tight text-slate-400 transition-colors hover:text-coral-orange max-sm:min-h-[44px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="mt-3 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-3 text-[11px] text-slate-400 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Coral Swift / CoralSwift Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Link href="/privacy-policy" className="inline-flex min-h-6 items-center transition-colors hover:text-slate-200 max-sm:min-h-[44px]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="inline-flex min-h-6 items-center transition-colors hover:text-slate-200 max-sm:min-h-[44px]">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-6 items-center transition-colors hover:text-slate-200 max-sm:min-h-[44px]">
              Cookie Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="flex min-h-9 min-w-9 items-center justify-center rounded-lg bg-navy-surface text-slate-400 transition-colors hover:bg-navy-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright max-sm:min-h-[44px] max-sm:min-w-[44px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
