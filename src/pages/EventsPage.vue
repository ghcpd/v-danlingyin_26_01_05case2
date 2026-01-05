<script setup lang="ts">
import { computed } from 'vue';
import EventCard from '@/components/EventCard.vue';
import RegionFilter from '@/components/RegionFilter.vue';
import { eventsData } from '@/data/events';
import { useAppStore } from '@/stores/app';

const store = useAppStore();

const filteredEvents = computed(() => {
  if (store.selectedRegion === 'all') {
    return eventsData;
  }
  return eventsData.filter(event => event.region === store.selectedRegion);
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gold-50 to-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🎉 New Year Celebration Events
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience the world's most spectacular New Year celebrations and their unique cultural traditions
        </p>
      </div>

      <!-- Filter Section -->
      <div class="max-w-7xl mx-auto mb-8 flex justify-center">
        <RegionFilter v-model="store.selectedRegion" />
      </div>

      <!-- Events Grid -->
      <div class="max-w-7xl mx-auto">
        <div v-if="filteredEvents.length === 0" class="text-center py-16">
          <p class="text-xl text-gray-600">No events found for the selected region.</p>
        </div>
        
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            v-for="event in filteredEvents"
            :key="event.id"
            :event="event"
          />
        </div>
      </div>

      <!-- Events Note -->
      <div class="max-w-7xl mx-auto mt-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          Global Celebrations, Local Traditions
        </h3>
        <p class="text-gray-700 leading-relaxed">
          These celebrations represent just a glimpse of how diverse cultures around the world welcome 
          the new year. Each event is a unique expression of cultural identity, blending ancient traditions 
          with contemporary celebrations. From intimate family gatherings to massive public spectacles, 
          these events unite millions in shared moments of joy, reflection, and hope.
        </p>
      </div>
    </div>
  </div>
</template>
