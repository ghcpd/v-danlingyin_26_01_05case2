<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <PageHeader
        title="New Year Traditions"
        subtitle="Explore the diverse customs and rituals that mark the transition to a new year across different cultures and regions."
      />

      <!-- Region Filter -->
      <div class="mt-8 mb-6">
        <h2 class="text-sm font-medium text-gray-700 mb-3">Filter by Region</h2>
        <RegionFilter type="traditions" />
      </div>

      <!-- Traditions by Region -->
      <div class="space-y-12">
        <TransitionGroup name="fade">
          <section
            v-for="region in displayedRegions"
            :key="region.id"
            :aria-labelledby="`region-${region.id}`"
          >
            <div class="flex items-center gap-3 mb-6">
              <span class="text-3xl" aria-hidden="true">{{ region.icon }}</span>
              <h2 :id="`region-${region.id}`" class="text-2xl font-display font-bold text-gray-900">
                {{ region.label }}
              </h2>
              <span class="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                {{ region.traditions.length }} traditions
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TraditionCard
                v-for="tradition in region.traditions"
                :key="tradition.id"
                :tradition="tradition"
              />
            </div>
          </section>
        </TransitionGroup>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredTraditions.length === 0"
        class="text-center py-16"
      >
        <span class="text-6xl mb-4 block" aria-hidden="true">🎋</span>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No traditions found</h3>
        <p class="text-gray-600 mb-4">Try selecting a different region filter.</p>
        <button
          @click="resetFilter"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Show All Traditions
        </button>
      </div>

      <!-- Cultural Note -->
      <aside class="mt-12 bg-gradient-to-r from-red-50 to-gold-50 rounded-xl p-6 border border-red-200">
        <div class="flex items-start gap-4">
          <span class="text-3xl" aria-hidden="true">💡</span>
          <div>
            <h3 class="text-lg font-display font-bold text-gray-900 mb-2">Cultural Note</h3>
            <p class="text-gray-700">
              While we've grouped traditions by broad geographical regions, it's important to recognize 
              that cultural practices vary significantly within regions and often overlap across boundaries. 
              Many traditions have evolved over centuries, incorporating influences from migration, trade, 
              and cultural exchange. The symbolic meanings presented here reflect common interpretations, 
              though variations exist among different communities.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PageHeader, TraditionCard, RegionFilter } from '@/components'
import { useAppStore } from '@/stores'
import { traditionsData } from '@/data/mockData'
import type { Tradition, Region } from '@/types'

interface RegionGroup {
  id: Exclude<Region, 'all'>
  label: string
  icon: string
  traditions: Tradition[]
}

const store = useAppStore()

const filteredTraditions = computed(() => {
  if (store.selectedRegion === 'all') {
    return traditionsData
  }
  return traditionsData.filter(t => t.region === store.selectedRegion)
})

const displayedRegions = computed<RegionGroup[]>(() => {
  const regions: RegionGroup[] = [
    { 
      id: 'east-asia', 
      label: 'East Asia', 
      icon: '🏮',
      traditions: traditionsData.filter(t => t.region === 'east-asia')
    },
    { 
      id: 'europe', 
      label: 'Europe', 
      icon: '🏰',
      traditions: traditionsData.filter(t => t.region === 'europe')
    },
    { 
      id: 'americas', 
      label: 'Americas', 
      icon: '🗽',
      traditions: traditionsData.filter(t => t.region === 'americas')
    }
  ]

  if (store.selectedRegion === 'all') {
    return regions.filter(r => r.traditions.length > 0)
  }

  return regions.filter(r => r.id === store.selectedRegion && r.traditions.length > 0)
})

function resetFilter(): void {
  store.setSelectedRegion('all')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
