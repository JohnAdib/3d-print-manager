import type { IProjectData, IProjectWithFilesPayload } from '@/interfaces'
import { fetchWithErrorHandling } from './fetch-with-error-handling'
import { API_V1_PATH } from '@/config/constants'

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

  console.log('formDataToSend', formDataToSend)

  const apiUrl = API_V1_PATH + '3d-project'
  return await fetchWithErrorHandling(apiUrl, {
    method: 'POST',
    body: formDataToSend
  })
}
