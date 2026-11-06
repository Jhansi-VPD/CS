import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'it-software',
    title: 'Information Technology & Software',
    subtitle: 'Software engineering and application teams for technology companies.',
    overview: 'We connect software organizations with screened Indian delivery centers that build, test, and maintain modern applications.',
    iconName: 'Code',
    businessRequirements: [
      'Quick ramp-up of dedicated development teams',
      'Web application and cloud architecture engineering',
      'Automated QA, regression suites, and CI/CD pipelines',
      'Legacy modernization and ongoing maintenance'
    ],
    applicableSolutions: [
      'Custom Software Development',
      'Web Applications & Business Portals',
      'Cloud & Infrastructure Support',
      'Application Testing & Maintenance'
    ],
    collaborationOpportunities: [
      'Dedicated teams under agreed delivery management',
      'Fixed-scope milestone delivery for applications',
      'Maintenance support for enterprise products'
    ]
  },
  {
    id: 'healthcare-operations',
    title: 'Healthcare & Medical Support',
    subtitle: 'Revenue cycle support, medical coding, billing, and admin workflows.',
    overview: 'We connect healthcare organizations with disciplined centers providing trained coding, billing, and documentation professionals.',
    iconName: 'HeartPulse',
    businessRequirements: [
      'Accurate ICD-10 and CPT coding from clinical records',
      'Accounts receivable and denial management support',
      'Prior authorization and benefits verification',
      'EHR data indexing and chart consolidation'
    ],
    applicableSolutions: [
      'Medical Coding & Medical Billing',
      'Healthcare Support Processes',
      'High-Volume Document Indexing'
    ],
    collaborationOpportunities: [
      'Daily chart coding and claim scrub teams',
      'Denial management and AR recovery support',
      'Prior authorization and patient intake teams'
    ]
  },
  {
    id: 'banking-financial-services',
    title: 'Banking, Financial Services & Mortgage',
    subtitle: 'KYC validation, loan processing, and fund accounting back-office support.',
    overview: 'We connect financial institutions with skilled back-office teams that review documentation under strict operational security.',
    iconName: 'Landmark',
    businessRequirements: [
      'KYC/AML customer onboarding document verification',
      'Mortgage loan package and title document review',
      'Daily statement and transaction reconciliations',
      'Financial statement formatting and verification'
    ],
    applicableSolutions: [
      'Banking KYC & Mortgage Processing',
      'Mutual-Fund Operations Support',
      'Enterprise Back-Office Services'
    ],
    collaborationOpportunities: [
      'Dedicated KYC and compliance document audit teams',
      'Mortgage document packaging and review shifts',
      'Daily mutual fund reconciliation support'
    ]
  },
  {
    id: 'enterprise-operations',
    title: 'Enterprise Operations & High-Volume Data',
    subtitle: 'Back-office workflows, ERP implementations, and large-scale digitization.',
    overview: 'We match established enterprises with ERP delivery partners and high-capacity data processing centers.',
    iconName: 'Building2',
    businessRequirements: [
      'ERP consolidation across HR and finance',
      'Large-scale paper-to-digital conversion and OCR cleanup',
      'Invoice processing and vendor database maintenance',
      'Routine customer ticket routing and support'
    ],
    applicableSolutions: [
      'Enterprise Resource Planning (ERP)',
      'Data Entry & High-Volume Document Processing',
      'Enterprise Back-Office Services',
      'Digital Transformation'
    ],
    collaborationOpportunities: [
      'Full ERP deployment and data migration programs',
      'High-volume data transcription programs',
      'Continuous back-office administrative support'
    ]
  }
];
