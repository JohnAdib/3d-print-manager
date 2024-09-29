<template>
  <TransitionRoot as="template" :show="drawerStatus">
    <Dialog class="relative z-10" @close="drawerStore.closeDrawer">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div
          class="absolute inset-0 overflow-hidden bg-gray-400 bg-opacity-75 transition"
        >
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <ProjectForm
                  @cancel="drawerStore.closeDrawer"
                  @save="drawerStore.openDrawer"
                />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import ProjectForm from './SubmitProjectForm.vue'
import { computed } from 'vue'
import { useProjectSubmissionDrawer } from '@/store/useProjectSubmissionDrawer'

const drawerStore = useProjectSubmissionDrawer()
const drawerStatus = computed(() => drawerStore.getDrawerStatus)
</script>
