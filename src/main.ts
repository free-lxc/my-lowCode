import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import { createPinia } from "pinia"
import "@/assets/iconfont/iconfont.css"
const app = createApp(App)
const createStore = createPinia()
app.use(createStore)
app.use(ElementPlus)
app.mount("#app")
