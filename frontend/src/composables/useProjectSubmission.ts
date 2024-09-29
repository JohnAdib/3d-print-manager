import { ref, computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import { useSubmissionDrawer } from '@/composables/useSubmissionDrawer'
import type { IProjectData } from '@/interfaces'
import { sendProjectWithFiles } from '@/utils/server/send-project-with-files'
import { showAlert } from '@/utils/alert/show-alert'

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

      showAlert({
        title: 'Project Submitted Successfully',
        text: 'We will review your project and get back to you soon. Thank you!',
        icon: 'success'
      })

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
