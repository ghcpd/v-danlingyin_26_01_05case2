<template>
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur shadow-sm">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Primary">
      <RouterLink to="/" class="flex items-center gap-2 text-xl font-display tracking-wide text-aurora-700" aria-label="New Year Cultural Celebration home">
        <span class="inline-block h-3 w-3 rounded-full bg-aurora-500"></span>
        New Year Cultural Celebration
      </RouterLink>
      <button class="md:hidden" @click="toggle" aria-label="Toggle navigation menu">
        <span class="sr-only">Toggle menu</span>
        <div class="space-y-1">
          <span class="block h-0.5 w-6 bg-slate-900"></span>
          <span class="block h-0.5 w-6 bg-slate-900"></span>
          <span class="block h-0.5 w-6 bg-slate-900"></span>
        </div>
      </button>
      <ul :class="['items-center gap-6 text-sm font-semibold text-slate-700 md:flex', open ? 'absolute left-0 right-0 top-full bg-white px-4 pb-4 pt-2 shadow md:static md:bg-transparent md:p-0 md:shadow-none' : 'hidden md:flex']">
        <li v-for="item in navItems" :key="item.path">
          <RouterLink
            :to="item.path"
            class="block rounded-full px-3 py-2 transition hover:bg-aurora-50 hover:text-aurora-700"
            :class="isActive(item.path) ? 'bg-aurora-100 text-aurora-800' : ''"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const open = ref(false);
const route = useRoute();

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/history', label: 'History' },
  { path: '/traditions', label: 'Traditions' },
  { path: '/events', label: 'Events' },
  { path: '/about', label: 'About' },
];

const toggle = () => {
  open.value = !open.value;
};

const isActive = (path: string): boolean => route.path === path || route.path.startsWith(`${path}/`);
</script>
