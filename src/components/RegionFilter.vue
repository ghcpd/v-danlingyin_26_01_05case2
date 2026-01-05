<template>
  <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Filter events by region">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="rounded-full border px-3 py-1 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-500"
      :class="selectedRegion === option.value ? 'border-aurora-500 bg-aurora-50 text-aurora-800' : 'border-slate-200 bg-white text-slate-700 hover:border-aurora-200'"
      @click="update(option.value)">
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFilterStore } from '@/stores/filters';
import type { Region } from '@/types/models';

const options: { label: string; value: Region }[] = [
  { label: 'All regions', value: 'all' },
  { label: 'East Asia', value: 'east-asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Americas', value: 'americas' },
];

const filterStore = useFilterStore();
const { selectedRegion } = storeToRefs(filterStore);

const update = (region: Region) => {
  filterStore.setRegion(region);
};
</script>
