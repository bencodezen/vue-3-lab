<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      gameStatus: 'Not Started'
    })

    const startGame = () => {
      state.gameStatus = 'Game Started'
    }

    return {
      ...toRefs(state),
      startGame
    }
  }
}
</script>

<template>
  <h1>Space Game</h1>
  <p><b>Game Status:</b> {{ gameStatus }}</p>
  <div class="panel">
    <button class="panel-button" @click="startGame">Start Game</button>
  </div>
</template>

<style>
.panel {
  border: 2px solid black;
  width: 200px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel-button {
  border-radius: 50%;
  width: 75px;
  height: 75px;
}
</style>
