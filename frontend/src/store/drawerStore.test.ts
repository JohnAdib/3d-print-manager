import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useDrawerStore } from './drawerStore'

describe('Drawer Store', () => {
  let store: ReturnType<typeof useDrawerStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useDrawerStore()
  })

  it('should initialize with the drawer closed', () => {
    expect(store.isDrawerOpen).toBe(false)
  })

  it('should open the drawer', () => {
    store.openDrawer()
    expect(store.isDrawerOpen).toBe(true)
  })

  it('should close the drawer', () => {
    store.openDrawer()
    expect(store.isDrawerOpen).toBe(true)

    store.closeDrawer()
    expect(store.isDrawerOpen).toBe(false)
  })

  it('should get the drawer status via getter', () => {
    store.openDrawer()
    expect(store.getDrawerStatus).toBe(true)

    store.closeDrawer()
    expect(store.getDrawerStatus).toBe(false)
  })
})
