<template>
  <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
    <div class="p-6">
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <span
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
          :class="regionColorClass"
        >
          {{ regionLabel }}
        </span>
        <span class="text-sm text-gray-500">
          {{ event.date }}
        </span>
      </div>

      <h3 class="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
        {{ event.name }}
      </h3>

      <div class="flex items-center text-gray-600 mb-3">
        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span class="text-sm">{{ event.location }}</span>
      </div>

      <p class="text-gray-700 text-sm leading-relaxed mb-4">
        {{ event.shortDescription }}
      </p>

      <RouterLink
        :to="`/events/${event.id}`"
        class="inline-flex items-center text-red-600 font-medium text-sm hover:text-red-700 transition-colors"
        :aria-label="`View details for ${event.name}`"
      >
        View Details
        <svg 
          class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </RouterLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { CelebrationEvent } from '@/types'
import { getRegionColorClass, getRegionLabel } from '@/utils'

interface Props {
  event: CelebrationEvent
}

const props = defineProps<Props>()

const regionColorClass = computed(() => getRegionColorClass(props.event.region))
const regionLabel = computed(() => getRegionLabel(props.event.region))
</script>
