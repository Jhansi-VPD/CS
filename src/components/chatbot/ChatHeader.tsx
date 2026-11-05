import React from 'react';
import { X, RotateCcw } from 'lucide-react';

interface Props {
  pageLabel: string;
  onRestart: () => void;
  onClose: () => void;
}

export const ChatHeader: React.FC<Props> = ({ pageLabel, onRestart, onClose }) => (
  <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white/80 backdrop-blur border-b border-slate-100">
    <div className="flex items-center gap-3 min-w-0">
      <div className="relative shrink-0 w-10 h-10 rounded-xl bg-swift-subtle ring-1 ring-coral-100 flex items-center justify-center overflow-hidden">
        <img src="/assets/coral-swift-official-logo.png" alt="" className="w-7 h-7 object-contain" />
      </div>
      <div className="min-w-0">
        <h2 className="text-sm font-semibold font-heading leading-tight truncate text-navy-midnight">Coral Swift Assistant</h2>
        <p className="text-[11px] text-navy-muted leading-tight truncate flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Online · viewing {pageLabel}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-1 shrink-0">
      <button
        type="button"
        onClick={onRestart}
        aria-label="Restart conversation"
        title="Restart conversation"
        className="p-2 rounded-lg text-slate-400 hover:text-navy-secondary hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        title="Close chat"
        className="p-2 rounded-lg text-slate-400 hover:text-navy-secondary hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);
