<template>
  <div class="submit-button mt-6">
    <button
      @click="submitFiles"
      class="bg-emerald-600 text-white px-4 py-2 rounded-md"
    >
      Submit Files
    </button>
  </div>
</template>

<script setup type="ts">
import { defineEmits } from 'vue'

const props = defineProps({
  files: Array
})

const emits = defineEmits(['submit'])

const submitFiles = () => {
  emits('submit', props.files) // Emit files for submission to parent
}
</script>
