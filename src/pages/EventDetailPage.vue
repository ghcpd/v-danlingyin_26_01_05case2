<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { eventsData } from '@/data/events';

const route = useRoute();

const event = computed(() => {
  const id = route.params.id as string;
  return eventsData.find(e => e.id === id);
});

const regionLabels: Record<string, string> = {
  'east-asia': 'East Asia',
  'europe': 'Europe',
  'americas': 'Americas'
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gold-50">
    <div v-if="!event" class="container mx-auto px-4 py-12">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Event Not Found</h1>
        <p class="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
        <RouterLink
          to="/events"
          class="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
        >
          Back to Events
        </RouterLink>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 py-12">
      <!-- Back Button -->
      <div class="max-w-5xl mx-auto mb-6">
        <RouterLink
          to="/events"
          class="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
        >
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </RouterLink>
      </div>

      <!-- Event Header -->
      <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 px-8 py-12 text-white">
          <div class="flex items-start justify-between mb-4">
            <h1 class="text-4xl font-bold flex-1">{{ event.name }}</h1>
            <span class="px-4 py-2 bg-white text-primary-800 font-semibold rounded-full text-sm whitespace-nowrap ml-4">
              {{ regionLabels[event.region] }}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-6 text-primary-100">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ event.date }}
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ event.location }}
            </div>
          </div>
        </div>

        <!-- Event Description -->
        <div class="px-8 py-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ event.description }}
          </p>
        </div>

        <!-- Cultural Background -->
        <div v-if="event.culturalBackground" class="px-8 py-8 bg-gold-50">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Cultural Background</h2>
          <p class="text-gray-700 leading-relaxed">
            {{ event.culturalBackground }}
          </p>
        </div>

        <!-- Event Schedule -->
        <div v-if="event.schedule && event.schedule.length > 0" class="px-8 py-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h2>
          <div class="space-y-4">
            <div
              v-for="(item, index) in event.schedule"
              :key="index"
              class="flex items-start bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
            >
              <div class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                {{ index + 1 }}
              </div>
              <p class="text-gray-700 flex-1">{{ item }}</p>
            </div>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="px-8 py-6 bg-gradient-to-r from-gold-100 to-gold-200 flex justify-between items-center">
          <p class="text-gray-700 font-medium">
            Interested in more cultural celebrations?
          </p>
          <RouterLink
            to="/events"
            class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Events
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
