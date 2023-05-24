<script setup>
import { logout } from "../libs/firebase";
</script>

<template>
  <p>Home Page</p>
  <button @click="logout">Logout</button>
</template>
