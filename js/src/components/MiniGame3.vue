<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useMousePosition } from '../features/useMousePosition.js'

export default defineComponent({
  setup(props, ctx) {
    const { mousePosition, registerPosition } = useMousePosition()

    const state = reactive({
      userWires: ['red', 'cyan', 'limegreen', 'yellow'],
      correctWires: ['limegreen', 'cyan', 'yellow', 'red'],
      matchStatus: [false, false, false, false],
      userSelection: {
        selectedWire: 'black',
        matchedWire: 'white'
      }
    })

    watch(state.matchStatus, currentValue => {
      if (!currentValue.includes(false)) {
        ctx.emit('mini-game-won')
      }
    })

    const checkWireColors = () => {
      const { selectedWire, matchedWire } = toRefs(state.userSelection)

      if (selectedWire.value === matchedWire.value) {
        const selectedIndex = state.userWires.findIndex(
          wireColor => wireColor === selectedWire.value
        )

        state.matchStatus[selectedIndex] = true
      }
    }

    const registerMatchColor = colorName => {
      state.userSelection.matchedWire = colorName
    }

    const registerWireColor = colorName => {
      state.userSelection.selectedWire = colorName
    }

    return {
      ...toRefs(state),
      checkWireColors,
      registerMatchColor,
      registerWireColor,
      mousePosition,
      registerPosition
    }
  }
})
</script>

<template>
  <section
    :class="$style['mini-game']"
    id="mini-game-3"
    @mousemove="registerPosition"
  >
    <h1>MiniGame 3</h1>
    <p>{{ mousePosition }}</p>
    <p>{{ userSelection }}</p>
    <p>{{ matchStatus }}</p>
    <div :class="$style.wireboard">
      <div :class="$style.panel">
        <ul>
          <li
            v-for="wireColor in userWires"
            :key="`user-${wireColor}`"
            @mousedown="registerWireColor(wireColor)"
            :style="`background-color: ${wireColor};`"
          >
            {{ wireColor }}
          </li>
        </ul>
      </div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        xml:space="preserve"
        style="border: 1px solid red; flex: 1;"
      >
        <path
          class="path2"
          fill="#01a09e"
          stroke-width="5"
          stroke="black"
          :d="`M0 11 L ${mousePosition.x} ${mousePosition.y - 250}`"
        />
      </svg>
      <div :class="$style.panel">
        <ul>
          <li
            v-for="wireColor in correctWires"
            :key="`user-${wireColor}`"
            :style="`background-color: ${wireColor}`"
            @mouseenter="registerMatchColor(wireColor)"
            @mouseup="checkWireColors"
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
