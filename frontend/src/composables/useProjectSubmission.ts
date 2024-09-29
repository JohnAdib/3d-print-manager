// composables/useProjectSubmission.ts
import { ref, computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import type { IProjectSubmissionForm } from '@/interfaces'

export function useProjectSubmission() {
  const isSubmissionDrawerOpen = ref(false)
  const fileStore = useFileStore()

  const openSubmissionDrawer = () => {
    isSubmissionDrawerOpen.value = true
  }

  const closeSubmissionDrawer = () => {
    isSubmissionDrawerOpen.value = false
  }

  const handleSaveProject = (formData: IProjectSubmissionForm) => {
    console.log('Form data saved:', formData)
    const files = computed(() => fileStore.files)
    console.log('Files:', files.value)

    // send a fetch request to the server to add project
    // send a fetch request to upload files to the server

    closeSubmissionDrawer()
  }

  return {
    isSubmissionDrawerOpen,
    openSubmissionDrawer,
    closeSubmissionDrawer,
    handleSaveProject
  }
}
