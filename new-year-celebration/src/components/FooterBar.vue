<template>
  <footer class="bg-gray-900 text-gray-300 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-2 text-xl font-display font-bold text-white mb-4">
            <span class="text-2xl" aria-hidden="true">🎊</span>
            <span>New Year Celebration</span>
          </div>
          <p class="text-sm text-gray-400">
            Exploring New Year celebrations, traditions, and historical background from cultures around the world.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <nav aria-label="Footer navigation">
            <ul class="space-y-2">
              <li>
                <RouterLink to="/" class="hover:text-gold-400 transition-colors">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/history" class="hover:text-gold-400 transition-colors">History</RouterLink>
              </li>
              <li>
                <RouterLink to="/traditions" class="hover:text-gold-400 transition-colors">Traditions</RouterLink>
              </li>
              <li>
                <RouterLink to="/events" class="hover:text-gold-400 transition-colors">Events</RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="hover:text-gold-400 transition-colors">About</RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Cultural Message -->
        <div>
          <h3 class="text-white font-semibold mb-4">Cultural Preservation</h3>
          <p class="text-sm text-gray-400">
            This website is dedicated to preserving and sharing the rich traditions of New Year celebrations 
            from diverse cultures across time and geography.
          </p>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {{ currentYear }} New Year Cultural Celebration. All rights reserved.</p>
        <p class="mt-2">Made with ❤️ for cultural enthusiasts everywhere</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>
