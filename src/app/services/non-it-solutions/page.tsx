import type { Metadata } from 'next';
import { NonITSolutionsPage } from '@/views/NonITSolutionsPage';

export const metadata: Metadata = {
  title: 'Non-IT Solutions & Operations | Coral Swift',
  description:
    'Medical coding and billing, healthcare support, banking KYC, mortgage processing and back-office services.',
};

export default function Page() {
  return <NonITSolutionsPage />;
}
