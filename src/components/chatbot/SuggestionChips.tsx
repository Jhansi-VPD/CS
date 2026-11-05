import React from 'react';
import { X } from 'lucide-react';
import { Suggestion } from '../../data/chatbot/chatbotTypes';

interface Props {
  suggestions: Suggestion[];
  onSelect: (s: Suggestion) => void;
  onDismiss?: () => void;
  disabled?: boolean;
}

export const SuggestionChips: React.FC<Props> = ({ suggestions, onSelect, onDismiss, disabled }) => {
  if (!suggestions.length) return null;
  return (
    <div className="space-y-1.5" role="group" aria-label="Suggested questions">
      {onDismiss && (
        <div className="flex items-center justify-between px-0.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Suggested questions
          </span>
          <button
            type="button"
            onClick={onDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-navy-midnight hover:bg-slate-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
            aria-label="Close suggested questions"
            title="Close suggested questions"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
      <div className="flex flex-wrap gap-1.5">
        {suggestions.map((s) => (
          <button
            key={s.label}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(s)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-secondary bg-white/70 backdrop-blur border border-white/60 hover:border-coral-bright/60 hover:bg-white/90 hover:text-coral-bright rounded-full pl-2.5 pr-3.5 py-1.5 shadow-card-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright text-left"
          >
            <span className="w-2 h-2 rounded-full bg-swift-gradient shrink-0" aria-hidden="true" />
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
