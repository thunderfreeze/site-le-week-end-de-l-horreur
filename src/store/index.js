import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    score: 0,
    pastAnswers: []
  },
  getters: {
    score: state => state.score,
    pastAnswers: state => state.pastAnswers
  },
  mutations: {
    incrementScore(state) {
      state.score < 10 ? state.score++ : state.score;
    },
    pastAnswer(state, answerNumber) {
      state.pastAnswers.push(parseInt(answerNumber));
    }
  },
  actions: {
    correctAnswer({ commit, state }, answerNumber) {
      if (!state.pastAnswers.includes(answerNumber)) {
        commit("pastAnswer", answerNumber);
        commit("incrementScore");
      }
    },
    wrongAnswer({ commit, state }, answerNumber) {
      if (!state.pastAnswers.includes(answerNumber)) {
        commit("pastAnswer", answerNumber);
      }
    }
  }
});

export default store;
