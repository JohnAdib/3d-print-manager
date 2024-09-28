import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { useSTLLoader } from './useSTLLoader'

interface UseThreeJSProps {
  file: File | null
}

export function useThreeJS(props: UseThreeJSProps) {
  const container = ref<HTMLElement | null>(null)
  // declare initial variables
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let renderer: THREE.WebGLRenderer
  let mesh: THREE.Mesh | null = null
  let animationFrameId: number | null = null

  // Rotation speed variables
  let initialSlowSpeed = 0.001
  const speedOnHover = 0.01
  const defaultSlowSpeed = 0.001
  const isAnimationPaused = ref(false)

  const { loadSTLFile } = useSTLLoader()

  const onWindowResize = () => {
    if (container.value && camera && renderer) {
      camera.aspect = container.value.clientWidth / container.value.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        container.value.clientWidth,
        container.value.clientHeight
      )
    }
  }

  const initThreeJS = () => {
    scene = new THREE.Scene()

    // Light gray color
    scene.background = new THREE.Color(0xf0f0f0)

    // Set up the camera
    const aspectRatio =
      container.value!.clientWidth / container.value!.clientHeight
    camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000)
    camera.position.set(0, 0, 100)

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true })

    // Set the renderer to match the container size
    renderer.setSize(
      container.value!.clientWidth,
      container.value!.clientHeight
    )
    container.value!.appendChild(renderer.domElement)

    // Add ambient light and directional light
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 1, 1).normalize()
    scene.add(directionalLight)

    // Listen for window resize events
    window.addEventListener('resize', onWindowResize)

    renderScene()
  }

  const renderScene = () => {
    renderer.render(scene, camera)
    if (mesh && !isAnimationPaused.value) {
      // Rotate the object at the defined speed
      mesh.rotation.x += initialSlowSpeed
      mesh.rotation.y += initialSlowSpeed
    }
    animationFrameId = requestAnimationFrame(renderScene)
  }

  // Start faster rotation on hover
  const startRotation = () => {
    initialSlowSpeed = speedOnHover
  }

  // Slow down rotation when hover ends
  const stopRotation = () => {
    initialSlowSpeed = defaultSlowSpeed
  }

  // Toggle animation on click and reset rotation if paused
  const toggleAnimation = () => {
    isAnimationPaused.value = !isAnimationPaused.value
    if (isAnimationPaused.value && mesh) {
      // Reset the rotation to the initial state
      mesh.rotation.set(0, 0, 0)
    }
  }

  const handleSTLFileLoaded = (loadedMesh: THREE.Mesh) => {
    if (mesh) {
      scene.remove(mesh)
    }
    mesh = loadedMesh
    scene.add(mesh)
    renderScene()
  }

  watch(
    () => props.file,
    () => {
      if (props.file) {
        // Delegate STL loading to the composable
        loadSTLFile(props.file, handleSTLFileLoaded)
      }
    }
  )

  onMounted(() => {
    initThreeJS()
    if (props.file) {
      loadSTLFile(props.file, handleSTLFileLoaded)
    }
  })

  onBeforeUnmount(() => {
    if (renderer) {
      renderer.dispose()
      scene.clear()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
    // Clean up resize event listener
    window.removeEventListener('resize', onWindowResize)
  })

  return {
    container,
    isAnimationPaused,
    startRotation,
    stopRotation,
    toggleAnimation
  }
}
