import { fetchWithErrorHandling } from './fetch-with-error-handling'

export async function uploadFiles(projectId: string, files: File[]) {
  const formData = new FormData()

  files.forEach((file) => {
    formData.append('files[]', file)
  })

  return await fetchWithErrorHandling(
    `/api/projects/${projectId}/upload-files`,
    {
      method: 'POST',
      body: formData
    }
  )
}
