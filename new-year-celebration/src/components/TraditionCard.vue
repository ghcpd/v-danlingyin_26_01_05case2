<template>
  <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div class="p-6">
      <div class="flex items-start justify-between gap-4 mb-4">
        <h3 class="text-lg font-display font-bold text-gray-900">
          {{ tradition.title }}
        </h3>
        <span
          class="flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
          :class="regionColorClass"
        >
          {{ regionLabel }}
        </span>
      </div>

      <p class="text-gray-700 mb-4 leading-relaxed">
        {{ tradition.description }}
      </p>

      <div class="bg-gradient-to-r from-gold-50 to-amber-50 rounded-lg p-4 border border-gold-200">
        <div class="flex items-start gap-3">
          <span class="text-xl" aria-hidden="true">✨</span>
          <div>
            <h4 class="text-sm font-semibold text-amber-800 mb-1">Symbolic Meaning</h4>
            <p class="text-sm text-amber-900">
              {{ tradition.symbolicMeaning }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Tradition } from '@/types'
import { getRegionColorClass, getRegionLabel } from '@/utils'

interface Props {
  tradition: Tradition
}

const props = defineProps<Props>()

const regionColorClass = computed(() => getRegionColorClass(props.tradition.region))
const regionLabel = computed(() => getRegionLabel(props.tradition.region))
</script>
