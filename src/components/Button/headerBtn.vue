<template>
  <router-link :to="routing">
    <div
      href="#"
      class="flex items-center m-1 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700"
      :class="{
        'bg-stone-700': $route.path === routing,
      }"
    >
      ⬛
      <span class="ml-3">{{ label }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "headerBtn",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    routing: {
      type: String,
      default: "/",
    },
  },
};
</script>
<style></style>
