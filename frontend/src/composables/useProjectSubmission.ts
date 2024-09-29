import { ref, computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import { useSubmissionDrawer } from '@/composables/useSubmissionDrawer'
import type { IProjectData } from '@/interfaces'
import { sendProjectWithFiles } from '@/utils/fetch/send-project-with-files'

export function useProjectSubmission() {
  const fileStore = useFileStore()
  const isSaving = ref(false)

  const { closeSubmissionDrawer } = useSubmissionDrawer()

  const handleSaveProject = async (projectData: IProjectData) => {
    isSaving.value = true

    try {
      const files = computed(() => fileStore.files)

      // Send project data and files in one request
      await sendProjectWithFiles({
        projectData,
        projectFiles: files.value
      })
      console.log('Project and files uploaded successfully')

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
