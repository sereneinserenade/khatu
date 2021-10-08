<template>
  <div class="home">
    <section class="login-form">
      <h1>Login</h1>
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

        <n-button @click="submit" size="medium" block type="info">
          Submit
        </n-button>
      </section>

      <section v-if="showSignUp" class="new-user">
        New user ?
        <n-button @click="goToSignUp" text tag="a" type="info">
          Sign up here ->
        </n-button>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
// import { gimmeStore } from "@/store";
import { computed, ref } from "vue";
import { NButton, NInput } from "naive-ui";
import { useRouter } from "vue-router";
import { crypt } from "@/utils";
import store from "@/store";

export default {
  name: "Home",
  props: {},
  components: {
    NButton,
    NInput,
  },
  setup() {
    const router = useRouter();

    const currentEncryptedPass = computed(() => store.state.encryptedPassword);

    const username = ref("");
    const password = ref("");

    const clearValues = (): void => {
      username.value = password.value = "";
    };

    const goToSignUp = (): void => {
      router.push({
        name: "signup",
      });
    };

    const submit = (): void => {
      const [uname, pass] = [username.value, password.value];

      if (uname && pass) {
        const encryptedVal = crypt(uname, pass);

        if (currentEncryptedPass.value === encryptedVal) {
          router.push({
            name: "home",
          });
        }
      }
    };

    const showSignUp = computed(() => !currentEncryptedPass.value.length);

    return { username, password, clearValues, goToSignUp, submit, showSignUp };
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
