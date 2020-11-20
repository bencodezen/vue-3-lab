<script>
import { reactive, toRefs } from 'vue'
import MiniGame from '../components/MiniGame'
import MiniGame2 from '../components/MiniGame2'
import MiniGame3 from '../components/MiniGame3'

export default {
  components: {
    MiniGame,
    MiniGame2,
    MiniGame3
  },
  setup() {
    const state = reactive({
      gameStatus: 'Not Started'
    })

    const user = reactive({
      miniGamesWon: 0
    })

    const startGame = () => {
      state.gameStatus = 'Game Started'
    }

    const updateUserMiniGame = () => {
      user.miniGamesWon++
    }

    return {
      ...toRefs(state),
      ...toRefs(user),
      updateUserMiniGame,
      startGame
    }
  }
}
</script>

<template>
  <div>
    <!-- <h1>Space Game</h1>
    <h2>Game Status</h2>
    <p>{{ gameStatus }}</p>
    <h2>User Properties</h2> -->
    <p>Mini-Games Won: {{ miniGamesWon }}</p>
    <div class="game-stage">
      <div class="mini-game-wrapper">
        <MiniGame v-if="false" @mini-game-won="updateUserMiniGame" />
        <MiniGame2 v-if="false" @mini-game-won="updateUserMiniGame" />
        <MiniGame3 @mini-game-won="updateUserMiniGame" />
      </div>
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
.mini-game-wrapper {
  display: flex;
}

.game-stage {
  border: 5px solid black;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  position: absolute;
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
