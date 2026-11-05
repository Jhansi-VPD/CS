// The Coral Swift Assistant engine — the single, swappable seam between the chat UI
// and the answering logic. Today it is a deterministic, frontend-only matcher over the
// approved knowledge base. A future backend / live-AI service can implement the same
// `AssistantEngine` interface without changing the UI.
import { AssistantEngine, AssistantReply, ConversationState, EngineResult, PageContext, createInitialConversationState, Suggestion } from './chatbotTypes';
import { COMPANY, ROUTES, QUICK_SUGGESTIONS } from './chatbotKnowledge';
import { respondForIntent, buildFallback } from './chatbotResponses';
import { matchIntent, matchVisitorType, detectAffirmation, detectGratitude, detectMoreInfo, classifyPathway } from './chatbotIntents';

const dedupe = (list: Suggestion[]): Suggestion[] => {
  const seen = new Set<string>();
  return list.filter((s) => (seen.has(s.label) ? false : (seen.add(s.label), true)));
};

const mergeSuggestions = (reply: AssistantReply, page: PageContext): Suggestion[] =>
  dedupe([...(reply.suggestions ?? []), ...page.suggestions].slice(0, 6));

const applyState = (base: ConversationState, intentId: string, reply: AssistantReply): ConversationState => ({
  lastIntentId: intentId,
  visitorType: reply.state?.visitorType ?? base.visitorType,
  pendingFollowUp: reply.state?.pendingFollowUp ?? null,
  turnCount: base.turnCount,
});

export const localAssistantEngine: AssistantEngine = {
  name: COMPANY.assistantName,
  usesLiveAI: false,

  welcome(page: PageContext): EngineResult {
    const reply: AssistantReply = {
      content: `${COMPANY.welcome}\n\nI answer from Coral Swift's published information to help you explore our services, partnerships and contacts.`,
      links: [{ label: 'About Coral Swift', to: ROUTES.about }],
      suggestions: dedupe([...QUICK_SUGGESTIONS, ...page.suggestions].slice(0, 7)),
    };
    return { reply, state: createInitialConversationState() };
  },

  submit(message: string, state: ConversationState, page: PageContext, forcedIntentId?: string): EngineResult {
    const base: ConversationState = { ...state, turnCount: state.turnCount + 1 };
    const vt = matchVisitorType(message);
    if (vt) base.visitorType = vt;

    // 1. Clicked suggestion -> deterministic intent.
    if (forcedIntentId) {
      const reply = respondForIntent(forcedIntentId, base, page);
      return { reply, state: applyState(base, forcedIntentId, reply) };
    }

    // 2. Gratitude / closing.
    if (detectGratitude(message)) {
      const reply: AssistantReply = {
        content: "You're welcome! If anything else comes up, ask me anytime or reach the team from the Contact page.",
        links: [{ label: 'Contact Coral Swift', to: ROUTES.contact }],
        suggestions: QUICK_SUGGESTIONS.slice(0, 4),
      };
      return { reply, state: { ...base, pendingFollowUp: null, lastIntentId: state.lastIntentId } };
    }

    // 3. Pending pathway choice -> classify the visitor's own description.
    if (state.pendingFollowUp?.kind === 'pathway-choice') {
      const intentId = classifyPathway(message);
      const reply = respondForIntent(intentId, base, page);
      return { reply, state: applyState(base, intentId, reply) };
    }

    // 4. Affirmation against a pending follow-up (e.g. "Yes" -> eligibility).
    if (detectAffirmation(message)) {
      const target = state.pendingFollowUp?.affirmIntent ?? state.lastIntentId;
      if (target && target !== 'unknown') {
        const reply = respondForIntent(target, base, page);
        return { reply, state: applyState(base, target, reply) };
      }
      return { reply: withPage(buildFallback(page), page), state: { ...base, pendingFollowUp: null } };
    }

    // 5. "Tell me more" on the last topic.
    if (detectMoreInfo(message) && state.lastIntentId && state.lastIntentId !== 'unknown') {
      const reply = respondForIntent(state.lastIntentId, base, page);
      return { reply, state: applyState(base, state.lastIntentId, reply) };
    }

    // 6. General intent matching.
    const match = matchIntent(message);
    if (match) {
      const reply = respondForIntent(match.intentId, base, page);
      return { reply, state: applyState(base, match.intentId, reply) };
    }

    // 7. Unknown -> approved fallback + contact guidance.
    return { reply: withPage(buildFallback(page), page), state: { ...base, pendingFollowUp: null, lastIntentId: 'unknown' } };
  },
};

const withPage = (reply: AssistantReply, page: PageContext): AssistantReply => ({
  ...reply,
  suggestions: mergeSuggestions(reply, page),
});

export const assistantEngine: AssistantEngine = localAssistantEngine;
