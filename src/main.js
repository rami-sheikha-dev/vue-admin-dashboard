import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

// Fake Interceptor for fetch
const originalFetch = window.fetch
window.fetch = async (...args) => {
  const token = localStorage.getItem('token')
  const [resource, config = {}] = args
  if (token) {
    config.headers = {
      ...config.headers,
      'Authorization': `Bearer ${token}`
    }
  }
  return originalFetch(resource, config)
}

createApp(App).use(router).mount('#app')
