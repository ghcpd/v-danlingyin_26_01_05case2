<template>
  <div class="space-y-8">
    <PageHero
      title="Celebration Events"
      subtitle="Browse cultural gatherings, parades, and concerts to welcome the New Year."
    />

    <section class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-xl font-semibold text-slate-900">Events</h2>
        <p class="text-sm text-slate-600">Filter by region to focus on the celebrations you care about.</p>
      </div>
      <RegionFilter />
    </section>

    <section>
      <div class="grid gap-4 md:grid-cols-2">
        <EventCard
          v-for="event in filteredEvents"
          :key="event.id"
          :id="event.id"
          :name="event.name"
          :date="event.date"
          :location="event.location"
          :region="event.region"
          :short-description="event.shortDescription"
          :highlights="event.highlights"
        />
      </div>
      <p v-if="filteredEvents.length === 0" class="mt-4 text-sm text-slate-600">No events match this region yet.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import PageHero from '@/components/PageHero.vue';
import RegionFilter from '@/components/RegionFilter.vue';
import EventCard from '@/components/EventCard.vue';
import { useFilterStore } from '@/stores/filters';
import { events } from '@/data/events';
import type { CelebrationEvent } from '@/types/models';

const filterStore = useFilterStore();
const { selectedRegion } = storeToRefs(filterStore);

const filteredEvents = computed<CelebrationEvent[]>(() => {
  if (selectedRegion.value === 'all') return events;
  return events.filter((event) => event.region === selectedRegion.value);
});
</script>
