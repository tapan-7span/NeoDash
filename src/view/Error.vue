<template>
  <div class="dark:bg-gray-800 py-8 h-screen flex items-center justify-center">
    <div>
      <div class="text-red-400 text-center text-5xl">404</div>
      <div class="text-red-200 text-center text-4xl">Page Not Found</div>
      <div class="py-3 text-green-200 text-center cursor-pointer" @click="GoBack">Go Back</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  mounted() {},
  methods: {
    GoBack() {
      this.$router.back();
    },
  },
};
</script>
