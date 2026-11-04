import { OpportunityItem } from '../types';

export const illustrativeOpportunities: OpportunityItem[] = [
  {
    id: 'opp-enterprise-erp',
    title: 'Enterprise ERP Implementation & Consolidation',
    category: 'IT Enterprise',
    description: 'Sample enterprise requirements covering unified Human Resource Management Systems (HRMS), core financial ledger consolidation, workflow automation, and custom legacy integrations.',
    sampleScope: [
      'Multi-location HRMS module implementation and payroll calculation',
      'Accounts payable and receivable workflow orchestration',
      'Role-based approval matrices and automated email/slack triggers',
      'Bi-directional REST API integration with third-party warehousing systems'
    ],
    typicalVolume: 'Enterprise scale (500–5,000 active corporate users across regional hubs)',
    requiredSkills: [
      'Enterprise ERP Architecture',
      'SQL / PostgreSQL Schema Design',
      'Node.js / Java Enterprise APIs',
      'Integration Testing & Data Migration'
    ],
    securityRequirements: 'Strict enterprise role-based access control (RBAC), end-to-end data encryption in transit and at rest, and detailed audit trails.',
    isIllustrative: true
  },
  {
    id: 'opp-web-portal-dev',
    title: 'Web & Enterprise Application Development',
    category: 'Software Delivery',
    description: 'Representative client requirement for high-throughput corporate customer portals, self-service dashboards, and modern microservice architectures.',
    sampleScope: [
      'Modern responsive frontend web application built with React/TypeScript',
      'Scalable microservice API backend with Docker containerization',
      'Multi-tenant authentication and permission management',
      'Comprehensive QA test suite with automated regression pipelines'
    ],
    typicalVolume: 'Medium-to-high traffic web application (10k+ daily active users)',
    requiredSkills: [
      'React / Next.js / TypeScript',
      'REST & GraphQL API Engineering',
      'Docker & CI/CD Pipelines',
      'Automated UI Testing (Playwright / Cypress)'
    ],
    securityRequirements: 'OWASP Top-10 compliance, CSRF/XSS protection, rate-limiting, and secure token session management.',
    isIllustrative: true
  },
  {
    id: 'opp-healthcare-coding-billing',
    title: 'Healthcare Operations & Revenue Cycle Support',
    category: 'Healthcare Operations',
    description: 'Illustrative operational engagement for specialized medical coding, billing reconciliation, and claim scrub documentation under client-defined quality thresholds.',
    sampleScope: [
      'ICD-10-CM and CPT coding from digitized clinical documentation',
      'Daily charge entry and electronic claim submission',
      'Denial breakdown analysis, payer follow-up, and appeal preparation',
      'Weekly reconciliation of remitted payments and outstanding balances'
    ],
    typicalVolume: '25,000 – 60,000 charts/claims processed monthly',
    requiredSkills: [
      'Certified Medical Coding Knowledge (AAPC/AHIMA standards)',
      'EHR & Practice Management Software Navigation',
      'Payer Portal Verification',
      'Multi-tier Quality Auditing'
    ],
    securityRequirements: 'Client-defined secure VDI access protocols, clean-desk policies, dual-factor authentication, and strict non-disclosure protections.',
    isIllustrative: true
  },
  {
    id: 'opp-financial-kyc-mortgage',
    title: 'Financial Process Operations: KYC & Mortgage Review',
    category: 'Financial Operations',
    description: 'Sample operational requirement for Know-Your-Customer (KYC) documentation review, mortgage loan file verification, and mutual fund statement reconciliation.',
    sampleScope: [
      'Customer identity verification and AML checklist review',
      'Mortgage disclosure packet auditing and title document completeness checks',
      'Custodian and broker trade statement matching',
      'Discrepancy log maintenance and supervisor escalation'
    ],
    typicalVolume: '5,000 – 15,000 document files / accounts audited per month',
    requiredSkills: [
      'Financial Document Analysis',
      'Mortgage & Loan Lifecycle Understanding',
      'Spreadsheet & Reconciliation Modeling',
      'Attention to Detail & Regulatory Checklist Adherence'
    ],
    securityRequirements: 'Secure network environments, restricted local storage, watermarked document viewing, and full audit logging.',
    isIllustrative: true
  },
  {
    id: 'opp-high-volume-data',
    title: 'High-Volume Document & Data Operations',
    category: 'Data & Indexing',
    description: 'Representative requirement for high-volume scanned document processing, XML/JSON conversion, metadata indexing, and multi-tier verification.',
    sampleScope: [
      'Digitization and double-key data entry of legacy paperwork',
      'XML conversion and schema validation for publishing/catalog systems',
      'Image tagging, bounding-box annotation, and metadata categorization',
      'Statistical quality sampling maintaining 99%+ accuracy thresholds'
    ],
    typicalVolume: '100,000 – 500,000 records / documents per month',
    requiredSkills: [
      'High-Speed Alphanumeric Keying',
      'XML / JSON Formatting & Schema Tools',
      'OCR Post-Processing Verification',
      'Batch Quality Control Systems'
    ],
    securityRequirements: 'Encrypted batch transfer, access-controlled temporary processing drives, and verified post-delivery data purging.',
    isIllustrative: true
  }
];

