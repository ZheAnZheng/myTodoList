import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import MissionButton from "./UI/MissionButton.vue"
const app=createApp(App);

app.component("mission-button",MissionButton);
app.use(store);
app.use(router);
app.mount("#app");

