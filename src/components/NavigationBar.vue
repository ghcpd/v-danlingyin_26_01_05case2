<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'History', path: '/history' },
  { name: 'Traditions', path: '/traditions' },
  { name: 'Events', path: '/events' },
  { name: 'About', path: '/about' }
];

const isActive = (path: string): boolean => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};
</script>

<template>
  <nav class="bg-primary-700 text-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center space-x-3">
          <span class="text-2xl">🎊</span>
          <span class="text-xl font-bold">New Year Cultural Celebration</span>
        </RouterLink>
        
        <div class="hidden md:flex space-x-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-colors',
              isActive(item.path)
                ? 'bg-primary-800 text-white'
                : 'text-primary-100 hover:bg-primary-600 hover:text-white'
            ]"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-md hover:bg-primary-600"
          aria-label="Open menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div class="md:hidden pb-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium',
            isActive(item.path)
              ? 'bg-primary-800 text-white'
              : 'text-primary-100 hover:bg-primary-600 hover:text-white'
          ]"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
