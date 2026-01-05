<template>
  <main>
    <!-- Hero Section -->
    <section 
      class="relative bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      <!-- Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="absolute -top-10 -right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-5">
          🎊
        </div>
      </div>

      <div class="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex justify-center gap-4 mb-6 text-5xl md:text-6xl" aria-hidden="true">
            <span class="animate-bounce" style="animation-delay: 0s">🎆</span>
            <span class="animate-bounce" style="animation-delay: 0.1s">🎉</span>
            <span class="animate-bounce" style="animation-delay: 0.2s">🎊</span>
          </div>
          
          <h1 
            id="hero-title"
            class="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
          >
            Celebrate the
            <span class="text-gold-300">New Year</span>
            <br>
            Across Cultures
          </h1>
          
          <p class="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the rich tapestry of New Year traditions, explore their ancient origins, 
            and experience how diverse cultures around the world welcome new beginnings.
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink
              to="/traditions"
              class="inline-flex items-center justify-center px-8 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-lg hover:bg-gold-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
            >
              Explore Traditions
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </RouterLink>
            <RouterLink
              to="/events"
              class="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
            >
              View Events
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Significance Section -->
    <section class="py-16 bg-gray-50" aria-labelledby="significance-title">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 id="significance-title" class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            The Significance of New Year
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            The celebration of the New Year is one of humanity's oldest and most universal traditions. 
            Marking the passage of time and the promise of new beginnings, cultures around the world 
            have developed unique customs to bid farewell to the old year and welcome the new.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            From the fireworks of Sydney Harbour to the temple bells of Kyoto, from Times Square's 
            ball drop to the lantern festivals of China, each tradition reflects the hopes, values, 
            and history of its people. Explore with us the beautiful diversity of New Year celebrations.
          </p>
        </div>
      </div>
    </section>

    <!-- Highlight Cards Section -->
    <section class="py-16" aria-labelledby="explore-title">
      <div class="container mx-auto px-4">
        <h2 id="explore-title" class="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
          Explore New Year Culture
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <HighlightCard
            v-for="card in highlightCards"
            :key="card.id"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            :route="card.route"
          />
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white" aria-labelledby="stats-title">
      <div class="container mx-auto px-4">
        <h2 id="stats-title" class="sr-only">Cultural Statistics</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold text-gold-300 mb-2">4000+</div>
            <div class="text-red-100">Years of History</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-gold-300 mb-2">{{ traditionsCount }}</div>
            <div class="text-red-100">Traditions</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-gold-300 mb-2">{{ eventsCount }}</div>
            <div class="text-red-100">Global Events</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-gold-300 mb-2">3</div>
            <div class="text-red-100">Continents</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16" aria-labelledby="cta-title">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center border border-gold-200">
          <span class="text-5xl mb-4 block" aria-hidden="true">🌏</span>
          <h2 id="cta-title" class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Ready to Explore World Traditions?
          </h2>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
            Dive deep into the fascinating traditions that make New Year celebrations unique 
            across different cultures and regions.
          </p>
          <RouterLink
            to="/traditions"
            class="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Discover Traditions
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { HighlightCard } from '@/components'
import { highlightCards, traditionsData, eventsData } from '@/data/mockData'

const traditionsCount = computed(() => traditionsData.length)
const eventsCount = computed(() => eventsData.length)
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}
</style>
