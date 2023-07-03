<template>
  <Navigation />
  <RouterView class="pl-[250px] pt-[56px]" />
</template>

<script>
import Navigation from "./components/default/Navigation.vue";
import Navbar from "./components/default/Navbar.vue";
import notification from "@/Utilities/notification.js";

export default {
  name: "App",
  components: { Navbar, Navigation },
  created() {},
  mixins: [notification],

  methods: {},
};
</script>
