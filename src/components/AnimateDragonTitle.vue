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
  <div class="animate-dragon-title">
    <div class="creature-cage">
      <transition name="jiggle">
        <h1 v-if="isDragon" class="creature">
          Dragon 🐉
        </h1>
      </transition>
    </div>
    <button @click="isDragon = !isDragon">Toggle Dragon</button>
  </div>
</template>

<style>
.creature-cage {
  position: relative;
  display: block;
  margin: 0 auto;
  height: 86px;
}

@keyframes jiggle {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

.creature:hover {
  animation: jiggle 0.5s;
  animation-fill-mode: forwards;
}

.jiggle-enter-active {
  animation: jiggle 1s;
}

.jiggle-leave-active {
  animation: jiggle 1s reverse;
}
</style>
