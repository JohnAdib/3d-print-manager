import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ThreeDViewer from './FilePreview3D.vue'
import { useThreeJS } from '@/composables/useThreeJS'

// Mock the `useThreeJS` composable
vi.mock('@/composables/useThreeJS', () => ({
  useThreeJS: vi.fn(() => ({
    container: {},
    startRotation: vi.fn(),
    stopRotation: vi.fn(),
    toggleAnimation: vi.fn(),
    isAnimationPaused: true
  }))
}))

describe('ThreeDViewer.vue', () => {
  it('calls startRotation on mouseenter', async () => {
    const startRotationMock = vi.fn()
    ;(useThreeJS as any).mockReturnValue({
      container: {},
      startRotation: startRotationMock,
      stopRotation: vi.fn(),
      toggleAnimation: vi.fn(),
      isAnimationPaused: true
    })

    const wrapper = mount(ThreeDViewer, {
      props: {
        file: null
      }
    })

    // Trigger mouseenter event
    await wrapper.trigger('mouseenter')

    // Check if startRotation was called
    expect(startRotationMock).toHaveBeenCalled()
  })

  it('calls stopRotation on mouseleave', async () => {
    const stopRotationMock = vi.fn()
    ;(useThreeJS as any).mockReturnValue({
      container: {},
      startRotation: vi.fn(),
      stopRotation: stopRotationMock,
      toggleAnimation: vi.fn(),
      isAnimationPaused: true
    })

    const wrapper = mount(ThreeDViewer, {
      props: {
        file: null
      }
    })

    // Trigger mouseleave event
    await wrapper.trigger('mouseleave')

    // Check if stopRotation was called
    expect(stopRotationMock).toHaveBeenCalled()
  })

  it('calls toggleAnimation on click', async () => {
    const toggleAnimationMock = vi.fn()
    ;(useThreeJS as any).mockReturnValue({
      container: {},
      startRotation: vi.fn(),
      stopRotation: vi.fn(),
      toggleAnimation: toggleAnimationMock,
      isAnimationPaused: true
    })

    const wrapper = mount(ThreeDViewer, {
      props: {
        file: null
      }
    })

    // Trigger click event
    await wrapper.trigger('click')

    // Check if toggleAnimation was called
    expect(toggleAnimationMock).toHaveBeenCalled()
  })
})
