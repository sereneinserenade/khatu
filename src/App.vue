<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { differenceInHours } from "date-fns";
import store from "@/store";

export default {
  name: "App",
  props: {},
  setup() {
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      const d = localStorage.getItem("data");
      if (d) store.setData(JSON.parse(d));

      const t = localStorage.getItem("lastLogInTime");
      if (t) {
        store.setLastLoginTime(new Date(t));
        const diff = differenceInHours(new Date(), new Date(t));
        debugger;
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
      if (ep) store.setEncryptedPassword(ep);
    });

    return { s: store.state };
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
