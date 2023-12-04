import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import router from "./routes";
import { createPinia } from "pinia";

//create the instance of pinia store
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
