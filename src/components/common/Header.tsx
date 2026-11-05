'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { headerNavItems } from '../../data/navigationData';
import { Button } from './Button';
import { Logo } from './Logo';
import { MeetingRequestModal } from '../forms/MeetingRequestModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for #schedule or ?type=meeting / ?schedule=true
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;
    if (
      hash === '#schedule' ||
      hash === '#meeting' ||
      search.includes('modal=meeting') ||
      search.includes('type=meeting') ||
      search.includes('schedule=true')
    ) {
      setIsMeetingModalOpen(true);
    }
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({});
  }, [pathname]);

  const isActive = (itemHref: string) => {
    if (itemHref === '/') return pathname === '/';
    return pathname.startsWith(itemHref);
  };

  const toggleMobileSubmenu = (title: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-white border-b border-slate-100 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Coral Swift Logo */}
          <Logo variant="horizontal" size="md" />

          {/* Minimal Desktop Navigation (6 Main Items) */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {headerNavItems.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright ${
                        active
                          ? 'text-coral-bright bg-coral-50/70 font-bold'
                          : 'text-navy-midnight hover:text-coral-bright hover:bg-slate-50'
                      }`}
                      aria-expanded={activeDropdown === item.title}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'rotate-180 text-coral-bright' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Mega-Panel */}
                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-fadeIn">
                        <div className="rounded-2xl bg-white p-3 shadow-xl border border-slate-200/90 ring-1 ring-black/5 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-navy-midnight group-hover:text-coral-bright transition-colors">
                                  {child.title}
                                </span>
                                {child.badge && (
                                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-coral-50 text-coral-bright">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                                {child.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-coral-bright bg-coral-50/70 font-bold'
                      : 'text-navy-midnight hover:text-coral-bright hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Prominent CTA: Get in Touch (Opens Schedule Discussion Modal) */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsMeetingModalOpen(true)}
              className="shadow-sm hover:shadow-md transition-all font-bold px-4 py-2 cursor-pointer"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-navy-midnight hover:text-coral-bright hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bottom-0 bg-navy-midnight/40 backdrop-blur-xs z-50 animate-fadeIn">
          <div className="bg-white border-b border-slate-200 px-4 py-6 space-y-4 max-h-[calc(100vh-65px)] overflow-y-auto shadow-2xl">
            <nav className="space-y-1">
              {headerNavItems.map((item) => {
                const active = isActive(item.href);

                if (item.children) {
                  const expanded = mobileExpanded[item.title];
                  return (
                    <div key={item.title} className="space-y-1">
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.title)}
                        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-left transition-colors min-h-[44px] ${
                          active
                            ? 'bg-coral-50 text-coral-bright font-bold'
                            : 'text-navy-midnight hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180 text-coral-bright' : 'text-slate-400'}`}
                        />
                      </button>

                      {expanded && (
                        <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 px-3 rounded-lg text-xs font-medium text-slate-700 hover:text-coral-bright hover:bg-white transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold">{child.title}</span>
                                {child.badge && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-coral-50 text-coral-bright font-bold">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                {child.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-3 rounded-xl text-base font-semibold transition-colors min-h-[44px] flex items-center ${
                      active
                        ? 'bg-coral-50 text-coral-bright font-bold'
                        : 'text-navy-midnight hover:text-coral-bright hover:bg-slate-50'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Prominent CTA */}
            <div className="pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsMeetingModalOpen(true);
                }}
                className="w-full justify-center shadow-md font-bold cursor-pointer"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Introductory Discussion Modal */}
      <MeetingRequestModal
        isOpen={isMeetingModalOpen}
        onClose={() => {
          setIsMeetingModalOpen(false);
          const hash = window.location.hash;
          if (hash === '#schedule' || hash === '#meeting') {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />
    </header>
  );
};
