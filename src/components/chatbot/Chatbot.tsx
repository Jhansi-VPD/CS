'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useChatbot } from './useChatbot';
import { ChatPanel } from './ChatPanel';
import { AssistantMascot } from './AssistantMascot';
import { Suggestion } from '../../data/chatbot/chatbotTypes';

const MARGIN = 8;

const headerHeight = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--cs-header-h');
  const px = parseInt(raw, 10);
  return Number.isNaN(px) ? 68 : px;
};

// Dragging stores an offset from the panel's CSS anchor instead of absolute
// coordinates, so its responsive width/height caps survive at every viewport size.
// The result is clamped against the un-translated anchor, which keeps the panel
// fully on screen and below the sticky header.
const clampOffset = (
  dx: number,
  dy: number,
  rect: DOMRect,
  base: { x: number; y: number },
) => {
  const minDx = MARGIN - base.x;
  const maxDx = window.innerWidth - rect.width - MARGIN - base.x;
  const minDy = headerHeight() + MARGIN - base.y;
  const maxDy = window.innerHeight - rect.height - MARGIN - base.y;
  return {
    dx: Math.min(Math.max(minDx, dx), Math.max(minDx, maxDx)),
    dy: Math.min(Math.max(minDy, dy), Math.max(minDy, maxDy)),
  };
};

export const Chatbot: React.FC = () => {
  const { isOpen, messages, isTyping, suggestions, pageLabel, open, close, toggle, send, restart } = useChatbot();
  const inputRef = useRef<{ focus: () => void } | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // While the cookie banner is showing the launcher steps out of the way: the
  // banner is taller than any safe raise offset on a phone.
  const [consentPending, setConsentPending] = useState(false);
  // On phones the on-screen keyboard occupies the bottom of the viewport, so the
  // launcher steps aside while a form field holds focus.
  const [fieldFocused, setFieldFocused] = useState(false);

  useEffect(() => {
    const isField = (target: EventTarget | null): target is HTMLElement =>
      target instanceof HTMLElement &&
      target.matches('input:not([type="hidden"]),select,textarea');

    const onFocusIn = (event: FocusEvent) => {
      if (!isField(event.target)) return;
      // The assistant's own composer must not hide the launcher.
      if (panelRef.current?.contains(event.target)) return;
      if (window.innerWidth < 640) setFieldFocused(true);
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!isField(event.target)) return;
      if (!isField(event.relatedTarget)) setFieldFocused(false);
    };

    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);
    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  // The open panel can be repositioned; its CSS anchor remains in place until dragged.
  const [offset, setOffset] = useState({ dx: 0, dy: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const clampTo = (
      o: { dx: number; dy: number },
      el: HTMLElement | null,
    ) => {
      if ((o.dx === 0 && o.dy === 0) || !el) return o;
      const rect = el.getBoundingClientRect();
      return clampOffset(o.dx, o.dy, rect, { x: rect.left - o.dx, y: rect.top - o.dy });
    };
    const onResize = () => {
      setOffset((o) => clampTo(o, panelRef.current));
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  // Translate an element by the pointer delta from its CSS anchor, clamped to the
  // viewport, so it keeps its responsive size instead of switching to fixed pixels.
  const runDrag = (
    e: React.PointerEvent,
    node: HTMLElement | null,
    current: { dx: number; dy: number },
    apply: (o: { dx: number; dy: number }) => void,
    setDragState: (v: boolean) => void,
  ) => {
    if (e.button !== 0) return;
    const rect = node?.getBoundingClientRect();
    if (!rect) return;
    const base = { x: rect.left - current.dx, y: rect.top - current.dy };
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    setDragState(true);
    const onMove = (ev: PointerEvent) => {
      ev.preventDefault();
      apply(clampOffset(
        current.dx + (ev.clientX - pointerX),
        current.dy + (ev.clientY - pointerY),
        rect,
        base,
      ));
    };
    const onEnd = () => {
      setDragState(false);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
    };
    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);
  };

  const onDragStart = (e: React.PointerEvent) =>
    runDrag(e, panelRef.current, offset, setOffset, setDragging);

  const onLauncherClick = () => toggle();

  useEffect(() => {
    const check = () => setConsentPending(!localStorage.getItem('cs_cookie_consent'));
    check();
    const onConsent = () => setConsentPending(false);
    const onStorage = (event: StorageEvent) => {
      if (event.key === 'cs_cookie_consent') onConsent();
    };
    window.addEventListener('cs-cookie-consent-changed', onConsent);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('cs-cookie-consent-changed', onConsent);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Re-anchor to the CSS default position whenever the panel is closed so a
  // stale dragged offset can never leave it off-screen after a rotation.
  useEffect(() => {
    if (!isOpen) {
      setOffset({ dx: 0, dy: 0 });
      setFieldFocused(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 260);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close();
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const onSelectSuggestion = (s: Suggestion) => send(s.label, s.intentId);
  const handleRestart = () => {
    restart();
    setTimeout(() => inputRef.current?.focus(), 60);
  };

  // Only the offset changes while dragging; width/height stay driven by CSS so the
  // panel keeps its viewport cap in short (landscape) windows.
  const wrapperStyle: React.CSSProperties | undefined =
    offset.dx !== 0 || offset.dy !== 0
      ? { transform: `translate(${offset.dx}px, ${offset.dy}px)` }
      : undefined;

  return (
    <>
      {isOpen && (
        <div
          ref={panelRef}
          style={wrapperStyle}
          className={`fixed z-[60] left-2 right-2 mx-auto max-w-[380px] top-[calc(var(--cs-header-h)+0.5rem)] bottom-[calc(6rem+env(safe-area-inset-bottom))] sm:left-auto sm:right-6 sm:mx-0 sm:top-auto sm:bottom-24 sm:w-[380px] sm:h-[560px] sm:max-h-[calc(100dvh-var(--cs-header-h)-6rem)] ${
            dragging ? 'select-none' : ''
          }`}
        >
          <ChatPanel
            messages={messages}
            isTyping={isTyping}
            suggestions={suggestions}
            pageLabel={pageLabel}
            onSend={send}
            onSelectSuggestion={onSelectSuggestion}
            onRestart={handleRestart}
            onClose={close}
            inputRef={inputRef}
            onDragStart={onDragStart}
            dragging={dragging}
          />
        </div>
      )}

      {!isOpen && !fieldFocused && !consentPending && (
        <div
          className="fixed z-[60] right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))]"
        >
          <button
            ref={launcherRef}
            type="button"
            onClick={onLauncherClick}
            aria-label="Open the Coral Swift Assistant"
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/70 backdrop-blur-xl ring-1 ring-slate-200/70 shadow-[0_10px_30px_-8px_rgba(8,11,46,0.25)] hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright focus-visible:ring-offset-2"
          >
            <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-swift-gradient ring-2 ring-white shadow-glow-coral">
              <AssistantMascot variant="head" className="w-8 h-8" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse-subtle" />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Chatbot;
