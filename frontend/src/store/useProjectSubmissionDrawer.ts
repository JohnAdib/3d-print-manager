import { defineStore } from 'pinia'

export const useProjectSubmissionDrawer = defineStore(
  'projectSubmissionDrawer',
  {
    state: () => ({
      isDrawerOpen: false
    }),

    actions: {
      openDrawer() {
        this.isDrawerOpen = true
      },

      closeDrawer() {
        this.isDrawerOpen = false
      }
    },

    getters: {
      getDrawerStatus: (state) => state.isDrawerOpen
    }
  }
)
