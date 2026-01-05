export interface HistoryItem {
  id: string;
  year: string;
  title: string;
  description: string;
  era: 'ancient' | 'modern';
}

export interface Tradition {
  id: string;
  title: string;
  region: Region;
  description: string;
  symbolicMeaning: string;
}

export interface CelebrationEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  region: Region;
  culturalBackground?: string;
  schedule?: string[];
}

export type Region = 'east-asia' | 'europe' | 'americas' | 'all';

export interface RegionInfo {
  id: Region;
  name: string;
}
