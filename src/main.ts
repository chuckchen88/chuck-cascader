import { createApp } from 'vue'
import App from './App.vue'

// 全局引入
import components from './components/index.ts'

const app = createApp(App)

app.use(components)

app.mount('#app')
