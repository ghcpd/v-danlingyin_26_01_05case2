import { defineStore } from 'pinia';
import type { Region } from '@/types/models';

interface FilterState {
  selectedRegion: Region;
}

export const useFilterStore = defineStore('filters', {
  state: (): FilterState => ({
    selectedRegion: 'all',
  }),
  actions: {
    setRegion(region: Region) {
      this.selectedRegion = region;
    },
  },
});
