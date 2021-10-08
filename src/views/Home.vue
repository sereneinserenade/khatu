<template>
  <div class="home">
    <n-space vertical>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
            :expand-icon="expandIcon"
          />
        </n-layout-sider>
        <n-layout>
          <section>Content</section>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script lang="ts">
import { h, ref } from "vue";
import store from "@/store";
import {
  NSpace,
  NLayout,
  NLayoutSider,
  NMenu,
  NIcon,
  MenuOption,
} from "naive-ui";
import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";

const menuOptions = [
  {
    label: "Hear the Wind Sing",
    key: "hear-the-wind-sing",
    href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
  },
  {
    label: "Pinball 1973",
    key: "pinball-1973",
    disabled: true,
    children: [
      {
        label: "Rat",
        key: "rat",
      },
    ],
  },
  {
    label: "A Wild Sheep Chase",
    key: "a-wild-sheep-chase",
    disabled: true,
  },
];

export default {
  name: "Home",
  props: {},
  components: {
    NSpace,
    NLayout,
    NLayoutSider,
    NMenu,
  },
  setup() {
    const collapsed = ref(false);

    const expandIcon = () => {
      return h(NIcon, null, { default: () => h(CaretDownOutline) });
    };

    const renderMenuLabel = (option: MenuOption) => {
      if ("href" in option) {
        return h(
          "a",
          { href: option.href, target: "_blank" },
          option.label as string
        );
      }
      return option.label;
    };

    const renderMenuIcon = (option: MenuOption) => {
      // return render placeholder for indent
      if (option.key === "sheep-man") return true;
      // return falsy, don't render icon placeholder
      if (option.key === "food") return null;
      return h(NIcon, null, { default: () => h(BookmarkOutline) });
    };

    return {
      collapsed,
      expandIcon,
      renderMenuIcon,
      renderMenuLabel,
      menuOptions,
    };
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: row;
  .navbar {
    max-width: 30%;
  }
}
</style>
