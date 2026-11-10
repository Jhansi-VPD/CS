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
    <footer className="bg-navy-midnight text-slate-300 border-t border-navy-border pt-16 pb-12 relative overflow-hidden transition-colors">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral-bright/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-coral-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <Logo variant="horizontal" theme="dark" size="lg" />
              <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
                Connecting Global Opportunities with Delivery Excellence.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                A US-oriented IT and Non-IT project solutions and partnership platform connecting international project requirements with qualified delivery organizations in India and global markets.
              </p>
              <div className="pt-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Connect With Us
                </h3>
                <SocialMediaLinks />
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Solutions & Delivery
              </h3>
              <ul className="space-y-1">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[36px] items-center text-sm text-slate-400 hover:text-coral-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnerships Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Delivery Partnerships
              </h3>
              <ul className="space-y-1">
                {footerLinks.partnerships.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[36px] items-center text-sm text-slate-400 hover:text-coral-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate & Legal Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Company & Legal
              </h3>
              <ul className="space-y-1">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[36px] items-center text-sm text-slate-400 hover:text-coral-orange transition-colors"
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
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Coral Swift / CoralSwift Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="inline-flex min-h-[36px] items-center hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="inline-flex min-h-[36px] items-center hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="inline-flex min-h-[36px] items-center hover:text-slate-200 transition-colors">
              Cookie Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-navy-surface text-slate-400 hover:text-white hover:bg-navy-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
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
