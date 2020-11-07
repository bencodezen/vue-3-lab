<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import TimelinePost from './TimelinePost.vue'
import { useStore } from '../store'
import { Post, Timeframe } from '../types'

export default defineComponent({
  components: {
    TimelinePost
  },
  async setup() {
    const timeframes: Timeframe[] = ['Today', 'This Week', 'This Month']
    const selectedTimeframe = ref<Timeframe>('Today')

    const store = useStore()

    if (!store.getState().posts.loaded) {
      await store.fetchPosts()
    }

    const allPosts = store.getState().posts.ids.reduce<Post[]>((acc, id) => {
      const post = store.getState().posts.all[id]
      return acc.concat(post)
    }, [])

    const setTimeframe = (timeframe: Timeframe) => {
      selectedTimeframe.value = timeframe
    }

    const filteredPosts = computed(() => {
      return allPosts.filter(post =>
        post.title.includes(selectedTimeframe.value)
      )
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
