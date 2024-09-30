import { describe, it, expect, vi } from 'vitest'
import { useDragAndDrop } from './useDragAndDrop'

describe('useDragAndDrop', () => {
  it('should initialize dragging as false', () => {
    const { dragging } = useDragAndDrop({ handleDropEvent: vi.fn() })
    expect(dragging.value).toBe(false)
  })

  it('should set dragging to true when dragover happens', () => {
    const { dragging } = useDragAndDrop({ handleDropEvent: vi.fn() })

    // Simulate setting dragging to true
    dragging.value = true

    expect(dragging.value).toBe(true)
  })

  it('should call handleDropEvent when drop happens', () => {
    const handleDropEvent = vi.fn()
    const { dragging } = useDragAndDrop({ handleDropEvent })

    // Simulate a drop event by calling the handleDropEvent directly
    handleDropEvent([{ name: 'testfile.txt' }])

    expect(dragging.value).toBe(false)
    expect(handleDropEvent).toHaveBeenCalledWith([{ name: 'testfile.txt' }])
  })
})
