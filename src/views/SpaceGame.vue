<script>
/**
 * TODO: Minigames won should be by id and as a generic number, which would prevent users from submitting the same result multiple times
 * TODO: Create a win state for mini-games that disables additional play
 * TODO: Create components to centralize logic and better UI encapsulation
 * TODO: Clean up UI pieces
 */

import { reactive, toRefs, watch } from 'vue'
import MiniGame from '../components/SpaceGame/MiniGame.vue'
import PasswordGame from '../components/SpaceGame/PasswordGame.vue'
import SequenceGame from '../components/SpaceGame/SequenceGame.vue'
import WireGame from '../components/SpaceGame/WireGame.vue'
import { launchConfetti } from '../utils/canvasConfetti'

export default {
  components: {
    MiniGame,
    SequenceGame,
    WireGame,
    PasswordGame
  },
  data: () => ({
    minigames: [
      {
        id: 'password-game',
        complete: false
      },
      {
        id: 'sequence-game',
        complete: false
      },
      {
        id: 'wire-game',
        complete: false
      }
    ]
  }),
  setup() {
    const state = reactive({
      activeScreen: 'Not Started'
    })

    const user = reactive({
      miniGamesWon: 0
    })

    watch(
      () => state.activeScreen,
      currentValue => {
        if (currentValue === 'Player wins!') {
          launchConfetti()
        }
      }
    )

    watch(
      () => user.miniGamesWon,
      currentValue => {
        if (currentValue === 3) {
          state.activeScreen = 'Player wins!'
        }
      }
    )

    const startGame = () => {
      state.activeScreen = 'Game Started'
    }

    const registerSelection = gameId => {
      state.activeScreen = gameId
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
    <p>{{ miniGamesWon }}</p>
    <div class="game-stage">
      <div class="mini-game-wrapper">
        <div v-if="activeScreen === 'Not Started'">
          <p>Ready to play?</p>
        </div>
        <div v-else-if="activeScreen === 'Game Started'">
          <h2>Mission</h2>
          <p>Complete all three mini-games to win!</p>
          <ul>
            <li
              v-for="minigame in minigames"
              :key="minigame.id"
              @click="registerSelection(minigame.id)"
            >
              {{ minigame.id }}
            </li>
          </ul>
        </div>
        <MiniGame
          v-else
          @select-screen="registerSelection"
          :gameId="activeScreen"
        >
          <component :is="activeScreen" @mini-game-won="updateUserMiniGame" />
        </MiniGame>
      </div>
      <div
        class="panel"
        :class="activeScreen === 'Not Started' ? '' : 'is-hidden'"
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
