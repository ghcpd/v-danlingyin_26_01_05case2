<template>
  <section class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-aurora-500 via-aurora-600 to-aurora-800 px-6 py-12 text-white shadow-lg">
    <div class="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden="true"></div>
    <div class="absolute -bottom-10 right-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" aria-hidden="true"></div>
    <div class="relative max-w-3xl">
      <p class="text-sm uppercase tracking-[0.3em] text-aurora-100">New Year</p>
      <h1 class="mt-2 text-3xl font-display leading-tight md:text-4xl">{{ title }}</h1>
      <p class="mt-3 text-lg text-aurora-100 md:text-xl">{{ subtitle }}</p>
      <slot name="cta"></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>
