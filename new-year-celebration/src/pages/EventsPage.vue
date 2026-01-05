<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <PageHeader
        title="Celebration Events"
        subtitle="Discover New Year celebration events happening around the world and experience diverse cultural festivities."
      />

      <!-- Region Filter -->
      <div class="mt-8 mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 class="text-sm font-medium text-gray-700 mb-3">Filter by Region</h2>
            <RegionFilter type="events" />
          </div>
          <div class="text-sm text-gray-600">
            Showing <span class="font-semibold text-gray-900">{{ filteredEvents.length }}</span> events
          </div>
        </div>
      </div>

      <!-- Events Grid -->
      <section aria-label="Celebration events">
        <TransitionGroup
          name="grid"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <EventCard
            v-for="event in filteredEvents"
            :key="event.id"
            :event="event"
          />
        </TransitionGroup>
      </section>

      <!-- Empty State -->
      <div
        v-if="filteredEvents.length === 0"
        class="text-center py-16"
      >
        <span class="text-6xl mb-4 block" aria-hidden="true">🎉</span>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
        <p class="text-gray-600 mb-4">Try selecting a different region filter.</p>
        <button
          @click="resetFilter"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Show All Events
        </button>
      </div>

      <!-- Info Section -->
      <aside class="mt-12 bg-white rounded-xl shadow-md p-6">
        <h3 class="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          About These Events
        </h3>
        <p class="text-gray-700">
          The events listed here represent some of the world's most iconic New Year celebrations. 
          Each celebration reflects the unique cultural heritage and traditions of its region. 
          Click on any event to learn more about its history, cultural significance, and detailed schedule.
        </p>
        <p class="text-gray-600 text-sm mt-4 italic">
          Note: Event dates and details shown are for demonstration purposes. 
          Please check official sources for accurate scheduling information.
        </p>
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PageHeader, EventCard, RegionFilter } from '@/components'
import { useAppStore } from '@/stores'

const store = useAppStore()

const filteredEvents = computed(() => store.filteredEvents)

function resetFilter(): void {
  store.setSelectedRegion('all')
}
</script>

<style scoped>
.grid-enter-active,
.grid-leave-active {
  transition: all 0.3s ease;
}

.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.grid-move {
  transition: transform 0.3s ease;
}
</style>
