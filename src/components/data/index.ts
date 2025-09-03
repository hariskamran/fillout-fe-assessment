import { Page } from '@/types';

const PAGES: Page[] = [
  {
    name: 'Info',
    slug: 'info',
    icon: 'info',
  },
  {
    name: 'Details',
    slug: 'details',
    icon: 'document',
  },
  {
    name: 'Other',
    slug: 'other',
    icon: 'document',
  },
  {
    name: 'Ending',
    slug: 'ending',
    icon: 'check',
  },
];

const PAGES_SLUGS: string[] = PAGES.map(p => p.slug);

const PAGES_BY_SLUG: Record<string, Page> = Object.fromEntries(
  PAGES.map(p => [p.slug, p] as const),
);

export { PAGES, PAGES_SLUGS, PAGES_BY_SLUG };
