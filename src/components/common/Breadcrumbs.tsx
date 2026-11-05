import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  dark = false
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs font-medium space-x-2 py-3 overflow-x-auto whitespace-nowrap ${className}`}
    >
      <Link
        href="/"
        className={`flex items-center transition-colors ${
          dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-coral-bright'
        }`}
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight
              className={`w-3.5 h-3.5 shrink-0 ${dark ? 'text-slate-600' : 'text-slate-400'}`}
              aria-hidden="true"
            />
            {isLast || !item.href ? (
              <span
                className={`truncate font-semibold ${
                  dark ? 'text-coral-orange' : 'text-navy-midnight'
                }`}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors truncate ${
                  dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-coral-bright'
                }`}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

