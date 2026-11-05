import type { Metadata } from 'next';
import { ProjectOpportunitiesPage } from '@/views/ProjectOpportunitiesPage';

export const metadata: Metadata = {
  title: 'Project Opportunities | Coral Swift',
  description:
    'Illustrative project scopes, typical volumes and technical requirements across ERP, healthcare and banking engagements.',
};

export default function Page() {
  return <ProjectOpportunitiesPage />;
}
