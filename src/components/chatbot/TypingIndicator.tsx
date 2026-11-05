import React from 'react';

export const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-slate-100 w-fit" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-navy-muted animate-typing-dot"
        style={{ animationDelay: `${i * 160}ms` }}
      />
    ))}
  </div>
);
