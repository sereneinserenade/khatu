<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import store from "@/store";

export default {
  name: "Home",
  props: {},
  setup() {
    let entities = computed(() => store.state.data.entities);

    return { entities };
  },
};
</script>
