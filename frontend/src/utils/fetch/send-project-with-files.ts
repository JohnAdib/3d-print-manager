import type { IProjectWithFilesPayload } from '@/interfaces'
import { fetchWithErrorHandling } from './fetch-with-error-handling'

export async function sendProjectWithFiles({
  formData,
  files
}: IProjectWithFilesPayload) {
  const formDataToSend = new FormData()

  Object.keys(formData).forEach((key) => {
    formDataToSend.append(key, (formData as any)[key])
  })

  files.forEach((uploadedFile) => {
    formDataToSend.append('files[]', uploadedFile.file)
  })

  return await fetchWithErrorHandling('/api/projects-with-files', {
    method: 'POST',
    body: formDataToSend
  })
}
