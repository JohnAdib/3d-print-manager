<script setup lang="ts">
import FileUpload from '@/components/order/file-uploader/FileUpload.vue'
import PageHeader from '@/components/order/preview/PageHeader.vue'
import FilesPreview from '@/components/order/preview/FilesPreview.vue'
import DrawerSubmission from '@/components/order/drawer/DrawerSubmission.vue'
import { useProjectSubmission } from '@/composables/useProjectSubmission'
import { useSubmissionDrawer } from '@/composables/useSubmissionDrawer'

const { handleSaveProject } = useProjectSubmission()
const { isSubmissionDrawerOpen, openSubmissionDrawer, closeSubmissionDrawer } =
  useSubmissionDrawer()
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
