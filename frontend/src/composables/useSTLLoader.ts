import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import * as THREE from 'three'

export function useSTLLoader() {
  const loader = new STLLoader()

  // Function to center and scale the geometry of the STL file
  const centerAndScaleObject = (geometry: THREE.BufferGeometry) => {
    geometry.computeBoundingBox()
    const center = new THREE.Vector3()
    geometry.boundingBox!.getCenter(center)
    geometry.center()

    // Scale the object to fit within a 50x50x50 box
    const size = geometry.boundingBox!.getSize(new THREE.Vector3())
    const maxAxis = Math.max(size.x, size.y, size.z)
    const scaleFactor = 50 / maxAxis
    geometry.scale(scaleFactor, scaleFactor, scaleFactor)
  }

  // Function to load an STL file and return the geometry
  const loadSTLFile = (file: File, callback: (mesh: THREE.Mesh) => void) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const arrayBuffer = event.target!.result as ArrayBuffer
      const geometry = loader.parse(arrayBuffer)

      centerAndScaleObject(geometry)

      // Use a uniform dark gray material
      const material = new THREE.MeshStandardMaterial({
        // Dark gray color
        color: 0xbbdefb,
        metalness: 0.1,
        roughness: 0.7
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Call the callback to return the loaded mesh
      callback(mesh)
    }
    reader.readAsArrayBuffer(file)
  }

  return {
    loadSTLFile
  }
}
