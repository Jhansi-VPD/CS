import type { Metadata } from 'next';
import { StrategicDiscussionsPage } from '@/views/StrategicDiscussionsPage';

export const metadata: Metadata = {
  title: 'Strategic Discussions | Coral Swift',
  description:
    'Confidential merger and integration discussions with Coral Swift, subject to due diligence.',
};

export default function Page() {
  return <StrategicDiscussionsPage />;
}
