<template>
  <article
    class="bg-white rounded-lg shadow-md overflow-hidden border-l-4 transition-all duration-300"
    :class="[
      isExpanded ? 'shadow-lg' : 'hover:shadow-lg',
      isAncient ? 'border-amber-500' : 'border-blue-500'
    ]"
  >
    <button
      class="w-full text-left p-4 md:p-6 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
      @click="toggle"
      :aria-expanded="isExpanded"
      :aria-controls="`timeline-content-${item.id}`"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              :class="isAncient ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'"
            >
              {{ item.year }}
            </span>
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
            >
              {{ isAncient ? 'Ancient' : 'Modern' }}
            </span>
          </div>
          <h3 class="text-lg md:text-xl font-display font-bold text-gray-900">
            {{ item.title }}
          </h3>
        </div>
        <div
          class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300"
          :class="{ 'rotate-180': isExpanded }"
          aria-hidden="true"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </button>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-show="isExpanded"
        :id="`timeline-content-${item.id}`"
        class="overflow-hidden"
      >
        <div class="px-4 md:px-6 pb-4 md:pb-6">
          <div class="border-t border-gray-200 pt-4">
            <p class="text-gray-700 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TimelineItem } from '@/types'
import { useAppStore } from '@/stores'

interface Props {
  item: TimelineItem
}

const props = defineProps<Props>()
const store = useAppStore()

const isExpanded = computed(() => store.isTimelineExpanded(props.item.id))
const isAncient = computed(() => props.item.civilization === 'ancient')

function toggle(): void {
  store.toggleTimelineItem(props.item.id)
}
</script>
