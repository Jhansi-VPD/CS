import type { Metadata } from 'next';
import { IndustriesPage } from '@/views/IndustriesPage';

export const metadata: Metadata = {
  title: 'Target Industries | Coral Swift',
  description:
    'Healthcare, banking and financial services, enterprise software and business operations verticals served by Coral Swift delivery partners.',
};

export default function Page() {
  return <IndustriesPage />;
}
