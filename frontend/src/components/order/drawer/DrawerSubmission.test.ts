import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Drawer from './DrawerSubmission.vue'
import { useDrawerStore } from '@/store/drawerStore'

// Mock the drawer store
vi.mock('@/store/drawerStore', () => ({
  useDrawerStore: vi.fn(() => ({
    getDrawerStatus: false,
    closeDrawer: vi.fn(),
    openDrawer: vi.fn()
  }))
}))

describe('Drawer.vue', () => {
  it('does not render the drawer when drawerStatus is false', async () => {
    // Mock the drawer store to return false for getDrawerStatus
    ;(useDrawerStore as any).mockReturnValue({
      getDrawerStatus: false,
      closeDrawer: vi.fn(),
      openDrawer: vi.fn()
    })

    const wrapper = mount(Drawer)

    // Check if the drawer content is not rendered
    expect(wrapper.findComponent({ name: 'ProjectForm' }).exists()).toBe(false)
  })
})
