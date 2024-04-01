import { createApp } from "vue";
// import { createPinia } from 'pinia'

import router from "./router";
// import './axios'
import App from "./App.vue";
import "./index.css";

const app = createApp(App);

app.mount("#app");
