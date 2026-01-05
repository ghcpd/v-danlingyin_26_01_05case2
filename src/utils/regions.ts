import type { Region } from '@/types/models';

const labels: Record<Exclude<Region, 'all'>, string> = {
  'east-asia': 'East Asia',
  europe: 'Europe',
  americas: 'Americas',
};

export const regionLabel = (region: Exclude<Region, 'all'>): string => labels[region];
