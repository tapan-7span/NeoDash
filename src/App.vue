<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import { CheckUser, setUser } from "@/Utilities/auth.js";
import { generateRandomString } from "@/Utilities/other.js";
import Navbar from "./components/default/Navbar.vue";
import Footer from "./components/default/Footer.vue";
import notification from "@/Utilities/notification.js";

export default {
  name: "App",
  components: { Navbar, Footer },
  created() {},
  mixins: [notification],

  methods: {},
};
</script>
