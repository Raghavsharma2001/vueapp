import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles.css"
import store from "./state/Store.js"

const app = createApp(App)

app.provide("store", store)

app.use(router)

app.mount('#app')
