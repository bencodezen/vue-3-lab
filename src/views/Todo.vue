<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      list: [1, 2, 3]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item">
      <p>{{ item }}</p>
    </li>
  </ul>
</template>

<style></style>
