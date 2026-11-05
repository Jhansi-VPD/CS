import React from 'react';
import { Suggestion } from '../../data/chatbot/chatbotTypes';

interface Props {
  suggestions: Suggestion[];
  onSelect: (s: Suggestion) => void;
  disabled?: boolean;
}

export const SuggestionChips: React.FC<Props> = ({ suggestions, onSelect, disabled }) => {
  if (!suggestions.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label="Suggested questions">
      {suggestions.map((s) => (
        <button
          key={s.label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(s)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-secondary bg-white border border-slate-200 hover:border-coral-bright/70 hover:text-coral-bright rounded-full pl-2.5 pr-3.5 py-1.5 shadow-card-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
        >
          <span className="w-2 h-2 rounded-full bg-swift-gradient shrink-0" aria-hidden="true" />
          {s.label}
        </button>
      ))}
    </div>
  );
};
