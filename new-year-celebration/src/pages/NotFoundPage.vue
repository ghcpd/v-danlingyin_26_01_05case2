<template>
  <main class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="container mx-auto px-4 py-16 text-center">
      <span class="text-8xl mb-6 block" aria-hidden="true">🔍</span>
      <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-md mx-auto">
        Sorry, we couldn't find the page you're looking for. 
        It might have been moved or doesn't exist.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go Home
        </RouterLink>
        <RouterLink
          to="/events"
          class="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors"
        >
          Browse Events
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
