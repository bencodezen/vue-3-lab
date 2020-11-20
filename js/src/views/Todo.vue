<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      list: [1, 2, 3]
    })
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item">
      <p>{{ item }}</p>
      <input type="text" v-model="item" />
    </li>
  </ul>
</template>

<style></style>
