<template>
  <div class="sign-up">
    <section class="sign-up-form">
      <h1>Sign Up</h1>

      <n-input
        autofocus
        clearable
        v-model:value="username"
        placeholder="Username"
        :maxlength="20"
        size="large"
      />
      <n-input
        type="password"
        show-password-on="mousedown"
        placeholder="Password"
        v-model:value="password"
        :maxlength="20"
        size="large"
        :minLength="8"
      />
      <n-input
        type="password"
        show-password-on="mousedown"
        placeholder="Confirm Password"
        v-model:value="confirmPassword"
        :maxlength="20"
        size="large"
        :minLength="8"
      />

      <span v-if="showError" class="error"> The passwords don't match. </span>

      <section class="actions">
        <n-button
          @click="clearValues"
          size="medium"
          type="info"
          block
          dashed
          :maxlength="10"
        >
          Clear
        </n-button>

        <n-button :disabled="!showError" size="medium" block type="info">
          Submit
        </n-button>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
// import { gimmeStore } from "@/store";
import { ref, watchEffect } from "vue";
import { NButton, NInput } from "naive-ui";
import { crypt, decrypt } from "@/utils/security";

export default {
  name: "SignUp",
  props: {},
  components: {
    NButton,
    NInput,
  },
  setup() {
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const showError = ref(false);

    watchEffect(() => {
      if (confirmPassword.value && password.value) {
        if (confirmPassword.value !== password.value) showError.value = true;
        else showError.value = false;
      } else {
        showError.value = false;
      }
    });

    const clearValues = (): void => {
      username.value = password.value = confirmPassword.value = "";
    };

    const submit = (): void => {
      if (showError.value) return;
      const encryptedPass = crypt(username.value, password.value);
    };

    return {
      username,
      password,
      confirmPassword,
      showError,
      clearValues,
    };
  },
};
</script>

<style lang="scss">
.sign-up {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .sign-up-form {
    width: 30%;

    h1 {
      text-align: center;
    }

    .n-input {
      margin: 1em 0;
    }

    .error {
      color: rgb(241, 119, 62);
    }

    .actions {
      display: flex;
      flex-direction: row;
      gap: 4px;
      margin-top: 1em;
    }
  }
}
</style>
