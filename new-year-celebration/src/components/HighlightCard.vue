<template>
  <RouterLink
    :to="route"
    class="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    :aria-label="`Learn more about ${title}`"
  >
    <div class="p-6">
      <div 
        class="w-16 h-16 bg-gradient-to-br from-red-100 to-gold-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        aria-hidden="true"
      >
        <span class="text-3xl">{{ icon }}</span>
      </div>
      <h3 class="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        {{ description }}
      </p>
      <div class="mt-4 flex items-center text-red-600 font-medium text-sm group-hover:text-red-700">
        <span>Explore</span>
        <svg 
          class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title: string
  description: string
  icon: string
  route: string
}

defineProps<Props>()
</script>
