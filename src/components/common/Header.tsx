'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { headerNavItems } from '../../data/navigationData';
import { Button } from './Button';
import { Logo } from './Logo';
import { MeetingRequestModal } from '../forms/MeetingRequestModal';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(61);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // The mobile drawer is portal-mounted outside the header, and the scroll-pinned
  // "How we work" section has to sit exactly below the bar, so both read the
  // header's measured height rather than a hardcoded offset.
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return undefined;
    const measure = () => {
      const height = node.getBoundingClientRect().height;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--cs-header-h', `${height}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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

  // Escape to close, focus management, and Tab containment while the drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    drawerRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const nodes = drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
      ref={headerRef}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3'
          : 'bg-white py-3 sm:py-3.5'
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
                    onFocus={() => setActiveDropdown(item.title)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
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
                      <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-fade-in">
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
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-navy-midnight hover:text-coral-bright hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="cs-mobile-nav"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer — portal-mounted so that the scrolled header's
          backdrop-filter can never become its containing block. */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            ref={drawerRef}
            id="cs-mobile-nav"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={(event) => {
              if (event.target === event.currentTarget) setMobileMenuOpen(false);
            }}
            style={{ top: headerHeight }}
            className="lg:hidden fixed inset-x-0 bottom-0 z-[70] flex flex-col bg-navy-midnight/40 animate-fade-in focus:outline-none"
          >
            <div
              role="navigation"
              className="min-h-0 max-h-full overflow-y-auto overscroll-contain bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-2xl"
            >
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
                        aria-expanded={!!expanded}
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
                              className="flex min-h-[44px] w-full flex-col items-start justify-center py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:text-coral-bright hover:bg-white transition-colors"
                            >
                              <div className="flex items-center justify-between w-full">
                                <span className="font-semibold">{child.title}</span>
                                {child.badge && (
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-coral-50 text-coral-bright font-bold">
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
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
          </div>,
          document.body
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
