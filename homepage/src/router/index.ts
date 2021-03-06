import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/download",
    name: "download",
    component: () => import("../components/download.vue"),
  },
  {
    path: "/imprint",
    name: "imprint",
    component: () => import("../components/imprint.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
