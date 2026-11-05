'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
  inputRef?: React.MutableRefObject<{ focus: () => void } | null>;
}

export const ChatInput: React.FC<Props> = ({ onSend, disabled, inputRef }) => {
  const [value, setValue] = useState('');
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef) inputRef.current = { focus: () => taRef.current?.focus() };
    return () => {
      if (inputRef) inputRef.current = null;
    };
  }, [inputRef]);

  const submit = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue('');
    if (taRef.current) taRef.current.style.height = 'auto';
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const autoGrow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className="px-3 pb-1.5 pt-1 bg-white">
      <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 pl-3.5 pr-2 py-2 shadow-card-soft focus-within:border-coral-bright focus-within:bg-white focus-within:ring-2 focus-within:ring-coral-bright/25 transition-all">
        <textarea
          ref={taRef}
          id="coral-swift-assistant-input"
          name="coral-swift-assistant-message"
          rows={1}
          value={value}
          onChange={autoGrow}
          onKeyDown={onKeyDown}
          disabled={disabled}
          placeholder="Ask me anything…"
          aria-label="Message the Coral Swift Assistant"
          className="flex-1 resize-none bg-transparent text-sm text-navy-secondary placeholder:text-navy-muted max-h-[120px] py-1.5 focus:outline-none disabled:opacity-60"
        />
        <button
          type="button"
          onClick={submit}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className="shrink-0 w-9 h-9 rounded-full bg-swift-gradient hover:bg-swift-gradient-hover text-white flex items-center justify-center shadow-glow-coral transition-all disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright focus-visible:ring-offset-1"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
