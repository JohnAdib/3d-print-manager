import Swal from 'sweetalert2'

export const validateFileExtension = (
  file: File,
  allowedExtension: string = 'stl'
): boolean => {
  const fileExtension = file.name.split('.').pop()?.toLowerCase()

  if (fileExtension !== allowedExtension) {
    Swal.fire({
      title: 'Error - File Type Not Supported',
      text: `File "${file.name}" is not supported. We only support .STL files. You uploaded a "${fileExtension}" file.`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
    return false
  }
  return true
}
