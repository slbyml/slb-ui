import { createApp } from 'vue'
import App from './App.vue'
import slbUI from '../packages/index'

const app = createApp(App)
app.use(slbUI)

app.mount('#app')
