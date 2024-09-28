<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
  >
    <div class="h-0 flex-1 overflow-y-auto">
      <div class="bg-gray-50 px-4 py-6 sm:px-6">
        <div class="flex items-center justify-between">
          <h2 class="text-base font-semibold leading-6 text-gray-900">
            Submit your project
          </h2>
        </div>
        <div class="mt-1">
          <p class="text-sm text-gray-500">
            Please submit your project by filling in the information below.
          </p>
        </div>
      </div>
      <div class="divide-y divide-gray-200 px-4 sm:px-6">
        <div class="space-y-6 pb-5 pt-6">
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Name</label
            >
            <div class="mt-2">
              <input
                v-model="formData.name"
                type="text"
                name="name"
                autocomplete="name"
                maxlength="50"
                placeholder="What should we call you?"
                id="name"
                class="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email</label
            >
            <div class="mt-2">
              <input
                v-model="formData.email"
                type="email"
                name="email"
                autocomplete="email"
                maxlength="100"
                placeholder="We'll never share your email with anyone else"
                id="email"
                class="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="project-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Project Name</label
            >
            <div class="mt-2">
              <input
                v-model="formData.projectName"
                type="text"
                name="project-name"
                autocomplete="off"
                maxlength="50"
                placeholder="What should we call your project?"
                id="project-name"
                class="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="description"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Notes</label
            >
            <div class="mt-2">
              <textarea
                v-model="formData.description"
                id="description"
                name="description"
                maxlength="1000"
                placeholder="Please provide a any additional information you'd like to share, we'd be sure to read it."
                class="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 min-h-40 max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-shrink-0 justify-end px-4 py-4">
      <button
        type="button"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        @click="$emit('cancel')"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="ml-4 inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { IProjectSubmissionForm } from '@/interfaces'

const emit = defineEmits(['save', 'cancel'])

const formData: IProjectSubmissionForm = reactive({
  name: '',
  email: '',
  projectName: '',
  description: ''
})

const handleSubmit = () => {
  emit('save', formData)
}
</script>
