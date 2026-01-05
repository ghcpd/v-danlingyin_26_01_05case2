<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <NavBar />
    <main class="mx-auto max-w-6xl px-4 py-8">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <p class="py-10 text-center text-sm text-slate-600" role="status">Loading content…</p>
          </template>
        </Suspense>
      </RouterView>
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>
