<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";

import { auth, provider } from "../libs/firebase";
import Loading from "../components/Loading.vue";

const router = useRouter();

const loadingStatus = ref(false);

async function handleLogin() {
  signInWithRedirect(auth, provider);
}

async function redirectCheck() {
  loadingStatus.value = true;
  const result = await getRedirectResult(auth);
  if (result && result.user) {
    router.push("/");
  } else {
    loadingStatus.value = false;
  }
}

onMounted(() => {
  redirectCheck();
});

if (auth.currentUser) router.push("/");
</script>

<template>
  <Loading v-if="loadingStatus" />
  <template v-else>
    <p>Login Page</p>
    <button @click="handleLogin">Login with Google</button>
  </template>
</template>
