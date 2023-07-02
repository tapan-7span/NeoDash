<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-md max-w-sm w-full">
      <div class="text-center mb-4">
        <h2 class="text-xl">{{ header }}</h2>
      </div>
      <div class="text-center mb-4">
        <p>{{ body }}</p>
      </div>
      <div v-if="isOtp" class="text-center mb-4">
        <input
          type="number"
          v-model="OTP"
          maxlength="4"
          class="mx-auto block"
        />
      </div>
      <div class="text-center">
        <button @click="cancel" class="btn btn-red">Cancel</button>
        <button v-if="isOtp" @click="verify" class="btn btn-blue">
          Verify OTP
        </button>
        <button v-else @click="ok" class="btn btn-green">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OTP: null,
    };
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    isOtp: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["verifyOtp", "cancel", "ok"],
  methods: {
    verify() {
      const datapassing = this.OTP;
      console.log("Verifying...." + datapassing);
      this.$emit("verifyOtp", datapassing);
    },
    cancel() {
      // Emitting a custom event to notify the parent component
      this.$emit("cancel");
    },
    ok() {
      // Emitting a custom event to notify the parent component
      this.$emit("ok");
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 0 5px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-red {
  background-color: #e53e3e;
  color: #fff;
}

.btn-blue {
  background-color: #3182ce;
  color: #fff;
}

.btn-green {
  background-color: #38a169;
  color: #fff;
}
</style>
