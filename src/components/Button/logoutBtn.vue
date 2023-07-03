<template>
  <button
    :disabled="isLoading"
    type="submit"
    :class="[
      'max-w-xs flex text-center focus:ring-4 gap-2 focus:outline-none justify-center font-medium rounded-lg text-sm px-4 py-1 mr-2 dark:border-[#0c9464] border-2 dark:hover:bg-[#0ddb93] text-white items-center',
      { 'bg-[#1a9168]': isLoading },
    ]"
    @click="click()"
  >
    <svg
      v-if="!isLoading"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5l-1.42-1.41M19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14Z"
      />
    </svg>
    <svg
      width="14"
      height="14"
      v-if="isLoading"
      aria-hidden="true"
      role="status"
      class="inline w-4 h-4 mr-3 animate-spin text-black"
      viewBox="0 0 100 101"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="black"
      />
    </svg>

    <span v-if="isLoading">Logging Out...</span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "LogoutButton",
  emits: ["submit"],
  props: {
    label: {
      type: String,
      default: "Logout",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit("submit");
    },
  },
};
</script>

<style></style>
