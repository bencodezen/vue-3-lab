<template>
  <div id="app">
    <h1>Hello!</h1>
    <CardShuffle />
  </div>
</template>

<script>
import CardShuffle from './components/CardShuffle'

export default {
  name: 'App',
  components: {
    CardShuffle
  },
  data() {
    return {
      name: 'Tony Stark',
      id: 123,
      inventory: [],
      abilities: {},
      showTeleport: true
    }
  },
  computed: {
    firstName() {
      return this.name.split(' ')[0]
    }
  },
  methods: {
    changeName() {
      this.name = 'Tony Stark'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
