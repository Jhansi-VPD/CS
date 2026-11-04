import { ServiceItem } from '../types';

export const itServices: ServiceItem[] = [
  {
    id: 'erp-implementation',
    category: 'it',
    title: 'Enterprise Resource Planning (ERP)',
    shortDescription: 'Core ERP implementations, HRMS, financial accounting, and automated enterprise integrations.',
    fullDescription: 'We connect global enterprises with verified delivery partners specializing in end-to-end ERP deployment. From HRMS consolidation to multi-currency financial reporting, our model ensures milestone-driven technical execution.',
    iconName: 'Layers',
    useCases: [
      'Multi-entity HRMS and payroll consolidation',
      'Finance and procurement workflow automation',
      'Legacy database migration and custom ERP integrations'
    ],
    capabilities: [
      'Architecture planning & data schema design',
      'Custom module engineering & secure API integration',
      'Post-deployment maintenance and tier-2/3 support'
    ],
    engagementApproach: 'Scoping workshop → Architecture roadmap → Partner due diligence → Milestone sprint delivery.',
    informationRequired: [
      'Current system landscape and target ERP platform',
      'Scope of modules (HR, Finance, Operations)',
      'Estimated user counts and target timeline'
    ],
    disclaimer: 'Partner delivery teams and software licenses are verified on a per-project basis.'
  },
  {
    id: 'web-applications-portals',
    category: 'it',
    title: 'Web Applications & Business Portals',
    shortDescription: 'High-performance customer portals, client extranets, API architectures, and responsive web platforms.',
    fullDescription: 'Deploy modern, scalable web applications with vetted engineering teams. We structure dedicated agile pods proficient in React, Next.js, and secure microservices to deliver reliable digital experiences.',
    iconName: 'Globe',
    useCases: [
      'Customer self-service portals and account hubs',
      'Internal executive dashboards and operations reporting',
      'Partner extranets with role-based document access'
    ],
    capabilities: [
      'Modern frontend architecture (React, Next.js, TypeScript)',
      'Secure REST & GraphQL API microservices',
      'Automated testing suites and continuous delivery pipelines'
    ],
    engagementApproach: 'Interactive UX prototyping → Technical feasibility audit → Sprint delivery → Handover.',
    informationRequired: [
      'Core user personas and primary workflows',
      'Integration points with existing APIs',
      'User concurrency and security parameters'
    ],
    disclaimer: 'Architecture recommendations adhere to industry standard security frameworks.'
  },
  {
    id: 'custom-software-development',
    category: 'it',
    title: 'Custom Software Development',
    shortDescription: 'Tailored software solutions built to match proprietary workflows, specialized algorithms, and business logic.',
    fullDescription: 'Custom engineering designed for enterprise competitive advantage. We align dedicated full-stack development pods to build, test, and maintain proprietary platforms under transparent code ownership.',
    iconName: 'Code',
    useCases: [
      'Proprietary business logic and automation engines',
      'Monolith-to-microservices refactoring',
      'Cross-platform enterprise utilities'
    ],
    capabilities: [
      'Clean domain-driven design and cloud-native backends',
      'Comprehensive unit and integration test coverage',
      'Version-controlled Git workflows and CI/CD deployment'
    ],
    engagementApproach: 'Discovery → Architecture blueprint → Dedicated pod allocation → Iterative sprint releases.',
    informationRequired: [
      'Functional specifications or user stories',
      'Technology preferences and infrastructure constraints',
      'Timeline milestones and team composition requirements'
    ],
    disclaimer: 'Delivery pods adhere to strict client IP ownership and confidentiality agreements.'
  },
  {
    id: 'cloud-infrastructure-support',
    category: 'it',
    title: 'Cloud & Infrastructure Support',
    shortDescription: 'Scalable cloud migration, container orchestration, systems monitoring, and SLA-backed maintenance.',
    fullDescription: 'Reliable cloud systems engineering delivered through certified delivery centers. We coordinate migration, infrastructure as code, automated backup policies, and proactive 24/7 reliability monitoring.',
    iconName: 'Cloud',
    useCases: [
      'Cloud migration and multi-cloud configurations (AWS, Azure, GCP)',
      'Containerization and orchestration (Docker, Kubernetes)',
      '24/7 infrastructure monitoring and incident escalation'
    ],
    capabilities: [
      'Infrastructure as Code (Terraform, CloudFormation)',
      'System performance tuning and auto-scaling setups',
      'Patch management, log auditing, and environment hardening'
    ],
    engagementApproach: 'Infrastructure audit → Migration roadmap → Staged workload transition → SLA-governed support.',
    informationRequired: [
      'Existing infrastructure footprint (servers, storage, bandwidth)',
      'Target cloud provider and geographical region requirements',
      'Coverage window (business hours vs. 24/7/365)'
    ],
    disclaimer: 'Cloud licensing and hosting fees are billed directly by respective cloud providers.'
  },
  {
    id: 'application-testing-maintenance',
    category: 'it',
    title: 'Application Testing & Maintenance',
    shortDescription: 'Automated QA testing, regression suites, performance benchmarking, and application lifecycle support.',
    fullDescription: 'Ensure software resilience with dedicated quality assurance pods. We provide automated end-to-end regression testing, load testing, security vulnerability scans, and bug-fix SLAs.',
    iconName: 'CheckCircle2',
    useCases: [
      'Automated regression testing for CI/CD pipelines',
      'Load, stress, and throughput performance benchmarking',
      'Legacy software maintenance and SLA-driven remediation'
    ],
    capabilities: [
      'Test automation tools (Playwright, Selenium, Cypress)',
      'API contract validation and postman test collections',
      'Defect tracking, test coverage metrics, and root-cause analysis'
    ],
    engagementApproach: 'QA strategy assessment → Test environment setup → Script authoring → Continuous audit.',
    informationRequired: [
      'Application build URL or repository access overview',
      'Known defects, test scenarios, or test plan documents',
      'Target browser and device matrix'
    ],
    disclaimer: 'Testing coverage adheres to client-specified test matrices and acceptance criteria.'
  },
  {
    id: 'digital-transformation',
    category: 'it',
    title: 'Digital Transformation',
    shortDescription: 'Modernization of legacy business operations through cloud integration, automated workflows, and data visibility.',
    fullDescription: 'Transition from legacy workflows to modern digital operations with minimal disruption. We facilitate strategic technology roadmaps, partner discovery, and disciplined change execution.',
    iconName: 'Cpu',
    useCases: [
      'Paper-based and spreadsheet workflow digitalization',
      'Centralized operational reporting and real-time BI dashboards',
      'Cross-departmental process integration'
    ],
    capabilities: [
      'Process mapping and gap identification',
      'Technology stack evaluation and partner shortlisting',
      'Phased rollout management and team documentation'
    ],
    engagementApproach: 'Current-state assessment → Future architecture → Phased roadmap → Partner pilot rollout.',
    informationRequired: [
      'Strategic transformation goals and primary bottlenecks',
      'Departments and user personas affected',
      'Target implementation timeline'
    ],
    disclaimer: 'Digital transformation consulting is conducted in coordination with specialized delivery partners.'
  }
];

export const nonItServices: ServiceItem[] = [
  {
    id: 'medical-coding-billing',
    category: 'non-it',
    title: 'Medical Coding & Medical Billing',
    shortDescription: 'Revenue cycle support, ICD-10/CPT coding, charge entry, claims submission, and denial management.',
    fullDescription: 'Connect with qualified healthcare operational centers in India. Teams operate under client-defined quality audits, secure remote desktop protocols, and disciplined turnaround standards.',
    iconName: 'FileHeart',
    useCases: [
      'ICD-10-CM, CPT, and HCPCS chart coding',
      'Demographic entry, charge capture, and claim scrub checks',
      'Accounts receivable follow-up and denial management'
    ],
    capabilities: [
      'Certified medical coder pools with specialty expertise',
      'Multi-tier quality sampling with 95%+ accuracy benchmarks',
      'Secure remote desktop (VDI) operational protocols'
    ],
    engagementApproach: 'Chart sample review → Specialty alignment → Secure access setup → Production ramp-up.',
    informationRequired: [
      'Medical specialty (e.g. radiology, cardiology, inpatient)',
      'Monthly chart or claim volumes',
      'EHR/Billing platform used and turnaround SLAs'
    ],
    disclaimer: 'Regulatory compliance (such as HIPAA) is verified with individual delivery facilities prior to engagement.'
  },
  {
    id: 'healthcare-support-processes',
    category: 'non-it',
    title: 'Healthcare Support Processes',
    shortDescription: 'Prior authorization, patient intake documentation, benefits verification, and administrative coordination.',
    fullDescription: 'Reduce administrative overhead for clinics and healthcare networks. Dedicated specialists manage time-intensive verification and authorization steps following standardized checklists.',
    iconName: 'Activity',
    useCases: [
      'Prior authorization submission and insurer portal tracking',
      'Patient insurance eligibility and benefits verification',
      'Medical records electronic indexing and filing'
    ],
    capabilities: [
      'Familiarity with major payer guidelines and portals',
      'Standardized checklists minimizing submission errors',
      'Detailed interaction logs with full traceability'
    ],
    engagementApproach: 'Workflow documentation → SOP standardization → Security verification → Phased handover.',
    informationRequired: [
      'Daily prior authorization or eligibility volume',
      'Payer mix (Medicare, Medicaid, commercial insurers)',
      'Standard operating procedures and escalation rules'
    ],
    disclaimer: 'Processes are performed strictly under client-authorized guidelines and systems.'
  },
  {
    id: 'data-entry-document-processing',
    category: 'non-it',
    title: 'Data Entry & Document Processing',
    shortDescription: 'High-speed data extraction, indexing, XML/OCR conversion, form keying, and multi-tier verification.',
    fullDescription: 'High-volume back-office processing for international companies managing scanned or digital documents. Delivery centers apply double-key verification to ensure high precision on large datasets.',
    iconName: 'FileSpreadsheet',
    useCases: [
      'Scanned form transcription and double-entry keying',
      'XML/JSON conversion, metadata tagging, and catalog indexing',
      'Database deduplication, cleansing, and validation'
    ],
    capabilities: [
      'Double-entry validation algorithms with 99%+ accuracy targets',
      'Scalable capacity from thousands to millions of monthly records',
      'Multi-format support (PDF, TIFF, JPEG, structured schemas)'
    ],
    engagementApproach: 'Sample batch audit → Template creation → Pilot testing → Scheduled production delivery.',
    informationRequired: [
      'Document format, resolution, and legibility status',
      'Estimated monthly record volume and output schema',
      'Data retention and purging requirements'
    ],
    disclaimer: 'Accuracy SLAs and sample testing criteria are agreed upon during formal scoping.'
  },
  {
    id: 'banking-kyc-mortgage',
    category: 'non-it',
    title: 'Banking KYC & Mortgage Processing',
    shortDescription: 'Customer onboarding documentation review, KYC file validation, and mortgage loan package auditing.',
    fullDescription: 'Assist financial institutions and mortgage originators with structured document verification. Specialized back-office teams audit credential packages under strict confidentiality and clean-desk policies.',
    iconName: 'ShieldCheck',
    useCases: [
      'KYC/AML customer onboarding file completeness checks',
      'Mortgage loan package setup, indexing, and disclosure verification',
      'Title report and insurance document review'
    ],
    capabilities: [
      'Trained analysts in financial documentation taxonomies',
      'Checklist-driven validation minimizing defect rates',
      'Audit-ready processing logs with full traceability'
    ],
    engagementApproach: 'Checklist review → Analyst training on client SOPs → Secure VDI/VPN setup → Pilot launch.',
    informationRequired: [
      'Types of financial documents to be verified',
      'Expected monthly application or loan package volume',
      'Applicable jurisdictional guidelines'
    ],
    disclaimer: 'Services provide back-office operational support only. Final credit or approval decisions remain exclusively with licensed financial institutions.'
  },
  {
    id: 'mutual-fund-operations',
    category: 'non-it',
    title: 'Mutual-Fund Operations Support',
    shortDescription: 'Transaction reconciliation, custodian statement audits, trade confirmation matching, and break investigation.',
    fullDescription: 'Operational support for asset managers and fund administrators. We align specialized accounting teams to handle daily trade data reconciliation, cash balance checks, and reporting workflows.',
    iconName: 'TrendingUp',
    useCases: [
      'Daily custodian and bank statement reconciliation',
      'Trade confirmation matching and discrepancy tracking',
      'Corporate action data capture and verification'
    ],
    capabilities: [
      'Financial operations personnel with accounting backgrounds',
      'Standardized exception reporting and escalation routines',
      'Multi-currency ledger matching workflows'
    ],
    engagementApproach: 'Process scoping → Operational SLA definition → Dual-run transition → Live operations.',
    informationRequired: [
      'Types of funds and asset classes supported',
      'Reconciliation platforms and accounting systems used',
      'Daily cut-off times and reporting schedules'
    ],
    disclaimer: 'Service scope is strictly operational back-office support. Fiduciary duties remain solely with the client.'
  },
  {
    id: 'back-office-services',
    category: 'non-it',
    title: 'Enterprise Back-Office Services',
    shortDescription: 'Accounts payable voucher creation, vendor record maintenance, e-commerce catalog curation, and routine operations.',
    fullDescription: 'Streamline administrative overhead with dedicated operational shifts. Our partner ecosystem delivers flexible staffing aligned to US and international time zones.',
    iconName: 'Briefcase',
    useCases: [
      'Accounts payable invoice matching and voucher creation',
      'E-commerce product catalog updating and tagging',
      'Routine administrative ticket classification'
    ],
    capabilities: [
      'Rapid ramp-up of dedicated operational teams',
      'Flexible coverage aligned to US business hours',
      'Continuous quality monitoring and weekly KPI reports'
    ],
    engagementApproach: 'Task catalog creation → Team sizing and scheduling → SOP training → Weekly review.',
    informationRequired: [
      'Description of routine administrative workflows',
      'Target shift hours and weekly volume expectations',
      'Software access and collaboration tools'
    ],
    disclaimer: 'Operational terms and staffing levels are customized to client specifications.'
  }
];

export const partnershipServices: ServiceItem[] = [
  {
    id: 'vendor-discovery',
    category: 'partnership',
    title: 'Vendor Discovery & Due Diligence',
    shortDescription: 'Screening delivery organizations across infrastructure, workforce stability, and audited track records.',
    fullDescription: 'We help international enterprises identify verified delivery partners in India. Rather than relying on unverified claims, we evaluate operational maturity, audited financial standing, and technical depth.',
    iconName: 'Search',
    useCases: [
      'Identifying specialized development agencies for niche stacks',
      'Vetting BPO operators for healthcare or financial workflows',
      'Evaluating Indian delivery partners for cross-border collaboration'
    ],
    capabilities: [
      'Standardized 8-point partner submission evaluation',
      'Infrastructure, facility, and information security reviews',
      'Workforce and statutory compliance verification'
    ],
    engagementApproach: 'Requirement profiling → Market screening → Due diligence dossier → Introductions.',
    informationRequired: [
      'Required domain skills and technology stacks',
      'Desired team scale and geographical preferences',
      'Commercial model parameters'
    ],
    disclaimer: 'Coral Swift provides discovery coordination. Final selections are subject to mutual commercial agreements.'
  },
  {
    id: 'staffing-alignment',
    category: 'partnership',
    title: 'Staffing Alignment & Pod Allocation',
    shortDescription: 'Aligning specialized engineering pods and operational shifts with validated international project scopes.',
    fullDescription: 'Match project milestones with delivery partner capacity. We coordinate team structures, verify skill matrices, and structure allocations to ensure predictable execution.',
    iconName: 'Users',
    useCases: [
      'Dedicated agile pods for multi-month ERP or portal projects',
      'Scalable operator shifts for seasonal document peaks',
      'Multi-vendor delivery coordination'
    ],
    capabilities: [
      'Skill matrix matching and candidate experience verification',
      'Capacity planning and ramp-up scheduling',
      'Replacement and backup resource planning'
    ],
    engagementApproach: 'Scope decomposition → Team composition specification → Capacity locking → Kickoff.',
    informationRequired: [
      'Project statement of work (SOW) or backlog summary',
      'Required seniority and tech stack familiarity',
      'Project start date and estimated duration'
    ],
    disclaimer: 'Project allocation is executed under formal agreements between clients and delivery organizations.'
  },
  {
    id: 'reporting-quality-assurance',
    category: 'partnership',
    title: 'Reporting & Operational Governance',
    shortDescription: 'Milestone verification, transparent SLA monitoring, sprint demos, and continuous process optimization.',
    fullDescription: 'Maintain accountability across cross-border engagements. We establish transparent governance dashboards, monitor SLA adherence, and facilitate structured sprint reviews.',
    iconName: 'BarChart3',
    useCases: [
      'Weekly cross-border status reporting and blocker resolution',
      'SLA metric tracking and independent quality audits',
      'Continuous improvement reviews'
    ],
    capabilities: [
      'Standardized KPI and metrics reporting templates',
      'Objective milestone completion verification',
      'Early-warning delivery detection and risk mitigation'
    ],
    engagementApproach: 'Governance setup → Metric baseline agreement → Bi-weekly reviews → Quarterly reviews.',
    informationRequired: [
      'Delivery milestones and acceptance criteria',
      'Key performance indicators (KPIs) and SLA targets',
      'Reporting frequency and stakeholder contacts'
    ],
    disclaimer: 'Governance reporting reflects verified metrics provided by delivery partners.'
  },
  {
    id: 'commercial-engagement-support',
    category: 'partnership',
    title: 'Commercial Engagement Support',
    shortDescription: 'Transparent commercial structuring, milestone-based schedules, risk mitigation, and sustainable partnership terms.',
    fullDescription: 'Facilitate balanced commercial arrangements between international clients and delivery organizations. We provide commercial scoping templates and milestone schedules to prevent scope creep.',
    iconName: 'Handshake',
    useCases: [
      'Milestone-based fixed price or hybrid dedicated team contracts',
      'Intellectual property protection and confidentiality terms',
      'Cross-border payment schedule structuring'
    ],
    capabilities: [
      'Transparent pricing and margin models',
      'Balanced risk-sharing contract frameworks',
      'Change-order management procedures'
    ],
    engagementApproach: 'Commercial parameters alignment → Agreement draft review → Sign-off → Activation.',
    informationRequired: [
      'Preferred pricing model (Fixed-price vs. Dedicated Pod)',
      'Currency preferences and payment terms',
      'Target commercial start date'
    ],
    disclaimer: 'Commercial support does not substitute for independent legal counsel.'
  }
];

export const allServices = [...itServices, ...nonItServices, ...partnershipServices];
