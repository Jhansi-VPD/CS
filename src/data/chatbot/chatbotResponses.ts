// Response assembly for each intent. Every answer is built only from approved
// Coral Swift knowledge, uses real routes for links, and appends the mandatory
// Accuracy, privacy, and safety guardrails where relevant.
import {
  COMPANY, ROUTES, SAFETY,
  serviceRoute, getService, serviceLists,
  screeningCriteria, pathways, checklist, deliveryStages, evaluationStages,
  opportunities, industries, QUICK_SUGGESTIONS,
} from './chatbotKnowledge';
import { ChatLink, AssistantReply, ConversationState, PageContext, Suggestion } from './chatbotTypes';
import { ServiceItem } from '../../types';

const PAGE_SUGGEST = (page: PageContext): Suggestion[] => page.suggestions;

const bullets = (items: readonly string[] | string[]): string => items.map((i) => `\u2022 ${i}`).join('\n');

const link = (label: string, to: string): ChatLink => ({ label, to });

const dedupe = (list: Suggestion[]): Suggestion[] => {
  const seen = new Set<string>();
  return list.filter((s) => (seen.has(s.label) ? false : (seen.add(s.label), true)));
};

const withPageSuggestions = (reply: AssistantReply, page: PageContext, extra: Suggestion[] = []): AssistantReply => ({
  ...reply,
  suggestions: dedupe([...(reply.suggestions ?? []), ...extra, ...PAGE_SUGGEST(page)].slice(0, 6)),
});

const serviceSuggestions = (list: ServiceItem[]): Suggestion[] => list.slice(0, 4).map((s) => ({ label: s.title, intentId: `svc-${s.id}` }));

function buildServiceReply(id: string, page: PageContext): AssistantReply {
  const svc = getService(id);
  if (!svc) return buildFallback(page);
  const parts: string[] = [];
  parts.push(`${svc.title}\n${svc.shortDescription}`);
  if (svc.useCases.length) parts.push(`Typical use cases:\n${bullets(svc.useCases.slice(0, 3))}`);
  if (svc.informationRequired.length) parts.push(`When you enquire, it helps to share:\n${bullets(svc.informationRequired.slice(0, 3))}`);
  if (svc.disclaimer) parts.push(svc.disclaimer);
  return {
    content: parts.join('\n\n'),
    links: [link('See this on the website', serviceRoute(svc)), link('Submit a project enquiry', ROUTES.contact)],
    suggestions: serviceSuggestions(
      svc.category === 'it' ? serviceLists.it : svc.category === 'non-it' ? serviceLists.nonIt : serviceLists.partnership
    ),
  };
}

const listServices = (list: ServiceItem[], intro: string, route: string, suggestions: Suggestion[]): AssistantReply => ({
  content: `${intro}\n\n${bullets(list.map((s) => s.title))}`,
  links: [link('Explore on the website', route)],
  suggestions,
});

const pathwayById = (id: string) => pathways.find((p) => p.id === id);

function pathwayReply(id: string, page: PageContext): AssistantReply {
  const p = pathwayById(id);
  if (!p) return buildFallback(page);
  const content = [
    `${p.title} — ${p.tagline}`,
    `Best fit for: ${p.targetProfile}`,
    `${p.description}`,
    SAFETY.proposedCriteria,
  ].join('\n\n');
  return {
    content,
    links: [link('Partnership pathways', ROUTES.partnerships), link('Apply as a partner', ROUTES.partnershipApply)],
    suggestions: [
      { label: 'Partner eligibility criteria', intentId: 'eligibility' },
      { label: 'Required documents', intentId: 'partner-documents' },
    ],
    state: { pendingFollowUp: { kind: 'affirmation', affirmIntent: 'eligibility' } },
  };
}

function buildFallback(page: PageContext): AssistantReply {
  return {
    content: "I don't have verified information on that yet, and I only answer from Coral Swift's approved details. For this, the best step is to reach our team directly. Here's what I can help with right now:",
    links: [link('Go to Contact page', ROUTES.contact)],
    suggestions: QUICK_SUGGESTIONS.slice(0, 4),
  };
}

export function respondForIntent(intentId: string, state: ConversationState, page: PageContext): AssistantReply {
  const reply = rawRespond(intentId, state, page);
  return withPageSuggestions(reply, page);
}

function rawRespond(intentId: string, state: ConversationState, page: PageContext): AssistantReply {
  // ---- Services (generated from the same data that renders the pages) ----
  if (intentId.startsWith('svc-')) return buildServiceReply(intentId.slice(4), page);

  switch (intentId) {
    // ---- Company ----
    case 'what-is':
      return {
        content: `Coral Swift is ${COMPANY.positioning}, ${COMPANY.modelSummary}\n\nBrand line: ${COMPANY.brandLine}`,
        links: [link('About Coral Swift', ROUTES.about)],
        suggestions: [{ label: 'What does Coral Swift do?', intentId: 'what-do' }, { label: 'Explore IT Solutions', intentId: 'it-services-list' }],
      };
    case 'what-do':
      return {
        content: `Coral Swift connects international project requirements with qualified delivery partners across three pillars:\n${bullets(COMPANY.pillars)}\n\nIt covers IT solutions, Non-IT / business operations, and partnership services.`,
        links: [link('View solutions', ROUTES.services)],
        suggestions: [{ label: 'Explore IT Solutions', intentId: 'it-services-list' }, { label: 'Explore Non-IT Services', intentId: 'non-it-services-list' }, { label: 'Become a Partner', intentId: 'become-partner' }],
      };
    case 'business-model':
      return {
        content: `${COMPANY.modelSummary}`,
        links: [link('How it works', ROUTES.howItWorks)],
        suggestions: [{ label: 'Delivery model', intentId: 'delivery-model' }, { label: 'How partners connect', intentId: 'how-connects' }],
      };
    case 'how-connects':
      return {
        content: `Coral Swift takes international requirements, validates and scopes them, then matches them to vetted delivery partners through due diligence, coordinated delivery and ongoing governance. Here is the six-stage model:\n\n${bullets(deliveryStages.map((s) => `${s.step}. ${s.name}`))}`,
        links: [link('See the delivery model', ROUTES.howItWorks)],
        suggestions: [{ label: 'Partner eligibility', intentId: 'eligibility' }, { label: 'Become a Partner', intentId: 'become-partner' }],
      };
    case 'pillars':
      return { content: `The three business pillars are:\n${bullets(COMPANY.pillars)}`, links: [link('About', ROUTES.about)] };
    case 'brand-line':
      return { content: `${COMPANY.brandLine}\nOur principles: ${COMPANY.principles}` };
    case 'vision':
      return { content: `Vision: ${COMPANY.vision}`, links: [link('About Coral Swift', ROUTES.about)] };
    case 'mission':
      return { content: `Mission: ${COMPANY.mission}`, links: [link('About Coral Swift', ROUTES.about)] };
    case 'works-with-india':
      return {
        content: `Yes. Coral Swift connects international requirements with qualified delivery organizations in India and other markets. Hyderabad is proposed as a key partner and delivery ecosystem; specific offices and cross-border operations are subject to confirmation.`,
        links: [link('About', ROUTES.about), link('How it works', ROUTES.howItWorks)],
      };
    case 'international-focus':
      return {
        content: `Coral Swift is presented with a US-oriented positioning and serves international businesses seeking IT, Non-IT and operational delivery. Note: legal registration and specific locations are subject to confirmation before publication.`,
        links: [link('About Coral Swift', ROUTES.about)],
      };
    case 'industries':
      return {
        content: `Coral Swift works across these sectors:\n${bullets(industries.map((i) => i.title))}`,
        links: [link('View industries', ROUTES.industries)],
        suggestions: [{ label: 'Explore IT Solutions', intentId: 'it-services-list' }, { label: 'Explore Non-IT Services', intentId: 'non-it-services-list' }],
      };
    case 'delivery-model':
      return {
        content: `The six-stage global-to-local delivery model:\n${bullets(deliveryStages.map((s) => `${s.step}. ${s.name} — ${s.headline}`))}`,
        links: [link('How it works', ROUTES.howItWorks)],
        suggestions: [{ label: 'Partner evaluation steps', intentId: 'partner-evaluation' }],
      };

    // ---- Service lists ----
    case 'it-services-list':
      return listServices(serviceLists.it, 'Coral Swift IT solutions cover:', ROUTES.itSolutions, serviceSuggestions(serviceLists.it));
    case 'non-it-services-list':
      return listServices(serviceLists.nonIt, 'Coral Swift Non-IT / business operations cover:', ROUTES.nonItSolutions, serviceSuggestions(serviceLists.nonIt));
    case 'partnership-services-list':
      return listServices(serviceLists.partnership, 'Coral Swift partnership services cover:', ROUTES.partnerships, serviceSuggestions(serviceLists.partnership));

    // ---- Website navigation ----
    case 'find-it':
      return { content: `You can find our IT solutions on the IT Solutions page. I can also walk you through them here.`, links: [link('Open IT Solutions', ROUTES.itSolutions)], suggestions: serviceSuggestions(serviceLists.it) };
    case 'find-nonit':
      return { content: `Our Non-IT and business operations are on the Non-IT Solutions page. I can also summarize them here.`, links: [link('Open Non-IT Solutions', ROUTES.nonItSolutions)], suggestions: serviceSuggestions(serviceLists.nonIt) };

    // ---- Partnerships ----
    case 'become-partner':
      return {
        content: `Great! To point you to the right pathway, are you interested in an IT delivery partnership, a Non-IT operations partnership, or a strategic business relationship?`,
        links: [link('Partnership pathways', ROUTES.partnerships), link('Partner application form', ROUTES.partnershipApply)],
        suggestions: [
          { label: 'IT / software delivery', intentId: 'pathway-subcontracting' },
          { label: 'Non-IT / operations', intentId: 'pathway-subcontracting' },
          { label: 'Strategic / merger', intentId: 'pathway-strategic-merger' },
        ],
        state: { visitorType: 'partner', pendingFollowUp: { kind: 'pathway-choice' } },
      };
    case 'partnership-types':
      return {
        content: `There are three engagement pathways:\n${bullets(pathways.map((p) => `${p.title}: ${p.tagline}`))}\n\nWhich type are you most interested in?`,
        links: [link('Partnerships', ROUTES.partnerships)],
        suggestions: pathways.map((p) => ({ label: p.title, intentId: `pathway-${p.id}` })),
        state: { pendingFollowUp: { kind: 'pathway-choice' } },
      };
    case 'pathway-strategic-merger':
      return pathwayReply('strategic-merger', page);
    case 'pathway-direct-project':
      return pathwayReply('direct-project', page);
    case 'pathway-subcontracting':
      return pathwayReply('subcontracting', page);
    case 'eligibility':
      return {
        content: `Proposed partner screening criteria:\n${bullets(screeningCriteria.map((c) => `${c.criterion}: ${c.sourceThreshold}`))}\n\n${SAFETY.proposedCriteria}`,
        links: [link('See screening criteria', ROUTES.partnershipCriteria), link('Partnership pathways', ROUTES.partnerships)],
        suggestions: [{ label: 'Required documents', intentId: 'partner-documents' }, { label: 'How evaluation works', intentId: 'partner-evaluation' }],
        state: { visitorType: state.visitorType ?? 'partner', pendingFollowUp: { kind: 'affirmation', affirmIntent: 'partner-documents' } },
      };
    case 'min-age': {
      const c = screeningCriteria[0];
      return { content: `${c.criterion}: ${c.sourceThreshold}.\n\nEvidence: ${c.evidenceRequired}\n\nThis is a proposed baseline and is assessed within the relevant pathway, not an automatic disqualifier.`, links: [link('Screening criteria', ROUTES.partnershipCriteria)] };
    }
    case 'min-employees': {
      const c = screeningCriteria[1];
      return { content: `${c.criterion}: ${c.sourceThreshold}.\n\nEvidence: ${c.evidenceRequired}\n\nThis is a proposed baseline; final eligibility depends on the pathway and internal assessment.`, links: [link('Screening criteria', ROUTES.partnershipCriteria)] };
    }
    case 'turnover': {
      const c = screeningCriteria[2];
      return { content: `For the Direct Project Allocation pathway: ${c.sourceThreshold}.\n\nEvidence: ${c.evidenceRequired}\n\nThis applies mainly to direct allocation and is proposed, not a universal requirement or guarantee.`, links: [link('Screening criteria', ROUTES.partnershipCriteria), link('Pathways', ROUTES.partnerships)] };
    }
    case 'partner-documents':
      return {
        content: `Initial partner submission checklist:\n${bullets(checklist.map((d) => `${d.name} — ${d.description}`))}\n\n${SAFETY.privacyDocs} Please use the partner application form when it is available.`,
        links: [link('Partner application', ROUTES.partnershipApply), link('Submission checklist', ROUTES.partnershipChecklist)],
        suggestions: [{ label: 'Become a Partner', intentId: 'become-partner' }],
        state: { pendingFollowUp: null },
      };
    case 'partner-evaluation':
      return {
        content: `Partner evaluation follows these steps:\n${bullets(evaluationStages.map((s) => `${s.step}. ${s.name}`))}\n\nEach step is recorded and reviewed; there is no auto-approval or auto-rejection.`,
        links: [link('How it works', ROUTES.howItWorks)],
        suggestions: [{ label: 'Partner eligibility', intentId: 'eligibility' }, { label: 'Required documents', intentId: 'partner-documents' }],
      };
    case 'how-selected':
      return rawRespond('partner-evaluation', state, page);
    case 'guarantee':
      return { content: SAFETY.noGuarantee, links: [link('Partnerships', ROUTES.partnerships)], suggestions: [{ label: 'Partner eligibility', intentId: 'eligibility' }] };
    case 'small-company':
      return {
        content: `The thresholds are proposed screening baselines and apply by pathway, not as a blanket rule. Specialized providers are often considered through the Vendor / Subcontracting pathway on the strength of domain capability, and an organization is never rejected on a single answer. Final eligibility is set through internal assessment.`,
        links: [link('Partnership pathways', ROUTES.partnerships), link('Become a partner', ROUTES.partnershipApply)],
        suggestions: [{ label: 'Explore vendor pathway', intentId: 'pathway-subcontracting' }],
      };
    case 'bpo-partner':
      return {
        content: `Yes. BPO and business-process organizations are a core target audience, typically through the Vendor / Subcontracting or Non-IT operations pathways, subject to assessment and separate commercial approval.`,
        links: [link('Partnerships', ROUTES.partnerships), link('Become a partner', ROUTES.partnershipApply)],
        suggestions: [{ label: 'Explore Non-IT Services', intentId: 'non-it-services-list' }, { label: 'Partner eligibility', intentId: 'eligibility' }],
      };

    // ---- Projects & enquiries ----
    case 'submit-requirement':
    case 'business-opportunity':
      return {
        content: `You can share a project or business requirement through the enquiry form. ${SAFETY.submission}`,
        links: [link('Project enquiry via Contact', ROUTES.contact), link('Sample opportunities', ROUTES.projectOpportunities)],
        suggestions: [{ label: 'What info to provide', intentId: 'what-info' }],
      };
    case 'what-info':
      return {
        content: `For a smooth enquiry, please be ready with:\n${bullets(['Name and company', 'Business email and country', 'Service category (IT / Non-IT / Partnership)', 'Project requirements and expected scope', 'Timeline and estimated volume (if relevant)', 'Any technical or operational requirements'])}\n\n${SAFETY.submission}`,
        links: [link('Open enquiry form', ROUTES.contact)],
        suggestions: [{ label: 'Explore IT Solutions', intentId: 'it-services-list' }, { label: 'Contact Coral Swift', intentId: 'contact' }],
      };
    case 'opportunity-types':
      return {
        content: `Illustrative project categories include:\n${bullets(opportunities.map((o) => o.title))}\n\n${SAFETY.illustrative}`,
        links: [link('See opportunities', ROUTES.projectOpportunities)],
        suggestions: [{ label: 'Submit a project enquiry', intentId: 'submit-requirement' }],
      };
    case 'currently-active':
      return { content: SAFETY.availability, links: [link('Submit an enquiry', ROUTES.contact), link('Opportunities', ROUTES.projectOpportunities)], suggestions: [{ label: 'Submit a project enquiry', intentId: 'submit-requirement' }] };
    case 'allocation-work':
      return {
        content: `Allocation follows the partner evaluation flow:\n${bullets(evaluationStages.map((s) => `${s.step}. ${s.name}`))}\n\n${SAFETY.noGuarantee}`,
        links: [link('How it works', ROUTES.howItWorks)],
      };
    case 'consultation':
      return {
        content: `You can request an introductory discussion through the Contact page. ${SAFETY.submission} A meeting is only confirmed after real calendar availability is checked by our team.`,
        links: [link('Request a meeting', ROUTES.contactMeeting), link('Contact', ROUTES.contact)],
      };

    // ---- Strategic discussions ----
    case 'strategic-how':
      return {
        content: `Strategic merger / integration discussions are for organizations exploring a deeper structural relationship, subject to legal, financial and operational due diligence, and handled under confidentiality.`,
        links: [link('Strategic Discussions', ROUTES.strategicDiscussions)],
        suggestions: [{ label: 'Start a confidential enquiry', intentId: 'confidential-enquiry' }, { label: 'Partnership overview', intentId: 'partnership-types' }],
      };
    case 'confidential-enquiry':
      return {
        content: `You can submit a confidential business enquiry on the Strategic Discussions page. ${SAFETY.privacyDocs} ${SAFETY.legal}`,
        links: [link('Strategic Discussions enquiry', ROUTES.strategicDiscussions)],
      };

    // ---- Contact ----
    case 'contact':
      return {
        content: `The best way to reach Coral Swift is through the Contact page, where you can submit a general, project, partnership or strategic enquiry. I only share contact details once they are verified and published on the site.`,
        links: [link('Open Contact page', ROUTES.contact), link('FAQ', ROUTES.faq)],
        suggestions: [{ label: 'Submit a project enquiry', intentId: 'submit-requirement' }, { label: 'Become a Partner', intentId: 'become-partner' }],
      };

    case 'unknown':
    default:
      return buildFallback(page);
  }
}

export { buildFallback, respondForIntent as default };
