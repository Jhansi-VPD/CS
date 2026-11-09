'use client';

import React, { useEffect, useState } from 'react';
import { Suggestion } from '../../data/chatbot/chatbotTypes';

interface Props {
  suggestions: Suggestion[];
  onSelectSuggestion: (s: Suggestion) => void;
  welcomeText: string;
  pageLabel: string;
}

const greetingFor = (hour: number): string =>
  hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

export const WelcomeHero: React.FC<Props> = ({ suggestions, onSelectSuggestion, welcomeText, pageLabel }) => {
  // Resolved after mount so the server and client markup match on the first render.
  const [greeting, setGreeting] = useState('Welcome');
  useEffect(() => setGreeting(greetingFor(new Date().getHours())), []);

  return (
    <div className="cs-hero-in flex flex-col items-center text-center px-5 pt-8 pb-5">
      <p className="text-sm font-heading font-bold swift-gradient-text">{greeting}!</p>
      <h2 className="text-xl font-heading font-extrabold text-navy-midnight mt-1 leading-tight">
        How can I help you today?
      </h2>
      <p className="text-sm text-navy-muted leading-relaxed mt-2 max-w-[34ch]">{welcomeText}</p>

      {suggestions.length > 0 && (
        <div className="relative w-full mt-6">
          <span
            className="absolute left-1/2 -top-4 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-coral-bright/40 to-transparent"
            aria-hidden="true"
          />
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Suggested questions">
            {suggestions.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => onSelectSuggestion(s)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-secondary bg-white/70 backdrop-blur border border-white/60 hover:border-coral-bright/60 hover:bg-white/90 hover:text-coral-bright rounded-full pl-2.5 pr-3.5 py-2 max-sm:min-h-[44px] shadow-card-soft hover:shadow-card-hover hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
              >
                <span className="w-2 h-2 rounded-full bg-swift-gradient shrink-0" aria-hidden="true" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-[11px] text-navy-muted mt-5">Guided assistant · viewing {pageLabel}</p>
    </div>
  );
};

export default WelcomeHero;
