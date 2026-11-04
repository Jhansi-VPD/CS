import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'dark' | 'soft' | 'gradient-border';
  hoverEffect?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  hoverEffect = true,
  className = '',
  onClick
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-200 overflow-hidden';
  
  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-card-hover'
    : '';

  const variantStyles = {
    white: 'bg-white border border-slate-200/90 shadow-card-soft',
    dark: 'bg-navy-midnight border border-navy-border text-white shadow-xl',
    soft: 'bg-slate-50 border border-slate-200/60 shadow-none',
    'gradient-border': 'bg-white border-2 border-transparent shadow-card-soft relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-swift-gradient before:p-[2px]',
  };

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};

