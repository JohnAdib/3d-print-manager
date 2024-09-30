import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from './PageHeader.vue'
import { useFileStore } from '@/store/fileStore'

// Mock the stores
vi.mock('@/store/fileStore', () => ({
  useFileStore: vi.fn(() => ({
    files: []
  }))
}))

vi.mock('@/store/drawerStore', () => ({
  useDrawerStore: vi.fn(() => ({
    openDrawer: vi.fn()
  }))
}))

describe('PageHeader.vue', () => {
  it('renders the correct message when no files are uploaded', () => {
    // Mock the store to return an empty array of files
    ;(useFileStore as any).mockReturnValue({
      files: []
    })

    const wrapper = mount(PageHeader)

    // Check if the no-files message is rendered
    expect(wrapper.text()).toContain(
      'Ready to place an order? Just upload your files and we will take care of the rest.'
    )

    // Check that the "Submit Order" button is not rendered
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('renders the correct message and button when files are uploaded', () => {
    // Mock the store to return files
    ;(useFileStore as any).mockReturnValue({
      files: [{ name: 'file1.stl' }]
    })

    const wrapper = mount(PageHeader)

    // Check if the files-uploaded message is rendered
    expect(wrapper.text()).toContain('If all looks good, submit your order!')

    // Check if the "Submit Order" button is rendered
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('Submit Order')
  })
})
