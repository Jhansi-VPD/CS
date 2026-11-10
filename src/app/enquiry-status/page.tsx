import type { Metadata } from 'next';
import { Suspense } from 'react';
import { EnquiryStatusPage } from '@/views/EnquiryStatusPage';

export const metadata: Metadata = {
  title: 'Check Enquiry Status | Coral Swift',
  description:
    'Track the current status of an enquiry or meeting request you submitted to Coral Swift using your reference ID and status lookup token.',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <EnquiryStatusPage />
    </Suspense>
  );
}
