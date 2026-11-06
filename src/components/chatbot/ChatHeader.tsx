'use client';

import React from 'react';
import { X, RotateCcw, GripVertical } from 'lucide-react';

interface Props {
  pageLabel: string;
  onRestart: () => void;
  onClose: () => void;
  onDragStart: (e: React.PointerEvent) => void;
  dragging: boolean;
}

const iconBtn =
  'flex items-center justify-center p-2 max-sm:min-h-[44px] max-sm:min-w-[44px] rounded-lg text-slate-400 hover:text-coral-bright hover:bg-coral-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright';

export const ChatHeader: React.FC<Props> = ({ pageLabel, onRestart, onClose, onDragStart, dragging }) => (
  <div
    onPointerDown={onDragStart}
    className={`flex items-center justify-between gap-3 px-3.5 h-14 bg-white/50 backdrop-blur-xl text-navy-midnight border-b border-slate-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] touch-none select-none ${
      dragging ? 'cursor-grabbing' : 'cursor-grab'
    }`}
  >
    <div className="flex items-center gap-3 min-w-0 pointer-events-none">
      <div className="relative shrink-0 w-10 h-10 rounded-xl bg-white/70 ring-1 ring-coral-100 flex items-center justify-center overflow-hidden shadow-card-soft">
        <img src="/assets/coral-swift-official-logo.png" alt="" className="w-7 h-7 object-contain" />
      </div>
      <div className="min-w-0">
        <h2 className="text-sm font-semibold font-heading leading-tight truncate text-navy-midnight">Coral Swift Assistant</h2>
        <p className="text-[11px] text-navy-muted leading-tight truncate flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-subtle" />
          Online · viewing {pageLabel}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-0.5 shrink-0">
      <GripVertical className="w-4 h-4 text-slate-300 mr-0.5 shrink-0" aria-hidden="true" />
      <button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onRestart}
        aria-label="Restart conversation"
        title="Restart conversation"
        className={iconBtn}
      >
        <RotateCcw className="w-4 h-4" />
      </button>
      <button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onClose}
        aria-label="Close chat"
        title="Close chat"
        className={iconBtn}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);
