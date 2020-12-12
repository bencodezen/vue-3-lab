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
      <transition name="fade">
        <h1 v-if="isDragon" class="creature">
          Dragon 🐉
        </h1>
        <h1 v-else class="creature">Unicorn 🦄</h1>
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

.creature {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
