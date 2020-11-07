import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import { todayPost, monthPost, weekPost } from './data/mockDatabase'
import router from './router'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// @ts-ignore
axios.get = async (url: string) => {
  if (url === '/posts') {
    await delay(1000)
    return Promise.resolve({
      data: [todayPost, monthPost, weekPost]
    })
  }
}

createApp(App)
  .use(router)
  .mount('#app')
