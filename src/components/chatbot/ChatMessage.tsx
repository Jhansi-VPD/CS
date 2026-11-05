import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../../data/chatbot/chatbotTypes';

const timeFmt = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' });

export const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  const isVisitor = message.role === 'visitor';
  return (
    <div className={`flex w-full gap-2 ${isVisitor ? 'justify-end' : 'justify-start'}`}>
      {!isVisitor && (
        <span className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-swift-gradient flex items-center justify-center text-white text-[10px] font-bold shadow-sm" aria-hidden="true">
          CS
        </span>
      )}
      <div className={`max-w-[80%] flex flex-col ${isVisitor ? 'items-end' : 'items-start'}`}>
        <div
          className={`px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line break-words shadow-card-soft ${
            isVisitor
              ? 'bg-swift-gradient text-white rounded-2xl rounded-br-md'
              : 'bg-slate-100 text-navy-secondary rounded-2xl rounded-bl-md'
          }`}
        >
          {message.content}
        </div>

        {message.links && message.links.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {message.links.map((l) => (
              <Link
                key={l.to + l.label}
                href={l.to}
                className="inline-flex items-center gap-1 text-xs font-medium text-coral-bright hover:text-coral-magenta bg-coral-50 hover:bg-coral-100 border border-coral-200/70 rounded-full px-2.5 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-bright"
              >
                {l.label}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        )}

        <time className={`mt-1 text-[10px] text-navy-muted ${isVisitor ? 'mr-1' : 'ml-9'}`}>{timeFmt.format(message.timestamp)}</time>
      </div>
    </div>
  );
};
