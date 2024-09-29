import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import byteSize from 'byte-size'
import { validateFileSize } from '@/utils/validate/file-size'
import { validateFileExtension } from '@/utils/validate/file-extension'
import type { IUploadedFile } from '@/interfaces/i-uploaded-file'

export const useFileStore = defineStore('fileStore', {
  state: () => ({
    files: [] as IUploadedFile[],
    sessionId: uuidv4()
  }),

  getters: {
    totalFiles: (state) => {
      return state.files.length
    }
  },

  actions: {
    addFile(file: File) {
      if (!validateFileSize(file)) {
        return
      }

      if (!validateFileExtension(file)) {
        return
      }

      const fileSizeObj = byteSize(file.size)

      const newFile: IUploadedFile = {
        file,
        name: file.name,
        size: fileSizeObj.toString(),
        uploadAt: new Date(),
        id: `${file.name}-${Date.now()}`
      }

      this.files.push(newFile)
    },

    addFiles(files: File[]) {
      files.forEach((file) => {
        this.addFile(file)
      })
    },

    removeFile(id: string) {
      this.files = this.files.filter((item) => item.id !== id)
    },

    clearFiles() {
      this.files = []
    }
  }
})
