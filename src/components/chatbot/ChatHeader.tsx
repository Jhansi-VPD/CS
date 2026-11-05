import React from 'react';
import { X, RotateCcw } from 'lucide-react';

interface Props {
  pageLabel: string;
  onRestart: () => void;
  onClose: () => void;
}

export const ChatHeader: React.FC<Props> = ({ pageLabel, onRestart, onClose }) => (
  <div className="flex items-center justify-between gap-3 px-4 py-3 bg-navy-gradient text-white border-b border-white/10">
    <div className="flex items-center gap-3 min-w-0">
      <div className="relative shrink-0 w-10 h-10 rounded-xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center overflow-hidden">
        <img src="/assets/coral-swift-official-logo.png" alt="" className="w-7 h-7 object-contain" />
      </div>
      <div className="min-w-0">
        <h2 className="text-sm font-semibold font-heading leading-tight truncate">Coral Swift Assistant</h2>
        <p className="text-[11px] text-slate-300 leading-tight truncate flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Guided assistant · viewing {pageLabel}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-1 shrink-0">
      <button
        type="button"
        onClick={onRestart}
        aria-label="Restart conversation"
        title="Restart conversation"
        className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        title="Close chat"
        className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);
