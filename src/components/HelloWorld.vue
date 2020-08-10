<template>
  <div class="hello">
    <p>{{ width }}</p>
    <button @click="reportWidth">Show Width in Alert Box</button>
    <p>{{ widthDoubled }}</p>
  </div>
</template>

<script>
import { useWindowWidth } from '../features/useWidth'

export default {
  setup() {
    const { width } = useWindowWidth()

    return {
      width
    }
  },
  computed: {
    widthDoubled() {
      return this.width * 2
    }
  },
  methods: {
    reportWidth() {
      alert(this.width)
    }
  }
}
</script>
