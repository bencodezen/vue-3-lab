<script>
import axios from 'axios'

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: value => {
        const valid = ['sm', 'md', 'lg'].includes(value)

        if (!valid) {
          console.error('Incorrect value:', value)
        }

        return valid
      }
    }
  },
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
