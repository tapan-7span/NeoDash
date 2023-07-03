import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state() {
    return {
      LoggedIn: false,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.LoggedIn;
    },
  },
  actions: {
    setLoggedIn(value) {
      this.LoggedIn = value;
    },
  },
});
