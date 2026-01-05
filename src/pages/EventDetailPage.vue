<template>
  <div class="space-y-6">
    <RouterLink to="/events" class="inline-flex items-center gap-2 text-sm font-semibold text-aurora-700 underline-offset-4 hover:underline">
      ← Back to events
    </RouterLink>

    <div v-if="event" class="space-y-6">
      <PageHero :title="event.name" :subtitle="event.shortDescription" />

      <section class="grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:col-span-2">
          <h2 class="text-xl font-semibold text-slate-900">Cultural Background</h2>
          <p class="mt-2 text-slate-700">{{ event.background }}</p>
          <div v-if="event.highlights?.length" class="mt-3 space-y-1 text-sm text-slate-700">
            <p class="font-semibold text-aurora-800">Highlights</p>
            <ul class="list-disc space-y-1 pl-5">
              <li v-for="item in event.highlights" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-slate-900">Event Info</h3>
          <p class="text-sm text-slate-700">Date: {{ event.date }}</p>
          <p class="text-sm text-slate-700">Location: {{ event.location }}</p>
          <p class="text-sm text-slate-700">Region: {{ regionLabelText }}</p>
        </div>
      </section>

      <EventSchedule :schedule="event.schedule" />
    </div>

    <div v-else class="rounded-xl border border-rose-200 bg-rose-50 p-6 text-rose-800">
      <p class="font-semibold">Event not found.</p>
      <p class="text-sm">Return to the events list to choose another celebration.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import PageHero from '@/components/PageHero.vue';
import EventSchedule from '@/components/EventSchedule.vue';
import { events } from '@/data/events';
import { regionLabel } from '@/utils/regions';
import type { CelebrationEvent } from '@/types/models';

const route = useRoute();
const id = route.params.id as string;
const event = events.find((item) => item.id === id) as CelebrationEvent | undefined;

const regionLabelText = computed(() => (event ? regionLabel(event.region) : ''));
</script>
