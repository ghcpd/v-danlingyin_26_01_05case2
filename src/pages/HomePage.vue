<template>
  <div class="space-y-10">
    <PageHero
      title="Celebrate Renewal Across Cultures"
      subtitle="Explore how communities welcome the New Year through history, regional traditions, and vibrant events."
    >
      <template #cta>
        <div class="mt-6 flex flex-wrap gap-3">
          <RouterLink
            to="/events"
            class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-aurora-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >Browse Events</RouterLink
          >
          <RouterLink
            to="/history"
            class="rounded-full border border-white/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >Discover History</RouterLink
          >
        </div>
      </template>
    </PageHero>

    <section class="grid gap-4 md:grid-cols-3">
      <HighlightCard
        eyebrow="History"
        title="Origins of New Year"
        description="Trace the journey from ancient calendars to today’s global countdowns."
        to="/history"
      />
      <HighlightCard
        eyebrow="Traditions"
        title="Customs by Region"
        description="See how communities express renewal through food, music, and symbolism."
        to="/traditions"
      />
      <HighlightCard
        eyebrow="Events"
        title="Celebrate Together"
        description="Find festivals, parades, and gatherings to experience firsthand."
        to="/events"
      />
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-display text-slate-900">Why New Year Matters</h2>
      <p class="mt-3 text-slate-700">
        Across cultures and eras, the New Year invites reflection and joy. This site highlights the shared themes of renewal—family reunions,
        hopes for prosperity, and community celebrations—while honoring the unique expressions that make each tradition meaningful.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HighlightCard from '@/components/HighlightCard.vue';
import PageHero from '@/components/PageHero.vue';
</script>
