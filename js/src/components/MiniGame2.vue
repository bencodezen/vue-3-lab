<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      gameStatus: 'In Progress',
      userSequence: []
    })

    const colorOptions = ['red', 'blue', 'green']

    const addColorToSequence = color => {
      state.userSequence.push(color)
    }

    return {
      ...toRefs(state),
      addColorToSequence,
      colorOptions
    }
  }
})
</script>

<template>
  <section class="mini-game">
    <h1>MiniGame 2</h1>
    <p>{{ gameStatus }}</p>
    <p>User Sequence: {{ userSequence }}</p>
    <div class="color-swatch-wrapper">
      <button
        v-for="(color, index) in colorOptions"
        :key="`color-${index}`"
        class="color-swatch"
        :style="`background-color: ${color};`"
        @click="addColorToSequence(color)"
      >
        {{ color }}
      </button>
    </div>
  </section>
</template>

<style>
.mini-game {
  border: 2px solid rgb(14, 162, 162);
  padding: 2rem;
  width: 200px;
  position: relative;
}

.color-swatch-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}

.color-swatch {
  padding: 1rem;
  color: white;
  font-weight: bold;
  border: 0;
}
</style>
