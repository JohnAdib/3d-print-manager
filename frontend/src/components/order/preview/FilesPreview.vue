<template>
  <div class="mt-8">
    <EmptyState v-if="files.length === 0" />

    <div
      v-else
      class="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <div
        v-for="file in files"
        :key="file.id"
        class="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden"
      >
        <div class="card-preview aspect-square">
          <FilePreview3D :file="file.file" />
        </div>
        <footer
          class="card-meta px-4 py-4 flex gap-2 sm:gap-4 flex-nowrap justify-between"
        >
          <div class="overflow-hidden">
            <h3
              class="text-xs sm:text-sm font-semibold truncate text-stone-600"
            >
              {{ file.name }}
            </h3>
            <p
              class="text-xs sm:text-base text-stone-500 truncate flex justify-between"
            >
              <span>{{ file.size }}</span>
            </p>
          </div>
          <button
            title="Press to remove this file"
            class="bg-stone-50 text-red-400 hover:bg-red-100/75 focus:text-red-700 px-3 rounded transition"
            @click="fileStore.removeFile(file.id)"
          >
            <TrashIcon class="h-5 w-5" />
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import { TrashIcon } from '@heroicons/vue/24/outline'
import EmptyState from './EmptyState.vue'
import FilePreview3D from './FilePreview3D.vue'

const fileStore = useFileStore()

const files = computed(() => fileStore.files)
</script>
