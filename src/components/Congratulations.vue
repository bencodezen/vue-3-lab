<script>
import confetti from 'canvas-confetti'

export default {
  methods: {
    fireConfetti() {
      var end = Date.now() + 3 * 1000

      // go Buckeyes!
      var colors = ['#34495E', '#41B883']

      ;(function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 100,
          origin: { x: 0 },
          colors: colors
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 100,
          origin: { x: 1 },
          colors: colors
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()
    }
  }
}
</script>

<template>
  <div id="confetti">
    <h1>Congratulations</h1>
    <button @click="fireConfetti">Fire Confetti</button>
  </div>
</template>

<style></style>
