import { describe, it, expect, vi } from 'vitest'
import { handleResponseStatus } from './handle-response-status'
import { showAlert } from '../alert/show-alert'

// Mock showAlert
vi.mock('../alert/show-alert', () => ({
  showAlert: vi.fn()
}))

describe('handleResponseStatus', () => {
  const mockUrl = 'http://example.com'

  it('should call showAlert with 404 status', () => {
    const response = new Response(null, { status: 404 })

    try {
      handleResponseStatus({ response, url: mockUrl })
    } catch (e) {
      // Expected error thrown
    }

    expect(showAlert).toHaveBeenCalledWith({
      title: 'Oops! Not Found! (404)',
      text: `The requested resource was not found. Check the URL: ${mockUrl} or the server might be down!`
    })
  })

  it('should call showAlert with 422 status', () => {
    const response = new Response(null, { status: 422 })

    try {
      handleResponseStatus({ response, url: mockUrl })
    } catch (e) {
      // Expected error thrown
    }

    expect(showAlert).toHaveBeenCalledWith({
      title: '422 Unprocessable Entity',
      text: 'The server cannot process the request. Check the form data for invalid inputs!'
    })
  })

  it('should call showAlert with unknown status', () => {
    const response = new Response(null, {
      status: 500,
      statusText: 'Internal Server Error'
    })

    try {
      handleResponseStatus({ response, url: mockUrl })
    } catch (e) {
      // Expected error thrown
    }

    expect(showAlert).toHaveBeenCalledWith({
      title: 'Error',
      text: 'Internal Server Error'
    })
  })

  it('should throw an error after showing the alert', () => {
    const response = new Response(null, {
      status: 500,
      statusText: 'Internal Server Error'
    })

    expect(() => {
      handleResponseStatus({ response, url: mockUrl })
    }).toThrow('Internal Server Error')
  })
})
