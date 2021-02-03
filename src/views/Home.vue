<script>
import useStore from '../features/useStore'

export default {
  setup() {
    const { state, changeCount } = useStore

    console.log(state)

    return {
      state,
      changeCount
    }
  }
}
</script>

<template>
  <h1>Counter</h1>
  <p>{{ state.count }}</p>
  <button @click="changeCount">Change Count</button>
</template>
