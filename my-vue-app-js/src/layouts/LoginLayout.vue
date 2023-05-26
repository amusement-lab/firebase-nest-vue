<script setup>
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import { getLoginUser } from "../libs/firebase";

const router = useRouter();

getLoginUser((user) => {
  if (!user) {
    router.push("/login");
  } else {
    router.push("/");
  }
});
</script>

<template>
  <RouterView />
</template>
