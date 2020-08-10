import { ref, onMounted } from 'vue'

export function useWindowWidth() {
  const width = ref(0)

  onMounted(() => {
    width.value = window.innerWidth
  })

  return {
    width
  }
}
