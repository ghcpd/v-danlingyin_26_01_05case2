import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Region, CelebrationEvent } from '@/types'
import { eventsData } from '@/data/mockData'

export const useAppStore = defineStore('app', () => {
  // State
  const selectedRegion = ref<Region>('all')
  const expandedTimelineItems = ref<Set<string>>(new Set())

  // Getters
  const filteredEvents = computed<CelebrationEvent[]>(() => {
    if (selectedRegion.value === 'all') {
      return eventsData
    }
    return eventsData.filter(event => event.region === selectedRegion.value)
  })

  const eventCount = computed<number>(() => filteredEvents.value.length)

  const regionLabels = computed<Record<Region, string>>(() => ({
    'all': 'All Regions',
    'east-asia': 'East Asia',
    'europe': 'Europe',
    'americas': 'Americas'
  }))

  // Actions
  function setSelectedRegion(region: Region): void {
    selectedRegion.value = region
  }

  function toggleTimelineItem(id: string): void {
    if (expandedTimelineItems.value.has(id)) {
      expandedTimelineItems.value.delete(id)
    } else {
      expandedTimelineItems.value.add(id)
    }
  }

  function isTimelineExpanded(id: string): boolean {
    return expandedTimelineItems.value.has(id)
  }

  function getEventById(id: string): CelebrationEvent | undefined {
    return eventsData.find(event => event.id === id)
  }

  function resetFilters(): void {
    selectedRegion.value = 'all'
  }

  return {
    // State
    selectedRegion,
    expandedTimelineItems,
    // Getters
    filteredEvents,
    eventCount,
    regionLabels,
    // Actions
    setSelectedRegion,
    toggleTimelineItem,
    isTimelineExpanded,
    getEventById,
    resetFilters
  }
})
