import type { Metadata } from 'next';
import { HomePage } from '@/views/HomePage';

export const metadata: Metadata = {
  title: 'Coral Swift | Connecting Global Opportunities with Delivery Excellence',
  description:
    'Coral Swift is a US-oriented IT and Non-IT project solutions and partnership platform connecting international project requirements with qualified delivery organizations.',
};

export default function Page() {
  return <HomePage />;
}
