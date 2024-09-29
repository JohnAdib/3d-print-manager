import type { IProjectSubmissionForm } from './i-project-submission-form'
import type { IUploadedFile } from './i-uploaded-file'

export interface IProjectWithFilesPayload {
  formData: IProjectSubmissionForm
  files: IUploadedFile[]
}
