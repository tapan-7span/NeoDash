import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./style.css";
import { createPinia } from "pinia";
const pinia = createPinia();
// Component Imports
import submitBtn from "@/components/Button/submitBtn.vue";
import headerBtn from "@/components/Button/headerBtn.vue";
import logoutBtn from "@/components/Button/logoutBtn.vue";

const app = createApp(App);
app.config.productionTip = false;

// Global Button Components
app.component("headerBtn", headerBtn);
app.component("submitBtn", submitBtn);
app.component("logoutBtn", logoutBtn);

app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
});
app.use(pinia);

app.use(router);
app.mount("#app");
