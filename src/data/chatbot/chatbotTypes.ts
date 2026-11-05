// Shared types for the Coral Swift Virtual Business Assistant.
// The assistant is a frontend-only, locally-driven engine. The `AssistantEngine`
// interface is the single seam: a future backend / live AI service can implement
// the same interface without touching the chat UI.

export type ChatRole = 'assistant' | 'visitor';

export interface ChatLink {
  label: string;
  /** Must be an actual existing route in the site (optionally with an #anchor). */
  to: string;
}

export interface Suggestion {
  label: string;
  /** When present, clicking the chip answers this intent deterministically. */
  intentId?: string;
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  links?: ChatLink[];
  timestamp: number;
}

export type VisitorType = 'client' | 'partner' | 'strategic' | 'general';

export type FollowUpKind = 'affirmation' | 'pathway-choice';

export interface PendingFollowUp {
  kind: FollowUpKind;
  /** Intent to jump to when the visitor confirms ("yes"). */
  affirmIntent?: string;
}

export interface ConversationState {
  lastIntentId: string | null;
  visitorType: VisitorType | null;
  pendingFollowUp: PendingFollowUp | null;
  turnCount: number;
}

export interface AssistantReply {
  content: string;
  links?: ChatLink[];
  suggestions?: Suggestion[];
  /** Partial state transition to apply after this reply is shown. */
  state?: Partial<ConversationState>;
}

export interface PageContext {
  pathname: string;
  key: string;
  label: string;
  suggestions: Suggestion[];
}

export interface EngineResult {
  reply: AssistantReply;
  state: ConversationState;
}

export interface AssistantEngine {
  readonly name: string;
  readonly usesLiveAI: boolean;
  welcome(page: PageContext): EngineResult;
  submit(message: string, state: ConversationState, page: PageContext, forcedIntentId?: string): EngineResult;
}

export const createInitialConversationState = (): ConversationState => ({
  lastIntentId: null,
  visitorType: null,
  pendingFollowUp: null,
  turnCount: 0,
});
