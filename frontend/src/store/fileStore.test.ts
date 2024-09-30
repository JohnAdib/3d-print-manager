import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFileStore } from './fileStore'
import byteSize from 'byte-size'
import { validateFileSize } from '@/utils/validate/file-size'
import { validateFileExtension } from '@/utils/validate/file-extension'

vi.mock('@/utils/validate/file-size', () => ({
  validateFileSize: vi.fn()
}))

vi.mock('@/utils/validate/file-extension', () => ({
  validateFileExtension: vi.fn()
}))

vi.mock('byte-size', () => ({
  default: vi.fn(() => ({ toString: () => '1 KB' }))
}))

describe('File Store', () => {
  let fileStore: ReturnType<typeof useFileStore>

  const mockFile = new File(['content'], 'test.txt', {
    type: 'text/plain'
  })

  beforeEach(() => {
    // Setup Pinia and store
    setActivePinia(createPinia())
    fileStore = useFileStore()

    // Reset mocks before each test
    vi.clearAllMocks()
  })

  it('should start with no files', () => {
    expect(fileStore.files).toEqual([])
    expect(fileStore.totalFiles).toBe(0)
  })

  it('should add a file when validations pass', () => {
    ;(validateFileSize as Mock).mockReturnValue(true)
    ;(validateFileExtension as Mock).mockReturnValue(true)

    fileStore.addFile(mockFile)

    expect(validateFileSize).toHaveBeenCalledWith(mockFile)
    expect(validateFileExtension).toHaveBeenCalledWith(mockFile)
    expect(byteSize).toHaveBeenCalledWith(mockFile.size)
    expect(fileStore.files).toHaveLength(1)
    expect(fileStore.files[0].name).toBe('test.txt')
    expect(fileStore.files[0].size).toBe('1 KB')
    expect(fileStore.files[0].id).toMatch(/^test.txt-\d+$/)
  })

  it('should not add a file if file size validation fails', () => {
    ;(validateFileSize as Mock).mockReturnValue(false)

    fileStore.addFile(mockFile)

    expect(validateFileSize).toHaveBeenCalledWith(mockFile)
    expect(validateFileExtension).not.toHaveBeenCalled()
    expect(fileStore.files).toHaveLength(0)
  })

  it('should not add a file if file extension validation fails', () => {
    ;(validateFileSize as Mock).mockReturnValue(true)
    ;(validateFileExtension as Mock).mockReturnValue(false)

    fileStore.addFile(mockFile)

    expect(validateFileSize).toHaveBeenCalledWith(mockFile)
    expect(validateFileExtension).toHaveBeenCalledWith(mockFile)
    expect(fileStore.files).toHaveLength(0)
  })

  it('should remove a file by ID', () => {
    ;(validateFileSize as Mock).mockReturnValue(true)
    ;(validateFileExtension as Mock).mockReturnValue(true)

    fileStore.addFile(mockFile)

    const fileId = fileStore.files[0].id
    fileStore.removeFile(fileId)

    expect(fileStore.files).toHaveLength(0)
  })

  it('should clear all files', () => {
    ;(validateFileSize as Mock).mockReturnValue(true)
    ;(validateFileExtension as Mock).mockReturnValue(true)

    fileStore.addFile(mockFile)
    fileStore.addFile(mockFile)

    expect(fileStore.files).toHaveLength(2)

    fileStore.clearFiles()

    expect(fileStore.files).toHaveLength(0)
  })

  it('should add multiple files using addFiles', () => {
    ;(validateFileSize as Mock).mockReturnValue(true)
    ;(validateFileExtension as Mock).mockReturnValue(true)

    const files = [mockFile, mockFile]

    fileStore.addFiles(files)

    expect(fileStore.files).toHaveLength(2)
  })
})
