<template>
  <div class="home">
    <section class="login-form">
      <h1>Login</h1>
      <n-input
        autofocus
        clearable
        show-count
        v-model:value="username"
        placeholder="Username"
        :maxlength="20"
      />
      <n-input
        type="password"
        show-password-on="mousedown"
        placeholder="Password"
        show-count
        v-model:value="password"
        :maxlength="20"
        @change="updatePassword"
      />

      <section class="actions">
        <n-button
          @click="clearVals"
          size="medium"
          type="info"
          block
          dashed
          :maxlength="10"
        >
          Clear
        </n-button>

        <n-button size="medium" block type="info"> Submit </n-button>
      </section>

      <section class="new-user">
        New user ?
        <n-button text tag="a" type="info"> Sign up here -> </n-button>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { gimmeStore } from "@/store";
import { ref } from "vue";
import { NButton, NInput } from "naive-ui";
export default {
  name: "Home",
  props: {},
  components: {
    NButton,
    NInput,
  },
  setup() {
    const username = ref("");
    const password = ref("");

    const updatePassword = (pass: string): void => {
      password.value = pass;
    };

    const clearVals = (): void => {
      username.value = password.value = "";
    };

    return { username, password, updatePassword, clearVals };
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 30%;

    h1 {
      text-align: center;
    }

    .n-input {
      margin: 1em 0;
    }

    .actions {
      display: flex;
      flex-direction: row;
      gap: 4px;
    }

    .new-user {
      margin-top: 1em;
    }
  }
}
</style>
