'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const INTRO_FLAG = 'cs-intro-shown';
const AUTO_DISMISS_MS = 2400;
const FAILSAFE_MS = 4000;

/**
 * First-visit logo intro. Plays once per browser session (sessionStorage gate),
 * so refreshing or returning to Home within the session never replays it.
 * A hard failsafe timer guarantees the overlay can never stay stuck, and any
 * user interaction (click, key, scroll, touch) dismisses it immediately.
 */
export const LogoIntro: React.FC = () => {
  const [phase, setPhase] = useState<'hidden' | 'playing' | 'leaving'>('hidden');
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const dismiss = useCallback(() => {
    setPhase((current) => (current === 'playing' ? 'leaving' : current));
  }, []);

  useEffect(() => {
    let hidden = false;
    try {
      hidden = window.sessionStorage.getItem(INTRO_FLAG) === '1';
    } catch {
      // Storage unavailable (private mode): still show once for this mount only
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hidden || reducedMotion) {
      try {
        window.sessionStorage.setItem(INTRO_FLAG, '1');
      } catch {
        // ignore
      }
      return undefined;
    }

    try {
      window.sessionStorage.setItem(INTRO_FLAG, '1');
    } catch {
      // ignore
    }

    document.body.style.overflow = 'hidden';
    setPhase('playing');

    timers.current.push(setTimeout(dismiss, AUTO_DISMISS_MS));
    // Failsafe: force-remove the overlay no matter what
    timers.current.push(
      setTimeout(() => {
        clearTimers();
        setPhase('hidden');
      }, FAILSAFE_MS)
    );

    const onUserActivity = () => dismiss();
    window.addEventListener('pointerdown', onUserActivity, { once: true });
    window.addEventListener('keydown', onUserActivity, { once: true });
    window.addEventListener('wheel', onUserActivity, { passive: true, once: true });
    window.addEventListener('touchstart', onUserActivity, { passive: true, once: true });

    return () => {
      clearTimers();
      document.body.style.overflow = '';
      window.removeEventListener('pointerdown', onUserActivity);
      window.removeEventListener('keydown', onUserActivity);
      window.removeEventListener('wheel', onUserActivity);
      window.removeEventListener('touchstart', onUserActivity);
    };
  }, [dismiss, clearTimers]);

  // Clean up body lock when the leaving fade finishes
  useEffect(() => {
    if (phase !== 'leaving') return undefined;
    const t = setTimeout(() => setPhase('hidden'), 500);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === 'hidden') document.body.style.overflow = '';
  }, [phase]);

  if (phase === 'hidden') return null;

  return createPortal(
    <div
      aria-hidden="true"
      onClick={dismiss}
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#080B2E] select-none ${
        phase === 'leaving' ? 'opacity-0 transition-opacity duration-500 ease-out' : 'opacity-100'
      }`}
    >
      {/* Ambient brand glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral-bright/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-coral-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center gap-5">
        <img
          src="/assets/coral-swift-official-logo.png"
          alt=""
          className={`h-24 w-auto sm:h-28 object-contain cs-intro-emblem ${
            phase === 'leaving' ? 'cs-intro-out' : ''
          }`}
        />
        <div
          className={`flex items-baseline gap-1 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white cs-intro-wordmark ${
            phase === 'leaving' ? 'cs-intro-out' : ''
          }`}
        >
          <span>Coral</span>
          <span className="swift-gradient-text ml-0.5">Swift</span>
        </div>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400 cs-intro-tagline ${
            phase === 'leaving' ? 'cs-intro-out' : ''
          }`}
        >
          Technologies
        </span>
      </div>
    </div>,
    document.body
  );
};

export default LogoIntro;
