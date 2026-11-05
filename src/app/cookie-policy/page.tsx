import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/views/CookiePolicyPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Coral Swift',
  description: 'How Coral Swift uses necessary cookies and respects data minimization on this website.',
};

export default function Page() {
  return <CookiePolicyPage />;
}
