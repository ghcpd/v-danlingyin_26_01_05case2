<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Back Navigation -->
      <nav class="mb-6">
        <RouterLink
          to="/events"
          class="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
        >
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </RouterLink>
      </nav>

      <!-- Event Not Found -->
      <div v-if="!event" class="text-center py-16">
        <span class="text-6xl mb-4 block" aria-hidden="true">🔍</span>
        <h1 class="text-2xl font-display font-bold text-gray-900 mb-2">Event Not Found</h1>
        <p class="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <RouterLink
          to="/events"
          class="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Browse All Events
        </RouterLink>
      </div>

      <!-- Event Details -->
      <article v-else>
        <!-- Header -->
        <header class="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 md:p-8 mb-8">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20"
            >
              {{ regionLabel }}
            </span>
            <span class="text-red-200">•</span>
            <span class="text-red-100">{{ event.date }}</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-display font-bold mb-4">
            {{ event.name }}
          </h1>

          <div class="flex items-center text-red-100">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-lg">{{ event.location }}</span>
          </div>
        </header>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Full Description -->
            <section class="bg-white rounded-xl shadow-md p-6" aria-labelledby="description-title">
              <h2 id="description-title" class="text-xl font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                About This Event
              </h2>
              <p class="text-gray-700 leading-relaxed">
                {{ event.fullDescription }}
              </p>
            </section>

            <!-- Cultural Background -->
            <section class="bg-gradient-to-r from-gold-50 to-amber-50 rounded-xl p-6 border border-gold-200" aria-labelledby="cultural-title">
              <h2 id="cultural-title" class="text-xl font-display font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="text-2xl" aria-hidden="true">🏛️</span>
                Cultural Background
              </h2>
              <p class="text-gray-700 leading-relaxed">
                {{ event.culturalBackground }}
              </p>
            </section>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-6">
            <!-- Schedule -->
            <EventSchedule :schedule="event.schedule" />

            <!-- Quick Info -->
            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-lg font-display font-bold text-gray-900 mb-4">Quick Info</h3>
              <dl class="space-y-4">
                <div>
                  <dt class="text-sm text-gray-500">Date</dt>
                  <dd class="font-medium text-gray-900">{{ event.date }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-500">Location</dt>
                  <dd class="font-medium text-gray-900">{{ event.location }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-500">Region</dt>
                  <dd>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
                      :class="regionColorClass"
                    >
                      {{ regionLabel }}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Related Events CTA -->
            <div class="bg-gray-100 rounded-xl p-6 text-center">
              <h3 class="font-display font-bold text-gray-900 mb-2">Explore More Events</h3>
              <p class="text-sm text-gray-600 mb-4">Discover other celebrations from around the world.</p>
              <RouterLink
                to="/events"
                class="inline-flex items-center justify-center w-full px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                View All Events
              </RouterLink>
            </div>
          </aside>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { EventSchedule } from '@/components'
import { useAppStore } from '@/stores'
import { getRegionColorClass, getRegionLabel } from '@/utils'

const route = useRoute()
const store = useAppStore()

const event = computed(() => {
  const id = route.params.id as string
  return store.getEventById(id)
})

const regionLabel = computed(() => {
  if (!event.value) return ''
  return getRegionLabel(event.value.region)
})

const regionColorClass = computed(() => {
  if (!event.value) return ''
  return getRegionColorClass(event.value.region)
})
</script>
