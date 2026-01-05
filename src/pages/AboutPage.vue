<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50 to-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About This Project
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Preserving and celebrating cultural heritage through digital storytelling
        </p>
      </div>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Purpose Section -->
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-3xl font-bold text-primary-700 mb-4">
            Our Purpose
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The New Year Cultural Celebration website serves as a digital bridge connecting people 
            to the rich tapestry of New Year traditions from around the world. Our mission is to 
            educate, inspire, and foster cultural understanding by showcasing how diverse societies 
            mark this universal moment of renewal and hope.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Through interactive timelines, detailed tradition descriptions, and comprehensive event 
            information, we aim to make cultural knowledge accessible to everyone—from curious students 
            to passionate cultural enthusiasts.
          </p>
        </div>

        <!-- Cultural Preservation Section -->
        <div class="bg-gradient-to-r from-gold-100 to-gold-200 rounded-lg p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Cultural Preservation Message
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            In an increasingly interconnected world, it's more important than ever to understand and 
            appreciate the cultural practices that define communities across the globe. Cultural 
            traditions are not merely historical artifacts—they are living expressions of identity, 
            values, and collective memory.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            New Year celebrations, in particular, embody humanity's universal desire to honor the past, 
            celebrate the present, and embrace the future with hope. By documenting and sharing these 
            traditions, we contribute to their preservation for future generations.
          </p>
          <p class="text-gray-700 leading-relaxed">
            We believe that cultural diversity is humanity's greatest strength. Each tradition, ritual, 
            and celebration adds to the richness of our shared human experience. Through education and 
            understanding, we can build bridges between cultures and foster mutual respect and appreciation.
          </p>
        </div>

        <!-- Values Section -->
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-3xl font-bold text-primary-700 mb-6">
            Our Values
          </h2>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="text-3xl mr-4">🌏</div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Cultural Respect</h3>
                <p class="text-gray-700">
                  We approach every tradition with respect and authenticity, ensuring accurate 
                  representation of cultural practices.
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="text-3xl mr-4">📚</div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <p class="text-gray-700">
                  We strive to provide comprehensive, accessible information that helps people 
                  learn about and appreciate diverse cultures.
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="text-3xl mr-4">🤝</div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Unity in Diversity</h3>
                <p class="text-gray-700">
                  We celebrate the beautiful diversity of human culture while highlighting the 
                  universal values that unite us all.
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="text-3xl mr-4">💫</div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Hope and Renewal</h3>
                <p class="text-gray-700">
                  We embrace the optimistic spirit of New Year celebrations and their message 
                  of hope for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Explore Section -->
        <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-white text-center">
          <h2 class="text-2xl font-bold mb-4">
            Continue Your Cultural Journey
          </h2>
          <p class="mb-6">
            Explore the fascinating world of New Year celebrations and discover the stories 
            that connect us all.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <RouterLink
              to="/history"
              class="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore History
            </RouterLink>
            <RouterLink
              to="/traditions"
              class="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Traditions
            </RouterLink>
            <RouterLink
              to="/events"
              class="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Discover Events
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
