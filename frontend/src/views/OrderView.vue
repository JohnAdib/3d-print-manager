<script setup lang="ts">
import FileUpload from '@/components/order/file-uploader/FileUpload.vue'
import PageHeader from '@/components/order/preview/PageHeader.vue'
import FilesPreview from '@/components/order/preview/FilesPreview.vue'
import DrawerSubmission from '@/components/order/drawer/DrawerSubmission.vue'
</script>

<template>
  <main class="p-4 md:px-8">
    <PageHeader />
    <FileUpload />
    <FilesPreview />
    <DrawerSubmission />
  </main>
</template>
