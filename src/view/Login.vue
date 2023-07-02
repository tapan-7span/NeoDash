<!-- LoginPage.vue -->

<template>
  <div class="m-44">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit="handleLogin" class="flex flex-col space-y-4">
      <div class="flex flex-wrap justify-between">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          :ref="'otpInput' + index"
          type="text"
          v-model="otp[index]"
          @input="handleDigitInput(index)"
          class="w-12 h-12 border border-gray-300 rounded-md px-4 py-2 text-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxlength="1"
          pattern="\d*"
          inputmode="numeric"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import notification from "@/Utilities/notification.js";
import AuthService from "@/Utilities/AuthService.js";
export default {
  name: "Login",
  data() {
    return {
      otp: ["", "", "", ""],
    };
  },
  mixins: [notification],

  computed: {
    otpDigits() {
      return this.otp.slice(0, 4);
    },
  },
  created() {
    const checkPin = AuthService.checkToken();
    if (checkPin) {
      this.$router.push({ name: "Home" });
    } else {
      this.infoToast("Please Enter PIN");
    }
  },

  methods: {
    handleLogin(event) {
      event.preventDefault();

      const otpData = this.otp.join("");

      if (otpData.length === 4) {
        const VerificationRes = AuthService.login(parseInt(otpData));
        if (VerificationRes) {
          this.successToast("Pin Verified !");
          this.emptyField();
          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 1500);
        } else {
          this.errorToast("Wrong PIN ");
          this.emptyField();
        }
      } else {
        this.errorToast("Please enter a 4-digit PIN");
        this.emptyField();
      }
    },
    handleDigitInput(index) {
      if (this.otp[index] && index < this.otp.length - 1) {
        this.$nextTick(() => {
          this.$refs["otpInput" + (index + 1)][0].focus();
        });
      }
    },
    emptyField() {
      this.otp = ["", "", "", ""];
    },
  },
};
</script>
