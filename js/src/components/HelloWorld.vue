<template>
  <div class="hello">
    <p>{{ width }}</p>
    <button @click="reportWidth">Show Width in Alert Box</button>
    <p>{{ widthDoubled }}</p>
    <h2>Inject</h2>
    <p>Book: {{ book }}</p>
    <button @click="changeName('New Book')">Change Book Name</button>
  </div>
</template>

<script>
import { useWindowWidth } from '../features/useWidth'
import { inject } from 'vue'

export default {
  setup() {
    const { width } = useWindowWidth()
    const book = inject('book')
    const changeBookName = inject('changeBookName')

    return {
      width,
      book,
      changeBookName
    }
  },
  computed: {
    widthDoubled() {
      return this.width * 2
    }
  },
  methods: {
    changeName(title) {
      this.book.title = title
    },
    reportWidth() {
      alert(this.width)
    }
  }
}
</script>
