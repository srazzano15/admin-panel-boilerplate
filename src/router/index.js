import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import store from "@/store/index";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Cookies.get("token") || store.getters.authenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
