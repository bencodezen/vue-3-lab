<script>
import axios from 'axios'

export default {
  methods: {
    callLocalHost() {
      axios.post(
        'https://experiment-sample-website.netlify.app/.netlify/functions/cors-lab',
        {
          headers: {
            'x-test': 'boo!'
          }
        }
      )
    }
  }
}
</script>

<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/lab">Lab</router-link> |
  <router-link to="/space-game">Space Game</router-link>
  <router-view />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
