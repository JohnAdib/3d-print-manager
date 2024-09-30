import { ref, computed } from 'vue'
import { useFileStore } from '@/store/fileStore'
import type { IProjectData } from '@/interfaces'
import { sendProjectWithFiles } from '@/utils/server/send-project-with-files'
import { showAlert } from '@/utils/alert/show-alert'
import { useProjectSubmissionDrawer } from '@/store/useProjectSubmissionDrawer'

export function useProjectSubmission() {
  const fileStore = useFileStore()
  const isSaving = ref(false)

  const { closeDrawer } = useProjectSubmissionDrawer()

  const handleSaveProject = async (projectData: IProjectData) => {
    isSaving.value = true

    try {
      const files = computed(() => fileStore.files)

      const apiResponse = await sendProjectWithFiles({
        projectData,
        projectFiles: files.value
      })

      // get the url from router as prefix + storage folder
      const filePrefix = window.location.origin + '/storage/'
      const apiDataPath = filePrefix + apiResponse.result.dataPath
      const alertFooter =
        '<a target="_blank" href="' +
        apiDataPath +
        '">Just in case, link to your project data!</a>'

      showAlert({
        title: apiResponse.msg,
        text: 'We will review your project and get back to you soon. Thank you!',
        footer: alertFooter,
        icon: 'success'
      })

      closeDrawer()
      fileStore.clearFiles()
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
