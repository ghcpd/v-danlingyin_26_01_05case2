<script setup lang="ts">
import type { HistoryItem } from '@/types';

interface Props {
  item: HistoryItem;
  isExpanded: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  toggle: [];
}>();
</script>

<template>
  <div class="relative pl-8 pb-8 border-l-4 border-gold-400">
    <div class="absolute -left-3 top-0 w-6 h-6 bg-gold-500 rounded-full border-4 border-white"></div>
    
    <button
      @click="emit('toggle')"
      class="w-full text-left bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      :aria-expanded="isExpanded"
    >
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="text-gold-600 font-bold text-sm mb-2">{{ item.year }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
          <span
            class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            :class="item.era === 'ancient' ? 'bg-primary-100 text-primary-800' : 'bg-blue-100 text-blue-800'"
          >
            {{ item.era === 'ancient' ? 'Ancient Civilization' : 'Modern Calendar' }}
          </span>
        </div>
        <svg
          class="w-6 h-6 text-gray-400 transition-transform"
          :class="{ 'rotate-180': isExpanded }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <div
        v-if="isExpanded"
        class="mt-4 pt-4 border-t border-gray-200 text-gray-700"
      >
        {{ item.description }}
      </div>
    </button>
  </div>
</template>
