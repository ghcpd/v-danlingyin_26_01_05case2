<script setup lang="ts">
import { ref, computed } from 'vue';
import TimelineItem from '@/components/TimelineItem.vue';
import { historyData } from '@/data/history';

const expandedItems = ref<Set<string>>(new Set());

const toggleItem = (id: string): void => {
  if (expandedItems.value.has(id)) {
    expandedItems.value.delete(id);
  } else {
    expandedItems.value.add(id);
  }
};

const ancientItems = computed(() => historyData.filter(item => item.era === 'ancient'));
const modernItems = computed(() => historyData.filter(item => item.era === 'modern'));
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gold-50 to-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          📜 History of New Year Celebrations
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Trace the evolution of New Year celebrations from ancient civilizations to modern calendar systems
        </p>
      </div>

      <!-- Ancient Civilizations Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-primary-800 mb-2">
            Ancient Civilizations
          </h2>
          <p class="text-gray-600">
            Early societies marked the new year based on agricultural cycles and astronomical observations
          </p>
        </div>
        
        <div class="space-y-0">
          <TimelineItem
            v-for="item in ancientItems"
            :key="item.id"
            :item="item"
            :is-expanded="expandedItems.has(item.id)"
            @toggle="toggleItem(item.id)"
          />
        </div>
      </div>

      <!-- Modern Calendar Systems Section -->
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-blue-800 mb-2">
            Modern Calendar Systems
          </h2>
          <p class="text-gray-600">
            The development and adoption of standardized calendars across the world
          </p>
        </div>
        
        <div class="space-y-0">
          <TimelineItem
            v-for="item in modernItems"
            :key="item.id"
            :item="item"
            :is-expanded="expandedItems.has(item.id)"
            @toggle="toggleItem(item.id)"
          />
        </div>
      </div>

      <!-- Historical Note -->
      <div class="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-gold-100 to-gold-200 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          A Living Tradition
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Throughout history, New Year celebrations have evolved while maintaining their core purpose: 
          marking the passage of time and celebrating renewal. Today's global celebrations blend ancient 
          traditions with modern practices, creating a rich tapestry of cultural expression that honors 
          the past while embracing the future.
        </p>
      </div>
    </div>
  </div>
</template>
