<script setup>
import { onMounted, ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../libs/firebase";
import Loading from "../components/Loading.vue";

const router = useRouter();

const loginStatus = ref(true);

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginStatus.value = false;
    } else {
      router.push("/login");
    }
  });
});
</script>

<template>
  <Loading v-if="loginStatus" />
  <RouterView v-else />
</template>
