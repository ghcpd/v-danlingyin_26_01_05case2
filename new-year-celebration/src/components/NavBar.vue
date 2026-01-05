<template>
  <header class="bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4" aria-label="Main navigation">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <RouterLink 
          to="/" 
          class="flex items-center space-x-2 text-xl font-display font-bold hover:text-gold-300 transition-colors"
          aria-label="Go to homepage"
        >
          <span class="text-2xl" aria-hidden="true">🎊</span>
          <span class="hidden sm:inline">New Year Celebration</span>
          <span class="sm:hidden">NYE</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link px-4 py-2 rounded-lg font-medium transition-all duration-200"
            :class="[
              isActiveRoute(item.path) 
                ? 'bg-white/20 text-gold-300' 
                : 'hover:bg-white/10 hover:text-gold-200'
            ]"
            :aria-current="isActiveRoute(item.path) ? 'page' : undefined"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          id="mobile-menu"
          class="md:hidden pb-4"
        >
          <div class="flex flex-col space-y-1">
            <RouterLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="px-4 py-3 rounded-lg font-medium transition-colors"
              :class="[
                isActiveRoute(item.path)
                  ? 'bg-white/20 text-gold-300'
                  : 'hover:bg-white/10'
              ]"
              :aria-current="isActiveRoute(item.path) ? 'page' : undefined"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import type { NavItem } from '@/types'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navItems: NavItem[] = [
  { name: 'home', path: '/', label: 'Home' },
  { name: 'history', path: '/history', label: 'History' },
  { name: 'traditions', path: '/traditions', label: 'Traditions' },
  { name: 'events', path: '/events', label: 'Events' },
  { name: 'about', path: '/about', label: 'About' }
]

function isActiveRoute(path: string): boolean {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

function toggleMobileMenu(): void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu(): void {
  isMobileMenuOpen.value = false
}

// Close mobile menu on route change
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: theme('colors.gold.300');
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link[aria-current="page"]::after {
  width: 60%;
}
</style>
