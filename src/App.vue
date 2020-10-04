<template>
  <div id="app">
    <h1>Hello!</h1>
    <EventValidator />
    <BasicTeleport />
    <TestWindow />
    <button @click="showTeleport = !showTeleport">Toggle Teleport</button>
  </div>
</template>

<script>
import TestWindow from './components/TestWindow'
import BasicTeleport from './components/BasicTeleport'
import EventValidator from './components/EventValidator'

export default {
  name: 'App',
  components: {
    BasicTeleport,
    EventValidator,
    TestWindow
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
