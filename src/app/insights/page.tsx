import type { Metadata } from 'next';
import { InsightsPage } from '@/views/InsightsPage';

export const metadata: Metadata = {
  title: 'Corporate Insights & Articles | Coral Swift',
  description:
    'Corporate insights, articles and the Coral Swift overview document for international delivery stakeholders.',
};

export default function Page() {
  return <InsightsPage />;
}
