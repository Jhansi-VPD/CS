import React from 'react';
import Link from 'next/link';

export interface LogoProps {
  variant?: 'horizontal' | 'emblem-only' | 'stacked';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  asLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
  asLink = true,
}) => {
  // Dimensions for the exact official Coral Swift logo emblem
  const emblemSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
    xl: 'h-16 w-auto',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-xl font-extrabold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
    xl: 'text-3xl font-extrabold tracking-tight',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-widest',
  };

  // The emblem image using the official asset
  const emblemElement = (
    <div className="relative shrink-0 flex items-center justify-center">
      <img
        src="/assets/coral-swift-official-logo.png"
        alt="Coral Swift Emblem"
        className={`${emblemSizes[size]} object-contain select-none transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );

  if (variant === 'emblem-only') {
    if (asLink) {
      return (
        <Link
          href="/"
          className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright rounded-lg ${className}`}
          aria-label="Coral Swift Home"
        >
          {emblemElement}
        </Link>
      );
    }
    return <div className={`inline-flex items-center ${className}`}>{emblemElement}</div>;
  }

  const textContent = (
    <div className={`flex flex-col leading-none ${variant === 'stacked' ? 'items-center text-center mt-2' : ''}`}>
      <div className={`font-heading ${titleSizes[size]} ${theme === 'dark' ? 'text-white' : 'text-navy-midnight'}`}>
        <span>Coral</span>
        <span className="swift-gradient-text ml-0.5">Swift</span>
      </div>
      {showSubtitle && (
        <span
          className={`font-semibold uppercase ${subtitleSizes[size]} mt-1 font-mono ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          TECHNOLOGIES
        </span>
      )}
    </div>
  );

  const containerClasses = `inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright rounded-lg ${
    variant === 'stacked' ? 'flex-col' : 'gap-3'
  } ${className}`;

  if (asLink) {
    return (
      <Link href="/" className={containerClasses} aria-label="Coral Swift Home">
        {emblemElement}
        {textContent}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {emblemElement}
      {textContent}
    </div>
  );
};

export default Logo;

