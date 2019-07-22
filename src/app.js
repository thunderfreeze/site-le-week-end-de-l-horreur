import Vue from "vue";

import App from "@/app.vue";
import router from "@/router";
import store from "@/store";

// See: https://vuejs.org/v2/api/#productionTip
Vue.config.productionTip = false;

const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
