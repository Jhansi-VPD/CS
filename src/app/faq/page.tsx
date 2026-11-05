import type { Metadata } from 'next';
import { FAQPage } from '@/views/FAQPage';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Coral Swift',
  description:
    'Answers about Coral Swift services, partner eligibility, engagement models, governance and how to get in touch.',
};

export default function Page() {
  return <FAQPage />;
}
