import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '../src/scss/styles.scss'
import "./index.css";

createApp(App).use(router).mount("#app");