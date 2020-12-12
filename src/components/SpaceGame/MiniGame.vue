<script>
export default {
  emits: ['select-screen'],
  methods: {
    returnToHomeScreen() {
      this.$emit('select-screen', 'Game Started')
    }
  }
}
</script>

<template>
  <section class="mini-game">
    <slot />
    <div>
      <button @click="returnToHomeScreen">Back to Game Status</button>
    </div>
  </section>
</template>

<style>
.mini-game {
  border: 2px solid rgb(14, 162, 162);
  padding: 2rem;
  width: 200px;
  position: relative;
}
</style>
