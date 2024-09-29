<template>
  <div
    class="border-b border-gray-200 pb-4 flex items-center justify-between select-none"
  >
    <h3 class="text-base font-semibold leading-9 text-gray-900">
      {{
        files.length >= 1
          ? 'If all looks good, submit your order!'
          : 'Ready to place an order? Just upload your files and we will take care of the rest.'
      }}
    </h3>

    <button
      type="button"
      @click="openDrawer()"
      class="inline-flex items-center gap-1 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition"
      v-if="files.length >= 1"
    >
      <span>Submit Order</span>
      <span aria-hidden="true" class="hidden">→</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import { useProjectSubmissionDrawer } from '@/store/useProjectSubmissionDrawer'

const fileStore = useFileStore()
const { openDrawer } = useProjectSubmissionDrawer()

const files = computed(() => fileStore.files)
</script>
