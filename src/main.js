import { createApp } from "vue";
import "./style.css";
import store from "./store";
import router from "./router";
import VueConfetti from 'vue-confetti'
import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueConfetti);

app.mount("#app");
