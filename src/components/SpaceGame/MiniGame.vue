<script>
export default {
  data() {
    return {
      gameStatus: 'In Progress',
      passwordInput: ''
    }
  },
  computed: {
    correctPassword() {
      return Math.floor(Math.random() * 1000000 + 1000).toString()
    }
  },
  methods: {
    checkPassword() {
      if (this.correctPassword === this.passwordInput) {
        this.gameStatus = 'Player Wins!'
        this.emit('mini-game-won')
      } else {
        this.gameStatus = 'Wrong password!'
      }
    },
    returnToGameStatus() {
      this.emit('select-minigame', {
        id: ''
      })
    }
  }
}
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
    <div>
      <button @click="returnToGameStatus">Back to Game Status</button>
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

.post-it {
  background-color: yellow;
  position: absolute;
  bottom: -100px;
  right: -75px;
  padding: 1rem;
  width: 100px;
}
</style>
