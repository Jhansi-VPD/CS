import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { assistantEngine } from '../../data/chatbot/chatbotAssistant';
import { resolvePage } from '../../data/chatbot/chatbotKnowledge';
import { ChatMessage, ConversationState, AssistantReply, createInitialConversationState, Suggestion } from '../../data/chatbot/chatbotTypes';

let seq = 0;
const uid = (): string => `m${Date.now().toString(36)}${(seq++).toString(36)}`;

export interface UseChatbot {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  suggestions: Suggestion[];
  pageLabel: string;
  open: () => void;
  close: () => void;
  toggle: () => void;
  send: (text: string, forcedIntentId?: string) => void;
  restart: () => void;
}

export const useChatbot = (): UseChatbot => {
  const location = useLocation();
  const page = useMemo(() => resolvePage(location.pathname), [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const stateRef = useRef<ConversationState>(createInitialConversationState());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pageRef = useRef(page);
  pageRef.current = page;

  const push = useCallback((role: ChatMessage['role'], reply?: AssistantReply, text?: string) => {
    const msg: ChatMessage = {
      id: uid(),
      role,
      content: role === 'visitor' ? (text ?? '') : (reply?.content ?? ''),
      links: role === 'assistant' ? reply?.links : undefined,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, msg]);
    if (role === 'assistant') setSuggestions(reply?.suggestions ?? []);
  }, []);

  const start = useCallback(() => {
    const { reply, state } = assistantEngine.welcome(pageRef.current);
    stateRef.current = state;
    setHasStarted(true);
    setMessages([]);
    push('assistant', reply);
  }, [push]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    if (!hasStarted) start();
  }, [hasStarted, start]);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => (isOpen ? close() : open()), [isOpen, close, open]);

  const send = useCallback(
    (text: string, forcedIntentId?: string) => {
      const trimmed = text.trim();
      if (!trimmed && !forcedIntentId) return;
      clearTimer();
      push('visitor', undefined, trimmed);
      setIsTyping(true);
      setSuggestions([]);
      const delay = Math.min(1200, 450 + trimmed.length * 10);
      timerRef.current = setTimeout(() => {
        const { reply, state } = assistantEngine.submit(trimmed, stateRef.current, pageRef.current, forcedIntentId);
        stateRef.current = state;
        setIsTyping(false);
        push('assistant', reply);
        timerRef.current = null;
      }, delay);
    },
    [clearTimer, push]
  );

  const restart = useCallback(() => {
    clearTimer();
    setIsTyping(false);
    start();
  }, [clearTimer, start]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  return { isOpen, messages, isTyping, suggestions, pageLabel: page.label, open, close, toggle, send, restart };
};
