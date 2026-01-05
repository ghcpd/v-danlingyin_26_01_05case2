<template>
  <div class="space-y-6">
    <PageHero title="About This Project" subtitle="Preserving and sharing the stories behind New Year celebrations." />
    <section class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-xl font-semibold text-slate-900">Purpose</h2>
      <p class="text-slate-700">
        This site highlights how communities around the world mark the turning of the year. By presenting historical roots, regional traditions,
        and contemporary events, we aim to encourage cultural appreciation and curiosity.
      </p>
      <h3 class="text-lg font-semibold text-slate-900">Approach</h3>
      <ul class="list-disc space-y-1 pl-5 text-slate-700">
        <li>All content is sourced from curated, mock cultural data to keep the experience self-contained.</li>
        <li>Navigation is simple and accessible, with clear routes to history, traditions, and events.</li>
        <li>Responsive layouts ensure comfortable reading on phones, tablets, and desktops.</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '@/components/PageHero.vue';
</script>
