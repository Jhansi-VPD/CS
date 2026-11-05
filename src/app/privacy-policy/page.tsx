import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/views/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Coral Swift',
  description: 'How Coral Swift handles information, data minimization and privacy on this website.',
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
