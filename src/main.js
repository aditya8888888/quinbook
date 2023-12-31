import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import { createPinia } from "pinia";
import './assets/tailwind.css'
// import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
