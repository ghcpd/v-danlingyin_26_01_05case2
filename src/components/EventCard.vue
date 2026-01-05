<template>
  <article class="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-600">{{ regionLabel }}</p>
        <h3 class="mt-1 text-lg font-semibold text-slate-900">{{ name }}</h3>
        <p class="text-sm text-slate-600">{{ date }} · {{ location }}</p>
      </div>
      <RouterLink :to="detailPath" class="text-sm font-semibold text-aurora-700 underline-offset-2 hover:underline" aria-label="View event details">
        Details
      </RouterLink>
    </div>
    <p class="mt-3 text-sm text-slate-700">{{ shortDescription }}</p>
    <ul v-if="highlights?.length" class="mt-3 space-y-1 text-sm text-slate-700">
      <li v-for="item in highlights" :key="item" class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full bg-aurora-500"></span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { Region } from '@/types/models';

interface Props {
  id: string;
  name: string;
  date: string;
  location: string;
  region: Exclude<Region, 'all'>;
  shortDescription: string;
  highlights?: string[];
}

const props = defineProps<Props>();

const labels: Record<Exclude<Region, 'all'>, string> = {
  'east-asia': 'East Asia',
  europe: 'Europe',
  americas: 'Americas',
};

const regionLabel = computed(() => labels[props.region]);
const detailPath = computed(() => `/events/${props.id}`);
</script>
