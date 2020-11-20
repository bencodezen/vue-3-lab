import { reactive } from 'vue'

export const useMousePosition = () => {
  const mousePosition = reactive({
    x: 0,
    y: 0
  })

  const registerPosition = event => {
    mousePosition.x = event.clientX
    mousePosition.y = event.clientY
  }

  return {
    mousePosition,
    registerPosition
  }
}
