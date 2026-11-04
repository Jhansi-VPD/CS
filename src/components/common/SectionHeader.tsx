import React from 'react';

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'coral' | 'navy' | 'warning' | 'info';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'coral',
  title,
  highlightText,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 ${isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-4 ${isCentered ? 'justify-center' : ''}`}>
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
              dark
                ? 'bg-navy-surface text-coral-orange border-navy-border'
                : badgeVariant === 'coral'
                ? 'bg-coral-50 text-coral-bright border-coral-200/80'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-navy-midnight'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="swift-gradient-text block sm:inline">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

