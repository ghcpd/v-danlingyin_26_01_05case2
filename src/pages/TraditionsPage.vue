<script setup lang="ts">
import { computed } from 'vue';
import TraditionCard from '@/components/TraditionCard.vue';
import { traditionsData } from '@/data/traditions';

const eastAsiaTraditions = computed(() => 
  traditionsData.filter(t => t.region === 'east-asia')
);

const europeTraditions = computed(() => 
  traditionsData.filter(t => t.region === 'europe')
);

const americasTraditions = computed(() => 
  traditionsData.filter(t => t.region === 'americas')
);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50 to-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🎎 New Year Traditions Around the World
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the rich tapestry of customs and rituals that different cultures use to welcome the new year
        </p>
      </div>

      <!-- East Asia Section -->
      <div class="max-w-7xl mx-auto mb-16">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-primary-700 mb-2">
            East Asia
          </h2>
          <p class="text-gray-600">
            Traditions rooted in ancient philosophies, ancestor worship, and harmony with nature
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <TraditionCard
            v-for="tradition in eastAsiaTraditions"
            :key="tradition.id"
            :tradition="tradition"
          />
        </div>
      </div>

      <!-- Europe Section -->
      <div class="max-w-7xl mx-auto mb-16">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-blue-700 mb-2">
            Europe
          </h2>
          <p class="text-gray-600">
            From ancient pagan rituals to modern celebrations blending folklore and festivity
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <TraditionCard
            v-for="tradition in europeTraditions"
            :key="tradition.id"
            :tradition="tradition"
          />
        </div>
      </div>

      <!-- Americas Section -->
      <div class="max-w-7xl mx-auto mb-16">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-green-700 mb-2">
            Americas
          </h2>
          <p class="text-gray-600">
            A blend of indigenous, colonial, and modern traditions reflecting diverse cultural influences
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <TraditionCard
            v-for="tradition in americasTraditions"
            :key="tradition.id"
            :tradition="tradition"
          />
        </div>
      </div>

      <!-- Cultural Insight -->
      <div class="max-w-7xl mx-auto bg-gradient-to-r from-primary-100 to-gold-100 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          The Power of Tradition
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Each tradition carries deep symbolic meaning, connecting present generations to their ancestors 
          and cultural heritage. Whether through food, rituals, or celebrations, these customs express 
          universal human desires for luck, prosperity, health, and happiness. They remind us that while 
          cultures may differ in expression, the human spirit's hope for a better tomorrow is universal.
        </p>
      </div>
    </div>
  </div>
</template>
