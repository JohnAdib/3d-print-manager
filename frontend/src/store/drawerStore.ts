import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawerStore', {
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
})
