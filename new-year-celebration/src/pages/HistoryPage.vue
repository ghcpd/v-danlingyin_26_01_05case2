<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <PageHeader
        title="History of New Year"
        subtitle="Journey through time to discover how New Year celebrations evolved from ancient civilizations to modern times."
      />

      <!-- Filter Tabs -->
      <div class="mt-8 mb-6">
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter timeline by era">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            role="tab"
            :aria-selected="activeTab === tab.value"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            :class="[
              activeTab === tab.value
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            ]"
          >
            {{ tab.label }}
            <span 
              class="ml-1.5 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs"
              :class="activeTab === tab.value ? 'bg-white/20' : 'bg-gray-100'"
            >
              {{ tab.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <section aria-label="Historical timeline">
        <div class="relative">
          <!-- Timeline Line -->
          <div 
            class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-red-500 to-blue-500"
            aria-hidden="true"
          ></div>

          <!-- Timeline Items -->
          <div class="space-y-6">
            <TransitionGroup
              name="timeline"
              tag="div"
              class="space-y-6"
            >
              <div
                v-for="(item, index) in filteredTimeline"
                :key="item.id"
                class="relative pl-12 md:pl-0"
                :class="index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'"
              >
                <!-- Timeline Dot -->
                <div 
                  class="absolute left-2.5 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 ring-4 ring-white"
                  :class="item.civilization === 'ancient' ? 'bg-amber-500' : 'bg-blue-500'"
                  aria-hidden="true"
                ></div>

                <!-- Content -->
                <div 
                  class="md:w-[calc(100%-2rem)]"
                  :class="index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'"
                >
                  <TimelineItem :item="item" />
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredTimeline.length === 0"
          class="text-center py-12"
        >
          <span class="text-6xl mb-4 block" aria-hidden="true">📜</span>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No timeline items found</h3>
          <p class="text-gray-600">Try selecting a different era filter.</p>
        </div>
      </section>

      <!-- Legend -->
      <aside class="mt-12 bg-white rounded-xl shadow-md p-6" aria-label="Timeline legend">
        <h3 class="text-lg font-display font-bold text-gray-900 mb-4">Understanding the Timeline</h3>
        <div class="flex flex-wrap gap-6">
          <div class="flex items-center gap-3">
            <div class="w-4 h-4 rounded-full bg-amber-500" aria-hidden="true"></div>
            <span class="text-gray-700">Ancient Civilizations (Before 500 CE)</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-4 h-4 rounded-full bg-blue-500" aria-hidden="true"></div>
            <span class="text-gray-700">Modern Era (500 CE - Present)</span>
          </div>
        </div>
        <p class="mt-4 text-sm text-gray-600">
          Click on any timeline item to expand and read more about that historical milestone.
        </p>
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { PageHeader, TimelineItem } from '@/components'
import { timelineData } from '@/data/mockData'

type TabValue = 'all' | 'ancient' | 'modern'

interface Tab {
  value: TabValue
  label: string
  count: number
}

const activeTab = ref<TabValue>('all')

const tabs = computed<Tab[]>(() => [
  { 
    value: 'all', 
    label: 'All Eras', 
    count: timelineData.length 
  },
  { 
    value: 'ancient', 
    label: 'Ancient', 
    count: timelineData.filter(item => item.civilization === 'ancient').length 
  },
  { 
    value: 'modern', 
    label: 'Modern', 
    count: timelineData.filter(item => item.civilization === 'modern').length 
  }
])

const filteredTimeline = computed(() => {
  if (activeTab.value === 'all') {
    return timelineData
  }
  return timelineData.filter(item => item.civilization === activeTab.value)
})
</script>

<style scoped>
.timeline-enter-active,
.timeline-leave-active {
  transition: all 0.3s ease;
}

.timeline-enter-from,
.timeline-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.timeline-move {
  transition: transform 0.3s ease;
}
</style>
