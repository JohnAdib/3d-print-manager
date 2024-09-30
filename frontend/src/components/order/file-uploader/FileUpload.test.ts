import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FileUpload from '@/components/order/file-uploader/FileUpload.vue'

// Mock the store and composables
vi.mock('@/store/fileStore', () => ({
  useFileStore: vi.fn(() => ({
    totalFiles: 0,
    addFiles: vi.fn()
  }))
}))

vi.mock('@/composables/useDragAndDrop', () => ({
  useDragAndDrop: vi.fn(() => ({
    dragging: false
  }))
}))

describe('FileUpload.vue', () => {
  it('renders the upload area', () => {
    const wrapper = mount(FileUpload)

    // Check if the main text "Upload a .STL file" is rendered
    expect(wrapper.text()).toContain('Upload a .STL file')

    // Check if the file input is rendered
    const fileInput = wrapper.find('input[type="file"]')
    expect(fileInput.exists()).toBe(true)
  })
})
