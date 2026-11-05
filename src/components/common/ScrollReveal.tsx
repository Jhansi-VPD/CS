'use client';

import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds (e.g. 100, 200, 300)
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  threshold?: number;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  as: Component = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const getTransformStyle = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)';
      case 'down':
        return 'translate3d(0, -24px, 0)';
      case 'left':
        return 'translate3d(24px, 0, 0)';
      case 'right':
        return 'translate3d(-24px, 0, 0)';
      case 'scale':
        return 'scale(0.97) translate3d(0, 14px, 0)';
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformStyle(),
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Component ref={ref} style={style} className={className}>
      {children}
    </Component>
  );
};
