import { PartnerPathway, ProcessStage, ScreeningCriterion } from '../types';

export const proposedScreeningCriteria: ScreeningCriterion[] = [
  {
    criterion: 'Business Age',
    sourceThreshold: 'At least 3 years of established operations',
    evidenceRequired: 'Certificate of incorporation / company registration proof showing date of establishment.',
    statusNotes: 'Proposed screening baseline to ensure operational maturity and organizational stability.'
  },
  {
    criterion: 'Workforce Strength',
    sourceThreshold: 'Minimum 50 employed candidates / personnel',
    evidenceRequired: 'Verifiable payroll records, statutory contribution filings (e.g. PF / ESI records), or verified headcount rosters.',
    statusNotes: 'Evaluates immediate staffing capability and capacity to absorb enterprise project demand.'
  },
  {
    criterion: 'Financial Turnover (Direct Allocation)',
    sourceThreshold: 'Minimum annual turnover of INR 2 Crore (or equivalent)',
    evidenceRequired: 'Audited financial statements, tax filings, or certified chartered accountant declarations for the latest fiscal years.',
    statusNotes: 'Specific threshold proposed for Direct Project Allocation. Discretionary exceptions reviewed per project scope.'
  },
  {
    criterion: 'Technical & Operational Governance',
    sourceThreshold: 'Demonstrated delivery history, security protocols, and client references',
    evidenceRequired: 'Detailed service portfolio, physical/cloud infrastructure overview, information security measures, and two verifiable client references.',
    statusNotes: 'Comprehensive capability assessment conducted by evaluation team before project assignment.'
  }
];

export const engagementPathways: PartnerPathway[] = [
  {
    id: 'strategic-merger',
    title: 'Strategic Merger / Integration Discussion',
    tagline: 'Deep structural collaboration for mature technology organizations',
    targetProfile: 'Established IT organizations seeking deeper commercial integration, capital alignment, or unified cross-border market positioning.',
    turnoverRequirement: 'Strong balance sheet with verifiable audited growth history',
    workforceRequirement: '50+ full-time technical specialists with senior leadership',
    experienceRequirement: '3+ years of operating track record with specialized capabilities',
    description: 'Coral Swift invites preliminary discussions with mature IT companies exploring structural mergers, equity alignments, or joint enterprise platforms. All discussions are conducted under mutual non-disclosure agreements.',
    keyBenefits: [
      'Access to international enterprise demand pipeline',
      'Structural integration and shared operational governance',
      'Expanded market footprint across US and overseas territories',
      'Coordinated capital, technology, and leadership alignment'
    ],
    processSummary: 'Initial confidential inquiry → NDA execution → Financial & operational due diligence → Structural term sheet.'
  },
  {
    id: 'direct-project',
    title: 'Direct Project Engagement',
    tagline: 'Direct delivery allocation for established, financially qualified partners',
    targetProfile: 'Companies meeting the INR 2 Crore turnover threshold with ready capacity to lead enterprise project execution.',
    turnoverRequirement: 'Minimum INR 2 Crore annual turnover (verified via audited records)',
    workforceRequirement: 'Minimum 50 employed personnel with domain specialization',
    experienceRequirement: 'Minimum 3 years of continuous corporate operations',
    description: 'Qualified delivery organizations meeting the baseline financial and workforce thresholds are considered for direct project allocation across enterprise ERP, application development, and business operations.',
    keyBenefits: [
      'Direct project allocation coordination with international clients',
      'Milestone-based commercial arrangements with predictable cash flows',
      'Transparent scope boundaries and structured requirement packages',
      'Opportunity to build long-term repeat client delivery pipelines'
    ],
    processSummary: 'Expression of interest → Financial & workforce verification → Capability audit → Master Services Agreement (MSA).'
  },
  {
    id: 'subcontracting',
    title: 'Vendor / Subcontracting Partnership',
    tagline: 'Specialized modular delivery for agile teams and domain experts',
    targetProfile: 'Specialized technology or BPO providers with proven domain expertise seeking modular project assignments.',
    turnoverRequirement: 'Evaluated based on specific modular project scope and financial health',
    workforceRequirement: 'Dedicated team availability matching specific project pods',
    experienceRequirement: 'Verifiable technical track record and client portfolio',
    description: 'For companies that demonstrate exceptional capability in specific niche areas (e.g. automated QA, specialized medical coding, data annotation, cloud security) without necessarily meeting uniform enterprise thresholds.',
    keyBenefits: [
      'Participation in modular components of large international programs',
      'Flexible subcontracting terms with clear delivery milestones',
      'Support with international client communications and governance',
      'Path to elevate partnership tier as delivery history matures'
    ],
    processSummary: 'Capability statement submission → Skill & technical evaluation → Vendor agreement → Pilot module allocation.'
  }
];

export const submissionChecklist = [
  {
    id: 'doc-reg',
    name: 'Company Registration Proof',
    description: 'Certificate of incorporation, GST/Tax registration, or jurisdictional operating license.'
  },
  {
    id: 'doc-history',
    name: 'Three-Year Operating History',
    description: 'Documentation confirming at least three years of continuous corporate business operations.'
  },
  {
    id: 'doc-workforce',
    name: 'Employee-Strength Evidence',
    description: 'Payroll records, statutory filings (PF/ESI/statutory returns), or certified headcount statement confirming 50+ staff.'
  },
  {
    id: 'doc-financials',
    name: 'Latest Financial Statements',
    description: 'Audited balance sheets, profit & loss statements, or CA turnover certificate for direct allocation review.'
  },
  {
    id: 'doc-portfolio',
    name: 'Service Portfolio & Case Studies',
    description: 'Comprehensive presentation detailing core technology stacks, methodologies, and past project categories.'
  },
  {
    id: 'doc-infra',
    name: 'Infrastructure & Security Summary',
    description: 'Overview of physical facility, network security, data protection controls, backup policies, and workstations.'
  },
  {
    id: 'doc-references',
    name: 'Two Client References',
    description: 'Verifiable reference contacts or sanitized case studies demonstrating past project completion.'
  },
  {
    id: 'doc-contact',
    name: 'Authorized Contact Details',
    description: 'Official representative name, corporate email address, phone number, and designation.'
  }
];

export const sixStageEvaluation: ProcessStage[] = [
  {
    step: 1,
    name: 'Expression of Interest',
    headline: 'Application & Profile Submission',
    description: 'Prospective delivery partners submit their company profile, core service offerings, and selected partnership pathway via the public portal.',
    deliverables: ['Partner Application Form', 'Executive Overview', 'Pathway Preference'],
    stakeholders: ['Applicant Leadership', 'Coral Swift Partner Desk'],
    nextStep: 'Eligibility Verification'
  },
  {
    step: 2,
    name: 'Eligibility Verification',
    headline: 'Documentation & Threshold Review',
    description: 'The partner evaluation desk reviews incorporation documents, employee strength records, and financial statements against proposed screening baselines.',
    deliverables: ['Document Completeness Check', 'Verification Checklist', 'Initial Status Memo'],
    stakeholders: ['Partner Review Desk', 'Financial Analyst'],
    nextStep: 'Capability Review'
  },
  {
    step: 3,
    name: 'Capability Review',
    headline: 'Technical Depth & Operational Audit',
    description: 'In-depth assessment of the organization’s technical skills, infrastructure security, management structure, and client reference feedback.',
    deliverables: ['Technical Due Diligence Report', 'Infrastructure Assessment', 'Reference Verification'],
    stakeholders: ['Technical Evaluators', 'Delivery Practice Leads'],
    nextStep: 'Commercial & Legal Review'
  },
  {
    step: 4,
    name: 'Commercial & Legal Review',
    headline: 'Agreement Structuring & NDA',
    description: 'Drafting and negotiating the Master Services Agreement (MSA), Non-Disclosure Agreement (NDA), intellectual property safeguards, and payment milestones.',
    deliverables: ['Mutual NDA', 'Master Services Agreement', 'Governance Charter'],
    stakeholders: ['Legal Counsel', 'Commercial Operations'],
    nextStep: 'Controlled Pilot / Onboarding'
  },
  {
    step: 5,
    name: 'Pilot / Onboarding',
    headline: 'Controlled Kickoff & Milestone Validation',
    description: 'Executing an initial controlled assignment or pilot module with clear milestones, quality criteria, and active communication routines.',
    deliverables: ['Pilot Project Plan', 'SLA Baseline Tracking', 'First Milestone Delivery'],
    stakeholders: ['Delivery Pod', 'Project Governance Manager'],
    nextStep: 'Scale-Up & Full Allocation'
  },
  {
    step: 6,
    name: 'Scale-Up',
    headline: 'Expanded Assignment & Long-Term Growth',
    description: 'Following successful pilot acceptance, expanding project allocation, deepening team integration, and scheduling recurring business reviews.',
    deliverables: ['Expanded SOW', 'Quarterly Business Reviews (QBR)', 'Capacity Roadmaps'],
    stakeholders: ['Executive Sponsors', 'Account Steering Committee'],
    nextStep: 'Continuous Partnership'
  }
];

export const globalDeliverySteps: ProcessStage[] = [
  {
    step: 1,
    name: 'International Demand Discovery',
    headline: 'Capturing Global Business Requirements',
    description: 'Identifying and structuring IT and Non-IT business requirements from international enterprises seeking reliable offshore delivery capabilities.',
    deliverables: ['Business Requirement Brief', 'Preliminary Feasibility Assessment'],
    stakeholders: ['International Client', 'Coral Swift Business Development'],
    nextStep: 'Requirement Validation & Scoping'
  },
  {
    step: 2,
    name: 'Requirement Validation',
    headline: 'Technical & Operational Translation',
    description: 'Translating high-level business goals into rigorous technical specifications, SLA benchmarks, skill requirements, and compliance boundaries.',
    deliverables: ['Technical Specification Document', 'Skill Matrix', 'Resource Sizing Model'],
    stakeholders: ['Solutions Architect', 'Project Coordinator'],
    nextStep: 'Partner Due Diligence & Alignment'
  },
  {
    step: 3,
    name: 'Partner Due Diligence',
    headline: 'Matching with Qualified Delivery Centers',
    description: 'Matching validated project specifications with vetted delivery partners possessing proven capability, required headcount, and audited track records.',
    deliverables: ['Partner Shortlist', 'Capability Matching Dossier', 'Client Presentation'],
    stakeholders: ['Partner Evaluation Team', 'Delivery Partner Leads'],
    nextStep: 'Project Scoping & Contracting'
  },
  {
    step: 4,
    name: 'Project Scoping & Contracting',
    headline: 'Transparent Commercials & IP Protection',
    description: 'Establishing transparent milestone schedules, IP protections, non-disclosure terms, and clear acceptance criteria prior to any code or operational kickoff.',
    deliverables: ['Statement of Work (SOW)', 'Commercial Contract', 'SLA Schedule'],
    stakeholders: ['Legal Teams', 'Commercial Managers', 'Client Stakeholders'],
    nextStep: 'Coordinated Delivery & QA'
  },
  {
    step: 5,
    name: 'Delivery & QA',
    headline: 'Disciplined Execution & Independent Oversight',
    description: 'Structured sprint execution or daily shift delivery with regular demos, milestone verification, automated test validation, and client reviews.',
    deliverables: ['Sprint Deliverables', 'QA Test Reports', 'Daily/Weekly Shift Logs'],
    stakeholders: ['Dedicated Delivery Pod', 'QA Lead', 'Client Project Manager'],
    nextStep: 'Reporting & Continuous Improvement'
  },
  {
    step: 6,
    name: 'Reporting & Continuous Improvement',
    headline: 'Governance, Metrics & Sustainable Scale',
    description: 'Regular operational governance, SLA reporting, retrospective audits, and capacity scale-up to support long-term partnership value.',
    deliverables: ['Monthly Governance Dashboard', 'Quality Audit Scores', 'Scale-up Roadmap'],
    stakeholders: ['Steering Committee', 'Operations Leads'],
    nextStep: 'Long-term Growth'
  }
];

