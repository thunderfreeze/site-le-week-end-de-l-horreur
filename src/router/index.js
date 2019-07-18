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
  },
  {
    path: "/horaire",
    name: "Schedule",
    component: () => import("@/pages/schedule")
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("@/pages/question")
  },
  {
    path: "/reponse",
    name: "Answer",
    component: () => import("@/pages/answer")
  }
];

export default new Router({
  routes // short for `routes: routes`,
});
