import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { footerLinks } from '../../data/navigationData';
import { Logo } from './Logo';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Solutions & Delivery
              </h3>
              <ul className="space-y-2.5 text-xs">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-coral-orange transition-colors"
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
              <ul className="space-y-2.5 text-xs">
                {footerLinks.partnerships.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-coral-orange transition-colors"
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
              <ul className="space-y-2.5 text-xs">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-coral-orange transition-colors"
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
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Coral Swift / CoralSwift Technologies. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-surface text-slate-400 hover:text-white hover:bg-navy-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
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
