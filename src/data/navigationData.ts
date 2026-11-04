export interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

/**
 * Simplified 6-Item Main Navigation Structure:
 * 1. Home
 * 2. About
 * 3. Solutions
 * 4. Industries
 * 5. Partnerships
 * 6. Contact
 * + Single Prominent CTA: "Get in Touch"
 */
export const headerNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Solutions',
    href: '/services',
    children: [
      {
        title: 'Solutions Overview',
        href: '/services',
        description: 'Complete view of IT, operational, and delivery governance capabilities'
      },
      {
        title: 'IT Solutions',
        href: '/services/it-solutions',
        description: 'ERP systems, custom software, web portals, cloud & QA engineering',
        badge: 'IT'
      },
      {
        title: 'Non-IT & Operations',
        href: '/services/non-it-solutions',
        description: 'Medical coding, billing, KYC, mortgage, and back-office execution',
        badge: 'Operations'
      },
      {
        title: 'Sample Opportunities',
        href: '/project-opportunities',
        description: 'Illustrative project scopes, typical volumes, and technical requirements'
      }
    ]
  },
  {
    title: 'Industries',
    href: '/industries'
  },
  {
    title: 'Partnerships',
    href: '/partnerships',
    children: [
      {
        title: 'Partner Ecosystem',
        href: '/partnerships',
        description: 'Screening criteria, partner pathways, and collaboration models'
      },
      {
        title: 'How It Works',
        href: '/how-it-works',
        description: '6-stage client delivery lifecycle and partner evaluation workflow'
      },
      {
        title: 'Strategic M&A',
        href: '/strategic-discussions',
        description: 'Executive pathway for structural integration and bilateral NDAs'
      },
      {
        title: 'Apply as a Partner',
        href: '/partnerships#apply',
        description: 'Submit organizational expression of interest and documentation',
        badge: 'Apply'
      }
    ]
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

export const footerLinks = {
  solutions: [
    { label: 'Solutions Overview', href: '/services' },
    { label: 'IT Solutions & Engineering', href: '/services/it-solutions' },
    { label: 'Non-IT & Business Operations', href: '/services/non-it-solutions' },
    { label: 'Illustrative Opportunities', href: '/project-opportunities' },
    { label: 'Enterprise ERP Implementation', href: '/services/it-solutions#erp-implementation' },
    { label: 'Medical Coding & Billing', href: '/services/non-it-solutions#medical-coding-billing' }
  ],
  partnerships: [
    { label: 'Delivery Partnership Overview', href: '/partnerships' },
    { label: 'How It Works (6-Stage Model)', href: '/how-it-works' },
    { label: 'Strategic M&A Discussions', href: '/strategic-discussions' },
    { label: 'Proposed Screening Criteria', href: '/partnerships#criteria' },
    { label: '8-Point Submission Checklist', href: '/partnerships#checklist' },
    { label: 'Partner Application Form', href: '/partnerships#apply' }
  ],
  company: [
    { label: 'About Coral Swift', href: '/about' },
    { label: 'Target Industries', href: '/industries' },
    { label: 'Corporate Insights', href: '/insights' },
    { label: 'Frequently Asked Questions', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Schedule Introductory Call', href: '/contact?type=meeting' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' }
  ]
};
