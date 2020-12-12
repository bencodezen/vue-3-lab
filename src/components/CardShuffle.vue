<script>
import _ from 'lodash'

export default {
  data() {
    return {
      boardStyles: 'board',
      cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16]
    }
  },
  methods: {
    random() {
      this.cards = _.shuffle(this.cards)
    },
    shuffle() {
      this.random()
      this.random()
    }
  }
}
</script>

<template>
  <div>
    <h2>Shuffle Cards</h2>
    <transition-group name="board" tag="section" :class="boardStyles">
      <button v-for="card in cards" :key="card" class="card">
        {{ card }}
      </button>
    </transition-group>
    <button @click="shuffle" style="margin-top: 2rem;" class="card">
      Shuffle
    </button>
  </div>
</template>

<style>
body {
  margin: 30px;
}

button {
  margin-right: 10px;
}

.board {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
}

.board.is-one-deck {
  grid-template-columns: 100px;
  grid-template-rows: 100px;
}

.board-move {
  transition: all 0.8s ease;
}

.card {
  display: inline-block;
  transition: all 0.8s ease;
}

.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}
</style>
