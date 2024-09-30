import { describe, it, expect, vi, type Mock } from 'vitest'
import { sendProjectWithFiles } from './send-project-with-files'
import { fetchWithErrorHandling } from '../fetch/fetch-with-error-handling'
import { API_V1_PATH } from '@/config/constants'

// Mock fetchWithErrorHandling
vi.mock('../fetch/fetch-with-error-handling', () => ({
  fetchWithErrorHandling: vi.fn()
}))

describe('sendProjectWithFiles', () => {
  const mockProjectData = {
    name: 'Test Project',
    description: 'This is a test project'
  }

  const mockProjectFiles = [
    { file: new File(['file content'], 'testfile1.txt') },
    { file: new File(['file content'], 'testfile2.txt') }
  ]

  const mockPayload = {
    projectData: mockProjectData,
    projectFiles: mockProjectFiles
  }

  it('should send project data and files using FormData', async () => {
    // Mock response from fetchWithErrorHandling
    const mockResponse = { success: true }
    ;(fetchWithErrorHandling as Mock).mockResolvedValue(mockResponse)

    const result = await sendProjectWithFiles(mockPayload as any)

    // Assert that fetchWithErrorHandling was called with the correct API URL and form data
    expect(fetchWithErrorHandling).toHaveBeenCalledWith(
      API_V1_PATH + 'project-3d',
      {
        method: 'POST',
        body: expect.any(FormData)
      }
    )

    // Extract the FormData that was passed to fetchWithErrorHandling
    const formData = (fetchWithErrorHandling as Mock).mock.calls[0][1].body

    // Check that formData contains the correct data
    expect(formData.get('name')).toBe(mockProjectData.name)
    expect(formData.get('description')).toBe(mockProjectData.description)

    // Check that files are correctly appended to formData
    const files = formData.getAll('files[]')
    expect(files).toHaveLength(2)
    expect(files[0]).toBe(mockProjectFiles[0].file)
    expect(files[1]).toBe(mockProjectFiles[1].file)

    // Verify that the result is the mock response
    expect(result).toEqual(mockResponse)
  })
})
