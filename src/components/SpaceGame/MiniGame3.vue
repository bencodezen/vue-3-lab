<script>
/**
 * TODO: Convert to Options API
 * TODO: Determine challenge
 */

import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useMousePosition } from '../../features/useMousePosition.js'

export default defineComponent({
  setup(props, ctx) {
    const { mousePosition, registerPosition } = useMousePosition()

    // Find index of correctPosition

    const state = reactive({
      userWires: [
        {
          label: 'red'
        },
        {
          label: 'yellow'
        },
        {
          label: 'limegreen'
        },
        {
          label: 'cyan'
        }
      ],
      correctWires: [
        {
          label: 'limegreen'
        },
        {
          label: 'cyan'
        },
        {
          label: 'yellow'
        },
        {
          label: 'red'
        }
      ],
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

    const returnToGameStatus = () => {
      ctx.emit('select-minigame', {
        id: ''
      })
    }

    return {
      ...toRefs(state),
      checkWireColors,
      registerMatchColor,
      registerWireColor,
      mousePosition,
      registerPosition,
      returnToGameStatus
    }
  },
  methods: {
    findCorrectWire(wire) {
      return this.correctWires.findIndex(
        correctWire => correctWire.label === wire.label
      )
    }
  },
  mounted() {}
})
</script>

<template>
  <section
    :class="$style['mini-game']"
    id="mini-game-3"
    @mousemove="registerPosition"
  >
    <h1>MiniGame 3</h1>
    <p>{{ userSelection }}</p>
    <div :class="$style.wireboard">
      <div :class="$style.panel">
        <ul>
          <li v-for="wire in userWires" :key="`user-${wire.label}`">
            <div
              @mousedown="registerWireColor(wire.label)"
              :style="`background-color: ${wire.label};`"
              :id="`wire-${wire.label}`"
            >
              {{ wire.label }}
            </div>
          </li>
        </ul>
      </div>

      <!-- 11, 33, 55 -->
      <div :class="$style.panel" style="flex: 1;">
        <svg :class="$style.svg">
          <line
            v-for="(wire, index) in userWires"
            :key="`line-${wire.label}`"
            :class="$style.line"
            x1="0"
            :y1="11 * index + 11 * (index + 1)"
            x2="1160"
            :y2="11 * findCorrectWire(wire) + 11 * (findCorrectWire(wire) + 1)"
            :stroke="wire.label"
          />
        </svg>
      </div>

      <div :class="$style.panel">
        <ul>
          <li
            v-for="wire in correctWires"
            :key="`user-${wire.label}`"
            :style="`background-color: ${wire.label}`"
            @mouseenter="registerMatchColor(wire)"
            @mouseup="checkWireColors"
            :id="`wire-${wire.label}-end`"
          >
            {{ wire.label }}
          </li>
        </ul>
      </div>
    </div>
    <button @click="returnToGameStatus">Back to Game Status</button>
  </section>
</template>

<style module>
.svg {
  width: 100%;
}

.line {
  stroke-width: 5px;
}

.mini-game {
  border: 2px solid rgb(14, 162, 162);
  padding: 2rem;
  width: 1200px;
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
