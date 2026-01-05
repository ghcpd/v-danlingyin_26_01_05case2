import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Region } from '@/types';

export const useAppStore = defineStore('app', () => {
  const selectedRegion = ref<Region>('all');

  function setRegion(region: Region): void {
    selectedRegion.value = region;
  }

  function resetRegion(): void {
    selectedRegion.value = 'all';
  }

  return {
    selectedRegion,
    setRegion,
    resetRegion
  };
});
