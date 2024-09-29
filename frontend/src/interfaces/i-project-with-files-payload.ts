import type { IProjectData } from './i-project-data'
import type { IProjectFile } from './i-project-file'

export interface IProjectWithFilesPayload {
  formData: IProjectData
  files: IProjectFile[]
}
