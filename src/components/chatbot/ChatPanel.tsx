'use client';

import React, { useEffect, useRef } from 'react';
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
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const hasEngaged = messages.some((m) => m.role === 'visitor');
  const showHero = !hasEngaged;
  const welcomeText = messages.find((m) => m.role === 'assistant')?.content ?? '';

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping, suggestions, showHero]);

  return (
    <section
      role="dialog"
      aria-label="Coral Swift Assistant chat"
      className="flex flex-col w-full h-full bg-white rounded-3xl shadow-premium ring-1 ring-slate-200/70 overflow-hidden animate-chat-pop"
    >
      <ChatHeader pageLabel={pageLabel} onRestart={onRestart} onClose={onClose} />

      {showHero ? (
        <div className="chat-scroll flex-1 overflow-y-auto bg-gradient-to-b from-coral-50/50 to-white">
          <WelcomeHero
            suggestions={suggestions}
            onSelectSuggestion={onSelectSuggestion}
            welcomeText={welcomeText}
            pageLabel={pageLabel}
          />
        </div>
      ) : (
        <>
          <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white">
            <div aria-live="polite" aria-atomic="false" className="space-y-4">
              {messages.map((m) => (
                <ChatMessage key={m.id} message={m} />
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <span className="w-7 h-7 rounded-full bg-swift-gradient flex items-center justify-center text-white text-[10px] font-bold shrink-0" aria-hidden="true">
                    CS
                  </span>
                  <TypingIndicator />
                </div>
              )}
            </div>
          </div>

          {suggestions.length > 0 && !isTyping && (
            <div className="px-4 pt-3 pb-1 bg-white border-t border-slate-100">
              <SuggestionChips suggestions={suggestions} onSelect={onSelectSuggestion} />
            </div>
          )}
        </>
      )}

      <ChatInput onSend={onSend} disabled={isTyping} inputRef={inputRef} />

      <p className="text-[10px] leading-tight text-navy-muted text-center px-4 pt-1.5 pb-2 bg-white">
        Guided assistant using Coral Swift’s published information. No live AI; messages aren’t stored. Never a substitute for official confirmation.
      </p>
    </section>
  );
};
