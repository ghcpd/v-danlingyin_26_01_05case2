<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { CelebrationEvent } from '@/types';

interface Props {
  event: CelebrationEvent;
}

defineProps<Props>();

const regionLabels: Record<string, string> = {
  'east-asia': 'East Asia',
  'europe': 'Europe',
  'americas': 'Americas'
};
</script>

<template>
  <RouterLink
    :to="`/events/${event.id}`"
    class="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:scale-105"
  >
    <div class="flex items-start justify-between mb-3">
      <h3 class="text-xl font-bold text-gray-900 flex-1">{{ event.name }}</h3>
      <span class="px-3 py-1 text-xs font-semibold bg-gold-100 text-gold-800 rounded-full whitespace-nowrap ml-2">
        {{ regionLabels[event.region] }}
      </span>
    </div>
    
    <div class="space-y-2 mb-4">
      <div class="flex items-center text-sm text-gray-600">
        <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ event.date }}
      </div>
      
      <div class="flex items-center text-sm text-gray-600">
        <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {{ event.location }}
      </div>
    </div>
    
    <p class="text-gray-600 line-clamp-3">{{ event.description }}</p>
    
    <div class="mt-4 text-primary-600 font-semibold text-sm flex items-center">
      View Details
      <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </RouterLink>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
