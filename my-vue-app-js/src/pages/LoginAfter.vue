<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { login, getUser, redirectResult } from "../libs/firebase";

const router = useRouter();

onMounted(() => {
  getUser((user) => {
    if (!user) {
      login();
    } else {
      router.push("/");
    }
  });
});
</script>

<template>
  <h1>LOADING</h1>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
    width="50"
    height="50"
    style="object-fit: cover"
  />
</template>
