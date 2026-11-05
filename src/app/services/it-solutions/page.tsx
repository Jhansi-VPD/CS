import type { Metadata } from 'next';
import { ITSolutionsPage } from '@/views/ITSolutionsPage';

export const metadata: Metadata = {
  title: 'IT Solutions & Engineering | Coral Swift',
  description:
    'ERP systems, custom software, web portals, cloud management and automated QA engineering delivered through qualified partner pods.',
};

export default function Page() {
  return <ITSolutionsPage />;
}
