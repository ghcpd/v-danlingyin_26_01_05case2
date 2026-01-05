<script setup lang="ts">
import type { Tradition } from '@/types';

interface Props {
  tradition: Tradition;
}

defineProps<Props>();

const regionLabels: Record<string, string> = {
  'east-asia': 'East Asia',
  'europe': 'Europe',
  'americas': 'Americas'
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
    <div class="flex items-start justify-between mb-3">
      <h3 class="text-xl font-bold text-gray-900">{{ tradition.title }}</h3>
      <span class="px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-800 rounded-full whitespace-nowrap ml-2">
        {{ regionLabels[tradition.region] }}
      </span>
    </div>
    
    <p class="text-gray-700 mb-4">{{ tradition.description }}</p>
    
    <div class="pt-4 border-t border-gray-200">
      <h4 class="text-sm font-semibold text-gold-700 mb-2">Symbolic Meaning</h4>
      <p class="text-gray-600 text-sm">{{ tradition.symbolicMeaning }}</p>
    </div>
  </div>
</template>
