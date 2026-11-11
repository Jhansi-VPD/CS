'use client';

import React, { useEffect } from 'react';

const INTRO_FLAG = 'cs-intro-shown';
const FAILSAFE_MS = 3000;

/**
 * First-visit brand splash. This overlay is server-rendered, so it covers the
 * site from the very first paint — the intro always plays first and the site
 * is revealed when the panel lifts (pure CSS: hold 0.85s, curtain 0.5s).
 * This client companion only sets the once-per-session flag, skips early on
 * any interaction, and force-hides the overlay as a failsafe. Repeat visits
 * never flash it: the inline head script in layout.tsx hides the overlay
 * before first paint when the flag is already set.
 */
export const LogoIntro: React.FC = () => {
  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(INTRO_FLAG) === '1';
      window.sessionStorage.setItem(INTRO_FLAG, '1');
    } catch {
      // Storage unavailable (private mode): play for this mount only
    }
    if (alreadyShown) return undefined;

    const el = document.getElementById('cs-intro');
    if (!el) return undefined;

    const skip = () => {
      el.style.animation = 'csIntroLift 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards';
    };
    window.addEventListener('pointerdown', skip, { once: true });
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('wheel', skip, { passive: true, once: true });
    window.addEventListener('touchstart', skip, { passive: true, once: true });

    const failsafe = setTimeout(() => {
      el.style.display = 'none';
    }, FAILSAFE_MS);

    return () => {
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchstart', skip);
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      id="cs-intro"
      aria-hidden="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FFF9F5] select-none"
    >
      <div className="flex flex-col items-center">
        <img
          src="/assets/coral-swift-official-logo.png"
          alt=""
          className="cs-intro-emblem h-24 w-auto object-contain"
        />
        <span className="cs-intro-wordmark mt-6 font-mono text-lg font-bold uppercase tracking-[0.4em] text-navy-midnight">
          Coral Swift
        </span>
        <span className="cs-intro-rule mt-4 h-px w-14 bg-coral-bright/70" aria-hidden="true" />
      </div>
    </div>
  );
};

export default LogoIntro;
