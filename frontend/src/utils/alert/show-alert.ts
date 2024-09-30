import Swal, { type SweetAlertOptions } from 'sweetalert2'

interface ShowAlertParams {
  title: string
  text: string
  icon?: SweetAlertOptions['icon']
  footer?: string
}

export function showAlert({
  title,
  text,
  footer,
  icon = 'error'
}: ShowAlertParams) {
  Swal.fire({
    title,
    text,
    icon,
    footer,
    confirmButtonText: 'OK'
  })
}
