import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` setting so JS-driven scrolling can
 * honour it (CSS smooth scrolling is already handled in globals.css).
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  return reduced;
}
