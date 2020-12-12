<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="fetchBackgroundFunction">Fetch Background Fn</button>
    <TodoMVC />
    <img
      v-for="image in images"
      :src="`/images/${image}`"
      alt=""
      :key="image"
    />
  </div>
</template>

<script>
import axios from 'axios'
import TodoMVC from '../components/TodoMVC'

export default {
  name: 'Home',
  components: {
    TodoMVC
  },
  data: () => ({
    images: ['cyclops.jpg', 'furby.jpg', 'ninja-turtle-pizza-thrower.jpg']
  }),
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
