<script lang="ts">
import { defineComponent } from 'vue'
import PostEditor from '../components/PostEditor.vue'
import { Post } from '../types'
import moment from 'moment'

export default defineComponent({
  components: {
    PostEditor
  },
  setup() {
    const post: Post = {
      id: -1,
      title: 'New Post',
      markdown: '# Hello\nMy new post',
      html: '',
      created: moment(),
      authorId: 0
    }

    return {
      post
    }
  }
})
</script>

<template>
  <h1>New Post</h1>
  <PostEditor :post="post" />
</template>

<style></style>
