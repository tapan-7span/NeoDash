<template>
  <div class="py-8 ">
    <div class="text-lg border-white text-center">
      Current Project Version : {{ ProjectVersion }}
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
};
</script>
<style></style>
