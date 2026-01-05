<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <PageHeader
        title="About This Project"
        subtitle="Learn about the purpose of this cultural celebration website and our commitment to preserving traditions."
      />

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto mt-8 space-y-8">
        <!-- Purpose Section -->
        <section class="bg-white rounded-xl shadow-md p-6 md:p-8" aria-labelledby="purpose-title">
          <div class="flex items-start gap-4">
            <span class="text-4xl" aria-hidden="true">🎯</span>
            <div>
              <h2 id="purpose-title" class="text-2xl font-display font-bold text-gray-900 mb-4">
                Purpose of This Website
              </h2>
              <div class="prose prose-gray max-w-none">
                <p class="text-gray-700 leading-relaxed mb-4">
                  This website serves as an educational resource dedicated to exploring and celebrating 
                  the diverse New Year traditions found around the world. Our goal is to provide visitors 
                  with comprehensive information about how different cultures mark the transition to a 
                  new year, from ancient origins to contemporary celebrations.
                </p>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Whether you're a student researching cultural practices, an educator seeking teaching 
                  resources, or simply someone curious about global traditions, we hope this platform 
                  helps you discover the beautiful diversity of human celebration.
                </p>
                <p class="text-gray-700 leading-relaxed">
                  Through detailed articles on history, traditions, and events, we aim to foster 
                  cross-cultural understanding and appreciation for the ways people around the world 
                  come together to welcome new beginnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Cultural Preservation Section -->
        <section class="bg-gradient-to-r from-red-50 to-gold-50 rounded-xl p-6 md:p-8 border border-red-200" aria-labelledby="preservation-title">
          <div class="flex items-start gap-4">
            <span class="text-4xl" aria-hidden="true">🏛️</span>
            <div>
              <h2 id="preservation-title" class="text-2xl font-display font-bold text-gray-900 mb-4">
                Cultural Preservation
              </h2>
              <div class="prose prose-gray max-w-none">
                <p class="text-gray-700 leading-relaxed mb-4">
                  In an increasingly connected world, many traditional practices and cultural knowledge 
                  risk being lost or forgotten. This website is part of a broader effort to document, 
                  preserve, and share cultural heritage for future generations.
                </p>
                <p class="text-gray-700 leading-relaxed mb-4">
                  We believe that understanding and appreciating different cultural traditions helps 
                  build bridges between communities and promotes mutual respect. By highlighting the 
                  symbolic meanings behind various customs, we hope to convey not just what people do, 
                  but why these practices matter to them.
                </p>
                <p class="text-gray-700 leading-relaxed">
                  Our content is researched and presented with respect for the cultures represented. 
                  We recognize that traditions are living practices that evolve over time, and we 
                  strive to present information that is both accurate and sensitive to cultural nuances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- What You'll Find Section -->
        <section class="bg-white rounded-xl shadow-md p-6 md:p-8" aria-labelledby="content-title">
          <h2 id="content-title" class="text-2xl font-display font-bold text-gray-900 mb-6">
            What You'll Find Here
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl" aria-hidden="true">📜</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Historical Timeline</h3>
                <p class="text-sm text-gray-600">
                  Explore how New Year celebrations evolved from ancient Babylon to modern times.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl" aria-hidden="true">🎋</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Regional Traditions</h3>
                <p class="text-sm text-gray-600">
                  Discover unique customs from East Asia, Europe, and the Americas.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl" aria-hidden="true">🎉</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Global Events</h3>
                <p class="text-sm text-gray-600">
                  Learn about famous celebration events happening around the world.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl" aria-hidden="true">✨</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Symbolic Meanings</h3>
                <p class="text-sm text-gray-600">
                  Understand the deeper significance behind various New Year customs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact/Credits Section -->
        <section class="bg-gray-100 rounded-xl p-6 md:p-8" aria-labelledby="credits-title">
          <h2 id="credits-title" class="text-xl font-display font-bold text-gray-900 mb-4">
            About This Project
          </h2>
          <p class="text-gray-700 mb-4">
            This website was created as an educational demonstration project showcasing 
            Vue 3, TypeScript, and modern web development practices. The cultural content 
            presented is for informational purposes and has been compiled from various 
            publicly available sources.
          </p>
          <p class="text-gray-600 text-sm">
            Built with Vue 3 + TypeScript + Vite + Tailwind CSS
          </p>
        </section>

        <!-- Call to Action -->
        <div class="text-center py-8">
          <h3 class="text-xl font-display font-bold text-gray-900 mb-4">Ready to Explore?</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <RouterLink
              to="/history"
              class="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Explore History
            </RouterLink>
            <RouterLink
              to="/traditions"
              class="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors"
            >
              Discover Traditions
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { PageHeader } from '@/components'
</script>
