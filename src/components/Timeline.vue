<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const timeframes = ['Today', 'This Week', 'This Month']

    return {
      timeframes
    }
  }
})
</script>

<template>
  <nav>
    <button
      v-for="(timeframe, index) in timeframes"
      :key="`timeframe-${index}`"
    >
      {{ timeframe }}
    </button>
  </nav>
</template>

<style></style>
