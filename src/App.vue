<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted } from "vue";
import { getStore } from "./store";

export default {
  name: "App",
  props: {},
  setup(): void {
    const s = getStore();

    onMounted(() => {
      const d = localStorage.getItem("data");
      if (d) s.commit("setData", d);

      const t = localStorage.getItem("lastLogInTime");
      if (t) s.commit("setLastLoginTime", t);

      const ep = localStorage.getItem("encryptedPassword");
      if (ep) s.commit("setEncryptedPassword", ep);
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
