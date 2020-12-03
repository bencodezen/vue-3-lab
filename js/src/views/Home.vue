<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="fetchBackgroundFunction">Fetch Background Fn</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {},
  methods: {
    fetchBackgroundFunction() {
      axios
        .post('/.netlify/functions/hello-background', { my: 'payload' })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>
