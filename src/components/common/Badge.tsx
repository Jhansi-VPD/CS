import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'coral' | 'navy' | 'warning' | 'info' | 'success' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'coral',
  size = 'md',
  className = '',
  icon
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-3 py-1 font-semibold tracking-wider uppercase',
  };

  const variantStyles = {
    coral: 'bg-coral-50 text-coral-bright border border-coral-200/60',
    navy: 'bg-navy-surface text-slate-200 border border-navy-border',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full select-none transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0 w-3.5 h-3.5">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

