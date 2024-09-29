import { ref, computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import { useSubmissionDrawer } from '@/composables/useSubmissionDrawer'
import type { IProjectSubmissionForm } from '@/interfaces'
import { fetchWithErrorHandling } from '@/utils/fetch/fetch-with-error-handling'
import { uploadFiles } from '@/utils/fetch/upload-files'

export function useProjectSubmission() {
  const fileStore = useFileStore()
  const isSaving = ref(false)

  const { closeSubmissionDrawer } = useSubmissionDrawer()

  const saveProject = async (formData: IProjectSubmissionForm) => {
    return await fetchWithErrorHandling('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  const handleSaveProject = async (formData: IProjectSubmissionForm) => {
    isSaving.value = true

    try {
      const files = computed(() => fileStore.files)
      const savedProject = await saveProject(formData)
      console.log('Project saved:', savedProject)

      if (files.value.length > 0) {
        const uploadedFiles = await uploadFiles(savedProject.id, files.value)
        console.log('Files uploaded:', uploadedFiles)
      }

      console.log('Project and files saved successfully')

      // Close the drawer on success
      closeSubmissionDrawer()
    } catch (error) {
      console.error('Error during project submission:', error)
    } finally {
      isSaving.value = false
    }
  }

  return {
    isSaving,
    handleSaveProject
  }
}
