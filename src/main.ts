import { createApp } from "vue";
import {
  create,
  // components
  NButton,
} from "naive-ui";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const naive = create({
  components: [NButton],
});

createApp(App).use(store).use(router).use(naive).mount("#app");
