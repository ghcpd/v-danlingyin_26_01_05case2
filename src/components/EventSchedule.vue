<template>
  <div class="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <h3 class="text-lg font-semibold text-slate-900">Schedule</h3>
    <ul class="space-y-2">
      <li v-for="item in schedule" :key="item.time" class="flex flex-col gap-1 rounded-lg bg-aurora-50/70 px-3 py-2 md:flex-row md:items-center md:justify-between">
        <span class="font-semibold text-aurora-800">{{ item.time }}</span>
        <span class="text-sm text-slate-800">{{ item.activity }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { EventScheduleItem } from '@/types/models';

interface Props {
  schedule: EventScheduleItem[];
}

defineProps<Props>();
</script>
