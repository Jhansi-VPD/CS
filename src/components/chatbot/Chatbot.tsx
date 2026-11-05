'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useChatbot } from './useChatbot';
import { ChatPanel } from './ChatPanel';
import { AssistantMascot } from './AssistantMascot';
import { Suggestion } from '../../data/chatbot/chatbotTypes';

const PANEL_W = 380;
const PANEL_H = 560;
const MARGIN = 8;
const TOP_MIN = 72;

const clampPos = (x: number, y: number) => ({
  x: Math.min(Math.max(MARGIN, x), Math.max(MARGIN, window.innerWidth - PANEL_W - MARGIN)),
  y: Math.min(Math.max(TOP_MIN, y), Math.max(TOP_MIN, window.innerHeight - PANEL_H - MARGIN)),
});

export const Chatbot: React.FC = () => {
  const { isOpen, messages, isTyping, suggestions, pageLabel, open, close, toggle, send, restart } = useChatbot();
  const inputRef = useRef<{ focus: () => void } | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // While the cookie banner may be showing, lift the launcher so the two never overlap.
  const [raised, setRaised] = useState(false);

  // Draggable panel (desktop only). pos stays null until the visitor first drags,
  // so the CSS default anchor is used and there is no positioning flash on open.
  const [isDesktop, setIsDesktop] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const onResize = () => setPos((p) => (p ? clampPos(p.x, p.y) : p));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onDragStart = (e: React.PointerEvent) => {
    if (!isDesktop || e.button !== 0) return;
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    const originX = rect.left;
    const originY = rect.top;
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    setPos({ x: originX, y: originY });
    setDragging(true);
    const onMove = (ev: PointerEvent) => {
      ev.preventDefault();
      setPos(clampPos(originX + (ev.clientX - pointerX), originY + (ev.clientY - pointerY)));
    };
    const onUp = () => {
      setDragging(false);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  useEffect(() => {
    const check = () => setRaised(!localStorage.getItem('cs_cookie_consent'));
    check();
    const onConsent = () => setRaised(false);
    window.addEventListener('cs-cookie-consent-changed', onConsent);
    window.addEventListener('storage', onConsent);
    return () => {
      window.removeEventListener('cs-cookie-consent-changed', onConsent);
      window.removeEventListener('storage', onConsent);
    };
  }, []);

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

  const wrapperStyle: React.CSSProperties | undefined =
    isDesktop && pos
      ? { left: pos.x, top: pos.y, right: 'auto', bottom: 'auto', width: PANEL_W, height: PANEL_H, maxHeight: 'none' }
      : undefined;

  return (
    <>
      {isOpen && (
        <div
          ref={panelRef}
          style={wrapperStyle}
          className={`fixed z-[60] left-2 right-2 top-16 bottom-24 sm:left-auto sm:right-6 sm:top-auto sm:bottom-24 sm:w-[380px] sm:h-[560px] sm:max-h-[calc(100vh-8rem)] ${
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

      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={toggle}
          aria-label="Open the Coral Swift Assistant"
          className={`group fixed z-[60] right-5 flex items-center justify-center w-14 h-14 rounded-full bg-white/70 backdrop-blur-xl ring-1 ring-slate-200/70 shadow-[0_10px_30px_-8px_rgba(8,11,46,0.25)] hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright focus-visible:ring-offset-2 ${
            raised ? 'bottom-28 sm:bottom-[9.5rem]' : 'bottom-5'
          }`}
        >
          <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-swift-gradient ring-2 ring-white shadow-glow-coral">
            <AssistantMascot variant="head" className="w-8 h-8" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse-subtle" />
          </span>
        </button>
      )}
    </>
  );
};

export default Chatbot;
