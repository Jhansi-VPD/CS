'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CardSliderProps {
  items: React.ReactNode[];
  title?: string;
  badge?: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const CardSlider: React.FC<CardSliderProps> = ({
  items,
  title,
  badge,
  subtitle,
  autoPlay = false,
  interval = 5000,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = items.length;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovered, interval, total]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      next();
    } else if (diff < -45) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={`space-y-6 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {(title || badge || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            {badge && (
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-coral-50 text-coral-bright border border-coral-200 mb-2 inline-block">
                {badge}
              </span>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-midnight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-navy-midnight transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-navy-midnight transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Slider Viewport */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((child, idx) => (
            <div
              key={idx}
              className={`w-full shrink-0 transition-opacity duration-500 ${
                activeIndex === idx ? 'opacity-100' : 'opacity-40'
              }`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-1.5 pt-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={activeIndex === idx}
            className="tap-btn"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-7 bg-coral-bright'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

