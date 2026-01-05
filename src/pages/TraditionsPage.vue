<template>
  <div class="space-y-8">
    <PageHero
      title="Traditions by Region"
      subtitle="Discover symbolic foods, gestures of luck, and family rituals that welcome the New Year."
    />

    <section v-for="group in grouped" :key="group.region" class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold text-slate-900">{{ group.label }}</h2>
        <p class="text-sm text-slate-600">{{ group.count }} tradition{{ group.count > 1 ? 's' : '' }}</p>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <TraditionCard
          v-for="item in group.items"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :meaning="item.meaning"
          :region="item.region"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PageHero from '@/components/PageHero.vue';
import TraditionCard from '@/components/TraditionCard.vue';
import { traditions } from '@/data/traditions';
import type { Tradition } from '@/types/models';

interface GroupedTraditions {
  region: Tradition['region'];
  label: string;
  items: Tradition[];
  count: number;
}

const labels: Record<Tradition['region'], string> = {
  'east-asia': 'East Asia',
  europe: 'Europe',
  americas: 'Americas',
};

const grouped = computed<GroupedTraditions[]>(() => {
  return Object.entries(labels).map(([region, label]) => {
    const regionKey = region as Tradition['region'];
    const items = traditions.filter((item) => item.region === regionKey);
    return { region: regionKey, label, items, count: items.length };
  });
});
</script>
