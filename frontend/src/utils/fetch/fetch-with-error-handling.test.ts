import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchWithErrorHandling } from './fetch-with-error-handling'
import { handleResponseStatus } from './handle-response-status'

// Mock fetch and handleResponseStatus
vi.mock('./handle-response-status', () => ({
  handleResponseStatus: vi.fn()
}))

describe('fetchWithErrorHandling', () => {
  const mockUrl = 'http://example.com'
  const mockOptions: RequestInit = { method: 'GET' }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return JSON if response is ok', async () => {
    const mockData = { key: 'value' }

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      } as Response)
    )

    const result = await fetchWithErrorHandling(mockUrl, mockOptions)

    expect(result).toEqual(mockData)
    expect(fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
    expect(handleResponseStatus).not.toHaveBeenCalled()
  })

  it('should call handleResponseStatus and throw error if response is not ok', async () => {
    const mockErrorResponse = {
      message: 'Not Found'
    }

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve(mockErrorResponse),
        statusText: 'Not Found'
      } as Response)
    )

    await expect(fetchWithErrorHandling(mockUrl, mockOptions)).rejects.toThrow(
      'Not Found'
    )
    expect(fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
    expect(handleResponseStatus).toHaveBeenCalledWith({
      response: expect.anything(),
      url: mockUrl
    })
  })

  it('should handle error during JSON parsing and throw default error', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.reject(new Error('Failed to parse JSON')),
        statusText: 'Internal Server Error'
      } as Response)
    )

    await expect(fetchWithErrorHandling(mockUrl, mockOptions)).rejects.toThrow(
      'Internal Server Error'
    )
    expect(fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
    expect(handleResponseStatus).toHaveBeenCalledWith({
      response: expect.anything(),
      url: mockUrl
    })
  })

  it('should throw an unknown error when an exception occurs', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network error')))

    await expect(fetchWithErrorHandling(mockUrl, mockOptions)).rejects.toThrow(
      'Network error'
    )
    expect(fetch).toHaveBeenCalledWith(mockUrl, mockOptions)
    expect(handleResponseStatus).not.toHaveBeenCalled()
  })
})
