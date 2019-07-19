import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages"),
    meta: {
      bodyClass: "home"
    }
  },
  {
    path: "/a-propos",
    name: "About",
    component: () => import("@/pages/about"),
    meta: {
      bodyClass: "about"
    }
  },
  {
    path: "/horaire",
    name: "Schedule",
    component: () => import("@/pages/schedule"),
    meta: {
      bodyClass: "schedule"
    }
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("@/pages/question"),
    meta: {
      bodyClass: "question"
    }
  },
  {
    path: "/reponse",
    name: "Answer",
    component: () => import("@/pages/answer"),
    meta: {
      bodyClass: "answer"
    }
  }
];

let router = new Router({
  routes // short for `routes: routes`,
});

router.beforeEach((to, from, next) => {
  document.body.classList.add(to.meta.bodyClass);
  document.body.classList.remove(from.meta.bodyClass);

  console.log("from", from.meta.bodyClass);
  console.log("to", to.meta.bodyClass);

  next();
});

export default router;
