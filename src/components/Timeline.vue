<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { posts } from '../data/mockDatabase'
import TimelinePost from './TimelinePost.vue'
import { Timeframe } from '../types'

export default defineComponent({
  components: {
    TimelinePost
  },
  setup() {
    const timeframes: Timeframe[] = ['Today', 'This Week', 'This Month']
    const selectedTimeframe = ref<Timeframe>('Today')

    const setTimeframe = (timeframe: Timeframe) => {
      selectedTimeframe.value = timeframe
    }

    const filteredPosts = computed(() => {
      return posts.filter(post => post.title.includes(selectedTimeframe.value))
    })

    return {
      filteredPosts,
      selectedTimeframe,
      setTimeframe,
      timeframes
    }
  }
})
</script>

<template>
  <nav>
    <h1>{{ selectedTimeframe }}</h1>
    <button
      v-for="(timeframe, index) in timeframes"
      :key="`timeframe-${index}`"
      @click="setTimeframe(timeframe)"
    >
      {{ timeframe }}
    </button>
    <h2>Posts</h2>
    <TimelinePost
      v-for="(post, index) in filteredPosts"
      :key="`post-${index}`"
      :post="post"
    />
  </nav>
</template>

<style></style>
