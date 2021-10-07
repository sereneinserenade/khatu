<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted } from "vue";
import { gimmeStore } from "./store";
import { useRouter, useRoute } from "vue-router";
import { differenceInHours } from "date-fns";

export default {
  name: "App",
  props: {},
  setup(): void {
    const s = gimmeStore();
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      const d = localStorage.getItem("data");
      if (d) s.commit("setData", d);

      const t = localStorage.getItem("lastLogInTime");
      if (t) {
        s.commit("setLastLoginTime", t);
        const diff = differenceInHours(new Date(), new Date(t));
        if (diff > 1) {
          router.push({
            name: "login",
          });
        } else {
          router.push({
            name: "home",
          });
        }
      } else {
        router.push({
          name: "login",
        });
      }

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
  font-size: 16px;
}
</style>
