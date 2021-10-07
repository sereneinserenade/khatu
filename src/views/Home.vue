<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { gimmeStore } from "@/store";
import { computed } from "@vue/reactivity";

export default {
  name: "Home",
  props: {},
  setup() {
    const s = gimmeStore();

    let entities = computed(() => s.state.data.entities);

    return { entities };
  },
};
</script>
