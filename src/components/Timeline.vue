<script lang="ts">
import { defineComponent, ref } from 'vue'

type Timeframe = 'Today' | 'This Week' | 'This Month'

export default defineComponent({
  setup() {
    const timeframes: Timeframe[] = ['Today', 'This Week', 'This Month']
    const selectedTimeframe = ref<Timeframe>('Today')

    const setTimeframe = (timeframe: Timeframe) => {
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
