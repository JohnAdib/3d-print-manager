import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useProjectSubmission } from './useProjectSubmission'
import { useFileStore } from '@/store/fileStore'
import { sendProjectWithFiles } from '@/utils/server/send-project-with-files'
import { showAlert } from '@/utils/alert/show-alert'
import { useDrawerStore } from '@/store/drawerStore'

// Mock external dependencies
vi.mock('@/store/fileStore', () => ({
  useFileStore: () => ({
    files: [],
    clearFiles: vi.fn()
  })
}))

vi.mock('@/store/drawerStore', () => ({
  useDrawerStore: () => ({
    closeDrawer: vi.fn()
  })
}))

vi.mock('@/utils/server/send-project-with-files', () => ({
  sendProjectWithFiles: vi.fn()
}))

vi.mock('@/utils/alert/show-alert', () => ({
  showAlert: vi.fn()
}))

describe('useProjectSubmission', () => {
  let fileStore: ReturnType<typeof useFileStore>
  let drawerStore: ReturnType<typeof useDrawerStore>

  beforeEach(() => {
    fileStore = useFileStore()
    drawerStore = useDrawerStore()

    vi.clearAllMocks()
  })

  it('should set isSaving to true when saving and then false after saving', async () => {
    const { handleSaveProject, isSaving } = useProjectSubmission()

    sendProjectWithFiles.mockResolvedValueOnce({
      result: { dataPath: 'some/path' },
      msg: 'Project submitted successfully'
    })

    const projectData = { title: 'Test Project' }

    const savePromise = handleSaveProject(projectData as any)

    expect(isSaving.value).toBe(true) // isSaving should be true when saving starts

    await savePromise

    expect(isSaving.value).toBe(false) // isSaving should be false when saving ends
  })

  it('should call sendProjectWithFiles with project data and files', async () => {
    const { handleSaveProject } = useProjectSubmission()
    const projectData = { title: 'Test Project' }

    sendProjectWithFiles.mockResolvedValueOnce({
      result: { dataPath: 'some/path' },
      msg: 'Project submitted successfully'
    })

    await handleSaveProject(projectData as any)

    expect(sendProjectWithFiles).toHaveBeenCalledWith({
      projectData,
      projectFiles: fileStore.files
    })
  })
})
