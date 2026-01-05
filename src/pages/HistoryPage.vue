<template>
  <div class="space-y-8">
    <PageHero title="History of New Year" subtitle="From ancient rites to modern countdowns, explore how societies reset the calendar." />
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-slate-900">Timeline</h2>
      <TimelineSection :timeline="timelineEntries" />
    </section>
  </div>
</template>

<script setup lang="ts">
import PageHero from '@/components/PageHero.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import { timelineEntries } from '@/data/history';
</script>
