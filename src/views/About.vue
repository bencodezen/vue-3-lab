<script>
import useStore from '../features/useStore'

export default {
  setup() {
    const { state } = useStore

    return {
      state
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>About</h1>
    <p>{{ state.count }}</p>
  </div>
</template>

<style></style>
