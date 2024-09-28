<template>
  <div class="col-span-full select-none">
    <label
      for="file-upload"
      class="mt-2 flex justify-center bg-sky-50 hover:bg-sky-100/75 rounded-xl border-2 border-dashed cursor-pointer transition"
      :class="[
        dragging ? 'border-sky-600 bg-gray-100' : 'border-sky-200',
        totalFiles > 0 ? 'py-4' : 'py-24'
      ]"
      :data-total-files="totalFiles"
    >
      <div class="text-center">
        <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
        <div class="mt-4 flex text-sm text-gray-600">
          <div class="font-semibold text-indigo-600">
            <span>Upload a .STL file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              class="sr-only"
              @change="onFileChange"
              multiple
            />
          </div>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs text-gray-600 py-1">
          Up to <b>{{ FILE_SIZE_LIMIT }}MB</b>
        </p>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PhotoIcon } from '@heroicons/vue/24/outline'
import { useDragAndDrop } from '@/composables/useDragAndDrop'
import { useFileStore } from '@/store/fileStore'
import { FILE_SIZE_LIMIT } from '@/config/constants'

const fileStore = useFileStore()
const totalFiles = computed(() => fileStore.totalFiles)

const { dragging } = useDragAndDrop({
  handleDropEvent: (files) => {
    console.info('Files dropped on the dropzone...')
    fileStore.addFiles(files)
  }
})

const onFileChange = (event: Event) => {
  console.info('File chosen from input...')
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    const selectedFiles = Array.from(target.files)
    fileStore.addFiles(selectedFiles)

    target.value = ''
  }
}
</script>
