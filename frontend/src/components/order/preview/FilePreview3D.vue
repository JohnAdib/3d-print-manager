<template>
  <div
    ref="container"
    class="relative w-full h-full bg-stone-100 rounded-lg"
    title="Click to pause/play animation"
    @mouseenter="startRotation"
    @mouseleave="stopRotation"
    @click="toggleAnimation"
  >
    <button class="absolute top-1 right-1 bg-white/20 p-1 rounded-full">
      <PlayIcon v-if="animationPaused" class="h-4 w-4 text-gray-600" />
      <PauseIcon v-else class="h-4 w-4 text-gray-600" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useThreeJS } from '@/composables/useThreeJS'
import { PlayIcon, PauseIcon } from '@heroicons/vue/16/solid'

const props = defineProps<{
  file: File | null
}>()

const {
  container,
  startRotation,
  stopRotation,
  toggleAnimation,
  animationPaused
} = useThreeJS({ file: props.file })
</script>
