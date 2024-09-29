import type { IProjectData, IProjectWithFilesPayload } from '@/interfaces'
import { API_V1_PATH } from '@/config/constants'
import { fetchWithErrorHandling } from '../fetch/fetch-with-error-handling'

export async function sendProjectWithFiles({
  projectData,
  projectFiles
}: IProjectWithFilesPayload) {
  const formDataToSend = new FormData()

  Object.keys(projectData).forEach((key) => {
    formDataToSend.append(
      key,
      (projectData as IProjectData)[key as keyof IProjectData]
    )
  })

  projectFiles.forEach((uploadedFile) => {
    formDataToSend.append('files[]', uploadedFile.file)
  })

  const apiUrl = API_V1_PATH + 'project-3d'
  return await fetchWithErrorHandling(apiUrl, {
    method: 'POST',
    body: formDataToSend
  })
}
