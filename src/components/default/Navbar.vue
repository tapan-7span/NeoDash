<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center">
          <!-- <img src="@/assets/logo.png" class="h-8 mr-3" alt="Neo Logo" /> -->
          <!-- <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Neo Dash</span
          > -->
        </div>
        <div class="flex md:order-2 gap-2">
          <router-link to="/admin-dashboard">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12ZM4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"
                />
                <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M7 15a5.782 5.782 0 0 0 5 3a5.782 5.782 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3Z"
                />
              </svg>
            </button>
          </router-link>
          <button
            @click="logout()"
            type="button"
            v-if="NToken"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5l-1.42-1.41M19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14Z"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <router-link
              to="/"
              exact
              class="text-white hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/',
              }"
            >
              Home
            </router-link>
            <router-link
              to="/users"
              exact
              class="text-white hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/users',
              }"
            >
              Users
            </router-link>
            <router-link
              to="/tasks"
              exact
              class="text-white hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/tasks',
              }"
            >
              Tasks
            </router-link>
            <router-link
              to="/info"
              exact
              class="text-white hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/info',
              }"
            >
              Info
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import AuthService from "@/Utilities/AuthService.js";
import notification from "@/Utilities/notification.js";

export default {
  data() {
    return {
      NToken: null,
    };
  },
  mixins: [notification],
  updated() {
    this.NToken = AuthService.isAuthenticated();
  },
  methods: {
    logout() {
      const res = AuthService.logout();
      if (res) {
        this.successToast("Logged Out !");
        setTimeout(() => {
          this.$router.push({ name: "Login" });
        }, 1000);
      } else {
        this.errorToast("Something Went Wrong !");
      }
    },
  },
};
</script>
<style scoped></style>
