import type { Metadata } from 'next';
import { ITSolutionsPage } from '@/views/ITSolutionsPage';

export const metadata: Metadata = {
  title: 'IT Solutions | Coral Swift',
  description:
    'ERP systems, custom software, web portals, cloud support, testing and maintenance delivered through qualified delivery partners.',
};

export default function Page() {
  return <ITSolutionsPage />;
}
