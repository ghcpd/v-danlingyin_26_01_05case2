<template>
  <RouterLink
    :to="to"
    class="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-500"
  >
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-aurora-600">{{ eyebrow }}</p>
        <h3 class="mt-2 text-xl font-semibold text-slate-900">{{ title }}</h3>
        <p class="mt-2 text-sm text-slate-600">{{ description }}</p>
      </div>
      <span class="rounded-full bg-aurora-100 px-3 py-1 text-xs font-semibold text-aurora-700">Explore</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
  title: string;
  description: string;
  eyebrow: string;
  to: string;
}

defineProps<Props>();
</script>
