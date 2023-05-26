<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ofetch } from "ofetch";
import { auth, signOut } from "../libs/firebase";

const router = useRouter();

async function handleLogout() {
  signOut(auth).then(() => {
    router.push("/login");
  });
}

function toLogin() {
  router.push("/login");
}

const token = ref("");
async function getIdToken() {
  token.value = auth.currentUser.accessToken;
}

const myData = ref({ name: "", email: "", picture: "" });
async function getData() {
  const jsonData = await ofetch("http://localhost:3000/verify/firebase", {
    method: "POST",
    body: { token: auth.currentUser.accessToken },
  });
  myData.value = jsonData;
}
getData();
</script>

<template>
  <p>Home Page</p>
  <!-- <img :src="myData.picture" width="50" height="50" style="object-fit: cover" /> -->
  <p>Name: {{ myData.name }}</p>
  <p>Email: {{ myData.email }}</p>
  <p v-if="token">Client Token: {{ token }}</p>
  <button @click="toLogin">To Login Page</button>
  <button @click="getIdToken">Client Token</button>
  <button @click="handleLogout">Logout</button>
</template>
