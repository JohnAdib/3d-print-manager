import { handleResponseStatus } from './handle-response-status'

export async function fetchWithErrorHandling(
  url: string,
  options: RequestInit
) {
  try {
    const response = await fetch(url, options)

    if (response.ok) {
      return await response.json()
    }

    const errorData = await response.json().catch(() => null)
    const message = errorData?.message || response.statusText

    handleResponseStatus({ response, url })

    throw new Error(message)
  } catch (error: unknown) {
    let errorMessage = 'An unknown error occurred. Please try again later!'

    if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === 'string') {
      errorMessage = error
    } else if (error instanceof Response) {
      errorMessage = `Network error: ${error.statusText || 'Unknown error'}`
    }

    throw new Error(errorMessage)
  }
}
