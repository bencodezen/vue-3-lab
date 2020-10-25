<script lang="ts">
import { defineComponent, ref } from 'vue'

type Period = 'Today' | 'This Week' | 'This Month'

export default defineComponent({
  setup() {
    const timeframes: Period[] = ['Today', 'This Week', 'This Month']
    const selectedTimeframe = ref<Period>('Today')

    const setTimeframe = (timeframe: Period) => {
      selectedTimeframe.value = timeframe
    }

    return {
      selectedTimeframe,
      setTimeframe,
      timeframes
    }
  }
})
</script>

<template>
  <nav>
    <h1>{{ selectedTimeframe }}</h1>
    <button
      v-for="(timeframe, index) in timeframes"
      :key="`timeframe-${index}`"
      @click="setTimeframe(timeframe)"
    >
      {{ timeframe }}
    </button>
  </nav>
</template>

<style></style>
