import type { Metadata } from 'next';
import { TermsOfServicePage } from '@/views/TermsOfServicePage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Coral Swift',
  description: 'The terms governing use of the Coral Swift website and its published information.',
};

export default function Page() {
  return <TermsOfServicePage />;
}
