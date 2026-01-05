<template>
  <div class="space-y-4">
    <div v-for="item in timeline" :key="item.id" class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-aurora-600">{{ item.era }}</p>
          <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
          <p class="text-sm text-slate-600">{{ item.yearRange }}</p>
        </div>
        <button
          class="inline-flex items-center gap-2 self-start rounded-full border border-aurora-100 px-3 py-1 text-xs font-semibold text-aurora-700 transition hover:bg-aurora-50"
          @click="toggle(item.id)"
          :aria-expanded="expandedId === item.id"
        >
          <span>{{ expandedId === item.id ? 'Hide details' : 'View details' }}</span>
          <span aria-hidden="true">{{ expandedId === item.id ? '−' : '+' }}</span>
        </button>
      </div>
      <p class="mt-3 text-sm text-slate-700">{{ item.description }}</p>
      <div v-if="expandedId === item.id" class="mt-3 space-y-2 rounded-lg bg-aurora-50/60 p-3 text-sm text-slate-800">
        <p class="font-semibold text-aurora-800">Highlights</p>
        <ul class="list-disc space-y-1 pl-5">
          <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TimelineEntry } from '@/types/models';

interface Props {
  timeline: TimelineEntry[];
}

const props = defineProps<Props>();
const expandedId = ref<string | null>(null);

const toggle = (id: string) => {
  expandedId.value = expandedId.value === id ? null : id;
};
</script>
