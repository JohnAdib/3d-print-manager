import { describe, it, expect, vi } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import OrderView from '@/views/OrderView.vue'
import router from '@/router'

// Mocking the components for lazy-loaded routes
vi.mock('@/views/AboutView.vue', () => ({
  default: {
    template: '<div>About Page</div>'
  }
}))

vi.mock('@/views/OrderView.vue', () => ({
  default: {
    template: '<div>Order Page</div>'
  }
}))

describe('Router', () => {
  it('renders HomeView on /', async () => {
    const localRouter = createRouter({
      history: createMemoryHistory(),
      routes: router.options.routes
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [localRouter]
      }
    })

    localRouter.push('/')
    await localRouter.isReady()

    expect(wrapper.html()).toContain('3D')
  })

  it('renders AboutView on /about', async () => {
    const localRouter = createRouter({
      history: createMemoryHistory(),
      routes: router.options.routes
    })

    const wrapper = mount(AboutView, {
      global: {
        plugins: [localRouter]
      }
    })

    localRouter.push('/about')
    await localRouter.isReady()

    expect(wrapper.html()).toContain('About Page')
  })

  it('renders OrderView on /order', async () => {
    const localRouter = createRouter({
      history: createMemoryHistory(),
      routes: router.options.routes
    })

    const wrapper = mount(OrderView, {
      global: {
        plugins: [localRouter]
      }
    })

    localRouter.push('/order')
    await localRouter.isReady()

    expect(wrapper.html()).toContain('Order Page')
  })
})
