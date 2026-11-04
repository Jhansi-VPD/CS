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
  threshold = 0.1,
  as: Component = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const getTransformStyle = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return 'translateY(24px)';
      case 'down':
        return 'translateY(-24px)';
      case 'left':
        return 'translateX(24px)';
      case 'right':
        return 'translateX(-24px)';
      case 'scale':
        return 'scale(0.96) translateY(12px)';
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformStyle(),
    transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Component ref={ref} style={style} className={className}>
      {children}
    </Component>
  );
};

