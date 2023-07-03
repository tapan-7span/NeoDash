// Component Imports
import submitBtn from "@/components/Button/submitBtn.vue";
import headerBtn from "@/components/Button/headerBtn.vue";
import logoutBtn from "@/components/Button/logoutBtn.vue";

// Global Button Components
export const register = (appInstance) => {
  appInstance.component("headerBtn", headerBtn);
  appInstance.component("submitBtn", submitBtn);
  appInstance.component("logoutBtn", logoutBtn);
};
