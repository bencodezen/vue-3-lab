<script>
import { reactive, toRefs, watch } from 'vue'
import MiniGame from '../components/MiniGame'
import MiniGame2 from '../components/MiniGame2'
import MiniGame3 from '../components/MiniGame3'
import MiniGameStatus from '../components/MiniGameStatus'

export default {
  components: {
    MiniGame,
    MiniGame2,
    MiniGame3,
    MiniGameStatus
  },
  setup() {
    const state = reactive({
      gameStatus: 'Not Started',
      selectedGame: 'Tests'
    })

    const user = reactive({
      miniGamesWon: 0
    })

    watch(
      () => user.miniGamesWon,
      currentValue => {
        if (currentValue === 3) {
          state.gameStatus = 'Player wins!'
        }
      }
    )

    const startGame = () => {
      state.gameStatus = 'Game Started'
    }

    const registerSelection = payload => {
      state.selectedGame = payload.id
    }

    const updateUserMiniGame = () => {
      user.miniGamesWon++
    }

    return {
      ...toRefs(state),
      ...toRefs(user),
      registerSelection,
      updateUserMiniGame,
      startGame
    }
  }
}
</script>

<template>
  <div>
    <h1>Space Game</h1>
    <h2>Game Status</h2>
    <p>{{ gameStatus }}</p>
    <p>Selected Game: {{ selectedGame }}</p>
    <h2>User Properties</h2>
    <p>Mini-Games Won: {{ miniGamesWon }}</p>
    <div class="game-stage">
      <div class="mini-game-wrapper">
        <MiniGame
          v-if="selectedGame === 'mg-enter-password'"
          @mini-game-won="updateUserMiniGame"
          @select-minigame="registerSelection"
        />
        <MiniGame2
          v-else-if="selectedGame === 'mg-sequence-solver'"
          @mini-game-won="updateUserMiniGame"
          @select-minigame="registerSelection"
        />
        <MiniGame3
          v-else-if="selectedGame === 'mg-wire-matcher'"
          @mini-game-won="updateUserMiniGame"
          @select-minigame="registerSelection"
        />
        <MiniGameStatus v-else @select-minigame="registerSelection" />
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
