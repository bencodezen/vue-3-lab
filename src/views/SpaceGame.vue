<script>
/**
 * TODO: Minigames won should be by id and as a generic number, which would prevent users from submitting the same result multiple times
 * TODO: Create a win state for mini-games that disables additional play
 * TODO: Create components to centralize logic and better UI encapsulation
 * TODO: Clean up UI pieces
 */

import { reactive, toRefs, watch } from 'vue'
import MiniGame from '../components/SpaceGame/MiniGame.vue'
import MiniGame2 from '../components/SpaceGame/MiniGame2.vue'
import MiniGame3 from '../components/SpaceGame/MiniGame3.vue'
import { launchConfetti } from '../utils/canvasConfetti'

export default {
  components: {
    MiniGame,
    MiniGame2,
    MiniGame3
  },
  data: () => ({
    minigames: [
      {
        id: 'mg-enter-password',
        label: 'Enter Password',
        complete: false
      },
      {
        id: 'mg-sequence-solver',
        label: 'Sequence Solver',
        complete: false
      },
      {
        id: 'mg-wire-matcher',
        label: 'Wire Matcher',
        complete: false
      }
    ]
  }),
  setup() {
    const state = reactive({
      gameStatus: 'Not Started',
      selectedGame: 'None'
    })

    const user = reactive({
      miniGamesWon: 0
    })

    watch(
      () => state.gameStatus,
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
        <div v-else>
          <div v-if="gameStatus === 'Not Started'">
            <p>Ready to play?</p>
          </div>

          <div v-else>
            <h2>Mission</h2>
            <p>Complete all three mini-games to win!</p>
            <ul>
              <li
                v-for="minigame in minigames"
                :key="minigame.id"
                @click="registerSelection(minigame)"
              >
                {{ minigame.label }}
              </li>
            </ul>
          </div>
        </div>
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
