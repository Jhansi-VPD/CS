import type { Metadata } from 'next';
import { NonITSolutionsPage } from '@/views/NonITSolutionsPage';

export const metadata: Metadata = {
  title: 'Non-IT Solutions & Operations | Coral Swift',
  description:
    'Medical coding, revenue cycle billing, banking KYC, mortgage documentation and high-volume back-office execution.',
};

export default function Page() {
  return <NonITSolutionsPage />;
}
