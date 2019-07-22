import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    score: 0
  },
  getters: {
    score: state => state.score
  },
  mutations: {
    incrementScore(state) {
      state.score++;
    }
  }
});

export default store;
