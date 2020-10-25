<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { posts } from '../data/mockDatabase'
import TimelinePost from './TimelinePost.vue'

type Timeframe = 'Today' | 'This Week' | 'This Month'

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
    <TimelinePost />
    <div
      v-for="(post, index) in filteredPosts"
      :key="`post-${index}`"
      class="post"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.created.format('MMM Do, YYYY') }}</p>
      <div v-html="post.html" />
    </div>
  </nav>
</template>

<style></style>
