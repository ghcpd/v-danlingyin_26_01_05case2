<template>
  <div
    class="bg-gradient-to-r from-red-50 to-gold-50 border border-red-200 rounded-xl p-6"
    role="region"
    aria-labelledby="page-header-title"
  >
    <nav class="text-sm mb-2" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-2">
        <li>
          <RouterLink to="/" class="text-red-600 hover:text-red-700 transition-colors">
            Home
          </RouterLink>
        </li>
        <li class="text-gray-400" aria-hidden="true">/</li>
        <li class="text-gray-600" aria-current="page">{{ title }}</li>
      </ol>
    </nav>
    <h1 id="page-header-title" class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
      {{ title }}
    </h1>
    <p class="text-gray-700 text-lg max-w-3xl">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>
