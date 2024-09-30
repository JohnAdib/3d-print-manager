import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from './PageFooter.vue'

describe('Footer.vue', () => {
  it('renders footer text correctly', () => {
    const wrapper = mount(Footer)

    // Check if the main message is rendered
    expect(wrapper.text()).toContain('3D printed parts in as little as 3 days!')

    // Check if the GitHub link is present
    const githubLink = wrapper.find(
      'a[href="https://github.com/JohnAdib/3d-print-manager/"]'
    )
    expect(githubLink.exists()).toBe(true)
    expect(githubLink.text()).toContain('GitHub Source')

    // Check if the resume link is present
    const resumeLink = wrapper.find('a[href="https://resume.mradib.com"]')
    expect(resumeLink.exists()).toBe(true)
    expect(resumeLink.text()).toContain('MrAdib')
  })
})
