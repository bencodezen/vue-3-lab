<template>
  <div id="app">
    <TodoMVC />
  </div>
</template>

<script>
import TodoMVC from './components/TodoMVC'

export default {
  name: 'App',
  components: {
    TodoMVC
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
