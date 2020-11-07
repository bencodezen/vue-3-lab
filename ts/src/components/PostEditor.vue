<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { parse, MarkedOptions } from 'marked'
import { highlightAuto } from 'highlight.js'
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
    const htmlContent = ref('')

    const options: MarkedOptions = {
      highlight: (code: string) => {
        return highlightAuto(code).value
      }
    }

    const updateMarkdownContent = () => {
      markdownContent.value = elMarkdownContent.value
        ? elMarkdownContent.value?.innerText
        : props.post.markdown
    }

    watch(
      () => markdownContent.value,
      () => {
        parse(markdownContent.value, options, (err, res) => {
          if (err) {
            return
          }
          htmlContent.value = res
        })
      },
      { immediate: true }
    )

    onMounted(() => {
      if (elMarkdownContent.value) {
        elMarkdownContent.value.innerText = props.post.markdown
      }
    })

    return {
      elMarkdownContent,
      htmlContent,
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
  <div v-html="htmlContent" />
</template>

<style></style>
