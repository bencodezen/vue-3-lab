<script>
import { computed, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup(props, ctx) {
    const state = reactive({
      gameStatus: 'In Progress',
      correctPassword: computed(() => {
        return Math.floor(Math.random(0, 1) * 1000).toString()
      }),
      passwordInput: 'wrong'
    })

    const checkPassword = () => {
      if (state.correctPassword === state.passwordInput) {
        state.gameStatus = 'Player Wins!'
        ctx.emit('mini-game-won')
      } else {
        state.gameStatus = 'Wrong password!'
      }
    }

    return {
      ...toRefs(state),
      checkPassword
    }
  }
})
</script>

<template>
  <section class="mini-game">
    <h1>MiniGame</h1>
    <p>{{ gameStatus }}</p>
    <p class="post-it">Secret Password: {{ correctPassword }}</p>
    <label for="enter-password">Enter Password</label>
    <input
      id="enter-password"
      type="text"
      v-model="passwordInput"
      @keyup.enter="checkPassword"
    />
    <button type="submit" @click="checkPassword">Submit</button>
  </section>
</template>

<style>
.mini-game {
  border: 2px solid rgb(14, 162, 162);
  padding: 2rem;
  width: 200px;
  position: relative;
}

.post-it {
  background-color: yellow;
  position: absolute;
  bottom: -100px;
  right: -75px;
  padding: 1rem;
  width: 100px;
}
</style>
