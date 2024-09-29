import Swal, { type SweetAlertOptions } from 'sweetalert2'

export async function fetchWithErrorHandling(
  url: string,
  options: RequestInit
) {
  const alertObj: SweetAlertOptions = {
    title: 'Error',
    text: 'An unknown error occurred. Please try again later!',
    icon: 'error',
    confirmButtonText: 'OK'
  }

  try {
    const response = await fetch(url, options)

    if (response.ok) {
      return await response.json()
    }

    const errorData = await response.json().catch(() => null)
    const message = errorData?.message || response.statusText

    switch (response.status) {
      case 404:
        alertObj.title = 'Oops! Not Found! 404'
        alertObj.text =
          'It means the requested resource was not found, check the URL or maybe the server is down! ' +
          url
        Swal.fire(alertObj)
        return

      case 422:
        alertObj.title = '422 Unprocessable Entity'
        alertObj.text =
          'The server cannot process the request, check the form data! it may be invalid!'
        return

      default:
        console.error('Unknown error, status code:', response.status)
        break
    }

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

    Swal.fire(alertObj)

    throw new Error(errorMessage)
  }
}
