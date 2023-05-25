import { createRouter, createWebHistory } from "vue-router";
import { getUser } from "./libs/firebase";

import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import LoginAfter from "./pages/LoginAfter.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      getUser((user) => {
        if (user === null) {
          next({ name: "login" });
        } else {
          next();
        }
      });
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      getUser((user) => {
        if (user) {
          next({ name: "home" });
        } else {
          next();
        }
      });
    },
  },
  {
    path: "/login-after",
    name: "login after",
    component: LoginAfter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
