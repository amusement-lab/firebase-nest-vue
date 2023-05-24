<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { login, getTokenAndRedirect } from "../libs/firebase";

const router = useRouter();

onMounted(() => {
  getTokenAndRedirect(() => {
    router.push("/");
  });
});
</script>

<template>
  <p>Login Page</p>
  <button @click="login">Login with Google</button>
</template>
