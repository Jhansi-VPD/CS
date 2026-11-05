import type { Metadata } from 'next';
import { HowItWorksPage } from '@/views/HowItWorksPage';

export const metadata: Metadata = {
  title: 'How It Works | Coral Swift',
  description:
    'The six-stage international delivery lifecycle and the parallel partner evaluation workflow used by Coral Swift.',
};

export default function Page() {
  return <HowItWorksPage />;
}
