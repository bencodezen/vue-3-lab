<script>
import { inject } from 'vue'

export default {
  setup() {
    const location = inject('location')
    const updateLocation = inject('updateLocation')

    return {
      location,
      updateLocation
    }
  }
}
</script>

<template>
  <div>
    <h1>My Marker</h1>
    <p>{{ location }}</p>
    <button @click="updateLocation">Update Location</button>
  </div>
</template>

<style></style>
