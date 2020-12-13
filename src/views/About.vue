<script>
export default {
  data: () => ({
    isDragon: true
  }),
  computed: {
    displayDragonStyles() {
      return this.isDragon ? 'is-visible' : ''
    },
    displayUnicornStyles() {
      return this.isDragon ? '' : 'is-visible'
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>About</h1>
  </div>
</template>

<style></style>
