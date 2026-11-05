// Intent vocabulary, text normalization and rule-based matching.
// This is intentionally deterministic (no AI): it scores normalized keyword / phrase /
// regex overlap so the assistant behaves predictably and stays within approved content.
import { chatbotFAQs } from './chatbotFAQs';
import { itServices, nonItServices, partnershipServices } from '../servicesData';
import { VisitorType } from './chatbotTypes';

const allServices = [...itServices, ...nonItServices, ...partnershipServices];

/** Common spelling mistakes / simple variations (PRD section 4). */
const MISSPELLINGS: Record<string, string> = {
  cral: 'coral', corral: 'coral', swif: 'swift', swiftf: 'swift',
  partener: 'partner', patner: 'partner', parteners: 'partners', patnership: 'partnership', partenership: 'partnership', partnerhip: 'partnership',
  medecal: 'medical', medcial: 'medical', medicine: 'medical', billingg: 'billing',
  developement: 'development', devlopement: 'development', dev: 'development',
  aplication: 'application', aplications: 'applications',
  eligiblity: 'eligibility', eligibilty: 'eligibility', elibility: 'eligibility',
  proyect: 'project', projets: 'projects', projet: 'project',
  suport: 'support', sorport: 'support', maintenence: 'maintenance', maintainance: 'maintenance',
  colud: 'cloud', cloude: 'cloud', kcy: 'kyc', mortage: 'mortgage', mortgate: 'mortgage',
  finacial: 'financial', financal: 'financial', mutal: 'mutual', mutualf: 'mutual',
  buisness: 'business', busness: 'business', bussiness: 'business', buzness: 'business',
  indutries: 'industries', industryy: 'industry', servics: 'services', sevice: 'service', servies: 'services',
  infrasucture: 'infrastructure', trasnformation: 'transformation', tranformation: 'transformation',
  docyment: 'document', documnts: 'documents', ocassions: 'options',
};

export const normalize = (raw: string): string => {
  let t = (raw || '').toLowerCase();
  t = t.replace(/[^a-z0-9\s]/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  t = t
    .split(' ')
    .map((w) => MISSPELLINGS[w] ?? w)
    .join(' ');
  return t;
};

interface IntentSignals {
  keywords: string[];
  phrases: string[];
  patterns: RegExp[];
}

// Base vocabulary per intent, seeded from FAQ questions + variations.
const signals: Record<string, IntentSignals> = {};
const ensure = (id: string): IntentSignals => (signals[id] ??= { keywords: [], phrases: [], patterns: [] });

for (const faq of chatbotFAQs) {
  const s = ensure(faq.intentId);
  s.phrases.push(normalize(faq.question));
  for (const v of faq.variations ?? []) {
    const n = normalize(v);
    s.phrases.push(n);
    n.split(' ').forEach((w) => w.length > 3 && !s.keywords.includes(w) && s.keywords.push(w));
  }
}

// Auto-seed service intents from their titles + category wording.
for (const svc of allServices) {
  const s = ensure(`svc-${svc.id}`);
  s.phrases.push(normalize(svc.title));
  s.keywords.push(normalize(svc.title).split(' ')[0]);
}

// Extra targeted signals for intents not fully covered by FAQs.
const EXTRA: Record<string, Partial<IntentSignals>> = {
  'svc-erp-implementation': { keywords: ['erp', 'hrms', 'planning'] },
  'svc-web-applications-portals': { keywords: ['web', 'portal', 'portals', 'application'] },
  'svc-cloud-infrastructure-support': { keywords: ['cloud', 'infrastructure', 'devops', 'aws', 'azure', 'kubernetes', 'migration'] },
  'svc-medical-coding-billing': { keywords: ['medical', 'coding', 'billing', 'claims', 'icd', 'cpt'] },
  'svc-banking-kyc-mortgage': { keywords: ['banking', 'kyc', 'mortgage', 'loan', 'aml', 'onboarding'] },
  'svc-mutual-fund-operations': { keywords: ['mutual', 'fund', 'reconciliation', 'custodian'] },
  'svc-data-entry-document-processing': { keywords: ['data', 'entry', 'document', 'processing', 'ocr', 'xml', 'keying'] },
  'svc-back-office-services': { keywords: ['back', 'office', 'administrative', 'accounts'] },
  'svc-digital-transformation': { keywords: ['digital', 'transformation', 'modernization'] },
  'svc-application-testing-maintenance': { keywords: ['testing', 'qa', 'quality', 'maintenance', 'regression'] },
  'svc-custom-software-development': { keywords: ['custom', 'software', 'bespoke', 'development'] },
  'svc-healthcare-support-processes': { keywords: ['healthcare', 'authorization', 'eligibility', 'patient'] },
  'pathway-subcontracting': { phrases: ['vendor partnership', 'subcontracting partnership', 'subcontract', 'vendor subcontracting'], keywords: ['vendor', 'subcontract', 'subcontracting'] },
  'pathway-direct-project': { phrases: ['direct project engagement', 'direct project', 'direct allocation'], keywords: ['direct', 'allocation', 'established'] },
  'what-do': { patterns: [/what (does|do) (coral swift|you)/] },
  'become-partner': { patterns: [/i want to (become )?a partner/, /(become|apply|join).*partner/, /partner (with|application)/] },
  'it-services-list': { patterns: [/what (it|technology) (services|solutions)/, /explore it/] },
  'non-it-services-list': { patterns: [/what (non|operational|business|bpo)/, /explore non/] },
  eligibility: { patterns: [/eligible|eligibility|qualify|requirements? to partner/] },
};

for (const [id, extra] of Object.entries(EXTRA)) {
  const s = ensure(id);
  for (const k of extra.keywords ?? []) if (!s.keywords.includes(k)) s.keywords.push(k);
  for (const p of extra.phrases ?? []) s.phrases.push(normalize(p));
  s.patterns.push(...(extra.patterns ?? []));
}

export interface IntentMatch {
  intentId: string;
  score: number;
}

export const matchIntent = (raw: string): IntentMatch | null => {
  const n = normalize(raw);
  if (!n) return null;
  const tokens = new Set(n.split(' '));
  let best: IntentMatch | null = null;

  for (const [id, s] of Object.entries(signals)) {
    let score = 0;
    for (const pattern of s.patterns) {
      if (pattern.test(n)) score += 6;
    }
    for (const phrase of s.phrases) {
      if (n === phrase) score += 12;
      else if (phrase.length > 4 && n.includes(phrase)) score += 4 + Math.min(phrase.split(' ').length, 4);
    }
    for (const kw of s.keywords) {
      if (tokens.has(kw)) score += 2;
    }
    if (score > 0 && (!best || score > best.score)) best = { intentId: id, score };
  }

  return best && best.score >= 4 ? best : null;
};

const AFFIRM = new Set(['yes', 'yep', 'yeah', 'y', 'sure', 'ok', 'okay', 'please', 'plz', 'go', 'ahead', 'tell', 'me', 'do', 'want', 'interested', 'sounds', 'good', 'great', 'absolutely', 'definitely', 'of', 'course', 'please']);
const NEGATE = new Set(['no', 'nope', 'not', 'later', 'maybe', 'thanks', 'thank', 'bye']);

export const detectAffirmation = (raw: string): boolean => {
  const first = normalize(raw).split(' ')[0];
  if (!first) return false;
  if (NEGATE.has(first)) return false;
  return first === 'yes' || first === 'y' || first === 'yeah' || first === 'yep' || normalize(raw).startsWith('sure') || normalize(raw).startsWith('ok');
};

export const detectGratitude = (raw: string): boolean => /thank|thanks|great|awesome|perfect|appreciate|bye|good ?bye/.test(normalize(raw)) && normalize(raw).split(' ').length <= 5;

export const detectMoreInfo = (raw: string): boolean => /(^|\s)(more|tell me more|details|detail|expand|explain more|elaborate|go on)\b/.test(normalize(raw));

const STRATEGIC = /(merger|merging|integration|acqui|equity|acquisition|m&a|structural|consolidat)/;
const DIRECT = /(direct project|direct allocation|financially|strong balance|established large|crore)/;

export const classifyPathway = (raw: string): string => {
  const n = normalize(raw);
  if (STRATEGIC.test(n)) return 'pathway-strategic-merger';
  if (DIRECT.test(n)) return 'pathway-direct-project';
  // Software / IT / tech providers map to vendor / subcontracting (per PRD example).
  return 'pathway-subcontracting';
};

export const matchVisitorType = (raw: string): VisitorType | null => {
  const n = normalize(raw);
  if (STRATEGIC.test(n)) return 'strategic';
  if (/(partner|partnership|vendor|subcontract|apply|delivery|join)/.test(n)) return 'partner';
  if (/(requirement|project|need|looking|hire|build|develop|buy|service|solution|consult|want)/.test(n)) return 'client';
  return null;
};

export const KNOWN_INTENTS = Object.keys(signals);
