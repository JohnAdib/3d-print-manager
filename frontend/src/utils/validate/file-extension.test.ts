import { describe, it, expect } from 'vitest'
import { validateFileExtension } from './file-extension'

describe('validateFileExtension', () => {
  const mockFile = (name: string) =>
    new File(['content'], name, { type: 'application/octet-stream' })

  it('should return true for valid file extension', () => {
    const file = mockFile('test.stl')
    const result = validateFileExtension(file)
    expect(result).toBe(true)
  })

  it('should return false for invalid file extension', () => {
    const file = mockFile('test.txt')
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should handle case-insensitive file extensions', () => {
    const file = mockFile('test.STL')
    const result = validateFileExtension(file)
    expect(result).toBe(true)
  })

  it('should return true for supported custom extension', () => {
    const file = mockFile('test.obj')
    const result = validateFileExtension(file, 'obj')
    expect(result).toBe(true)
  })

  it('should return false for unsupported custom extension', () => {
    const file = mockFile('test.jpg')
    const result = validateFileExtension(file, 'obj')
    expect(result).toBe(false)
  })

  it('should return true for files with multiple dots and correct extension', () => {
    const file = mockFile('test.file.name.stl')
    const result = validateFileExtension(file)
    expect(result).toBe(true)
  })

  it('should return false for files with multiple dots and incorrect extension', () => {
    const file = mockFile('test.file.name.txt')
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should return false for files without extension', () => {
    const file = mockFile('testfile') // No extension
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should return false for files with empty name', () => {
    const file = mockFile('') // Empty name
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should handle files with unusual characters in the name', () => {
    const file = mockFile('test@#$.stl')
    const result = validateFileExtension(file)
    expect(result).toBe(true)
  })

  it('should return false for files with only dots in the name', () => {
    const file = mockFile('...') // File with only dots
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should return true for valid extension with custom extension of multiple characters', () => {
    const file = mockFile('testfile.customext')
    const result = validateFileExtension(file, 'customext')
    expect(result).toBe(true)
  })

  it('should return false for files with valid extension but mismatched custom extension', () => {
    const file = mockFile('testfile.customext')
    const result = validateFileExtension(file, 'obj') // Mismatching custom extension
    expect(result).toBe(false)
  })

  it('should return false for files with dots but no extension', () => {
    const file = mockFile('file.withoutextension.') // Trailing dot but no extension
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should return false for files with dot at the beginning', () => {
    const file = mockFile('.hiddenfile') // No extension, just a hidden file (like in UNIX systems)
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })

  it('should return false for files with very long extensions', () => {
    const file = mockFile('testfile.averylongextensionthatshouldfail')
    const result = validateFileExtension(file)
    expect(result).toBe(false)
  })
})
