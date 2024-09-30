import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FormComponent from './SubmitProjectForm.vue'
import { useProjectSubmission } from '@/composables/useProjectSubmission'
import { useDrawerStore } from '@/store/drawerStore'

// Mock composables
vi.mock('@/composables/useProjectSubmission', () => ({
  useProjectSubmission: vi.fn(() => ({
    handleSaveProject: vi.fn()
  }))
}))

// Mock drawer store
vi.mock('@/store/drawerStore', () => ({
  useDrawerStore: vi.fn(() => ({
    closeDrawer: vi.fn()
  }))
}))

describe('FormComponent.vue', () => {
  it('renders the form correctly', () => {
    const wrapper = mount(FormComponent)

    // Check if the form fields are rendered
    expect(wrapper.find('input[name="name"]').exists()).toBe(true)
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('input[name="project-name"]').exists()).toBe(true)
    expect(wrapper.find('textarea[name="description"]').exists()).toBe(true)

    // Check if buttons are rendered
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
    expect(wrapper.find('button[type="button"]').text()).toBe('Cancel')
  })

  it('updates form data with v-model correctly', async () => {
    const wrapper = mount(FormComponent)

    const nameInput = wrapper.find('input[name="name"]')
    const emailInput = wrapper.find('input[name="email"]')
    const projectInput = wrapper.find('input[name="project-name"]')
    const descriptionInput = wrapper.find('textarea[name="description"]')

    // Simulate user input
    await nameInput.setValue('John Doe')
    await emailInput.setValue('john.doe@example.com')
    await projectInput.setValue('Awesome Project')
    await descriptionInput.setValue('This is a description.')

    // Check if the form data is updated
    expect((wrapper.vm as any).formData.name).toBe('John Doe')
    expect((wrapper.vm as any).formData.email).toBe('john.doe@example.com')
    expect((wrapper.vm as any).formData.projectName).toBe('Awesome Project')
    expect((wrapper.vm as any).formData.description).toBe(
      'This is a description.'
    )
  })

  it('calls handleSaveProject on form submit', async () => {
    const handleSaveProjectMock = vi.fn()
    ;(useProjectSubmission as any).mockReturnValue({
      handleSaveProject: handleSaveProjectMock
    })

    const wrapper = mount(FormComponent)

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent')

    // Check if handleSaveProject was called
    expect(handleSaveProjectMock).toHaveBeenCalled()
  })

  it('calls closeDrawer when cancel button is clicked', async () => {
    const closeDrawerMock = vi.fn()
    ;(useDrawerStore as any).mockReturnValue({
      closeDrawer: closeDrawerMock
    })

    const wrapper = mount(FormComponent)

    // Simulate click on cancel button
    await wrapper.find('button[type="button"]').trigger('click')

    // Check if closeDrawer was called
    expect(closeDrawerMock).toHaveBeenCalled()
  })
})
