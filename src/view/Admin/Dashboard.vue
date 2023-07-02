<template>
  <div class="dark:bg-gray-800 py-8 h-screen flex items-center justify-center">
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
