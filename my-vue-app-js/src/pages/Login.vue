<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { login, getUser, redirectResult } from "../libs/firebase";

const router = useRouter();

const loadingStatus = ref(false);

async function handleLogin() {
  loadingStatus.value = true;
  login();
}

onMounted(() => {
  redirectResult(() => {
    router.push("/");
  });
});
</script>

<template>
  <p>Login Page</p>
  <img
    v-if="loadingStatus"
    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
    width="50"
    height="50"
    style="object-fit: cover"
  />
  <button v-else @click="handleLogin">Login with Google</button>
</template>
