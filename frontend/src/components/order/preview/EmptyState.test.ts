import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BenefitsComponent from './EmptyState.vue'

describe('BenefitsComponent.vue', () => {
  it('renders the welcome message', () => {
    const wrapper = mount(BenefitsComponent)

    // Check if the main welcome message is rendered
    expect(wrapper.text()).toContain(
      'Simply drop your files on the page and experience fast, easy, and reliable 3D printing with exceptional precision.'
    )
  })

  it('renders the list of benefits', () => {
    const wrapper = mount(BenefitsComponent)

    const benefitItems = wrapper.findAll('li')

    // Check if the number of list items corresponds to the number of benefits
    expect(benefitItems.length).toBe(5)

    // Check if each benefit item contains the correct title and description
    const benefits = [
      {
        title: 'Fast Turnaround',
        description: 'Get your parts in as little as 3 days.'
      },
      {
        title: 'Complex Geometry',
        description: 'Print intricate designs with ease.'
      },
      {
        title: 'Precision',
        description: 'High accuracy with tolerances of +/- 0.127mm.'
      },
      {
        title: 'Industry Expertise',
        description: 'Trusted by aerospace, automotive, and more.'
      },
      {
        title: 'Wide Material Range',
        description: 'Access top-quality plastic and metal options.'
      }
    ]

    benefitItems.forEach((item, index) => {
      expect(item.text()).toContain(benefits[index].title)
      expect(item.text()).toContain(benefits[index].description)
    })
  })

  it('renders the checkmark icon for each benefit', () => {
    const wrapper = mount(BenefitsComponent)

    // Check if there are 5 checkmark icons, one for each benefit
    const checkIcons = wrapper.findAll('svg')
    expect(checkIcons.length).toBe(5)
  })
})
