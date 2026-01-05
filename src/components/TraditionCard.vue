<template>
  <article class="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-600">{{ regionLabel }}</p>
    <h3 class="mt-2 text-lg font-semibold text-slate-900">{{ title }}</h3>
    <p class="mt-2 text-sm text-slate-700">{{ description }}</p>
    <p class="mt-3 rounded-lg bg-aurora-50 px-3 py-2 text-sm font-semibold text-aurora-800">Meaning: {{ meaning }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Region } from '@/types/models';

interface Props {
  title: string;
  description: string;
  meaning: string;
  region: Exclude<Region, 'all'>;
}

const props = defineProps<Props>();

const labels: Record<Exclude<Region, 'all'>, string> = {
  'east-asia': 'East Asia',
  europe: 'Europe',
  americas: 'Americas',
};

const regionLabel = labels[props.region];
</script>
