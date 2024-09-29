// utils/alerts/showAlert.ts
import Swal, { type SweetAlertOptions } from 'sweetalert2'

interface ShowAlertParams {
  title: string
  text: string
  icon?: SweetAlertOptions['icon']
}

export function showAlert({ title, text, icon = 'error' }: ShowAlertParams) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK'
  })
}
