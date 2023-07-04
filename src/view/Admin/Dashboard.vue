<template>
  <div class="py-8 h-screen flex items-center justify-center ml-64">
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 ml-64 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-stone-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-stone-700">
        <ul class="space-y-2 font-medium">
          <headerBtn
            label="Statistics"
            icon="🟦"
            routing="/admin-dashboard/"
            :isSubMenu="true"
          />
          <headerBtn
            label="Activity Log"
            icon="😀"
            routing="/activity"
            :isSubMenu="true"
          />
          <headerBtn
            label="Manage Feedback"
            icon="⌛"
            routing="/manage-feedback"
            :isSubMenu="true"
          />
        </ul>
      </div>
    </aside>
    <div>
      <router-view></router-view>
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
