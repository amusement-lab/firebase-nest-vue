<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

async function handleLogin() {
  router.push("/login-after");
}
</script>

<template>
  <p>Login Page</p>
  <button @click="handleLogin">Login with Google</button>
</template>
