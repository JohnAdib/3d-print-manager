// composables/useSubmissionDrawer.ts
import { ref } from 'vue'

export function useSubmissionDrawer() {
  const isSubmissionDrawerOpen = ref(false)

  const openSubmissionDrawer = () => {
    isSubmissionDrawerOpen.value = true
  }

  const closeSubmissionDrawer = () => {
    isSubmissionDrawerOpen.value = false
  }

  return {
    isSubmissionDrawerOpen,
    openSubmissionDrawer,
    closeSubmissionDrawer
  }
}
