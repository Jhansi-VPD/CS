export type SocialPlatformId = 'linkedin' | 'facebook' | 'x' | 'instagram';

export interface SocialLinkConfig {
  id: SocialPlatformId;
  name: string;
  url: string;
  accessibleLabel: string;
  order: number;
}

/**
 * Placeholder profile URLs — NOT verified official Coral Swift accounts.
 * When the real profiles go live, update only the `url` values here;
 * the footer, SocialMediaLinks component, icons and styling need no changes.
 */
export const SOCIAL_LINKS: SocialLinkConfig[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/coralswift/',
    accessibleLabel: 'Coral Swift on LinkedIn (opens in a new tab)',
    order: 1,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/coralswift/',
    accessibleLabel: 'Coral Swift on Facebook (opens in a new tab)',
    order: 2,
  },
  {
    id: 'x',
    name: 'X (formerly Twitter)',
    url: 'https://x.com/coralswift',
    accessibleLabel: 'Coral Swift on X (opens in a new tab)',
    order: 3,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/coralswift/',
    accessibleLabel: 'Coral Swift on Instagram (opens in a new tab)',
    order: 4,
  },
];
