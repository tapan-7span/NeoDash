<template>
  <div class="py-8">
    <div class="py-6 text-lg border-white text-center">
      Current Project Version : {{ ProjectVersion }}
    </div>
    <div>
      <button @click="giveFeedback()">Give Feedback</button>
    </div>
  </div>
</template>
<script>
import PackageJson from "../../package.json";
export default {
  name: "SiteInfo",
  data() {
    return {
      ProjectVersion: null,
    };
  },
  created() {
    this.ProjectVersion = PackageJson.version;
  },
  methods: {
    giveFeedback() {
      this.$router.push({name:'/feedback'})
    },
  },
};
</script>
<style></style>
