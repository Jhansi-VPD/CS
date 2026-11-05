// Structured Coral Swift knowledge base for the assistant.
// Source of truth: the Consolidated Master PRD + Corporate Profile, mirrored through
// the existing site data modules so the assistant never drifts from published pages.
import { itServices, nonItServices, partnershipServices } from '../servicesData';
import { proposedScreeningCriteria, engagementPathways, submissionChecklist, globalDeliverySteps, sixStageEvaluation } from '../partnerCriteriaData';
import { illustrativeOpportunities } from '../opportunitiesData';
import { industriesData } from '../industriesData';
import { ServiceItem } from '../../types';
import { PageContext, Suggestion, VisitorType } from './chatbotTypes';

export const COMPANY = {
  name: 'Coral Swift',
  assistantName: 'Coral Swift Assistant',
  brandLine: 'Connecting Global Opportunities with Delivery Excellence.',
  principles: 'Technology. Operations. Partnerships. Growth.',
  positioning: 'a US-oriented IT and Non-IT project solutions and partnership platform',
  modelSummary:
    'It connects international project requirements with qualified delivery organizations in India and other markets, combining project sourcing, vendor qualification, delivery coordination, operational governance and long-term business partnerships.',
  pillars: ['Project Solutions', 'Partner Ecosystem', 'Governance and Growth'],
  vision:
    'Build a trusted international ecosystem where qualified technology and operations companies can access scalable project opportunities.',
  mission:
    'Enable disciplined project execution through partner screening, structured onboarding, operational governance and outcome-based delivery.',
  targetAudiences: [
    'International businesses seeking IT, Non-IT or operational delivery capabilities',
    'Established Indian IT organizations and software delivery companies',
    'BPO, healthcare-process, banking-operations and back-office providers',
    'Established enterprises considering strategic merger, integration or partnership discussions',
  ],
  welcome:
    "Hello! Welcome to Coral Swift. I'm here to help you explore our solutions, partnership opportunities and business services. What would you like to know?",
} as const;

/** Only real routes defined in App.tsx. Never invent routes. */
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  itSolutions: '/services/it-solutions',
  nonItSolutions: '/services/non-it-solutions',
  industries: '/industries',
  partnerships: '/partnerships',
  partnershipCriteria: '/partnerships#criteria',
  partnershipChecklist: '/partnerships#checklist',
  partnershipApply: '/partnerships#apply',
  howItWorks: '/how-it-works',
  projectOpportunities: '/project-opportunities',
  strategicDiscussions: '/strategic-discussions',
  insights: '/insights',
  contact: '/contact',
  contactMeeting: '/contact?type=meeting',
  faq: '/faq',
} as const;

/** Mandatory safety wording reused across answers. */
export const SAFETY = {
  noGuarantee:
    'Please note: becoming a partner does not guarantee projects, revenue, contracts or project allocation. All engagements depend on formal due diligence and mutual commercial agreements.',
  proposedCriteria:
    'These are proposed screening criteria, not universal rules and not a promise of approval. Final eligibility depends on the engagement pathway and an internal assessment, and a single answer never automatically rejects an organization.',
  certification:
    'Coral Swift does not claim HIPAA, SOC 2, ISO or any other certification or regulatory compliance unless it has been independently verified and explicitly approved.',
  illustrative:
    'These are illustrative project categories only. They are not currently open, active, awarded or guaranteed projects.',
  availability:
    'I am a frontend assistant and cannot confirm current project availability. The best next step is to submit a business or partnership enquiry so our team can review it.',
  privacyDocs:
    'Please do not upload sensitive financial or company documents, passwords, identity documents or confidential records into this chat.',
  submission:
    'Chatting with me does not submit, save or email an enquiry. Please use the enquiry form so your request reaches the right team.',
  legal: 'I cannot provide legal, financial, medical or regulatory advice.',
} as const;

export const SERVICE_LINK_LABEL = 'View on the website';

export const serviceLists = {
  it: itServices,
  nonIt: nonItServices,
  partnership: partnershipServices,
};

const byId = new Map<string, ServiceItem>();
[...itServices, ...nonItServices, ...partnershipServices].forEach((s) => byId.set(s.id, s));

export const getService = (id: string): ServiceItem | undefined => byId.get(id);

export const serviceRoute = (item: ServiceItem): string => {
  if (item.category === 'it') return `${ROUTES.itSolutions}#${item.id}`;
  if (item.category === 'non-it') return `${ROUTES.nonItSolutions}#${item.id}`;
  return ROUTES.services;
};

export const serviceCategoryLabel = (item: ServiceItem): string =>
  item.category === 'it' ? 'IT Solutions' : item.category === 'non-it' ? 'Non-IT / Business Operations' : 'Partnership Services';

export const screeningCriteria = proposedScreeningCriteria;
export const pathways = engagementPathways;
export const checklist = submissionChecklist;
export const deliveryStages = globalDeliverySteps;
export const evaluationStages = sixStageEvaluation;
export const opportunities = illustrativeOpportunities;
export const industries = industriesData;

/** Global quick questions (PRD section 5). */
export const QUICK_SUGGESTIONS: Suggestion[] = [
  { label: 'Explore IT Solutions', intentId: 'it-services-list' },
  { label: 'Explore Non-IT Services', intentId: 'non-it-services-list' },
  { label: 'Become a Partner', intentId: 'become-partner' },
  { label: 'Partner Eligibility', intentId: 'eligibility' },
  { label: 'Project Enquiries', intentId: 'submit-requirement' },
  { label: 'Strategic Partnerships', intentId: 'pathway-strategic-merger' },
  { label: 'Contact Coral Swift', intentId: 'contact' },
];

const PAGE_SUGGESTIONS: Record<string, Suggestion[]> = {
  home: QUICK_SUGGESTIONS.slice(0, 4),
  about: [
    { label: 'What does Coral Swift do?', intentId: 'what-do' },
    { label: 'How the delivery model works', intentId: 'delivery-model' },
    { label: 'Become a Partner', intentId: 'become-partner' },
  ],
  services: [
    { label: 'Explore IT Solutions', intentId: 'it-services-list' },
    { label: 'Explore Non-IT Services', intentId: 'non-it-services-list' },
    { label: 'Partnership services', intentId: 'partnership-services-list' },
  ],
  it: [
    { label: 'Do you build web applications?', intentId: 'svc-web-applications-portals' },
    { label: 'Custom software development', intentId: 'svc-custom-software-development' },
    { label: 'Submit a project enquiry', intentId: 'submit-requirement' },
  ],
  nonIt: [
    { label: 'Do you provide medical coding?', intentId: 'svc-medical-coding-billing' },
    { label: 'Back-office services', intentId: 'svc-back-office-services' },
    { label: 'Submit a project enquiry', intentId: 'submit-requirement' },
  ],
  industries: [
    { label: 'Industries served', intentId: 'industries' },
    { label: 'Explore IT Solutions', intentId: 'it-services-list' },
    { label: 'Explore Non-IT Services', intentId: 'non-it-services-list' },
  ],
  partnerships: [
    { label: 'Partner Eligibility', intentId: 'eligibility' },
    { label: 'Required documents', intentId: 'partner-documents' },
    { label: 'Pathway types', intentId: 'partnership-types' },
  ],
  howItWorks: [
    { label: 'How does Coral Swift work?', intentId: 'delivery-model' },
    { label: 'Partner evaluation steps', intentId: 'partner-evaluation' },
    { label: 'Become a Partner', intentId: 'become-partner' },
  ],
  projects: [
    { label: 'Do you have live projects?', intentId: 'currently-active' },
    { label: 'Project opportunity types', intentId: 'opportunity-types' },
    { label: 'Submit a project enquiry', intentId: 'submit-requirement' },
  ],
  strategic: [
    { label: 'Do you consider mergers?', intentId: 'pathway-strategic-merger' },
    { label: 'Start a confidential enquiry', intentId: 'confidential-enquiry' },
    { label: 'How strategic partnerships work', intentId: 'strategic-how' },
  ],
  contact: [
    { label: 'Submit a project enquiry', intentId: 'submit-requirement' },
    { label: 'Become a Partner', intentId: 'become-partner' },
    { label: 'Schedule a meeting', intentId: 'consultation' },
  ],
  faq: [
    { label: 'What is Coral Swift?', intentId: 'what-is' },
    { label: 'Partner Eligibility', intentId: 'eligibility' },
    { label: 'Contact Coral Swift', intentId: 'contact' },
  ],
  generic: QUICK_SUGGESTIONS.slice(0, 4),
};

const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  about: 'About',
  services: 'Solutions overview',
  it: 'IT Solutions',
  nonIt: 'Non-IT Solutions',
  industries: 'Industries',
  partnerships: 'Partnerships',
  howItWorks: 'How It Works',
  projects: 'Project Opportunities',
  strategic: 'Strategic Discussions',
  contact: 'Contact',
  faq: 'FAQ',
  generic: 'Coral Swift',
};

/** Resolve page context from the current pathname (PRD section 9). */
export const resolvePage = (pathname: string): PageContext => {
  const p = pathname.replace(/\/+$/, '') || '/';
  let key = 'generic';
  if (p === '/') key = 'home';
  else if (p.startsWith('/about')) key = 'about';
  else if (p.startsWith('/services/it-solutions') || p.startsWith('/solutions/it-solutions')) key = 'it';
  else if (p.startsWith('/services/non-it-solutions') || p.startsWith('/solutions/non-it-solutions')) key = 'nonIt';
  else if (p.startsWith('/services') || p.startsWith('/solutions')) key = 'services';
  else if (p.startsWith('/industries')) key = 'industries';
  else if (p.startsWith('/partnerships')) key = 'partnerships';
  else if (p.startsWith('/how-it-works')) key = 'howItWorks';
  else if (p.startsWith('/project-opportunities')) key = 'projects';
  else if (p.startsWith('/strategic-discussions')) key = 'strategic';
  else if (p.startsWith('/contact') || p.startsWith('/schedule')) key = 'contact';
  else if (p.startsWith('/faq')) key = 'faq';
  return { pathname: p, key, label: PAGE_LABELS[key] ?? 'Coral Swift', suggestions: PAGE_SUGGESTIONS[key] ?? PAGE_SUGGESTIONS.generic };
};

export const inferVisitorType = (text: string): VisitorType | null => {
  const t = text.toLowerCase();
  if (/(merger|integration|acquisition|equity|strategic)/.test(t)) return 'strategic';
  if (/(partner|partnership|vendor|subcontract|become a|apply|delivery partner)/.test(t)) return 'partner';
  if (/(requirement|project|need|looking for|hire|build|develop|buy|service|solution|consult)/.test(t)) return 'client';
  return null;
};
