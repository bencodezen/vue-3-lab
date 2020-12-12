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
  100% {
    transform: scale(2);
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

a {
  border: 2px solid darkblue;
  background-color: white;
  color: darkblue;
  text-decoration: none;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

a:hover {
  background-color: darkblue;
  color: white;
}
</style>
