import { reactive } from 'vue'

const state = reactive({
  count: 0,
  changeAmount: 1
})

const changeCount = () => {
  state.count += state.changeAmount
}

export default {
  state,
  changeCount
}
