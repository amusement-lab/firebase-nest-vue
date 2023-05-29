import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "./layouts/HomeLayout.vue";
import LoginLayout from "./layouts/LoginLayout.vue"

import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";

const routes = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    component: LoginLayout,
    children: [
      {
        path: "/login",
        component: Login,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
