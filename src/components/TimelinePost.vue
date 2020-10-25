<script lang="ts">
import { defineComponent } from 'vue'
import { Post } from '../types'

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  }
})
</script>

<template>
  <section class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.created.format('MMM Do, YYYY') }}</p>
    <div v-html="post.html" />
  </section>
</template>

<style></style>
