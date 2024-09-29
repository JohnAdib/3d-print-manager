<script setup lang="ts">
import { ref } from 'vue'
import FileUpload from '@/components/order/file-uploader/FileUpload.vue'
import PageHeader from '@/components/order/preview/PageHeader.vue'
import FilesPreview from '@/components/order/preview/FilesPreview.vue'
import DrawerSubmission from '@/components/order/drawer/DrawerSubmission.vue'
import type { IProjectSubmissionForm } from '@/interfaces'

const isSubmissionDrawerOpen = ref(false)

// Open the SubmitProject drawer
const openSubmissionDrawer = () => {
  isSubmissionDrawerOpen.value = true
}

// Close the SubmitProject drawer
const closeSubmissionDrawer = () => {
  isSubmissionDrawerOpen.value = false
}

// Handle form submission (save event)
const handleSaveProject = (formData: IProjectSubmissionForm) => {
  console.log('Form data saved:', formData)
  // Add your save logic here (e.g., send formData to the server)
  closeSubmissionDrawer()
}
</script>

<template>
  <main class="p-4 md:px-8">
    <PageHeader @submit="openSubmissionDrawer" />
    <FileUpload />
    <FilesPreview />

    <DrawerSubmission
      :open="isSubmissionDrawerOpen"
      @close="closeSubmissionDrawer"
      @save="handleSaveProject"
    />
  </main>
</template>
