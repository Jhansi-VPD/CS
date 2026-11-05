import type { Metadata } from 'next';
import { ServicesPage } from '@/views/ServicesPage';

export const metadata: Metadata = {
  title: 'Solutions & Capabilities | Coral Swift',
  description:
    'Explore Coral Swift enterprise capabilities across IT engineering, Non-IT business operations and delivery partnership governance.',
};

export default function Page() {
  return <ServicesPage />;
}
