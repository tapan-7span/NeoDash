<template>
  <div>
    <nav
      class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-stone-800 dark:border-gray-700"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-stone-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <div class="flex ml-2 md:mr-24">
              <img src="@/assets/logo.png" class="h-8 mr-3" alt="Neo Logo" />
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                >Neo Dash</span
              >
            </div>
          </div>
          <div class="flex items-center ml-3">
            <logoutBtn
              v-if="NToken"
              @submit="logout"
              label="Logout"
              :isLoading="isLoading"
            />
          </div>
        </div>
      </div>
    </nav>

    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-stone-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-stone-800">
        <ul class="space-y-2 font-medium">
          <headerBtn label="Home" routing="/" />
          <headerBtn label="Users" routing="/users" />
          <headerBtn label="Tasks" routing="/tasks" />
          <headerBtn label="Info" routing="/info" />
          <headerBtn label="Dashboard" routing="/admin-dashboard" />
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { ref } from "vue";
import AuthService from "@/Utilities/AuthService.js";
import notification from "@/Utilities/notification.js";
import { useAuthStore } from "@/store";

export default {
  data() {
    return {
      NToken: "",
      isLoading: false,
    };
  },
  computed: {
    isLoggedIn() {
      const authStore = useAuthStore();
      return authStore.$state.LoggedIn;
    },
  },
  watch: {
    isLoggedIn(newValue) {
      if (newValue) {
        this.updateNavbar();
      }
    },
  },
  created() {
    this.updateNavbar();
  },

  mixins: [notification],
  methods: {
    updateNavbar() {
      this.NToken = AuthService.isAuthenticated();
    },
    logout() {
      this.isLoading = true;
      setTimeout(() => {
        const res = AuthService.logout();
        if (res) {
          this.successToast("Logged Out !");
          const authStore = useAuthStore();
          authStore.setLoggedIn(false);
          setTimeout(() => {
            this.$router.push({ name: "Login" });
            this.isLoading = false;
            this.updateNavbar();
          }, 1000);
        } else {
          this.isLoading = false;
          this.errorToast("Something Went Wrong !");
        }
      }, 2000);
    },
  },
};
</script>

<style scoped></style>
