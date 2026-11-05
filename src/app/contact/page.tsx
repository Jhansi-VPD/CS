import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ContactPage } from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact & Business Enquiries | Coral Swift',
  description:
    'Submit a project requirement, request a partner evaluation, explore strategic discussions or schedule an introductory meeting with Coral Swift.',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}
