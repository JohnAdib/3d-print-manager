// composables/useProjectSubmission.ts
import { ref, computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import { useSubmissionDrawer } from '@/composables/useSubmissionDrawer'
import type { IProjectSubmissionForm } from '@/interfaces'

export function useProjectSubmission() {
  const fileStore = useFileStore()
  const isSaving = ref(false)

  // Call the useSubmissionDrawer composable
  const { closeSubmissionDrawer } = useSubmissionDrawer()

  const saveProject = async (formData: IProjectSubmissionForm) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to save project')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error saving project:', error)
      throw error
    }
  }

  const uploadFiles = async (projectId: string, files: File[]) => {
    const formData = new FormData()

    files.forEach((file) => {
      formData.append('files[]', file)
    })

    try {
      const response = await fetch(`/api/projects/${projectId}/upload-files`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload files')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error uploading files:', error)
      throw error
    }
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

      // Close the drawer on success using useSubmissionDrawer
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
