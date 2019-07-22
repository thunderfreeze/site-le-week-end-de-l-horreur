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
    path: "/question/:question_number",
    name: "Question",
    component: () => import("@/pages/question"),
    props: true,
    meta: {
      bodyClass: "question"
    }
  },
  {
    path: "/reponse/:answer_number",
    name: "Answer",
    component: () => import("@/pages/answer"),
    props: true,
    meta: {
      bodyClass: "answer"
    }
  }
];

let router = new Router({
  routes // short for `routes: routes`,
});

router.beforeEach((to, from, next) => {
  let toBodyClass = to.meta.bodyClass;
  let fromBodyClass = from.meta.bodyClass;

  if (to.params.question_number) toBodyClass += `-${to.params.question_number}`;

  if (from.params.question_number)
    fromBodyClass += `-${from.params.question_number}`;

  document.body.classList.add(toBodyClass);
  document.body.classList.remove(fromBodyClass);

  next();
});

export default router;
