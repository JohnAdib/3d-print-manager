export async function fetchWithErrorHandling(
  url: string,
  options: RequestInit
) {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        errorData.message || 'An error occurred during the request'
      )
    }

    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error // Re-throw the error for the calling function to handle
  }
}
