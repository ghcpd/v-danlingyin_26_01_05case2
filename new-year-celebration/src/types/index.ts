// Region types for filtering
export type Region = 'all' | 'east-asia' | 'europe' | 'americas'

// History timeline item
export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
  civilization: 'ancient' | 'modern'
  expanded?: boolean
}

// Tradition item
export interface Tradition {
  id: string
  title: string
  description: string
  symbolicMeaning: string
  region: Exclude<Region, 'all'>
}

// Celebration event
export interface CelebrationEvent {
  id: string
  name: string
  date: string
  location: string
  shortDescription: string
  fullDescription: string
  culturalBackground: string
  schedule: EventScheduleItem[]
  region: Exclude<Region, 'all'>
}

// Event schedule item
export interface EventScheduleItem {
  time: string
  activity: string
  description: string
}

// Highlight card for home page
export interface HighlightCard {
  id: string
  title: string
  description: string
  icon: string
  route: string
}

// Navigation item
export interface NavItem {
  name: string
  path: string
  label: string
}
