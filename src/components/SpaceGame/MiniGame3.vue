<script>
/**
 * TODO: Convert to Options API
 * TODO: Determine challenge
 */

import { defineComponent, reactive, toRefs, watch } from 'vue'
import useMousePosition from '../../features/useMousePosition.js'

export default defineComponent({
  setup(props, ctx) {
    const mousePosition = useMousePosition()

    console.log(mousePosition)

    // Find index of correctPosition

    const state = reactive({
      userWires: [
        {
          label: 'red'
        },
        {
          label: 'blue'
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
          label: 'blue'
        },
        {
          label: 'red'
        }
      ],
      matchStatus: [false, false, false, false],
      userSelection: {
        selectedWire: 'black',
        matchedWire: 'white'
      },
      wireLines: [],
      drawWire: {
        display: false,
        label: null,
        stroke: null,
        x1: 0,
        y1: 0,
        offsetLeft: 0,
        offsetTop: 0
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
          wire => wire.label === selectedWire.value
        )

        state.matchStatus[selectedIndex] = true
        state.wireLines.push({
          ...state.drawWire,
          x2: mousePosition.x.value - state.drawWire.offsetLeft,
          y2: mousePosition.y.value - state.drawWire.offsetTop
        })
        state.drawWire.display = false
      }
    }

    const registerMatchColor = wire => {
      state.userSelection.matchedWire = wire.label
    }

    const registerWireColor = ($event, wire) => {
      state.userSelection.selectedWire = wire.label

      const wireIndex = state.userWires.findIndex(userWire => userWire === wire)
      const itemOffsetLeft = $event.target.offsetLeft
      const parentOffsetLeft = $event.target.offsetParent.offsetLeft
      const itemWidth = $event.target.clientWidth
      const itemOffsetTop = $event.target.offsetTop
      const parentOffsetTop = $event.target.offsetParent.offsetTop

      const offsetLeft = itemOffsetLeft + parentOffsetLeft + itemWidth
      const offsetTop = itemOffsetTop + parentOffsetTop - 120 - wireIndex * 20

      state.drawWire = {
        display: true,
        label: wire.label,
        stroke: wire.label,
        x1: 0,
        y1: 11 * wireIndex + 11 * (wireIndex + 1),
        offsetLeft: offsetLeft,
        offsetTop: offsetTop
      }
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
  <section :class="$style['mini-game']" id="mini-game-3">
    <h1>MiniGame 3</h1>
    <div :class="$style.wireboard">
      <div :class="$style.panel">
        <ul>
          <li v-for="wire in userWires" :key="`user-${wire.label}`">
            <div
              @mousedown="registerWireColor($event, wire)"
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
            v-show="drawWire.display"
            :key="`wire-line-draw`"
            :class="$style.line"
            :x1="drawWire.x1"
            :y1="drawWire.y1"
            :x2="mousePosition.x.value - drawWire.offsetLeft"
            :y2="mousePosition.y.value - drawWire.offsetTop"
            :stroke="drawWire.stroke"
          />
          <line
            v-for="wire in wireLines"
            :key="`wire-line-${wire.label}`"
            :class="$style.line"
            :x1="wire.x1"
            :y1="wire.y1"
            :x2="wire.x2"
            :y2="wire.y2"
            :stroke="wire.stroke"
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
    <p>{{ matchStatus }}</p>
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
  width: 400px;
  position: relative;
}

.wireboard {
  display: flex;
}

.panel ul,
.panel li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
