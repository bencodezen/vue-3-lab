<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      userWires: ['red', 'blue', 'green', 'yellow'],
      correctWires: ['green', 'blue', 'yellow', 'red'],
      userSelection: {
        selectedWire: 'black',
        matchedWire: 'white'
      }
    })

    const registerMatchColor = colorName => {
      state.userSelection.matchedWire = colorName
    }

    const registerWireColor = colorName => {
      state.userSelection.selectedWire = colorName
    }

    return {
      ...toRefs(state),
      registerMatchColor,
      registerWireColor
    }
  }
})
</script>

<template>
  <section :class="$style['mini-game']">
    <h1>MiniGame 3</h1>
    <p>{{ userSelection }}</p>
    <div :class="$style.wireboard">
      <div :class="$style.panel">
        <ul>
          <li
            v-for="wireColor in userWires"
            :key="`user-${wireColor}`"
            @mousedown="registerWireColor(wireColor)"
          >
            {{ wireColor }}
          </li>
        </ul>
      </div>
      <div :class="$style.panel">
        <ul>
          <li
            v-for="wireColor in correctWires"
            :key="`user-${wireColor}`"
            @mouseenter="registerMatchColor(wireColor)"
          >
            {{ wireColor }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style module>
.mini-game {
  border: 2px solid rgb(14, 162, 162);
  padding: 2rem;
  width: 400px;
  position: relative;
}

.wireboard {
  display: flex;
  justify-content: space-between;
}

.panel ul,
.panel li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
