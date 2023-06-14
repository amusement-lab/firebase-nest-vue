<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { ofetch } from "ofetch";
import { signOut } from "firebase/auth";

import { auth } from "../libs/firebase";

const router = useRouter();

async function handleLogout() {
  await signOut(auth);
  router.push("/login");
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
    headers: {
      Authorization: auth.currentUser.accessToken,
    },
  });
  myData.value = jsonData;
}

getData();
</script>

<template>
  <p>Home Page</p>
  <img
    v-if="myData.photo"
    :src="myData.photo"
    referrerpolicy="no-referrer"
    width="50"
    height="50"
    style="object-fit: cover"
  />
  <p>Name: {{ myData.name }}</p>
  <p>Email: {{ myData.email }}</p>
  <p v-if="token">Client Token: {{ token }}</p>

  <button @click="toLogin">To Login Page</button>
  <button @click="getIdToken">Client Token</button>
  <button @click="handleLogout">Logout</button>
</template>
