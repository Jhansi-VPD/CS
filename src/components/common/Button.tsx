import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-swift-gradient text-white hover:bg-swift-gradient-hover shadow-glow-coral hover:shadow-glow-accent hover:-translate-y-0.5 focus-visible:ring-coral-bright',
    secondary: 'bg-navy-midnight text-white hover:bg-navy-secondary border border-navy-border shadow-sm hover:-translate-y-0.5 focus-visible:ring-navy-secondary',
    outline: 'bg-transparent text-navy-midnight hover:text-coral-bright border border-slate-300 hover:border-coral-bright/50 hover:bg-coral-50/50 focus-visible:ring-coral-bright',
    ghost: 'bg-transparent text-navy-midnight hover:text-coral-bright hover:bg-slate-100/70 focus-visible:ring-slate-300',
    white: 'bg-white text-navy-midnight hover:text-coral-bright hover:bg-slate-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-white',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!isLoading && icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link href={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

