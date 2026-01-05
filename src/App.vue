<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <NavigationBar />
    <main>
      <RouterView />
    </main>
    <footer class="bg-gray-900 text-gray-300 py-8 mt-16">
      <div class="container mx-auto px-4 text-center">
        <p class="mb-2">
          &copy; 2026 New Year Cultural Celebration. Celebrating diversity and unity.
        </p>
        <p class="text-sm text-gray-400">
          Preserving cultural heritage through education and storytelling.
        </p>
      </div>
    </footer>
  </div>
</template>
