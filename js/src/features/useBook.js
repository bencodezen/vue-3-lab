import { reactive } from 'vue'

// in provider
export const useBook = () => {
  const book = reactive({
    title: 'Vue 3 Guide',
    author: 'Vue Team'
  })

  function changeBookName(customName, $event) {
    console.log(customName)
    console.log($event)
    book.title = customName || 'Vue 3 Advanced Guide'
  }

  return {
    book,
    changeBookName
  }
}
