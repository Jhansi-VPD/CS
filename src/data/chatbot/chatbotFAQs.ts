// Predefined questions + natural-language variations (PRD sections 2, 3 and 4).
// Each FAQ maps a question (and alternate phrasings) to a canonical intentId used by
// the matching engine and by the click-through suggestion chips.

export interface ChatFaq {
  id: string;
  intentId: string;
  category:
    | 'Company'
    | 'IT'
    | 'Non-IT'
    | 'Partnership'
    | 'Project'
    | 'Strategic'
    | 'Website';
  question: string;
  variations?: string[];
}

export const chatbotFAQs: ChatFaq[] = [
  // ---- Company information ----
  {
    id: 'faq-what-is',
    intentId: 'what-is',
    category: 'Company',
    question: 'What is Coral Swift?',
    variations: [
      'what is coral swift',
      'who is coral swift',
      'tell me about coral swift',
      'introduce coral swift',
      'about your company',
      'what is coral swift company',
    ],
  },
  {
    id: 'faq-what-do',
    intentId: 'what-do',
    category: 'Company',
    question: 'What does Coral Swift do?',
    variations: [
      'what does coral swift do',
      'what do you do',
      'what services do you offer',
      'your business',
      'what is coral swift about',
    ],
  },
  {
    id: 'faq-business-model',
    intentId: 'business-model',
    category: 'Company',
    question: "What is Coral Swift's business model?",
    variations: ['business model', 'how does your business work', 'how do you operate', 'your operating model', 'how does coral swift work as a business'],
  },
  {
    id: 'faq-industries',
    intentId: 'industries',
    category: 'Company',
    question: 'What industries does Coral Swift serve?',
    variations: ['which industries do you serve', 'sectors you work in', 'what domains', 'target industries', 'industries served'],
  },
  { id: 'faq-vision', intentId: 'vision', category: 'Company', question: "What is the company's vision?", variations: ['your vision', 'vision statement', 'what is your vision'] },
  { id: 'faq-mission', intentId: 'mission', category: 'Company', question: 'What is its mission?', variations: ['your mission', 'mission statement', 'what is your mission'] },
  {
    id: 'faq-how-connects',
    intentId: 'how-connects',
    category: 'Company',
    question: 'How does Coral Swift connect international businesses with delivery partners?',
    variations: ['how do you connect clients and partners', 'how does the matching work', 'explain your connection model'],
  },
  {
    id: 'faq-works-with-india',
    intentId: 'works-with-india',
    category: 'Company',
    question: 'Does Coral Swift work with organizations in India?',
    variations: ['do you work with india', 'indian companies', 'delivery in india', 'hyderabad'],
  },
  {
    id: 'faq-international-focus',
    intentId: 'international-focus',
    category: 'Company',
    question: 'Is Coral Swift focused on international businesses?',
    variations: ['are you us focused', 'us focused', 'international business', 'overseas clients', 'global business'],
  },
  { id: 'faq-pillars', intentId: 'pillars', category: 'Company', question: 'What are Coral Swift’s business pillars?', variations: ['three pillars', 'business pillars', 'main areas of business'] },
  { id: 'faq-brand-line', intentId: 'brand-line', category: 'Company', question: 'What is the Coral Swift brand line?', variations: ['tagline', 'slogan', 'brand line', 'connecting global opportunities'] },
  {
    id: 'faq-delivery-model',
    intentId: 'delivery-model',
    category: 'Company',
    question: 'How does the Coral Swift delivery model work?',
    variations: ['six stage delivery', 'delivery process', 'global to local model', 'steps of delivery', 'how you deliver projects'],
  },

  // ---- IT services ----
  {
    id: 'faq-it-list',
    intentId: 'it-services-list',
    category: 'IT',
    question: 'What IT services do you provide?',
    variations: ['explore it solutions', 'it services', 'technology services', 'what software services', 'list of it services', 'it capabilities'],
  },
  { id: 'faq-erp', intentId: 'svc-erp-implementation', category: 'IT', question: 'Do you provide ERP solutions?', variations: ['erp', 'enterprise resource planning', 'hrms', 'erp implementation'] },
  { id: 'faq-custom-sw', intentId: 'svc-custom-software-development', category: 'IT', question: 'Do you develop custom software?', variations: ['custom software', 'bespoke software', 'tailored software', 'custom development', 'proprietary software'] },
  { id: 'faq-web-app', intentId: 'svc-web-applications-portals', category: 'IT', question: 'Do you build web applications?', variations: ['web application', 'web app', 'business portal', 'portals', 'customer portal', 'website development'] },
  { id: 'faq-cloud', intentId: 'svc-cloud-infrastructure-support', category: 'IT', question: 'Do you provide cloud support?', variations: ['cloud', 'infrastructure', 'cloud migration', 'aws', 'azure', 'gcp', 'devops', 'kubernetes'] },
  { id: 'faq-testing', intentId: 'svc-application-testing-maintenance', category: 'IT', question: 'Do you offer application testing?', variations: ['application testing', 'qa', 'quality assurance', 'software testing', 'regression testing', 'maintenance', 'support and maintenance'] },
  { id: 'faq-digital', intentId: 'svc-digital-transformation', category: 'IT', question: 'Do you offer digital transformation?', variations: ['digital transformation', 'modernization', 'legacy modernization', 'digitalize operations'] },
  {
    id: 'faq-custom-tech-req',
    intentId: 'submit-requirement',
    category: 'IT',
    question: 'Can I discuss a custom technology requirement?',
    variations: ['discuss a custom technology requirement', 'i have a specific technology need', 'custom tech requirement'],
  },

  // ---- Non-IT services ----
  {
    id: 'faq-nonit-list',
    intentId: 'non-it-services-list',
    category: 'Non-IT',
    question: 'What Non-IT services do you offer?',
    variations: ['explore non it services', 'non it services', 'business operations', 'operational services', 'bpo services', 'list of non it services'],
  },
  { id: 'faq-medical-coding', intentId: 'svc-medical-coding-billing', category: 'Non-IT', question: 'Do you provide medical coding?', variations: ['medical coding', 'icd-10', 'cpt coding', 'medical billing', 'revenue cycle', 'claims'] },
  { id: 'faq-healthcare', intentId: 'svc-healthcare-support-processes', category: 'Non-IT', question: 'Do you support healthcare operations?', variations: ['healthcare support', 'prior authorization', 'eligibility verification', 'patient intake', 'healthcare processes'] },
  { id: 'faq-data-entry', intentId: 'svc-data-entry-document-processing', category: 'Non-IT', question: 'Do you offer data entry?', variations: ['data entry', 'document processing', 'xml conversion', 'ocr', 'keying', 'indexing', 'digitization'] },
  { id: 'faq-kyc', intentId: 'svc-banking-kyc-mortgage', category: 'Non-IT', question: 'Do you support banking KYC?', variations: ['banking kyc', 'kyc', 'aml', 'mortgage processing', 'mortgage', 'loan file', 'customer onboarding'] },
  { id: 'faq-mutual-fund', intentId: 'svc-mutual-fund-operations', category: 'Non-IT', question: 'Do you provide mutual-fund operations support?', variations: ['mutual fund', 'fund operations', 'reconciliation', 'custodian statement', 'trade confirmation'] },
  { id: 'faq-back-office', intentId: 'svc-back-office-services', category: 'Non-IT', question: 'Do you offer back-office services?', variations: ['back office', 'accounts payable', 'vendor records', 'administrative support', 'back-office'] },

  // ---- Partnerships ----
  {
    id: 'faq-become-partner',
    intentId: 'become-partner',
    category: 'Partnership',
    question: 'How can my company become a partner?',
    variations: ['become a partner', 'i want to become a partner', 'how to apply as partner', 'join as delivery partner', 'partner with you', 'express interest in partnership'],
  },
  {
    id: 'faq-partnership-types',
    intentId: 'partnership-types',
    category: 'Partnership',
    question: 'What types of partnerships are available?',
    variations: ['types of partnerships', 'partnership pathways', 'engagement pathways', 'how many ways to partner', 'partner options'],
  },
  {
    id: 'faq-eligibility',
    intentId: 'eligibility',
    category: 'Partnership',
    question: 'What are the eligibility requirements?',
    variations: ['eligibility criteria', 'partner requirements', 'what do you require to partner', 'screening criteria', 'am i eligible', 'do i qualify'],
  },
  { id: 'faq-min-age', intentId: 'min-age', category: 'Partnership', question: 'Is there a minimum company age requirement?', variations: ['minimum company age', 'business age', 'how many years', '3 years', 'years in operation'] },
  { id: 'faq-min-employees', intentId: 'min-employees', category: 'Partnership', question: 'Is there a minimum employee requirement?', variations: ['minimum employees', 'employee count', 'workforce size', '50 personnel', 'headcount', 'number of staff'] },
  { id: 'faq-turnover', intentId: 'turnover', category: 'Partnership', question: 'Is there a turnover requirement?', variations: ['turnover requirement', 'annual turnover', 'inr 2 crore', 'revenue requirement', 'financial threshold'] },
  { id: 'faq-documents', intentId: 'partner-documents', category: 'Partnership', question: 'What documents are required?', variations: ['required documents', 'documents needed', 'submission checklist', 'what to submit', 'paperwork for partnership'] },
  { id: 'faq-evaluation', intentId: 'partner-evaluation', category: 'Partnership', question: 'How does partner evaluation work?', variations: ['how are partners evaluated', 'partner selection process', 'how do you assess partners', 'evaluation steps', 'how are partners selected'] },
  { id: 'faq-guarantee', intentId: 'guarantee', category: 'Partnership', question: 'Will becoming a partner guarantee projects?', variations: ['does partnership guarantee projects', 'guaranteed projects', 'will i get work', 'guaranteed revenue', 'do you promise contracts'] },
  { id: 'faq-small-company', intentId: 'small-company', category: 'Partnership', question: 'Can a small company apply?', variations: ['small company', 'startup', 'do i need to be large', 'below threshold', 'fewer than 50 employees'] },
  { id: 'faq-bpo-partner', intentId: 'bpo-partner', category: 'Partnership', question: 'Can an established BPO become a partner?', variations: ['bpo partner', 'can a bpo apply', 'business process organization', 'call center partner', 'operations provider partner'] },
  {
    id: 'faq-partnership-services',
    intentId: 'partnership-services-list',
    category: 'Partnership',
    question: 'What partnership services do you provide?',
    variations: ['partnership services', 'vendor discovery', 'how do you support partners', 'partner enablement'],
  },

  // ---- Projects and business enquiries ----
  {
    id: 'faq-submit-requirement',
    intentId: 'submit-requirement',
    category: 'Project',
    question: 'How can I submit a project requirement?',
    variations: ['submit a project requirement', 'submit a project enquiry', 'raise an enquiry', 'start a project', 'i want to discuss a project', 'make a project request', 'project enquiry form'],
  },
  {
    id: 'faq-what-info',
    intentId: 'what-info',
    category: 'Project',
    question: 'What information should I provide in an enquiry?',
    variations: ['what info to provide', 'details for enquiry', 'what should i include', 'what do you need from me', 'enquiry requirements'],
  },
  {
    id: 'faq-opportunity-types',
    intentId: 'opportunity-types',
    category: 'Project',
    question: 'What types of project opportunities are listed?',
    variations: ['types of projects', 'project categories', 'sample opportunities', 'illustrative opportunities', 'what projects do you handle'],
  },
  {
    id: 'faq-currently-active',
    intentId: 'currently-active',
    category: 'Project',
    question: 'Are there currently active projects?',
    variations: ['do you have live projects', 'any open projects', 'current projects', 'available projects right now', 'is there active work'],
  },
  {
    id: 'faq-allocation-work',
    intentId: 'allocation-work',
    category: 'Project',
    question: 'How does project allocation work?',
    variations: ['how is work allocated', 'project allocation', 'how do projects get assigned', 'allocation process'],
  },
  { id: 'faq-consultation', intentId: 'consultation', category: 'Project', question: 'Can I request a consultation?', variations: ['request a consultation', 'book a meeting', 'schedule a call', 'introductory discussion', 'can we meet'] },
  {
    id: 'faq-business-opportunity',
    intentId: 'business-opportunity',
    category: 'Project',
    question: 'How can I discuss a business opportunity?',
    variations: ['discuss a business opportunity', 'business enquiry', 'explore an opportunity', 'new business discussion'],
  },

  // ---- Strategic discussions ----
  { id: 'faq-mergers', intentId: 'pathway-strategic-merger', category: 'Strategic', question: 'Does Coral Swift consider mergers?', variations: ['do you consider mergers', 'merger', 'acquire a company', 'm&a', 'equity integration', 'structural merger'] },
  {
    id: 'faq-integration',
    intentId: 'strategic-how',
    category: 'Strategic',
    question: 'How can I discuss an integration opportunity?',
    variations: ['integration opportunity', 'business integration', 'how do strategic partnerships work', 'strategic partnership', 'organizational collaboration', 'joint delivery model'],
  },
  {
    id: 'faq-confidential',
    intentId: 'confidential-enquiry',
    category: 'Strategic',
    question: 'Can I submit a confidential business enquiry?',
    variations: ['confidential enquiry', 'private business enquiry', 'discreet discussion', 'shared confidentially'],
  },

  // ---- Website guidance ----
  { id: 'faq-find-it', intentId: 'find-it', category: 'Website', question: 'Where can I find IT services?', variations: ['where are it services', 'link to it solutions', 'it solutions page'] },
  { id: 'faq-find-nonit', intentId: 'find-nonit', category: 'Website', question: 'Where can I find Non-IT services?', variations: ['where are non it services', 'link to non it solutions', 'operations page'] },
  { id: 'faq-apply-partnership', intentId: 'become-partner', category: 'Website', question: 'Where can I apply for a partnership?', variations: ['where to apply for partnership', 'partner application form', 'apply as partner page', 'link to partnership application'] },
  { id: 'faq-find-enquiry', intentId: 'submit-requirement', category: 'Website', question: 'Where can I submit a project enquiry?', variations: ['where is the enquiry form', 'project enquiry page', 'submit enquiry link'] },
  { id: 'faq-contact', intentId: 'contact', category: 'Website', question: 'How can I contact Coral Swift?', variations: ['contact coral swift', 'how to reach you', 'get in touch', 'contact page', 'your contact details', 'phone number', 'email address'] },
];
