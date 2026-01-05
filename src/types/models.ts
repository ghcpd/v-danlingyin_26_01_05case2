export type Region = 'all' | 'east-asia' | 'europe' | 'americas';

export interface TimelineEntry {
  id: string;
  era: string;
  title: string;
  yearRange: string;
  description: string;
  details: string[];
}

export interface Tradition {
  id: string;
  region: Exclude<Region, 'all'>;
  title: string;
  description: string;
  meaning: string;
}

export interface EventScheduleItem {
  time: string;
  activity: string;
}

export interface CelebrationEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  region: Exclude<Region, 'all'>;
  shortDescription: string;
  background: string;
  schedule: EventScheduleItem[];
  highlights?: string[];
}
