<script>
import { reactive, toRefs } from 'vue'

export default {
  setup(props, ctx) {
    const state = reactive({
      minigames: [
        {
          id: 'mg-enter-password',
          label: 'Enter Password'
        },
        {
          id: 'mg-sequence-solver',
          label: 'Sequence Solver'
        },
        {
          id: 'mg-wire-matcher',
          label: 'Wire Matcher'
        }
      ]
    })

    const sendSelection = minigame => {
      ctx.emit('select-minigame', {
        ...minigame
      })
    }

    return {
      ...toRefs(state),
      sendSelection
    }
  }
}
</script>

<template>
  <div>
    <h2>Mission</h2>
    <p>Complete all three mini-games to win!</p>
    <ul>
      <li
        v-for="minigame in minigames"
        :key="minigame.id"
        @click="sendSelection(minigame)"
      >
        {{ minigame.label }}
      </li>
    </ul>
  </div>
</template>

<style></style>
