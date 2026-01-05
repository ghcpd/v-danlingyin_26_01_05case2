<script setup lang="ts">
import type { Region } from '@/types';
import { regions } from '@/data/regions';

interface Props {
  modelValue: Region;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:modelValue': [value: Region];
}>();

const handleChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value as Region);
};
</script>

<template>
  <div class="inline-block">
    <label for="region-filter" class="block text-sm font-medium text-gray-700 mb-2">
      Filter by Region
    </label>
    <select
      id="region-filter"
      :value="modelValue"
      @change="handleChange"
      class="block w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
    >
      <option
        v-for="region in regions"
        :key="region.id"
        :value="region.id"
      >
        {{ region.name }}
      </option>
    </select>
  </div>
</template>
