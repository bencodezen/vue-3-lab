<script>
import { defineComponent, reactive, toRefs, watchEffect } from 'vue'

export default defineComponent({
  setup(props, ctx) {
    const state = reactive({
      gameStatus: 'In Progress',
      userSequence: [],
      trackValidation: [false, false, false]
    })

    const correctSequence = ['blue', 'green', 'red']
    const colorOptions = ['red', 'blue', 'green']

    const addColorToSequence = color => {
      state.userSequence.push(color)
    }

    const checkColorSequence = () => {
      for (let i = 0; i < state.userSequence.length; i++) {
        state.trackValidation[i] = state.userSequence[i] === correctSequence[i]
      }

      if (state.trackValidation.findIndex(item => item === false) === -1) {
        ctx.emit('mini-game-won')
      }

      state.userSequence = []
    }

    const returnToGameStatus = () => {
      ctx.emit('select-minigame', {
        id: ''
      })
    }

    watchEffect(() => {
      if (state.userSequence.length === 3) {
        checkColorSequence()
      }
    })

    return {
      ...toRefs(state),
      addColorToSequence,
      colorOptions,
      returnToGameStatus
    }
  }
})
</script>

<template>
  <section class="mini-game">
    <h1>MiniGame 2</h1>
    <p>{{ trackValidation }}</p>
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
    <button @click="returnToGameStatus">Back to Game Status</button>
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
