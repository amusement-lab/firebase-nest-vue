<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { logout, getUser } from "../libs/firebase";

const router = useRouter();

function handleLogout() {
  logout(() => {
    router.push("/login");
  });
}

function toLogin() {
  router.push("/login");
}

const token = ref("");
function getIdToken() {
  getUser(async (user) => {
    token.value = await user.getIdToken();
  });
}
</script>

<template>
  <p>Home Page</p>
  <img
    src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
    width="50"
    height="50"
    style="object-fit: cover"
  />
  <p>Name: Dipadana Putu</p>
  <p>Email: dipadana@gmail.com</p>
  <p v-if="token">Client Token: {{ token }}</p>
  <button @click="toLogin">To Login Page</button>
  <button @click="getIdToken">Client Token</button>
  <button @click="handleLogout">Logout</button>
</template>
