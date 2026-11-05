'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { SuggestionChips } from './SuggestionChips';
import { TypingIndicator } from './TypingIndicator';
import { WelcomeHero } from './WelcomeHero';
import { ChatMessage as ChatMessageType, Suggestion } from '../../data/chatbot/chatbotTypes';

interface Props {
  messages: ChatMessageType[];
  isTyping: boolean;
  suggestions: Suggestion[];
  pageLabel: string;
  onSend: (text: string) => void;
  onSelectSuggestion: (s: Suggestion) => void;
  onRestart: () => void;
  onClose: () => void;
  inputRef: React.MutableRefObject<{ focus: () => void } | null>;
  onDragStart: (e: React.PointerEvent) => void;
  dragging: boolean;
}

export const ChatPanel: React.FC<Props> = ({
  messages,
  isTyping,
  suggestions,
  pageLabel,
  onSend,
  onSelectSuggestion,
  onRestart,
  onClose,
  inputRef,
  onDragStart,
  dragging,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dismissedSuggestions, setDismissedSuggestions] = useState(false);

  const hasEngaged = messages.some((m) => m.role === 'visitor');
  const showHero = !hasEngaged;
  const welcomeText = messages.find((m) => m.role === 'assistant')?.content ?? '';

  // Automatically reset dismissal whenever a new message arrives from either side
  const lastMessageId = messages[messages.length - 1]?.id;
  useEffect(() => {
    setDismissedSuggestions(false);
  }, [lastMessageId]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping, suggestions, showHero, dismissedSuggestions]);

  return (
    <section
      role="dialog"
      aria-label="Coral Swift Assistant chat"
      className={`flex flex-col w-full h-full rounded-3xl overflow-hidden animate-chat-pop bg-white/65 backdrop-blur-2xl ring-1 ring-white/60 border border-slate-200/50 ${
        dragging ? 'shadow-[0_28px_70px_-18px_rgba(8,11,46,0.45)]' : 'shadow-[0_18px_50px_-18px_rgba(8,11,46,0.28)]'
      }`}
    >
      <ChatHeader
        pageLabel={pageLabel}
        onRestart={onRestart}
        onClose={onClose}
        onDragStart={onDragStart}
        dragging={dragging}
      />

      {showHero ? (
        <div className="chat-scroll flex-1 overflow-y-auto bg-gradient-to-b from-coral-50/60 to-white/30">
          <WelcomeHero
            suggestions={suggestions}
            onSelectSuggestion={onSelectSuggestion}
            welcomeText={welcomeText}
            pageLabel={pageLabel}
          />
        </div>
      ) : (
        <>
          <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white/20">
            <div aria-live="polite" aria-atomic="false" className="space-y-4">
              {messages.map((m) => (
                <ChatMessage key={m.id} message={m} />
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <span className="w-7 h-7 rounded-full bg-swift-gradient flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm" aria-hidden="true">
                    CS
                  </span>
                  <TypingIndicator />
                </div>
              )}
            </div>
          </div>

          {suggestions.length > 0 && !isTyping && !dismissedSuggestions && (
            <div className="px-3.5 pt-2.5 pb-2 bg-white/50 backdrop-blur-md border-t border-slate-200/50 animate-fadeIn">
              <SuggestionChips
                suggestions={suggestions}
                onSelect={onSelectSuggestion}
                onDismiss={() => setDismissedSuggestions(true)}
              />
            </div>
          )}

          {suggestions.length > 0 && !isTyping && dismissedSuggestions && (
            <div className="px-3.5 py-1 bg-white/20 border-t border-slate-200/30 flex justify-end">
              <button
                type="button"
                onClick={() => setDismissedSuggestions(false)}
                className="text-[10px] font-mono text-slate-400 hover:text-coral-bright transition-colors"
                title="View suggested questions"
              >
                + Suggested questions ({suggestions.length})
              </button>
            </div>
          )}
        </>
      )}

      <ChatInput onSend={onSend} disabled={isTyping} inputRef={inputRef} />

      <p className="text-[10px] leading-tight text-navy-muted text-center px-4 pt-1.5 pb-2 bg-transparent">
        Guided assistant using Coral Swift’s published information. No live AI; messages aren’t stored. Never a substitute for official confirmation.
      </p>
    </section>
  );
};
