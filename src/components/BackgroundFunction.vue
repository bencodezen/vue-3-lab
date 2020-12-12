<script>
import axios from 'axios'

export default {
  methods: {
    fetchBackgroundFunction() {
      axios
        .post('/.netlify/functions/hello-background', {
          content: 'Hello from Netlify!',
          destination: 'ben@bencodezen.io'
        })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<template>
  <button @click="fetchBackgroundFunction">Fetch Background Fn</button>
</template>

<style></style>
