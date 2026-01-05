<script setup lang="ts">
import HighlightCard from '@/components/HighlightCard.vue';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50 to-gold-50">
    <!-- Hero Banner -->
    <div class="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="relative container mx-auto px-4 py-20 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          🎊 New Year Cultural Celebration 🎊
        </h1>
        <p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
          Discover how different cultures around the world welcome the New Year
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-50 to-transparent"></div>
    </div>

    <!-- Introduction Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          The Significance of New Year
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          New Year celebrations mark a universal moment of renewal and hope. Across cultures and throughout history, 
          humanity has gathered to bid farewell to the past and welcome the future with joy, reflection, and tradition.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          From ancient civilizations tracking agricultural cycles to modern global celebrations synchronized by time zones, 
          New Year represents our shared desire to celebrate fresh beginnings, honor our heritage, and connect with others 
          in a spirit of optimism and community.
        </p>
      </div>

      <!-- Highlight Cards -->
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore New Year Celebrations
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <HighlightCard
            title="History"
            description="Journey through time to discover the origins of New Year celebrations from ancient civilizations to modern times."
            link="/history"
            icon="📜"
          />
          <HighlightCard
            title="Traditions"
            description="Explore unique New Year traditions from East Asia, Europe, and the Americas, each with deep cultural meanings."
            link="/traditions"
            icon="🎎"
          />
          <HighlightCard
            title="Events"
            description="Discover major New Year celebration events around the world and experience their cultural richness."
            link="/events"
            icon="🎉"
          />
        </div>
      </div>
    </div>

    <!-- Cultural Message -->
    <div class="bg-gradient-to-r from-gold-400 to-gold-600 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl font-bold mb-4">
            Celebrating Unity in Diversity
          </h2>
          <p class="text-lg leading-relaxed">
            While New Year traditions vary across cultures, they all share common themes of hope, 
            renewal, and community. This website celebrates the beautiful diversity of human culture 
            and the universal spirit that unites us all.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
