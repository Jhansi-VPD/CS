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
          className="text-xs font-medium text-navy-secondary bg-white border border-slate-200 hover:border-coral-bright/60 hover:text-coral-bright rounded-full px-3 py-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
        >
          {s.label}
        </button>
      ))}
    </div>
  );
};
