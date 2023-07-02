<!-- LoginPage.vue -->

<template>
  <div>
    <h1>Login</h1>
    <form @submit="">
      <input
        type="text"
        v-model="pin"
        placeholder="PIN"
        maxlength="4"
        pattern="\d*"
        inputmode="numeric"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      username: "",
      pin: "",
    };
  },
  methods: {
  },
};
</script>
