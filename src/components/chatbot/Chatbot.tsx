import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useChatbot } from './useChatbot';
import { ChatPanel } from './ChatPanel';
import { Suggestion } from '../../data/chatbot/chatbotTypes';

export const Chatbot: React.FC = () => {
  const { isOpen, messages, isTyping, suggestions, pageLabel, open, close, toggle, send, restart } = useChatbot();
  const inputRef = useRef<{ focus: () => void } | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  // While the cookie banner may be showing, lift the launcher so the two never overlap.
  const [raised, setRaised] = useState(false);

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

  return (
    <>
      {isOpen && (
        <div className="fixed z-[60] left-2 right-2 top-16 bottom-24 sm:left-auto sm:right-6 sm:top-auto sm:bottom-24 sm:w-[380px] sm:h-[560px] sm:max-h-[calc(100vh-8rem)]">
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
          />
        </div>
      )}

      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={toggle}
          aria-label="Open the Coral Swift Assistant"
          className={`group fixed z-[60] right-5 flex items-center gap-2 pl-3.5 pr-4 h-14 rounded-full bg-swift-gradient hover:bg-swift-gradient-hover text-white shadow-glow-accent hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright focus-visible:ring-offset-2 ${
            raised ? 'bottom-28 sm:bottom-[9.5rem]' : 'bottom-5'
          }`}
        >
          <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse-subtle" />
          </span>
          <span className="text-sm font-semibold font-heading hidden sm:inline">Ask Coral Swift</span>
        </button>
      )}
    </>
  );
};

export default Chatbot;
