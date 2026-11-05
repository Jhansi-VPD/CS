'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Restores the pre-migration scroll behaviour: scroll to an element when the URL
 * carries a hash, otherwise scroll to the top on navigation. Runs only on the client.
 */
export const HashScroll: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
          return true;
        }
      }
      return false;
    };

    if (!scrollToHash()) {
      window.scrollTo(0, 0);
    }

    const onHashChange = () => scrollToHash();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  return null;
};
