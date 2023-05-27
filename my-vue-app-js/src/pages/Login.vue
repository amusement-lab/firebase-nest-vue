<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import { login, auth } from "../libs/firebase";
import { getRedirectResult } from "firebase/auth";

const router = useRouter();

const loading = ref(false);

async function handleLogin() {
  // router.push("/login-after");
  loading.value = true;
  login();
}

async function redirectCheck() {
  loading.value = true;
  const result = await getRedirectResult(auth);
  if (result?.user) {
    router.push("/");
  } else {
    loading.value = false;
  }
}

redirectCheck();
</script>

<template>
  <p>Login Page</p>
  <img
    v-if="loading"
    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
    width="50"
    height="50"
    style="object-fit: cover"
  />
  <button v-else @click="handleLogin">Login with Google</button>
</template>
