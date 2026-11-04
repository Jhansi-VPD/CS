export type ServiceCategory = 'it' | 'non-it' | 'partnership';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  useCases: string[];
  capabilities: string[];
  engagementApproach: string;
  informationRequired: string[];
  disclaimer: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  iconName: string;
  businessRequirements: string[];
  applicableSolutions: string[];
  collaborationOpportunities: string[];
}

export interface OpportunityItem {
  id: string;
  title: string;
  category: 'IT Enterprise' | 'Software Delivery' | 'Healthcare Operations' | 'Financial Operations' | 'Data & Indexing';
  description: string;
  sampleScope: string[];
  typicalVolume: string;
  requiredSkills: string[];
  securityRequirements: string;
  isIllustrative: boolean;
}

export interface PartnerPathway {
  id: 'strategic-merger' | 'direct-project' | 'subcontracting';
  title: string;
  tagline: string;
  targetProfile: string;
  turnoverRequirement?: string;
  workforceRequirement?: string;
  experienceRequirement?: string;
  description: string;
  keyBenefits: string[];
  processSummary: string;
}

export interface ScreeningCriterion {
  criterion: string;
  sourceThreshold: string;
  evidenceRequired: string;
  statusNotes: string;
}

export interface FaqItem {
  id: string;
  category: 'About Coral Swift' | 'IT Solutions' | 'Non-IT Solutions' | 'Business Enquiries' | 'Partnership Opportunities' | 'Screening Criteria' | 'Engagement Process' | 'Strategic Discussions';
  question: string;
  answer: string;
}

export interface ProcessStage {
  step: number;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  stakeholders: string[];
  nextStep: string;
}

// Form Submission Types
export interface ProjectEnquiryFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  designation: string;
  country: string;
  contactNumber: string;
  serviceCategory: 'IT Solutions' | 'Non-IT / Business Operations' | 'Partnership Services' | 'Multiple / Other';
  specificService: string;
  requirementSummary: string;
  estimatedBudget?: string;
  expectedTimeline?: string;
  additionalInfo?: string;
  consent: boolean;
}

export interface PartnerApplicationFormData {
  contactPersonName: string;
  businessEmail: string;
  companyName: string;
  companyWebsite: string;
  registeredAddress: string;
  country: string;
  contactNumber: string;
  organizationType: string;
  yearEstablished: string;
  employeeCount: string;
  annualTurnover: string;
  preferredPathway: 'Strategic Merger / Integration' | 'Direct Project Engagement' | 'Vendor / Subcontracting Partnership';
  primaryExpertise: string[];
  industryExperience: string[];
  companyOverview: string;
  relevantCapabilities: string;
  selectedEvidenceDocuments: string[];
  consent: boolean;
}

export interface StrategicEnquiryFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  country: string;
  natureOfOpportunity: 'Strategic Merger / Equity Integration' | 'Structured Joint Delivery' | 'Enterprise Asset Transition' | 'Other Strategic Discussion';
  currentTurnoverBand: string;
  currentWorkforce: string;
  confidentialSummary: string;
  preferredContactMethod: 'Email' | 'Direct Call' | 'Secure Virtual Meeting';
  confidentialityConsent: boolean;
}

export interface GeneralContactFormData {
  name: string;
  email: string;
  company?: string;
  country: string;
  phone?: string;
  enquiryType: 'General Enquiry' | 'Project Requirement' | 'Partnership Question' | 'Media / Corporate';
  message: string;
  consent: boolean;
}

export interface MeetingRequestFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  timeZone: string;
  preferredDate: string;
  preferredTimeSlot: string;
  meetingPurpose: string;
  notes?: string;
}

