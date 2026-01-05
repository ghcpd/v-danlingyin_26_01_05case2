import type { Region } from '@/types'

/**
 * Formats a date string for display
 */
export function formatDate(dateString: string): string {
  return dateString
}

/**
 * Returns a CSS class based on the region
 */
export function getRegionColorClass(region: Exclude<Region, 'all'>): string {
  const colors: Record<Exclude<Region, 'all'>, string> = {
    'east-asia': 'bg-red-100 text-red-800 border-red-200',
    'europe': 'bg-blue-100 text-blue-800 border-blue-200',
    'americas': 'bg-green-100 text-green-800 border-green-200'
  }
  return colors[region]
}

/**
 * Returns a display label for a region
 */
export function getRegionLabel(region: Region): string {
  const labels: Record<Region, string> = {
    'all': 'All Regions',
    'east-asia': 'East Asia',
    'europe': 'Europe',
    'americas': 'Americas'
  }
  return labels[region]
}

/**
 * Truncates text to a specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Generates a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Scrolls to top of page smoothly
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
