<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      translate: 0,
      rotate: 40,
      perspective: 500
    })
    const movePanels = () => {
      state.translate = 530
      state.rotate = 0
      state.perspective = 0
    }

    return {
      ...toRefs(state),
      movePanels
    }
  }
}
</script>

<template>
  <div>
    <h1>Panels</h1>
    <div class="screen-box">
      <div
        class="screen is-left"
        :style="{
          transform: `perspective(${perspective}px) rotateY(${rotate}deg) translate(${translate}px)`
        }"
      ></div>
      <div class="screen"></div>
      <div class="screen is-right"></div>
    </div>
    <button @click="movePanels">Move Panels</button>
  </div>
</template>

<style>
.screen-box {
  border: 2px solid palegreen;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 500px);
  grid-column-gap: 30px;
}

.screen {
  background-color: black;
  width: 500px;
  height: 200px;
  transform: perspective(500px);
  transition: transform 1s ease-in;
}

.screen.is-left {
  transform: perspective(500px) rotateY(40deg);
  background-color: blue;
}

.screen.is-right {
  transform: perspective(500px) rotateY(-40deg);
  background-color: red;
}
</style>
