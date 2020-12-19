<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Count: {{ list }}</p>
    <p>New List: {{ newList }}</p>
    <button @click="list.push(5)">Add</button>
    <button @click="newList.push(4)">New Add</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      list: [1, 2, 3]
    })

    const newList = ref([1, 2, 3])

    watch(
      () => [...state.list],
      (currentValue, oldValue) => {
        console.log(currentValue)
        console.log(oldValue)
      }
    )

    watch(
      () => [...newList.value],
      (currentValue, oldValue) => {
        console.log('new', currentValue)
        console.log('old', oldValue)
      }
    )

    return {
      ...toRefs(state),
      newList
    }
  },
  watch: {
    list(currentValue, oldValue) {
      console.log(currentValue)
      console.log(oldValue)
    }
  }
}
</script>
