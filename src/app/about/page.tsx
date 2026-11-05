import type { Metadata } from 'next';
import { AboutPage } from '@/views/AboutPage';

export const metadata: Metadata = {
  title: 'About Us | Coral Swift - Purpose, Vision & Business Model',
  description:
    'Coral Swift bridges international project requirements with qualified Indian delivery organizations through structured sourcing, vendor due diligence and milestone governance.',
};

export default function Page() {
  return <AboutPage />;
}
