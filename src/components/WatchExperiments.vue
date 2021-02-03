<template>
  <h1>Count: {{ count }}</h1>
  <button @click="increment">Increment</button>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    const increment = () => {
      state.count++
    }

    watch(
      () => state,
      (cv, ov) => {
        console.log('current', cv)
        console.log('old', ov)
      },
      {
        deep: true
      }
    )

    return {
      ...toRefs(state),
      increment
    }
  }
}
</script>
