<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { NavBar, FooterBar } from '@/components'
import { RouterView } from 'vue-router'
</script>
