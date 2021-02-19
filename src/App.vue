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
  <button @click="callLocalHost">Call Local Host</button>
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
