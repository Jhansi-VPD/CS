import type { Metadata } from 'next';
import { PartnershipsPage } from '@/views/PartnershipsPage';

export const metadata: Metadata = {
  title: 'Delivery Partnerships & Qualification | Coral Swift',
  description:
    'Partner screening criteria, collaboration pathways and the expression-of-interest process for qualified delivery organizations.',
};

export default function Page() {
  return <PartnershipsPage />;
}
