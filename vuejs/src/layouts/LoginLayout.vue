<script setup>
import { RouterView, useRouter } from "vue-router";

import { auth } from "../libs/firebase";

const router = useRouter();

if (auth.currentUser) router.push("/");
</script>

<template>
  <RouterView />
</template>
