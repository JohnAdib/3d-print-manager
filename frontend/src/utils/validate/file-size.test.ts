import { describe, it, expect } from 'vitest'
import { validateFileSize } from './file-size'
import { FILE_SIZE_LIMIT } from '@/config/constants'

describe('validateFileSize', () => {
  const mockFile = (size: number) =>
    ({
      name: 'testfile.stl',
      size,
      type: 'application/octet-stream'
    }) as File

  it('should return true for a file within the size limit', () => {
    const file = mockFile(FILE_SIZE_LIMIT * 1024 * 1024 - 1) // Just below the limit
    const result = validateFileSize(file)
    expect(result).toBe(true)
  })

  it('should return false for a file exceeding the size limit', () => {
    const file = mockFile(FILE_SIZE_LIMIT * 1024 * 1024 + 1) // Just above the limit
    const result = validateFileSize(file)
    expect(result).toBe(false)
  })

  it('should return true for a file exactly at the size limit', () => {
    const file = mockFile(FILE_SIZE_LIMIT * 1024 * 1024) // Exactly at the limit
    const result = validateFileSize(file)
    expect(result).toBe(true)
  })

  it('should handle small files far below the size limit', () => {
    const file = mockFile(1024) // Very small file (1KB)
    const result = validateFileSize(file)
    expect(result).toBe(true)
  })

  it('should return false for large files exceeding the limit', () => {
    const file = mockFile(FILE_SIZE_LIMIT * 2 * 1024 * 1024) // Twice the size limit
    const result = validateFileSize(file)
    expect(result).toBe(false)
  })

  it('should use the provided maxSizeMB instead of the default', () => {
    const customLimit = 5 // Custom limit of 5 MB
    const file = mockFile(6 * 1024 * 1024) // 6 MB file
    const result = validateFileSize(file, customLimit)
    expect(result).toBe(false)
  })

  it('should return true for a file under a custom maxSizeMB', () => {
    const customLimit = 5 // Custom limit of 5 MB
    const file = mockFile(4 * 1024 * 1024) // 4 MB file
    const result = validateFileSize(file, customLimit)
    expect(result).toBe(true)
  })
})
