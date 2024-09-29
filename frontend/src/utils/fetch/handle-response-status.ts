import { showAlert } from '../alert/show-alert'

interface HandleResponseStatusParams {
  response: Response
  url: string
}

export function handleResponseStatus({
  response,
  url
}: HandleResponseStatusParams) {
  let title = 'Error'
  let text = 'An unknown error occurred. Please try again later!'

  switch (response.status) {
    case 404:
      title = 'Oops! Not Found! (404)'
      text = `The requested resource was not found. Check the URL: ${url} or the server might be down!`
      break

    case 422:
      title = '422 Unprocessable Entity'
      text =
        'The server cannot process the request. Check the form data for invalid inputs!'
      break

    default:
      console.error('Unknown error, status code:', response.status)
      text = response.statusText || 'An unknown error occurred.'
      break
  }

  showAlert({ title, text })

  throw new Error(text)
}
