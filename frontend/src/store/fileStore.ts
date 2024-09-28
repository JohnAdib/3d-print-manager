import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import byteSize from 'byte-size'
import { FILE_SIZE_LIMIT } from '../config/constants'

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
      console.log('file is ....', file)

      this.files.push(newFile)

      console.log('Session ID:', this.sessionId)
      console.log('File added:', newFile)
      console.log('Current file list:', this.files)
      console.log('Total files:', this.totalFiles)
    },

    addFiles(files: File[]) {
      files.forEach((file) => {
        this.addFile(file)
      })
    },

    removeFile(id: string) {
      console.log('Attempting to remove file with ID:', id)
      this.files = this.files.filter((item) => item.id !== id)
      console.log('File removed. Current file list:', this.files)
    },

    clearFiles() {
      console.log('Clearing all files.')
      this.files = []
      console.log('All files cleared. Current file list:', this.files)
    }
  }
})
