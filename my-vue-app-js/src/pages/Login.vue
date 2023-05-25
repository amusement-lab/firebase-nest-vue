<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loadingStatus = ref(false);

async function handleLogin() {
  loadingStatus.value = true;
  router.push("/login-after");
}
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
