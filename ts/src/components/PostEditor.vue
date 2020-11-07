<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Post } from '../types'

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  },
  setup(props) {
    const title = ref(props.post.title)
    const elMarkdownContent = ref<null | HTMLDivElement>(null)
    const markdownContent = ref(props.post.markdown)

    const updateMarkdownContent = () => {
      markdownContent.value = elMarkdownContent.value
        ? elMarkdownContent.value?.innerText
        : props.post.markdown
    }

    onMounted(() => {
      if (elMarkdownContent.value) {
        elMarkdownContent.value.innerText = props.post.markdown
      }
    })

    return {
      elMarkdownContent,
      markdownContent,
      title,
      updateMarkdownContent
    }
  }
})
</script>

<template>
  <h1>Post Editor</h1>
  <label for="title">Title</label>
  <input type="text" id="title" v-model="title" />
  {{ title }}
  <div
    contenteditable
    id="markdown-content"
    ref="elMarkdownContent"
    @input="updateMarkdownContent"
  />
  <p>{{ markdownContent }}</p>
</template>

<style></style>
