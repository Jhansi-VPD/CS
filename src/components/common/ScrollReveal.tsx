'use client';

import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds (e.g. 100, 200, 300)
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  threshold?: number;
  as?: React.ElementType;
}

// Horizontal slide-in offsets are clamped on narrow viewports so the off-screen
// position never pushes content past the page's own side padding.
const DESKTOP_OFFSET = 24;
const MOBILE_OFFSET = 10;

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  as: Component = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });
  // Starts at the narrow-viewport offset: server-rendered markup has no media
  // query, so the initial (pre-hydration) transform must never exceed the page's
  // own side padding.
  const [offset, setOffset] = useState(MOBILE_OFFSET);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 640px)');
    const apply = () => setOffset(query.matches ? DESKTOP_OFFSET : MOBILE_OFFSET);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${offset}px, 0)`;
      case 'down':
        return `translate3d(0, -${offset}px, 0)`;
      case 'left':
        return `translate3d(${offset}px, 0, 0)`;
      case 'right':
        return `translate3d(-${offset}px, 0, 0)`;
      case 'scale':
        return `scale(0.97) translate3d(0, ${Math.round(offset * 0.6)}px, 0)`;
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
