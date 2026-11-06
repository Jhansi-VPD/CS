import { PartnerPathway, ProcessStage, ScreeningCriterion } from '../types';

export const proposedScreeningCriteria: ScreeningCriterion[] = [
  {
    criterion: 'Business Age',
    sourceThreshold: 'At least 3 years of established operations',
    evidenceRequired: 'Certificate of incorporation or company registration showing the founding date.',
    statusNotes: 'Proposed baseline to confirm operational maturity.'
  },
  {
    criterion: 'Workforce Strength',
    sourceThreshold: 'Minimum 50 employed personnel',
    evidenceRequired: 'Verifiable payroll records, statutory filings (e.g. PF/ESI), or verified headcount rosters.',
    statusNotes: 'Confirms capacity to handle enterprise project demand.'
  },
  {
    criterion: 'Financial Turnover (Direct Allocation)',
    sourceThreshold: 'Minimum annual turnover of INR 2 Crore',
    evidenceRequired: 'Audited financial statements, tax filings, or CA turnover certificates.',
    statusNotes: 'Proposed threshold for Direct Project Allocation. Exceptions reviewed per project scope.'
  },
  {
    criterion: 'Technical & Operational Governance',
    sourceThreshold: 'Demonstrated delivery history, security practices, and client references',
    evidenceRequired: 'Service portfolio, infrastructure overview, data security measures, and two client references.',
    statusNotes: 'Assessed by the evaluation team before project assignment.'
  }
];

export const engagementPathways: PartnerPathway[] = [
  {
    id: 'strategic-merger',
    title: 'Strategic Merger / Integration Discussion',
    tagline: 'Structural collaboration for mature IT organizations',
    targetProfile: 'Established IT firms exploring a deeper structural relationship.',
    turnoverRequirement: 'Strong balance sheet with verifiable audited growth history',
    workforceRequirement: '50+ full-time technical specialists with senior leadership',
    experienceRequirement: '3+ years of operating track record with specialized capabilities',
    description: 'Preliminary discussions on a possible merger or integration, subject to legal, financial and operational due diligence.',
    keyBenefits: [
      'Access to international enterprise project pipelines',
      'Shared operational governance after integration',
      'Wider US and international market reach',
      'Aligned capital, technology, and leadership'
    ],
    processSummary: 'Confidential inquiry → Preliminary review → Due diligence → Term sheet discussion.'
  },
  {
    id: 'direct-project',
    title: 'Direct Project Engagement',
    tagline: 'Project allocation for financially qualified partners',
    targetProfile: 'Companies meeting the INR 2 Crore turnover threshold with capacity to lead enterprise delivery.',
    turnoverRequirement: 'Minimum INR 2 Crore annual turnover (verified via audited records)',
    workforceRequirement: 'Minimum 50 employed personnel with domain specialization',
    experienceRequirement: 'Minimum 3 years of continuous corporate operations',
    description: 'Qualified organizations meeting the financial and workforce baselines are considered for direct project allocation across ERP, application development, and business operations.',
    keyBenefits: [
      'Direct coordination with international clients',
      'Milestone-based commercial arrangements',
      'Clear scope and structured requirement packages',
      'Path to repeat client delivery pipelines'
    ],
    processSummary: 'Expression of interest → Financial and workforce verification → Capability review → Commercial agreement.'
  },
  {
    id: 'subcontracting',
    title: 'Vendor / Subcontracting Partnership',
    tagline: 'Modular delivery for specialized teams and domain experts',
    targetProfile: 'Specialized technology or BPO providers seeking modular project assignments.',
    turnoverRequirement: 'Evaluated based on project scope and financial health',
    workforceRequirement: 'Team availability matching specific project needs',
    experienceRequirement: 'Verifiable technical track record and client portfolio',
    description: 'For firms with strong niche capability (e.g. QA automation, medical coding, data annotation, cloud services) that may not meet uniform enterprise thresholds.',
    keyBenefits: [
      'Modules within large international programs',
      'Flexible subcontracting with clear milestones',
      'Support with client communication and governance',
      'Path to a higher partnership tier'
    ],
    processSummary: 'Capability statement → Technical evaluation → Vendor agreement → Pilot module.'
  }
];

export const submissionChecklist = [
  {
    id: 'doc-reg',
    name: 'Company Registration Proof',
    description: 'Certificate of incorporation, GST/tax registration, or operating license.'
  },
  {
    id: 'doc-history',
    name: 'Three-Year Operating History',
    description: 'Proof of at least three years of continuous business operations.'
  },
  {
    id: 'doc-workforce',
    name: 'Employee-Strength Evidence',
    description: 'Payroll or statutory filings (PF/ESI) confirming 50+ employees.'
  },
  {
    id: 'doc-financials',
    name: 'Latest Financial Statements',
    description: 'Audited statements or a CA turnover certificate for allocation review.'
  },
  {
    id: 'doc-portfolio',
    name: 'Service Portfolio & Case Studies',
    description: 'Core services, technology stacks, and past project categories.'
  },
  {
    id: 'doc-infra',
    name: 'Infrastructure & Security Summary',
    description: 'Facilities, network security, data protection, and backup controls.'
  },
  {
    id: 'doc-references',
    name: 'Two Client References',
    description: 'Verifiable references or sanitized case studies of past projects.'
  },
  {
    id: 'doc-contact',
    name: 'Authorized Contact Details',
    description: 'Representative name, corporate email, phone, and designation.'
  }
];

export const sixStageEvaluation: ProcessStage[] = [
  {
    step: 1,
    name: 'Expression of Interest',
    headline: 'Application & Profile Submission',
    description: 'Partners submit their company profile, core services, and preferred pathway through the portal.',
    deliverables: ['Partner Application Form', 'Company Overview', 'Pathway Preference'],
    stakeholders: ['Applicant Leadership', 'Coral Swift Partner Desk'],
    nextStep: 'Eligibility Verification'
  },
  {
    step: 2,
    name: 'Eligibility Verification',
    headline: 'Documentation & Threshold Review',
    description: 'The review desk checks registration, employee-strength, and financial records against the proposed baselines.',
    deliverables: ['Document Completeness Check', 'Verification Checklist', 'Initial Status Memo'],
    stakeholders: ['Partner Review Desk', 'Financial Analyst'],
    nextStep: 'Capability Review'
  },
  {
    step: 3,
    name: 'Capability Review',
    headline: 'Technical Depth & Operational Audit',
    description: 'Assessment of technical skills, infrastructure security, management strength, and client reference feedback.',
    deliverables: ['Technical Due Diligence Report', 'Infrastructure Assessment', 'Reference Verification'],
    stakeholders: ['Technical Evaluators', 'Delivery Practice Leads'],
    nextStep: 'Commercial & Legal Review'
  },
  {
    step: 4,
    name: 'Commercial & Legal Review',
    headline: 'Agreement Structuring',
    description: 'Agreeing the master services agreement, confidentiality terms, intellectual property safeguards and payment milestones.',
    deliverables: ['Confidentiality Terms', 'Master Services Agreement', 'Governance Charter'],
    stakeholders: ['Legal Counsel', 'Commercial Operations'],
    nextStep: 'Controlled Pilot / Onboarding'
  },
  {
    step: 5,
    name: 'Pilot / Onboarding',
    headline: 'Controlled Kickoff & Milestone Validation',
    description: 'An initial pilot assignment with clear milestones, quality criteria, and active communication.',
    deliverables: ['Pilot Project Plan', 'Service-Level Tracking', 'First Milestone Delivery'],
    stakeholders: ['Delivery Team', 'Project Governance Manager'],
    nextStep: 'Scale-Up & Full Allocation'
  },
  {
    step: 6,
    name: 'Scale-Up',
    headline: 'Expanded Assignment & Long-Term Growth',
    description: 'After pilot acceptance, project allocation expands and recurring business reviews are scheduled.',
    deliverables: ['Expanded SOW', 'Business Review Schedule', 'Capacity Roadmaps'],
    stakeholders: ['Executive Sponsors', 'Account Steering Committee'],
    nextStep: 'Continuous Partnership'
  }
];

export const globalDeliverySteps: ProcessStage[] = [
  {
    step: 1,
    name: 'International Demand Discovery',
    headline: 'Capturing Global Business Requirements',
    description: 'Structuring IT and Non-IT requirements from international enterprises seeking offshore delivery.',
    deliverables: ['Business Requirement Brief', 'Preliminary Feasibility Assessment'],
    stakeholders: ['International Client', 'Coral Swift Business Development'],
    nextStep: 'Requirement Validation & Scoping'
  },
  {
    step: 2,
    name: 'Requirement Validation',
    headline: 'Technical & Operational Translation',
    description: 'Translating business goals into technical specifications, skill requirements, and compliance boundaries.',
    deliverables: ['Technical Specification Document', 'Skill Matrix', 'Resource Sizing Model'],
    stakeholders: ['Solutions Architect', 'Project Coordinator'],
    nextStep: 'Partner Due Diligence & Alignment'
  },
  {
    step: 3,
    name: 'Partner Due Diligence',
    headline: 'Matching with Qualified Delivery Centers',
    description: 'Matching validated requirements with vetted partners based on capability, headcount, and track record.',
    deliverables: ['Partner Shortlist', 'Capability Matching Dossier', 'Client Presentation'],
    stakeholders: ['Partner Evaluation Team', 'Delivery Partner Leads'],
    nextStep: 'Project Scoping & Contracting'
  },
  {
    step: 4,
    name: 'Project Scoping & Contracting',
    headline: 'Transparent Commercials',
    description: 'Agreeing milestone schedules, commercial terms and acceptance criteria before kickoff.',
    deliverables: ['Statement of Work (SOW)', 'Commercial Contract', 'Service-Level Schedule'],
    stakeholders: ['Legal Teams', 'Commercial Managers', 'Client Stakeholders'],
    nextStep: 'Coordinated Delivery & QA'
  },
  {
    step: 5,
    name: 'Delivery & QA',
    headline: 'Disciplined Execution & Quality Checks',
    description: 'Structured execution with regular demos, milestone verification, testing, and client reviews.',
    deliverables: ['Sprint Deliverables', 'QA Test Reports', 'Delivery Shift Logs'],
    stakeholders: ['Dedicated Delivery Team', 'QA Lead', 'Client Project Manager'],
    nextStep: 'Reporting & Continuous Improvement'
  },
  {
    step: 6,
    name: 'Reporting & Continuous Improvement',
    headline: 'Governance, Metrics & Sustainable Scale',
    description: 'Ongoing governance, service-level reporting and capacity planning to support long-term partnerships.',
    deliverables: ['Governance Reporting', 'Quality Audit Reports', 'Scale-up Roadmap'],
    stakeholders: ['Steering Committee', 'Operations Leads'],
    nextStep: 'Long-term Growth'
  }
];
