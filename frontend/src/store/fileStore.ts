import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import byteSize from 'byte-size'
import { FILE_SIZE_LIMIT } from '@/config/constants'

export interface FileItem {
  id: string
  file: File
  name: string
  size: string
  uploadAt: Date
}

export const useFileStore = defineStore('fileStore', {
  state: () => ({
    files: [] as FileItem[],
    sessionId: uuidv4()
  }),

  getters: {
    totalFiles: (state) => {
      return state.files.length
    }
  },

  actions: {
    addFile(file: File) {
      const maxSizeMB: number = FILE_SIZE_LIMIT
      const fileSizeMB: number = file.size / 1024 / 1024
      const fileSizeMBRounded: number = Math.round(fileSizeMB * 100) / 100

      if (fileSizeMB > maxSizeMB) {
        Swal.fire({
          title: 'Error - File Size Exceeded',
          text: `File "${file.name}" exceeds the size limit of ${maxSizeMB}MB. The file size is ${fileSizeMBRounded}MB.`,
          icon: 'error',
          confirmButtonText: 'OK'
        })
        return
      }

      const fileExtension = file.name.split('.').pop()?.toLowerCase()
      if (fileExtension !== 'stl') {
        Swal.fire({
          title: 'Error - File Type Not Supported',
          text: `File "${file.name}" is not supported. We only support .STL files. You uploaded a "${fileExtension}" file.`,
          icon: 'error',
          confirmButtonText: 'OK'
        })
        return
      }
      const fileSizeObj = byteSize(file.size)

      const newFile: FileItem = {
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
