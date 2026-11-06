import { ServiceItem } from '../types';

export const itServices: ServiceItem[] = [
  {
    id: 'erp-implementation',
    category: 'it',
    title: 'ERP',
    shortDescription: 'ERP implementation, HRMS, financial accounting, and system integrations.',
    fullDescription: 'We connect you with Indian delivery partners for end-to-end ERP work. Teams handle HRMS rollouts, finance modules, and reporting, with delivery tracked against agreed milestones.',
    iconName: 'Layers',
    useCases: [
      'Multi-entity HRMS and payroll consolidation',
      'Finance and procurement workflow automation',
      'Legacy data migration and custom ERP integrations'
    ],
    capabilities: [
      'Architecture planning and data design',
      'Custom module builds and API integration',
      'Post-launch maintenance and support'
    ],
    engagementApproach: 'Scoping workshop → Architecture roadmap → Partner checks → Milestone-based delivery.',
    informationRequired: [
      'Current systems and target ERP platform',
      'Modules in scope (HR, Finance, Operations)',
      'Estimated user counts and timeline'
    ],
    disclaimer: 'Partner teams and license needs are reviewed for each project.'
  },
  {
    id: 'web-applications-portals',
    category: 'it',
    title: 'Web Applications & Business Portals',
    shortDescription: 'Customer portals, client extranets, APIs, and responsive web platforms.',
    fullDescription: 'Build modern web applications with matched engineering teams. We align dedicated teams skilled in React, Next.js, and clean API design to ship reliable products.',
    iconName: 'Globe',
    useCases: [
      'Customer self-service portals and account hubs',
      'Internal dashboards and operations reporting',
      'Partner extranets with role-based access'
    ],
    capabilities: [
      'Modern frontend builds (React, Next.js, TypeScript)',
      'REST and GraphQL API services',
      'Automated testing and continuous delivery'
    ],
    engagementApproach: 'UX prototyping → Feasibility check → Sprint delivery → Handover.',
    informationRequired: [
      'Core users and main workflows',
      'Existing systems to integrate with',
      'Expected traffic and security needs'
    ],
    disclaimer: 'Security practices follow common industry standards.'
  },
  {
    id: 'custom-software-development',
    category: 'it',
    title: 'Custom Software Development',
    shortDescription: 'Software built around your workflows, business logic, and processes.',
    fullDescription: 'We align dedicated full-stack teams to build, test, and maintain custom platforms. Code ownership terms are agreed with you up front.',
    iconName: 'Code',
    useCases: [
      'Custom business logic and automation tools',
      'Legacy system modernization',
      'Cross-platform business utilities'
    ],
    capabilities: [
      'Domain-driven design and cloud-native backends',
      'Unit and integration testing',
      'Version-controlled workflows and CI/CD releases'
    ],
    engagementApproach: 'Discovery → Architecture blueprint → Dedicated team → Iterative releases.',
    informationRequired: [
      'Requirements or user stories',
      'Technology preferences and constraints',
      'Timeline and team size needs'
    ],
    disclaimer: 'Code and IP ownership terms are set in each project contract.'
  },
  {
    id: 'cloud-infrastructure-support',
    category: 'it',
    title: 'Cloud & Infrastructure Support',
    shortDescription: 'Cloud migration, container setups, systems monitoring, and ongoing maintenance.',
    fullDescription: 'We coordinate cloud migration, infrastructure as code, backup policies, and round-the-clock monitoring through experienced delivery centers.',
    iconName: 'Cloud',
    useCases: [
      'Cloud migration and multi-cloud setups (AWS, Azure, GCP)',
      'Containerization and orchestration (Docker, Kubernetes)',
      'Infrastructure monitoring and incident escalation'
    ],
    capabilities: [
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Performance tuning and auto-scaling',
      'Patch management, log reviews, and environment hardening'
    ],
    engagementApproach: 'Infrastructure audit → Migration roadmap → Staged transition → Managed support.',
    informationRequired: [
      'Current infrastructure (servers, storage, bandwidth)',
      'Target cloud provider and region',
      'Coverage window (business hours or round-the-clock)'
    ],
    disclaimer: 'Cloud licensing and hosting fees are billed by the cloud providers.'
  },
  {
    id: 'application-testing-maintenance',
    category: 'it',
    title: 'Application Testing & Maintenance',
    shortDescription: 'Automated testing, regression suites, performance checks, and app maintenance.',
    fullDescription: 'Keep software healthy with dedicated QA teams. We provide automated regression testing, load testing, security scans, and a clear bug-fix process.',
    iconName: 'CheckCircle2',
    useCases: [
      'Automated regression testing for release pipelines',
      'Load and performance testing',
      'Legacy software maintenance and fixes'
    ],
    capabilities: [
      'Test automation tools (Playwright, Selenium, Cypress)',
      'API contract validation',
      'Defect tracking, coverage reports, and root-cause analysis'
    ],
    engagementApproach: 'QA assessment → Test setup → Script writing → Ongoing checks.',
    informationRequired: [
      'Application build or repository access',
      'Known issues, test scenarios, or test plans',
      'Target browsers and devices'
    ],
    disclaimer: 'Testing coverage follows client-specified test plans and acceptance criteria.'
  },
  {
    id: 'digital-transformation',
    category: 'it',
    title: 'Digital Transformation',
    shortDescription: 'Modernize legacy operations through cloud, automation, and better data visibility.',
    fullDescription: 'Move from manual workflows to digital operations with minimal disruption. We help with technology roadmaps, partner discovery, and phased rollouts.',
    iconName: 'Cpu',
    useCases: [
      'Paper and spreadsheet workflows moved online',
      'Centralized reporting and dashboards',
      'Cross-team process integration'
    ],
    capabilities: [
      'Process mapping and gap analysis',
      'Technology evaluation and partner shortlisting',
      'Phased rollout and team documentation'
    ],
    engagementApproach: 'Current-state review → Target setup → Phased roadmap → Pilot rollout.',
    informationRequired: [
      'Transformation goals and main bottlenecks',
      'Teams and users affected',
      'Target timeline'
    ],
    disclaimer: 'Transformation work is delivered in coordination with specialist partners.'
  }
];

export const nonItServices: ServiceItem[] = [
  {
    id: 'medical-coding-billing',
    category: 'non-it',
    title: 'Medical Coding & Medical Billing',
    shortDescription: 'Revenue cycle support, ICD-10/CPT coding, charge entry, claims, and denial management.',
    fullDescription: 'We connect you with Indian healthcare operations teams. Work follows client-defined quality checks, secure remote desktops, and agreed turnaround times.',
    iconName: 'FileHeart',
    useCases: [
      'ICD-10-CM, CPT, and HCPCS chart coding',
      'Demographic entry, charge capture, and claim checks',
      'Accounts receivable follow-up and denial management'
    ],
    capabilities: [
      'Medical coders with specialty experience',
      'Multi-step quality sampling and accuracy checks',
      'Secure remote desktop access for work'
    ],
    engagementApproach: 'Chart sample review → Specialty match → Secure access setup → Ramp-up.',
    informationRequired: [
      'Medical specialty (e.g. radiology, cardiology, inpatient)',
      'Monthly chart or claim volumes',
      'EHR or billing platform and turnaround expectations'
    ],
    disclaimer: 'Healthcare privacy and compliance requirements are reviewed with each delivery facility before work begins.'
  },
  {
    id: 'healthcare-support-processes',
    category: 'non-it',
    title: 'Healthcare Support Processes',
    shortDescription: 'Prior authorization, patient intake, benefits verification, and admin coordination.',
    fullDescription: 'Lighten the admin load for clinics and healthcare networks. Dedicated specialists handle verification and authorization steps using clear checklists.',
    iconName: 'Activity',
    useCases: [
      'Prior authorization submission and insurer portal tracking',
      'Insurance eligibility and benefits verification',
      'Medical records indexing and filing'
    ],
    capabilities: [
      'Familiarity with major payer guidelines and portals',
      'Standardized checklists to reduce errors',
      'Detailed logs for full traceability'
    ],
    engagementApproach: 'Workflow review → SOP setup → Secure access → Phased handover.',
    informationRequired: [
      'Daily authorization or eligibility volume',
      'Payer mix (Medicare, Medicaid, commercial insurers)',
      'Existing procedures and escalation rules'
    ],
    disclaimer: 'Work follows client-approved guidelines and systems.'
  },
  {
    id: 'data-entry-document-processing',
    category: 'non-it',
    title: 'Data Entry & Document Processing',
    shortDescription: 'Data extraction, indexing, format conversion, form keying, and multi-step checks.',
    fullDescription: 'High-volume back-office processing for scanned or digital documents. Delivery teams use double-key entry to keep large datasets accurate.',
    iconName: 'FileSpreadsheet',
    useCases: [
      'Scanned form transcription and double-entry keying',
      'XML/JSON conversion, tagging, and catalog indexing',
      'Data cleanup, deduplication, and validation'
    ],
    capabilities: [
      'Double-entry validation for high accuracy',
      'Capacity that scales from thousands to millions of records per month',
      'Multi-format support (PDF, TIFF, JPEG, structured files)'
    ],
    engagementApproach: 'Sample batch audit → Template setup → Pilot run → Scheduled delivery.',
    informationRequired: [
      'Document format, quality, and legibility',
      'Monthly record volume and output format',
      'Data retention and deletion rules'
    ],
    disclaimer: 'Accuracy targets and sample checks are agreed during scoping.'
  },
  {
    id: 'banking-kyc-mortgage',
    category: 'non-it',
    title: 'Banking KYC & Mortgage Processing',
    shortDescription: 'Onboarding document review, KYC file checks, and mortgage package audits.',
    fullDescription: 'Support for financial institutions and mortgage originators. Trained back-office teams review document packages with privacy-first working practices.',
    iconName: 'ShieldCheck',
    useCases: [
      'KYC/AML onboarding file completeness checks',
      'Mortgage package setup, indexing, and disclosure checks',
      'Title report and insurance document review'
    ],
    capabilities: [
      'Analysts trained in financial documents',
      'Checklist-driven validation',
      'Audit-ready processing logs'
    ],
    engagementApproach: 'Checklist review → Analyst training → Secure workspace setup → Pilot launch.',
    informationRequired: [
      'Types of financial documents to review',
      'Monthly application or loan package volume',
      'Applicable regional guidelines'
    ],
    disclaimer: 'This is back-office support only. Final credit and approval decisions stay with licensed financial institutions.'
  },
  {
    id: 'mutual-fund-operations',
    category: 'non-it',
    title: 'Mutual-Fund Operations Support',
    shortDescription: 'Transaction reconciliation, statement checks, trade matching, and break investigation.',
    fullDescription: 'Operational support for asset managers and fund administrators. We align accounting-trained teams for daily reconciliation, cash checks, and reporting.',
    iconName: 'TrendingUp',
    useCases: [
      'Daily custodian and bank statement reconciliation',
      'Trade confirmation matching and discrepancy tracking',
      'Corporate action data capture and verification'
    ],
    capabilities: [
      'Operations staff with accounting backgrounds',
      'Clear exception reporting and escalation',
      'Multi-currency ledger matching'
    ],
    engagementApproach: 'Process scoping → Operating standards → Dual-run transition → Live operations.',
    informationRequired: [
      'Fund types and asset classes',
      'Reconciliation and accounting systems used',
      'Daily cut-offs and reporting schedules'
    ],
    disclaimer: 'This is operational back-office support only. Fiduciary duties remain with the client.'
  },
  {
    id: 'back-office-services',
    category: 'non-it',
    title: 'Back-Office Services',
    shortDescription: 'Accounts payable support, vendor records, e-commerce catalog updates, and routine tasks.',
    fullDescription: 'Reduce admin overhead with dedicated operational shifts. Partners provide flexible staffing aligned to US and international time zones.',
    iconName: 'Briefcase',
    useCases: [
      'Invoice matching and voucher creation',
      'E-commerce catalog updates and tagging',
      'Routine admin ticket handling'
    ],
    capabilities: [
      'Fast ramp-up of dedicated teams',
      'Coverage aligned to US business hours',
      'Ongoing quality checks and weekly reports'
    ],
    engagementApproach: 'Task list creation → Team sizing → Training → Weekly reviews.',
    informationRequired: [
      'Description of routine workflows',
      'Shift hours and weekly volumes',
      'Software and collaboration tools'
    ],
    disclaimer: 'Operational terms and staffing levels are set to your specifications.'
  }
];

export const partnershipServices: ServiceItem[] = [
  {
    id: 'vendor-discovery',
    category: 'partnership',
    title: 'Vendor Discovery & Capability Assessment',
    shortDescription: 'Screening delivery organizations on operating history, team size, and financial stability.',
    fullDescription: 'We help you identify suitable delivery partners in India. Screening uses proposed criteria, such as 3+ years of operating history, 50+ personnel, and INR 2 crore annual turnover, alongside checks on technical depth and financial stability.',
    iconName: 'Search',
    useCases: [
      'Finding specialist agencies for niche technology stacks',
      'Screening BPO operators for healthcare or finance work',
      'Evaluating Indian partners for cross-border work'
    ],
    capabilities: [
      'A clear partner review checklist',
      'Checks on infrastructure, facilities, and information security',
      'Workforce and compliance checks'
    ],
    engagementApproach: 'Requirement profiling → Market screening → Partner dossier → Introductions.',
    informationRequired: [
      'Required skills and technology stacks',
      'Desired team size and location preferences',
      'Commercial model preferences'
    ],
    disclaimer: 'Coral Swift coordinates discovery. Final selections depend on agreements between you and the partner.'
  },
  {
    id: 'staffing-alignment',
    category: 'partnership',
    title: 'Staffing Alignment & Project Allocation',
    shortDescription: 'Matching engineering teams and operations shifts to your project scope.',
    fullDescription: 'Match project milestones with partner capacity. We coordinate team structures, check skill sets, and plan allocations for steady delivery.',
    iconName: 'Users',
    useCases: [
      'Dedicated teams for multi-month ERP or portal projects',
      'Flexible operator shifts for seasonal document peaks',
      'Multi-vendor delivery coordination'
    ],
    capabilities: [
      'Skill matching and experience checks',
      'Capacity planning and ramp-up scheduling',
      'Backup and replacement planning'
    ],
    engagementApproach: 'Scope breakdown → Team definition → Capacity booking → Kickoff.',
    informationRequired: [
      'Project scope or backlog summary',
      'Required seniority and tech stack',
      'Start date and estimated duration'
    ],
    disclaimer: 'Allocation happens under formal agreements between clients and delivery organizations.'
  },
  {
    id: 'reporting-quality-assurance',
    category: 'partnership',
    title: 'Reporting & Quality Assurance',
    shortDescription: 'Milestone tracking, transparent reporting, sprint demos, and process improvement.',
    fullDescription: 'Keep cross-border work accountable. We set up clear reporting dashboards, track delivery metrics, and run structured sprint reviews.',
    iconName: 'BarChart3',
    useCases: [
      'Weekly status reporting and blocker resolution',
      'Delivery metric tracking and quality checks',
      'Continuous improvement reviews'
    ],
    capabilities: [
      'Standard reporting templates and KPIs',
      'Milestone completion checks',
      'Early warning on delivery risks'
    ],
    engagementApproach: 'Governance setup → Baseline metrics → Bi-weekly reviews → Quarterly reviews.',
    informationRequired: [
      'Delivery milestones and acceptance criteria',
      'Key metrics and delivery targets',
      'Reporting frequency and stakeholders'
    ],
    disclaimer: 'Reports reflect metrics shared by delivery partners.'
  },
  {
    id: 'commercial-engagement-support',
    category: 'partnership',
    title: 'Commercial Engagement Support',
    shortDescription: 'Clear commercial structures, milestone schedules, and sustainable partnership terms.',
    fullDescription: 'Support balanced commercial arrangements between clients and delivery partners. We provide scoping templates and milestone schedules to keep projects on track.',
    iconName: 'Handshake',
    useCases: [
      'Milestone-based fixed price or dedicated team contracts',
      'IP and confidentiality terms',
      'Cross-border payment schedules'
    ],
    capabilities: [
      'Clear pricing and margin models',
      'Balanced contract frameworks',
      'Change-order procedures'
    ],
    engagementApproach: 'Commercial alignment → Agreement review → Sign-off → Activation.',
    informationRequired: [
      'Preferred pricing model (fixed price or dedicated team)',
      'Currency and payment terms',
      'Target start date'
    ],
    disclaimer: 'Commercial support does not replace independent legal advice.'
  }
];

export const allServices = [...itServices, ...nonItServices, ...partnershipServices];
