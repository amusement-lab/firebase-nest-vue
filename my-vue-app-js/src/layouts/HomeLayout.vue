<script setup>
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import { getLoginUser } from "../libs/firebase";

const router = useRouter();

const loginStatus = ref(false);

getLoginUser((user) => {
  if (user) {
    loginStatus.value = true;
  } else {
    router.push("/login");
  }
});
</script>

<template>
  <RouterView v-if="loginStatus" />
  <template v-else>
    <h1>LOADING</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
      width="50"
      height="50"
      style="object-fit: cover"
    />
  </template>
</template>
