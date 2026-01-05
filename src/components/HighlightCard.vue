<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
  title: string;
  description: string;
  link: string;
  icon: string;
}

defineProps<Props>();
</script>

<template>
  <RouterLink 
    :to="link"
    class="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary-400"
  >
    <div class="flex items-start space-x-4">
      <div class="text-4xl flex-shrink-0">{{ icon }}</div>
      <div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>
  </RouterLink>
</template>
