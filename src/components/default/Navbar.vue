<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          class="flex items-center dark:border-[#0c9464] dark:border rounded-lg p-1"
        >
          <img src="@/assets/logo.png" class="h-8 mr-3" alt="Neo Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Neo Dash</span
          >
        </div>
        <div class="flex md:order-2 gap-2">
          <logoutBtn
            @submit="logout()"
            v-if="NToken"
            label="Logout"
            class=""
            :isLoading="isLoading"
          />
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
            <router-link
              to="/admin-dashboard"
              exact
              class="text-white hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/admin-dashboard',
              }"
            >
              Dashboard
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
      isLoading: false,
    };
  },
  mixins: [notification],
  updated() {
    this.NToken = AuthService.isAuthenticated();
  },
  methods: {
    logout() {
      this.isLoading = true;
      setTimeout(() => {
        const res = AuthService.logout();
        if (res) {
          this.successToast("Logged Out !");
          setTimeout(() => {
            this.$router.push({ name: "Login" });
            this.isLoading = false;
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
