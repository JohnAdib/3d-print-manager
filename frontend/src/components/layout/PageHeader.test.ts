import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from './PageHeader.vue'
import { useRoute } from 'vue-router'

// Mock useRoute to simulate active routes
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  RouterLink: {
    name: 'RouterLink',
    props: ['to'],
    template: '<a :href="to"><slot /></a>'
  }
}))

describe('Header.vue', () => {
  it('renders the logo and title correctly', () => {
    const wrapper = mount(Header)

    // Check if the logo image is rendered
    const logo = wrapper.find('img[alt="3D Print Manager"]')
    expect(logo.exists()).toBe(true)

    // Check if the title is rendered
    expect(wrapper.text()).toContain('3D Print Manager')
  })

  it('renders navigation links', () => {
    const wrapper = mount(Header)

    // Check if all navigation links are rendered
    const links = wrapper.findAll('a')
    expect(links.length).toBe(4)

    expect(links[0].text()).toBe('3D Print Manager')
    expect(links[1].text()).toBe('Homepage')
    expect(links[2].text()).toBe('Order')
    expect(links[3].text()).toBe('About')
  })

  it('highlights the active link based on the route', () => {
    // Mock the current route to simulate active link
    ;(useRoute as any).mockReturnValue({ path: '/order' })

    const wrapper = mount(Header)

    // The 'Order' link should be highlighted
    const activeLink = wrapper.find('a[href="/order"]')
    expect(activeLink.classes()).toContain('text-sky-600')

    // The 'Homepage' and 'About' links should not be highlighted
    const homepageLink = wrapper.find('a[href="/"]')
    const aboutLink = wrapper.find('a[href="/about"]')
    expect(homepageLink.classes()).not.toContain('text-sky-600')
    expect(aboutLink.classes()).not.toContain('text-sky-600')
  })
})
