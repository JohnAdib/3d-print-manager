import Swal from 'sweetalert2'
import { FILE_SIZE_LIMIT } from '@/config/constants'

export const validateFileSize = (
  file: File,
  maxSizeMB: number = FILE_SIZE_LIMIT
): boolean => {
  const fileSizeMB: number = file.size / 1024 / 1024
  const fileSizeMBRounded: number = Math.round(fileSizeMB * 100) / 100

  if (fileSizeMB > maxSizeMB) {
    Swal.fire({
      title: 'Error - File Size Exceeded',
      text: `File "${file.name}" exceeds the size limit of ${maxSizeMB}MB. The file size is ${fileSizeMBRounded}MB.`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
    return false
  }
  return true
}
