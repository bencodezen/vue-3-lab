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
  <div>
    <h1>Space Game</h1>
    <p><b>Game Status:</b> {{ gameStatus }}</p>
    <div class="game-stage">
      <div
        class="panel"
        :class="gameStatus === 'Game Started' ? 'is-hidden' : ''"
      >
        <button class="panel-button" @click="startGame">Start Game</button>
      </div>
    </div>
  </div>
</template>

<style>
.game-stage {
  border: 5px solid black;
  height: 500px;
}

.panel {
  border: 2px solid black;
  width: 200px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transform: translateY(100%);
  opacity: 1;
  transition: transform 0.5s ease-in, opacity 0.5s ease-in;
}

.panel.is-hidden {
  transform: translateY(140%);
  opacity: 0;
}

.panel-button {
  border-radius: 50%;
  width: 75px;
  height: 75px;
}
</style>
