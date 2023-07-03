<template>
  <div class="py-8 h-screen flex items-center justify-center ml-64">
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 ml-64 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-stone-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-stone-700">
        <ul class="space-y-2 font-medium">
          <headerBtn label="Home" routing="/" class="hover:bg-stone-600"/>
          <headerBtn label="Users" routing="/users" class="hover:bg-stone-600"/>
          <headerBtn label="Tasks" routing="/tasks" class="hover:bg-stone-600"/>
          <headerBtn label="Info" routing="/info" class="hover:bg-stone-600"/>
          <headerBtn label="Dashboard" routing="/admin-dashboard" />
        </ul>
      </div>
    </aside>
    <div>
      <div class="text-red-400 text-center text-5xl">Admin Dashboard</div>
      <div class="text-red-200 p-8 text-center text-4xl">Delete All Data</div>
      <div
        class="py-3 text-green-200 text-center cursor-pointer"
        @click="GoBack"
      >
        Go Back
      </div>
    </div>
  </div>
</template>

<script>
import notification from "@/Utilities/notification.js";
export default {
  name: "Dashboard",
  mixins: [notification],
  mounted() {},
  methods: {
    GoBack() {
      this.successToast("Success");
      this.errorToast("Error");
      this.infoToast("Info");
      this.warningToast("Warning");
      this.$router.back();
    },
  },
};
</script>
