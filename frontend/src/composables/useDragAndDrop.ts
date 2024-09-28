import { ref, onMounted, onUnmounted } from 'vue'

interface UseDragAndDropParams {
  handleDropEvent: (files: File[]) => void
}

export function useDragAndDrop({ handleDropEvent }: UseDragAndDropParams) {
  const dragging = ref(false)

  const onDrop = (event: DragEvent) => {
    event.preventDefault()
    dragging.value = false

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(event.dataTransfer.files)
      handleDropEvent(droppedFiles)
    }
  }

  const onDragOver = (event: DragEvent) => {
    event.preventDefault()
    dragging.value = true
  }

  const onDragLeave = () => {
    dragging.value = false
  }

  onMounted(() => {
    window.addEventListener('dragover', onDragOver)
    window.addEventListener('dragleave', onDragLeave)
    window.addEventListener('drop', onDrop)
  })

  onUnmounted(() => {
    window.removeEventListener('dragover', onDragOver)
    window.removeEventListener('dragleave', onDragLeave)
    window.removeEventListener('drop', onDrop)
  })

  return {
    dragging
  }
}
