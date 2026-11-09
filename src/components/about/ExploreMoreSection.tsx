import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, HelpCircle, Layers } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const exploreLinks = [
  { href: '/how-it-works', label: 'How It Works', icon: Layers, dotClass: 'bg-coral-bright', hoverText: 'group-hover:text-coral-bright', hoverBorder: 'group-hover:border-coral-bright/40' },
  { href: '/insights', label: 'Insights', icon: BookOpen, dotClass: 'bg-coral-orange', hoverText: 'group-hover:text-coral-orange', hoverBorder: 'group-hover:border-coral-orange/40' },
  { href: '/faq', label: 'FAQ', icon: HelpCircle, dotClass: 'bg-coral-purple', hoverText: 'group-hover:text-coral-purple', hoverBorder: 'group-hover:border-coral-purple/40' },
];

export const ExploreMoreSection: React.FC = () => (
  <section className="bg-white border-b border-slate-200/60 py-8 sm:py-10">
    <ScrollReveal direction="up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="space-y-1">
          <h2 className="text-sm font-heading font-bold text-navy-midnight">Explore More</h2>
          <p className="text-xs text-slate-500">Our delivery process, insights and frequently asked questions.</p>
        </div>
        <nav aria-label="Explore more" className="flex flex-wrap items-center gap-2.5">
          {exploreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-navy-midnight transition-all duration-200 hover:-translate-y-0.5 ${link.hoverBorder} ${link.hoverText}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${link.dotClass}`} aria-hidden="true" />
              <link.icon className="w-3.5 h-3.5" />
              <span>{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
            </Link>
          ))}
        </nav>
      </div>
    </ScrollReveal>
  </section>
);

export default ExploreMoreSection;
