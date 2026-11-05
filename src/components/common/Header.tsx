import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for #schedule or ?type=meeting / ?schedule=true
  useEffect(() => {
    if (
      location.hash === '#schedule' ||
      location.hash === '#meeting' ||
      location.search.includes('modal=meeting') ||
      location.search.includes('type=meeting') ||
      location.search.includes('schedule=true')
    ) {
      setIsMeetingModalOpen(true);
    }
  }, [location.hash, location.search]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({});
  }, [location.pathname]);

  const isActive = (itemHref: string) => {
    if (itemHref === '/') return location.pathname === '/';
    return location.pathname.startsWith(itemHref);
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2'
          : 'bg-white border-b border-slate-100 py-2'
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
                const isDropdownOpen = activeDropdown === item.title;

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-150 ${
                        active
                          ? 'text-coral-bright bg-coral-50/70 font-bold'
                          : 'text-navy-midnight hover:text-coral-bright hover:bg-slate-50'
                      }`}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-coral-bright' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Short & Clean Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-fadeIn">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2 overflow-hidden ring-1 ring-black/5">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-navy-midnight group-hover:text-coral-bright transition-colors">
                                  {subItem.title}
                                </span>
                                {subItem.badge && (
                                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-coral-50 text-coral-bright border border-coral-200">
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                                {subItem.description}
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
                  to={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-150 ${
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
              className="p-2 rounded-xl text-navy-midnight hover:text-coral-bright hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Navigation
              </span>
              <span className="text-[10px] font-bold text-coral-bright uppercase tracking-wider bg-coral-50 px-2 py-0.5 rounded">
                Menu
              </span>
            </div>

            {headerNavItems.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                const isSubmenuOpen = !!mobileExpanded[item.title];

                return (
                  <div key={item.title} className="border-b border-slate-100 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.title)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold text-navy-midnight hover:text-coral-bright transition-colors rounded-xl"
                    >
                      <span className={active ? 'text-coral-bright font-bold' : ''}>
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isSubmenuOpen ? 'rotate-180 text-coral-bright' : ''
                        }`}
                      />
                    </button>

                    {isSubmenuOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50 rounded-xl mb-1">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block px-3 py-2 text-xs font-semibold text-navy-midnight hover:text-coral-bright rounded-lg transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span>{subItem.title}</span>
                              {subItem.badge && (
                                <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-coral-50 text-coral-bright">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-slate-500 font-normal block mt-0.5">
                              {subItem.description}
                            </span>
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
                  to={item.href}
                  className={`block px-3 py-2.5 text-base font-semibold rounded-xl transition-colors ${
                    active
                      ? 'bg-coral-50 text-coral-bright font-bold'
                      : 'text-navy-midnight hover:text-coral-bright hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

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
          if (location.hash === '#schedule' || location.hash === '#meeting') {
            window.history.replaceState(null, '', location.pathname + location.search);
          }
        }}
      />
    </header>
  );
};
