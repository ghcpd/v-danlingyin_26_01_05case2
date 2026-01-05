<template>
  <div class="flex flex-wrap gap-2" role="group" aria-label="Filter events by region">
    <button
      v-for="region in regions"
      :key="region.value"
      @click="selectRegion(region.value)"
      class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      :class="[
        selectedRegion === region.value
          ? 'bg-red-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
      :aria-pressed="selectedRegion === region.value"
    >
      {{ region.label }}
      <span 
        v-if="region.count !== undefined" 
        class="ml-1.5 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs"
        :class="selectedRegion === region.value ? 'bg-white/20' : 'bg-gray-200'"
      >
        {{ region.count }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Region } from '@/types'
import { useAppStore } from '@/stores'
import { eventsData, traditionsData } from '@/data/mockData'

interface Props {
  type?: 'events' | 'traditions'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'events'
})

const store = useAppStore()

const selectedRegion = computed(() => store.selectedRegion)

interface RegionOption {
  value: Region
  label: string
  count?: number
}

const regions = computed<RegionOption[]>(() => {
  const data = props.type === 'events' ? eventsData : traditionsData
  
  const counts: Record<Region, number> = {
    'all': data.length,
    'east-asia': data.filter(item => item.region === 'east-asia').length,
    'europe': data.filter(item => item.region === 'europe').length,
    'americas': data.filter(item => item.region === 'americas').length
  }

  return [
    { value: 'all', label: 'All Regions', count: counts['all'] },
    { value: 'east-asia', label: 'East Asia', count: counts['east-asia'] },
    { value: 'europe', label: 'Europe', count: counts['europe'] },
    { value: 'americas', label: 'Americas', count: counts['americas'] }
  ]
})

function selectRegion(region: Region): void {
  store.setSelectedRegion(region)
}
</script>
