import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FileListComponent from './FilesPreview.vue'
import { useFileStore } from '@/store/fileStore'

// Mock the file store
vi.mock('@/store/fileStore', () => ({
  useFileStore: vi.fn(() => ({
    files: [],
    removeFile: vi.fn()
  }))
}))

describe('FileListComponent.vue', () => {
  it('renders the empty state when no files are uploaded', () => {
    // Mock the store to return an empty array of files
    ;(useFileStore as any).mockReturnValue({
      files: [],
      removeFile: vi.fn()
    })

    const wrapper = mount(FileListComponent)

    // Check if the EmptyState component is rendered
    expect(wrapper.findComponent({ name: 'EmptyState' }).exists()).toBe(true)

    // Check that no file cards are rendered
    expect(wrapper.findAll('.card-preview').length).toBe(0)
  })
})
