import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages")
  },
  {
    path: "/a-propos",
    name: "About",
    component: () => import("@/pages/about")
  }
];

export default new Router({
  routes // short for `routes: routes`,
});
