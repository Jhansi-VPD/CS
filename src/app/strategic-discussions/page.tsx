import type { Metadata } from 'next';
import { StrategicDiscussionsPage } from '@/views/StrategicDiscussionsPage';

export const metadata: Metadata = {
  title: 'Strategic Discussions & M&A | Coral Swift',
  description:
    'The executive pathway for structural integration, bilateral agreements and strategic partnership discussions.',
};

export default function Page() {
  return <StrategicDiscussionsPage />;
}
