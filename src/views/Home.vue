<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ count }}</p>
    <button @click="incrementCount">Add</button>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      count: 0
    })

    const incrementCount = () => {
      state.count++
    }

    watch(
      () => state.count,
      (currentValue, oldValue) => {
        console.log('current', currentValue)
        console.log('old', oldValue)
      }
    )

    const

    return {
      ...toRefs(state),
      incrementCount
    }
  }
}
</script>
