<template>
  <div class="bg-white rounded-xl shadow-md p-6">
    <h3 class="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
      <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Event Schedule
    </h3>
    <div class="space-y-4">
      <div
        v-for="(item, index) in schedule"
        :key="index"
        class="flex gap-4 pb-4 last:pb-0 border-b last:border-0 border-gray-100"
      >
        <div class="flex-shrink-0">
          <span class="inline-flex items-center justify-center w-20 h-8 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
            {{ item.time }}
          </span>
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-gray-900">{{ item.activity }}</h4>
          <p class="text-sm text-gray-600 mt-0.5">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EventScheduleItem } from '@/types'

interface Props {
  schedule: EventScheduleItem[]
}

defineProps<Props>()
</script>
